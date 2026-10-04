import type { ContentFile, ContentNode, Inline, ManifestEntry } from '@/content/types';

/** What the student has opened. Column 1 shows chapters, so `path[0]` is a chapter id, and so on. */
export type DiagramState = {
  rootOpen: boolean;
  path: string[];
  /** Id of the leaf whose example column is open. */
  examplesFor: string | null;
};

export const INITIAL_STATE: DiagramState = { rootOpen: false, path: [], examplesFor: null };

export const ROOT_ID = 'root';

export const chapterNodeId = (chapter: string) => `chapter:${chapter}`;
export const examplesButtonId = (leafId: string) => `ex:${leafId}`;

export type FileStatus = ContentFile | 'loading' | 'error';

export type NodeItem = {
  id: string;
  number?: string;
  title: Inline[];
};

export type Column =
  | { kind: 'nodes'; index: number; parentId: string; items: NodeItem[]; openId: string | null }
  | { kind: 'loading'; index: number; parentId: string; chapter: string }
  | { kind: 'error'; index: number; parentId: string; chapter: string }
  | { kind: 'block'; index: number; parentId: string; node: ContentNode }
  | { kind: 'examples'; index: number; parentId: string; node: ContentNode };

/** "สรุปบทที่ 1 ระบบเลขฐาน..." becomes number "บทที่ 1" and title "ระบบเลขฐาน...". */
export function chapterItem(entry: ManifestEntry): NodeItem {
  const match = /^สรุป(บทที่\s*\d+)\s+(.*)$/.exec(entry.title);
  return {
    id: chapterNodeId(entry.chapter),
    number: match ? match[1] : undefined,
    title: [{ t: 'text', v: match ? match[2] : entry.title }],
  };
}

export function toggleRoot(state: DiagramState): DiagramState {
  return state.rootOpen ? INITIAL_STATE : { ...state, rootOpen: true };
}

/** Opens or closes a node of column `column` (1 or more). Closing also closes everything to its right. */
export function toggleNode(state: DiagramState, column: number, id: string): DiagramState {
  const keep = state.path.slice(0, column - 1);
  const wasOpen = state.path[column - 1] === id;
  return { ...state, path: wasOpen ? keep : [...keep, id], examplesFor: null };
}

export function toggleExamples(state: DiagramState, leafId: string): DiagramState {
  return { ...state, examplesFor: state.examplesFor === leafId ? null : leafId };
}

/** Esc: closes the deepest open thing. `focusId` is the control that should receive focus next. */
export function closeDeepest(state: DiagramState): { state: DiagramState; focusId: string | null } {
  if (state.examplesFor) {
    return { state: { ...state, examplesFor: null }, focusId: examplesButtonId(state.examplesFor) };
  }
  if (state.path.length > 0) {
    return {
      state: { ...state, path: state.path.slice(0, -1) },
      focusId: state.path[state.path.length - 1],
    };
  }
  if (state.rootOpen) return { state: INITIAL_STATE, focusId: ROOT_ID };
  return { state, focusId: null };
}

/** Section and topic titles already start with their number ("1.2 ..."), so no separate number. */
const toItem = (node: ContentNode): NodeItem => ({ id: node.id, title: node.title });

/** The columns right of the root. A node with children opens a node column, a leaf opens its block. */
export function buildColumns(
  chapters: ManifestEntry[],
  files: Record<string, FileStatus>,
  state: DiagramState,
): Column[] {
  if (!state.rootOpen) return [];
  const columns: Column[] = [];
  const chapterId = state.path[0];
  columns.push({
    kind: 'nodes',
    index: 1,
    parentId: ROOT_ID,
    items: chapters.map(chapterItem),
    openId: chapterId ?? null,
  });
  if (!chapterId) return columns;

  const chapter = chapterId.slice('chapter:'.length);
  const file = files[chapter];
  if (file === undefined || file === 'loading') {
    columns.push({ kind: 'loading', index: 2, parentId: chapterId, chapter });
    return columns;
  }
  if (file === 'error') {
    columns.push({ kind: 'error', index: 2, parentId: chapterId, chapter });
    return columns;
  }

  let siblings = file.root.children;
  let parentId = chapterId;
  for (let index = 2; ; index++) {
    const openId = state.path[index - 1] ?? null;
    columns.push({ kind: 'nodes', index, parentId, items: siblings.map(toItem), openId });
    const open = openId ? siblings.find((n) => n.id === openId) : undefined;
    if (!open) return columns;
    if (open.children.length === 0) {
      columns.push({ kind: 'block', index: index + 1, parentId: open.id, node: open });
      if (state.examplesFor === open.id && open.examples.length > 0) {
        columns.push({
          kind: 'examples',
          index: index + 2,
          parentId: examplesButtonId(open.id),
          node: open,
        });
      }
      return columns;
    }
    siblings = open.children;
    parentId = open.id;
  }
}

/** Key that changes when a column is replaced, so the enter animation runs for it. */
export function columnKey(column: Column): string {
  return `${column.kind}:${column.parentId}`;
}
