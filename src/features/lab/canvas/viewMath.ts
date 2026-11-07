/**
 * The view of the board: board point (bx, by) is drawn at screen point
 * (x + bx * scale, y + by * scale), in pixels inside the canvas.
 */
export type View = { x: number; y: number; scale: number };

export type Point = { x: number; y: number };
export type Size = { width: number; height: number };

export const MIN_SCALE = 0.08;
export const MAX_SCALE = 14;

export const clampScale = (scale: number): number =>
  Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));

/** Zooms by `factor` and keeps the board point under the screen point (px, py) where it is. */
export function zoomAt(view: View, factor: number, px: number, py: number): View {
  const scale = clampScale(view.scale * factor);
  const ratio = scale / view.scale;
  return { scale, x: px - (px - view.x) * ratio, y: py - (py - view.y) * ratio };
}

/** Moves the board by (dx, dy) screen pixels. */
export function panBy(view: View, dx: number, dy: number): View {
  return { ...view, x: view.x + dx, y: view.y + dy };
}

/** The view that shows the whole content, centered, with a margin (a share of the canvas). */
export function fitView(canvas: Size, content: Size, margin = 0.03): View {
  const scale = clampScale(
    Math.min(
      (canvas.width * (1 - 2 * margin)) / content.width,
      (canvas.height * (1 - 2 * margin)) / content.height,
    ),
  );
  return {
    scale,
    x: (canvas.width - content.width * scale) / 2,
    y: (canvas.height - content.height * scale) / 2,
  };
}

/** One board pixel on one screen pixel, centered in the canvas. */
export function actualSizeView(canvas: Size, content: Size): View {
  return {
    scale: 1,
    x: (canvas.width - content.width) / 2,
    y: (canvas.height - content.height) / 2,
  };
}

const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);
const middle = (a: Point, b: Point): Point => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

/**
 * Two fingers: the board point that was between them stays between them, and the scale follows
 * the distance between them.
 */
export function pinchView(
  start: View,
  startFingers: readonly [Point, Point],
  nowFingers: readonly [Point, Point],
): View {
  const startDistance = distance(startFingers[0], startFingers[1]);
  const scale = clampScale(
    startDistance > 0
      ? (start.scale * distance(nowFingers[0], nowFingers[1])) / startDistance
      : start.scale,
  );
  const from = middle(startFingers[0], startFingers[1]);
  const to = middle(nowFingers[0], nowFingers[1]);
  const board = { x: (from.x - start.x) / start.scale, y: (from.y - start.y) / start.scale };
  return { scale, x: to.x - board.x * scale, y: to.y - board.y * scale };
}

/** Zoom factor of one wheel event. Ctrl (a trackpad pinch) is much more sensitive per unit. */
export function wheelFactor(deltaY: number, deltaMode: number, ctrl: boolean): number {
  const pixels = deltaMode === 1 ? deltaY * 16 : deltaMode === 2 ? deltaY * 400 : deltaY;
  return Math.exp(-pixels * (ctrl ? 0.01 : 0.0016));
}
