import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';

type CopyButtonProps = {
  /** What goes to the clipboard */
  text: string;
  /** What the button says (and, for the icon alone, its name) */
  label: string;
  /** Only the icon, small, for a button that sits beside the thing it copies */
  iconOnly?: boolean;
};

/** A button that copies a text and says so for a moment ("คัดลอกแล้ว"). */
export function CopyButton({ text, label, iconOnly = false }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };
  const shown = copied ? UI_TEXT.labResultsCopied : label;
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={iconOnly ? shown : undefined}
      title={iconOnly ? shown : undefined}
      className={
        iconOnly
          ? 'inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted transition-colors active:bg-surface-card'
          : 'type-caption inline-flex h-9 items-center gap-1.5 rounded-md border border-hairline bg-canvas px-3 text-ink active:bg-surface-card'
      }
    >
      <Icon name={copied ? 'check' : 'copy'} size={16} />
      {iconOnly ? null : shown}
    </button>
  );
}
