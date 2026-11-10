import { describe, expect, it } from 'vitest';
import { andOr, direct, latch, nand } from './circuits.fixture';
import {
  MIN_WIRE_GAP,
  layoutDiagram,
  signalKey,
  type DiagramLayout,
  type LNode,
} from './diagramLayout';
import type { LabNetlist } from '@/content/types';
import { taskInputName, toNetlist } from '../tasks/toNetlist';
import { buildNetlist } from './netlist';

const letters = (k: number) => String.fromCharCode(65 + k);
const layoutOf = (circuit: ReturnType<typeof andOr>) =>
  layoutDiagram(buildNetlist(circuit), letters);
const byId = (layout: DiagramLayout, id: string) => layout.nodes.find((n) => n.id === id)!;

describe('layoutDiagram', () => {
  it('puts switches on the left, the gates in columns by depth, and the LED on the right', () => {
    const layout = layoutOf(andOr());
    const and = byId(layout, 'g:u1:1');
    const or = byId(layout, 'g:u2:1');
    const led = byId(layout, 'o:1');
    const a = byId(layout, 'in:0');
    expect(a.level).toBe(0);
    expect(and.level).toBe(1);
    expect(or.level).toBe(2);
    expect(led.level).toBe(3);
    expect(a.outX).toBeLessThan(and.x);
    expect(and.outX).toBeLessThan(or.x);
    expect(or.outX).toBeLessThan(led.x);
  });

  it('names the switches by their column and the gates by chip and number', () => {
    const layout = layoutOf(andOr());
    expect(byId(layout, 'in:0').label).toBe('A');
    expect(byId(layout, 'in:2').label).toBe('C');
    expect(byId(layout, 'g:u1:1').label).toBe('U1·1');
    expect(byId(layout, 'o:1').label).toBe('1');
  });

  it('draws a wire for every gate input and every LED', () => {
    const layout = layoutOf(andOr());
    // two inputs for each of two gates, and the LED
    expect(layout.edges).toHaveLength(5);
    const signals = layout.edges.map((e) => e.signal).sort();
    expect(signals).toEqual(['g:u1:1', 'g:u2:1', 'in:0', 'in:1', 'in:2']);
    for (const edge of layout.edges) {
      expect(byId(layout, edge.from)).toBeDefined();
      expect(byId(layout, edge.to)).toBeDefined();
    }
  });

  it('runs every wire from left to right in right angles, ending at its gate input', () => {
    const layout = layoutOf(andOr());
    for (const edge of layout.edges) {
      const { points } = edge;
      expect(points.length).toBeGreaterThanOrEqual(2);
      for (let k = 1; k < points.length; k++) {
        const [p, q] = [points[k - 1]!, points[k]!];
        expect(p.x === q.x || p.y === q.y, `${edge.id} bends at a right angle`).toBe(true);
        expect(q.x, `${edge.id} goes right`).toBeGreaterThanOrEqual(p.x);
      }
      const to = byId(layout, edge.to);
      const end = points[points.length - 1]!;
      expect(end.x).toBeGreaterThanOrEqual(to.x);
      expect(end.x).toBeLessThanOrEqual(to.x + 6);
      expect(to.inputYs.length ? to.inputYs : [to.y]).toContain(end.y);
      const from = byId(layout, edge.from);
      expect(points[0]).toEqual({ x: from.outX, y: from.y });
    }
  });

  it('keeps the nodes of a column apart', () => {
    const layout = layoutOf(andOr());
    const columns = new Map<number, LNode[]>();
    for (const node of layout.nodes) {
      columns.set(node.level, [...(columns.get(node.level) ?? []), node]);
    }
    for (const nodes of columns.values()) {
      const sorted = [...nodes].sort((p, q) => p.y - q.y);
      for (let k = 1; k < sorted.length; k++) {
        expect(sorted[k]!.y - sorted[k - 1]!.y).toBeGreaterThan(28);
      }
    }
  });

  it('sends a wire that skips a column through the column: C goes past the first column of gates', () => {
    const layout = layoutOf(andOr());
    const edge = layout.edges.find((e) => e.signal === 'in:2')!;
    // from column 0 to the OR gate in column 2: it has to pass column 1 at some height
    const gap = byId(layout, 'g:u1:1');
    const passes = edge.points.some((p) => p.x > gap.x - 10 && p.x < gap.outX + 40);
    expect(passes).toBe(true);
    // and not through the AND gate
    for (let k = 1; k < edge.points.length; k++) {
      const [p, q] = [edge.points[k - 1]!, edge.points[k]!];
      if (p.y !== q.y) continue;
      const overlapsX = Math.max(p.x, q.x) > gap.x && Math.min(p.x, q.x) < gap.outX;
      const overlapsY = Math.abs(p.y - gap.y) < 24;
      expect(overlapsX && overlapsY).toBe(false);
    }
  });

  it('draws a switch wired straight to an LED, and a NAND', () => {
    const straight = layoutOf(direct());
    expect(straight.nodes.map((n) => n.id).sort()).toEqual(['in:3', 'o:2']);
    expect(straight.edges).toHaveLength(1);
    const n = layoutOf(nand());
    expect(byId(n, 'g:u1:1').gate?.kind).toBe('nand');
    expect(n.edges).toHaveLength(3);
  });

  it('draws a feedback wire round the bottom, backwards', () => {
    const layout = layoutOf(latch());
    const back = layout.edges.filter((e) => e.back);
    expect(back.length).toBeGreaterThan(0);
    const lowest = Math.max(...layout.nodes.map((n) => n.y));
    for (const edge of back) {
      expect(Math.max(...edge.points.map((p) => p.y))).toBeGreaterThan(lowest);
    }
    expect(layout.height).toBeGreaterThan(lowest + 30);
  });

  it('gives constants and loose inputs their own boxes, once', () => {
    const circuit = nand();
    const wired = layoutOf({
      ...circuit,
      wires: [
        ...circuit.wires.filter((w) => w.from !== 'sw1:0'),
        { from: 'power:+5V:3', to: 'b0:c12:i' },
      ],
    });
    expect(wired.nodes.filter((n) => n.kind === 'const')).toHaveLength(1);
    const loose = layoutOf({ ...circuit, wires: circuit.wires.filter((w) => w.from !== 'sw1:0') });
    expect(loose.nodes.filter((n) => n.kind === 'floating')).toHaveLength(1);
  });

  it('is as wide and tall as what it holds', () => {
    const layout = layoutOf(andOr());
    for (const node of layout.nodes) {
      expect(node.outX).toBeLessThanOrEqual(layout.width);
      expect(node.y).toBeLessThanOrEqual(layout.height);
    }
    for (const edge of layout.edges) {
      for (const p of edge.points) {
        expect(p.x).toBeLessThanOrEqual(layout.width);
        expect(p.y).toBeLessThanOrEqual(layout.height);
      }
    }
  });

  it('names a signal the same for the box that drives it and the wires', () => {
    expect(signalKey({ kind: 'input', index: 2 })).toBe('in:2');
    expect(signalKey({ kind: 'gate', id: 'u1:3' })).toBe('g:u1:3');
    expect(signalKey({ kind: 'const', value: true })).toBe('c:1');
    expect(signalKey({ kind: 'const', value: false })).toBe('c:0');
  });

  describe('the places where a signal branches', () => {
    const task = (gates: LabNetlist['gates'], output: string) =>
      layoutDiagram(toNetlist({ gates, outputs: { Y: output } }, ['Y']), taskInputName, {
        inputsInOrder: true,
      });

    it('has none when no signal feeds more than one gate', () => {
      const layout = task(
        [
          { name: 'g1', kind: 'AND', inputs: ['A', 'B'] },
          { name: 'g2', kind: 'OR', inputs: ['g1', 'C'] },
        ],
        'g2',
      );
      expect(layout.junctions).toEqual([]);
    });

    it('has one for a signal that feeds two gates, on the wire and not at the box of the signal', () => {
      const layout = task(
        [
          { name: 'g1', kind: 'AND', inputs: ['A', 'B'] },
          { name: 'g2', kind: 'OR', inputs: ['A', 'g1'] },
        ],
        'g2',
      );
      const a = layout.nodes.find((n) => n.id === 'in:0')!;
      expect(layout.junctions.length).toBeGreaterThanOrEqual(1);
      for (const dot of layout.junctions) {
        // to the right of the box of A, on a wire that comes from A
        expect(dot.x).toBeGreaterThan(a.outX);
        const onWire = layout.edges
          .filter((e) => e.from === 'in:0')
          .some((e) =>
            e.points.some((p, k) => {
              const q = e.points[k + 1];
              if (!q) return p.x === dot.x && p.y === dot.y;
              return (
                dot.x >= Math.min(p.x, q.x) &&
                dot.x <= Math.max(p.x, q.x) &&
                dot.y >= Math.min(p.y, q.y) &&
                dot.y <= Math.max(p.y, q.y)
              );
            }),
          );
        expect(onWire).toBe(true);
      }
    });

    it('has two for a signal that feeds three gates, and each once', () => {
      const layout = task(
        [
          { name: 'g1', kind: 'AND', inputs: ['A', 'B'] },
          { name: 'g2', kind: 'OR', inputs: ['A', 'C'] },
          { name: 'g3', kind: 'NAND', inputs: ['A', 'g1'] },
          { name: 'g4', kind: 'OR', inputs: ['g2', 'g3'] },
        ],
        'g4',
      );
      const dots = layout.junctions.map((p) => `${p.x},${p.y}`);
      expect(new Set(dots).size).toBe(dots.length);
      // three wires of A leave one line: it parts at least twice
      expect(dots.length).toBeGreaterThanOrEqual(2);
    });

    it('has none for wires of different signals that only cross', () => {
      // B and C cross on their way, and neither branches
      const layout = task(
        [
          { name: 'g1', kind: 'AND', inputs: ['A', 'C'] },
          { name: 'g2', kind: 'OR', inputs: ['B', 'g1'] },
        ],
        'g2',
      );
      expect(layout.junctions).toEqual([]);
    });
  });

  it('keeps wires of different signals apart where they run side by side, by turning them in an order that allows it', () => {
    // the wire of B ends at the height where A starts, and the wire of A ends where B starts: the
    // two stretches would lie on one another unless one wire turns before the other
    const layout = layoutDiagram(
      toNetlist(
        {
          gates: [
            { name: 'g1', kind: 'AND', inputs: ['B', 'C'] },
            { name: 'g2', kind: 'OR', inputs: ['A', 'g1'] },
            { name: 'g3', kind: 'NAND', inputs: ['A', 'B'] },
            { name: 'g4', kind: 'OR', inputs: ['g2', 'g3'] },
          ],
          outputs: { Y: 'g4' },
        },
        ['Y'],
      ),
      taskInputName,
      { inputsInOrder: true },
    );
    const runs = layout.edges.flatMap((edge) =>
      edge.points.slice(1).flatMap((q, k) => {
        const p = edge.points[k]!;
        return p.y === q.y && p.x !== q.x
          ? [{ src: edge.from, y: p.y, from: Math.min(p.x, q.x), to: Math.max(p.x, q.x) }]
          : [];
      }),
    );
    for (const a of runs) {
      for (const b of runs) {
        if (a === b || a.src === b.src) continue;
        if (Math.min(a.to, b.to) - Math.max(a.from, b.from) <= 0) continue;
        expect(Math.abs(a.y - b.y)).toBeGreaterThanOrEqual(MIN_WIRE_GAP);
      }
    }
  });
});
