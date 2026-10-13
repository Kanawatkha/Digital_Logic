import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { flushSync } from 'react-dom';
import { currentPlan } from '@/lib/scrollAnchor';

const DURATION = 420;
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

/** Runs `fn` when the browser is idle; returns a cancel function. */
function whenIdle(fn: () => void): () => void {
  if (typeof requestIdleCallback === 'function') {
    const id = requestIdleCallback(fn, { timeout: 1500 });
    return () => cancelIdleCallback(id);
  }
  const id = setTimeout(fn, 60);
  return () => clearTimeout(id);
}

type CollapseProps = {
  /** The example this box belongs to, looked up in the plan of the switch (lib/scrollAnchor). */
  id: string;
  open: boolean;
  children: ReactNode;
};

/**
 * Shows or hides its children. Hidden children are not rendered at all.
 *
 * When the switch flips, the plan decides for each box: boxes in the card being read and below it
 * animate (opening unrolls the block and slides the text down into place, closing rolls it back
 * up); boxes above it change at once; boxes far from the screen are mounted when the browser is
 * idle. Without a plan (first render, tests) the box simply follows `open`.
 */
export function Collapse({ id, open, children }: CollapseProps) {
  const [mounted, setMounted] = useState(open);
  const [shownFor, setShownFor] = useState(open);
  if (open !== shownFor) {
    // decided in the same render as the flip, so the page has its new size before it is painted
    setShownFor(open);
    const plan = currentPlan();
    if (open) setMounted(!plan || plan.near.has(id));
    else setMounted(plan !== null && plan.animate.has(id) && mounted);
  }

  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const running = useRef<Animation[]>([]);
  const cancelIdle = useRef<() => void>(() => {});
  const lastOpen = useRef(open);

  const stopAnimations = () => {
    for (const a of running.current) a.cancel();
    running.current = [];
  };

  useEffect(
    () => () => {
      cancelIdle.current();
      stopAnimations();
    },
    [],
  );

  const animate = (opening: boolean) => {
    const box = outer.current;
    const content = inner.current;
    if (!box || !content || typeof box.animate !== 'function') return;
    // a box that was just mounted starts from nothing; one turned around mid-animation starts
    // from where it is right now
    const from = !opening || running.current.length > 0 ? box.getBoundingClientRect().height : 0;
    stopAnimations();
    const to = opening ? box.scrollHeight : 0;
    const opts = { duration: DURATION, easing: EASING, fill: 'both' as const };
    box.style.overflow = 'hidden';
    const grow = box.animate(
      [
        { height: `${from}px`, opacity: opening ? 0 : 1 },
        { height: `${to}px`, opacity: opening ? 1 : 0 },
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
      // closing keeps the rolled-up look until the children are gone, so it never flashes open
      if (!opening) flushSync(() => setMounted(false));
      box.style.overflow = '';
      stopAnimations();
    };
  };

  useLayoutEffect(() => {
    if (lastOpen.current === open) return;
    lastOpen.current = open;
    cancelIdle.current();
    const animated = currentPlan()?.animate.has(id) ?? false;
    if (open && !mounted) {
      // far from the screen: drawn on demand by the browser, so it can wait
      cancelIdle.current = whenIdle(() => setMounted(true));
    } else if (animated && mounted) {
      animate(open);
    } else {
      stopAnimations();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reacts to the switch only
  }, [open]);

  return (
    <div ref={outer}>
      {mounted ? <div ref={inner}>{children}</div> : null}
    </div>
  );
}
