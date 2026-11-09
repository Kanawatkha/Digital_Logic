import { useCallback, useState } from 'react';

/** Where the choice of the signal view is kept in the browser. */
export const SIGNAL_KEY = 'digital-logic-lab-signal';

function read(): boolean {
  try {
    return localStorage.getItem(SIGNAL_KEY) === '1';
  } catch {
    return false;
  }
}

/**
 * Whether the signal view of the board is on, and a way to turn it over. It starts off, and what was
 * chosen last is kept in the browser (storage that is not there or does not work leaves it off).
 */
export function useSignalView(): [boolean, () => void] {
  const [on, setOn] = useState(read);
  const toggle = useCallback(() => {
    setOn((was) => {
      const next = !was;
      try {
        if (next) localStorage.setItem(SIGNAL_KEY, '1');
        else localStorage.removeItem(SIGNAL_KEY);
      } catch {
        // the choice lasts until the page is closed
      }
      return next;
    });
  }, []);
  return [on, toggle];
}
