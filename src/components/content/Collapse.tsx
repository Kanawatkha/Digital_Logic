import { flushSync } from 'react-dom';
import { trackPendingMount } from '@/lib/scrollAnchor';
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';

const DURATION = 420;
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

function reducedMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

/** How far outside the screen a box still counts as close (in px; 0 = on screen). */
function isNear(el: HTMLElement, margin: number): boolean {
  const rect = el.getBoundingClientRect();
  return rect.bottom > -margin && rect.top < window.innerHeight + margin;
}

/**
 * Runs `fn` when the browser is idle, so far-away boxes never block the first frames. The page
 * holds the reader's place until it has run (see scrollAnchor).
 */
function whenIdle(fn: () => void): () => void {
  trackPendingMount(1);
  let done = false;
  const run = () => {
    if (done) return;
    done = true;
    fn();
    trackPendingMount(-1);
  };
  if (typeof requestIdleCallback === 'function') {
    const id = requestIdleCallback(run, { timeout: 1500 });
    return () => {
      cancelIdleCallback(id);
      if (!done) {
        done = true;
        trackPendingMount(-1);
      }
    };
  }
  const id = setTimeout(run, 60);
  return () => {
    clearTimeout(id);
    if (!done) {
      done = true;
      trackPendingMount(-1);
    }
  };
}

/**
 * Shows or hides its children with a height animation: opening unrolls the block and slides the
 * text down into place, closing rolls it back up. Hidden children are not rendered at all.
 *
 * Only boxes on or near the screen are mounted at once and animated. The far ones (most of a long
 * page) are mounted a few at a time while the browser is idle, so the switch never freezes the
 * page for a moment before the animation starts.
 */
export function Collapse({ open, children }: { open: boolean; children: ReactNode }) {
  const [mounted, setMounted] = useState(open);
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const running = useRef<Animation[]>([]);
  const cancelIdle = useRef<() => void>(() => {});
  const first = useRef(true);
  const unroll = useRef(false); // the next mount comes from the switch, so it may animate

  useEffect(() => () => cancelIdle.current(), []);

  const stopAnimations = () => {
    for (const a of running.current) a.cancel();
    running.current = [];
  };

  const animate = (to: 'open' | 'closed') => {
    const box = outer.current;
    const content = inner.current;
    if (!box || !content || typeof box.animate !== 'function' || reducedMotion()) return false;
    if (!isNear(box, 40)) return false;
    const opening = to === 'open';
    // a freshly mounted box is already at full height, so opening starts from nothing; flipping
    // the switch mid-animation continues from where the box is right now
    const midway = running.current.length > 0;
    const from = !opening || midway ? box.getBoundingClientRect().height : 0;
    stopAnimations();
    const target = opening ? box.scrollHeight : 0;
    const opts = { duration: DURATION, easing: EASING, fill: 'both' as const };
    box.style.overflow = 'hidden';
    const grow = box.animate(
      [
        { height: `${from}px`, opacity: opening ? 0 : 1 },
        { height: `${target}px`, opacity: opening ? 1 : 0 },
      ],
      opts,
    );
    const slide = content.animate(
      [
        { transform: `translateY(${opening ? -14 : 0}px)` },
        { transform: `translateY(${opening ? 0 : -14}px)` },
      ],
      opts,
    );
    running.current = [grow, slide];
    grow.onfinish = () => {
      if (opening) {
        // the box is at its natural height now; let go of the animation
        box.style.overflow = '';
        stopAnimations();
      } else {
        // keep the collapsed look until React removes the children, so it never flashes back open
        running.current = [];
        setMounted(false);
      }
    };
    return true;
  };

  // the switch was flipped
  useLayoutEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    cancelIdle.current();
    const box = outer.current;
    if (open) {
      if (mounted) {
        // opened again while still closing: turn around from the current height
        animate('open');
      } else if (box && isNear(box, window.innerHeight)) {
        unroll.current = true;
        queueMicrotask(() => setMounted(true));
      } else {
        unroll.current = true;
        // flushed at once, so the page has its final size when the hold on the reader's place ends
        cancelIdle.current = whenIdle(() => flushSync(() => setMounted(true)));
      }
    } else if (mounted) {
      if (!animate('closed')) {
        stopAnimations();
        queueMicrotask(() => setMounted(false));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reacts to the switch only
  }, [open]);

  // the children have just been mounted by an opening switch
  useLayoutEffect(() => {
    if (!mounted || !open || !unroll.current) return;
    unroll.current = false;
    animate('open');
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reacts to the mount only
  }, [mounted]);

  return (
    <div ref={outer}>
      {mounted ? <div ref={inner}>{children}</div> : null}
    </div>
  );
}
