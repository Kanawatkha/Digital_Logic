import { describe, expect, it } from 'vitest';
import {
  MAX_SCALE,
  MIN_SCALE,
  actualSizeView,
  fitView,
  panBy,
  pinchView,
  wheelFactor,
  zoomAt,
  type View,
} from './viewMath';

/** Screen point of a board point under a view. */
const toScreen = (view: View, bx: number, by: number) => ({
  x: view.x + bx * view.scale,
  y: view.y + by * view.scale,
});

describe('view math', () => {
  it('keeps the board point under the pointer fixed while zooming', () => {
    const view: View = { x: 40, y: -20, scale: 0.7 };
    const px = 300;
    const py = 180;
    const board = { x: (px - view.x) / view.scale, y: (py - view.y) / view.scale };
    const zoomed = zoomAt(view, 1.8, px, py);
    const screen = toScreen(zoomed, board.x, board.y);
    expect(screen.x).toBeCloseTo(px);
    expect(screen.y).toBeCloseTo(py);
    expect(zoomed.scale).toBeCloseTo(0.7 * 1.8);
  });

  it('never zooms past the limits, and then does not drift', () => {
    const zoomedIn = zoomAt({ x: 0, y: 0, scale: MAX_SCALE }, 5, 100, 100);
    expect(zoomedIn).toEqual({ x: 0, y: 0, scale: MAX_SCALE });
    const zoomedOut = zoomAt({ x: 10, y: 10, scale: MIN_SCALE }, 0.1, 50, 50);
    expect(zoomedOut.scale).toBe(MIN_SCALE);
    expect(zoomedOut.x).toBeCloseTo(10);
  });

  it('pans without changing the scale, with no limit', () => {
    expect(panBy({ x: 5, y: 5, scale: 2 }, -9000, 12000)).toEqual({ x: -8995, y: 12005, scale: 2 });
  });

  it('fits the content inside the canvas, centered', () => {
    const view = fitView({ width: 1000, height: 500 }, { width: 1700, height: 1332 }, 0);
    expect(view.scale).toBeCloseTo(500 / 1332);
    expect(view.y).toBeCloseTo(0);
    expect(view.x).toBeCloseTo((1000 - 1700 * view.scale) / 2);
    const margin = fitView({ width: 1000, height: 500 }, { width: 1700, height: 1332 }, 0.1);
    expect(margin.scale).toBeLessThan(view.scale);
  });

  it('shows one board pixel per screen pixel at actual size', () => {
    const view = actualSizeView({ width: 2000, height: 1600 }, { width: 1700, height: 1332 });
    expect(view.scale).toBe(1);
    expect(view.x).toBe(150);
    expect(view.y).toBe(134);
  });

  it('moves and scales with two fingers', () => {
    const start: View = { x: 0, y: 0, scale: 1 };
    const fingersAt = (a: number, b: number) =>
      [
        { x: a, y: 100 },
        { x: b, y: 100 },
      ] as const;
    // fingers spread from 100 apart to 200 apart around the same middle: zoom 2 about the middle
    const spread = pinchView(start, fingersAt(150, 250), fingersAt(100, 300));
    expect(spread.scale).toBeCloseTo(2);
    expect(toScreen(spread, 200, 100).x).toBeCloseTo(200);
    // both fingers slide 50 right without changing the distance: a pan
    const slide = pinchView(start, fingersAt(150, 250), fingersAt(200, 300));
    expect(slide).toEqual({ x: 50, y: 0, scale: 1 });
  });

  it('turns wheel units into zoom, more for a trackpad pinch', () => {
    expect(wheelFactor(0, 0, false)).toBe(1);
    expect(wheelFactor(-100, 0, false)).toBeGreaterThan(1);
    expect(wheelFactor(100, 0, false)).toBeLessThan(1);
    expect(wheelFactor(-1, 0, true)).toBeGreaterThan(wheelFactor(-1, 0, false));
    expect(wheelFactor(-3, 1, false)).toBeCloseTo(wheelFactor(-48, 0, false));
  });
});
