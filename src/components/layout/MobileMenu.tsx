import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@/components/ui/Icon';
import { HOME_ITEM, NAV_ITEMS } from '@/config/site';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { cn } from '@/lib/cn';
import './overlay.css';

type MobileMenuProps = { id: string; open: boolean; onClose: () => void };

const ROWS = [HOME_ITEM, ...NAV_ITEMS];
const CLOSE_MS = 220;

/**
 * Menu panel that slides down from the navbar, exactly as tall as its rows (one 56 px row per
 * page, UI-SPEC.md section 2). The page below is blurred and dimmed like behind the share dialog;
 * a press on it closes the menu. It stays mounted for the length of the close animation.
 * Focus is trapped while open, Esc closes, the page behind does not scroll.
 */
export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(open);
  const panelRef = useRef<HTMLDivElement>(null);

  if (open && !mounted) setMounted(true);

  useEffect(() => {
    if (open || !mounted) return;
    const timer = setTimeout(() => setMounted(false), CLOSE_MS);
    return () => clearTimeout(timer);
  }, [open, mounted]);

  // the hamburger disappears from md up, so the menu must not stay open behind the tab row
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return;
    const wide = window.matchMedia('(min-width: 768px)');
    const onChange = () => wide.matches && onClose();
    wide.addEventListener('change', onChange);
    return () => wide.removeEventListener('change', onChange);
  }, [onClose]);

  useFocusTrap(panelRef, open, onClose);
  useLockBodyScroll(mounted);

  if (!mounted) return null;

  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className="blur-overlay fixed inset-x-0 top-[var(--spacing-nav)] bottom-0 z-40 overflow-hidden md:hidden"
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        id={id}
        className="menu-panel max-h-full overflow-y-auto overscroll-contain border-b border-hairline bg-canvas"
      >
        <ul>
          {ROWS.map((item) => (
            <li key={item.to} className="border-b border-hairline-soft last:border-b-0">
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
    </div>
  );
}
