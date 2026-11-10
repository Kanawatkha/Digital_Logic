// @vitest-environment node
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildLabTasks } from '../../../../scripts/build-content/tasks';
import { GATE_WIDTH } from '../diagram/pinDiagram';
import { circuitReducer, initialCircuit } from '../state/circuit';
import { placeSolution } from '../tasks/place';
import { taskInputName, toNetlist } from '../tasks/toNetlist';
import { buildNetlist } from './netlist';
import { MIN_WIRE_GAP, GATE_SCALE, layoutDiagram, type DiagramLayout } from './diagramLayout';

/**
 * The diagrams of every task, the figure of a circuit task and the circuit of every answer, are
 * measured for what makes a diagram hard to read: wires of different signals lying on one another or
 * side by side, a wire that ends on another one's line, a wire through a gate, and a branch with no
 * dot. The same layout draws the circuit of the results and of the tasks, so this is the test of both.
 */
const data = buildLabTasks(join(process.cwd(), 'content')).data;
const layouts: { name: string; layout: DiagramLayout }[] = [];
for (const group of data.groups) {
  for (const task of group.tasks) {
    const names = task.outputs.map((o) => o.name);
    if (task.figure) {
      layouts.push({
        name: `${task.id} figure`,
        layout: layoutDiagram(toNetlist(task.figure, names), taskInputName, {
          inputsInOrder: true,
        }),
      });
    }
    layouts.push({
      name: `${task.id} answer`,
      layout: layoutDiagram(toNetlist(task.solution.netlist, names), taskInputName, {
        inputsInOrder: true,
      }),
    });
  }
}

type Seg = { src: string; horizontal: boolean; at: number; from: number; to: number };

function segmentsOf(layout: DiagramLayout): Seg[] {
  const out: Seg[] = [];
  for (const edge of layout.edges) {
    for (let k = 1; k < edge.points.length; k++) {
      const a = edge.points[k - 1]!;
      const b = edge.points[k]!;
      if (a.x === b.x && a.y === b.y) continue;
      const horizontal = a.y === b.y;
      out.push({
        src: edge.from,
        horizontal,
        at: horizontal ? a.y : a.x,
        from: horizontal ? Math.min(a.x, b.x) : Math.min(a.y, b.y),
        to: horizontal ? Math.max(a.x, b.x) : Math.max(a.y, b.y),
      });
    }
  }
  return out;
}

/** Pairs of wires of different signals that lie on one another or closer than `MIN_WIRE_GAP`. */
function crowded(layout: DiagramLayout): string[] {
  const segs = segmentsOf(layout);
  const found: string[] = [];
  for (let i = 0; i < segs.length; i++) {
    for (let j = i + 1; j < segs.length; j++) {
      const a = segs[i]!;
      const b = segs[j]!;
      if (a.src === b.src || a.horizontal !== b.horizontal) continue;
      const shared = Math.min(a.to, b.to) - Math.max(a.from, b.from);
      if (shared <= 0) continue;
      const gap = Math.abs(a.at - b.at);
      if (gap < MIN_WIRE_GAP) {
        found.push(
          `${a.src} and ${b.src} ${a.horizontal ? 'horizontal' : 'vertical'}, ${gap.toFixed(1)} apart over ${shared.toFixed(0)}`,
        );
      }
    }
  }
  return found;
}

/** A corner or an end of one signal's wire that lies on the line of another signal's wire. */
function touching(layout: DiagramLayout): string[] {
  const segs = segmentsOf(layout);
  const found: string[] = [];
  for (const edge of layout.edges) {
    for (const p of edge.points) {
      for (const s of segs) {
        if (s.src === edge.from) continue;
        const onLine = s.horizontal
          ? p.y === s.at && p.x > s.from && p.x < s.to
          : p.x === s.at && p.y > s.from && p.y < s.to;
        if (onLine) found.push(`${edge.from} at ${p.x},${p.y} on ${s.src}`);
      }
    }
  }
  return found;
}

/** Wires that cross the inside of a gate or a box. */
function throughNodes(layout: DiagramLayout): string[] {
  const rects = layout.nodes.map((n) => {
    if (n.kind === 'gate') {
      const w = GATE_WIDTH[n.gate!.kind] * GATE_SCALE;
      return { id: n.id, x1: n.x + 7, x2: n.x + w - 1, y1: n.y - 38, y2: n.y + 38 };
    }
    if (n.kind === 'output')
      return { id: n.id, x1: n.x + 18, x2: n.x + 120, y1: n.y - 12, y2: n.y + 12 };
    return { id: n.id, x1: n.x + 1, x2: n.outX - 1, y1: n.y - 19, y2: n.y + 19 };
  });
  const found: string[] = [];
  for (const s of segmentsOf(layout)) {
    for (const r of rects) {
      const [x1, x2, y1, y2] = s.horizontal
        ? [s.from, s.to, s.at, s.at]
        : [s.at, s.at, s.from, s.to];
      if (x2 > r.x1 && x1 < r.x2 && y2 > r.y1 && y1 < r.y2) found.push(`${s.src} through ${r.id}`);
    }
  }
  return found;
}

/**
 * Where a signal branches, worked out another way than the layout does: at each corner or end of
 * its wires, which of the four directions leave along a wire of that signal.
 */
function branches(layout: DiagramLayout): Set<string> {
  const segs = segmentsOf(layout);
  const points = new Map<string, { x: number; y: number; src: string }>();
  for (const edge of layout.edges) {
    for (const p of edge.points) points.set(`${edge.from}|${p.x},${p.y}`, { ...p, src: edge.from });
  }
  const covers = (s: Seg, x: number, y: number) =>
    s.horizontal ? y === s.at && x >= s.from && x <= s.to : x === s.at && y >= s.from && y <= s.to;
  const result = new Set<string>();
  for (const p of points.values()) {
    const mine = segs.filter((s) => s.src === p.src);
    const leaves = (dx: number, dy: number) => mine.some((s) => covers(s, p.x + dx, p.y + dy));
    const count = [leaves(0.5, 0), leaves(-0.5, 0), leaves(0, 0.5), leaves(0, -0.5)].filter(
      Boolean,
    ).length;
    if (count >= 3) result.add(`${p.x},${p.y}`);
  }
  return result;
}

/** The circuit of the results for every answer put on the boards, as the results drawer reads it back from the wires */
const fromBoard: { name: string; layout: DiagramLayout }[] = [];
for (const group of data.groups) {
  for (const task of group.tasks) {
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
    fromBoard.push({
      name: `${task.id} on the board`,
      layout: layoutDiagram(buildNetlist({ wires: board.wires, ics: board.ics }), (k) =>
        String.fromCharCode(65 + k),
      ),
    });
  }
}

function checks(
  all: { name: string; layout: DiagramLayout }[],
  minimum: number,
  minimumBranches: number,
) {
  it('measure every diagram', () => {
    expect(all.length).toBeGreaterThan(minimum);
  });

  it('have no two wires of different signals on one another or closer than the least gap', () => {
    const bad = all
      .map(({ name, layout }) => ({ name, found: crowded(layout) }))
      .filter((x) => x.found.length > 0);
    expect(bad).toEqual([]);
  });

  it('have no wire that ends or turns on the line of another signal', () => {
    const bad = all
      .map(({ name, layout }) => ({ name, found: touching(layout) }))
      .filter((x) => x.found.length > 0);
    expect(bad).toEqual([]);
  });

  it('have no wire through a gate or a box', () => {
    const bad = all
      .map(({ name, layout }) => ({ name, found: throughNodes(layout) }))
      .filter((x) => x.found.length > 0);
    expect(bad).toEqual([]);
  });

  it('have a dot at every place a signal branches, and at no other place', () => {
    let total = 0;
    for (const { name, layout } of all) {
      const want = branches(layout);
      const have = new Set(layout.junctions.map((p) => `${p.x},${p.y}`));
      expect([...have].sort(), name).toEqual([...want].sort());
      expect(have.size, `${name} has no dot twice`).toBe(layout.junctions.length);
      total += want.size;
    }
    // many diagrams branch: the test is about something
    expect(total).toBeGreaterThan(minimumBranches);
  });
}

describe('the diagrams of the tasks', () => checks(layouts, 100, 150));

describe('the circuit of the results for every answer, put on the boards and read back', () =>
  checks(fromBoard, 80, 100));
