/** Where on the screen the student is reading, as a share of the viewport height. */
const READ_LINE = 0.4;
/** Smallest piece of the anchor that stays on screen, so the page never lands past it. */
const KEEP_VISIBLE = 120;
/** How long the anchor is held while the blocks around it animate (a little over the animation). */
const HOLD_MS = 560;

export type ScrollAnchor = { el: Element; top: number };

const EVENTS = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const;

/** The browser's own scroll anchoring would fight the frame-by-frame correction below. */
function lockNativeAnchoring(lock: boolean) {
  document.documentElement.style.overflowAnchor = lock ? 'none' : '';
}

/**
 * The card the student is reading (marked `data-anchor`): the one under the reading line, or else
 * the first one below it. Cards keep a box even when their solutions are hidden or the browser
 * skips drawing their content. Also switches the native scroll anchoring off until `holdAnchor` (or `releaseAnchor`).
 */
export function captureAnchor(): ScrollAnchor | null {
  const line = window.innerHeight * READ_LINE;
  let found: Element | undefined;
  for (const el of document.querySelectorAll('[data-anchor]')) {
    const rect = el.getBoundingClientRect();
    if (rect.bottom > line) {
      found = el;
      break;
    }
    found = el; // the last one above the line, if none reaches it
  }
  if (!found) return null;
  lockNativeAnchoring(true);
  return { el: found, top: found.getBoundingClientRect().top };
}

/** Gives scrolling back to the browser (when no hold follows a capture). */
export function releaseAnchor(): void {
  lockNativeAnchoring(false);
}

/**
 * Keeps the anchor at the same place on screen while the layout around it changes size, frame by
 * frame, so the page follows the animation instead of jumping. Any wheel, touch or key press by
 * the student hands control back at once.
 */
export function holdAnchor(anchor: ScrollAnchor): void {
  const { el, top } = anchor;
  let frame = 0;
  const finish = () => {
    cancelAnimationFrame(frame);
    for (const type of EVENTS) window.removeEventListener(type, finish);
    lockNativeAnchoring(false);
  };
  const correct = () => {
    if (!el.isConnected) return false;
    const rect = el.getBoundingClientRect();
    const wanted = Math.max(top, KEEP_VISIBLE - rect.height);
    const delta = rect.top - wanted;
    if (Math.abs(delta) > 0.5) window.scrollBy({ top: delta, behavior: 'instant' });
    return true;
  };
  if (!correct()) return finish();

  const start = performance.now();
  const step = () => {
    if (performance.now() - start > HOLD_MS || !correct()) return finish();
    frame = requestAnimationFrame(step);
  };
  for (const type of EVENTS) window.addEventListener(type, finish, { passive: true });
  frame = requestAnimationFrame(step);
}
