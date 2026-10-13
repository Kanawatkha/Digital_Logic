/**
 * Keeps the card the student is reading at the same place on screen while the solutions open or
 * close around it.
 *
 * The page is not scrolled while the blocks animate. Writing the scroll position on every frame
 * fights the layout (whole pixels, one frame late) and shakes. Instead the page content is drawn
 * shifted with a transform (`[data-scroll-shift]`), which moves in the same frame and by fractions
 * of a pixel. When everything has settled, the transform is traded for one real scroll in a single
 * step, so nothing visibly moves. Sticky parts inside the shifted content (`[data-scroll-pin]`)
 * get the opposite transform so they stay put.
 */

/** Where on the screen the student is reading, as a share of the viewport height. */
const READ_LINE = 0.4;
/** Smallest piece of the anchor that stays on screen, so the page never lands past it. */
const KEEP_VISIBLE = 120;
/** Longest the anchor is held while blocks are still animating or being mounted. */
const HOLD_MAX_MS = 5000;
/** The last stretch the page is too short to scroll (near its top or end) glides in this long. */
const GLIDE_MS = 320;
const GLIDE_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

export type ScrollAnchor = { el: Element; top: number };

let activity = 0;
/** Animations and pending mounts that are still changing the page size keep the hold alive. */
export function trackActivity(delta: 1 | -1): void {
  activity = Math.max(0, activity + delta);
}

/** The hold in progress, settled at once when the switch is flipped again or the student scrolls. */
let settleRunning: (() => void) | null = null;

const EVENTS = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const;

let unlockTimer = 0;
/** The browser's own scroll anchoring would move the page as well. */
function lockNativeAnchoring(lock: boolean) {
  window.clearTimeout(unlockTimer);
  if (lock) {
    document.documentElement.style.overflowAnchor = 'none';
    return;
  }
  // a moment later, so the browser does not "repair" the scroll it has just seen us make
  unlockTimer = window.setTimeout(() => {
    document.documentElement.style.overflowAnchor = '';
  }, 200);
}

const shiftElement = () => document.querySelector<HTMLElement>('[data-scroll-shift]');

/**
 * The card the student is reading (marked `data-anchor`): the one under the reading line, or else
 * the last one above it. Also turns the native scroll anchoring off and freezes the page height,
 * so the page cannot get shorter (and the browser cannot clamp the scroll) until the hold ends.
 */
export function captureAnchor(): ScrollAnchor | null {
  settleRunning?.();
  const line = window.innerHeight * READ_LINE;
  let found: Element | undefined;
  for (const el of document.querySelectorAll('[data-anchor]')) {
    found = el;
    if (el.getBoundingClientRect().bottom > line) break;
  }
  if (!found) return null;
  lockNativeAnchoring(true);
  const shift = shiftElement();
  if (shift) shift.style.minHeight = `${shift.offsetHeight}px`;
  return { el: found, top: found.getBoundingClientRect().top };
}

/** Gives scrolling back to the browser (when no hold follows a capture). */
export function releaseAnchor(): void {
  const shift = shiftElement();
  if (shift) shift.style.minHeight = '';
  lockNativeAnchoring(false);
}

function reducedMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

/** Holds the anchor in place until the page has settled. Call it right after the DOM changed. */
export function holdAnchor(anchor: ScrollAnchor): void {
  const { el, top } = anchor;
  const shift = shiftElement();
  const pins = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-pin]'));
  /** How far the content is drawn up (px) instead of being scrolled. */
  let offset = 0;
  let frame = 0;
  let done = false;

  const draw = () => {
    if (!shift) return;
    shift.style.transform = offset ? `translate3d(0, ${-offset}px, 0)` : '';
    for (const pin of pins) pin.style.transform = offset ? `translate3d(0, ${offset}px, 0)` : '';
  };

  const correct = () => {
    if (!el.isConnected) return false;
    const rect = el.getBoundingClientRect();
    const wanted = Math.max(top, KEEP_VISIBLE - rect.height);
    const delta = rect.top - wanted;
    if (Math.abs(delta) < 0.01) return true;
    if (!shift) {
      window.scrollBy({ top: delta, behavior: 'instant' });
      return true;
    }
    // the page cannot be scrolled above its top
    offset = Math.max(offset + delta, -window.scrollY);
    draw();
    return true;
  };

  const settle = () => {
    if (done) return;
    done = true;
    cancelAnimationFrame(frame);
    for (const type of EVENTS) window.removeEventListener(type, settle, true);
    if (settleRunning === settle) settleRunning = null;
    if (!shift) return lockNativeAnchoring(false);

    // trade the drawn shift for a real scroll in one step: nothing moves on screen
    const target = window.scrollY + offset;
    offset = 0;
    draw();
    shift.style.minHeight = '';
    shift.style.willChange = '';
    const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const final = Math.min(Math.max(target, 0), max);
    window.scrollTo({ top: final, behavior: 'instant' });
    lockNativeAnchoring(false);

    // near the top or the end the page may be too short for the full scroll: glide the rest
    const rest = target - final;
    if (Math.abs(rest) < 0.5 || typeof shift.animate !== 'function' || reducedMotion()) return;
    const glide = { duration: GLIDE_MS, easing: GLIDE_EASING };
    shift.animate([{ transform: `translate3d(0, ${-rest}px, 0)` }, { transform: 'none' }], glide);
    for (const pin of pins)
      pin.animate([{ transform: `translate3d(0, ${rest}px, 0)` }, { transform: 'none' }], glide);
  };

  if (shift) shift.style.willChange = 'transform';
  if (!correct()) return settle();
  // blocks mounted a moment later in the same task (see Collapse) are followed before the paint
  queueMicrotask(() => {
    if (!done) correct();
  });

  const start = performance.now();
  const step = () => {
    const alive = correct();
    if (!alive || activity === 0 || performance.now() - start > HOLD_MAX_MS) return settle();
    frame = requestAnimationFrame(step);
  };
  for (const type of EVENTS)
    window.addEventListener(type, settle, { capture: true, passive: true });
  settleRunning = settle;
  frame = requestAnimationFrame(step);
}
