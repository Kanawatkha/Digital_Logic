import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Reading column for content pages. Rich block styling is added in Phase 4. */
export function Prose({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('type-body-md max-w-[880px] text-body', className)}>{children}</div>;
}
