import { useCallback, useId, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent, RefObject } from 'react';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import { IC_SPECS, IC_TYPES, type IcType } from '../sim/ics';
import { Popover } from './Popover';

type IcTrayProps = {
  /** Not enough room for five chips in a row: one chip shows, and a button swaps it for another */
  compact: boolean;
  /** Opens the drawer with the pin diagram of every chip; `buttonRef` lets the page put the focus back */
  onOpenDiagrams: () => void;
  diagramsRef: RefObject<HTMLButtonElement | null>;
  /** Opens the drawer with the truth table, the circuit diagram and the equations of what is built */
  onOpenResults: () => void;
  resultsRef: RefObject<HTMLButtonElement | null>;
  /** A tap or the keyboard: put this chip on a free place of a breadboard */
  onPlace: (type: IcType) => void;
  /** A drag out of the tray: the board takes over the pointer; `onEnd` says whether it moved */
  onDragStart: (
    type: IcType,
    event: PointerEvent<HTMLButtonElement>['nativeEvent'],
    onEnd: (moved: boolean) => void,
  ) => void;
};

/** The five chips of the lab, to drag onto a breadboard (or tap to place). */
export function IcTray({
  compact,
  onOpenDiagrams,
  diagramsRef,
  onOpenResults,
  resultsRef,
  onPlace,
  onDragStart,
}: IcTrayProps) {
  // a drag ends in a click on the same button; it must not place a second chip
  const dragged = useRef(false);
  const [picked, setPicked] = useState<IcType>(IC_TYPES[0] ?? '7404');
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const menuId = useId();

  const chip = (type: IcType) => (
    <button
      key={type}
      type="button"
      aria-label={`${type} ${IC_SPECS[type].symbol}`}
      title={`${type} ${IC_SPECS[type].name}. ${UI_TEXT.labTrayHint}`}
      className="flex h-10 min-w-14 touch-none flex-col items-center justify-center overflow-hidden rounded-md bg-surface-dark px-2 text-on-dark transition-transform duration-150 select-none active:scale-95 active:bg-surface-dark-elevated"
      onPointerDown={(event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) return;
        dragged.current = false;
        try {
          event.currentTarget.setPointerCapture(event.pointerId);
        } catch {
          // the pointer is already gone: the drag still works through the window
        }
        onDragStart(type, event.nativeEvent, (moved) => {
          dragged.current = moved;
        });
      }}
      onClick={() => {
        if (dragged.current) {
          dragged.current = false;
          return;
        }
        onPlace(type);
      }}
    >
      {/* a new chip slides in when the one shown is swapped */}
      <span key={type} className="lab-swap flex flex-col items-center">
        <span className="text-[13px] leading-4 font-medium tabular-nums">{type}</span>
        <span className="text-[10px] leading-3 text-on-dark-soft">{IC_SPECS[type].symbol}</span>
      </span>
    </button>
  );

  return (
    <div
      role="group"
      aria-label={UI_TEXT.labTray}
      title={UI_TEXT.labTrayHint}
      className="flex items-center gap-1 rounded-lg border border-hairline bg-canvas p-1 shadow-[0_2px_10px_rgba(20,20,19,0.12)]"
    >
      {compact ? (
        <div className="relative flex items-center gap-0.5">
          {chip(picked)}
          <button
            type="button"
            aria-expanded={open}
            aria-controls={open ? menuId : undefined}
            aria-label={UI_TEXT.labTrayPick}
            title={UI_TEXT.labTrayPick}
            className={`inline-flex h-10 w-7 items-center justify-center rounded-md text-ink transition-colors active:bg-surface-card ${
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
          <Popover open={open} onClose={close} id={menuId} className="w-max">
            <div
              role="radiogroup"
              aria-label={UI_TEXT.labTrayPick}
              className="flex flex-col gap-0.5"
            >
              {IC_TYPES.map((type, order) => (
                <button
                  key={type}
                  type="button"
                  role="radio"
                  aria-checked={type === picked}
                  aria-label={`${type} ${IC_SPECS[type].symbol}`}
                  title={`${type} ${IC_SPECS[type].name}`}
                  className={`lab-item flex h-10 w-44 items-center gap-3 rounded-md px-2 text-left text-ink transition-colors active:bg-surface-card ${
                    type === picked ? 'bg-surface-card' : ''
                  }`}
                  style={{ '--i': order } as CSSProperties}
                  onClick={() => {
                    setPicked(type);
                    close();
                  }}
                >
                  <span className="inline-flex h-7 min-w-12 items-center justify-center rounded-sm bg-surface-dark px-2 text-[13px] font-medium text-on-dark tabular-nums">
                    {type}
                  </span>
                  <span className="type-caption grow">{IC_SPECS[type].symbol}</span>
                  {type === picked ? <Icon name="check" size={16} /> : null}
                </button>
              ))}
            </div>
          </Popover>
        </div>
      ) : (
        IC_TYPES.map((type) => chip(type))
      )}
      <span className="mx-0.5 h-6 w-px bg-hairline" aria-hidden="true" />
      <button
        ref={diagramsRef}
        type="button"
        aria-haspopup="dialog"
        aria-label={UI_TEXT.labDiagrams}
        title={UI_TEXT.labDiagrams}
        className="inline-flex size-10 items-center justify-center rounded-md text-ink transition-transform duration-150 active:scale-90 active:bg-surface-card"
        onClick={onOpenDiagrams}
      >
        <Icon name="chip" />
      </button>
      <button
        ref={resultsRef}
        type="button"
        aria-haspopup="dialog"
        aria-label={UI_TEXT.labResults}
        title={UI_TEXT.labResults}
        className="inline-flex size-10 items-center justify-center rounded-md text-ink transition-transform duration-150 active:scale-90 active:bg-surface-card"
        onClick={onOpenResults}
      >
        <Icon name="table" />
      </button>
    </div>
  );
}
