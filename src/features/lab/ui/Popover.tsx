import { useEffect, useRef } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import { usePresence } from './usePresence';

type PopoverProps = {
  open: boolean;
  onClose: () => void;
  id: string;
  /** Opens under the button (default) or over it */
  placement?: 'bottom' | 'top';
  /** Which edge of the button the panel lines up with (default the left one) */
  align?: 'left' | 'right';
  /** Width and the like, for the panel */
  className?: string;
  children: ReactNode;
};

/**
 * A small panel under (or over) the button that opens it. Put it in the same `relative` element as the button
 * (the button carries `aria-expanded`). It springs out of the button, closes with Escape or a press
 * anywhere else, and hands the focus back to the button.
 */
export function Popover({
  open,
  onClose,
  id,
  placement = 'bottom',
  align = 'left',
  className = '',
  children,
}: PopoverProps) {
  const { shown, state } = usePresence(open, 150);
  const panel = useRef<HTMLDivElement>(null);
  const host = useRef<HTMLElement | null>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!open) return;
    host.current = panel.current?.parentElement ?? null;
    // the chosen item, else the first button, else the panel itself (so Esc works from the keyboard)
    (
      panel.current?.querySelector<HTMLElement>('[aria-checked="true"], button') ?? panel.current
    )?.focus({ preventScroll: true });
    const away = (event: PointerEvent) => {
      if (event.target instanceof Node && host.current?.contains(event.target)) return;
      onClose();
    };
    document.addEventListener('pointerdown', away, true);
    return () => document.removeEventListener('pointerdown', away, true);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      return;
    }
    if (!wasOpen.current) return;
    wasOpen.current = false;
    // the focus was in the panel, which is going: it goes back to the button
    const active = document.activeElement;
    if (active === document.body || (active && host.current?.contains(active))) {
      host.current?.querySelector<HTMLElement>('button[aria-expanded]')?.focus();
    }
  }, [open]);

  if (!shown) return null;
  return (
    <div
      ref={panel}
      id={id}
      data-state={state}
      tabIndex={-1}
      data-placement={placement}
      className={`lab-pop absolute ${align === 'right' ? 'right-0' : 'left-0'} z-30 rounded-lg border border-hairline bg-canvas p-1 shadow-[0_10px_28px_rgba(20,20,19,0.2)] outline-none ${
        placement === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
      } ${className}`}
      onKeyDown={(event: KeyboardEvent) => {
        if (event.key !== 'Escape') return;
        // only the panel closes: the board must not drop its selection too
        event.stopPropagation();
        onClose();
      }}
    >
      {children}
    </div>
  );
}
