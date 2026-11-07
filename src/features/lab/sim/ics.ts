import { BOARD_COUNT, COLUMNS } from '../board/layout';
import { pointId } from './points';

export type IcType = '7404' | '7408' | '7432' | '7400' | '7402';

export const IC_TYPES: readonly IcType[] = ['7404', '7408', '7432', '7400', '7402'];

/** One gate of a chip: its input pins, its output pin. */
export type GateSpec = { inputs: readonly number[]; output: number };

export type IcSpec = {
  type: IcType;
  /** What the chip is, for labels. */
  name: string;
  /** The gate it holds, as printed on a logic symbol. */
  symbol: string;
  gates: readonly GateSpec[];
  /** The gate's logic function for the values of its inputs, in pin order. */
  evaluate: (inputs: readonly boolean[]) => boolean;
};

export const VCC_PIN = 14;
export const GND_PIN = 7;
export const DIP_PINS = 14;
/** Columns a DIP chip covers on a breadboard. */
export const DIP_SPAN = DIP_PINS / 2;

/** Gates 1 to 4 of the quad chips 7400, 7408 and 7432 (the same pins on all three). */
const QUAD: readonly GateSpec[] = [
  { inputs: [1, 2], output: 3 },
  { inputs: [4, 5], output: 6 },
  { inputs: [9, 10], output: 8 },
  { inputs: [12, 13], output: 11 },
];

/**
 * Pin numbers as in the manufacturer datasheets (Texas Instruments SN7400, SN7402, SN7404 and
 * SN7432; the 7408 from the SN74AHC08 datasheet, whose pins match the 74LS08).
 */
export const IC_SPECS: Readonly<Record<IcType, IcSpec>> = {
  '7404': {
    type: '7404',
    name: 'hex inverter (NOT)',
    symbol: 'NOT',
    gates: [
      { inputs: [1], output: 2 },
      { inputs: [3], output: 4 },
      { inputs: [5], output: 6 },
      { inputs: [9], output: 8 },
      { inputs: [11], output: 10 },
      { inputs: [13], output: 12 },
    ],
    evaluate: ([a]) => !a,
  },
  '7408': {
    type: '7408',
    name: 'quad 2-input AND',
    symbol: 'AND',
    gates: QUAD,
    evaluate: ([a, b]) => Boolean(a && b),
  },
  '7432': {
    type: '7432',
    name: 'quad 2-input OR',
    symbol: 'OR',
    gates: QUAD,
    evaluate: ([a, b]) => Boolean(a || b),
  },
  '7400': {
    type: '7400',
    name: 'quad 2-input NAND',
    symbol: 'NAND',
    gates: QUAD,
    evaluate: ([a, b]) => !(a && b),
  },
  '7402': {
    type: '7402',
    name: 'quad 2-input NOR',
    symbol: 'NOR',
    // the outputs come first on this chip: 1Y is pin 1, 3Y is pin 10, 4Y is pin 13
    gates: [
      { inputs: [2, 3], output: 1 },
      { inputs: [5, 6], output: 4 },
      { inputs: [8, 9], output: 10 },
      { inputs: [11, 12], output: 13 },
    ],
    evaluate: ([a, b]) => !(a || b),
  },
};

/**
 * Where each pin of a chip placed at `col` goes. The chip straddles the center channel of a
 * breadboard, seen from above with the notch on the left: pins 1 to 7 run left to right along the
 * lower row `f`, pins 8 to 14 run right to left along the upper row `e`, so pin 14 is above pin 1.
 * Returns point ids, keyed by pin number.
 */
export function icPinPoints(board: number, col: number): Record<number, string> {
  const pins: Record<number, string> = {};
  for (let pin = 1; pin <= DIP_SPAN; pin++) {
    pins[pin] = pointId({ kind: 'hole', board, col: col + pin - 1, row: 'f' });
  }
  for (let pin = DIP_SPAN + 1; pin <= DIP_PINS; pin++) {
    pins[pin] = pointId({ kind: 'hole', board, col: col + (DIP_PINS - pin), row: 'e' });
  }
  return pins;
}

/** Whether a chip whose pin 1 is at `col` fits on the breadboard. */
export function canPlaceIc(board: number, col: number): boolean {
  return (
    Number.isInteger(board) &&
    Number.isInteger(col) &&
    board >= 0 &&
    board < BOARD_COUNT &&
    col >= 1 &&
    col + DIP_SPAN - 1 <= COLUMNS
  );
}
