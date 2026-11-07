import { describe, expect, it } from 'vitest';
import { pointPosition } from '../board/geometry';
import { allPoints, pointId } from '../sim/points';
import { nextPoint } from './useKeyboardWiring';

const RIGHT = { x: 1, y: 0 };
const LEFT = { x: -1, y: 0 };
const DOWN = { x: 0, y: 1 };
const UP = { x: 0, y: -1 };

describe('keyboard cursor: next point', () => {
  it('steps along a row and a column of holes', () => {
    expect(nextPoint('b0:c10:b', RIGHT)).toBe('b0:c11:b');
    expect(nextPoint('b0:c10:b', LEFT)).toBe('b0:c9:b');
    expect(nextPoint('b0:c10:b', DOWN)).toBe('b0:c10:c');
    expect(nextPoint('b0:c10:b', UP)).toBe('b0:c10:a');
  });

  it('crosses the center channel from row e to row f and back', () => {
    expect(nextPoint('b0:c10:e', DOWN)).toBe('b0:c10:f');
    expect(nextPoint('b0:c10:f', UP)).toBe('b0:c10:e');
  });

  it('reaches the rail above a breadboard, and the other breadboard below', () => {
    expect(nextPoint('b0:c10:a', UP)).toMatch(/^b0:r:top2:/);
    expect(nextPoint('b0:c10:j', DOWN)).toMatch(/^b0:r:bot1:/);
  });

  it('jumps farther with Shift', () => {
    const short = pointPosition(nextPoint('b0:c10:b', RIGHT)!)!;
    const long = pointPosition(nextPoint('b0:c10:b', RIGHT, true)!)!;
    const start = pointPosition('b0:c10:b')!;
    expect(long.x - start.x).toBeGreaterThan(short.x - start.x);
  });

  it('leaves a power socket for the next socket to its right', () => {
    const next = nextPoint('power:+5V:2', RIGHT, true);
    expect(next).not.toBeNull();
    expect(next).not.toBe('power:+5V:2');
  });

  it('always moves toward the direction asked, from every point of the board', () => {
    for (const point of allPoints()) {
      const id = pointId(point);
      const at = pointPosition(point)!;
      for (const direction of [RIGHT, DOWN]) {
        const next = nextPoint(id, direction);
        if (!next) continue;
        const to = pointPosition(next)!;
        expect(
          (to.x - at.x) * direction.x + (to.y - at.y) * direction.y,
          `${id} -> ${next}`,
        ).toBeGreaterThan(0);
      }
    }
  });

  it('gives up at the edge of the board instead of looping', () => {
    // the point farthest to the right has nothing beyond it
    const rightmost = allPoints()
      .map((point) => ({ id: pointId(point), x: pointPosition(point)!.x }))
      .reduce((best, item) => (item.x > best.x ? item : best));
    expect(nextPoint(rightmost.id, RIGHT, true)).toBeNull();
    expect(nextPoint(rightmost.id, RIGHT)).toBeNull();
  });

  it('returns null for an id that is not a point', () => {
    expect(nextPoint('nowhere', RIGHT)).toBeNull();
  });
});
