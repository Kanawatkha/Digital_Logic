import { useCallback, useEffect, useRef, useState, type Dispatch, type RefObject } from 'react';
import { icFrame, pointPosition, snapIc, type Position } from '../board/geometry';
import type { WireColor } from '../board/palette';
import type { IcType } from '../sim/ics';
import {
  canPlace,
  occupancy,
  type CircuitAction,
  type CircuitState,
  type WireEnd,
} from '../state/circuit';
import type { Bend } from '../wire/curve';
import {
  findSnap,
  pointerKind,
  resolvePress,
  type PointerKind,
  type PressTarget,
} from '../wire/target';

/** A press that moves less than this (px) is a tap, not a drag. */
const TAP_SLOP = 6;

/** Where a dragged chip would land: a breadboard column, and whether the chip fits there. */
export type IcDrop = { board: number; col: number } | null;

/** What is drawn on top of the saved parts while a drag is in progress. */
export type Preview =
  | { kind: 'draft'; from: string; end: Position; snap: string | null; snapAt: Position | null }
  | {
      kind: 'end';
      wireId: string;
      end: WireEnd;
      position: Position;
      snap: string | null;
      snapAt: Position | null;
    }
  | { kind: 'bend'; wireId: string; bend: Bend }
  | {
      kind: 'ic';
      icType: IcType;
      /** The chip being moved, or null for one taken from the tray */
      icId: string | null;
      /** Where the middle of the chip is while it is not snapped */
      at: Position;
      snap: IcDrop;
      /** The chip fits at `snap` */
      valid: boolean;
    };

/** What the mouse is over: a free point (a wire can start) or something to edit. */
export type Hover = { mode: 'new' | 'edit'; at: Position | null; key: string };

type Gesture = {
  pointerId: number;
  kind: PointerKind;
  /** Where the press started, in client px */
  start: { x: number; y: number };
  startBoard: Position;
  startBend: Bend;
  /** From the pointer to the middle of the chip being moved, in board px */
  grab: Position;
  moved: boolean;
  target: PressTarget | { kind: 'tray'; icType: IcType };
};

type Options = {
  containerRef: RefObject<HTMLElement | null>;
  toBoard: (clientX: number, clientY: number) => Position;
  getScale: () => number;
  /** Hands a press that turned out to be a drag over to the viewport, to pan */
  adoptPointer: (pointerId: number) => void;
  state: CircuitState;
  dispatch: Dispatch<CircuitAction>;
  /** The color of the next wire */
  color: WireColor;
  /** A tap on a free point asks for its net to be shown (its id), any other press takes the question back (null) */
  onProbe?: (pointId: string | null) => void;
};

type TrayPointer = Pick<PointerEvent, 'pointerId' | 'pointerType' | 'clientX' | 'clientY'>;

/** Where a finger or pen is on screen while it drags something, for the magnifier. */
export type Finger = {
  /** The finger in px inside the canvas */
  at: Position;
  canvas: { width: number; height: number };
  /** The board point under the finger, and the scale of the board */
  board: Position;
  scale: number;
};

const round = (value: number) => Math.round(value * 10) / 10;

/**
 * Working on the board with a pointer:
 *
 * - press a free hole or socket and drag to another one: a new wire
 * - press a wire end (the plug in a hole) and drag to another point: move that end
 * - press a wire and drag, or drag its handle: bend it
 * - press a chip and drag: move it to another place on a breadboard, or off the boards to remove it
 * - drag a chip out of the tray onto a breadboard (`startTrayDrag`)
 * - tap a logic switch to flip it; drag from it to pan
 * - tap a wire or a chip to select it, tap empty space to unselect
 *
 * A press on empty space (or with the right or middle button) is not claimed, so it pans the
 * board. `claims` tells the viewport which presses are ours.
 */
export function useWireTool({
  containerRef,
  toBoard,
  getScale,
  adoptPointer,
  state,
  dispatch,
  color,
  onProbe,
}: Options) {
  const [preview, setPreview] = useState<Preview | null>(null);
  const [hover, setHover] = useState<Hover | null>(null);
  const [finger, setFinger] = useState<Finger | null>(null);
  const gesture = useRef<Gesture | null>(null);
  const latest = useRef({
    state,
    dispatch,
    color,
    onProbe,
    taken: occupancy(state.wires, state.ics),
  });
  const trayStart = useRef<
    (icType: IcType, event: TrayPointer, onEnd: (moved: boolean) => void) => void
  >(() => {});

  useEffect(() => {
    latest.current = {
      state,
      dispatch,
      color,
      onProbe,
      taken: occupancy(state.wires, state.ics),
    };
  }, [state, dispatch, color, onProbe]);

  const resolve = useCallback(
    (event: PointerEvent): PressTarget | null =>
      resolvePress({
        board: toBoard(event.clientX, event.clientY),
        scale: getScale(),
        kind: pointerKind(event.pointerType),
        occupancy: latest.current.taken,
        element: event.target instanceof Element ? event.target : null,
      }),
    [toBoard, getScale],
  );

  const cancel = useCallback(() => {
    gesture.current = null;
    setPreview(null);
    setFinger(null);
  }, []);

  /** Whether a press belongs to the wire tool. A second finger ends the gesture (it is a pinch). */
  const claims = useCallback(
    (event: PointerEvent): boolean => {
      const active = gesture.current;
      if (active) {
        if (event.pointerType === 'mouse' || event.pointerId === active.pointerId) return true;
        cancel();
        return false;
      }
      if (event.pointerType === 'mouse' && event.button !== 0) return false;
      return resolve(event) !== null;
    },
    [cancel, resolve],
  );

  /** Starts dragging a chip out of the tray. `onEnd` says whether the pointer moved (a drag, not a tap). */
  const startTrayDrag = useCallback(
    (icType: IcType, event: TrayPointer, onEnd: (moved: boolean) => void) =>
      trayStart.current(icType, event, onEnd),
    [],
  );

  useEffect(() => {
    const found = containerRef.current;
    if (!found) return;
    const container: HTMLElement = found;
    /** Pointers that are down, to tell a second finger from the first. */
    const down = new Set<number>();
    /** A press on empty space that may turn out to be a tap */
    let tap: { id: number; x: number; y: number } | null = null;
    let trayEnd: ((moved: boolean) => void) | null = null;

    /** Whether a point is unavailable as a drop target: held by another wire, a chip, or `also`. */
    const taken = (wireId?: string, end?: WireEnd, also?: string) => (id: string) => {
      if (id === also) return true;
      const occupant = latest.current.taken.get(id);
      if (!occupant) return false;
      return !(occupant.kind === 'wire' && occupant.wireId === wireId && occupant.end === end);
    };

    const bendAt = (g: Gesture, event: PointerEvent): Bend => {
      const board = toBoard(event.clientX, event.clientY);
      return {
        x: round(g.startBend.x + board.x - g.startBoard.x),
        y: round(g.startBend.y + board.y - g.startBoard.y),
      };
    };

    /** Where a chip held at the pointer lands: its snapped place, and whether it fits there. */
    const icDrop = (g: Gesture, board: Position, icId: string | null) => {
      const middle = { x: board.x + g.grab.x, y: board.y + g.grab.y };
      const snap = snapIc(middle.x, middle.y);
      const { wires, ics } = latest.current.state;
      const valid = snap !== null && canPlace(wires, ics, snap.board, snap.col, icId ?? undefined);
      return { middle, snap, valid };
    };

    const icTypeOf = (g: Gesture): { icType: IcType; icId: string | null } | null => {
      if (g.target.kind === 'tray') return { icType: g.target.icType, icId: null };
      if (g.target.kind !== 'ic') return null;
      const { icId } = g.target;
      const ic = latest.current.state.ics.find((item) => item.id === icId);
      return ic ? { icType: ic.type, icId } : null;
    };

    const onDown = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') down.clear();
      const second = down.size > 0;
      down.add(event.pointerId);
      if (second) {
        tap = null;
        return;
      }
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      latest.current.onProbe?.(null);
      const target = resolve(event);
      if (!target) {
        tap = { id: event.pointerId, x: event.clientX, y: event.clientY };
        return;
      }
      try {
        container.setPointerCapture(event.pointerId);
      } catch {
        // the pointer is already gone: the gesture still works without capture
      }
      const { state: current, dispatch: send } = latest.current;
      const board = toBoard(event.clientX, event.clientY);
      let startBend: Bend = { x: 0, y: 0 };
      let grab: Position = { x: 0, y: 0 };
      if (target.kind === 'handle' || target.kind === 'end' || target.kind === 'body') {
        startBend = current.wires.find((w) => w.id === target.wireId)?.bend ?? startBend;
        send({ type: 'select', id: target.wireId });
      } else if (target.kind === 'ic') {
        const ic = current.ics.find((item) => item.id === target.icId);
        const frame = ic && icFrame(ic.board, ic.col);
        if (frame) grab = { x: frame.centerX - board.x, y: frame.centerY - board.y };
        send({ type: 'select', id: target.icId });
      }
      gesture.current = {
        pointerId: event.pointerId,
        kind: pointerKind(event.pointerType),
        start: { x: event.clientX, y: event.clientY },
        startBoard: board,
        startBend,
        grab,
        moved: false,
        target,
      };
      setHover(null);
    };

    const onMove = (event: PointerEvent) => {
      const g = gesture.current;
      if (!g) {
        if (tap && tap.id === event.pointerId) {
          if (Math.hypot(event.clientX - tap.x, event.clientY - tap.y) >= TAP_SLOP) tap = null;
        }
        if (event.pointerType === 'mouse' && event.buttons === 0) {
          const target = resolve(event);
          let next: Hover | null = null;
          if (target?.kind === 'new') {
            next = { mode: 'new', at: target.point, key: target.point.id };
          } else if (target?.kind === 'end') {
            next = { mode: 'edit', at: pointPosition(target.point), key: `end:${target.point}` };
          } else if (target?.kind === 'ic') {
            next = { mode: 'edit', at: null, key: `ic:${target.icId}` };
          } else if (target?.kind === 'switch') {
            next = { mode: 'edit', at: null, key: `switch:${target.index}` };
          } else if (target) {
            next = { mode: 'edit', at: null, key: `${target.kind}:${target.wireId}` };
          }
          setHover((previous) => (previous?.key === next?.key ? previous : next));
        }
        return;
      }
      if (event.pointerId !== g.pointerId) return;
      if (!g.moved && Math.hypot(event.clientX - g.start.x, event.clientY - g.start.y) < TAP_SLOP) {
        return;
      }
      const { target } = g;
      if (target.kind === 'switch') {
        // a drag that starts on a switch is a pan, not a flip
        gesture.current = null;
        adoptPointer(event.pointerId);
        return;
      }
      g.moved = true;
      const board = toBoard(event.clientX, event.clientY);
      const scale = getScale();
      // a finger covers what it points at: the magnifier shows it again above the finger
      if (g.kind === 'mouse') {
        setFinger(null);
      } else {
        const rect = container.getBoundingClientRect();
        setFinger({
          at: { x: event.clientX - rect.left, y: event.clientY - rect.top },
          canvas: { width: rect.width, height: rect.height },
          board,
          scale,
        });
      }
      if (target.kind === 'new') {
        const snap = findSnap(board, scale, g.kind, taken(undefined, undefined, target.point.id));
        setPreview({
          kind: 'draft',
          from: target.point.id,
          end: snap ?? board,
          snap: snap?.id ?? null,
          snapAt: snap,
        });
      } else if (target.kind === 'end') {
        const snap = findSnap(board, scale, g.kind, taken(target.wireId, target.end));
        setPreview({
          kind: 'end',
          wireId: target.wireId,
          end: target.end,
          position: snap ?? board,
          snap: snap?.id ?? null,
          snapAt: snap,
        });
      } else if (target.kind === 'ic' || target.kind === 'tray') {
        const what = icTypeOf(g);
        if (!what) return;
        const drop = icDrop(g, board, what.icId);
        setPreview({
          kind: 'ic',
          icType: what.icType,
          icId: what.icId,
          at: drop.middle,
          snap: drop.snap,
          valid: drop.valid,
        });
      } else {
        setPreview({ kind: 'bend', wireId: target.wireId, bend: bendAt(g, event) });
      }
    };

    const finish = (g: Gesture, event: PointerEvent) => {
      const { dispatch: send, color: wireColor } = latest.current;
      const board = toBoard(event.clientX, event.clientY);
      const scale = getScale();
      const { target } = g;
      if (target.kind === 'switch') {
        if (!g.moved) send({ type: 'toggleSwitch', index: target.index });
      } else if (target.kind === 'tray') {
        const drop = icDrop(g, board, null);
        if (g.moved && drop.snap && drop.valid) {
          send({ type: 'placeIc', icType: target.icType, ...drop.snap });
        }
      } else if (g.moved) {
        if (target.kind === 'new') {
          const snap = findSnap(board, scale, g.kind, taken(undefined, undefined, target.point.id));
          if (snap) send({ type: 'add', from: target.point.id, to: snap.id, color: wireColor });
        } else if (target.kind === 'end') {
          const snap = findSnap(board, scale, g.kind, taken(target.wireId, target.end));
          if (snap) send({ type: 'moveEnd', id: target.wireId, end: target.end, point: snap.id });
        } else if (target.kind === 'ic') {
          const drop = icDrop(g, board, target.icId);
          if (drop.snap && drop.valid) {
            send({ type: 'moveIc', id: target.icId, ...drop.snap });
          } else if (!drop.snap) {
            // dragged off the breadboards: the chip is taken out
            send({ type: 'remove', id: target.icId });
          }
        } else {
          send({ type: 'bend', id: target.wireId, bend: bendAt(g, event) });
        }
      } else if (target.kind === 'new') {
        send({ type: 'select', id: target.overWire ?? null });
        // a tap on a free point asks what is joined to it
        if (!target.overWire) latest.current.onProbe?.(target.point.id);
      }
    };

    const endTray = (moved: boolean) => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onCancel);
      const done = trayEnd;
      trayEnd = null;
      done?.(moved);
    };

    function onUp(event: PointerEvent) {
      down.delete(event.pointerId);
      const g = gesture.current;
      if (g && g.pointerId === event.pointerId) {
        gesture.current = null;
        setPreview(null);
        setFinger(null);
        if (container.hasPointerCapture?.(event.pointerId)) {
          container.releasePointerCapture(event.pointerId);
        }
        finish(g, event);
        if (g.target.kind === 'tray') endTray(g.moved);
      }
      if (tap && tap.id === event.pointerId) {
        tap = null;
        latest.current.dispatch({ type: 'select', id: null });
      }
    }

    function onCancel(event: PointerEvent) {
      down.delete(event.pointerId);
      tap = null;
      const g = gesture.current;
      if (g?.pointerId === event.pointerId) {
        cancel();
        if (g.target.kind === 'tray') endTray(g.moved);
      }
    }

    const onLeave = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') setHover(null);
    };

    trayStart.current = (icType, event, onEnd) => {
      if (gesture.current) return;
      trayEnd = onEnd;
      gesture.current = {
        pointerId: event.pointerId,
        kind: pointerKind(event.pointerType),
        start: { x: event.clientX, y: event.clientY },
        startBoard: toBoard(event.clientX, event.clientY),
        startBend: { x: 0, y: 0 },
        grab: { x: 0, y: 0 },
        moved: false,
        target: { kind: 'tray', icType },
      };
      setHover(null);
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointercancel', onCancel);
    };

    container.addEventListener('pointerdown', onDown);
    container.addEventListener('pointermove', onMove);
    container.addEventListener('pointerup', onUp);
    container.addEventListener('pointercancel', onCancel);
    container.addEventListener('pointerleave', onLeave);
    return () => {
      container.removeEventListener('pointerdown', onDown);
      container.removeEventListener('pointermove', onMove);
      container.removeEventListener('pointerup', onUp);
      container.removeEventListener('pointercancel', onCancel);
      container.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onCancel);
      trayStart.current = () => {};
    };
  }, [adoptPointer, cancel, containerRef, getScale, resolve, toBoard]);

  return { claims, cancel, startTrayDrag, preview, hover, finger };
}
