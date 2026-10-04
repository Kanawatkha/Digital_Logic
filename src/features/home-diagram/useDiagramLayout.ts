import { useLayoutEffect, type RefObject } from 'react';

const SVG_NS = 'http://www.w3.org/2000/svg';
/** Distance from the top of a block to the point its connector lands on. */
const BLOCK_ANCHOR = 28;
const REVEAL_INSET = 16;
const LEAVE_PATH_MS = 220;

type Box = { x: number; y: number; w: number; h: number };

/** Position inside the canvas from layout offsets, so running enter animations do not skew it. */
function boxIn(el: HTMLElement, canvas: HTMLElement): Box {
  let x = 0;
  let y = 0;
  let cur: HTMLElement | null = el;
  while (cur && cur !== canvas) {
    x += cur.offsetLeft;
    y += cur.offsetTop;
    cur = cur.offsetParent instanceof HTMLElement ? cur.offsetParent : null;
  }
  return { x, y, w: el.offsetWidth, h: el.offsetHeight };
}

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function curve(x1: number, y1: number, x2: number, y2: number): string {
  const mid = x1 + (x2 - x1) / 2;
  return `M${x1} ${y1}C${mid} ${y1} ${mid} ${y2} ${x2} ${y2}`;
}

/**
 * Aligns each column with its parent node, then draws one connector per child. Paths are kept
 * between passes so only new ones play the draw-in animation.
 */
function layout(canvas: HTMLElement, svg: SVGSVGElement): void {
  const columns = Array.from(canvas.querySelectorAll<HTMLElement>('[data-col]'));
  const nodes = new Map<string, HTMLElement>();
  canvas.querySelectorAll<HTMLElement>('[data-node-id]').forEach((el) => {
    if (el.dataset.nodeId && !el.closest('[data-leaving]')) nodes.set(el.dataset.nodeId, el);
  });

  const wanted: { key: string; d: string; active: boolean }[] = [];
  let previousOffset = 0;
  for (const col of columns) {
    const parent = col.dataset.parent ? nodes.get(col.dataset.parent) : undefined;
    if (!parent) {
      previousOffset = 0;
      continue;
    }
    const p = boxIn(parent, canvas);
    const px = p.x + p.w;
    const py = p.y + p.h / 2;
    const kind = col.dataset.kind;

    let offset: number;
    if (kind === 'examples') offset = previousOffset;
    else if (kind === 'block') offset = Math.max(0, py - BLOCK_ANCHOR);
    else offset = Math.max(0, py - col.offsetHeight / 2);
    col.style.marginTop = `${offset}px`;
    previousOffset = offset;

    if (kind === 'nodes') {
      col.querySelectorAll<HTMLElement>('[data-node-id]').forEach((child) => {
        const c = boxIn(child, canvas);
        wanted.push({
          key: `${col.dataset.parent}>${child.dataset.nodeId}`,
          d: curve(px, py, c.x, c.y + c.h / 2),
          active: child.dataset.open === 'true',
        });
      });
    } else {
      const c = boxIn(col, canvas);
      wanted.push({
        key: `${col.dataset.parent}>${col.dataset.colKey}`,
        d: curve(px, py, c.x, c.y + BLOCK_ANCHOR),
        active: true,
      });
    }
  }

  const existing = new Map<string, SVGPathElement>();
  svg.querySelectorAll<SVGPathElement>('path').forEach((el) => {
    if (el.dataset.key) existing.set(el.dataset.key, el);
  });
  const keep = new Set(wanted.map((w) => w.key));
  existing.forEach((el, key) => {
    if (keep.has(key) || el.dataset.leaving === 'true') return;
    // a connector to a closed column is drawn back before it goes
    if (prefersReducedMotion()) {
      el.remove();
      return;
    }
    el.dataset.leaving = 'true';
    setTimeout(() => {
      if (el.dataset.leaving === 'true') el.remove();
    }, LEAVE_PATH_MS);
  });
  for (const w of wanted) {
    let el = existing.get(w.key);
    if (!el) {
      el = document.createElementNS(SVG_NS, 'path');
      el.setAttribute('class', 'diagram-path');
      el.setAttribute('pathLength', '1');
      el.dataset.key = w.key;
      el.dataset.draw = 'true';
      svg.appendChild(el);
    }
    delete el.dataset.leaving;
    el.setAttribute('d', w.d);
    el.dataset.active = String(w.active);
  }
}

/** Scrolls the canvas so the newest column starts 16 px inside the left edge, unless it is already fully visible. */
function reveal(scroller: HTMLElement, canvas: HTMLElement, key: string): void {
  const col = Array.from(canvas.querySelectorAll<HTMLElement>('[data-col-key]')).find(
    (el) => el.dataset.colKey === key,
  );
  if (!col) return;
  const s = scroller.getBoundingClientRect();
  const c = col.getBoundingClientRect();
  if (c.left >= s.left && c.right <= s.right) return;
  scroller.scrollTo({
    left: scroller.scrollLeft + c.left - s.left - REVEAL_INSET,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
}

/**
 * Layout engine of the home diagram: vertical alignment, connectors and auto-scroll.
 * `signature` changes whenever the set of columns changes, `lastKey` names the newest column.
 */
export function useDiagramLayout(
  scrollRef: RefObject<HTMLDivElement | null>,
  canvasRef: RefObject<HTMLDivElement | null>,
  svgRef: RefObject<SVGSVGElement | null>,
  signature: string,
  lastKey: string | null,
): void {
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const svg = svgRef.current;
    if (!canvas || !svg) return;
    const run = () => layout(canvas, svg);
    run();
    window.addEventListener('resize', run);
    let observer: ResizeObserver | undefined;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(run);
      observer.observe(canvas);
      canvas.querySelectorAll('[data-col]').forEach((el) => observer?.observe(el));
    }
    return () => {
      window.removeEventListener('resize', run);
      observer?.disconnect();
    };
  }, [canvasRef, svgRef, signature]);

  useLayoutEffect(() => {
    const scroller = scrollRef.current;
    const canvas = canvasRef.current;
    if (scroller && canvas && lastKey) reveal(scroller, canvas, lastKey);
  }, [scrollRef, canvasRef, lastKey]);
}
