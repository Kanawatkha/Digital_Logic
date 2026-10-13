import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';

const DURATION = 420;
const EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

/** Only blocks the student can see are worth animating; the rest change size at once. */
function worthAnimating(el: HTMLElement): boolean {
  if (typeof el.animate !== 'function') return false;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
  const rect = el.getBoundingClientRect();
  return rect.bottom > -40 && rect.top < window.innerHeight + 40;
}

/**
 * Shows or hides its children with a height animation: opening unrolls the block and slides the
 * text down into place, closing rolls it back up. Hidden children are not rendered at all.
 */
export function Collapse({ open, children }: { open: boolean; children: ReactNode }) {
  const [closing, setClosing] = useState(false);
  const [prevOpen, setPrevOpen] = useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    setClosing(!open); // keep the children mounted until the closing animation ends
  }

  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const running = useRef<Animation[]>([]);
  const first = useRef(true);

  useLayoutEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const box = outer.current;
    const content = inner.current;
    // where the box is right now, in case the switch was flipped mid-animation
    const from = box ? box.getBoundingClientRect().height : 0;
    for (const a of running.current) a.cancel();
    running.current = [];
    if (!box || !content || !worthAnimating(box)) {
      if (!open) queueMicrotask(() => setClosing(false));
      return;
    }
    const to = open ? box.scrollHeight : 0;
    const opts = { duration: DURATION, easing: EASING, fill: 'both' as const };
    box.style.overflow = 'hidden';
    const grow = box.animate(
      [
        { height: `${from}px`, opacity: open ? 0 : 1 },
        { height: `${to}px`, opacity: open ? 1 : 0 },
      ],
      opts,
    );
    const slide = content.animate(
      [
        { transform: `translateY(${open ? -14 : 0}px)` },
        { transform: `translateY(${open ? 0 : -14}px)` },
      ],
      opts,
    );
    running.current = [grow, slide];
    grow.onfinish = () => {
      box.style.overflow = '';
      for (const a of running.current) a.cancel();
      running.current = [];
      if (!open) setClosing(false);
    };
  }, [open]);

  if (!open && !closing) return null;
  return (
    <div ref={outer}>
      <div ref={inner}>{children}</div>
    </div>
  );
}
