import { describe, expect, it } from 'vitest';
import { simulate } from '../sim/evaluate';
import {
  HISTORY_LIMIT,
  canConnect,
  circuitReducer,
  initialCircuit,
  occupancy,
  type CircuitAction,
  type CircuitState,
} from './circuit';

const run = (actions: CircuitAction[], from: CircuitState = initialCircuit) =>
  actions.reduce(circuitReducer, from);

const add = (from: string, to: string, color: 'red' | 'blue' = 'red'): CircuitAction => ({
  type: 'add',
  from,
  to,
  color,
});

describe('circuit: adding wires', () => {
  it('adds a wire, selects it and gives it a new id', () => {
    const state = run([add('b0:c1:a', 'b0:c9:a'), add('b0:c2:a', 'b0:c8:a')]);
    expect(state.wires.map((w) => w.id)).toEqual(['w1', 'w2']);
    expect(state.wires[0]).toMatchObject({
      from: 'b0:c1:a',
      to: 'b0:c9:a',
      color: 'red',
      bend: { x: 0, y: 0 },
    });
    expect(state.selected).toBe('w2');
  });

  it('refuses a point that is not on the board, the same point twice, and a taken point', () => {
    const base = run([add('b0:c1:a', 'b0:c9:a')]);
    expect(circuitReducer(base, add('nowhere', 'b0:c2:a'))).toBe(base);
    expect(circuitReducer(base, add('b0:c2:a', 'b0:c2:a'))).toBe(base);
    expect(circuitReducer(base, add('b0:c1:a', 'b0:c2:a'))).toBe(base);
    expect(circuitReducer(base, add('b0:c2:a', 'b0:c9:a'))).toBe(base);
  });

  it('lets two holes of one column both hold a wire', () => {
    const state = run([add('b0:c1:a', 'b0:c9:a'), add('b0:c1:b', 'b0:c10:a')]);
    expect(state.wires).toHaveLength(2);
  });

  it('knows which wire end holds a point', () => {
    const { wires } = run([add('b0:c1:a', 'b0:c9:a')]);
    expect(occupancy(wires).get('b0:c9:a')).toEqual({ kind: 'wire', wireId: 'w1', end: 'to' });
    expect(canConnect(wires, [], 'b0:c1:a', 'b0:c2:a')).toBe(false);
    expect(canConnect(wires, [], 'b0:c1:a', 'b0:c2:a', 'w1')).toBe(true);
  });
});

describe('circuit: editing wires', () => {
  const start = run([add('b0:c1:a', 'b0:c9:a')]);

  it('recolors and bends, and ignores a change that changes nothing', () => {
    const recolored = circuitReducer(start, { type: 'recolor', id: 'w1', color: 'blue' });
    expect(recolored.wires[0]?.color).toBe('blue');
    expect(circuitReducer(recolored, { type: 'recolor', id: 'w1', color: 'blue' })).toBe(recolored);
    const bent = circuitReducer(start, { type: 'bend', id: 'w1', bend: { x: 3, y: -8 } });
    expect(bent.wires[0]?.bend).toEqual({ x: 3, y: -8 });
    expect(circuitReducer(bent, { type: 'bend', id: 'w1', bend: { x: 3, y: -8 } })).toBe(bent);
  });

  it('moves one end to a free point only', () => {
    const two = run([add('b0:c20:a', 'b0:c25:a')], start);
    const moved = circuitReducer(two, { type: 'moveEnd', id: 'w1', end: 'to', point: 'b0:c12:c' });
    expect(moved.wires[0]?.to).toBe('b0:c12:c');
    // onto the end of the other wire, onto its own other end, and nowhere
    for (const point of ['b0:c25:a', 'b0:c1:a', 'nowhere']) {
      expect(circuitReducer(two, { type: 'moveEnd', id: 'w1', end: 'to', point })).toBe(two);
    }
  });

  it('removes a wire and unselects it', () => {
    const removed = circuitReducer(start, { type: 'remove', id: 'w1' });
    expect(removed.wires).toEqual([]);
    expect(removed.selected).toBeNull();
    expect(circuitReducer(removed, { type: 'remove', id: 'w1' })).toBe(removed);
  });

  it('selects a wire that exists and unselects with null', () => {
    const none = circuitReducer(start, { type: 'select', id: null });
    expect(none.selected).toBeNull();
    expect(circuitReducer(none, { type: 'select', id: 'w1' }).selected).toBe('w1');
    expect(circuitReducer(none, { type: 'select', id: 'w9' })).toBe(none);
  });
});

describe('circuit: undo and redo', () => {
  it('steps back and forward through every change', () => {
    const state = run([
      add('b0:c1:a', 'b0:c9:a'),
      { type: 'recolor', id: 'w1', color: 'blue' },
      { type: 'bend', id: 'w1', bend: { x: 4, y: 4 } },
    ]);
    const back = run([{ type: 'undo' }, { type: 'undo' }], state);
    expect(back.wires[0]).toMatchObject({ color: 'red', bend: { x: 0, y: 0 } });
    const forward = run([{ type: 'redo' }], back);
    expect(forward.wires[0]).toMatchObject({ color: 'blue', bend: { x: 0, y: 0 } });
    expect(run([{ type: 'undo' }, { type: 'undo' }, { type: 'undo' }], state).wires).toEqual([]);
  });

  it('does nothing when there is nothing to undo or redo', () => {
    expect(circuitReducer(initialCircuit, { type: 'undo' })).toBe(initialCircuit);
    expect(circuitReducer(initialCircuit, { type: 'redo' })).toBe(initialCircuit);
  });

  it('drops the redo list when a new change is made', () => {
    const state = run([add('b0:c1:a', 'b0:c9:a'), { type: 'undo' }]);
    expect(state.future).toHaveLength(1);
    expect(run([add('b0:c2:a', 'b0:c8:a')], state).future).toEqual([]);
  });

  it('does not reuse a wire id after an undo', () => {
    const state = run([add('b0:c1:a', 'b0:c9:a'), { type: 'undo' }, add('b0:c2:a', 'b0:c8:a')]);
    expect(state.wires.map((w) => w.id)).toEqual(['w2']);
  });

  it('unselects a wire that an undo removes, and keeps selection changes out of the history', () => {
    const state = run([add('b0:c1:a', 'b0:c9:a'), { type: 'select', id: null }]);
    expect(state.past).toHaveLength(1);
    expect(run([{ type: 'undo' }], state).selected).toBeNull();
    const selected = run([add('b0:c1:a', 'b0:c9:a'), add('b0:c2:a', 'b0:c8:a'), { type: 'undo' }]);
    expect(selected.selected).toBeNull();
  });

  it('keeps only the latest changes', () => {
    let state = run([add('b0:c1:a', 'b0:c9:a')]);
    for (let k = 0; k < HISTORY_LIMIT + 20; k++) {
      state = circuitReducer(state, { type: 'bend', id: 'w1', bend: { x: k + 1, y: 0 } });
    }
    expect(state.past).toHaveLength(HISTORY_LIMIT);
  });
});

describe('circuit: with the simulator', () => {
  const switches = Array.from({ length: 8 }, () => false);
  const sim = (state: CircuitState) => simulate({ wires: state.wires, ics: [], switches });

  it('shorts +5V and GND through a rail, and clears the short on undo', () => {
    const state = run([add('power:+5V:0', 'b0:r:top1:0'), add('power:GND:2', 'b0:r:top1:20')]);
    expect(sim(state).short).toBe(true);
    expect(sim(run([{ type: 'undo' }], state)).short).toBe(false);
  });

  it('does not short +5V and GND on the two halves of one rail', () => {
    const state = run([add('power:+5V:0', 'b0:r:top1:0'), add('power:GND:2', 'b0:r:top1:40')]);
    expect(sim(state).short).toBe(false);
  });

  it('does not short +5V and GND on separate rails', () => {
    const state = run([add('power:+5V:0', 'b0:r:top1:0'), add('power:GND:2', 'b0:r:top2:0')]);
    expect(sim(state).short).toBe(false);
  });

  it('warns about a supply that is only drawn once it is wired', () => {
    const state = run([add('power:-12V:1', 'b0:c1:a')]);
    expect(sim(state).warnings).toContainEqual({ kind: 'unsupportedSupply', socket: '-12V' });
  });
});
