import { allPoints, pointId } from '../sim/points';
import { pointPosition } from './geometry';
import { PITCH } from './layout';

export type PointHit = { id: string; x: number; y: number; distance: number };

type Entry = { id: string; x: number; y: number };

export type PointIndex = {
  /**
   * The nearest point to (x, y) within `maxDistance` board px, or null. `accept` skips points
   * that are not wanted (for example a hole that already holds a wire).
   */
  nearest: (
    x: number,
    y: number,
    maxDistance: number,
    accept?: (id: string) => boolean,
  ) => PointHit | null;
};

/** Cell size of the lookup grid: two hole pitches, so a hole search touches a few cells. */
const CELL = PITCH * 2;

const cellOf = (value: number) => Math.floor(value / CELL);

/** The farthest a search looks (board px): a bit more than the diagonal of the board. */
const MAX_REACH = 2500;

/**
 * Finds points by position without one DOM element per hole: every point of the board is put in a
 * grid once, and a search only looks at the cells around the pointer.
 */
export function createPointIndex(): PointIndex {
  const cells = new Map<string, Entry[]>();
  for (const point of allPoints()) {
    const position = pointPosition(point);
    if (!position) continue;
    const key = `${cellOf(position.x)},${cellOf(position.y)}`;
    const entry = { id: pointId(point), x: position.x, y: position.y };
    const list = cells.get(key);
    if (list) list.push(entry);
    else cells.set(key, [entry]);
  }

  return {
    nearest(x, y, requested, accept) {
      // an unlimited search would walk an unlimited number of cells
      const maxDistance = Math.min(requested, MAX_REACH);
      let best: PointHit | null = null;
      for (let cx = cellOf(x - maxDistance); cx <= cellOf(x + maxDistance); cx++) {
        for (let cy = cellOf(y - maxDistance); cy <= cellOf(y + maxDistance); cy++) {
          for (const entry of cells.get(`${cx},${cy}`) ?? []) {
            const distance = Math.hypot(entry.x - x, entry.y - y);
            if (distance > maxDistance || (best && distance >= best.distance)) continue;
            if (accept && !accept(entry.id)) continue;
            best = { id: entry.id, x: entry.x, y: entry.y, distance };
          }
        }
      }
      return best;
    },
  };
}

let shared: PointIndex | undefined;

/** The one index of the board, built the first time it is needed. */
export function pointIndex(): PointIndex {
  shared ??= createPointIndex();
  return shared;
}
