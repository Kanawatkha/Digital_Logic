import type { ReactNode } from 'react';

type ToastProps = { children: ReactNode; action?: ReactNode };

/** cookie-consent-card style toast (dark surface). Shown by app/pwa/ToastHost. */
export function Toast({ children, action }: ToastProps) {
  return (
    <div
      role="status"
      className="type-body-sm flex items-center gap-4 rounded-lg bg-surface-dark p-6 text-on-dark"
    >
      <span>{children}</span>
      {action}
    </div>
  );
}
