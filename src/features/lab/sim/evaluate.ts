import { LED_COUNT, SWITCH_COUNT } from '../board/layout';
import { GND_PIN, IC_SPECS, VCC_PIN, icPinPoints, type IcType } from './ics';
import { createNets } from './nets';
import { GND_KEY, UNSUPPORTED_SUPPLIES, VCC_KEY, netKey, parsePoint } from './points';

export type Wire = { from: string; to: string };

/** A chip on a breadboard: its pin 1 is at column `col` of board `board`. */
export type PlacedIc = { id: string; type: IcType; board: number; col: number };

export type Circuit = {
  wires: readonly Wire[];
  ics: readonly PlacedIc[];
  /** `switches[k]` is true when logic switch k is up (1). */
  switches: readonly boolean[];
};

/** What a net carries. `floating` means nothing drives it. `conflict` means drivers disagree. */
export type NetState = 'high' | 'low' | 'floating' | 'conflict';

export type Warning =
  | { kind: 'short' }
  | { kind: 'conflict'; net: string; drivers: string[] }
  | { kind: 'unpowered'; ic: string }
  | { kind: 'floatingInput'; ic: string; gate: number; pin: number }
  | { kind: 'unstable'; ics: string[] }
  | { kind: 'unsupportedSupply'; socket: string }
  | { kind: 'overlap'; ics: [string, string] }
  | { kind: 'badPoint'; id: string };

export type IcState = {
  /** Pin 14 is on +5V and pin 7 is on GND. */
  powered: boolean;
  /** What each gate drives, or null for an unpowered chip. */
  outputs: (boolean | null)[];
};

export type SimResult = {
  short: boolean;
  warnings: Warning[];
  /** `leds[k]` is true when Logic Monitor LED k + 1 is lit. */
  leds: boolean[];
  ics: Record<string, IcState>;
  /** What the net at a point carries. */
  state: (pointId: string) => NetState;
};

/**
 * Reading rules for an input: a floating input reads 1 like a TTL (74LS) input, and in a conflict
 * the low level wins, as it does in a TTL output stage.
 */
const reads = (state: NetState): boolean => state === 'high' || state === 'floating';

type Driver = { name: string; value: boolean };

/**
 * Works out what every net carries. The board's own joins (hole strips, rails, socket blocks)
 * and the wires make nets; the +5V and GND sockets, the switches and the chip outputs drive them.
 * Chips are evaluated round after round until nothing changes.
 */
export function simulate(circuit: Circuit): SimResult {
  const nets = createNets();
  const warnings: Warning[] = [];
  /** Keys a wire touches: the nets that have something connected to them. */
  const wired = new Set<string>();
  const badPoints = new Set<string>();

  for (const wire of circuit.wires) {
    const a = parsePoint(wire.from);
    const b = parsePoint(wire.to);
    for (const [id, point] of [
      [wire.from, a],
      [wire.to, b],
    ] as const) {
      if (!point && !badPoints.has(id)) {
        badPoints.add(id);
        warnings.push({ kind: 'badPoint', id });
      }
    }
    if (!a || !b) continue;
    nets.union(netKey(a), netKey(b));
    wired.add(netKey(a));
    wired.add(netKey(b));
  }

  // chips: the net of each pin, and chips that sit on the same holes
  type Placed = { ic: PlacedIc; pins: Record<number, string> };
  const placed: Placed[] = circuit.ics.map((ic) => {
    const pins: Record<number, string> = {};
    for (const [pin, id] of Object.entries(icPinPoints(ic.board, ic.col))) {
      const point = parsePoint(id);
      if (point) pins[Number(pin)] = netKey(point);
    }
    return { ic, pins };
  });
  const holeOwner = new Map<string, string>();
  const overlapping = new Set<string>();
  for (const { ic } of placed) {
    for (const id of Object.values(icPinPoints(ic.board, ic.col))) {
      const owner = holeOwner.get(id);
      if (owner !== undefined && owner !== ic.id && !overlapping.has(`${owner}|${ic.id}`)) {
        overlapping.add(`${owner}|${ic.id}`);
        warnings.push({ kind: 'overlap', ics: [owner, ic.id] });
      }
      holeOwner.set(id, ic.id);
    }
  }

  for (const socket of UNSUPPORTED_SUPPLIES) {
    if (wired.has(`power:${socket}`)) warnings.push({ kind: 'unsupportedSupply', socket });
  }

  const vcc = nets.root(VCC_KEY);
  const gnd = nets.root(GND_KEY);
  const quiet: SimResult = {
    short: true,
    warnings: [...warnings, { kind: 'short' }],
    leds: Array.from({ length: LED_COUNT }, () => false),
    ics: Object.fromEntries(
      placed.map(({ ic }) => [ic.id, { powered: false, outputs: [] as (boolean | null)[] }]),
    ),
    state: (id) => {
      const point = parsePoint(id);
      if (!point) return 'floating';
      const root = nets.root(netKey(point));
      return root === vcc ? 'conflict' : 'floating';
    },
  };
  if (vcc === gnd) return quiet;

  // static drivers: the supply sockets and the switches
  const staticDrivers = new Map<string, Driver[]>();
  const drive = (root: string, driver: Driver) => {
    const list = staticDrivers.get(root) ?? [];
    list.push(driver);
    staticDrivers.set(root, list);
  };
  drive(vcc, { name: '+5V', value: true });
  drive(gnd, { name: 'GND', value: false });
  for (let k = 0; k < SWITCH_COUNT; k++) {
    drive(nets.root(`sw${k}`), { name: `switch ${k + 1}`, value: Boolean(circuit.switches[k]) });
  }

  const powered = new Map<string, boolean>(
    placed.map(({ ic, pins }) => [
      ic.id,
      Boolean(pins[VCC_PIN] && pins[GND_PIN]) &&
        nets.root(pins[VCC_PIN] ?? '') === vcc &&
        nets.root(pins[GND_PIN] ?? '') === gnd,
    ]),
  );

  const outputKey = (icId: string, gate: number) => `${icId}:${gate}`;

  /** What every net carries, given what the gates drive now. */
  const settle = (outputs: ReadonlyMap<string, boolean | null>) => {
    const drivers = new Map<string, Driver[]>();
    for (const [root, list] of staticDrivers) drivers.set(root, [...list]);
    for (const { ic, pins } of placed) {
      const spec = IC_SPECS[ic.type];
      spec.gates.forEach((gate, g) => {
        const value = outputs.get(outputKey(ic.id, g));
        const pin = pins[gate.output];
        if (value === null || value === undefined || pin === undefined) return;
        const root = nets.root(pin);
        const list = drivers.get(root) ?? [];
        list.push({ name: `${ic.id} gate ${g + 1}`, value });
        drivers.set(root, list);
      });
    }
    const states = new Map<string, NetState>();
    for (const [root, list] of drivers) {
      const high = list.some((d) => d.value);
      const low = list.some((d) => !d.value);
      states.set(root, high && low ? 'conflict' : high ? 'high' : 'low');
    }
    return { states, drivers };
  };

  const stateOf = (states: ReadonlyMap<string, NetState>, key: string): NetState =>
    states.get(nets.root(key)) ?? 'floating';

  /** One round: every powered gate reads its inputs from `states`. */
  const evaluateGates = (states: ReadonlyMap<string, NetState>) => {
    const outputs = new Map<string, boolean | null>();
    for (const { ic, pins } of placed) {
      const spec = IC_SPECS[ic.type];
      const on = powered.get(ic.id) === true;
      spec.gates.forEach((gate, g) => {
        if (!on) {
          outputs.set(outputKey(ic.id, g), null);
          return;
        }
        const inputs = gate.inputs.map((pin) => reads(stateOf(states, pins[pin] ?? '')));
        outputs.set(outputKey(ic.id, g), spec.evaluate(inputs));
      });
    }
    return outputs;
  };

  const gateCount = placed.reduce((sum, { ic }) => sum + IC_SPECS[ic.type].gates.length, 0);
  let outputs: Map<string, boolean | null> = new Map(
    placed.flatMap(({ ic }) =>
      IC_SPECS[ic.type].gates.map((_, g) => [outputKey(ic.id, g), null] as const),
    ),
  );
  let settled = settle(outputs);
  let previous = outputs;
  for (let round = 0; round < gateCount + 2; round++) {
    previous = outputs;
    outputs = evaluateGates(settled.states);
    settled = settle(outputs);
    if ([...outputs].every(([key, value]) => previous.get(key) === value)) break;
  }

  // a chip whose outputs still changed in the last round never settles
  const unstable = new Set<string>();
  for (const [key, value] of outputs) {
    if (previous.get(key) !== value) unstable.add(key.slice(0, key.lastIndexOf(':')));
  }
  if (unstable.size > 0) warnings.push({ kind: 'unstable', ics: [...unstable] });

  for (const [root, list] of settled.drivers) {
    if (settled.states.get(root) === 'conflict') {
      warnings.push({ kind: 'conflict', net: root, drivers: list.map((d) => d.name) });
    }
  }

  const icStates: Record<string, IcState> = {};
  for (const { ic, pins } of placed) {
    const spec = IC_SPECS[ic.type];
    const on = powered.get(ic.id) === true;
    icStates[ic.id] = {
      powered: on,
      outputs: spec.gates.map((_, g) => outputs.get(outputKey(ic.id, g)) ?? null),
    };
    if (!on) {
      warnings.push({ kind: 'unpowered', ic: ic.id });
      continue;
    }
    spec.gates.forEach((gate, g) => {
      // a gate nobody uses is left alone: its inputs may float without a hint
      const used = [gate.output, ...gate.inputs].some((pin) => wired.has(pins[pin] ?? ''));
      if (!used) return;
      for (const pin of gate.inputs) {
        if (stateOf(settled.states, pins[pin] ?? '') === 'floating') {
          warnings.push({ kind: 'floatingInput', ic: ic.id, gate: g + 1, pin });
        }
      }
    });
  }

  return {
    short: false,
    warnings,
    leds: Array.from(
      { length: LED_COUNT },
      (_, k) => stateOf(settled.states, `led${k + 1}`) === 'high',
    ),
    ics: icStates,
    state: (id) => {
      const point = parsePoint(id);
      return point ? stateOf(settled.states, netKey(point)) : 'floating';
    },
  };
}
