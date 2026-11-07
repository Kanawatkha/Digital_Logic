import { useEffect, useState } from 'react';

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false);

/**
 * Keeps something on screen while its exit animation plays. `shown` says whether to render it and
 * `state` which animation it is in (`data-state` on the element, the styles do the rest). With
 * reduced motion the exit is skipped and the element goes at once.
 */
export function usePresence(open: boolean, exitMs: number) {
  const [mounted, setMounted] = useState(open);
  if (open && !mounted) setMounted(true);

  useEffect(() => {
    if (open || !mounted) return;
    const timer = window.setTimeout(() => setMounted(false), exitMs);
    return () => window.clearTimeout(timer);
  }, [open, mounted, exitMs]);

  return { shown: open || (mounted && !reducedMotion()), state: open ? 'open' : 'closed' } as const;
}
