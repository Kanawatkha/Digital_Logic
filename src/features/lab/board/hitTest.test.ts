import { describe, expect, it } from 'vitest';
import { allPoints, pointId } from '../sim/points';
import { pointPosition } from './geometry';
import { createPointIndex } from './hitTest';
import { PITCH } from './layout';

describe('point index', () => {
  const index = createPointIndex();

  it('finds every point of the board at its own position', () => {
    for (const point of allPoints()) {
      const id = pointId(point);
      const at = pointPosition(point)!;
      expect(index.nearest(at.x, at.y, 1)?.id, id).toBe(id);
    }
  });

  it('picks the nearest hole and reports how far it is', () => {
    const hole = pointPosition('b0:c10:b')!;
    const hit = index.nearest(hole.x + 3, hole.y - 2, PITCH);
    expect(hit?.id).toBe('b0:c10:b');
    expect(hit?.distance).toBeCloseTo(Math.hypot(3, 2));
    // closer to column 11 than to column 10
    expect(index.nearest(hole.x + PITCH * 0.6, hole.y, PITCH)?.id).toBe('b0:c11:b');
  });

  it('returns null beyond the radius', () => {
    const hole = pointPosition('b0:c10:b')!;
    // halfway between two holes of the same row, with a radius that reaches neither
    expect(index.nearest(hole.x + PITCH / 2, hole.y, PITCH / 2 - 1)).toBeNull();
    expect(index.nearest(-500, -500, 50)).toBeNull();
  });

  it('skips points that are not accepted and takes the next nearest', () => {
    const hole = pointPosition('b0:c10:b')!;
    const hit = index.nearest(hole.x, hole.y, PITCH * 1.2, (id) => id !== 'b0:c10:b');
    expect(hit).not.toBeNull();
    expect(hit?.id).not.toBe('b0:c10:b');
    expect(hit?.distance).toBeCloseTo(PITCH, 1);
  });

  it('reaches rail holes, power sockets, switch sockets and monitor sockets', () => {
    for (const id of ['b1:r:top2:17', 'power:+5V:3', 'power:GND:0', 'sw3:5', 'led9:1']) {
      const at = pointPosition(id)!;
      expect(index.nearest(at.x + 1, at.y + 1, 6)?.id, id).toBe(id);
    }
  });

  it('finds the nearest point anywhere when the radius is unlimited, and does not hang', () => {
    const hit = index.nearest(-300, -300, Infinity);
    expect(hit).not.toBeNull();
    expect(hit?.distance).toBeGreaterThan(0);
  });
});
