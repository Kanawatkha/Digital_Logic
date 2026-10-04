import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@/components/ui/Icon';
import { HOME_ITEM, NAV_ITEMS } from '@/config/site';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { cn } from '@/lib/cn';

type MobileMenuProps = { id: string; open: boolean; onClose: () => void };

const ROWS = [HOME_ITEM, ...NAV_ITEMS];

/**
 * Full-screen cream sheet under the navbar, one 56 px row per page (UI-SPEC.md section 2).
 * Focus is trapped while open, Esc closes, the page behind does not scroll.
 */
export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, open, onClose);
  useLockBodyScroll(open);

  if (!open) return null;

  return (
    <div
      ref={ref}
      id={id}
      className="fixed inset-x-0 top-[var(--spacing-nav)] bottom-0 z-40 overflow-y-auto bg-canvas md:hidden"
    >
      <ul>
        {ROWS.map((item) => (
          <li key={item.to} className="border-b border-hairline-soft">
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'type-title-sm flex h-14 items-center justify-between px-4',
                  isActive ? 'bg-surface-card text-ink' : 'text-body-strong',
                )
              }
            >
              {item.label}
              <Icon name="chevron-right" size={18} className="text-muted-soft" />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
