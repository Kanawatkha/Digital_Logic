import { useCallback, useId, useState } from 'react';
import type { CSSProperties } from 'react';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import { ARIA_KEYS, KEYS, withKey } from '../shortcuts';
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
  /** Very narrow screen: arrange, paint and straighten fold into one button that shows one of them */
  foldTools: boolean;
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

type ToolSpec = {
  id: 'arrange' | 'paint' | 'straighten';
  icon: 'wand' | 'palette' | 'straight';
  label: string;
  /** The key that does it, for the tooltip and for assistive technology */
  key?: { shown: string; aria: string };
  disabled: boolean;
  run: () => void;
};

function ToolButton({ tool }: { tool: ToolSpec }) {
  return (
    <button
      type="button"
      className={BUTTON}
      aria-label={tool.label}
      aria-keyshortcuts={tool.key?.aria}
      title={tool.key ? withKey(tool.label, tool.key.shown) : tool.label}
      disabled={tool.disabled}
      onClick={tool.run}
    >
      <Icon name={tool.icon} />
    </button>
  );
}

/**
 * For a very narrow screen: one of arrange, paint and straighten shows, as a button that does it,
 * and a small arrow opens the list to swap it for another (as with the chips).
 */
function ToolPicker({ tools }: { tools: readonly ToolSpec[] }) {
  const [picked, setPicked] = useState<ToolSpec['id']>('arrange');
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const menuId = useId();
  const shown = tools.find((tool) => tool.id === picked) ?? tools[0]!;
  return (
    <div className="relative flex items-center">
      <span key={shown.id} className="lab-swap">
        <ToolButton tool={shown} />
      </span>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={UI_TEXT.labWireTools}
        title={UI_TEXT.labWireTools}
        className={`inline-flex h-10 w-6 items-center justify-center rounded-md text-ink transition-colors active:bg-surface-card ${
          open ? 'bg-surface-card' : ''
        }`}
        onClick={() => setOpen((was) => !was)}
      >
        <Icon
          name="chevron-down"
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <Popover open={open} onClose={close} id={menuId} className="w-max">
        <div role="radiogroup" aria-label={UI_TEXT.labWireTools} className="flex flex-col gap-0.5">
          {tools.map((tool, order) => (
            <button
              key={tool.id}
              type="button"
              role="radio"
              aria-checked={tool.id === picked}
              aria-label={tool.label}
              title={tool.label}
              className={`lab-item flex h-10 items-center gap-3 rounded-md px-3 text-left text-ink transition-colors active:bg-surface-card ${
                tool.id === picked ? 'bg-surface-card' : ''
              }`}
              style={{ '--i': order } as CSSProperties}
              onClick={() => {
                setPicked(tool.id);
                close();
              }}
            >
              <Icon name={tool.icon} size={20} />
              <span className="type-caption grow">{tool.label}</span>
              {tool.id === picked ? <Icon name="check" size={16} /> : null}
            </button>
          ))}
        </div>
      </Popover>
    </div>
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
  foldTools,
}: WireToolbarProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const menuId = useId();
  const tools: ToolSpec[] = [
    {
      id: 'arrange',
      icon: 'wand',
      label: UI_TEXT.labArrange,
      key: { shown: KEYS.arrange, aria: ARIA_KEYS.arrange },
      disabled: !canArrange,
      run: onArrange,
    },
    { id: 'paint', icon: 'palette', label: UI_TEXT.labPaint, disabled: !canPaint, run: onPaint },
    {
      id: 'straighten',
      icon: 'straight',
      label: UI_TEXT.labStraighten,
      disabled: !canStraighten,
      run: onStraighten,
    },
  ];

  return (
    <div className="flex max-w-full items-center gap-0 rounded-lg border border-hairline bg-canvas p-1 shadow-[0_2px_10px_rgba(20,20,19,0.12)] md:gap-0.5">
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
      <span className="mx-0 h-6 w-px bg-hairline md:mx-1" aria-hidden="true" />
      <button
        type="button"
        className={BUTTON}
        aria-label={UI_TEXT.labUndo}
        aria-keyshortcuts={ARIA_KEYS.undo}
        title={withKey(UI_TEXT.labUndo, KEYS.undo)}
        disabled={!canUndo}
        onClick={onUndo}
      >
        <Icon name="undo" />
      </button>
      <button
        type="button"
        className={BUTTON}
        aria-label={UI_TEXT.labRedo}
        aria-keyshortcuts={ARIA_KEYS.redo}
        title={withKey(UI_TEXT.labRedo, KEYS.redo)}
        disabled={!canRedo}
        onClick={onRedo}
      >
        <Icon name="redo" />
      </button>
      <span className="mx-0 h-6 w-px bg-hairline md:mx-1" aria-hidden="true" />
      {foldTools ? (
        <ToolPicker tools={tools} />
      ) : (
        tools.map((tool) => <ToolButton key={tool.id} tool={tool} />)
      )}
      <button
        type="button"
        className={BUTTON}
        aria-label={UI_TEXT.labDeleteWire}
        aria-keyshortcuts={ARIA_KEYS.delete}
        title={withKey(UI_TEXT.labDeleteWire, KEYS.delete)}
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
