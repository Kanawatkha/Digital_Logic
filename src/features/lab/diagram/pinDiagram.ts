import { DIP_PINS, DIP_SPAN, GND_PIN, IC_SPECS, VCC_PIN, type IcType } from '../sim/ics';

/**
 * The pin diagram of a chip, as in a datasheet: the package seen from above with the notch on the
 * left, pins 1 to 7 along the bottom, 8 to 14 along the top, and a gate symbol wired to its pins.
 * It is built from the same pin tables the simulator runs on (`sim/ics.ts`), so the drawing cannot
 * disagree with the simulation. Everything here is geometry; `IcDiagram.tsx` draws it.
 */

export type Pt = { x: number; y: number };

export type GateKind = 'not' | 'and' | 'or' | 'nand' | 'nor';

/** Which symbol each chip draws. */
export const GATE_KINDS: Readonly<Record<IcType, GateKind>> = {
  '7404': 'not',
  '7408': 'and',
  '7432': 'or',
  '7400': 'nand',
  '7402': 'nor',
};

export const DIAGRAM_SIZE = { width: 524, height: 296 } as const;

/** The black outline of the package, and the pin boxes that stand on its two long edges. */
export const BODY = { x: 30, y: 46, width: 464, height: 204 } as const;
export const PIN_BOX = { width: 38, height: 38 } as const;
const BODY_BOTTOM = BODY.y + BODY.height;
const PIN_PITCH = 64;
const FIRST_PIN_X = 70;
/** Where the notch is, on the left edge. */
export const NOTCH = { x: BODY.x, y: BODY.y + BODY.height / 2, radius: 16 } as const;
/** The line the gate symbols sit on, in the top row and in the bottom row. */
const TOP_GATE_Y = BODY.y + 56;
const BOTTOM_GATE_Y = BODY_BOTTOM - 56;
/** Space between the last lead and the symbol, in px. */
const GAP = 8;
/** Where the two inputs of a gate enter the symbol, above and below its middle. */
const INPUT_OFFSET = 9;
/** The inputs of an OR or NOR sit on its curved back, which is this far in at that height. */
const CURVE_IN = 3.75;

/** Size of each symbol, from its input side to its output side. */
export const GATE_WIDTH: Readonly<Record<GateKind, number>> = {
  not: 38,
  and: 38,
  nand: 46,
  or: 38,
  nor: 46,
};

/** The outline of a symbol, input side at x = 0, centered on y = 0, output to the right. */
export const GATE_PATH: Readonly<Record<GateKind, string>> = {
  not: 'M0 -16L30 0L0 16Z',
  and: 'M0 -18H20A18 18 0 0 1 20 18H0Z',
  nand: 'M0 -18H20A18 18 0 0 1 20 18H0Z',
  or: 'M0 -18Q14 -18 38 0Q14 18 0 18Q10 0 0 -18Z',
  nor: 'M0 -18Q14 -18 38 0Q14 18 0 18Q10 0 0 -18Z',
};

/** The little circle that marks an inverted output, if the symbol has one: its center x and radius. */
export const GATE_BUBBLE: Readonly<Record<GateKind, { x: number; r: number } | null>> = {
  not: { x: 34, r: 4 },
  and: null,
  nand: { x: 42, r: 4 },
  or: null,
  nor: { x: 42, r: 4 },
};

export type PinRole = 'input' | 'output' | 'vcc' | 'gnd';

export type DiagramPin = {
  number: number;
  /** Middle of the pin box, in diagram px */
  x: number;
  y: number;
  top: boolean;
  role: PinRole;
  /** Gate it belongs to (1 to 6), null for the supply pins */
  gate: number | null;
  /** As printed in a datasheet: 1A, 1B, 1Y, VCC, GND */
  name: string;
};

export type DiagramGate = {
  /** 1 to 6 */
  index: number;
  kind: GateKind;
  /** Where the symbol's input side is and the middle of the symbol, and whether it points left */
  x: number;
  y: number;
  flip: boolean;
  width: number;
  /** One polyline from each used pin to the symbol */
  leads: Pt[][];
  /** The pins that belong to the gate: inputs first, then the output */
  pins: number[];
  inputs: number[];
  output: number;
};

export type IcDiagram = {
  type: IcType;
  /** "7404 Hex Inverter" */
  title: string;
  pins: DiagramPin[];
  gates: DiagramGate[];
};

const pinColumn = (pin: number) => (pin > DIP_SPAN ? DIP_PINS - pin : pin - 1);
const pinX = (pin: number) => FIRST_PIN_X + pinColumn(pin) * PIN_PITCH;
const isTop = (pin: number) => pin > DIP_SPAN;

/** "hex inverter (NOT)" becomes "Hex Inverter". */
function chipTitle(type: IcType): string {
  const words = IC_SPECS[type].name.replace(/\s*\(.*\)/, '').split(' ');
  return `${type} ${words.map((word) => word[0]?.toUpperCase() + word.slice(1)).join(' ')}`;
}

function buildGate(type: IcType, index: number): DiagramGate {
  const spec = IC_SPECS[type];
  const gate = spec.gates[index - 1];
  if (!gate) throw new Error(`${type} has no gate ${index}`);
  const kind = GATE_KINDS[type];
  const width = GATE_WIDTH[kind];
  const top = isTop(gate.output);
  const edge = top ? BODY.y : BODY_BOTTOM;
  const y = top ? TOP_GATE_Y : BOTTOM_GATE_Y;
  const inputXs = gate.inputs.map(pinX);
  const outputX = pinX(gate.output);
  const mean = inputXs.reduce((sum, x) => sum + x, 0) / inputXs.length;
  const flip = outputX < mean;
  const single = gate.inputs.length === 1;

  // the symbol sits just beyond the inputs, toward the output
  const x = flip
    ? Math.min(...inputXs) - (single ? 10 : GAP)
    : Math.max(...inputXs) + (single ? 10 : GAP);
  const sign = flip ? -1 : 1;
  const outputSide = x + sign * width;

  // Of two inputs, the pin farther from the symbol goes to the input farther from the pin row, so
  // the horizontal lead of one never crosses the vertical lead of the other.
  const far = y + (top ? INPUT_OFFSET : -INPUT_OFFSET);
  const near = y + (top ? -INPUT_OFFSET : INPUT_OFFSET);
  const order = gate.inputs
    .map((pin, k) => ({ pin, distance: Math.abs(inputXs[k]! - x) }))
    .sort((a, b) => b.distance - a.distance);
  const inputY = new Map<number, number>();
  if (single) inputY.set(gate.inputs[0]!, y);
  else {
    inputY.set(order[0]!.pin, far);
    inputY.set(order[1]!.pin, near);
  }

  const leads: Pt[][] = gate.inputs.map((pin) => {
    const level = inputY.get(pin)!;
    const curved = (kind === 'or' || kind === 'nor') && level !== y;
    return [
      { x: pinX(pin), y: edge },
      { x: pinX(pin), y: level },
      { x: x + sign * (curved ? CURVE_IN : 0), y: level },
    ];
  });
  leads.push([
    { x: outputSide, y },
    { x: outputX, y },
    { x: outputX, y: edge },
  ]);

  return {
    index,
    kind,
    x,
    y,
    flip,
    width,
    leads,
    pins: [...gate.inputs, gate.output],
    inputs: [...gate.inputs],
    output: gate.output,
  };
}

export function buildIcDiagram(type: IcType): IcDiagram {
  const spec = IC_SPECS[type];
  const gates = spec.gates.map((_, k) => buildGate(type, k + 1));
  const pins: DiagramPin[] = [];
  for (let number = 1; number <= DIP_PINS; number++) {
    const top = isTop(number);
    const base = {
      number,
      x: pinX(number),
      y: top ? BODY.y - PIN_BOX.height / 2 : BODY_BOTTOM + PIN_BOX.height / 2,
      top,
    };
    if (number === VCC_PIN) pins.push({ ...base, role: 'vcc', gate: null, name: 'VCC' });
    else if (number === GND_PIN) pins.push({ ...base, role: 'gnd', gate: null, name: 'GND' });
    else {
      const gate = gates.find((g) => g.pins.includes(number));
      if (!gate) throw new Error(`${type} pin ${number} is in no gate`);
      if (number === gate.output) {
        pins.push({ ...base, role: 'output', gate: gate.index, name: `${gate.index}Y` });
      } else {
        const letter = gate.inputs.length === 1 ? 'A' : 'AB'[gate.inputs.indexOf(number)];
        pins.push({ ...base, role: 'input', gate: gate.index, name: `${gate.index}${letter}` });
      }
    }
  }
  return { type, title: chipTitle(type), pins, gates };
}

/** The package outline, with the notch on the left edge. */
export const BODY_PATH =
  `M${BODY.x} ${BODY.y}H${BODY.x + BODY.width}V${BODY_BOTTOM}H${BODY.x}` +
  `V${NOTCH.y + NOTCH.radius}A${NOTCH.radius} ${NOTCH.radius} 0 0 0 ${BODY.x} ${NOTCH.y - NOTCH.radius}Z`;

/** Where the VCC and GND words go, inside the package next to their pins. */
export const SUPPLY_LABELS = {
  vcc: { x: pinX(VCC_PIN), y: BODY.y + 24 },
  gnd: { x: pinX(GND_PIN), y: BODY_BOTTOM - 16 },
} as const;
