import type { NetState, PlacedIc, SimResult } from '../sim/evaluate';
import { GND_PIN, IC_SPECS, VCC_PIN, icPinPoints } from '../sim/ics';

/** What a supply pin of a chip is wired to, as far as the simulator can tell. */
export type SupplyStatus = 'ok' | 'missing' | 'reversed' | 'unknown';

export type LiveGate = {
  /** 1 to 6 */
  index: number;
  /** What each input pin reads (a floating input reads 1), and whether it was floating */
  inputs: { pin: number; value: boolean; floating: boolean }[];
  outputPin: number;
  /** What the gate drives, or null for a chip without power */
  output: boolean | null;
};

/** One chip on the board as the pin diagram shows it: what every pin carries, the supply, the gates. */
export type LiveChip = {
  /** What the net at each pin carries, by pin number */
  pins: Record<number, NetState>;
  vcc: SupplyStatus;
  gnd: SupplyStatus;
  powered: boolean;
  gates: LiveGate[];
};

/** Reads one placed chip from the result of the simulator. */
export function liveChip(ic: PlacedIc, result: SimResult): LiveChip {
  const spec = IC_SPECS[ic.type];
  const points = icPinPoints(ic.board, ic.col);
  const pins: Record<number, NetState> = {};
  for (const [pin, point] of Object.entries(points)) pins[Number(pin)] = result.state(point);

  const state = result.ics[ic.id];
  const powered = state?.powered === true;
  let vcc: SupplyStatus = 'ok';
  let gnd: SupplyStatus = 'ok';
  if (!powered) {
    const warning = result.warnings.find(
      (w) => (w.kind === 'unpowered' || w.kind === 'reversed') && w.ic === ic.id,
    );
    if (warning?.kind === 'reversed') {
      vcc = 'reversed';
      gnd = 'reversed';
    } else if (warning?.kind === 'unpowered') {
      vcc = warning.missing.includes('vcc') ? 'missing' : 'ok';
      gnd = warning.missing.includes('gnd') ? 'missing' : 'ok';
    } else {
      // a short between the supplies: the simulator does not say which pin is wrong
      vcc = 'unknown';
      gnd = 'unknown';
    }
  }

  const gates = spec.gates.map((gate, g): LiveGate => {
    const inputs = gate.inputs.map((pin) => {
      const reading = pins[pin] ?? 'floating';
      return {
        pin,
        value: reading === 'high' || reading === 'floating',
        floating: reading === 'floating',
      };
    });
    return {
      index: g + 1,
      inputs,
      outputPin: gate.output,
      output: state?.outputs[g] ?? null,
    };
  });
  return { pins, vcc, gnd, powered, gates };
}

/** The pins of a chip the diagram colors: the same numbers as `VCC_PIN` and `GND_PIN` are named here for the checklist. */
export const SUPPLY_PINS = { vcc: VCC_PIN, gnd: GND_PIN } as const;

/** Every row of the function table of a chip's gate: the inputs, and what the gate gives. */
export function functionTable(type: PlacedIc['type']): { inputs: boolean[]; output: boolean }[] {
  const spec = IC_SPECS[type];
  const count = spec.gates[0]?.inputs.length ?? 0;
  return Array.from({ length: 2 ** count }, (_, row) => {
    const inputs = Array.from({ length: count }, (_, k) => Boolean((row >> (count - 1 - k)) & 1));
    return { inputs, output: spec.evaluate(inputs) };
  });
}
