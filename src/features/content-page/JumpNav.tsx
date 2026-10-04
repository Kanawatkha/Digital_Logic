import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react';
import { cn } from '@/lib/cn';
import { jumpTo } from './jumpTo';

export type JumpItem = { id: string; label: string };

type JumpNavProps = { items: JumpItem[]; label: string; className?: string };

type Thumb = { size: number; offset: number };

/**
 * Row of chips that jump to sections of the current page. It scrolls sideways (touch, trackpad,
 * keys, or by dragging the thin bar under it). The native scrollbar is hidden and replaced by that
 * bar, so every screen size shows the same slim line, lined up with the content edges.
 * The row ends with the same gap that it starts with.
 */
export function JumpNav({ items, label, className }: JumpNavProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumb, setThumb] = useState<Thumb | null>(null);

  const update = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 1) {
      setThumb(null);
      return;
    }
    const size = el.clientWidth / el.scrollWidth;
    setThumb({ size, offset: (el.scrollLeft / max) * (1 - size) });
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    let observer: ResizeObserver | undefined;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(update);
      observer.observe(el);
      if (el.firstElementChild) observer.observe(el.firstElementChild);
    }
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      observer?.disconnect();
    };
  }, [update, items]);

  const scrubTo = (event: PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    const track = trackRef.current;
    if (!el || !track || !thumb) return;
    const bar = track.getBoundingClientRect();
    const thumbWidth = bar.width * thumb.size;
    const ratio = (event.clientX - bar.left - thumbWidth / 2) / (bar.width - thumbWidth);
    el.scrollLeft = Math.min(1, Math.max(0, ratio)) * (el.scrollWidth - el.clientWidth);
  };

  if (items.length < 2) return null;
  return (
    <nav aria-label={label} className={cn('mb-8', className)}>
      <div
        ref={scrollerRef}
        className="-mx-4 overflow-x-auto [scrollbar-width:none] md:mx-0 [&::-webkit-scrollbar]:hidden"
      >
        <ul className="flex w-max gap-2 px-4 pb-1 md:px-0">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <button
                type="button"
                onClick={() => jumpTo(item.id)}
                className="type-nav rounded-md bg-surface-card px-3.5 py-2 whitespace-nowrap text-ink"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {thumb ? (
        <div
          ref={trackRef}
          aria-hidden="true"
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            scrubTo(event);
          }}
          onPointerMove={(event) => {
            if (event.currentTarget.hasPointerCapture(event.pointerId)) scrubTo(event);
          }}
          className="relative mt-2 h-1.5 cursor-pointer touch-none rounded-full bg-hairline"
        >
          <div
            className="absolute inset-y-0 rounded-full bg-muted-soft"
            style={{ width: `${thumb.size * 100}%`, left: `${thumb.offset * 100}%` }}
          />
        </div>
      ) : null}
    </nav>
  );
}
