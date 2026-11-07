import { useCallback, useEffect, useRef, useState, type Dispatch, type RefObject } from 'react';
import { UI_TEXT } from '@/config/site';
import { pointPosition, type Position } from '../board/geometry';
import { pointIndex } from '../board/hitTest';
import { PITCH } from '../board/layout';
import type { WireColor } from '../board/palette';
import { occupancy, type CircuitAction, type CircuitState } from '../state/circuit';
import { describePoint } from '../ui/pointName';

type Direction = { x: number; y: number };

const DIRECTIONS: Record<string, Direction> = {
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
};

/** How far (in hole pitches) the cursor looks for the next point, nearest first. */
const REACH = [1, 2, 3, 5, 8, 13, 21, 34, 55];
/** A Shift and arrow jumps at least this many pitches. */
const LONG_STEP = 5;

/**
 * The next point from `id` in a direction: the nearest point that is farther along that direction,
 * looking a hole away, then two, and so on, so the cursor crosses the gaps between panels.
 */
export function nextPoint(id: string, direction: Direction, long = false): string | null {
  const from = pointPosition(id);
  if (!from) return null;
  const index = pointIndex();
  for (const pitches of REACH) {
    if (long && pitches < LONG_STEP) continue;
    const step = pitches * PITCH;
    const found = index.nearest(
      from.x + direction.x * step,
      from.y + direction.y * step,
      step * 0.62,
      (other) => {
        if (other === id) return false;
        const at = pointPosition(other);
        if (!at) return false;
        // farther along the direction than a fraction of a pitch
        return (at.x - from.x) * direction.x + (at.y - from.y) * direction.y > PITCH * 0.3;
      },
    );
    if (found) return found.id;
  }
  return null;
}

/** What the keyboard cursor is on and the wire it has started. */
export type KeyboardCursor = {
  id: string;
  at: Position;
  /** The point a wire was started from, with its place */
  from: { id: string; at: Position } | null;
};

type Options = {
  containerRef: RefObject<HTMLElement | null>;
  toBoard: (clientX: number, clientY: number) => Position;
  panIntoView: (point: Position) => void;
  state: CircuitState;
  dispatch: Dispatch<CircuitAction>;
  color: WireColor;
};

type Model = { id: string; from: string | null };

/**
 * Wiring without a pointer. Press Enter on the board to start: a cursor appears on the point nearest
 * the middle of the screen. The arrow keys move it from point to point (Shift jumps farther) and the
 * board follows it. Enter on a free point starts a wire, Enter on another free point ends it; Enter on
 * a wire end or a chip leg selects that wire or chip (then Delete removes it). Escape cancels a wire
 * that was started, and leaves the mode when there is none.
 *
 * Every step is also written as a sentence, for a screen reader and for the hint on screen.
 */
export function useKeyboardWiring({
  containerRef,
  toBoard,
  panIntoView,
  state,
  dispatch,
  color,
}: Options) {
  const [model, setModel] = useState<Model | null>(null);
  const [message, setMessage] = useState('');
  const current = useRef<Model | null>(null);
  const latest = useRef({ state, dispatch, color });

  useEffect(() => {
    latest.current = { state, dispatch, color };
  }, [state, dispatch, color]);

  const update = useCallback((next: Model | null, text: string) => {
    current.current = next;
    setModel(next);
    setMessage(text);
  }, []);

  /** The viewport must leave the arrow keys alone while the cursor is on. */
  const claimKey = useCallback(
    (event: KeyboardEvent) => current.current !== null && event.key in DIRECTIONS,
    [],
  );

  useEffect(() => {
    const found = containerRef.current;
    if (!found) return;
    const container: HTMLElement = found;

    const begin = () => {
      const rect = container.getBoundingClientRect();
      const middle = toBoard(rect.left + rect.width / 2, rect.top + rect.height / 2);
      const start = pointIndex().nearest(middle.x, middle.y, Infinity);
      if (!start) return;
      update({ id: start.id, from: null }, `${UI_TEXT.labKbOn} ${describePoint(start.id)}`);
      panIntoView(start);
    };

    const move = (direction: Direction, long: boolean) => {
      const model = current.current;
      if (!model) return;
      const id = nextPoint(model.id, direction, long);
      if (!id) return;
      update({ ...model, id }, describePoint(id));
      const at = pointPosition(id);
      if (at) panIntoView(at);
    };

    const act = () => {
      const model = current.current;
      if (!model) return;
      const { state: now, dispatch: send, color: wireColor } = latest.current;
      const holder = occupancy(now.wires, now.ics).get(model.id);
      if (model.from) {
        if (model.id === model.from) {
          update({ ...model, from: null }, UI_TEXT.labKbCancel);
        } else if (holder) {
          setMessage(`${UI_TEXT.labKbBusy}: ${describePoint(model.id)}`);
        } else {
          send({ type: 'add', from: model.from, to: model.id, color: wireColor });
          update(
            { ...model, from: null },
            `${UI_TEXT.labKbAdded}: ${describePoint(model.from)} - ${describePoint(model.id)}`,
          );
        }
      } else if (holder?.kind === 'wire') {
        send({ type: 'select', id: holder.wireId });
        setMessage(`${UI_TEXT.labKbSelected}${UI_TEXT.labKbWire} ${describePoint(model.id)}`);
      } else if (holder?.kind === 'ic') {
        send({ type: 'select', id: holder.icId });
        setMessage(`${UI_TEXT.labKbSelected}${UI_TEXT.labKbChip} ${describePoint(model.id)}`);
      } else {
        update({ ...model, from: model.id }, `${UI_TEXT.labKbStart} ${describePoint(model.id)}`);
      }
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey || event.target !== container) return;
      const model = current.current;
      if (!model) {
        if (event.key === 'Enter') {
          begin();
          event.preventDefault();
        }
        return;
      }
      const direction = DIRECTIONS[event.key];
      if (direction) {
        move(direction, event.shiftKey);
        event.preventDefault();
      } else if (event.key === 'Enter' || event.key === ' ') {
        act();
        event.preventDefault();
      } else if (event.key === 'Escape') {
        if (model.from) update({ ...model, from: null }, UI_TEXT.labKbCancel);
        else update(null, UI_TEXT.labKbOff);
      } else if (event.key === 'Tab') {
        update(null, UI_TEXT.labKbOff);
      }
    };

    const onBlur = () => {
      if (current.current) update(null, UI_TEXT.labKbOff);
    };

    container.addEventListener('keydown', onKey);
    container.addEventListener('blur', onBlur);
    return () => {
      container.removeEventListener('keydown', onKey);
      container.removeEventListener('blur', onBlur);
    };
  }, [containerRef, panIntoView, toBoard, update]);

  const at = model ? pointPosition(model.id) : null;
  const fromAt = model?.from ? pointPosition(model.from) : null;
  const cursor: KeyboardCursor | null =
    model && at
      ? { id: model.id, at, from: model.from && fromAt ? { id: model.from, at: fromAt } : null }
      : null;

  return { claimKey, cursor, message };
}
