import { describe, expect, it } from 'vitest';
import {
  NO_BEND,
  controlPoint,
  handlePoint,
  isStraight,
  middle,
  sameBend,
  wirePath,
} from './curve';

const a = { x: 10, y: 20 };
const b = { x: 110, y: 60 };

/** A point of the quadratic curve from a to b with the given control point, at t in 0..1. */
const along = (control: { x: number; y: number }, t: number) => ({
  x: (1 - t) ** 2 * a.x + 2 * (1 - t) * t * control.x + t ** 2 * b.x,
  y: (1 - t) ** 2 * a.y + 2 * (1 - t) * t * control.y + t ** 2 * b.y,
});

describe('wire curve', () => {
  it('finds the middle between the ends', () => {
    expect(middle(a, b)).toEqual({ x: 60, y: 40 });
  });

  it('passes through the handle at the middle of the curve', () => {
    for (const bend of [
      { x: 0, y: 0 },
      { x: 30, y: -50 },
      { x: -12, y: 8 },
    ]) {
      const at = along(controlPoint(a, b, bend), 0.5);
      const handle = handlePoint(a, b, bend);
      expect(at.x).toBeCloseTo(handle.x);
      expect(at.y).toBeCloseTo(handle.y);
    }
  });

  it('keeps the same pull when an end moves', () => {
    const bend = { x: 5, y: -20 };
    const moved = handlePoint(a, { x: b.x + 40, y: b.y }, bend);
    const still = handlePoint(a, b, bend);
    expect(moved.x - still.x).toBeCloseTo(20);
    expect(moved.y - still.y).toBeCloseTo(0);
  });

  it('draws a straight line without a bend and a curve with one', () => {
    expect(wirePath(a, b, NO_BEND)).toBe('M10 20L110 60');
    expect(wirePath(a, b, { x: 0, y: -10 })).toBe('M10 20Q60 20 110 60');
  });

  it('tells a straight wire from a bent one', () => {
    expect(isStraight(NO_BEND)).toBe(true);
    expect(isStraight({ x: 0, y: 0.1 })).toBe(false);
    expect(sameBend({ x: 1, y: 2 }, { x: 1, y: 2 })).toBe(true);
    expect(sameBend({ x: 1, y: 2 }, { x: 1, y: 3 })).toBe(false);
  });
});
