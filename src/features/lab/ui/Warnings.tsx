import { useCallback, useEffect, useId, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import type { PlacedIc, Warning } from '../sim/evaluate';
import { Popover } from './Popover';
import { usePresence } from './usePresence';
import {
  warningMessages,
  type WarningLevel,
  type WarningMessage,
  type WarningTarget,
} from './warningMessages';

type WarningsProps = {
  warnings: readonly Warning[];
  ics: readonly PlacedIc[];
  /** Where the list opens: over the button (the button is at the bottom of the screen) or under it */
  placement?: 'top' | 'bottom';
  /** The edge of the button the list lines up with: the right one when the button is at the right of the screen */
  align?: 'left' | 'right';
  /** Shows a message's place on the board: a message that has one gets a button for it */
  onLocate?: (target: WarningTarget) => void;
  /** Opens the pin diagram of a chip: a line about a chip gets a button for it */
  onShowPins?: (icId: string) => void;
};

/** How long the circuit stays as it is before a suggestion about the wiring is shown */
export const SOFT_DELAY_MS = 600;

const RANK: Record<WarningLevel, number> = { severe: 0, warn: 1, hint: 2 };

const ITEM_STYLE: Record<WarningLevel, string> = {
  severe: 'bg-error text-on-primary',
  warn: 'bg-warning text-ink',
  hint: 'border border-hairline bg-surface-card text-ink',
};

const sameMessages = (a: readonly WarningMessage[], b: readonly WarningMessage[]) =>
  a.length === b.length && a.every((m, k) => m.text === b[k]?.text && m.level === b[k]?.level);

/**
 * Warnings from the simulator as one small button at the bottom left of the canvas: an alert icon
 * and how many there are, red when one of them breaks the circuit, amber when one is to be fixed and
 * dark when there are only suggestions. It appears by itself when there is something to say and goes
 * when there is not, and shakes once when a fault that breaks the circuit appears. Pressing it opens
 * the list in a panel over the board (it takes no room of its own); a line with a place on the board
 * moves the board there. A suggestion about the wiring waits until the circuit has stayed as it is
 * for a moment. A screen reader gets the messages as they come, from a live region.
 */
export function Warnings({
  warnings,
  ics,
  placement = 'top',
  align = 'left',
  onLocate,
  onShowPins,
}: WarningsProps) {
  const all = useMemo(
    () => warningMessages(warnings, ics).sort((a, b) => RANK[a.level] - RANK[b.level]),
    [warnings, ics],
  );
  // a suggestion about the wiring is held back until the circuit has stayed as it is for a moment
  const [settled, setSettled] = useState<ReadonlySet<string>>(new Set());
  const softTexts = useMemo(() => all.filter((m) => m.soft).map((m) => m.text), [all]);
  const stale = [...settled].filter((text) => !softTexts.includes(text));
  if (stale.length > 0)
    setSettled(new Set([...settled].filter((text) => softTexts.includes(text))));
  const waiting = softTexts.some((text) => !settled.has(text));
  useEffect(() => {
    if (!waiting) return;
    const timer = window.setTimeout(() => setSettled(new Set(softTexts)), SOFT_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [waiting, softTexts]);
  const messages = useMemo(() => all.filter((m) => !m.soft || settled.has(m.text)), [all, settled]);

  const has = messages.length > 0;
  // the list is kept while the button leaves, so it does not empty out as it fades
  const [kept, setKept] = useState(messages);
  if (has && !sameMessages(messages, kept)) setKept(messages);
  const list = has ? messages : kept;

  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const { shown, state } = usePresence(has, 200);
  const panelId = useId();
  const severe = list.some((message) => message.level === 'severe');
  const worst: WarningLevel = severe
    ? 'severe'
    : list.some((message) => message.level === 'warn')
      ? 'warn'
      : 'hint';
  const label = `${UI_TEXT.labWarnings}: ${list.length}`;

  // a fault that breaks the circuit shakes the button once, when it appears
  const [wasSevere, setWasSevere] = useState(false);
  const [shaking, setShaking] = useState(false);
  if (has && severe !== wasSevere) {
    setWasSevere(severe);
    if (severe) setShaking(true);
  }
  if (!has && wasSevere) setWasSevere(false);

  const locate = (target: WarningTarget) => {
    onLocate?.(target);
    close();
  };
  const showPins = (icId: string) => {
    close();
    onShowPins?.(icId);
  };

  return (
    <>
      <div role="status" aria-live="polite" aria-label={UI_TEXT.labWarnings} className="sr-only">
        {messages.map((message) => (
          <p key={message.text}>{message.text}</p>
        ))}
      </div>
      {shown ? (
        <div className="lab-appear pointer-events-auto relative" data-state={state}>
          <button
            type="button"
            aria-expanded={open && has}
            aria-controls={open && has ? panelId : undefined}
            aria-label={label}
            title={label}
            data-shaking={shaking || undefined}
            onAnimationEnd={(event) => {
              // the shake and the ring play together; the ring is the longer one. The number beside
              // it has an animation of its own, whose end bubbles up to here
              if (event.animationName === 'lab-ring') setShaking(false);
            }}
            className={`lab-shake type-nav inline-flex h-12 items-center gap-2 rounded-lg px-3.5 shadow-[0_2px_10px_rgba(20,20,19,0.18)] transition-[background-color,transform] duration-200 active:scale-95 ${
              worst === 'severe'
                ? 'bg-error text-on-primary'
                : worst === 'warn'
                  ? 'bg-warning text-ink'
                  : 'bg-surface-dark text-on-dark'
            }`}
            onClick={() => setOpen((was) => !was)}
          >
            <Icon name="alert" />
            <span key={list.length} className="lab-swap font-medium tabular-nums">
              {list.length}
            </span>
          </button>
          <Popover
            open={open && has}
            onClose={close}
            id={panelId}
            placement={placement}
            align={align}
            className="w-[min(26rem,calc(100vw-1.5rem))]"
          >
            <ul className="flex max-h-[40dvh] flex-col gap-1 overflow-x-hidden overflow-y-auto">
              {list.map(({ text, level, target }, order) => (
                <li
                  key={text}
                  className={`type-nav lab-fade overflow-hidden rounded-md ${ITEM_STYLE[level]}`}
                  style={{ '--i': order } as CSSProperties}
                >
                  <div className="flex items-stretch">
                    {target && onLocate ? (
                      <button
                        type="button"
                        onClick={() => locate(target)}
                        className="flex min-w-0 flex-1 items-start justify-between gap-3 px-3 py-2 text-left active:opacity-80"
                      >
                        <span>{text}</span>
                        <span className="type-caption shrink-0 underline underline-offset-2">
                          {UI_TEXT.labWarnLocate}
                        </span>
                      </button>
                    ) : (
                      <p className="min-w-0 flex-1 px-3 py-2">{text}</p>
                    )}
                    {target?.kind === 'ic' && onShowPins ? (
                      <button
                        type="button"
                        onClick={() => showPins(target.id)}
                        className="type-caption shrink-0 self-stretch border-s border-current/30 px-3 underline underline-offset-2 active:opacity-80"
                      >
                        {UI_TEXT.labWarnPins}
                      </button>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </Popover>
        </div>
      ) : null}
    </>
  );
}
