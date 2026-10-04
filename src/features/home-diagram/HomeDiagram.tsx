import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { loadContentFile, loadManifest } from '@/content/loaders';
import type { ManifestEntry } from '@/content/types';
import { UI_TEXT } from '@/config/site';
import { cn } from '@/lib/cn';
import { plainText } from '@/lib/text';
import './diagram.css';
import { DiagramNode } from './DiagramNode';
import { ExamplesBlock, TopicBlock } from './DiagramBlocks';
import {
  INITIAL_STATE,
  ROOT_ID,
  buildColumns,
  closeDeepest,
  columnKey,
  toggleExamples,
  toggleNode,
  toggleRoot,
  type Column,
  type DiagramState,
  type FileStatus,
} from './model';
import { useDiagramLayout, type ColumnRect } from './useDiagramLayout';
import { useLeavingColumns, type CanvasSize, type ColumnBox } from './useLeavingColumns';

const columnId = (index: number) => `diagram-col-${index}`;

const WIDTH = {
  root: 'w-[140px] md:w-[160px] lg:w-[168px]',
  chapter: 'w-[min(78vw,280px)] md:w-[260px] lg:w-[280px]',
  item: 'w-[min(80vw,300px)] md:w-[280px] lg:w-[300px]',
  block: 'w-[min(92vw,640px)] md:w-[min(70vw,640px)] lg:w-[640px]',
} as const;

function widthOf(column: Column): string {
  if (column.kind === 'block' || column.kind === 'examples') return WIDTH.block;
  return column.kind === 'nodes' && column.index === 1 ? WIDTH.chapter : WIDTH.item;
}

/** Plain-text label of an open control, for the live region. */
function labelOf(id: string, columns: Column[], chapters: ManifestEntry[]): string {
  if (id.startsWith('chapter:')) {
    return chapters.find((c) => `chapter:${c.chapter}` === id)?.title ?? id;
  }
  for (const column of columns) {
    if (column.kind === 'nodes') {
      const item = column.items.find((i) => i.id === id);
      if (item) return plainText(item.title);
    }
  }
  return id;
}

function StatusCard({ children }: { children: ReactNode }) {
  return (
    <div className="diagram-enter relative z-10 rounded-lg border border-hairline bg-canvas p-4">
      {children}
    </div>
  );
}

type ColumnShellProps = {
  column: Column;
  onLeave: (column: Column, box: ColumnBox) => void;
  readCanvasSize: () => CanvasSize;
  readRect: (key: string) => ColumnRect | undefined;
  className: string;
  children: ReactNode;
};

/**
 * A live column. When it is removed it reports where it was, so the diagram can keep a fading
 * copy there. Measured while still attached; a real removal is told apart from a StrictMode
 * test unmount by checking in a microtask whether the element is still in the page.
 */
function ColumnShell({
  column,
  onLeave,
  readCanvasSize,
  readRect,
  className,
  children,
}: ColumnShellProps) {
  const ref = useRef<HTMLDivElement>(null);
  const latest = useRef(column);
  useLayoutEffect(() => {
    latest.current = column;
  });
  const key = columnKey(column);
  useLayoutEffect(() => {
    const el = ref.current;
    return () => {
      if (!el) return;
      // Where it was is read from the last layout pass, not from the page: columns that are
      // removed in the same commit are taken out one by one and would slide into each other.
      const rect = readRect(key) ?? {
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
      };
      const box = { ...rect, canvas: readCanvasSize() };
      queueMicrotask(() => {
        if (!el.isConnected) onLeave(latest.current, box);
      });
    };
  }, [key, onLeave, readCanvasSize, readRect]);
  return (
    <div
      ref={ref}
      id={columnId(column.index)}
      data-col={column.index}
      data-kind={column.kind}
      data-parent={column.parentId}
      data-col-key={key}
      className={className}
    >
      {children}
    </div>
  );
}

/**
 * The home diagram: Midterm, chapters, sections, topics, then the explanation block and its
 * examples. It always grows to the right and nothing overlays anything.
 */
export function HomeDiagram() {
  const [state, setState] = useState<DiagramState>(INITIAL_STATE);
  const [chapters, setChapters] = useState<ManifestEntry[]>([]);
  const [manifestFailed, setManifestFailed] = useState(false);
  const [files, setFiles] = useState<Record<string, FileStatus>>({});
  const [announcement, setAnnouncement] = useState('');

  const requested = useRef(new Set<string>());
  const pendingFocus = useRef<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const fetchManifest = useCallback(() => {
    loadManifest()
      .then((m) => {
        setManifestFailed(false);
        setChapters(m.collections.summary.filter((e) => e.chapter !== '00'));
      })
      .catch(() => setManifestFailed(true));
  }, []);

  useEffect(() => {
    fetchManifest();
  }, [fetchManifest]);

  const ensureFile = useCallback((chapter: string, retry = false) => {
    if (requested.current.has(chapter) && !retry) return;
    requested.current.add(chapter);
    setFiles((f) => ({ ...f, [chapter]: 'loading' }));
    loadContentFile('summary', chapter)
      .then((file) => setFiles((f) => ({ ...f, [chapter]: file })))
      .catch(() => {
        requested.current.delete(chapter);
        setFiles((f) => ({ ...f, [chapter]: 'error' }));
      });
  }, []);

  const columns = useMemo(() => buildColumns(chapters, files, state), [chapters, files, state]);
  const signature = columns.map(columnKey).join('|') + (state.rootOpen ? '+' : '-');
  const lastKey = columns.length > 0 ? columnKey(columns[columns.length - 1]) : null;
  const deepest = columns.length > 0 ? columns[columns.length - 1].index : 0;
  const { readRect } = useDiagramLayout(scrollRef, canvasRef, svgRef, signature, lastKey, deepest);
  const { leaving, onLeave, readCanvasSize } = useLeavingColumns(scrollRef, canvasRef, deepest);

  useLayoutEffect(() => {
    const id = pendingFocus.current;
    pendingFocus.current = null;
    if (!id) return;
    canvasRef.current
      ?.querySelectorAll<HTMLElement>('[data-node-id]')
      .forEach((el) => el.dataset.nodeId === id && !el.closest('[data-leaving]') && el.focus());
  }, [state]);

  const apply = (next: DiagramState, message: string) => {
    setState(next);
    setAnnouncement(message);
  };

  const onRoot = () => {
    const next = toggleRoot(state);
    apply(next, `${next.rootOpen ? 'เปิด' : 'ปิด'} Midterm`);
  };

  const onNode = (column: number, id: string) => {
    const wasOpen = state.path[column - 1] === id;
    if (column === 1 && !wasOpen) ensureFile(id.slice('chapter:'.length));
    apply(
      toggleNode(state, column, id),
      `${wasOpen ? 'ปิด' : 'เปิด'} ${labelOf(id, columns, chapters)}`,
    );
  };

  const onExamples = (leafId: string) => {
    const opening = state.examplesFor !== leafId;
    apply(toggleExamples(state, leafId), opening ? 'เปิดตัวอย่าง' : 'ปิดตัวอย่าง');
  };

  const focusIn = (selector: string, last = false) => {
    const found = canvasRef.current?.querySelectorAll<HTMLElement>(selector);
    if (!found || found.length === 0) return false;
    found[last ? found.length - 1 : 0].focus();
    return true;
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      const result = closeDeepest(state);
      if (!result.focusId) return;
      event.preventDefault();
      pendingFocus.current = result.focusId;
      apply(result.state, result.state.rootOpen ? 'ปิดส่วนที่เปิดอยู่' : 'ปิด Midterm');
      return;
    }
    const target = event.target;
    if (!(target instanceof HTMLElement) || !target.dataset.nodeId || target.closest('article')) {
      return;
    }
    const col = target.closest<HTMLElement>('[data-col]');
    const index = Number(col?.dataset.col ?? -1);
    if (index < 0) return;
    const nodesOf = (i: number) =>
      Array.from(
        canvasRef.current?.querySelectorAll<HTMLElement>(`[data-col="${i}"] [data-node-id]`) ?? [],
      );
    const siblings = nodesOf(index);
    const at = siblings.indexOf(target);
    let moved = true;
    if (event.key === 'ArrowDown') siblings[at + 1]?.focus();
    else if (event.key === 'ArrowUp') siblings[at - 1]?.focus();
    else if (event.key === 'ArrowRight') {
      const first = nodesOf(index + 1)[0];
      if (first) first.focus();
      else if (!focusIn(`[data-col="${index + 1}"] button`)) moved = false;
    } else if (event.key === 'ArrowLeft') {
      const parent = nodesOf(index - 1).find((el) => el.dataset.open === 'true');
      if (parent) parent.focus();
      else moved = false;
    } else moved = false;
    if (moved) event.preventDefault();
  };

  const renderColumn = (column: Column, live: boolean) => (
    <>
      {column.kind === 'nodes'
        ? column.items.map((item, order) => (
            <DiagramNode
              key={item.id}
              id={item.id}
              number={item.number}
              title={item.title}
              open={column.openId === item.id}
              controls={live && column.openId === item.id ? columnId(column.index + 1) : undefined}
              tone={column.index === 1 ? 'chapter' : 'item'}
              order={live ? order : 0}
              onToggle={() => onNode(column.index, item.id)}
            />
          ))
        : null}
      {column.kind === 'loading' ? (
        <StatusCard>
          <p role="status" className="type-body-sm text-muted">
            {UI_TEXT.loading}
          </p>
        </StatusCard>
      ) : null}
      {column.kind === 'error' ? (
        <StatusCard>
          <p role="alert" className="type-body-sm mb-3 text-ink">
            {UI_TEXT.loadError}
          </p>
          <Button variant="secondary" onClick={() => ensureFile(column.chapter, true)}>
            {UI_TEXT.retry}
          </Button>
        </StatusCard>
      ) : null}
      {column.kind === 'block' ? (
        <TopicBlock
          node={column.node}
          examplesOpen={state.examplesFor === column.node.id}
          examplesColumnId={columnId(column.index + 1)}
          onToggleExamples={() => onExamples(column.node.id)}
        />
      ) : null}
      {column.kind === 'examples' ? <ExamplesBlock node={column.node} /> : null}
    </>
  );

  return (
    <div>
      <div
        ref={scrollRef}
        role="region"
        aria-label="Midterm diagram"
        onKeyDown={onKeyDown}
        className="diagram-scroll overflow-x-auto pb-6"
      >
        <div
          ref={canvasRef}
          className="relative flex w-max min-w-full items-start gap-8 pr-4 pl-4 md:gap-12 md:pr-6 md:pl-[max(1.5rem,calc((100%-1200px)/2+1.5rem))]"
        >
          <svg
            ref={svgRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          />
          <div data-col="0" className={cn('shrink-0', WIDTH.root)}>
            <button
              type="button"
              data-node-id={ROOT_ID}
              aria-expanded={state.rootOpen}
              aria-controls={state.rootOpen ? columnId(1) : undefined}
              onClick={onRoot}
              className="type-button relative z-10 flex h-14 w-full items-center justify-between gap-2 rounded-lg bg-primary-active px-4 text-on-primary"
            >
              Midterm
              <Icon name={state.rootOpen ? 'minus' : 'plus'} size={18} />
            </button>
          </div>
          {columns.map((column) => (
            <ColumnShell
              key={columnKey(column)}
              column={column}
              onLeave={onLeave}
              readCanvasSize={readCanvasSize}
              readRect={readRect}
              className={cn('flex shrink-0 flex-col gap-3', widthOf(column))}
            >
              {renderColumn(column, true)}
            </ColumnShell>
          ))}
          {leaving.map((item) => (
            <div
              key={`leaving-${item.token}`}
              data-leaving
              aria-hidden="true"
              inert
              style={{
                position: 'absolute',
                left: item.left,
                top: item.top,
                width: item.width,
                animationDelay: `${item.delay}ms`,
              }}
              className={cn('diagram-leave flex flex-col gap-3', widthOf(item.column))}
            >
              {renderColumn(item.column, false)}
            </div>
          ))}
        </div>
      </div>
      {manifestFailed ? (
        <div role="alert" className="mt-4 flex items-center gap-3">
          <p className="type-body-sm text-ink">{UI_TEXT.loadError}</p>
          <Button variant="secondary" onClick={fetchManifest}>
            {UI_TEXT.retry}
          </Button>
        </div>
      ) : null}
      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>
    </div>
  );
}
