import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Listener = (overflowing: boolean) => void;

const listeners = new Map<Element, Listener>();
let observer: ResizeObserver | undefined;

/**
 * One ResizeObserver serves every scroll area on the page. Hundreds of observers each reading
 * layout on their own made the long exercise pages slow to start.
 */
function watchOverflow(el: HTMLElement, onChange: Listener): () => void {
  onChange(el.scrollWidth > el.clientWidth + 1);
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
  /**
   * Another layout of the same markup that is narrower (a chain with its notes under the rows). It is
   * shown when `html` overflows, and `html` comes back when the area is wide enough for it again.
   */
  narrowHtml?: string;
  children?: ReactNode;
  /** Marks content that is centered in the column (formulas, figures), see FormulaOutline. */
  centered?: boolean;
};

/**
 * Horizontal scroll container for wide math, tables and figures. It becomes a keyboard stop
 * only while its content really overflows, so short blocks add no extra tab stops.
 */
export function ScrollArea({ className, html, narrowHtml, children, centered }: ScrollAreaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [overflowing, setOverflowing] = useState(false);
  const [narrow, setNarrow] = useState(false);
  /** The width the wide layout wanted when it overflowed */
  const wideWidth = useRef(0);

  // before the first paint, so the wide layout is never seen when it does not fit
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    return watchOverflow(el, (over) => {
      if (narrowHtml === undefined) {
        setOverflowing(over);
      } else if (!narrow && over) {
        wideWidth.current = el.scrollWidth;
        setNarrow(true);
      } else if (narrow && el.clientWidth >= wideWidth.current) {
        setNarrow(false);
      } else {
        setOverflowing(over);
      }
    });
  }, [html, narrowHtml, narrow]);

  const shared = {
    ref,
    className: cn('thin-scroll overflow-x-auto', className),
    tabIndex: overflowing ? 0 : undefined,
    'data-centered': centered ? '' : undefined,
  };
  const shown = narrow && narrowHtml !== undefined ? narrowHtml : html;
  return shown !== undefined ? (
    <div {...shared} dangerouslySetInnerHTML={{ __html: shown }} />
  ) : (
    <div {...shared}>{children}</div>
  );
}
