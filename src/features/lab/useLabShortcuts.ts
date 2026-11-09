import { useEffect, useRef } from 'react';
import { labActionOf, type LabAction } from './shortcuts';

/**
 * Carries out the keyboard shortcuts of the lab page on the whole document, for as long as the page is
 * up, wherever the focus is (the board, a button, nothing). `blocked` says that a drawer is open and
 * has the keys. `handle` returns whether it did something: only then the browser is kept from also
 * doing what the key does by itself (Backspace going back, Ctrl+Z in the page).
 */
export function useLabShortcuts(blocked: boolean, handle: (action: LabAction) => boolean): void {
  const latest = useRef({ blocked, handle });
  useEffect(() => {
    latest.current = { blocked, handle };
  });
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (latest.current.blocked) return;
      const action = labActionOf(event);
      if (action && latest.current.handle(action)) event.preventDefault();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);
}
