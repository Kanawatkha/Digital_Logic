import type { Position } from '../board/geometry';

/**
 * How far the middle of a wire is pulled away from the straight line between its ends, in board
 * px. A wire is a quadratic curve and the curve passes through the point the handle sits on, so the
 * handle is `middle + bend`. Storing the pull (not the point) keeps the shape when an end moves.
 */
export type Bend = Position;

export const NO_BEND: Bend = { x: 0, y: 0 };

export const isStraight = (bend: Bend): boolean => bend.x === 0 && bend.y === 0;

export const sameBend = (a: Bend, b: Bend): boolean => a.x === b.x && a.y === b.y;

export function middle(a: Position, b: Position): Position {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

/** Where the handle of a wire sits: the point the curve passes through at its middle. */
export function handlePoint(a: Position, b: Position, bend: Bend): Position {
  const mid = middle(a, b);
  return { x: mid.x + bend.x, y: mid.y + bend.y };
}

/** The control point of the quadratic curve that passes through `handlePoint`. */
export function controlPoint(a: Position, b: Position, bend: Bend): Position {
  const mid = middle(a, b);
  return { x: mid.x + 2 * bend.x, y: mid.y + 2 * bend.y };
}

const n = (value: number) => Number(value.toFixed(2));

/** SVG path of a wire from `a` to `b`, a straight line when it is not bent. */
export function wirePath(a: Position, b: Position, bend: Bend): string {
  if (isStraight(bend)) return `M${n(a.x)} ${n(a.y)}L${n(b.x)} ${n(b.y)}`;
  const c = controlPoint(a, b, bend);
  return `M${n(a.x)} ${n(a.y)}Q${n(c.x)} ${n(c.y)} ${n(b.x)} ${n(b.y)}`;
}
