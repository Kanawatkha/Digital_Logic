import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { SolutionsContext } from '@/components/content/solutions';

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

  const setShow = useCallback((next: boolean) => {
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
