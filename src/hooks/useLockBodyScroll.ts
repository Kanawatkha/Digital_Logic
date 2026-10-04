import { useEffect } from 'react';

/** Prevents the page behind a full-screen sheet from scrolling while `locked` is true. */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = previous;
    };
  }, [locked]);
}
