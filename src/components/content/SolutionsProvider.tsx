import { useCallback, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { SolutionsContext } from '@/components/content/solutions';
import { captureAnchor, holdAnchor, type ScrollAnchor } from '@/lib/scrollAnchor';

const STORAGE_KEY = 'dln:show-solutions';

function readStored(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== '0';
  } catch {
    return true;
  }
}

/** Holds the "show solutions" switch of the exam pages. The choice is remembered in the browser. */
export function SolutionsProvider({ children }: { children: ReactNode }) {
  const [show, setShowState] = useState(readStored);

  // the example on screen when the switch was flipped; the page follows it while blocks resize
  const anchor = useRef<ScrollAnchor | null>(null);

  useLayoutEffect(() => {
    if (anchor.current) holdAnchor(anchor.current);
    anchor.current = null;
  }, [show]);

  const setShow = useCallback((next: boolean) => {
    anchor.current = captureAnchor();
    setShowState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? '1' : '0');
    } catch {
      // the switch still works for this visit when storage is blocked
    }
  }, []);

  const value = useMemo(() => ({ show, setShow }), [show, setShow]);
  return <SolutionsContext.Provider value={value}>{children}</SolutionsContext.Provider>;
}
