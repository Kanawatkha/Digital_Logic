import { describe, expect, it } from 'vitest';
import { icFrame, pointPosition } from '../board/geometry';
import { crossings, curveSamples } from './arrange';
import { SIGNAL_COLORS, recolorWires, type PaintWire } from './recolor';

const wire = (id: string, from: string, to: string): PaintWire => ({
  id,
  from,
  to,
  bend: { x: 0, y: 0 },
});

describe('recolorWires', () => {
  it('makes the wires on the GND net black and on the +5V net red, wherever they are', () => {
    const wires = [
      wire('w1', 'power:+5V:0', 'b0:r:top1:3'),
      wire('w2', 'b0:r:top1:5', 'b0:c11:b'),
      wire('w3', 'power:GND:0', 'b0:r:top2:3'),
      wire('w4', 'b0:r:top2:8', 'b0:c17:i'),
    ];
    const colors = recolorWires(wires);
    expect(colors.get('w1')).toBe('red');
    // a wire from the rail to a chip, on the +5V net, is red too
    expect(colors.get('w2')).toBe('red');
    expect(colors.get('w3')).toBe('black');
    expect(colors.get('w4')).toBe('black');
  });

  it('follows the net through the holes of a column, not just the wires', () => {
    const wires = [
      wire('w1', 'power:GND:0', 'b0:c20:b'),
      // c20 row d is in the same column half: the same net as row b
      wire('w2', 'b0:c20:d', 'b0:c40:g'),
    ];
    const colors = recolorWires(wires);
    expect(colors.get('w1')).toBe('black');
    expect(colors.get('w2')).toBe('black');
  });

  it('gives every other net a color from the signal colors, never red or black', () => {
    const wires = [
      wire('w1', 'sw0:0', 'b0:c11:i'),
      wire('w2', 'sw1:0', 'b0:c12:i'),
      wire('w3', 'b0:c13:h', 'led1:0'),
    ];
    const colors = recolorWires(wires);
    for (const id of ['w1', 'w2', 'w3']) {
      expect(SIGNAL_COLORS).toContain(colors.get(id));
    }
  });

  it('gives the wires of one net one color', () => {
    const wires = [
      wire('w1', 'sw0:0', 'b0:c11:i'),
      // same net: row g is in the column half of row i
      wire('w2', 'b0:c11:g', 'b0:c30:j'),
      wire('w3', 'sw1:0', 'b0:c12:i'),
    ];
    const colors = recolorWires(wires);
    expect(colors.get('w1')).toBe(colors.get('w2'));
  });

  it('gives nets whose wires cross different colors', () => {
    const wires = [
      wire('w1', 'b0:c10:a', 'b0:c30:j'),
      wire('w2', 'b0:c27:a', 'b0:c8:j'),
      wire('w3', 'b0:c20:a', 'b0:c20:j'),
    ];
    // they do cross
    const curve = (w: PaintWire) =>
      curveSamples(pointPosition(w.from)!, pointPosition(w.to)!, w.bend);
    expect(crossings(curve(wires[0]!), curve(wires[1]!))).toBeGreaterThan(0);
    const colors = recolorWires(wires);
    const set = new Set(wires.map((w) => colors.get(w.id)));
    expect(set.size).toBe(3);
  });

  it('gives nets that run close together different colors, and spreads the colors when they are free', () => {
    const wires = [0, 1, 2, 3].map((k) => wire(`w${k}`, `b0:c${10 + k}:b`, `b0:c${40 + k}:b`));
    const colors = recolorWires(wires);
    expect(new Set(wires.map((w) => colors.get(w.id))).size).toBe(4);
    // nets far apart with no conflict take the colors in turn, so they differ as long as there are some left
    const apart = [
      wire('a', 'b0:c2:a', 'b0:c4:a'),
      wire('b', 'b1:c50:j', 'b1:c52:j'),
      wire('c', 'b1:c10:j', 'b1:c12:j'),
    ];
    const far = recolorWires(apart);
    expect(new Set(apart.map((w) => far.get(w.id))).size).toBe(3);
  });

  it('reuses a color only when there are more crowded nets than colors', () => {
    const wires = Array.from({ length: 8 }, (_, k) =>
      wire(`w${k}`, `b0:c${10 + k}:b`, `b0:c${40 + k}:b`),
    );
    const colors = recolorWires(wires);
    const used = wires.map((w) => colors.get(w.id)!);
    for (const color of used) expect(SIGNAL_COLORS).toContain(color);
    expect(new Set(used).size).toBe(SIGNAL_COLORS.length);
  });

  it('leaves a wire on a short alone, and paints the others', () => {
    const wires = [
      wire('w1', 'power:+5V:0', 'b0:r:top1:3'),
      wire('w2', 'power:GND:0', 'b0:r:top1:20'),
      wire('w3', 'sw0:0', 'b0:c11:i'),
    ];
    const colors = recolorWires(wires);
    expect(colors.has('w1')).toBe(false);
    expect(colors.has('w2')).toBe(false);
    expect(SIGNAL_COLORS).toContain(colors.get('w3'));
  });

  it('treats a supply the simulator does not drive as a signal, and skips points that are not on the board', () => {
    const colors = recolorWires([
      wire('w1', 'power:+12V:0', 'b0:c11:b'),
      wire('w2', 'nowhere', 'b0:c1:a'),
    ]);
    expect(SIGNAL_COLORS).toContain(colors.get('w1'));
    expect(colors.has('w2')).toBe(false);
  });

  it('is the same every time, and empty without wires', () => {
    const wires = [
      wire('w1', 'power:+5V:0', 'b0:c11:b'),
      wire('w2', 'sw0:0', 'b0:c11:i'),
      wire('w3', 'sw1:0', 'b0:c12:i'),
      wire('w4', 'b0:c13:h', 'led1:0'),
    ];
    expect(recolorWires(wires)).toEqual(recolorWires(wires));
    expect(recolorWires([]).size).toBe(0);
    // the frame of a chip is not needed here, only the net
    expect(icFrame(0, 11)).not.toBeNull();
  });
});
