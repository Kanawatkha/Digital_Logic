import { useCallback, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { SolutionsContext } from '@/components/content/solutions';
import { planToggle, settleToggle, type TogglePlan } from '@/lib/scrollAnchor';

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

  // measured before a flip; runs once the new blocks are on the page, before the paint
  const plan = useRef<TogglePlan | null>(null);

  useLayoutEffect(() => {
    if (plan.current) settleToggle(plan.current);
    plan.current = null;
  }, [show]);

  const setShow = useCallback((next: boolean) => {
    plan.current = planToggle(!next);
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
