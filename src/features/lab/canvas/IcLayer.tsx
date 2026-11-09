import type { CSSProperties } from 'react';
import { UI_TEXT } from '@/config/site';
import { IC_OVERHANG, icFrame, icFrameAt, type IcFrame, type Position } from '../board/geometry';
import { CHANNEL_GAP, PITCH } from '../board/layout';
import { BOARD_COLORS, EDIT_COLORS, SILK_FONT } from '../board/palette';
import type { PlacedIc } from '../sim/evaluate';
import { DIP_PINS, DIP_SPAN, IC_SPECS, type IcType } from '../sim/ics';
import type { IcNote } from '../sim/notes';
import { useFresh } from './useFresh';
import type { Preview } from './useWireTool';

const NOTE_TEXT: Record<IcNote, string> = {
  reversed: UI_TEXT.labIcReversed,
  unpowered: UI_TEXT.labIcNoPower,
  floating: UI_TEXT.labIcFloating,
  unstable: UI_TEXT.labIcUnstable,
};

/** The longest an entrance lasts: eight chips one after the other, and the last one dropped */
const CHIP_ENTRANCE_MS = 1500;

/** Pin numbers are drawn once the board is zoomed in this far. */
const PIN_NUMBERS_SCALE = 1.8;

type Pin = { number: number; x: number; y: number; top: boolean };

/** Where the legs of a chip are, from its frame: pins 1 to 7 along the bottom, 8 to 14 along the top. */
function pinsOf(frame: IcFrame): Pin[] {
  const pins: Pin[] = [];
  for (let number = 1; number <= DIP_PINS; number++) {
    const top = number > DIP_SPAN;
    const column = top ? DIP_PINS - number : number - 1;
    pins.push({
      number,
      x: frame.x + IC_OVERHANG * PITCH + column * PITCH,
      y: frame.centerY + (top ? -CHANNEL_GAP : CHANNEL_GAP) / 2,
      top,
    });
  }
  return pins;
}

type ChipProps = {
  frame: IcFrame;
  type: IcType;
  scale: number;
  opacity?: number;
  /** Outline color for a selected chip or a chip being placed */
  outline?: string;
  /** Fill the outline lightly (a chip being held) */
  tint?: boolean;
};

/** One chip: legs in the holes, black body, notch at the left, pin 1 dot, number and gate. */
function Chip({ frame, type, scale, opacity = 1, outline, tint = false }: ChipProps) {
  const pins = pinsOf(frame);
  const bottom = frame.y + frame.height;
  const showPins = scale >= PIN_NUMBERS_SCALE;
  return (
    <g opacity={opacity}>
      {outline ? (
        <rect
          x={frame.x - 4}
          y={frame.centerY - CHANNEL_GAP / 2 - 5}
          width={frame.width + 8}
          height={CHANNEL_GAP + 10}
          rx={6}
          fill={tint ? outline : 'none'}
          fillOpacity={0.25}
          stroke={outline}
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
          pointerEvents="none"
        />
      ) : null}
      {pins.map((pin) => (
        <g key={pin.number} fill={BOARD_COLORS.pin}>
          <rect
            x={pin.x - 1.9}
            y={pin.top ? pin.y - 1.5 : frame.y + frame.height - 2}
            width={3.8}
            height={pin.top ? frame.y - pin.y + 3.5 : pin.y - bottom + 3.5}
            rx={0.6}
          />
          <circle cx={pin.x} cy={pin.y} r={2.3} />
        </g>
      ))}
      <rect
        x={frame.x}
        y={frame.y}
        width={frame.width}
        height={frame.height}
        rx={3}
        fill={BOARD_COLORS.chip}
        stroke={BOARD_COLORS.chipEdge}
        strokeWidth={1}
      />
      <path
        d={`M${frame.x} ${frame.centerY - 4.5}a4.5 4.5 0 0 1 0 9`}
        fill="none"
        stroke={BOARD_COLORS.chipEdge}
        strokeWidth={1.3}
      />
      <circle
        cx={frame.x + 11}
        cy={bottom - 6}
        r={1.8}
        fill={BOARD_COLORS.chipText}
        opacity={0.7}
      />
      <text
        x={frame.centerX + 2}
        y={frame.centerY + 0.5}
        textAnchor="middle"
        fontFamily={SILK_FONT}
        fontSize={10.5}
        fontWeight={600}
        fill={BOARD_COLORS.chipText}
        pointerEvents="none"
      >
        {type}
      </text>
      <text
        x={frame.centerX + 2}
        y={frame.centerY + 8.5}
        textAnchor="middle"
        fontFamily={SILK_FONT}
        fontSize={6.5}
        fill={BOARD_COLORS.chipText}
        opacity={0.8}
        pointerEvents="none"
      >
        {IC_SPECS[type].symbol}
      </text>
      {showPins
        ? pins.map((pin) => (
            <text
              key={pin.number}
              x={pin.x}
              y={pin.top ? frame.y + 8 : bottom - 3}
              textAnchor="middle"
              fontFamily={SILK_FONT}
              fontSize={6}
              fill={BOARD_COLORS.chipText}
              pointerEvents="none"
            >
              {pin.number}
            </text>
          ))
        : null}
    </g>
  );
}

function Badge({
  frame,
  text,
  scale,
  danger = false,
}: {
  frame: IcFrame;
  text: string;
  scale: number;
  danger?: boolean;
}) {
  // keeps a readable size on screen, between 8 and 18 board px
  const size = Math.min(18, Math.max(8, 11 / scale));
  const width = text.length * size * 0.62 + size;
  const x = frame.centerX - width / 2;
  const y = frame.y - CHANNEL_GAP / 2 - size * 1.5;
  return (
    <g pointerEvents="none">
      <rect
        x={x}
        y={y}
        width={width}
        height={size * 1.5}
        rx={size * 0.5}
        fill={danger ? EDIT_COLORS.invalid : EDIT_COLORS.badge}
        stroke={EDIT_COLORS.badgeText}
        strokeWidth={0.6}
      />
      <text
        x={frame.centerX}
        y={y + size * 1.08}
        textAnchor="middle"
        fontSize={size}
        fontFamily={SILK_FONT}
        fontWeight={600}
        fill={EDIT_COLORS.badgeText}
      >
        {text}
      </text>
    </g>
  );
}

type IcLayerProps = {
  ics: readonly PlacedIc[];
  selected: string | null;
  /** A hint for the chips that have one, by chip id */
  notes: Readonly<Record<string, IcNote>>;
  preview: Preview | null;
  scale: number;
};

/**
 * The chips on the breadboards, and the chip being held while one is dragged. A chip that is being
 * moved stays dim where it was until it lands.
 */
export function IcLayer({ ics, selected, notes, preview, scale }: IcLayerProps) {
  const held = preview?.kind === 'ic' ? preview : null;
  // a chip that is new to the board drops in (one after the other when there are many); the chips
  // that were there when the page opened do not, and it stops being new when its entrance is over
  const fresh = useFresh(
    ics.map((ic) => ic.id),
    CHIP_ENTRANCE_MS,
  );
  let ghost: { frame: IcFrame; outline: string } | null = null;
  if (held) {
    const snapped = held.snap && icFrame(held.snap.board, held.snap.col);
    const at: Position = held.at;
    ghost = {
      frame: snapped || icFrameAt(at.x, at.y),
      outline: held.snap && held.valid ? EDIT_COLORS.halo : EDIT_COLORS.invalid,
    };
    // a chip dragged off the boards is on its way out; the same red says so
    if (held.icId !== null && !held.snap) ghost.outline = EDIT_COLORS.invalid;
  }

  return (
    <g>
      {ics.map((ic) => {
        const frame = icFrame(ic.board, ic.col);
        if (!frame) return null;
        const note = notes[ic.id];
        return (
          <g
            key={ic.id}
            data-ic-id={ic.id}
            className={fresh.has(ic.id) ? 'lab-chip-drop' : undefined}
            style={
              fresh.has(ic.id)
                ? ({ '--i': Math.min(fresh.get(ic.id) ?? 0, 8) } as CSSProperties)
                : undefined
            }
          >
            <Chip
              frame={frame}
              type={ic.type}
              scale={scale}
              opacity={held?.icId === ic.id ? 0.35 : 1}
              outline={ic.id === selected ? EDIT_COLORS.halo : undefined}
            />
            {note && held?.icId !== ic.id ? (
              <Badge
                frame={frame}
                text={NOTE_TEXT[note]}
                scale={scale}
                danger={note === 'reversed'}
              />
            ) : null}
          </g>
        );
      })}
      {held && ghost ? (
        <g pointerEvents="none">
          <Chip
            frame={ghost.frame}
            type={held.icType}
            scale={scale}
            opacity={0.85}
            outline={ghost.outline}
            tint
          />
        </g>
      ) : null}
    </g>
  );
}
