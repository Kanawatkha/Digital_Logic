import {
  BREADBOARDS,
  CHANNEL_GAP,
  COLUMNS,
  PITCH,
  RAIL_CENTER_AT,
  RAIL_GROUP,
  RAIL_LINES,
  type BreadboardLayout,
} from '../layout';
import { breadboardFrame, railSlot } from '../geometry';
import { BOARD_COLORS, SILK_FONT } from '../palette';

const HOLE = 3.6;
const NUMBERED = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60] as const;

function Breadboard({ board, index }: { board: BreadboardLayout; index: number }) {
  const body = index === 0 ? BOARD_COLORS.cream : BOARD_COLORS.creamYellow;
  const frame = breadboardFrame(index);
  if (!frame) return null;
  const { left, right, top, bottom } = frame;
  const rowE = board.rowAY + 4 * PITCH;
  const rowF = rowE + CHANNEL_GAP;
  const rowJ = rowF + 4 * PITCH;
  // a rail is two halves of whole blocks with a wider gap between them
  const halfWidth = (RAIL_CENTER_AT / RAIL_GROUP) * (RAIL_GROUP + 1) * PITCH;
  const secondHalfAt = railSlot(RAIL_CENTER_AT) * PITCH;
  return (
    <g>
      <rect
        x={left}
        y={top}
        width={right - left}
        height={bottom - top}
        rx={5}
        fill={body}
        stroke={BOARD_COLORS.creamEdge}
        strokeWidth={2}
      />
      <rect
        x={left + 6}
        y={rowE + 5}
        width={right - left - 12}
        height={CHANNEL_GAP - 10}
        rx={2}
        fill={BOARD_COLORS.creamGroove}
      />
      {[board.rowAY, rowF].map((y) => (
        <g key={y} transform={`translate(${board.columnX - PITCH / 2} ${y - PITCH / 2})`}>
          <rect width={COLUMNS * PITCH} height={5 * PITCH} fill="url(#lab-hole)" />
        </g>
      ))}
      {RAIL_LINES.flatMap((line) =>
        [0, secondHalfAt].map((offset) => (
          <g
            key={`${line}:${offset}`}
            transform={`translate(${board.railX - PITCH / 2 + offset} ${board.railY[line] - PITCH / 2})`}
          >
            <rect width={halfWidth} height={PITCH} fill="url(#lab-rail-hole)" />
          </g>
        )),
      )}
      {[board.rowAY - 12, rowJ + 22].map((y) =>
        NUMBERED.map((n) => (
          <text
            key={`${y}:${n}`}
            x={board.columnX + (n - 1) * PITCH}
            y={y}
            fontSize={8.5}
            textAnchor="middle"
            fontFamily={SILK_FONT}
            fill="#8d8a76"
          >
            {n}
          </text>
        )),
      )}
      {(['a', 'b', 'c', 'd', 'e'] as const).map((row, k) => (
        <text
          key={row}
          x={left + 15}
          y={board.rowAY + k * PITCH + 3}
          fontSize={8}
          textAnchor="middle"
          fontFamily={SILK_FONT}
          fill="#8d8a76"
        >
          {row}
        </text>
      ))}
      {(['f', 'g', 'h', 'i', 'j'] as const).map((row, k) => (
        <text
          key={row}
          x={left + 15}
          y={rowF + k * PITCH + 3}
          fontSize={8}
          textAnchor="middle"
          fontFamily={SILK_FONT}
          fill="#8d8a76"
        >
          {row}
        </text>
      ))}
    </g>
  );
}

/** The two solderless breadboards in the middle of the board. Holes come from two repeating tiles. */
export function BreadboardPanel() {
  return (
    <g>
      <defs>
        <pattern id="lab-hole" width={PITCH} height={PITCH} patternUnits="userSpaceOnUse">
          <rect
            x={(PITCH - HOLE) / 2}
            y={(PITCH - HOLE) / 2}
            width={HOLE}
            height={HOLE}
            rx={0.8}
            fill={BOARD_COLORS.hole}
          />
        </pattern>
        <pattern
          id="lab-rail-hole"
          width={PITCH * (RAIL_GROUP + 1)}
          height={PITCH}
          patternUnits="userSpaceOnUse"
        >
          {Array.from({ length: RAIL_GROUP }, (_, k) => (
            <rect
              key={k}
              x={k * PITCH + (PITCH - HOLE) / 2}
              y={(PITCH - HOLE) / 2}
              width={HOLE}
              height={HOLE}
              rx={0.8}
              fill={BOARD_COLORS.hole}
            />
          ))}
        </pattern>
      </defs>
      {BREADBOARDS.map((board, index) => (
        <Breadboard key={index} board={board} index={index} />
      ))}
    </g>
  );
}
