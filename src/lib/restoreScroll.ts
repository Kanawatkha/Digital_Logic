/** Presses and keys of the student: from the first of them the page is theirs again. */
const USER_EVENTS = ['wheel', 'touchstart', 'mousedown', 'keydown'] as const;

const TIMEOUT_MS = 8000;
const SETTLE_MS = 600;

/**
 * Scrolls the window to `y` once the page is tall enough. The content of a page arrives after the page
 * does (a lazy chunk, then the data), so until then the page goes as far as it can and tries again on
 * every frame; once at `y` it keeps putting it back for a moment, as the layout settles. It stops, and
 * calls `done`, when the place was held for that moment, when the time is out, when the student scrolls
 * or presses a key, or when the returned function is called.
 */
export function restoreScroll(
  y: number,
  done: () => void,
  { timeoutMs = TIMEOUT_MS, settleMs = SETTLE_MS } = {},
): () => void {
  let stopped = false;
  let frame = 0;
  const start = performance.now();
  let lastMove = start;

  const stop = () => {
    if (stopped) return;
    stopped = true;
    cancelAnimationFrame(frame);
    for (const name of USER_EVENTS) window.removeEventListener(name, stop, true);
    done();
  };
  for (const name of USER_EVENTS)
    window.addEventListener(name, stop, { capture: true, passive: true });

  const tick = (now: number) => {
    if (stopped) return;
    const room = document.documentElement.scrollHeight - window.innerHeight;
    const reachable = room >= y - 1;
    const target = reachable ? y : Math.max(0, room);
    if (Math.abs(window.scrollY - target) > 1) {
      window.scrollTo({ top: target, left: 0, behavior: 'instant' });
      lastMove = now;
    }
    if (now - start >= timeoutMs || (reachable && now - lastMove >= settleMs)) stop();
    else frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
  return stop;
}
