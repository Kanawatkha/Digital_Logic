import { describe, expect, it } from 'vitest';
import { icFrame, pointPosition } from '../board/geometry';
import { BOARD_SIZE } from '../board/layout';
import type { PlacedIc } from '../sim/evaluate';
import {
  CLEARANCE,
  arrangeWires,
  bendCap,
  crossings,
  curveSamples,
  type ArrangeWire,
} from './arrange';
import { NO_BEND, type Bend } from './curve';

const wire = (id: string, from: string, to: string): ArrangeWire => ({ id, from, to });
const at = (id: string) => pointPosition(id)!;

const curveOf = (w: ArrangeWire, bends: Map<string, Bend>) =>
  curveSamples(at(w.from), at(w.to), bends.get(w.id) ?? NO_BEND);
const straightOf = (w: ArrangeWire) => curveSamples(at(w.from), at(w.to), NO_BEND);

/** The closest two curves come to each other, ignoring their first and last stretch. */
function nearest(p: readonly { x: number; y: number }[], q: readonly { x: number; y: number }[]) {
  let best = Infinity;
  for (let i = 2; i < p.length - 2; i++) {
    for (let j = 2; j < q.length - 2; j++) {
      best = Math.min(best, Math.hypot(p[i]!.x - q[j]!.x, p[i]!.y - q[j]!.y));
    }
  }
  return best;
}

const totalCrossings = (
  wires: readonly ArrangeWire[],
  curve: (w: ArrangeWire) => { x: number; y: number }[],
) => {
  let count = 0;
  for (let i = 0; i < wires.length; i++) {
    for (let j = i + 1; j < wires.length; j++) {
      count += crossings(curve(wires[i]!), curve(wires[j]!));
    }
  }
  return count;
};

describe('arrangeWires', () => {
  it('leaves a wire with nothing in its way straight', () => {
    const bends = arrangeWires([wire('w1', 'b0:c10:b', 'b0:c25:h')], []);
    expect(bends.get('w1')).toEqual({ x: 0, y: 0 });
  });

  it('answers with no wires, and skips a wire whose point is not on the board', () => {
    expect(arrangeWires([], []).size).toBe(0);
    const bends = arrangeWires(
      [wire('w1', 'b0:c10:b', 'nowhere'), wire('w2', 'b0:c1:a', 'b0:c9:a')],
      [],
    );
    expect(bends.has('w1')).toBe(false);
    expect(bends.has('w2')).toBe(true);
  });

  it('pulls two wires that lie on top of each other apart', () => {
    const wires = [wire('w1', 'b0:c10:a', 'b0:c30:a'), wire('w2', 'b0:c11:a', 'b0:c31:a')];
    // straight, they run on the same line
    expect(nearest(straightOf(wires[0]!), straightOf(wires[1]!))).toBeLessThan(5);
    const bends = arrangeWires(wires, []);
    const gap = nearest(curveOf(wires[0]!, bends), curveOf(wires[1]!, bends));
    expect(gap).toBeGreaterThanOrEqual(CLEARANCE - 1);
  });

  it('fans out a bundle of parallel wires', () => {
    const wires = [0, 1, 2, 3].map((k) => wire(`w${k}`, `b0:c${10 + k}:b`, `b0:c${40 + k}:b`));
    const bends = arrangeWires(wires, []);
    for (let i = 0; i < wires.length; i++) {
      for (let j = i + 1; j < wires.length; j++) {
        const gap = nearest(curveOf(wires[i]!, bends), curveOf(wires[j]!, bends));
        expect(gap, `w${i} and w${j}`).toBeGreaterThanOrEqual(CLEARANCE - 2);
      }
    }
    expect(totalCrossings(wires, (w) => curveOf(w, bends))).toBe(0);
  });

  it('keeps a wire off a chip it would cross', () => {
    const chip: PlacedIc = { id: 'u1', type: '7404', board: 0, col: 10 };
    const frame = icFrame(0, 10)!;
    // from above the chip to below it, through its middle
    const w = wire('w1', 'b0:c13:b', 'b0:c13:i');
    const inside = (curve: { x: number; y: number }[]) =>
      curve.filter(
        (p) =>
          p.x > frame.x &&
          p.x < frame.x + frame.width &&
          p.y > frame.y &&
          p.y < frame.y + frame.height,
      ).length;
    expect(inside(straightOf(w))).toBeGreaterThan(0);
    const bends = arrangeWires([w], [chip]);
    expect(inside(curveOf(w, bends))).toBe(0);
    // it goes round the chip, not through it
    expect(bends.get('w1')).not.toEqual({ x: 0, y: 0 });
  });

  it('does not bend a wire for a chip that is not in its way', () => {
    const chip: PlacedIc = { id: 'u1', type: '7404', board: 0, col: 10 };
    const bends = arrangeWires([wire('w1', 'b0:c30:b', 'b0:c40:b')], [chip]);
    expect(bends.get('w1')).toEqual({ x: 0, y: 0 });
  });

  it('never leaves more crossings than the straight wires had', () => {
    const wires = [
      wire('w1', 'b0:c10:a', 'b0:c30:j'),
      wire('w2', 'b0:c30:a', 'b0:c10:j'),
      wire('w3', 'b0:c20:a', 'b0:c20:j'),
      wire('w4', 'b0:c15:c', 'b0:c35:h'),
      wire('w5', 'b0:c12:d', 'b0:c33:g'),
      wire('w6', 'power:+5V:0', 'b0:r:top1:3'),
      wire('w7', 'power:GND:0', 'b0:r:top1:30'),
    ];
    const bends = arrangeWires(wires, []);
    expect(totalCrossings(wires, (w) => curveOf(w, bends))).toBeLessThanOrEqual(
      totalCrossings(wires, straightOf),
    );
  });

  it('gives the same answer every time, whatever order the wires come in', () => {
    const wires = [
      wire('w1', 'b0:c10:a', 'b0:c30:a'),
      wire('w2', 'b0:c11:a', 'b0:c31:a'),
      wire('w3', 'b0:c12:b', 'b0:c32:j'),
    ];
    const first = arrangeWires(wires, []);
    expect(arrangeWires(wires, [])).toEqual(first);
    expect(arrangeWires([...wires].reverse(), [])).toEqual(first);
  });

  it('keeps every wire on the board and within its bend limit', () => {
    const wires = [
      wire('w1', 'b0:c1:a', 'b0:c2:a'),
      wire('w2', 'b0:c3:a', 'b0:c4:a'),
      wire('w3', 'power:+5V:0', 'b0:c1:j'),
      wire('w4', 'b1:c58:j', 'b1:c60:j'),
    ];
    const bends = arrangeWires(wires, []);
    for (const w of wires) {
      const b = bends.get(w.id)!;
      const length = Math.hypot(at(w.to).x - at(w.from).x, at(w.to).y - at(w.from).y);
      expect(Math.hypot(b.x, b.y)).toBeLessThanOrEqual(bendCap(length) + 1);
      for (const p of curveOf(w, bends)) {
        expect(p.x).toBeGreaterThanOrEqual(0);
        expect(p.y).toBeGreaterThanOrEqual(0);
        expect(p.x).toBeLessThanOrEqual(BOARD_SIZE.width);
        expect(p.y).toBeLessThanOrEqual(BOARD_SIZE.height);
      }
    }
  });

  it('is fast enough for a full breadboard', () => {
    const wires: ArrangeWire[] = [];
    for (let k = 0; k < 40; k++) {
      const col = 2 + (k % 28);
      wires.push(
        wire(`w${k}`, `b0:c${col}:${'abcd'[k % 4]}`, `b${k % 2}:c${60 - col}:${'ghij'[k % 4]}`),
      );
    }
    const started = performance.now();
    const bends = arrangeWires(wires, []);
    expect(bends.size).toBe(40);
    expect(performance.now() - started).toBeLessThan(4000);
  });
});
