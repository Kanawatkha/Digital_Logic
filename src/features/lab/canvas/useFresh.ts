import { useEffect, useState } from 'react';

/**
 * The parts of the board that are new since the page opened, for as long as their entrance lasts:
 * an id that arrives gets its place in the order of arrival (so many at once come in one after the
 * other), and every id is let go `lastsMs` after the last arrival. An entrance is a CSS animation,
 * which a browser plays again whenever the element is put back in the page; a part that kept the
 * class for good would play it again each time React moved it (a wire that is selected is drawn
 * last, which moves the others). Letting the class go when the entrance is over stops that.
 */
export function useFresh(ids: readonly string[], lastsMs: number): ReadonlyMap<string, number> {
  const [known, setKnown] = useState<ReadonlySet<string>>(() => new Set(ids));
  const [fresh, setFresh] = useState<ReadonlyMap<string, number>>(new Map());
  const present = new Set(ids);
  const unseen = ids.filter((id) => !known.has(id));
  const gone = [...known].filter((id) => !present.has(id));
  if (unseen.length > 0 || gone.length > 0) {
    setKnown(new Set([...known].filter((id) => present.has(id)).concat(unseen)));
    setFresh((was) => {
      const next = new Map([...was].filter(([id]) => present.has(id)));
      unseen.forEach((id, order) => next.set(id, order));
      return next;
    });
  }
  // every arrival starts the wait again; when it runs out the entrances are over
  const arrivals = fresh;
  useEffect(() => {
    if (arrivals.size === 0) return;
    const timer = window.setTimeout(() => setFresh(new Map()), lastsMs);
    return () => window.clearTimeout(timer);
  }, [arrivals, lastsMs]);
  return fresh;
}
