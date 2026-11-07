import type { Circuit, PlacedIc, Wire } from '../sim/evaluate';

/** Circuits for the tests of the analysis, wired the way a student would. */

const wire = (from: string, to: string): Wire => ({ from, to });

/** Both chips of the AND-OR circuit: a 7408 at column 11 and a 7432 at column 25 of breadboard 1. */
const U1: PlacedIc = { id: 'u1', type: '7408', board: 0, col: 11 };
const U2: PlacedIc = { id: 'u2', type: '7432', board: 0, col: 25 };

const supply = (hot: number, cold: number, vccHole: string, gndHole: string): Wire[] => [
  wire(`power:+5V:${hot}`, vccHole),
  wire(`power:GND:${cold}`, gndHole),
];

/** Y = (A AND B) OR C on switches 1 to 3 and LED 1. */
export function andOr(switches: readonly boolean[] = []): Circuit {
  return {
    ics: [U1, U2],
    wires: [
      ...supply(0, 0, 'b0:c11:b', 'b0:c17:i'),
      ...supply(1, 1, 'b0:c25:b', 'b0:c31:i'),
      wire('sw0:0', 'b0:c11:i'),
      wire('sw1:0', 'b0:c12:i'),
      wire('b0:c13:h', 'b0:c25:h'),
      wire('sw2:0', 'b0:c26:i'),
      wire('b0:c27:h', 'led1:0'),
    ],
    switches,
  };
}

/** Y = NOT (A AND B): a 7400 with its two inputs on switches 1 and 2, LED 3 on its output. */
export function nand(switches: readonly boolean[] = []): Circuit {
  return {
    ics: [{ id: 'u1', type: '7400', board: 0, col: 11 }],
    wires: [
      ...supply(0, 0, 'b0:c11:b', 'b0:c17:i'),
      wire('sw0:0', 'b0:c11:i'),
      wire('sw1:0', 'b0:c12:i'),
      wire('b0:c13:h', 'led3:0'),
    ],
    switches,
  };
}

/** A latch: two NOR gates of one 7402, each reading the output of the other. LED 1 on gate 1. */
export function latch(switches: readonly boolean[] = []): Circuit {
  return {
    ics: [{ id: 'u1', type: '7402', board: 0, col: 10 }],
    wires: [
      ...supply(0, 0, 'b0:c10:b', 'b0:c16:i'),
      wire('sw0:0', 'b0:c11:i'),
      wire('sw1:0', 'b0:c15:i'),
      wire('b0:c10:g', 'b0:c14:g'),
      wire('b0:c13:g', 'b0:c12:g'),
      wire('b0:c10:h', 'led1:0'),
    ],
    switches,
  };
}

/** A switch straight to an LED, with no chip. */
export function direct(switches: readonly boolean[] = []): Circuit {
  return { ics: [], wires: [wire('sw3:0', 'led2:0')], switches };
}
