import { useCallback, useId, useState } from 'react';
import type { CSSProperties, RefObject } from 'react';
import { Icon, type IconName } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import { ARIA_KEYS, KEYS, withKey } from '../shortcuts';
import { Popover } from './Popover';

type BoardToolsProps = {
  /** The signal view: wires colored by what they carry */
  signal: boolean;
  onSignal: () => void;
  /** Saves the picture of the board */
  onImage: () => void;
  /** Opens the circuits that were kept by name */
  onSaved: () => void;
  /** The button that is shown, so the focus can go back to it when the drawer of the saved circuits closes */
  buttonRef?: RefObject<HTMLButtonElement | null>;
};

const BUTTON =
  'inline-flex size-10 items-center justify-center rounded-md text-ink max-[400px]:size-9 active:bg-surface-card';

/** The three things the board can do besides zooming; one is shown, the others are in the menu. */
type Action = 'signal' | 'image' | 'saved';
const ACTIONS: readonly Action[] = ['signal', 'image', 'saved'];
const ICON: Record<Action, IconName> = { signal: 'signal', image: 'image', saved: 'save' };
const LABEL: Record<Action, string> = {
  signal: UI_TEXT.labSignal,
  image: UI_TEXT.labBoardImage,
  saved: UI_TEXT.labSaved,
};

/**
 * One button for what else the board can do (the signal view, the picture of the board, the
 * circuits kept by name), in the tray with the chips. Like the chips, the one that is shown is the
 * one that was picked last; the arrow beside it opens the others, and choosing one does it and
 * shows it from then on.
 */
export function BoardTools({ signal, onSignal, onImage, onSaved, buttonRef }: BoardToolsProps) {
  const [picked, setPicked] = useState<Action>('signal');
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const menuId = useId();

  const run = (action: Action) => {
    if (action === 'signal') onSignal();
    else if (action === 'image') onImage();
    else onSaved();
  };
  const hint = (action: Action) =>
    action === 'signal' ? withKey(LABEL.signal, KEYS.signal) : LABEL[action];

  return (
    <div className="relative flex items-center">
      <button
        ref={buttonRef}
        type="button"
        className={`${BUTTON} transition-colors ${
          picked === 'signal' && signal ? 'bg-ink text-on-dark active:bg-ink' : ''
        }`}
        aria-label={LABEL[picked]}
        aria-pressed={picked === 'signal' ? signal : undefined}
        aria-keyshortcuts={picked === 'signal' ? ARIA_KEYS.signal : undefined}
        title={hint(picked)}
        onClick={() => run(picked)}
      >
        {/* a new button slides in when the one shown is swapped */}
        <span key={picked} className="lab-swap inline-flex">
          <Icon name={ICON[picked]} />
        </span>
      </button>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={UI_TEXT.labBoardMenu}
        title={UI_TEXT.labBoardMenu}
        className={`inline-flex h-10 w-6 items-center justify-center rounded-md text-ink max-[400px]:h-9 max-[400px]:w-5 transition-colors active:bg-surface-card ${
          open ? 'bg-surface-card' : ''
        }`}
        onClick={() => setOpen((was) => !was)}
      >
        <Icon
          name="chevron-down"
          size={16}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <Popover open={open} onClose={close} id={menuId} align="right" className="w-max">
        <div role="group" aria-label={UI_TEXT.labBoardMenu} className="flex flex-col gap-0.5">
          {ACTIONS.map((action, order) => (
            <button
              key={action}
              type="button"
              aria-pressed={action === 'signal' ? signal : undefined}
              aria-current={action === picked ? 'true' : undefined}
              className={`lab-item flex h-10 min-w-56 items-center gap-3 rounded-md px-2 text-left text-ink transition-colors active:bg-surface-card ${
                action === picked ? 'bg-surface-card' : ''
              }`}
              style={{ '--i': order } as CSSProperties}
              onClick={() => {
                setPicked(action);
                close();
                run(action);
              }}
            >
              <span className="inline-flex size-7 items-center justify-center">
                <Icon name={ICON[action]} size={20} />
              </span>
              <span className="type-nav grow">{LABEL[action]}</span>
              {action === 'signal' ? (
                <span
                  className={`type-caption rounded-full px-2 py-0.5 ${
                    signal ? 'bg-ink text-on-dark' : 'bg-surface-card text-muted'
                  }`}
                >
                  {signal ? UI_TEXT.labBoardMenuOn : UI_TEXT.labBoardMenuOff}
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </Popover>
    </div>
  );
}
