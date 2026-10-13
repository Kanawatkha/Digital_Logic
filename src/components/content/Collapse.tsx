import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { flushSync } from 'react-dom';
import { trackActivity } from '@/lib/scrollAnchor';

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
 * Runs a React update outside the current commit but still before the next paint (`soon`), or
 * when the browser is idle (`idle`). Either way it is committed at once and counted as activity,
 * so the hold on the reader's place (see scrollAnchor) waits for it.
 */
function schedule(when: 'soon' | 'idle', update: () => void): () => void {
  trackActivity(1);
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    trackActivity(-1);
  };
  const run = () => {
    if (done) return;
    flushSync(update);
    finish();
  };
  if (when === 'soon') {
    queueMicrotask(run);
    return finish;
  }
  if (typeof requestIdleCallback === 'function') {
    const id = requestIdleCallback(run, { timeout: 1500 });
    return () => {
      cancelIdleCallback(id);
      finish();
    };
  }
  const id = setTimeout(run, 60);
  return () => {
    clearTimeout(id);
    finish();
  };
}

/**
 * Shows or hides its children with a height animation: opening unrolls the block and slides the
 * text down into place, closing rolls it back up. Hidden children are not rendered at all.
 *
 * Only boxes on or near the screen are mounted at once and animated. The far ones (most of a long
 * page) are mounted while the browser is idle, so the switch never freezes the page.
 */
export function Collapse({ open, children }: { open: boolean; children: ReactNode }) {
  const [mounted, setMounted] = useState(open);
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const running = useRef<Animation[]>([]);
  const cancelPending = useRef<() => void>(() => {});
  const lastOpen = useRef(open); // the switch position the box last followed
  const unroll = useRef(false); // the next mount comes from the switch, so it may animate

  const stopAnimations = () => {
    if (running.current.length > 0) trackActivity(-1);
    for (const a of running.current) a.cancel();
    running.current = [];
  };

  useEffect(
    () => () => {
      cancelPending.current();
      stopAnimations();
    },
    [],
  );

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
    trackActivity(1);
    running.current = [grow, slide];
    grow.onfinish = () => {
      if (opening) {
        // the box is at its natural height now; let go of the animation
        box.style.overflow = '';
        stopAnimations();
      } else {
        // keep the collapsed look until the children are gone, so it never flashes back open
        flushSync(() => setMounted(false));
        stopAnimations();
      }
    };
    return true;
  };

  // the switch was flipped
  useLayoutEffect(() => {
    if (lastOpen.current === open) return;
    lastOpen.current = open;
    cancelPending.current();
    const box = outer.current;
    if (open) {
      if (mounted) {
        // opened again while still closing: turn around from the current height
        animate('open');
      } else {
        unroll.current = true;
        const near = box !== null && isNear(box, window.innerHeight);
        cancelPending.current = schedule(near ? 'soon' : 'idle', () => setMounted(true));
      }
    } else if (mounted && !animate('closed')) {
      stopAnimations();
      cancelPending.current = schedule('soon', () => setMounted(false));
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
