import {
  BOARD_COUNT,
  BOTTOM_ROWS,
  COLUMNS,
  LED_COUNT,
  LED_PINS,
  POWER_SOCKETS,
  POWER_SOCKET_PINS,
  RAIL_HOLES,
  RAIL_LINES,
  RAIL_SPLIT_AT,
  ROWS,
  SWITCH_COUNT,
  SWITCH_PINS,
  type Half,
  type PowerSocket,
  type RailLine,
  type Row,
} from '../board/layout';

/**
 * Every place a wire or a chip leg can go, as a typed value and as a text id (the id is what is
 * stored in a saved circuit):
 *
 *   hole    `b0:c12:e`        board 0, column 12, row e
 *   rail    `b1:r:top2:17`    board 1, rail line top2, hole 17
 *   power   `power:+5V:0`     pin 0 of the +5V socket
 *   switch  `sw3:5`           pin 5 of logic switch 3
 *   led     `led9:1`          socket 1 of Logic Monitor input 9
 */
export type Point =
  | { kind: 'hole'; board: number; col: number; row: Row }
  | { kind: 'rail'; board: number; line: RailLine; index: number }
  | { kind: 'power'; socket: PowerSocket; pin: number }
  | { kind: 'switch'; index: number; pin: number }
  | { kind: 'led'; number: number; pin: number };

export function pointId(point: Point): string {
  switch (point.kind) {
    case 'hole':
      return `b${point.board}:c${point.col}:${point.row}`;
    case 'rail':
      return `b${point.board}:r:${point.line}:${point.index}`;
    case 'power':
      return `power:${point.socket}:${point.pin}`;
    case 'switch':
      return `sw${point.index}:${point.pin}`;
    case 'led':
      return `led${point.number}:${point.pin}`;
  }
}

const inRange = (n: number, min: number, max: number) =>
  Number.isInteger(n) && n >= min && n <= max;

/** The point an id names, or null when the id is not a valid place on the board. */
export function parsePoint(id: string): Point | null {
  let m = /^b(\d+):c(\d+):([a-j])$/.exec(id);
  if (m) {
    const board = Number(m[1]);
    const col = Number(m[2]);
    if (inRange(board, 0, BOARD_COUNT - 1) && inRange(col, 1, COLUMNS)) {
      return { kind: 'hole', board, col, row: m[3] as Row };
    }
    return null;
  }
  m = /^b(\d+):r:(top1|top2|bot1|bot2):(\d+)$/.exec(id);
  if (m) {
    const board = Number(m[1]);
    const index = Number(m[3]);
    if (inRange(board, 0, BOARD_COUNT - 1) && inRange(index, 0, RAIL_HOLES - 1)) {
      return { kind: 'rail', board, line: m[2] as RailLine, index };
    }
    return null;
  }
  m = /^power:(-5V|\+5V|GND|\+12V|-12V):(\d+)$/.exec(id);
  if (m) {
    const pin = Number(m[2]);
    return inRange(pin, 0, POWER_SOCKET_PINS - 1)
      ? { kind: 'power', socket: m[1] as PowerSocket, pin }
      : null;
  }
  m = /^sw(\d+):(\d+)$/.exec(id);
  if (m) {
    const index = Number(m[1]);
    const pin = Number(m[2]);
    return inRange(index, 0, SWITCH_COUNT - 1) && inRange(pin, 0, SWITCH_PINS - 1)
      ? { kind: 'switch', index, pin }
      : null;
  }
  m = /^led(\d+):(\d+)$/.exec(id);
  if (m) {
    const number = Number(m[1]);
    const pin = Number(m[2]);
    return inRange(number, 1, LED_COUNT) && inRange(pin, 0, LED_PINS - 1)
      ? { kind: 'led', number, pin }
      : null;
  }
  return null;
}

export const halfOf = (row: Row): Half =>
  (BOTTOM_ROWS as readonly string[]).includes(row) ? 'bottom' : 'top';

/**
 * The connection a point belongs to. Points with the same key are joined inside the board itself
 * (without a wire): the five holes of one column half, all holes of one rail line (or rail half),
 * the pins of one power socket, the sockets of one logic switch, the two sockets of one monitor input.
 */
export function netKey(point: Point): string {
  switch (point.kind) {
    case 'hole':
      return `b${point.board}:c${point.col}:${halfOf(point.row)}`;
    case 'rail': {
      const half = RAIL_SPLIT_AT !== null && point.index >= RAIL_SPLIT_AT ? ':2' : '';
      return `b${point.board}:r:${point.line}${half}`;
    }
    case 'power':
      return `power:${point.socket}`;
    case 'switch':
      return `sw${point.index}`;
    case 'led':
      return `led${point.number}`;
  }
}

/** Net keys of the two supply sockets the simulator drives. */
export const VCC_KEY = 'power:+5V';
export const GND_KEY = 'power:GND';
/** The supply sockets that are drawn but not simulated. */
export const UNSUPPORTED_SUPPLIES: readonly PowerSocket[] = POWER_SOCKETS.filter(
  (socket) => socket !== '+5V' && socket !== 'GND',
);

/** Every point on the board, in a stable order. */
export function allPoints(): Point[] {
  const points: Point[] = [];
  for (let board = 0; board < BOARD_COUNT; board++) {
    for (let col = 1; col <= COLUMNS; col++) {
      for (const row of ROWS) points.push({ kind: 'hole', board, col, row });
    }
    for (const line of RAIL_LINES) {
      for (let index = 0; index < RAIL_HOLES; index++) {
        points.push({ kind: 'rail', board, line, index });
      }
    }
  }
  for (const socket of POWER_SOCKETS) {
    for (let pin = 0; pin < POWER_SOCKET_PINS; pin++) points.push({ kind: 'power', socket, pin });
  }
  for (let index = 0; index < SWITCH_COUNT; index++) {
    for (let pin = 0; pin < SWITCH_PINS; pin++) points.push({ kind: 'switch', index, pin });
  }
  for (let number = 1; number <= LED_COUNT; number++) {
    for (let pin = 0; pin < LED_PINS; pin++) points.push({ kind: 'led', number, pin });
  }
  return points;
}
