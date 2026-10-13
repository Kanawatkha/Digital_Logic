/** Pixels the pointer must travel before a press turns into a drag. */
const DRAG_THRESHOLD = 5;

/** The closest ancestor that really scrolls sideways (content wider than the box). */
function findScroller(start: EventTarget | null): HTMLElement | null {
  for (let el = start instanceof Element ? start : null; el; el = el.parentElement) {
    if (!(el instanceof HTMLElement) || el.scrollWidth <= el.clientWidth + 1) continue;
    const { overflowX } = getComputedStyle(el);
    if (overflowX === 'auto' || overflowX === 'scroll') return el;
  }
  return null;
}

/**
 * Lets a mouse user pan every sideways-scrolling area (tables, formulas, figures, the jump chips,
 * the home diagram) by holding the left or right button and dragging. One delegated listener
 * serves the whole page. Touch keeps its native scrolling; a click or context menu that ends a
 * drag is swallowed so links and buttons do not fire by accident.
 */
export function installDragScroll(): () => void {
  let scroller: HTMLElement | null = null;
  let button = 0;
  let startX = 0;
  let startLeft = 0;
  let dragging = false;
  let prevSelect = '';

  const stop = () => {
    if (dragging) {
      document.body.style.userSelect = prevSelect;
      document.body.style.cursor = '';
    }
    scroller = null;
    dragging = false;
  };

  const down = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' || (e.button !== 0 && e.button !== 2)) return;
    if (e.target instanceof Element && e.target.closest('input, textarea, select')) return;
    scroller = findScroller(e.target);
    if (!scroller) return;
    button = e.button;
    startX = e.clientX;
    startLeft = scroller.scrollLeft;
    dragging = false;
  };

  const move = (e: PointerEvent) => {
    if (!scroller) return;
    if (e.buttons === 0) return stop();
    const dx = e.clientX - startX;
    if (!dragging) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return;
      dragging = true;
      prevSelect = document.body.style.userSelect;
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'grabbing';
      window.getSelection()?.removeAllRanges();
    }
    scroller.scrollTo({ left: startLeft - dx, behavior: 'instant' });
  };

  const up = () => {
    const wasDragging = dragging;
    const wasButton = button;
    stop();
    if (!wasDragging) return;
    // the click (left) or context menu (right) that follows the release belongs to the drag
    const type = wasButton === 0 ? 'click' : 'contextmenu';
    const swallow = (ev: Event) => ev.preventDefault();
    const block = (ev: Event) => {
      swallow(ev);
      ev.stopPropagation();
    };
    window.addEventListener(type, block, { capture: true, once: true });
    setTimeout(() => window.removeEventListener(type, block, true), 0);
  };

  document.addEventListener('pointerdown', down);
  document.addEventListener('pointermove', move);
  document.addEventListener('pointerup', up);
  document.addEventListener('pointercancel', stop);
  return () => {
    stop();
    document.removeEventListener('pointerdown', down);
    document.removeEventListener('pointermove', move);
    document.removeEventListener('pointerup', up);
    document.removeEventListener('pointercancel', stop);
  };
}
