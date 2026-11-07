import { SWITCH_COUNT } from '../board/layout';
import { WIRE_COLOR_NAMES, type WireColor } from '../board/palette';
import type { PlacedIc } from '../sim/evaluate';
import { IC_TYPES, type IcType } from '../sim/ics';
import { parsePoint } from '../sim/points';
import {
  canConnect,
  canPlace,
  initialCircuit,
  NO_SWITCHES_UP,
  type CircuitState,
  type LabWire,
} from './circuit';

/** The key the circuit is saved under in the browser. */
export const STORAGE_KEY = 'digital-logic-lab-circuit';
export const SAVE_VERSION = 1;

/** The parts of the state that are saved. History and selection are not. */
export type SavedCircuit = Pick<CircuitState, 'wires' | 'ics' | 'switches'>;

/** The circuit as the text that is stored. */
export function serializeCircuit(circuit: SavedCircuit): string {
  return JSON.stringify({
    version: SAVE_VERSION,
    wires: circuit.wires.map(({ id, from, to, color, bend }) => ({ id, from, to, color, bend })),
    ics: circuit.ics.map(({ id, type, board, col }) => ({ id, type, board, col })),
    switches: circuit.switches,
  });
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isFiniteNumber = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value);

/** The number in an id like `w12` or `u3`, or null. */
const idNumber = (id: unknown, prefix: string): number | null => {
  const match = typeof id === 'string' ? new RegExp(`^${prefix}(\\d+)$`).exec(id) : null;
  return match?.[1] ? Number(match[1]) : null;
};

/**
 * Reads a saved circuit back. The text comes from the browser's storage, so nothing in it is
 * trusted: a part that is not valid, or that no longer fits (a hole already taken), is dropped and
 * the rest is kept. Returns null when the text is not a saved circuit at all.
 */
export function parseCircuit(text: string): CircuitState | null {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    return null;
  }
  if (!isRecord(data) || data['version'] !== SAVE_VERSION) return null;

  const ics: PlacedIc[] = [];
  const seen = new Set<string>();
  let nextId = 1;
  const remember = (id: string, prefix: string) => {
    seen.add(id);
    nextId = Math.max(nextId, (idNumber(id, prefix) ?? 0) + 1);
  };

  if (Array.isArray(data['ics'])) {
    for (const item of data['ics'] as unknown[]) {
      if (!isRecord(item) || idNumber(item['id'], 'u') === null) continue;
      const { id, type, board, col } = item as Record<string, unknown>;
      if (typeof id !== 'string' || seen.has(id)) continue;
      if (!IC_TYPES.includes(type as IcType) || !isFiniteNumber(board) || !isFiniteNumber(col)) {
        continue;
      }
      if (!canPlace([], ics, board, col)) continue;
      ics.push({ id, type: type as IcType, board, col });
      remember(id, 'u');
    }
  }

  const wires: LabWire[] = [];
  if (Array.isArray(data['wires'])) {
    for (const item of data['wires'] as unknown[]) {
      if (!isRecord(item) || idNumber(item['id'], 'w') === null) continue;
      const { id, from, to, color, bend } = item as Record<string, unknown>;
      if (typeof id !== 'string' || seen.has(id)) continue;
      if (typeof from !== 'string' || typeof to !== 'string') continue;
      if (!parsePoint(from) || !parsePoint(to)) continue;
      if (!WIRE_COLOR_NAMES.includes(color as WireColor)) continue;
      if (!isRecord(bend) || !isFiniteNumber(bend['x']) || !isFiniteNumber(bend['y'])) continue;
      if (!canConnect(wires, ics, from, to)) continue;
      wires.push({
        id,
        from,
        to,
        color: color as WireColor,
        bend: { x: bend['x'], y: bend['y'] },
      });
      remember(id, 'w');
    }
  }

  const saved = Array.isArray(data['switches']) ? (data['switches'] as unknown[]) : [];
  const switches = Array.from({ length: SWITCH_COUNT }, (_, k) => saved[k] === true);

  return { ...initialCircuit, wires, ics, switches, nextId };
}

/** The browser's storage, or null when it is missing or refuses access (private windows, blocked data). */
function browserStorage(): Storage | null {
  try {
    return typeof window === 'undefined' ? null : window.localStorage;
  } catch {
    return null;
  }
}

/** The saved circuit, or an empty one when nothing usable is stored. */
export function loadCircuit(storage: Storage | null = browserStorage()): CircuitState {
  try {
    const text = storage?.getItem(STORAGE_KEY);
    return (text ? parseCircuit(text) : null) ?? initialCircuit;
  } catch {
    return initialCircuit;
  }
}

/** Saves the circuit. A browser that refuses to store is ignored: the lab still works. */
export function saveCircuit(circuit: SavedCircuit, storage: Storage | null = browserStorage()) {
  try {
    const empty =
      circuit.wires.length === 0 &&
      circuit.ics.length === 0 &&
      circuit.switches.every((up, k) => up === NO_SWITCHES_UP[k]);
    if (empty) storage?.removeItem(STORAGE_KEY);
    else storage?.setItem(STORAGE_KEY, serializeCircuit(circuit));
  } catch {
    // storage is full or blocked: keep working without saving
  }
}
