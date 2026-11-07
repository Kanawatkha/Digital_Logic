import type { Position } from '../board/geometry';

/** Id of the group that holds the whole scene; the lens draws a second copy of it with `<use>`. */
export const SCENE_ID = 'lab-scene';

/** Diameter of the lens, in screen px. */
export const LENS_SIZE = 132;
/** Free space between the lens and the finger, so the finger does not cover it. */
const LENS_GAP = 40;
const LENS_EDGE = 8;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/** How much the lens magnifies the board: more than the board is, never less than 2. */
export function lensScale(scale: number): number {
  return clamp(scale * 2.6, 2, 8);
}

/**
 * Where the lens sits for a finger at `finger` (px in the canvas): above the finger, kept inside
 * the canvas, and below the finger when there is no room above.
 */
export function lensCenter(finger: Position, canvas: { width: number; height: number }): Position {
  const r = LENS_SIZE / 2;
  const above = finger.y - r - LENS_GAP;
  const y = above >= r + LENS_EDGE ? above : finger.y + r + LENS_GAP;
  return {
    x: clamp(finger.x, r + LENS_EDGE, Math.max(r + LENS_EDGE, canvas.width - r - LENS_EDGE)),
    y: clamp(y, r + LENS_EDGE, Math.max(r + LENS_EDGE, canvas.height - r - LENS_EDGE)),
  };
}
