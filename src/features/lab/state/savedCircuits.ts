import { parseCircuit, serializeCircuit, type SavedCircuit } from './storage';

/** Where the circuits a student keeps by name are stored in the browser. */
export const SAVED_KEY = 'digital-logic-lab-saved';
/** How many can be kept: more than a lab needs, few enough to stay far under the storage limit. */
export const MAX_SAVED = 12;
export const MAX_NAME = 40;

/** A circuit kept by name: `data` is the text `serializeCircuit` makes (the same as the circuit the page keeps for itself). */
export type SavedEntry = { id: string; name: string; savedAt: number; data: string };

/** What a saved circuit holds, for the list. Null when its data cannot be read any more. */
export function summarize(entry: SavedEntry): { chips: number; wires: number } | null {
  const state = parseCircuit(entry.data);
  return state ? { chips: state.ics.length, wires: state.wires.length } : null;
}

/** The circuit of an entry, ready to put on the boards, or null when it cannot be read. */
export function entryCircuit(entry: SavedEntry): SavedCircuit | null {
  const state = parseCircuit(entry.data);
  return state ? { wires: state.wires, ics: state.ics, switches: state.switches } : null;
}

const isEntry = (value: unknown): value is SavedEntry => {
  if (typeof value !== 'object' || value === null) return false;
  const e = value as Record<string, unknown>;
  return (
    typeof e['id'] === 'string' &&
    typeof e['name'] === 'string' &&
    typeof e['savedAt'] === 'number' &&
    typeof e['data'] === 'string'
  );
};

const browserStorage = (): Storage | null => {
  try {
    return typeof window === 'undefined' ? null : window.localStorage;
  } catch {
    return null;
  }
};

/** The saved circuits, newest first. Whatever in the storage is not an entry is left out. */
export function loadSaved(storage: Storage | null = browserStorage()): SavedEntry[] {
  try {
    const text = storage?.getItem(SAVED_KEY);
    const data: unknown = text ? JSON.parse(text) : [];
    return Array.isArray(data) ? data.filter(isEntry).slice(0, MAX_SAVED) : [];
  } catch {
    return [];
  }
}

/** Stores the list. False when the browser refuses (full or blocked), so the page can say so. */
export function writeSaved(
  list: readonly SavedEntry[],
  storage: Storage | null = browserStorage(),
): boolean {
  try {
    if (!storage) return false;
    if (list.length === 0) storage.removeItem(SAVED_KEY);
    else storage.setItem(SAVED_KEY, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
}

/** A name that is not empty and not too long, from what was typed. */
export function cleanName(typed: string, fallback: string): string {
  const name = typed.trim().replace(/\s+/g, ' ').slice(0, MAX_NAME).trim();
  return name === '' ? fallback : name;
}

/**
 * The list with a circuit added at the top. The same name replaces the older entry (saving again is
 * how a circuit is updated), and when the list is full the oldest goes.
 */
export function addSaved(
  list: readonly SavedEntry[],
  name: string,
  circuit: SavedCircuit,
  now: number,
): SavedEntry[] {
  const entry: SavedEntry = {
    id: `s${now.toString(36)}${Math.floor(Math.random() * 1296).toString(36)}`,
    name,
    savedAt: now,
    data: serializeCircuit(circuit),
  };
  return [entry, ...list.filter((item) => item.name !== name)].slice(0, MAX_SAVED);
}

export const removeSaved = (list: readonly SavedEntry[], id: string): SavedEntry[] =>
  list.filter((entry) => entry.id !== id);
