import { describe, expect, it } from 'vitest';
import type { LabNetlist } from '@/content/types';
import { layoutDiagram } from '../analysis/diagramLayout';
import { taskInputName, toNetlist } from './toNetlist';

// Y = (A'B C + C) NAND ..., a figure with a gate of three inputs
const figure: LabNetlist = {
  gates: [
    { name: 'n', kind: 'NOT', inputs: ['A'] },
    { name: 'a', kind: 'AND', inputs: ['n', 'B', 'C'] },
    { name: 'o', kind: 'NOR', inputs: ['a', 'C'] },
  ],
  outputs: { Y: 'o', Z: 'a' },
};

describe('toNetlist', () => {
  it('reads A, B and C as the first three inputs, the other names as gates', () => {
    const net = toNetlist(figure, ['Y', 'Z']);
    expect(net.inputs).toEqual([0, 1, 2]);
    const and = net.gates.find((g) => g.id === 'a')!;
    expect(and.inputs).toEqual([
      { kind: 'gate', id: 'n' },
      { kind: 'input', index: 1 },
      { kind: 'input', index: 2 },
    ]);
    expect(and.kind).toBe('and');
    expect(net.gates.find((g) => g.id === 'o')?.kind).toBe('nor');
    expect(net.gates.every((g) => g.powered)).toBe(true);
    expect(net.feedback).toBe(false);
  });

  it('names the outputs as the task does and drives them from their gates', () => {
    const net = toNetlist(figure, ['Y', 'Z']);
    expect(net.outputs.map((o) => o.name)).toEqual(['Y', 'Z']);
    expect(net.outputs[0]?.source).toEqual({ kind: 'gate', id: 'o' });
    expect(net.outputs[1]?.source).toEqual({ kind: 'gate', id: 'a' });
  });

  it('draws no names under the gates, and names the three inputs A, B and C', () => {
    const layout = layoutDiagram(toNetlist(figure, ['Y']), taskInputName);
    expect(layout.nodes.filter((n) => n.kind === 'gate').every((n) => n.label === '')).toBe(true);
    expect(
      layout.nodes
        .filter((n) => n.kind === 'input')
        .map((n) => n.label)
        .sort(),
    ).toEqual(['A', 'B', 'C']);
    expect(taskInputName(0)).toBe('A');
    expect(taskInputName(2)).toBe('C');
  });

  it('can keep the inputs in the order A, B, C from the top, whatever the gates read', () => {
    const reversed: LabNetlist = {
      gates: [{ name: 'g', kind: 'AND', inputs: ['C', 'B', 'A'] }],
      outputs: { Y: 'g' },
    };
    const layout = layoutDiagram(toNetlist(reversed, ['Y']), taskInputName, {
      inputsInOrder: true,
    });
    const ys = ['A', 'B', 'C'].map((name) => layout.nodes.find((n) => n.label === name)!.y);
    expect(ys[0]).toBeLessThan(ys[1]!);
    expect(ys[1]).toBeLessThan(ys[2]!);
  });

  it('lays out a gate of three inputs with a wire into each, ending at its own lead', () => {
    const layout = layoutDiagram(toNetlist(figure, ['Y']), taskInputName);
    const and = layout.nodes.find((n) => n.id === 'g:a')!;
    expect(and.inputYs).toHaveLength(3);
    // the leads are apart from each other
    expect(new Set(and.inputYs).size).toBe(3);
    const into = layout.edges.filter((e) => e.to === 'g:a');
    expect(into.map((e) => e.pin).sort()).toEqual([0, 1, 2]);
    for (const edge of into) {
      const end = edge.points[edge.points.length - 1]!;
      expect(end.y).toBeCloseTo(and.inputYs[edge.pin]!, 5);
    }
    // all the wires of the figure run to the right at right angles
    for (const edge of layout.edges) {
      for (let k = 1; k < edge.points.length; k++) {
        const [p, q] = [edge.points[k - 1]!, edge.points[k]!];
        expect(p.x === q.x || p.y === q.y).toBe(true);
        expect(q.x).toBeGreaterThanOrEqual(p.x);
      }
    }
  });

  it('draws a gate with the wire to an output that is only a switch', () => {
    const wire: LabNetlist = { gates: [], outputs: { Y: 'C' } };
    const layout = layoutDiagram(toNetlist(wire, ['Y']), taskInputName);
    expect(layout.nodes.map((n) => n.kind).sort()).toEqual(['input', 'output']);
    expect(layout.edges).toHaveLength(1);
  });
});
