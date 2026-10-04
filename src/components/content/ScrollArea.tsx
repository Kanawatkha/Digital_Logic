import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Listener = (overflowing: boolean) => void;

const listeners = new Map<Element, Listener>();
let observer: ResizeObserver | undefined;

/**
 * One ResizeObserver serves every scroll area on the page. Hundreds of observers each reading
 * layout on their own made the long exercise pages slow to start.
 */
function watchOverflow(el: HTMLElement, onChange: Listener): () => void {
  if (typeof ResizeObserver === 'undefined') return () => {};
  observer ??= new ResizeObserver((entries) => {
    for (const { target } of entries) {
      listeners.get(target)?.(target.scrollWidth > target.clientWidth + 1);
    }
  });
  listeners.set(el, onChange);
  observer.observe(el);
  return () => {
    listeners.delete(el);
    observer?.unobserve(el);
  };
}

type ScrollAreaProps = {
  className?: string;
  /** Pre-rendered trusted markup (KaTeX or a validated SVG). Used instead of children. */
  html?: string;
  children?: ReactNode;
};

/**
 * Horizontal scroll container for wide math, tables and figures. It becomes a keyboard stop
 * only while its content really overflows, so short blocks add no extra tab stops.
 */
export function ScrollArea({ className, html, children }: ScrollAreaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return watchOverflow(el, setOverflowing);
  }, [html]);

  const shared = {
    ref,
    className: cn('overflow-x-auto', className),
    tabIndex: overflowing ? 0 : undefined,
  };
  return html !== undefined ? (
    <div {...shared} dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <div {...shared}>{children}</div>
  );
}
