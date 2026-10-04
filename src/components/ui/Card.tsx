import type { ElementType, HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type CardVariant = 'feature' | 'outlined' | 'dark';

const VARIANTS: Record<CardVariant, string> = {
  feature: 'bg-surface-card text-ink',
  outlined: 'border border-hairline bg-canvas text-ink',
  dark: 'bg-surface-dark text-on-dark',
};

type CardProps = HTMLAttributes<HTMLElement> & { variant?: CardVariant; as?: ElementType };

/** Content card: radius 12, padding 20 on phones and 32 from md (DESIGN-claude.md). */
export function Card({ variant = 'outlined', as: Tag = 'div', className, ...rest }: CardProps) {
  return <Tag className={cn('rounded-lg p-5 md:p-8', VARIANTS[variant], className)} {...rest} />;
}
