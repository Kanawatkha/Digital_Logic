/** Reading line below the sticky header: the example crossing it is the one the student is on. */
const READ_LINE = 96;
/** Part of a shrinking anchor that stays on screen, so the page never lands past it. */
const KEEP_VISIBLE = 80;
/** How long the anchor is held while the blocks around it animate (a little over the animation). */
const HOLD_MS = 520;

export type ScrollAnchor = { el: Element; top: number };

/** The example the student is reading: the first one still reaching below the reading line. */
export function captureAnchor(): ScrollAnchor | null {
  const all = document.querySelectorAll('[data-example]');
  let found: Element | undefined;
  for (const el of all) {
    if (el.getBoundingClientRect().bottom > READ_LINE) {
      found = el;
      break;
    }
  }
  found ??= all[all.length - 1];
  return found ? { el: found, top: found.getBoundingClientRect().top } : null;
}

/**
 * Keeps the anchor at the same place on screen while the layout around it changes size, frame by
 * frame, so the page follows the animation instead of jumping. Any wheel, touch or key press by
 * the student hands control back at once.
 */
export function holdAnchor(anchor: ScrollAnchor): void {
  const { el, top } = anchor;
  const correct = () => {
    if (!el.isConnected) return false;
    const rect = el.getBoundingClientRect();
    const wanted = Math.max(top, KEEP_VISIBLE - rect.height);
    const delta = rect.top - wanted;
    if (Math.abs(delta) > 0.5) window.scrollBy({ top: delta, behavior: 'instant' });
    return true;
  };
  if (!correct()) return;

  const start = performance.now();
  let frame = 0;
  const stop = () => {
    cancelAnimationFrame(frame);
    for (const type of EVENTS) window.removeEventListener(type, stop);
  };
  const step = () => {
    if (performance.now() - start > HOLD_MS || !correct()) return stop();
    frame = requestAnimationFrame(step);
  };
  for (const type of EVENTS) window.addEventListener(type, stop, { passive: true });
  frame = requestAnimationFrame(step);
}

const EVENTS = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const;
