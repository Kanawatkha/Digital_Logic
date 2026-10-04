import { useEffect } from 'react';

/** Width the browser reserves for a classic vertical scrollbar (0 for overlay scrollbars). */
function scrollbarWidth(): number {
  const probe = document.createElement('div');
  probe.style.cssText = 'position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll';
  document.body.appendChild(probe);
  const width = probe.offsetWidth - probe.clientWidth;
  probe.remove();
  return width;
}

/**
 * Prevents the page behind a full-screen sheet from scrolling while `locked` is true.
 *
 * The page keeps a reserved scrollbar gutter (index.css), also while it is too short to scroll.
 * That gutter lies outside the area a fixed overlay covers, so locking gives the space back to the
 * page as padding: the layout stays exactly where it was and the overlay covers the full width.
 * The gutter is measured with a probe, because on a short page the window reports no scrollbar.
 */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const root = document.documentElement;
    const gutter = Math.max(window.innerWidth - root.clientWidth, scrollbarWidth());
    const previous = {
      overflow: root.style.overflow,
      scrollbarGutter: root.style.scrollbarGutter,
      paddingRight: root.style.paddingRight,
    };
    root.style.overflow = 'hidden';
    root.style.scrollbarGutter = 'auto';
    root.style.paddingRight = `${gutter}px`;
    return () => {
      root.style.overflow = previous.overflow;
      root.style.scrollbarGutter = previous.scrollbarGutter;
      root.style.paddingRight = previous.paddingRight;
    };
  }, [locked]);
}
