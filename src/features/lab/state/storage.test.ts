import { describe, expect, it } from 'vitest';
import { circuitReducer, initialCircuit, type CircuitAction, type CircuitState } from './circuit';
import { STORAGE_KEY, loadCircuit, parseCircuit, saveCircuit, serializeCircuit } from './storage';

const run = (actions: CircuitAction[], from: CircuitState = initialCircuit) =>
  actions.reduce(circuitReducer, from);

const sample = run([
  { type: 'placeIc', icType: '7408', board: 0, col: 11 },
  { type: 'add', from: 'power:+5V:0', to: 'b0:c11:b', color: 'blue', bend: { x: 3, y: -4 } },
  { type: 'add', from: 'sw0:0', to: 'b0:c11:i', color: 'green' },
  { type: 'toggleSwitch', index: 2 },
]);

/** A storage that keeps strings, like the browser's. */
function memoryStorage(initial: Record<string, string> = {}): Storage {
  const data = new Map(Object.entries(initial));
  return {
    get length() {
      return data.size;
    },
    clear: () => data.clear(),
    getItem: (key) => data.get(key) ?? null,
    key: (index) => [...data.keys()][index] ?? null,
    removeItem: (key) => void data.delete(key),
    setItem: (key, value) => void data.set(key, value),
  };
}

describe('saved circuit', () => {
  it('reads back what was written: wires, chips, switches and the next id', () => {
    const back = parseCircuit(serializeCircuit(sample));
    expect(back?.wires).toEqual(sample.wires);
    expect(back?.ics).toEqual(sample.ics);
    expect(back?.switches).toEqual(sample.switches);
    expect(back?.nextId).toBe(sample.nextId);
    expect(back?.selected).toBeNull();
    expect(back?.past).toEqual([]);
  });

  it('keeps ids unique after a reload, so a new part never reuses one', () => {
    const back = parseCircuit(serializeCircuit(sample))!;
    const more = circuitReducer(back, { type: 'add', from: 'sw1:0', to: 'b0:c12:i', color: 'red' });
    const ids = [...more.wires.map((w) => w.id), ...more.ics.map((i) => i.id)];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('rejects text that is not a saved circuit', () => {
    for (const text of ['', 'nope', '[]', 'null', '{"version":2,"wires":[]}', '{"wires":[]}']) {
      expect(parseCircuit(text), text).toBeNull();
    }
  });

  it('drops parts that are not valid and keeps the rest', () => {
    const text = JSON.stringify({
      version: 1,
      wires: [
        { id: 'w1', from: 'power:+5V:0', to: 'b0:c1:a', color: 'red', bend: { x: 0, y: 0 } },
        { id: 'w2', from: 'nowhere', to: 'b0:c2:a', color: 'red', bend: { x: 0, y: 0 } },
        { id: 'w3', from: 'b0:c3:a', to: 'b0:c4:a', color: 'pink', bend: { x: 0, y: 0 } },
        { id: 'w4', from: 'b0:c5:a', to: 'b0:c6:a', color: 'red', bend: { x: 'a', y: 0 } },
        // a hole that is already taken
        { id: 'w5', from: 'b0:c1:a', to: 'b0:c7:a', color: 'red', bend: { x: 0, y: 0 } },
        // the same id twice
        { id: 'w1', from: 'b0:c8:a', to: 'b0:c9:a', color: 'red', bend: { x: 0, y: 0 } },
        { id: 'x9', from: 'b0:c8:a', to: 'b0:c9:a', color: 'red', bend: { x: 0, y: 0 } },
        { id: 'w6', from: 'b0:c20:a', to: 'b0:c21:a', color: 'red', bend: { x: 1, y: 2 } },
        'text',
        null,
      ],
      ics: [
        { id: 'u1', type: '7408', board: 0, col: 10 },
        { id: 'u2', type: '7432', board: 0, col: 12 },
        { id: 'u3', type: '4017', board: 0, col: 30 },
        { id: 'u4', type: '7404', board: 0, col: 99 },
        { id: 'u5', type: '7404', board: 0, col: 40 },
      ],
      switches: [true, 'yes', false],
    });
    const circuit = parseCircuit(text)!;
    expect(circuit.wires.map((w) => w.id)).toEqual(['w1', 'w6']);
    expect(circuit.ics.map((i) => i.id)).toEqual(['u1', 'u5']);
    expect(circuit.switches).toEqual([true, false, false, false, false, false, false, false]);
    expect(circuit.nextId).toBe(7);
  });

  it('drops a wire that sits in a hole under a saved chip leg', () => {
    const text = JSON.stringify({
      version: 1,
      ics: [{ id: 'u1', type: '7408', board: 0, col: 10 }],
      wires: [{ id: 'w1', from: 'b0:c10:f', to: 'b0:c30:a', color: 'red', bend: { x: 0, y: 0 } }],
      switches: [],
    });
    expect(parseCircuit(text)?.wires).toEqual([]);
  });
});

describe('browser storage', () => {
  it('saves and loads through the storage key', () => {
    const storage = memoryStorage();
    saveCircuit(sample, storage);
    expect(storage.getItem(STORAGE_KEY)).not.toBeNull();
    expect(loadCircuit(storage).wires).toEqual(sample.wires);
  });

  it('forgets an empty circuit instead of saving it', () => {
    const storage = memoryStorage();
    saveCircuit(sample, storage);
    saveCircuit(initialCircuit, storage);
    expect(storage.getItem(STORAGE_KEY)).toBeNull();
    // a switch that is up is something to keep
    saveCircuit({ ...initialCircuit, switches: sample.switches }, storage);
    expect(storage.getItem(STORAGE_KEY)).not.toBeNull();
  });

  it('starts empty when nothing usable is stored', () => {
    expect(loadCircuit(memoryStorage())).toBe(initialCircuit);
    expect(loadCircuit(memoryStorage({ [STORAGE_KEY]: '{broken' }))).toBe(initialCircuit);
    expect(loadCircuit(null)).toBe(initialCircuit);
  });

  it('works when the browser refuses storage', () => {
    const refusing = {
      getItem() {
        throw new Error('blocked');
      },
      setItem() {
        throw new Error('blocked');
      },
      removeItem() {
        throw new Error('blocked');
      },
    } as unknown as Storage;
    expect(() => saveCircuit(sample, refusing)).not.toThrow();
    expect(loadCircuit(refusing)).toBe(initialCircuit);
  });
});
