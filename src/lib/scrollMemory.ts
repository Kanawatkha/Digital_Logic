/**
 * Where each page was scrolled to, kept for the visit (the session storage of the tab, or memory when the
 * browser gives none). A page that is at the top has no entry. At most `MAX` pages are kept, the ones
 * read last.
 */
const KEY = 'dl-scroll';
const MAX = 40;
const SAVE_DELAY_MS = 250;

const memory = new Map<string, number>();
let loaded = false;
let timer: ReturnType<typeof setTimeout> | undefined;
let restoreFor: string | null = null;

function sessionStore(): Storage | null {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function load(): void {
  if (loaded) return;
  loaded = true;
  try {
    const saved: unknown = JSON.parse(sessionStore()?.getItem(KEY) ?? 'null');
    if (typeof saved !== 'object' || saved === null) return;
    for (const [path, y] of Object.entries(saved)) {
      if (typeof y === 'number' && Number.isFinite(y) && y > 0) memory.set(path, y);
    }
  } catch {
    // no storage, or what was in it is not ours: start empty
  }
}

/** Writes what is remembered to the session storage now (the page is closing, or a test). */
export function flushScroll(): void {
  clearTimeout(timer);
  timer = undefined;
  try {
    sessionStore()?.setItem(KEY, JSON.stringify(Object.fromEntries(memory)));
  } catch {
    // the memory above holds it for as long as the page stays open
  }
}

function saveSoon(): void {
  if (timer === undefined) timer = setTimeout(flushScroll, SAVE_DELAY_MS);
}

/** Remembers how far a page is scrolled (0 forgets it). */
export function saveScroll(path: string, y: number): void {
  load();
  memory.delete(path);
  if (y > 0) memory.set(path, Math.round(y));
  while (memory.size > MAX) memory.delete(memory.keys().next().value as string);
  saveSoon();
}

/** How far a page was scrolled when it was left (0 when it was at the top or never read). */
export function readScroll(path: string): number {
  load();
  return memory.get(path) ?? 0;
}

/** Forgets the pages (a section that was reset). */
export function clearScroll(paths: readonly string[]): void {
  load();
  for (const path of paths) memory.delete(path);
  saveSoon();
}

/** The next arrival at this page brings back the place it was left at (a header tab does this). */
export function flagRestore(path: string): void {
  restoreFor = path;
}

/** True once for a page that was flagged. */
export function takeRestore(path: string): boolean {
  const flagged = restoreFor === path;
  restoreFor = null;
  return flagged;
}

/** Forgets everything. For tests. */
export function resetScroll(): void {
  clearTimeout(timer);
  timer = undefined;
  memory.clear();
  loaded = false;
  restoreFor = null;
  try {
    sessionStore()?.removeItem(KEY);
  } catch {
    // nothing was stored
  }
}
