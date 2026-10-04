import { useEffect, useId, useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { QrCode } from '@/components/layout/QrCode';
import { UI_TEXT } from '@/config/site';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import './share-dialog.css';

const CLOSE_MS = 200;
const COPIED_MS = 1800;

type ShareDialogProps = { open: boolean; onClose: () => void; url: string };

async function copyText(text: string, fallbackTarget: HTMLInputElement | null): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    if (!fallbackTarget) return false;
    fallbackTarget.select();
    return document.execCommand('copy');
  }
}

/**
 * Centered share card with a QR code and the link (copy button inside the field). It stays
 * mounted for the length of the close animation. A press outside the card, the cross or Esc closes it.
 */
export function ShareDialog({ open, onClose, url }: ShareDialogProps) {
  const [mounted, setMounted] = useState(open);
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  if (open && !mounted) setMounted(true);

  useEffect(() => {
    if (open || !mounted) return;
    const timer = setTimeout(() => setMounted(false), CLOSE_MS);
    return () => clearTimeout(timer);
  }, [open, mounted]);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), COPIED_MS);
    return () => clearTimeout(timer);
  }, [copied]);

  useFocusTrap(cardRef, open, onClose);
  // held until the close animation has ended, or the page would widen under the fading overlay
  useLockBodyScroll(mounted);

  if (!mounted) return null;

  const copy = async () => {
    setCopied(await copyText(url, inputRef.current));
  };

  return (
    <div
      data-state={open ? 'open' : 'closed'}
      className="share-overlay fixed inset-0 z-[70] flex items-center justify-center p-4"
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="share-card relative flex w-full max-w-[420px] flex-col items-center gap-5 rounded-lg bg-canvas p-6 pt-8 shadow-[0_24px_64px_rgb(20_20_19/0.25)] md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={UI_TEXT.dismiss}
          className="absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-md text-ink"
        >
          <Icon name="close" size={22} />
        </button>
        <div className="flex flex-col items-center gap-1 text-center">
          <h2 id={titleId} className="type-title-lg text-ink">
            {UI_TEXT.share}
          </h2>
          <p className="type-body-sm text-muted">{UI_TEXT.shareHint}</p>
        </div>
        <QrCode
          value={url}
          label={`QR ${url}`}
          className="size-[min(60vw,224px)] rounded-md border border-hairline"
        />
        <div className="flex w-full items-center gap-2 rounded-md border border-hairline bg-surface-soft py-1 ps-3 pe-1">
          <input
            ref={inputRef}
            readOnly
            value={url}
            aria-label={UI_TEXT.share}
            onFocus={(event) => event.currentTarget.select()}
            className="type-body-sm min-w-0 flex-1 bg-transparent py-2 text-ink outline-none"
          />
          <button
            type="button"
            onClick={copy}
            aria-label={UI_TEXT.copyLink}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-active text-on-primary"
          >
            <Icon name={copied ? 'check' : 'copy'} size={20} />
          </button>
        </div>
        <p aria-live="polite" className="sr-only">
          {copied ? UI_TEXT.linkCopied : ''}
        </p>
      </div>
    </div>
  );
}
