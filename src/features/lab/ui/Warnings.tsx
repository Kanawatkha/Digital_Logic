import { useCallback, useId, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import type { PlacedIc, Warning } from '../sim/evaluate';
import { Popover } from './Popover';
import { usePresence } from './usePresence';
import { warningMessages, type WarningMessage } from './warningMessages';

type WarningsProps = {
  warnings: readonly Warning[];
  ics: readonly PlacedIc[];
  /** Where the list opens: over the button (the button is at the bottom of the screen) or under it */
  placement?: 'top' | 'bottom';
  /** The edge of the button the list lines up with: the right one when the button is at the right of the screen */
  align?: 'left' | 'right';
};

const sameMessages = (a: readonly WarningMessage[], b: readonly WarningMessage[]) =>
  a.length === b.length && a.every((m, k) => m.text === b[k]?.text && m.severe === b[k]?.severe);

/**
 * Warnings from the simulator as one small button at the bottom left of the canvas: an alert icon
 * and how many there are, red when one of them breaks the circuit and amber otherwise. It appears by
 * itself when there is something to say and goes when there is not. Pressing it opens the list in a
 * panel over the board (it takes no room of its own). A screen reader gets the messages as they
 * come, from a live region.
 */
export function Warnings({ warnings, ics, placement = 'top', align = 'left' }: WarningsProps) {
  const messages = useMemo(
    () => warningMessages(warnings, ics).sort((a, b) => Number(b.severe) - Number(a.severe)),
    [warnings, ics],
  );
  const has = messages.length > 0;
  // the list is kept while the button leaves, so it does not empty out as it fades
  const [kept, setKept] = useState(messages);
  if (has && !sameMessages(messages, kept)) setKept(messages);
  const list = has ? messages : kept;

  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const { shown, state } = usePresence(has, 200);
  const panelId = useId();
  const severe = list.some((message) => message.severe);
  const label = `${UI_TEXT.labWarnings}: ${list.length}`;

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
            className={`type-nav inline-flex h-12 items-center gap-2 rounded-lg px-3.5 shadow-[0_2px_10px_rgba(20,20,19,0.18)] transition-[background-color,transform] duration-200 active:scale-95 ${
              severe ? 'bg-error text-on-primary' : 'bg-warning text-ink'
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
              {list.map(({ text, severe: isSevere }, order) => (
                <li
                  key={text}
                  className={`type-nav lab-fade rounded-md px-3 py-2 ${
                    isSevere ? 'bg-error text-on-primary' : 'bg-warning text-ink'
                  }`}
                  style={{ '--i': order } as CSSProperties}
                >
                  {text}
                </li>
              ))}
            </ul>
          </Popover>
        </div>
      ) : null}
    </>
  );
}
