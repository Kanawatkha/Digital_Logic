import { useCallback, useEffect, useRef, useState } from 'react';

/** A heading counts as "reached" once its top is this far below the top of the window. */
const REACH_OFFSET = 120;
/** Longest a click-triggered smooth scroll is trusted to run; scroll tracking is paused meanwhile. */
const LOCK_MS = 1000;

/**
 * Scroll spy for a list of anchors given in page order. Returns the anchor the reader is at, and
 * `activate`, which sets it at once (a click on the contents) and pauses the spy until the smooth
 * scroll that follows has ended, so the marker glides straight to its target.
 */
export function useActiveAnchor(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');
  const lockUntil = useRef(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (performance.now() < lockUntil.current) return;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = ids[0] ?? '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= REACH_OFFSET) current = id;
        else break;
      }
      setActive(atBottom && ids.length > 0 ? ids[ids.length - 1] : current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onScrollEnd = () => {
      lockUntil.current = 0;
      schedule();
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('scrollend', onScrollEnd);
    schedule();
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('scrollend', onScrollEnd);
      cancelAnimationFrame(frame);
    };
  }, [ids]);

  const activate = useCallback((id: string) => {
    setActive(id);
    lockUntil.current = performance.now() + LOCK_MS;
    // browsers without a scrollend event: resume tracking once the lock has run out
    setTimeout(() => window.dispatchEvent(new Event('scroll')), LOCK_MS + 50);
  }, []);

  return { active, activate };
}
