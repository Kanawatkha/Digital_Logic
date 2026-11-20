import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { restoreScroll } from '@/lib/restoreScroll';
import { flushScroll, readScroll, saveScroll, takeRestore } from '@/lib/scrollMemory';

/**
 * Where a page is scrolled to is remembered, and a page that is returned to is put back there: with the
 * back and forward buttons, after a reload, and when a header tab brings the student back to a section
 * (see `useSectionNav`). Any other arrival, such as a tab inside a page, starts at the top.
 *
 * The browser does not do this itself (the content comes late), so its own restoring is switched off.
 * While a place is being brought back the scroll is not recorded: the page is still shorter than it was.
 */
export function useScrollMemory(): void {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const current = useRef<string | null>(null);
  const restoring = useRef(false);
  const cancel = useRef<(() => void) | null>(null);

  useEffect(() => {
    let previous: ScrollRestoration | undefined;
    try {
      previous = window.history.scrollRestoration;
      window.history.scrollRestoration = 'manual';
    } catch {
      // the browser keeps its own way
    }
    const onScroll = () => {
      if (!restoring.current && current.current) saveScroll(current.current, window.scrollY);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pagehide', flushScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pagehide', flushScroll);
      flushScroll();
      try {
        if (previous) window.history.scrollRestoration = previous;
      } catch {
        // nothing to give back
      }
    };
  }, []);

  // before the page is painted: back to the place that was left, or to the top
  useLayoutEffect(() => {
    if (current.current === pathname) return; // a layer opened or closed on the same page
    cancel.current?.();
    current.current = pathname;
    const wanted = takeRestore(pathname) || navigationType === 'POP';
    const y = wanted ? readScroll(pathname) : 0;
    if (y > 0) {
      restoring.current = true;
      cancel.current = restoreScroll(y, () => {
        restoring.current = false;
      });
    } else {
      restoring.current = false;
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, navigationType]);
}
