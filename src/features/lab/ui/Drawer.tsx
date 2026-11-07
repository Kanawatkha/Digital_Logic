import { useId, useRef } from 'react';
import type { ReactNode } from 'react';
import '@/components/layout/overlay.css';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { usePresence } from './usePresence';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  hint: string;
  /** How wide it is on a tablet or desktop */
  size?: 'md' | 'lg';
  /** Put under the title: the content of the drawer, which should scroll by itself */
  children: ReactNode;
};

const WIDTH = { md: 'md:max-w-[540px]', lg: 'md:max-w-[760px]' } as const;

/**
 * A drawer that slides in from the right (from the bottom on a phone) over a blurred page. The page
 * cannot be used until the drawer is closed: with the cross, Esc or a press on the blur. The focus
 * stays inside while it is open. It renders nothing while it is closed (after its exit animation).
 */
export function Drawer({ open, onClose, title, hint, size = 'md', children }: DrawerProps) {
  const { shown, state } = usePresence(open, 240);
  const panel = useRef<HTMLElement>(null);
  const titleId = useId();
  useFocusTrap(panel, open, onClose);
  useLockBodyScroll(shown);
  if (!shown) return null;
  return (
    <div
      data-state={state}
      className="blur-overlay fixed inset-0 z-[70] flex items-end justify-end md:items-stretch"
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`lab-drawer flex h-[88dvh] w-full flex-col rounded-t-xl bg-canvas shadow-[0_-12px_48px_rgb(20_20_19/0.3)] md:h-auto md:rounded-t-none md:rounded-l-xl md:shadow-[-12px_0_48px_rgb(20_20_19/0.3)] ${WIDTH[size]}`}
      >
        <div className="flex items-start justify-between gap-3 border-b border-hairline px-4 py-3 md:px-5">
          <div>
            <h2 id={titleId} className="type-title-md text-ink">
              {title}
            </h2>
            <p className="type-body-sm text-muted">{hint}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={UI_TEXT.dismiss}
            title={UI_TEXT.dismiss}
            className="-me-2 inline-flex size-10 shrink-0 items-center justify-center rounded-md text-ink transition-transform active:scale-90 active:bg-surface-card"
          >
            <Icon name="close" size={22} />
          </button>
        </div>
        {children}
      </aside>
    </div>
  );
}
