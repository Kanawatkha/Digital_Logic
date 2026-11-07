import { DIP_SPAN } from '../sim/ics';
import { parsePoint, type Point } from '../sim/points';
import {
  BREADBOARDS,
  CHANNEL_GAP,
  COLUMNS,
  LEDS,
  PITCH,
  POWER_SOCKET_CENTERS,
  POWER_SOCKET_COLUMNS,
  POWER_SOCKET_PITCH,
  RAIL_CENTER_AT,
  RAIL_CENTER_EXTRA,
  RAIL_GROUP,
  ROWS,
  SOCKET_PITCH,
  SOCKET_ROW_GAP,
  SWITCHES,
  SWITCH_SOCKET_COLUMNS,
} from './layout';

export type Position = { x: number; y: number };

/**
 * The slot of a rail hole, counted in pitches from the first hole: a gap of one slot follows every
 * block of RAIL_GROUP holes, and the middle of the rail has RAIL_CENTER_EXTRA more.
 */
export function railSlot(index: number): number {
  const gaps = Math.floor(index / RAIL_GROUP);
  return index + gaps + (index >= RAIL_CENTER_AT ? RAIL_CENTER_EXTRA : 0);
}

/** The cream body of a breadboard in board px: it reaches past the first and last column and rail. */
export function breadboardFrame(board: number): {
  left: number;
  right: number;
  top: number;
  bottom: number;
} | null {
  const layout = BREADBOARDS[board];
  if (!layout) return null;
  return {
    left: layout.columnX - 34,
    right: layout.columnX + (COLUMNS - 1) * PITCH + 16,
    top: layout.railY.top1 - 24,
    bottom: layout.railY.bot2 + 24,
  };
}

/** y of a terminal strip row, counted from row `a`. Rows `f` to `j` sit below the center channel. */
function rowOffset(row: (typeof ROWS)[number]): number {
  const index = ROWS.indexOf(row);
  return index < 5 ? index * PITCH : 4 * PITCH + CHANNEL_GAP + (index - 5) * PITCH;
}

/** Where a point is on the board, in board px. Null for an id that is not on the board. */
export function pointPosition(point: Point | string): Position | null {
  const p = typeof point === 'string' ? parsePoint(point) : point;
  if (!p) return null;
  switch (p.kind) {
    case 'hole': {
      const board = BREADBOARDS[p.board];
      return board
        ? { x: board.columnX + (p.col - 1) * PITCH, y: board.rowAY + rowOffset(p.row) }
        : null;
    }
    case 'rail': {
      const board = BREADBOARDS[p.board];
      if (!board) return null;
      return { x: board.railX + railSlot(p.index) * PITCH, y: board.railY[p.line] };
    }
    case 'power': {
      const center = POWER_SOCKET_CENTERS[p.socket];
      // 2 rows of POWER_SOCKET_COLUMNS
      return {
        x:
          center.x +
          ((p.pin % POWER_SOCKET_COLUMNS) - (POWER_SOCKET_COLUMNS - 1) / 2) * POWER_SOCKET_PITCH,
        y: center.y + (Math.floor(p.pin / POWER_SOCKET_COLUMNS) - 0.5) * POWER_SOCKET_PITCH,
      };
    }
    case 'switch': {
      const layout = SWITCHES[p.index];
      if (!layout) return null;
      // 2 rows of SWITCH_SOCKET_COLUMNS
      const column = p.pin % SWITCH_SOCKET_COLUMNS;
      const row = Math.floor(p.pin / SWITCH_SOCKET_COLUMNS);
      return {
        x: layout.sockets.x + (column - (SWITCH_SOCKET_COLUMNS - 1) / 2) * SOCKET_PITCH,
        y: layout.sockets.y + (row - 0.5) * SOCKET_PITCH,
      };
    }
    case 'led': {
      const layout = LEDS.find((led) => led.number === p.number);
      return layout ? { x: layout.socket.x, y: layout.socket.y + p.pin * SOCKET_ROW_GAP } : null;
    }
  }
}

// ---------------------------------------------------------------- chips

/** The body of a chip seated at `col` of breadboard `board`, in board px. */
export type IcFrame = {
  x: number;
  y: number;
  width: number;
  height: number;
  /** The middle of the body, over the center channel */
  centerX: number;
  centerY: number;
};

/** How far the body reaches past the outer legs, in pitches. */
export const IC_OVERHANG = 0.75;
const IC_HEIGHT = 2.3;
/** Size of the body of a chip, in board px. */
export const IC_BODY = {
  width: (DIP_SPAN - 1 + 2 * IC_OVERHANG) * PITCH,
  height: IC_HEIGHT * PITCH,
} as const;

/** The body of a chip whose middle is at (centerX, centerY). */
export function icFrameAt(centerX: number, centerY: number): IcFrame {
  return {
    x: centerX - IC_BODY.width / 2,
    y: centerY - IC_BODY.height / 2,
    width: IC_BODY.width,
    height: IC_BODY.height,
    centerX,
    centerY,
  };
}

export function icFrame(board: number, col: number): IcFrame | null {
  const first = pointPosition(`b${board}:c${col}:f`);
  const last = pointPosition(`b${board}:c${col + DIP_SPAN - 1}:f`);
  const top = pointPosition(`b${board}:c${col}:e`);
  if (!first || !last || !top) return null;
  return icFrameAt((first.x + last.x) / 2, (first.y + top.y) / 2);
}

/** The last column a chip can start at: all seven columns must be on the board. */
export const LAST_IC_COL = COLUMNS - DIP_SPAN + 1;

/** Every place a chip can sit, with the middle of its body, for choosing the one nearest a spot. */
export function icSlots(): { board: number; col: number; x: number; y: number }[] {
  const slots: { board: number; col: number; x: number; y: number }[] = [];
  BREADBOARDS.forEach((_, board) => {
    for (let col = 1; col <= LAST_IC_COL; col++) {
      const frame = icFrame(board, col);
      if (frame) slots.push({ board, col, x: frame.centerX, y: frame.centerY });
    }
  });
  return slots;
}

/** How far from the center channel (pitches) a dragged chip still snaps to a breadboard. */
const SNAP_REACH_Y = 4;
const SNAP_REACH_X = 4;

/**
 * Where a chip dropped with its middle at (x, y) sits: the breadboard whose center channel is
 * nearest and the column that centers the chip on x, kept on the board. Null when the spot is
 * too far from every breadboard, which means the chip is not over one.
 */
export function snapIc(x: number, y: number): { board: number; col: number } | null {
  let best: { board: number; distance: number } | null = null;
  BREADBOARDS.forEach((layout, board) => {
    const channelY = layout.rowAY + 4 * PITCH + CHANNEL_GAP / 2;
    const distance = Math.abs(y - channelY);
    if (distance <= SNAP_REACH_Y * PITCH && (!best || distance < best.distance)) {
      best = { board, distance };
    }
  });
  const found = best as { board: number; distance: number } | null;
  const layout = found && BREADBOARDS[found.board];
  if (!found || !layout) return null;
  const left = layout.columnX - SNAP_REACH_X * PITCH;
  const right = layout.columnX + (COLUMNS - 1) * PITCH + SNAP_REACH_X * PITCH;
  if (x < left || x > right) return null;
  const col = Math.round((x - layout.columnX) / PITCH - (DIP_SPAN - 1) / 2) + 1;
  return { board: found.board, col: Math.min(LAST_IC_COL, Math.max(1, col)) };
}
