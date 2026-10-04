import { useCallback, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/layout/Logo';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { ShareDialog } from '@/components/layout/ShareDialog';
import { NAV_ITEMS, SITE_NAME, UI_TEXT } from '@/config/site';
import { cn } from '@/lib/cn';

const MENU_ID = 'mobile-menu';

/**
 * Top navigation (UI-SPEC.md section 2): a tab row from md up, a hamburger below md.
 * Chapter labels shorten to "บท N" between md and lg.
 */
export function Navbar() {
  // The menu is "open at" a path, so any navigation (link press, back gesture) closes it.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const [shareOpen, setShareOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const shareRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const open = openAt === pathname;

  const close = useCallback(() => {
    setOpenAt(null);
    toggleRef.current?.focus();
  }, []);

  const closeShare = useCallback(() => {
    setShareOpen(false);
    shareRef.current?.focus();
  }, []);

  const siteUrl = `${window.location.origin}${import.meta.env.BASE_URL}`;

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas">
      <nav
        aria-label="Main"
        className="mx-auto flex h-[var(--spacing-nav)] max-w-[1200px] items-center justify-between px-4 md:px-6"
      >
        <Link to="/" className="rounded-md" aria-label={`${SITE_NAME}: หน้าหลัก`}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex lg:gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'type-nav block rounded-md px-2.5 py-2 whitespace-nowrap lg:px-3.5',
                    isActive ? 'bg-surface-card text-ink' : 'text-muted',
                  )
                }
              >
                {item.shortLabel ? (
                  <>
                    <span className="lg:hidden">{item.shortLabel}</span>
                    <span className="hidden lg:inline">{item.label}</span>
                  </>
                ) : (
                  item.label
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 md:gap-0">
          <button
            ref={shareRef}
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md bg-primary-active text-on-primary md:ms-2"
            aria-label={UI_TEXT.share}
            aria-haspopup="dialog"
            onClick={() => setShareOpen(true)}
          >
            <Icon name="share" size={20} />
          </button>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-ink md:hidden"
            aria-expanded={open}
            aria-controls={MENU_ID}
            aria-label={open ? UI_TEXT.menuClose : UI_TEXT.menuOpen}
            onClick={() => (open ? close() : setOpenAt(pathname))}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </nav>

      <ShareDialog open={shareOpen} onClose={closeShare} url={siteUrl} />

      <MobileMenu id={MENU_ID} open={open} onClose={close} />
    </header>
  );
}
