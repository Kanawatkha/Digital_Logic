import type { LabNetlist } from '@/content/types';
import type { WireColor } from '../board/palette';
import { SWITCH_PINS } from '../board/layout';
import type { PlacedIc } from '../sim/evaluate';
import { GND_PIN, IC_SPECS, VCC_PIN, icPinPoints, type IcType } from '../sim/ics';
import { arrangeWires } from '../wire/arrange';
import type { Bend } from '../wire/curve';
import { recolorWires } from '../wire/recolor';

/**
 * Puts the answer of a task on the breadboards: chips in a row, each gate on a pin pair of a chip,
 * the power wired from the supply sockets through the rails, every signal wired from its source to
 * each place that reads it, A, B and C from the chosen switches and each output to its LED. The
 * wires are then bent and colored the way the two buttons of the toolbar do.
 */

export type SolutionMapping = {
  /** The switches (0 to 7) of A, B and C */
  inputs: readonly [number, number, number];
  /** The LED (1 to 16) of each output, in the order of `outputs` */
  leds: readonly number[];
};

export type PlacedSolution = {
  ics: { type: IcType; board: number; col: number }[];
  wires: { from: string; to: string; color: WireColor; bend: Bend }[];
};

const CHIP_OF = { NOT: '7404', AND: '7408', OR: '7432', NAND: '7400', NOR: '7402' } as const;
const KIND_ORDER = ['NOT', 'AND', 'OR', 'NAND', 'NOR'] as const;
/** Where chips go along a breadboard, seven columns each with room between them */
const CHIP_COLUMNS = [3, 12, 21, 30, 39, 48];
const FREE_ROWS_ABOVE = ['d', 'c', 'b', 'a'];
const FREE_ROWS_BELOW = ['g', 'h', 'i', 'j'];

type Sink = { kind: 'pin'; hole: string } | { kind: 'led'; number: number };

export function placeSolution(
  net: LabNetlist,
  outputs: readonly string[],
  mapping: SolutionMapping,
): PlacedSolution {
  // chips: the gates of one kind fill chips of that type, in the order of the netlist
  const chips: { type: IcType; board: number; col: number; pins: Record<number, string> }[] = [];
  const place = new Map<string, { chip: number; gate: number }>();
  for (const kind of KIND_ORDER) {
    const type = CHIP_OF[kind];
    const size = IC_SPECS[type].gates.length;
    const gates = net.gates.filter((g) => g.kind === kind);
    for (let k = 0; k < gates.length; k++) {
      if (k % size === 0) {
        const slot = chips.length;
        if (slot >= CHIP_COLUMNS.length * 2)
          throw new Error('the answer needs more chips than the boards hold');
        const board = slot >= CHIP_COLUMNS.length ? 1 : 0;
        const col = CHIP_COLUMNS[slot % CHIP_COLUMNS.length]!;
        chips.push({ type, board, col, pins: icPinPoints(board, col) });
      }
      place.set(gates[k]!.name, { chip: chips.length - 1, gate: k % size });
    }
  }

  // holes next to the legs of the chips, handed out one at a time
  const used = new Set<string>(chips.flatMap((c) => Object.values(c.pins)));
  const holeNear = (hole: string): string => {
    const m = /^(b\d+:c\d+):([a-j])$/.exec(hole)!;
    const rows = 'abcde'.includes(m[2]!) ? FREE_ROWS_ABOVE : FREE_ROWS_BELOW;
    for (const row of rows) {
      const id = `${m[1]}:${row}`;
      if (!used.has(id)) {
        used.add(id);
        return id;
      }
    }
    throw new Error(`no free hole beside ${hole}`);
  };

  const pinsOf = (name: string) => {
    const at = place.get(name)!;
    const gate = net.gates.find((g) => g.name === name)!;
    const chip = chips[at.chip]!;
    const spec = IC_SPECS[chip.type].gates[at.gate]!;
    return {
      inputs: gate.inputs.map((_, k) => chip.pins[spec.inputs[k]!]!),
      output: chip.pins[spec.output]!,
    };
  };

  // who reads each signal
  const sinks = new Map<string, Sink[]>();
  const read = (signal: string, sink: Sink) =>
    sinks.set(signal, [...(sinks.get(signal) ?? []), sink]);
  for (const gate of net.gates) {
    pinsOf(gate.name).inputs.forEach((hole, k) => read(gate.inputs[k]!, { kind: 'pin', hole }));
  }
  outputs.forEach((name, k) => read(net.outputs[name]!, { kind: 'led', number: mapping.leds[k]! }));

  const wires: { from: string; to: string }[] = [];
  const wire = (from: string, to: string) => wires.push({ from, to });

  const inEnd = (s: Sink) => (s.kind === 'pin' ? holeNear(s.hole) : `led${s.number}:0`);
  const onwardEnd = (s: Sink) => (s.kind === 'pin' ? holeNear(s.hole) : `led${s.number}:1`);
  const SIGNAL_SWITCH: Record<string, number> = { A: 0, B: 1, C: 2 };

  for (const [signal, list] of sinks) {
    const input = SIGNAL_SWITCH[signal];
    // a switch has several sockets, a gate output has the free holes beside its pin
    const spokes = input !== undefined ? SWITCH_PINS : 4;
    const out =
      input !== undefined
        ? (i: number) => `sw${mapping.inputs[input]!}:${i}`
        : (() => {
            const hole = pinsOf(signal).output;
            return () => holeNear(hole);
          })();
    list.forEach((sink, i) => {
      if (i < spokes) wire(out(i), inEnd(sink));
      // too many readers for the spokes: the rest are wired on from the one before
      else wire(onwardEnd(list[i - 1]!), inEnd(sink));
    });
  }

  // power: the sockets to the rails of each board, the rails to pins 14 and 7 of each chip
  const boards = [...new Set(chips.map((c) => c.board))].sort();
  for (const board of boards) {
    wire(`power:+5V:${board}`, `b${board}:r:top1:0`);
    wire(`power:GND:${board}`, `b${board}:r:top2:0`);
    chips
      .filter((c) => c.board === board)
      .forEach((chip, j) => {
        wire(`b${board}:r:top1:${j + 1}`, holeNear(chip.pins[VCC_PIN]!));
        wire(`b${board}:r:top2:${j + 1}`, holeNear(chip.pins[GND_PIN]!));
      });
  }

  // bend, then color
  const ics: PlacedIc[] = chips.map((c, k) => ({
    id: `u${k + 1}`,
    type: c.type,
    board: c.board,
    col: c.col,
  }));
  const plain = wires.map((w, k) => ({ ...w, id: `w${k + 1}`, bend: { x: 0, y: 0 } }));
  const bends = arrangeWires(plain, ics);
  const bent = plain.map((w) => ({ ...w, bend: bends.get(w.id) ?? w.bend }));
  const colors = recolorWires(bent);
  return {
    ics: chips.map(({ type, board, col }) => ({ type, board, col })),
    wires: bent.map((w) => ({
      from: w.from,
      to: w.to,
      bend: w.bend,
      color: colors.get(w.id) ?? 'blue',
    })),
  };
}
