import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SECTIONS, sectionOfPath, type Section } from '@/config/sections';

/**
 * The page last read in each section (chapters, exams, formula sheets). It is kept for the visit: in the
 * session storage of the tab, and in memory when the browser gives no storage, so it is forgotten when
 * the tab is closed and the site opens at its main pages again.
 */
const key = (section: Section) => `dl-place:${section.id}`;
const inMemory = new Map<string, string>();

function sessionStore(): Storage | null {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

/** Remembers an address when it is a page of a section; anything else is ignored. */
export function rememberPlace(pathname: string): void {
  const section = sectionOfPath(pathname);
  if (!section || !section.pages.includes(pathname)) return;
  inMemory.set(section.id, pathname);
  try {
    sessionStore()?.setItem(key(section), pathname);
  } catch {
    // the memory above holds it for as long as the page stays open
  }
}

/** The page to open when the section is entered: the one last read, or the main page of the section. */
export function recallPlace(section: Section): string {
  let saved: string | null | undefined;
  try {
    saved = sessionStore()?.getItem(key(section));
  } catch {
    saved = undefined;
  }
  saved = saved ?? inMemory.get(section.id);
  return saved && section.pages.includes(saved) ? saved : section.home;
}

/** Forgets every remembered page. For tests. */
export function resetPlaces(): void {
  inMemory.clear();
  for (const section of SECTIONS) {
    try {
      sessionStore()?.removeItem(key(section));
    } catch {
      // nothing was stored
    }
  }
}

/** Keeps the memory up to date: every page of a section that is opened is the one to come back to. */
export function usePlaceMemory(): void {
  const { pathname } = useLocation();
  useEffect(() => rememberPlace(pathname), [pathname]);
}
