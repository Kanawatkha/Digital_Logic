import { useCallback, useId, useState } from 'react';
import type { CSSProperties } from 'react';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import { WIRE_COLORS, WIRE_COLOR_NAMES, type WireColor } from '../board/palette';
import { Popover } from './Popover';

type WireToolbarProps = {
  color: WireColor;
  onColor: (color: WireColor) => void;
  /** Not enough room for all the colors in a row: they fold into one button that opens them */
  compact: boolean;
  canUndo: boolean;
  canRedo: boolean;
  /** A wire is selected */
  hasSelection: boolean;
  /** The selected wire is bent */
  canStraighten: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onDelete: () => void;
  onStraighten: () => void;
  /** There are wires to arrange */
  canArrange: boolean;
  onArrange: () => void;
  /** There are wires to paint */
  canPaint: boolean;
  onPaint: () => void;
  /** There is something on the breadboards to clear */
  canClear: boolean;
  onClear: () => void;
};

const BUTTON =
  'inline-flex size-10 items-center justify-center rounded-md text-ink transition-transform duration-150 active:scale-90 active:bg-surface-card disabled:text-muted-soft disabled:opacity-50 disabled:active:scale-100 disabled:active:bg-transparent';

type SwatchProps = {
  name: WireColor;
  checked: boolean;
  onPick: (name: WireColor) => void;
  /** Place in the row of a panel that opens: each one pops in a little after the one before */
  order?: number;
};

function Swatch({ name, checked, onPick, order }: SwatchProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      aria-label={UI_TEXT.labWireColors[name]}
      title={UI_TEXT.labWireColors[name]}
      className={`inline-flex size-10 items-center justify-center rounded-md active:bg-surface-card ${
        order === undefined ? '' : 'lab-item'
      }`}
      style={order === undefined ? undefined : ({ '--i': order } as CSSProperties)}
      onClick={() => onPick(name)}
    >
      <span
        className={`block size-6 rounded-full border-2 transition-all duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          checked
            ? 'scale-110 border-ink shadow-[0_0_0_2px_var(--color-canvas)]'
            : 'border-hairline'
        }`}
        style={{ backgroundColor: WIRE_COLORS[name].body }}
      />
    </button>
  );
}

/**
 * Wire tools, floating at the top left of the canvas: the color of the next wire (or of the
 * selected one), undo and redo, and straighten, delete and clear. Icons only; on a narrow screen
 * the colors fold into one button that shows the current color and opens the rest.
 */
export function WireToolbar({
  color,
  onColor,
  compact,
  canUndo,
  canRedo,
  hasSelection,
  canStraighten,
  onUndo,
  onRedo,
  onDelete,
  onStraighten,
  canArrange,
  onArrange,
  canPaint,
  onPaint,
  canClear,
  onClear,
}: WireToolbarProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const menuId = useId();

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-hairline bg-canvas p-1 shadow-[0_2px_10px_rgba(20,20,19,0.12)]">
      {compact ? (
        <div className="relative">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={open ? menuId : undefined}
            aria-label={`${UI_TEXT.labWireColor}: ${UI_TEXT.labWireColors[color]}`}
            title={`${UI_TEXT.labWireColor}: ${UI_TEXT.labWireColors[color]}`}
            className={`inline-flex h-10 items-center gap-1 rounded-md px-2 text-ink transition-colors active:bg-surface-card ${
              open ? 'bg-surface-card' : ''
            }`}
            onClick={() => setOpen((was) => !was)}
          >
            <span
              key={color}
              className="lab-swap block size-6 rounded-full border-2 border-ink"
              style={{ backgroundColor: WIRE_COLORS[color].body }}
            />
            <Icon
              name="chevron-down"
              size={14}
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>
          <Popover open={open} onClose={close} id={menuId} className="w-max">
            <div
              role="radiogroup"
              aria-label={UI_TEXT.labWireColor}
              className="grid grid-cols-4 gap-0.5"
            >
              {WIRE_COLOR_NAMES.map((name, order) => (
                <Swatch
                  key={name}
                  name={name}
                  checked={name === color}
                  order={order}
                  onPick={(picked) => {
                    onColor(picked);
                    close();
                  }}
                />
              ))}
            </div>
          </Popover>
        </div>
      ) : (
        <div role="radiogroup" aria-label={UI_TEXT.labWireColor} className="flex items-center">
          {WIRE_COLOR_NAMES.map((name) => (
            <Swatch key={name} name={name} checked={name === color} onPick={onColor} />
          ))}
        </div>
      )}
      <span className="mx-1 h-6 w-px bg-hairline" aria-hidden="true" />
      <button
        type="button"
        className={BUTTON}
        aria-label={UI_TEXT.labUndo}
        title={UI_TEXT.labUndo}
        disabled={!canUndo}
        onClick={onUndo}
      >
        <Icon name="undo" />
      </button>
      <button
        type="button"
        className={BUTTON}
        aria-label={UI_TEXT.labRedo}
        title={UI_TEXT.labRedo}
        disabled={!canRedo}
        onClick={onRedo}
      >
        <Icon name="redo" />
      </button>
      <span className="mx-1 h-6 w-px bg-hairline" aria-hidden="true" />
      <button
        type="button"
        className={BUTTON}
        aria-label={UI_TEXT.labArrange}
        title={UI_TEXT.labArrange}
        disabled={!canArrange}
        onClick={onArrange}
      >
        <Icon name="wand" />
      </button>
      <button
        type="button"
        className={BUTTON}
        aria-label={UI_TEXT.labPaint}
        title={UI_TEXT.labPaint}
        disabled={!canPaint}
        onClick={onPaint}
      >
        <Icon name="palette" />
      </button>
      <button
        type="button"
        className={BUTTON}
        aria-label={UI_TEXT.labStraighten}
        title={UI_TEXT.labStraighten}
        disabled={!canStraighten}
        onClick={onStraighten}
      >
        <Icon name="straight" />
      </button>
      <button
        type="button"
        className={BUTTON}
        aria-label={UI_TEXT.labDeleteWire}
        title={UI_TEXT.labDeleteWire}
        disabled={!hasSelection}
        onClick={onDelete}
      >
        <Icon name="trash" />
      </button>
      <button
        type="button"
        className={BUTTON}
        aria-label={UI_TEXT.labClear}
        title={UI_TEXT.labClear}
        disabled={!canClear}
        onClick={onClear}
      >
        <Icon name="reset" />
      </button>
    </div>
  );
}
