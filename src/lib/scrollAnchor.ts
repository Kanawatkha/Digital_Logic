/**
 * Plans one flip of the "show solutions" switch so the card the student is reading stays where it
 * is on screen, without moving the page while anything animates.
 *
 * - Blocks in the card being read and below it animate their height. Growing or shrinking
 *   downward never moves that card, so the screen holds still by itself.
 * - Blocks above it change in one step. A single scroll correction, made before the browser
 *   paints, puts the card back in place, and the cards above that are on screen fade in softly.
 * - Blocks near the screen are mounted in the same step; far ones are mounted later, when the
 *   browser is idle.
 * - For a short while afterwards, any card that still changes size (mounted late, or drawn late
 *   by the browser because of `content-visibility`) is caught by a ResizeObserver, which runs
 *   after layout and before paint, and the card being read is put back before anything shows.
 */

/** Where on the screen the student is reading, as a share of the viewport height. */
const READ_LINE = 0.4;
/** Blocks this many viewport heights above or below the screen are mounted at once. */
const NEAR = 1.5;
/** Room under the sticky header (px) when a card has to be brought back into view. */
const BELOW_HEADER = 80;
/** A card whose top is this many viewport heights above the screen is read from its middle. */
const DEEP = 0.25;
/** Smallest part of the card being read that stays on screen after it shrank. */
const KEEP_VISIBLE = 160;
const FADE_MS = 320;
/** How long after a flip late size changes are still followed. */
const KEEP_MS = 2000;

export type TogglePlan = {
  /** The card being read (marked `data-anchor`), and its top on screen before the flip. */
  anchor: Element | null;
  top: number;
  /** The card is read from deep inside a solution that is about to close: it changes at once. */
  anchorJumps: boolean;
  /** Examples (by id) mounted at once, and the ones that animate. */
  near: Set<string>;
  animate: Set<string>;
};

let current: TogglePlan | null = null;

/** The plan of the flip being rendered, read by every Collapse (see Collapse.tsx). */
export function currentPlan(): TogglePlan | null {
  return current;
}

function reducedMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

const isAfter = (a: Node, b: Node) =>
  (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0;

/** The browser's own scroll anchoring would move the page as well while a flip settles. */
function lockNativeAnchoring(lock: boolean) {
  document.documentElement.style.overflowAnchor = lock ? 'none' : '';
}

const EVENTS = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const;
let stopKeeping: (() => void) | null = null;

/** Scrolls the card being read back to where it was on screen, at once. */
function putBack(plan: TogglePlan, anchor: Element) {
  const delta = anchor.getBoundingClientRect().top - plan.top;
  if (Math.abs(delta) >= 0.5) window.scrollBy({ top: delta, behavior: 'instant' });
}

/**
 * Keeps the card being read in place for a while: every time a card changes size, the page is
 * scrolled back in the same frame. Stops early when the student scrolls.
 */
function keepInPlace(plan: TogglePlan, anchor: Element) {
  stopKeeping?.();
  const fix = () => {
    if (!anchor.isConnected) return stop();
    putBack(plan, anchor);
  };
  const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(fix) : null;
  const timer = window.setTimeout(() => stop(), KEEP_MS);
  const stop = () => {
    observer?.disconnect();
    window.clearTimeout(timer);
    for (const type of EVENTS) window.removeEventListener(type, stop, true);
    lockNativeAnchoring(false);
    if (stopKeeping === stop) stopKeeping = null;
  };
  for (const card of document.querySelectorAll('[data-anchor]')) observer?.observe(card);
  for (const type of EVENTS) window.addEventListener(type, stop, { capture: true, passive: true });
  stopKeeping = stop;
}

/** Measures the page before the switch flips. Call it right before the state changes. */
export function planToggle(closing: boolean): TogglePlan {
  stopKeeping?.();
  const vh = window.innerHeight;
  const line = vh * READ_LINE;
  let anchor: Element | null = null;
  for (const card of document.querySelectorAll('[data-anchor]')) {
    anchor = card;
    if (card.getBoundingClientRect().bottom > line) break;
  }
  const top = anchor ? anchor.getBoundingClientRect().top : 0;
  // reading deep inside a long solution that is about to close
  const anchorJumps = closing && top < -vh * DEEP;
  const motion = !reducedMotion();

  const near = new Set<string>();
  const animate = new Set<string>();
  for (const section of document.querySelectorAll<HTMLElement>('[data-example]')) {
    const id = section.dataset.example;
    if (!id) continue;
    // cards drawn on demand report their own box but not their content's
    const card = section.closest('[data-anchor]') ?? section;
    const rect = card.getBoundingClientRect();
    if (rect.bottom > -vh * NEAR && rect.top < vh * (1 + NEAR)) near.add(id);
    const onScreen = rect.bottom > 0 && rect.top < vh;
    const below = !anchor || (card === anchor ? !anchorJumps : isAfter(anchor, card));
    if (motion && onScreen && below) animate.add(id);
  }

  lockNativeAnchoring(true);
  current = { anchor, top, anchorJumps, near, animate };
  return current;
}

/**
 * Runs right after the flip was committed, before the browser paints: one scroll correction puts
 * the card being read back in place, then the cards above it that changed fade in.
 */
export function settleToggle(plan: TogglePlan): void {
  if (current === plan) current = null;
  const { anchor } = plan;
  if (!anchor?.isConnected) return lockNativeAnchoring(false);

  putBack(plan, anchor);
  const rect = anchor.getBoundingClientRect();
  if (plan.anchorJumps && rect.bottom < BELOW_HEADER + KEEP_VISIBLE) {
    // read from deep inside a solution that just closed: the card is now above the screen, so the
    // page glides back up to it
    lockNativeAnchoring(false);
    window.scrollBy({
      top: rect.top - BELOW_HEADER,
      behavior: reducedMotion() ? 'instant' : 'smooth',
    });
    return;
  }
  keepInPlace(plan, anchor);

  if (reducedMotion()) return;
  const vh = window.innerHeight;
  for (const card of document.querySelectorAll<HTMLElement>('[data-anchor]')) {
    const changed = card === anchor ? plan.anchorJumps : isAfter(card, anchor);
    if (!changed || !card.querySelector('[data-example]')) continue;
    const r = card.getBoundingClientRect();
    if (r.bottom <= 0 || r.top >= vh) continue;
    card.animate([{ opacity: 0.25 }, { opacity: 1 }], { duration: FADE_MS, easing: 'ease-out' });
  }
}
