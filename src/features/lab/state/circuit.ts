import { SWITCH_COUNT } from '../board/layout';
import type { WireColor } from '../board/palette';
import type { PlacedIc, Wire } from '../sim/evaluate';
import { canPlaceIc, icPinPoints, type IcType } from '../sim/ics';
import { parsePoint } from '../sim/points';
import { sameBend, type Bend } from '../wire/curve';

/** A jumper wire on the board: where it goes, its color, and how its middle is bent. */
export type LabWire = Wire & { id: string; color: WireColor; bend: Bend };

export type WireEnd = 'from' | 'to';

/** What undo and redo step through: the parts of the circuit a student builds. */
export type Snapshot = { wires: readonly LabWire[]; ics: readonly PlacedIc[] };

export type CircuitState = Snapshot & {
  /** `switches[k]` is true when logic switch k is up (1). Operating the board is not undoable. */
  switches: readonly boolean[];
  /** The wire or chip being edited, or null. Not part of the undo history. */
  selected: string | null;
  /** Earlier circuits, oldest first. */
  past: readonly Snapshot[];
  /** Circuits that undo stepped back from, nearest first. */
  future: readonly Snapshot[];
  /** Counter for wire and chip ids, so ids never repeat after an undo. */
  nextId: number;
};

export type CircuitAction =
  | { type: 'add'; from: string; to: string; color: WireColor; bend?: Bend }
  | { type: 'remove'; id: string }
  | { type: 'recolor'; id: string; color: WireColor }
  | { type: 'bend'; id: string; bend: Bend }
  | { type: 'arrange'; bends: ReadonlyMap<string, Bend> }
  | { type: 'paint'; colors: ReadonlyMap<string, WireColor> }
  /** Wires and chips put on the boards in place of what is there, in one step that undo takes back */
  | {
      type: 'replace';
      ics: readonly Omit<PlacedIc, 'id'>[];
      wires: readonly { from: string; to: string; color: WireColor; bend: Bend }[];
    }
  | { type: 'moveEnd'; id: string; end: WireEnd; point: string }
  | { type: 'placeIc'; icType: IcType; board: number; col: number }
  | { type: 'moveIc'; id: string; board: number; col: number }
  | { type: 'toggleSwitch'; index: number }
  /** Sets the switches named by `index` (from 0) to the given positions, leaving the others */
  | { type: 'setSwitches'; changes: readonly { index: number; up: boolean }[] }
  | { type: 'clear' }
  | { type: 'select'; id: string | null }
  | { type: 'undo' }
  | { type: 'redo' };

export const HISTORY_LIMIT = 200;

export const NO_SWITCHES_UP: readonly boolean[] = Array.from({ length: SWITCH_COUNT }, () => false);

export const initialCircuit: CircuitState = {
  wires: [],
  ics: [],
  switches: NO_SWITCHES_UP,
  selected: null,
  past: [],
  future: [],
  nextId: 1,
};

/** What sits in a point: the end of a wire or the leg of a chip. */
export type Occupant =
  { kind: 'wire'; wireId: string; end: WireEnd } | { kind: 'ic'; icId: string; pin: number };

/** Which wire end or chip leg sits in each point. A point holds one lead, as a hole does. */
export function occupancy(
  wires: readonly LabWire[],
  ics: readonly PlacedIc[] = [],
): Map<string, Occupant> {
  const map = new Map<string, Occupant>();
  for (const ic of ics) {
    for (const [pin, id] of Object.entries(icPinPoints(ic.board, ic.col))) {
      map.set(id, { kind: 'ic', icId: ic.id, pin: Number(pin) });
    }
  }
  for (const wire of wires) {
    map.set(wire.from, { kind: 'wire', wireId: wire.id, end: 'from' });
    map.set(wire.to, { kind: 'wire', wireId: wire.id, end: 'to' });
  }
  return map;
}

/**
 * Whether a wire may join two points: both are on the board, they differ, and neither holds
 * another wire or a chip leg. `ignore` is the wire being moved, whose own ends do not count.
 */
export function canConnect(
  wires: readonly LabWire[],
  ics: readonly PlacedIc[],
  from: string,
  to: string,
  ignore?: string,
): boolean {
  if (from === to || !parsePoint(from) || !parsePoint(to)) return false;
  const taken = occupancy(
    wires.filter((wire) => wire.id !== ignore),
    ics,
  );
  return !taken.has(from) && !taken.has(to);
}

/**
 * Whether a chip whose pin 1 is at `col` of breadboard `board` fits: it is on the board and its 14
 * legs land in holes that hold nothing. `ignore` is the chip being moved.
 */
export function canPlace(
  wires: readonly LabWire[],
  ics: readonly PlacedIc[],
  board: number,
  col: number,
  ignore?: string,
): boolean {
  if (!canPlaceIc(board, col)) return false;
  const taken = occupancy(
    wires,
    ics.filter((ic) => ic.id !== ignore),
  );
  return Object.values(icPinPoints(board, col)).every((id) => !taken.has(id));
}

/** The first free place for a chip, nearest to `prefer` (board px), or null when the boards are full. */
export function findFreeSlot(
  wires: readonly LabWire[],
  ics: readonly PlacedIc[],
  slots: readonly { board: number; col: number; x: number; y: number }[],
  prefer: { x: number; y: number },
): { board: number; col: number } | null {
  let best: { board: number; col: number; distance: number } | null = null;
  for (const slot of slots) {
    const distance = Math.hypot(slot.x - prefer.x, slot.y - prefer.y);
    if (best && distance >= best.distance) continue;
    if (canPlace(wires, ics, slot.board, slot.col)) {
      best = { board: slot.board, col: slot.col, distance };
    }
  }
  return best && { board: best.board, col: best.col };
}

/** Replaces the circuit and records the old one for undo. */
function commit(state: CircuitState, next: Partial<Snapshot>, selected: string | null) {
  return {
    ...state,
    ...next,
    selected,
    past: [...state.past, { wires: state.wires, ics: state.ics }].slice(-HISTORY_LIMIT),
    future: [],
  };
}

const update = (wires: readonly LabWire[], id: string, change: Partial<LabWire>) =>
  wires.map((wire) => (wire.id === id ? { ...wire, ...change } : wire));

const exists = (circuit: Snapshot, id: string | null): id is string =>
  id !== null &&
  (circuit.wires.some((wire) => wire.id === id) || circuit.ics.some((ic) => ic.id === id));

export function circuitReducer(state: CircuitState, action: CircuitAction): CircuitState {
  switch (action.type) {
    case 'add': {
      if (!canConnect(state.wires, state.ics, action.from, action.to)) return state;
      const id = `w${state.nextId}`;
      const wire: LabWire = {
        id,
        from: action.from,
        to: action.to,
        color: action.color,
        bend: action.bend ?? { x: 0, y: 0 },
      };
      return { ...commit(state, { wires: [...state.wires, wire] }, id), nextId: state.nextId + 1 };
    }
    case 'remove': {
      const selected = state.selected === action.id ? null : state.selected;
      if (state.wires.some((wire) => wire.id === action.id)) {
        return commit(state, { wires: state.wires.filter((w) => w.id !== action.id) }, selected);
      }
      if (state.ics.some((ic) => ic.id === action.id)) {
        return commit(state, { ics: state.ics.filter((ic) => ic.id !== action.id) }, selected);
      }
      return state;
    }
    case 'recolor': {
      const wire = state.wires.find((w) => w.id === action.id);
      if (!wire || wire.color === action.color) return state;
      return commit(
        state,
        { wires: update(state.wires, action.id, { color: action.color }) },
        state.selected,
      );
    }
    case 'bend': {
      const wire = state.wires.find((w) => w.id === action.id);
      if (!wire || sameBend(wire.bend, action.bend)) return state;
      return commit(
        state,
        { wires: update(state.wires, action.id, { bend: action.bend }) },
        state.selected,
      );
    }
    case 'arrange': {
      // every wire gets its new bend in one step, so one undo brings them all back
      let changed = false;
      const wires = state.wires.map((wire) => {
        const bend = action.bends.get(wire.id);
        if (!bend || sameBend(wire.bend, bend)) return wire;
        changed = true;
        return { ...wire, bend };
      });
      return changed ? commit(state, { wires }, state.selected) : state;
    }
    case 'paint': {
      // every wire gets its new color in one step, so one undo brings them all back
      let changed = false;
      const wires = state.wires.map((wire) => {
        const color = action.colors.get(wire.id);
        if (!color || color === wire.color) return wire;
        changed = true;
        return { ...wire, color };
      });
      return changed ? commit(state, { wires }, state.selected) : state;
    }
    case 'replace': {
      let nextId = state.nextId;
      const ics: PlacedIc[] = [];
      for (const ic of action.ics) {
        if (!canPlace([], ics, ic.board, ic.col)) continue;
        ics.push({ id: `u${nextId++}`, ...ic });
      }
      const wires: LabWire[] = [];
      for (const w of action.wires) {
        if (!canConnect(wires, ics, w.from, w.to)) continue;
        wires.push({ id: `w${nextId++}`, ...w });
      }
      return { ...commit(state, { wires, ics }, null), nextId };
    }
    case 'moveEnd': {
      const wire = state.wires.find((w) => w.id === action.id);
      if (!wire || wire[action.end] === action.point) return state;
      const other = action.end === 'from' ? wire.to : wire.from;
      if (!canConnect(state.wires, state.ics, action.point, other, action.id)) return state;
      return commit(
        state,
        { wires: update(state.wires, action.id, { [action.end]: action.point }) },
        state.selected,
      );
    }
    case 'placeIc': {
      if (!canPlace(state.wires, state.ics, action.board, action.col)) return state;
      const id = `u${state.nextId}`;
      const ic: PlacedIc = { id, type: action.icType, board: action.board, col: action.col };
      return { ...commit(state, { ics: [...state.ics, ic] }, id), nextId: state.nextId + 1 };
    }
    case 'moveIc': {
      const ic = state.ics.find((item) => item.id === action.id);
      if (!ic || (ic.board === action.board && ic.col === action.col)) return state;
      if (!canPlace(state.wires, state.ics, action.board, action.col, action.id)) return state;
      return commit(
        state,
        {
          ics: state.ics.map((item) =>
            item.id === action.id ? { ...item, board: action.board, col: action.col } : item,
          ),
        },
        action.id,
      );
    }
    case 'toggleSwitch': {
      if (!Number.isInteger(action.index) || action.index < 0 || action.index >= SWITCH_COUNT) {
        return state;
      }
      return {
        ...state,
        switches: state.switches.map((up, k) => (k === action.index ? !up : up)),
      };
    }
    case 'setSwitches': {
      const valid = action.changes.filter(
        ({ index }) => Number.isInteger(index) && index >= 0 && index < SWITCH_COUNT,
      );
      if (valid.every(({ index, up }) => state.switches[index] === up)) return state;
      const switches = [...state.switches];
      for (const { index, up } of valid) switches[index] = up;
      return { ...state, switches };
    }
    case 'clear': {
      if (state.wires.length === 0 && state.ics.length === 0) return state;
      return commit(state, { wires: [], ics: [] }, null);
    }
    case 'select': {
      const selected = exists(state, action.id) ? action.id : null;
      return selected === state.selected ? state : { ...state, selected };
    }
    case 'undo': {
      const previous = state.past[state.past.length - 1];
      if (!previous) return state;
      return {
        ...state,
        ...previous,
        selected: exists(previous, state.selected) ? state.selected : null,
        past: state.past.slice(0, -1),
        future: [{ wires: state.wires, ics: state.ics }, ...state.future],
      };
    }
    case 'redo': {
      const next = state.future[0];
      if (!next) return state;
      return {
        ...state,
        ...next,
        selected: exists(next, state.selected) ? state.selected : null,
        past: [...state.past, { wires: state.wires, ics: state.ics }],
        future: state.future.slice(1),
      };
    }
  }
}
