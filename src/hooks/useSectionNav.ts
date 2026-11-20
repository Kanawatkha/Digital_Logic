import { useCallback, type MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sectionOfPath, sectionOfRoot } from '@/config/sections';
import { recallPlace } from '@/lib/placeMemory';
import { clearScroll, flagRestore } from '@/lib/scrollMemory';

type Options = { replace?: boolean };

/**
 * The click of a header tab that opens a section (chapters, exams, formula sheets): from outside the
 * section it goes back to the page last read there, from inside it goes to the main page of the section
 * and to the top (the pages of the section forget where they were scrolled to). The link keeps the address of the tab, so a new tab or a copied link still opens the
 * main page. A tab of another kind, or a click with a modifier key, is left to the link.
 */
export function useSectionNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return useCallback(
    (to: string, options: Options = {}) =>
      (event: MouseEvent<HTMLElement>) => {
        const section = sectionOfRoot(to);
        if (!section || event.defaultPrevented || event.button !== 0) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        const inside = sectionOfPath(pathname)?.id === section.id;
        const target = inside ? section.home : recallPlace(section);
        const same = target === pathname;
        // the page comes back where it was left, or, for the main page, the section starts again from the top
        if (inside) clearScroll(section.pages);
        else flagRestore(target);
        // the same page again is not a new entry of the history (and it closes a menu that is open)
        navigate(target, { replace: options.replace || same });
        if (same) window.scrollTo(0, 0);
      },
    [navigate, pathname],
  );
}
