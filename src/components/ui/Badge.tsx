import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type BadgeProps = { tone?: 'pill' | 'coral'; className?: string; children: ReactNode };

/** badge-pill (default) and badge-coral from DESIGN-claude.md. Coral is for rare highlights only. */
export function Badge({ tone = 'pill', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill px-3 py-1',
        tone === 'pill'
          ? 'type-caption bg-surface-card text-ink'
          : 'type-caption-upper bg-primary-active text-on-primary',
        className,
      )}
    >
      {children}
    </span>
  );
}
