import { describe, expect, it } from 'vitest';
import { icSlots } from '../board/geometry';
import { simulate } from '../sim/evaluate';
import {
  canConnect,
  canPlace,
  circuitReducer,
  findFreeSlot,
  initialCircuit,
  occupancy,
  type CircuitAction,
  type CircuitState,
} from './circuit';

const run = (actions: CircuitAction[], from: CircuitState = initialCircuit) =>
  actions.reduce(circuitReducer, from);

const place = (icType: '7404' | '7408' | '7432' | '7400' | '7402', col: number, board = 0) =>
  ({ type: 'placeIc', icType, board, col }) satisfies CircuitAction;

const wire = (from: string, to: string) =>
  ({ type: 'add', from, to, color: 'red' }) satisfies CircuitAction;

describe('circuit: placing chips', () => {
  it('places a chip, selects it, and gives it an id that does not clash with wires', () => {
    const state = run([wire('b0:c1:a', 'b0:c2:a'), place('7408', 10)]);
    expect(state.ics).toEqual([{ id: 'u2', type: '7408', board: 0, col: 10 }]);
    expect(state.selected).toBe('u2');
  });

  it('refuses a chip that does not fit on the board or overlaps another', () => {
    const base = run([place('7408', 10)]);
    expect(circuitReducer(base, place('7432', 55))).toBe(base);
    expect(circuitReducer(base, place('7432', 0))).toBe(base);
    expect(circuitReducer(base, place('7432', 2, 3))).toBe(base);
    // overlapping columns 10 to 16, and just past them
    expect(circuitReducer(base, place('7432', 14))).toBe(base);
    expect(circuitReducer(base, place('7432', 4))).toBe(base);
    expect(run([place('7432', 17)], base).ics).toHaveLength(2);
    expect(run([place('7432', 3)], base).ics).toHaveLength(2);
  });

  it('lets two chips sit on different breadboards in the same columns', () => {
    expect(run([place('7408', 10, 0), place('7432', 10, 1)]).ics).toHaveLength(2);
  });

  it('refuses a chip whose leg would land in a hole that holds a wire', () => {
    const state = run([wire('b0:c12:e', 'b0:c30:a')]);
    expect(canPlace(state.wires, state.ics, 0, 10)).toBe(false);
    expect(circuitReducer(state, place('7408', 10))).toBe(state);
    // a hole of the same column on the other side of the leg is free: the wire only needs row a to d
    const other = run([wire('b0:c12:d', 'b0:c30:a')]);
    expect(canPlace(other.wires, other.ics, 0, 10)).toBe(true);
  });

  it('keeps wires out of the holes under a chip legs, and lets them into the rest of the column', () => {
    const state = run([place('7408', 10)]);
    // pin 1 is at column 10 row f, pin 14 at column 10 row e
    expect(canConnect(state.wires, state.ics, 'b0:c10:f', 'b0:c30:a')).toBe(false);
    expect(canConnect(state.wires, state.ics, 'b0:c10:e', 'b0:c30:a')).toBe(false);
    expect(canConnect(state.wires, state.ics, 'b0:c10:d', 'b0:c30:a')).toBe(true);
    expect(canConnect(state.wires, state.ics, 'b0:c10:g', 'b0:c30:a')).toBe(true);
    expect(circuitReducer(state, wire('b0:c10:f', 'b0:c30:a'))).toBe(state);
    expect(occupancy(state.wires, state.ics).get('b0:c16:f')).toEqual({
      kind: 'ic',
      icId: 'u1',
      pin: 7,
    });
  });

  it('refuses to move a wire end onto a chip leg', () => {
    const state = run([place('7408', 10), wire('b0:c30:a', 'b0:c31:a')]);
    expect(circuitReducer(state, { type: 'moveEnd', id: 'w2', end: 'to', point: 'b0:c11:f' })).toBe(
      state,
    );
  });
});

describe('circuit: moving and removing chips', () => {
  const start = run([place('7408', 10)]);

  it('moves a chip to a free place and selects it', () => {
    const moved = circuitReducer(start, { type: 'moveIc', id: 'u1', board: 1, col: 30 });
    expect(moved.ics).toEqual([{ id: 'u1', type: '7408', board: 1, col: 30 }]);
    expect(moved.selected).toBe('u1');
  });

  it('lets a chip slide over its own old place, and not onto another chip', () => {
    expect(circuitReducer(start, { type: 'moveIc', id: 'u1', board: 0, col: 12 }).ics[0]?.col).toBe(
      12,
    );
    const two = run([place('7432', 30)], start);
    expect(circuitReducer(two, { type: 'moveIc', id: 'u1', board: 0, col: 28 })).toBe(two);
    expect(circuitReducer(start, { type: 'moveIc', id: 'u1', board: 0, col: 10 })).toBe(start);
    expect(circuitReducer(start, { type: 'moveIc', id: 'u9', board: 0, col: 20 })).toBe(start);
  });

  it('removes a chip by id and unselects it', () => {
    const removed = circuitReducer(start, { type: 'remove', id: 'u1' });
    expect(removed.ics).toEqual([]);
    expect(removed.selected).toBeNull();
  });

  it('undoes and redoes placing, moving and removing', () => {
    const state = run([
      place('7408', 10),
      { type: 'moveIc', id: 'u1', board: 0, col: 20 },
      { type: 'remove', id: 'u1' },
    ]);
    const back1 = run([{ type: 'undo' }], state);
    expect(back1.ics[0]?.col).toBe(20);
    const back2 = run([{ type: 'undo' }], back1);
    expect(back2.ics[0]?.col).toBe(10);
    expect(run([{ type: 'redo' }, { type: 'redo' }], back2).ics).toEqual([]);
  });

  it('unselects a chip that an undo takes away', () => {
    const state = run([place('7408', 10), { type: 'undo' }]);
    expect(state.ics).toEqual([]);
    expect(state.selected).toBeNull();
  });
});

describe('circuit: switches and clearing', () => {
  it('flips a switch and keeps it out of the history', () => {
    const state = run([wire('b0:c1:a', 'b0:c2:a'), { type: 'toggleSwitch', index: 3 }]);
    expect(state.switches[3]).toBe(true);
    expect(state.past).toHaveLength(1);
    const undone = run([{ type: 'undo' }], state);
    expect(undone.wires).toEqual([]);
    expect(undone.switches[3]).toBe(true);
    expect(run([{ type: 'toggleSwitch', index: 3 }], state).switches[3]).toBe(false);
  });

  it('sets several switches at once, leaves the others, and keeps them out of the history', () => {
    const start = run([{ type: 'toggleSwitch', index: 5 }]);
    const state = run(
      [
        {
          type: 'setSwitches',
          changes: [
            { index: 0, up: true },
            { index: 1, up: false },
            { index: 5, up: false },
            { index: 9, up: true },
            { index: -1, up: true },
          ],
        },
      ],
      start,
    );
    expect(state.switches.map(Number)).toEqual([1, 0, 0, 0, 0, 0, 0, 0]);
    expect(state.past).toBe(start.past);
    // nothing to change: the same state comes back, so nothing is saved or redrawn
    const same = [{ index: 0, up: true }];
    expect(run([{ type: 'setSwitches', changes: same }], state)).toBe(state);
    expect(run([{ type: 'setSwitches', changes: [] }], state)).toBe(state);
  });

  it('ignores a switch that does not exist', () => {
    for (const index of [-1, 8, 1.5]) {
      expect(circuitReducer(initialCircuit, { type: 'toggleSwitch', index })).toBe(initialCircuit);
    }
  });

  it('clears every wire and chip at once, which undo brings back, and leaves the switches', () => {
    const state = run([
      place('7408', 10),
      wire('b0:c1:a', 'b0:c2:a'),
      { type: 'toggleSwitch', index: 0 },
      { type: 'clear' },
    ]);
    expect(state.wires).toEqual([]);
    expect(state.ics).toEqual([]);
    expect(state.switches[0]).toBe(true);
    const back = run([{ type: 'undo' }], state);
    expect(back.wires).toHaveLength(1);
    expect(back.ics).toHaveLength(1);
    expect(circuitReducer(initialCircuit, { type: 'clear' })).toBe(initialCircuit);
  });
});

describe('finding a free place for a chip', () => {
  it('takes the free place nearest the middle of the view, and skips taken ones', () => {
    const slots = icSlots();
    const first = findFreeSlot([], [], slots, { x: 300, y: 400 });
    expect(first).not.toBeNull();
    const state = run([place('7408', first?.col ?? 1, first?.board ?? 0)]);
    const next = findFreeSlot(state.wires, state.ics, slots, { x: 300, y: 400 });
    expect(next).not.toEqual(first);
    expect(canPlace(state.wires, state.ics, next?.board ?? 0, next?.col ?? 1)).toBe(true);
  });

  it('returns null when nothing fits', () => {
    expect(findFreeSlot([], [], [], { x: 0, y: 0 })).toBeNull();
  });
});

describe('circuit: a lab circuit through the reducer and the simulator', () => {
  /** Y = (A AND B) OR C with a 7408 and a 7432, as a student wires it. */
  function build() {
    return run([
      place('7408', 11),
      place('7432', 25),
      // power: +5V to pin 14 of both, GND to pin 7 of both (rows a to d and g to j reach the legs)
      wire('power:+5V:0', 'b0:c11:b'),
      wire('power:+5V:1', 'b0:c25:b'),
      wire('power:GND:0', 'b0:c17:i'),
      wire('power:GND:1', 'b0:c31:i'),
      // inputs A and B into the AND gate, its output into the OR gate with C
      wire('sw0:0', 'b0:c11:i'),
      wire('sw1:0', 'b0:c12:i'),
      wire('b0:c13:h', 'b0:c25:h'),
      wire('sw2:0', 'b0:c26:i'),
      wire('b0:c27:h', 'led1:0'),
    ]);
  }

  it('computes every row of the truth table', () => {
    const state = build();
    expect(state.wires).toHaveLength(9);
    for (let n = 0; n < 8; n++) {
      const [A, B, C] = [Boolean(n & 4), Boolean(n & 2), Boolean(n & 1)];
      const switches = [A, B, C, false, false, false, false, false];
      const result = simulate({ wires: state.wires, ics: state.ics, switches });
      expect(result.leds[0], `A=${A} B=${B} C=${C}`).toBe((A && B) || C);
      expect(result.warnings).toEqual([]);
    }
  });
});

describe('circuit: arranging the wires', () => {
  const bends = (state: CircuitState) => state.wires.map((w) => w.bend);

  it('sets the bend of every wire in one step, so one undo brings them all back', () => {
    const start = run([wire('b0:c1:a', 'b0:c9:a'), wire('b0:c2:a', 'b0:c10:a')]);
    const next = circuitReducer(start, {
      type: 'arrange',
      bends: new Map([
        ['w1', { x: 0, y: -20 }],
        ['w2', { x: 0, y: 20 }],
      ]),
    });
    expect(bends(next)).toEqual([
      { x: 0, y: -20 },
      { x: 0, y: 20 },
    ]);
    expect(next.past).toHaveLength(start.past.length + 1);
    // where the wires go is untouched
    expect(next.wires.map((w) => [w.from, w.to])).toEqual(start.wires.map((w) => [w.from, w.to]));
    const undone = circuitReducer(next, { type: 'undo' });
    expect(bends(undone)).toEqual([
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ]);
  });

  it('does nothing when no wire would change, and ignores wires it does not know', () => {
    const start = run([wire('b0:c1:a', 'b0:c9:a')]);
    const same = new Map([['w1', { x: 0, y: 0 }]]);
    expect(circuitReducer(start, { type: 'arrange', bends: same })).toBe(start);
    expect(
      circuitReducer(start, { type: 'arrange', bends: new Map([['nope', { x: 5, y: 5 }]]) }),
    ).toBe(start);
  });

  it('keeps the simulation as it was', () => {
    const start = run([place('7408', 10), wire('power:+5V:0', 'b0:c10:b')]);
    const before = simulate(start);
    const next = circuitReducer(start, {
      type: 'arrange',
      bends: new Map([['w2', { x: 12, y: 30 }]]),
    });
    const after = simulate(next);
    expect(after.leds).toEqual(before.leds);
    expect(after.warnings).toEqual(before.warnings);
    expect(after.short).toBe(before.short);
  });
});

describe('circuit: painting the wires', () => {
  const colors = (state: CircuitState) => state.wires.map((w) => w.color);

  it('sets the color of every wire in one step, so one undo brings them all back', () => {
    const start = run([wire('b0:c1:a', 'b0:c9:a'), wire('b0:c2:a', 'b0:c10:a')]);
    const next = circuitReducer(start, {
      type: 'paint',
      colors: new Map([
        ['w1', 'black'],
        ['w2', 'blue'],
      ]),
    });
    expect(colors(next)).toEqual(['black', 'blue']);
    expect(next.past).toHaveLength(start.past.length + 1);
    // where the wires go and how they bend is untouched
    expect(next.wires.map((w) => [w.from, w.to, w.bend])).toEqual(
      start.wires.map((w) => [w.from, w.to, w.bend]),
    );
    expect(colors(circuitReducer(next, { type: 'undo' }))).toEqual(['red', 'red']);
  });

  it('does nothing when no wire would change, and ignores wires it does not know', () => {
    const start = run([wire('b0:c1:a', 'b0:c9:a')]);
    expect(circuitReducer(start, { type: 'paint', colors: new Map([['w1', 'red']]) })).toBe(start);
    expect(circuitReducer(start, { type: 'paint', colors: new Map([['nope', 'blue']]) })).toBe(
      start,
    );
  });

  it('keeps the simulation as it was', () => {
    const start = run([place('7408', 10), wire('power:+5V:0', 'b0:c10:b')]);
    const before = simulate(start);
    const next = circuitReducer(start, { type: 'paint', colors: new Map([['w2', 'green']]) });
    expect(simulate(next).leds).toEqual(before.leds);
    expect(simulate(next).warnings).toEqual(before.warnings);
  });
});
