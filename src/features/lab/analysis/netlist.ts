import { LED_COUNT, SWITCH_COUNT } from '../board/layout';
import { GATE_KINDS, type GateKind } from '../diagram/pinDiagram';
import type { Circuit } from '../sim/evaluate';
import { GND_PIN, IC_SPECS, VCC_PIN, icPinPoints, type IcType } from '../sim/ics';
import { createNets } from '../sim/nets';
import { GND_KEY, VCC_KEY, netKey, parsePoint } from '../sim/points';

/**
 * The circuit on the breadboards as a graph of gates: which gate reads which switch, supply or other
 * gate, and which gate drives which LED. It is read from the same wires, chips and board joins the
 * simulator uses, and only the part that leads to the chosen LEDs is kept. The truth table, the
 * equations and the circuit diagram are all made from this.
 */

/** What an input of a gate, or an LED, reads. */
export type Signal =
  /** Logic switch `index` (0 to 7) */
  | { kind: 'input'; index: number }
  /** The output of a gate, by gate id */
  | { kind: 'gate'; id: string }
  /** +5V (true) or GND (false) */
  | { kind: 'const'; value: boolean }
  /** Nothing drives it: a TTL input reads 1 */
  | { kind: 'floating' }
  /** Two things drive it */
  | { kind: 'conflict' };

export type NetGate = {
  /** `u1:2`: chip id, then gate number from 1 */
  id: string;
  ic: string;
  type: IcType;
  /** 1 to 6 */
  gate: number;
  kind: GateKind;
  inputs: Signal[];
  /** Pin 14 is on +5V and pin 7 is on GND */
  powered: boolean;
  /** A name to draw instead of the chip and gate number (for the gates of a lab task) */
  label?: string;
  /** What to write under the label instead of the chip type */
  subLabel?: string;
};

export type Netlist = {
  /** The gates that lead to the chosen LEDs, each after the gates it reads (when there is no feedback) */
  gates: NetGate[];
  /** The chosen LEDs and what drives each */
  outputs: { led: number; source: Signal; name?: string }[];
  /** Every LED with a wire to it, in order: what can be chosen */
  wiredLeds: number[];
  /** The switches that reach the chosen LEDs, from the lowest */
  inputs: number[];
  /** A gate reads, through other gates, its own output: the outputs depend on history */
  feedback: boolean;
  faults: {
    short: boolean;
    conflict: boolean;
    /** Chips with a gate in the circuit that have no power */
    unpowered: string[];
    /** A gate input that nothing drives */
    floating: boolean;
  };
};

const gateId = (ic: string, gate: number) => `${ic}:${gate}`;

/**
 * @param leds which LEDs to follow; by default every LED that has a wire
 */
export function buildNetlist(
  circuit: Pick<Circuit, 'wires' | 'ics'>,
  leds?: readonly number[],
): Netlist {
  const nets = createNets();
  const wired = new Set<string>();
  for (const wire of circuit.wires) {
    const a = parsePoint(wire.from);
    const b = parsePoint(wire.to);
    if (!a || !b) continue;
    nets.union(netKey(a), netKey(b));
    wired.add(netKey(a));
    wired.add(netKey(b));
  }
  const vcc = nets.root(VCC_KEY);
  const gnd = nets.root(GND_KEY);
  const short = vcc === gnd;

  // everything that drives a net: the supplies, the switches and the outputs of the gates
  const drivers = new Map<string, Signal[]>();
  const drive = (net: string, signal: Signal) => {
    const list = drivers.get(net) ?? [];
    list.push(signal);
    drivers.set(net, list);
  };
  drive(vcc, { kind: 'const', value: true });
  if (!short) drive(gnd, { kind: 'const', value: false });
  for (let k = 0; k < SWITCH_COUNT; k++) drive(nets.root(`sw${k}`), { kind: 'input', index: k });

  type Placed = Omit<NetGate, 'inputs'> & { inputNets: (string | undefined)[] };
  const placed: Placed[] = [];
  for (const ic of circuit.ics) {
    const pins: Record<number, string> = {};
    for (const [pin, id] of Object.entries(icPinPoints(ic.board, ic.col))) {
      const point = parsePoint(id);
      if (point) pins[Number(pin)] = nets.root(netKey(point));
    }
    const powered = !short && pins[VCC_PIN] === vcc && pins[GND_PIN] === gnd;
    IC_SPECS[ic.type].gates.forEach((gate, g) => {
      const output = pins[gate.output];
      if (output === undefined) return;
      const id = gateId(ic.id, g + 1);
      drive(output, { kind: 'gate', id });
      placed.push({
        id,
        ic: ic.id,
        type: ic.type,
        gate: g + 1,
        kind: GATE_KINDS[ic.type],
        powered,
        inputNets: gate.inputs.map((pin) => pins[pin]),
      });
    });
  }

  const signalOf = (net: string | undefined): Signal => {
    const list = (net === undefined ? undefined : drivers.get(net)) ?? [];
    if (list.length === 0) return { kind: 'floating' };
    return list.length === 1 ? list[0]! : { kind: 'conflict' };
  };
  const all = new Map<string, NetGate>(
    placed.map(({ inputNets, ...rest }) => [rest.id, { ...rest, inputs: inputNets.map(signalOf) }]),
  );

  const wiredLeds: number[] = [];
  for (let n = 1; n <= LED_COUNT; n++) if (wired.has(`led${n}`)) wiredLeds.push(n);
  const chosen = leds ? wiredLeds.filter((n) => leds.includes(n)) : wiredLeds;
  const outputs = chosen.map((led) => ({ led, source: signalOf(nets.root(`led${led}`)) }));

  // the part of the circuit that leads to the chosen LEDs
  const gates: NetGate[] = [];
  const done = new Set<string>();
  const onPath = new Set<string>();
  const inputs = new Set<number>();
  let feedback = false;
  let conflict = false;
  let floating = false;
  const visitSignal = (signal: Signal) => {
    if (signal.kind === 'input') inputs.add(signal.index);
    else if (signal.kind === 'conflict') conflict = true;
    else if (signal.kind === 'gate') visitGate(signal.id);
  };
  const visitGate = (id: string) => {
    if (onPath.has(id)) {
      feedback = true;
      return;
    }
    if (done.has(id)) return;
    const gate = all.get(id);
    if (!gate) return;
    onPath.add(id);
    for (const input of gate.inputs) {
      if (input.kind === 'floating') floating = true;
      visitSignal(input);
    }
    onPath.delete(id);
    done.add(id);
    gates.push(gate);
  };
  for (const output of outputs) visitSignal(output.source);

  return {
    gates,
    outputs,
    wiredLeds,
    inputs: [...inputs].sort((a, b) => a - b),
    feedback,
    faults: {
      short,
      conflict,
      unpowered: [...new Set(gates.filter((g) => !g.powered).map((g) => g.ic))],
      floating,
    },
  };
}
