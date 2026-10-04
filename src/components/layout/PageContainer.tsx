import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/cn';

/** Centered page column: max 1200 px, 16 px gutters on phones (DESIGN-claude.md layout). */
export function PageContainer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1200px] px-4 py-8 md:px-6 md:py-12', className)}>
      {children}
    </div>
  );
}

type PageHeadingProps = { title: string; badge?: string; lead?: string };

/** Page h1 in the display face, with an optional number badge and a one-line lead. */
export function PageHeading({ title, badge, lead }: PageHeadingProps) {
  return (
    <header className="mb-8 flex flex-col items-start gap-3">
      {badge ? <Badge>{badge}</Badge> : null}
      <h1 className="type-display-md text-[28px] text-ink md:text-4xl">{title}</h1>
      {lead ? <p className="type-body-md max-w-[880px] text-muted">{lead}</p> : null}
    </header>
  );
}
