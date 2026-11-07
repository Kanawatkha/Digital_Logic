/**
 * Everything that describes the physical NX-4i board: counts, names, and where each panel and part
 * sits. This is the only file with those numbers. Drawing and simulation code read them from here,
 * so a correction after checking the real board is one edit in this file.
 *
 * All positions are ESTIMATES read from the user's photo of the real board (see LAB-PLAN.md,
 * section 3). Board space is the photo's pixel space minus ORIGIN, so the board is about
 * BOARD_SIZE wide and tall.
 */

/**
 * Where board space starts in photo coordinates. The frames start at photo y 150 and end at 1400, so
 * with this origin the board has the same 12 px margin above them as at the sides and below.
 */
const ORIGIN = { x: 220, y: 124 } as const;

/** Photo x and y to board space. The drawing is described in photo coordinates. */
export const bx = (photoX: number) => photoX - ORIGIN.x;
export const by = (photoY: number) => photoY - ORIGIN.y;

export const BOARD_SIZE = { width: 1700, height: 1302 } as const;

// ---------------------------------------------------------------- counts and names

export const BOARD_COUNT = 2;
export const COLUMNS = 60;

/** Rows of a breadboard terminal strip. `e` and `f` face each other across the center channel. */
export const TOP_ROWS = ['a', 'b', 'c', 'd', 'e'] as const;
export const BOTTOM_ROWS = ['f', 'g', 'h', 'i', 'j'] as const;
export const ROWS = [...TOP_ROWS, ...BOTTOM_ROWS] as const;
export type Row = (typeof ROWS)[number];
export type Half = 'top' | 'bottom';

/** Power rail lines of one breadboard: two above the terminal strip, two below it. */
export const RAIL_LINES = ['top1', 'top2', 'bot1', 'bot2'] as const;
export type RailLine = (typeof RAIL_LINES)[number];
export const RAIL_HOLES = 50;
/** Holes in one block of a rail (a small gap follows each block). */
export const RAIL_GROUP = 5;
/** The first hole of the second half of a rail: the middle of the rail has a wider gap. */
export const RAIL_CENTER_AT = 25;
/** Extra empty slots at the middle of a rail, on top of the usual one between blocks. */
export const RAIL_CENTER_EXTRA = 1;
/**
 * A rail cut in two: the index of the first hole of the second half, or null for an unbroken rail.
 * On the real board the two halves of a rail are separate (checked by the user with a continuity
 * test), so power plugged into one half does not reach the other: it takes a jumper wire.
 */
export const RAIL_SPLIT_AT: number | null = RAIL_CENTER_AT;

export const POWER_SOCKETS = ['-5V', '+5V', 'GND', '+12V', '-12V'] as const;
export type PowerSocket = (typeof POWER_SOCKETS)[number];
/** Each power socket is a 2 x 3 block of pins tied together (as the photo suggests; to verify). */
export const POWER_SOCKET_COLUMNS = 3;
export const POWER_SOCKET_PINS = 2 * POWER_SOCKET_COLUMNS;

export const SWITCH_COUNT = 8;
/** Each logic switch has a 2 x 3 block of sockets, assumed to be one output net. */
export const SWITCH_PINS = 6;
export const SWITCH_SOCKET_COLUMNS = 3;

export const LED_COUNT = 16;
/** Each Logic Monitor input has 2 sockets, one above the other. */
export const LED_PINS = 2;

// ---------------------------------------------------------------- panels

export type PanelBehavior = 'active' | 'drawn';

export type Panel = {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  behavior: PanelBehavior;
};

const panel = (
  id: string,
  label: string,
  photo: readonly [x1: number, y1: number, x2: number, y2: number],
  behavior: PanelBehavior,
): Panel => ({
  id,
  label,
  x: bx(photo[0]),
  y: by(photo[1]),
  width: photo[2] - photo[0],
  height: photo[3] - photo[1],
  behavior,
});

/**
 * The white frames printed on the board, in photo coordinates, on one grid: blocks of one row share
 * their top and bottom edge, neighbors are PANEL_GAP apart, and the columns line up. (The photo is
 * tilted, so the numbers are the straightened ones, not the raw pixels.)
 *
 *   top row      title strip, monitor, hex decoder and 7 segments start at y 150; the three big ones end at 506
 *   left column  power supply and function generator, x 245 to 562
 *   right column x 1530 to 1895 in five rows: amplifier and speaker, D/A and driver, V-source and A/D,
 *                debounce; the stack ends at y 1400 like the function generator and the logic switch strip
 */
export const PANELS: readonly Panel[] = [
  panel('title-strip', 'NX-4i Digital Circuits Experiment Board', [245, 150, 770, 207], 'drawn'),
  panel('power-supply', 'Power supply', [245, 340, 562, 615], 'active'),
  panel('function-generator', 'Function generator', [245, 625, 562, 1400], 'drawn'),
  panel('logic-probe', 'Logic probe', [572, 217, 770, 506], 'drawn'),
  panel('logic-monitor', '16-BITs Logic Monitor', [780, 150, 1120, 506], 'active'),
  panel('hex-decoder', 'Binary to hexadecimal decoder', [1130, 150, 1550, 506], 'drawn'),
  panel('led-7-segments', 'LED 7 segments', [1560, 150, 1895, 506], 'drawn'),
  panel('amplifier', 'Amplifier', [1530, 516, 1785, 696], 'drawn'),
  panel('speaker', 'Speaker', [1795, 516, 1895, 696], 'drawn'),
  panel('da-converter', 'R-2R D/A converter', [1530, 706, 1745, 881], 'drawn'),
  panel('driver-input', '8-channel driver input', [1530, 891, 1745, 966], 'drawn'),
  panel('driver', '8-channel high current driver', [1755, 706, 1895, 966], 'drawn'),
  panel('v-source', 'V-source for ADC', [1530, 976, 1640, 1136], 'drawn'),
  panel('ad-converter', 'A/D converter', [1650, 976, 1895, 1136], 'drawn'),
  panel('debounce', 'Debounce switch', [1530, 1146, 1895, 1400], 'drawn'),
  panel('breadboards', 'Solderless breadboards', [582, 517, 1511, 1192], 'active'),
  panel('logic-switch', 'Logic switch', [572, 1203, 1520, 1400], 'active'),
];

/** The empty space between two neighboring frames. */
export const PANEL_GAP = 10;

/**
 * How far the contents of a frame move from where they were measured on the photo to where the
 * frame now is. A frame draws its contents inside a `Shift`, so moving a frame is one number here.
 */
export type ShiftedPanel =
  | 'logic-probe'
  | 'logic-monitor'
  | 'hex-decoder'
  | 'led-7-segments'
  | 'amplifier'
  | 'speaker'
  | 'da-converter'
  | 'driver-input'
  | 'driver'
  | 'v-source'
  | 'ad-converter';

export const PANEL_SHIFT: Readonly<Record<ShiftedPanel, { dx: number; dy: number }>> = {
  'logic-probe': { dx: -4, dy: 14 },
  'logic-monitor': { dx: -5, dy: -4 },
  'hex-decoder': { dx: -5, dy: -15 },
  'led-7-segments': { dx: -10, dy: -35 },
  amplifier: { dx: 0, dy: -52 },
  speaker: { dx: 0, dy: -50 },
  'da-converter': { dx: 0, dy: -45 },
  'driver-input': { dx: 0, dy: -37 },
  driver: { dx: 0, dy: -46 },
  'v-source': { dx: 0, dy: -25 },
  'ad-converter': { dx: 30, dy: -24 },
};

// ---------------------------------------------------------------- breadboards

/** Distance between neighboring holes (the 2.54 mm grid), in board px. */
export const PITCH = 14.9;
/** Distance between row `e` and row `f`: three pitches, the width of a DIP chip. */
export const CHANNEL_GAP = 3 * PITCH;

export type BreadboardLayout = {
  /** x of column 1 */
  columnX: number;
  /** y of row `a` */
  rowAY: number;
  /** x of the first rail hole */
  railX: number;
  /** y of each rail line */
  railY: Readonly<Record<RailLine, number>>;
};

export const BREADBOARDS: readonly BreadboardLayout[] = [
  {
    columnX: bx(615.45),
    rowAY: by(600),
    railX: bx(615.45),
    railY: { top1: by(541), top2: by(556), bot1: by(808), bot2: by(823) },
  },
  {
    columnX: bx(615.45),
    rowAY: by(945),
    railX: bx(615.45),
    railY: { top1: by(886), top2: by(901), bot1: by(1153), bot2: by(1168) },
  },
];

// ---------------------------------------------------------------- sockets and buttons

/** Photo x of the first power socket and the even distance between neighbors (the photo is tilted). */
const POWER_SOCKET_FIRST_X = 276;
const POWER_SOCKET_STEP = 63.75;

/** Centers of the five power sockets (photo order, left to right), evenly spaced on one line. */
export const POWER_SOCKET_CENTERS: Readonly<Record<PowerSocket, { x: number; y: number }>> = {
  '-5V': { x: bx(POWER_SOCKET_FIRST_X), y: by(585) },
  '+5V': { x: bx(POWER_SOCKET_FIRST_X + POWER_SOCKET_STEP), y: by(585) },
  GND: { x: bx(POWER_SOCKET_FIRST_X + 2 * POWER_SOCKET_STEP), y: by(585) },
  '+12V': { x: bx(POWER_SOCKET_FIRST_X + 3 * POWER_SOCKET_STEP), y: by(585) },
  '-12V': { x: bx(POWER_SOCKET_FIRST_X + 4 * POWER_SOCKET_STEP), y: by(585) },
};
/** Distance between pins inside the power socket blocks, and inside the logic switch blocks. */
export const POWER_SOCKET_PITCH = 16;
export const SOCKET_PITCH = 14;

export type SwitchLayout = {
  button: { x: number; y: number; width: number; height: number };
  /** Center of the 2 x 3 socket block above the button. */
  sockets: { x: number; y: number };
};

/** The red buttons are square, as wide as they are tall, and evenly spaced (the photo is tilted). */
export const SWITCH_BUTTON_SIZE = 68;
/** Photo x of the first button's center and the distance between two neighbors. */
const SWITCH_FIRST_X = 632;
export const SWITCH_STEP = 118.3;

export const SWITCHES: readonly SwitchLayout[] = Array.from({ length: SWITCH_COUNT }, (_, k) => {
  const photoX = SWITCH_FIRST_X + k * SWITCH_STEP;
  return {
    button: {
      x: bx(photoX) - SWITCH_BUTTON_SIZE / 2,
      y: by(1322),
      width: SWITCH_BUTTON_SIZE,
      height: SWITCH_BUTTON_SIZE,
    },
    sockets: { x: bx(photoX), y: by(1238) },
  };
});

export type LedLayout = {
  /** Printed number, 1 to 16 */
  number: number;
  led: { x: number; y: number };
  /** First of the LED's two sockets; the second is SOCKET_ROW_GAP below it. */
  socket: { x: number; y: number };
};

export const SOCKET_ROW_GAP = 16;

/** Photo x of the first LED of each row and the distance between LEDs: both rows line up. */
const LED_FIRST_X = 807 + PANEL_SHIFT['logic-monitor'].dx;
const LED_STEP = 42.5;
const LED_TOP_Y = 254 + PANEL_SHIFT['logic-monitor'].dy;
const LED_BOTTOM_Y = 328 + PANEL_SHIFT['logic-monitor'].dy;
const LED_SOCKET_X = [814, 984].map((x) => x + PANEL_SHIFT['logic-monitor'].dx);
const LED_SOCKET_Y = 476 + PANEL_SHIFT['logic-monitor'].dy;

/** The Logic Monitor prints 16..9 on the top row and 8..1 on the second row, left to right. */
export const LEDS: readonly LedLayout[] = [
  ...Array.from({ length: 8 }, (_, k) => ({
    number: 16 - k,
    led: { x: bx(LED_FIRST_X + LED_STEP * k), y: by(LED_TOP_Y) },
    socket: { x: bx((LED_SOCKET_X[0] ?? 0) + 16 * k), y: by(LED_SOCKET_Y) },
  })),
  ...Array.from({ length: 8 }, (_, k) => ({
    number: 8 - k,
    led: { x: bx(LED_FIRST_X + LED_STEP * k), y: by(LED_BOTTOM_Y) },
    socket: { x: bx((LED_SOCKET_X[1] ?? 0) + 16 * k), y: by(LED_SOCKET_Y) },
  })),
];
