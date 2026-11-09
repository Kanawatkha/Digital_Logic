import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  MAX_NAME,
  MAX_SAVED,
  SAVED_KEY,
  addSaved,
  cleanName,
  entryCircuit,
  loadSaved,
  removeSaved,
  summarize,
  writeSaved,
  type SavedEntry,
} from './savedCircuits';
import type { SavedCircuit } from './storage';

afterEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

const wire = {
  id: 'w1',
  from: 'power:+5V:0',
  to: 'b0:c11:b',
  color: 'red' as const,
  bend: { x: 0, y: 0 },
};
const circuit = (switches: number[] = []): SavedCircuit => ({
  wires: [wire],
  ics: [{ id: 'u1', type: '7408', board: 0, col: 11 }],
  switches: Array.from({ length: 8 }, (_, k) => switches.includes(k)),
});

describe('circuits kept by name', () => {
  it('keeps a circuit and gives it back as it was, switches included', () => {
    const list = addSaved([], 'ข้อ 1', circuit([0, 2]), 1000);
    expect(list).toHaveLength(1);
    expect(list[0]).toMatchObject({ name: 'ข้อ 1', savedAt: 1000 });
    const back = entryCircuit(list[0]!)!;
    expect(back.ics).toEqual([{ id: 'u1', type: '7408', board: 0, col: 11 }]);
    expect(back.wires).toHaveLength(1);
    expect(back.switches.map(Number)).toEqual([1, 0, 1, 0, 0, 0, 0, 0]);
    expect(summarize(list[0]!)).toEqual({ chips: 1, wires: 1 });
  });

  it('puts the newest first, and saving under a name again replaces the older one', () => {
    let list = addSaved([], 'a', circuit(), 1);
    list = addSaved(list, 'b', circuit(), 2);
    expect(list.map((e) => e.name)).toEqual(['b', 'a']);
    list = addSaved(list, 'a', circuit([1]), 3);
    expect(list.map((e) => e.name)).toEqual(['a', 'b']);
    expect(entryCircuit(list[0]!)!.switches[1]).toBe(true);
  });

  it('drops the oldest when the list is full', () => {
    let list: SavedEntry[] = [];
    for (let k = 0; k < MAX_SAVED + 3; k++) list = addSaved(list, `c${k}`, circuit(), k);
    expect(list).toHaveLength(MAX_SAVED);
    expect(list[0]?.name).toBe(`c${MAX_SAVED + 2}`);
    expect(list.some((e) => e.name === 'c0')).toBe(false);
  });

  it('removes one by its id', () => {
    const list = addSaved(addSaved([], 'a', circuit(), 1), 'b', circuit(), 2);
    const next = removeSaved(list, list[0]!.id);
    expect(next.map((e) => e.name)).toEqual(['a']);
  });

  it('cleans a typed name: trimmed, one space between words, not too long, never empty', () => {
    expect(cleanName('  ข้อ   สาม ', 'x')).toBe('ข้อ สาม');
    expect(cleanName('   ', 'วงจร 1')).toBe('วงจร 1');
    expect(cleanName('a'.repeat(100), 'x')).toHaveLength(MAX_NAME);
  });
});

describe('the browser storage of them', () => {
  it('writes and reads the list back, and an empty list leaves nothing', () => {
    const list = addSaved([], 'a', circuit(), 1);
    expect(writeSaved(list)).toBe(true);
    expect(loadSaved()).toEqual(list);
    expect(writeSaved([])).toBe(true);
    expect(localStorage.getItem(SAVED_KEY)).toBeNull();
  });

  it('reads nothing from what is not a list, and leaves out what is not an entry', () => {
    localStorage.setItem(SAVED_KEY, 'not json');
    expect(loadSaved()).toEqual([]);
    localStorage.setItem(SAVED_KEY, '{"a":1}');
    expect(loadSaved()).toEqual([]);
    const good = addSaved([], 'a', circuit(), 1)[0]!;
    localStorage.setItem(SAVED_KEY, JSON.stringify([good, { id: 1 }, null, 'x']));
    expect(loadSaved()).toEqual([good]);
  });

  it('says so when the browser refuses to store, and reads nothing when it refuses to read', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('full');
    });
    expect(writeSaved(addSaved([], 'a', circuit(), 1))).toBe(false);
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(loadSaved()).toEqual([]);
    expect(writeSaved([], null)).toBe(false);
  });

  it('cannot read the circuit of an entry whose data is spoiled', () => {
    const entry: SavedEntry = { id: 's', name: 'x', savedAt: 1, data: '{broken' };
    expect(entryCircuit(entry)).toBeNull();
    expect(summarize(entry)).toBeNull();
  });
});
