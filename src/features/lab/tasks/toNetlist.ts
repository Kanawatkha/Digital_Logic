import type { LabNetlist } from '@/content/types';
import type { Netlist, NetGate, Signal } from '../analysis/netlist';
import type { GateKind } from '../diagram/pinDiagram';
import type { IcType } from '../sim/ics';

/**
 * A gate list of a task (the figure given in the statement, or the answer) as the netlist the
 * diagram of the lab draws. A, B and C are inputs 0, 1 and 2, every gate is named by the task and
 * every output by the name the task gives it, so the drawing reads like the statement.
 */

const CHIP_OF: Record<LabNetlist['gates'][number]['kind'], IcType> = {
  NOT: '7404',
  AND: '7408',
  OR: '7432',
  NAND: '7400',
  NOR: '7402',
};

const INPUT_INDEX: Record<string, number> = { A: 0, B: 1, C: 2 };

/** The names of the three inputs, for the `nameOf` of the layout */
export const taskInputName = (index: number): string => 'ABC'[index] ?? `S${index + 1}`;

export function toNetlist(net: LabNetlist, outputNames: readonly string[]): Netlist {
  const signal = (name: string): Signal => {
    const input = INPUT_INDEX[name];
    if (input !== undefined) return { kind: 'input', index: input };
    if (name === '0') return { kind: 'const', value: false };
    if (name === '1') return { kind: 'const', value: true };
    return { kind: 'gate', id: name };
  };

  const gates: NetGate[] = net.gates.map((gate, k) => ({
    id: gate.name,
    ic: gate.name,
    type: CHIP_OF[gate.kind],
    gate: k + 1,
    kind: gate.kind.toLowerCase() as GateKind,
    inputs: gate.inputs.map(signal),
    powered: true,
    // the symbol says what a gate is: no name and no chip under it
    label: '',
    subLabel: '',
  }));

  return {
    gates,
    outputs: outputNames.map((name, k) => ({
      led: k + 1,
      name,
      source: signal(net.outputs[name] ?? '0'),
    })),
    wiredLeds: outputNames.map((_, k) => k + 1),
    inputs: [0, 1, 2],
    feedback: false,
    faults: { short: false, conflict: false, unpowered: [], floating: false },
  };
}
