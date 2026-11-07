// @vitest-environment node
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildLabTasks } from '../../../../scripts/build-content/tasks';
import { SWITCH_COUNT } from '../board/layout';
import { simulate } from '../sim/evaluate';
import { circuitReducer, initialCircuit } from '../state/circuit';
import { agrees, rowBits } from './logic';
import { placeSolution } from './place';

const result = buildLabTasks(join(process.cwd(), 'content'));
const tasks = result.data.groups.flatMap((g) => g.tasks);

describe('the lab tasks of the content', () => {
  it('build with no errors and no warnings', () => {
    expect(result.errors).toEqual([]);
    expect(result.warnings).toEqual([]);
  });

  it('are in five files, each with tasks, with unique ids', () => {
    expect(result.data.groups).toHaveLength(5);
    for (const g of result.data.groups) expect(g.tasks.length).toBeGreaterThanOrEqual(8);
    expect(new Set(tasks.map((t) => t.id)).size).toBe(tasks.length);
    expect(tasks.length).toBeGreaterThanOrEqual(40);
  });

  it('have one or two outputs and each of the three kinds in every file', () => {
    for (const g of result.data.groups) {
      for (const only of [null, 'nand', 'nor'] as const) {
        expect(
          g.tasks.some((t) => t.only === only),
          `${g.id} ${only}`,
        ).toBe(true);
      }
    }
    for (const t of tasks) expect([1, 2]).toContain(t.outputs.length);
    expect(tasks.some((t) => t.outputs.length === 2)).toBe(true);
    expect(tasks.some((t) => t.outputs.some((o) => o.cells.includes('x')))).toBe(true);
  });

  it('give every task a worked solution and an answer line for each output', () => {
    for (const t of tasks) {
      expect(t.steps.length, t.id).toBeGreaterThan(0);
      expect(t.answer, t.id).toHaveLength(t.outputs.length);
    }
  });

  it('use two input gates in every answer, and the right chip for a task that names one', () => {
    for (const t of tasks) {
      for (const gate of t.solution.netlist.gates) {
        expect(gate.inputs.length, `${t.id} ${gate.name}`).toBeLessThanOrEqual(2);
        if (t.only) expect(gate.kind, t.id).toBe(t.only.toUpperCase());
      }
    }
  });

  it('give a figure to every task of the circuit file, some with gates of three inputs', () => {
    const group = result.data.groups.find((g) => g.id === '04')!;
    for (const t of group.tasks) expect(t.figure, t.id).not.toBeNull();
    expect(group.tasks.some((t) => t.figure!.gates.some((g) => g.inputs.length === 3))).toBe(true);
  });

  for (const task of tasks) {
    it(`${task.id}: the answer, put on the boards, does what the task asks with no warning`, () => {
      // as the lab puts it: A, B and C are switches 1 to 3, the outputs are LED 1 and LED 2
      const names = task.outputs.map((o) => o.name);
      const placed = placeSolution(task.solution.netlist, names, {
        inputs: [0, 1, 2],
        leds: names.map((_, k) => k + 1),
      });
      const board = circuitReducer(initialCircuit, {
        type: 'replace',
        ics: placed.ics,
        wires: placed.wires,
      });
      // nothing was dropped on the way
      expect(board.wires).toHaveLength(placed.wires.length);
      expect(board.ics).toHaveLength(placed.ics.length);
      expect(simulate(board).warnings, task.id).toEqual([]);

      const rows = Array.from({ length: 8 }, (_, row) => {
        const switches = Array.from({ length: SWITCH_COUNT }, () => false);
        rowBits(row).forEach((bit, k) => {
          switches[k] = bit;
        });
        return simulate({ ...board, switches }).leds;
      });
      task.outputs.forEach((output, k) => {
        const values = rows.map((leds) => leds[k] === true);
        expect(agrees(output.cells, values), `${task.id} ${output.name}`).toBe(true);
      });
    });
  }
});
