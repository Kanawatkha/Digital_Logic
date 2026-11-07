import { describe, expect, it } from 'vitest';
import { LENS_SIZE, lensCenter, lensScale } from './lens';

const canvas = { width: 400, height: 700 };
const r = LENS_SIZE / 2;

describe('magnifier lens', () => {
  it('magnifies more than the board is, and never less than twice', () => {
    expect(lensScale(0.2)).toBe(2);
    expect(lensScale(1)).toBeCloseTo(2.6);
    expect(lensScale(2)).toBeCloseTo(5.2);
    expect(lensScale(10)).toBe(8);
  });

  it('sits above the finger, clear of it', () => {
    const center = lensCenter({ x: 200, y: 400 }, canvas);
    expect(center.x).toBe(200);
    expect(center.y + r).toBeLessThan(400);
  });

  it('goes below the finger when there is no room above', () => {
    const center = lensCenter({ x: 200, y: 60 }, canvas);
    expect(center.y - r).toBeGreaterThan(60);
  });

  it('stays inside the canvas at the edges', () => {
    const left = lensCenter({ x: 2, y: 400 }, canvas);
    const right = lensCenter({ x: 399, y: 400 }, canvas);
    expect(left.x - r).toBeGreaterThanOrEqual(0);
    expect(right.x + r).toBeLessThanOrEqual(canvas.width);
    const bottom = lensCenter({ x: 200, y: 20 }, { width: 400, height: 200 });
    expect(bottom.y + r).toBeLessThanOrEqual(200);
  });

  it('does not break on a canvas smaller than the lens', () => {
    const center = lensCenter({ x: 50, y: 50 }, { width: 80, height: 80 });
    expect(Number.isFinite(center.x)).toBe(true);
    expect(Number.isFinite(center.y)).toBe(true);
  });
});
