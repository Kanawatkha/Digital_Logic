import { useSyncExternalStore } from 'react';

/** Whether the window is at least `px` wide. Without `matchMedia` there is no way to know: roomy. */
export function useMinWidth(px: number): boolean {
  const query = `(min-width: ${px}px)`;
  return useSyncExternalStore(
    (notify) => {
      const media = window.matchMedia?.(query);
      media?.addEventListener?.('change', notify);
      return () => media?.removeEventListener?.('change', notify);
    },
    () => window.matchMedia?.(query)?.matches ?? true,
    () => true,
  );
}
