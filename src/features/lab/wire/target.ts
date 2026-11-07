import type { Position } from '../board/geometry';
import { pointIndex, type PointHit, type PointIndex } from '../board/hitTest';
import { PITCH } from '../board/layout';
import type { Occupant, WireEnd } from '../state/circuit';

/** What a press on the board lands on, which decides whether it draws, edits or pans. */
export type PressTarget =
  | { kind: 'handle'; wireId: string }
  | { kind: 'end'; wireId: string; end: WireEnd; point: string }
  | { kind: 'body'; wireId: string }
  | { kind: 'ic'; icId: string }
  | { kind: 'switch'; index: number }
  /** `overWire` is a wire that lies over the point: a tap selects it, a drag draws from the point */
  | { kind: 'new'; point: PointHit; overWire?: string };

export type PointerKind = 'mouse' | 'touch' | 'pen';

/** Radius around a point where a press picks it, in screen px. */
const PICK_PX: Record<PointerKind, number> = { mouse: 12, touch: 22, pen: 16 };
/**
 * A press this close to a free point (screen px) starts a wire from it even when a wire lies over
 * the point; farther away it grabs the wire instead.
 */
const HOLE_FIRST_PX: Record<PointerKind, number> = { mouse: 7, touch: 14, pen: 10 };
/** Radius around the pointer where a dragged wire end snaps to a free point, in screen px. */
const SNAP_PX: Record<PointerKind, number> = { mouse: 26, touch: 44, pen: 32 };
/**
 * Holes must be at least this far apart on screen before a press may start a new wire. Below it
 * the board is too small to aim at, so the press pans instead (zoom in to wire).
 */
const MIN_PITCH_PX: Record<PointerKind, number> = { mouse: 6, touch: 10, pen: 8 };

export const pointerKind = (type: string): PointerKind =>
  type === 'touch' || type === 'pen' ? type : 'mouse';

/** Whether the board is zoomed in enough to start a wire with this kind of pointer. */
export const canStartWire = (scale: number, kind: PointerKind): boolean =>
  PITCH * scale >= MIN_PITCH_PX[kind];

export type PressContext = {
  /** The pointer in board px */
  board: Position;
  scale: number;
  kind: PointerKind;
  occupancy: ReadonlyMap<string, Occupant>;
  /** The element the event was dispatched on, to find wire bodies and handles */
  element: Element | null;
  index?: PointIndex;
};

/**
 * What a press lands on, in priority order: the handle of the selected wire, a wire end (a plug in
 * a hole, so it can be moved), a free point right under the pointer (a new wire; a tap there still
 * selects a wire that lies over it), a wire body, a chip (its body or a leg), a logic switch, then a
 * free point a little farther away. Null means empty space, which pans the board.
 */
export function resolvePress(context: PressContext): PressTarget | null {
  const { board, scale, kind, occupancy, element, index = pointIndex() } = context;

  const handle = element?.closest('[data-lab-handle]');
  if (handle) return { kind: 'handle', wireId: handle.getAttribute('data-lab-handle') ?? '' };

  const near = index.nearest(board.x, board.y, PICK_PX[kind] / scale);
  const occupant = near ? occupancy.get(near.id) : undefined;
  if (near && occupant?.kind === 'wire') {
    return { kind: 'end', wireId: occupant.wireId, end: occupant.end, point: near.id };
  }
  const free = near && !occupant ? near : null;

  const wireId = element?.closest('[data-wire-id]')?.getAttribute('data-wire-id');
  if (wireId) {
    if (free && canStartWire(scale, kind) && free.distance <= HOLE_FIRST_PX[kind] / scale) {
      return { kind: 'new', point: free, overWire: wireId };
    }
    return { kind: 'body', wireId };
  }

  const icId =
    element?.closest('[data-ic-id]')?.getAttribute('data-ic-id') ??
    (occupant?.kind === 'ic' ? occupant.icId : undefined);
  if (icId) return { kind: 'ic', icId };

  const switchIndex = element?.closest('[data-lab-switch]')?.getAttribute('data-lab-switch');
  if (switchIndex !== null && switchIndex !== undefined && Number.isInteger(Number(switchIndex))) {
    return { kind: 'switch', index: Number(switchIndex) };
  }

  if (free && canStartWire(scale, kind)) return { kind: 'new', point: free };
  return null;
}

/** The free point a dragged wire end would land on, or null when none is near enough. */
export function findSnap(
  board: Position,
  scale: number,
  kind: PointerKind,
  taken: (id: string) => boolean,
  index: PointIndex = pointIndex(),
): PointHit | null {
  return index.nearest(board.x, board.y, SNAP_PX[kind] / scale, (id) => !taken(id));
}
