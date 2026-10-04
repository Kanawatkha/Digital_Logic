import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'text';

const BASE =
  'type-button inline-flex h-10 items-center justify-center gap-2 rounded-md px-5 select-none disabled:cursor-not-allowed';

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-primary-active text-on-primary active:bg-ink disabled:bg-primary-disabled disabled:text-muted',
  secondary: 'border border-hairline bg-canvas text-ink',
  text: 'h-auto px-0 text-ink',
};

type CommonProps = { variant?: Variant; className?: string; children: ReactNode };
type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = CommonProps & Omit<LinkProps, 'className' | 'children'>;

export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  return (
    <button type="button" className={cn(BASE, VARIANTS[variant], className)} {...rest}>
      {children}
    </button>
  );
}

/** Same look as Button, rendered as a router link. */
export function ButtonLink({ variant = 'primary', className, children, ...rest }: ButtonLinkProps) {
  return (
    <Link className={cn(BASE, VARIANTS[variant], className)} {...rest}>
      {children}
    </Link>
  );
}
