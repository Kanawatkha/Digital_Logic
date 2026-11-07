import { describe, expect, it } from 'vitest';
import { pointPosition } from '../board/geometry';
import { PITCH } from '../board/layout';
import type { Occupant } from '../state/circuit';
import { canStartWire, findSnap, resolvePress } from './target';

const at = (id: string) => pointPosition(id)!;
const occupancy = (entries: Record<string, Occupant>) => new Map(Object.entries(entries));
const none = occupancy({});

/** An element that stands in for what the pointer landed on. */
function element(attribute: string, value: string): Element {
  const outer = document.createElement('div');
  const inner = document.createElement('span');
  outer.setAttribute(attribute, value);
  outer.appendChild(inner);
  return inner;
}

describe('resolvePress', () => {
  const hole = at('b0:c10:b');

  it('starts a new wire on a free hole', () => {
    const target = resolvePress({
      board: { x: hole.x + 2, y: hole.y },
      scale: 2,
      kind: 'mouse',
      occupancy: none,
      element: null,
    });
    expect(target).toMatchObject({ kind: 'new', point: { id: 'b0:c10:b' } });
  });

  it('pans on empty space', () => {
    expect(
      resolvePress({
        board: { x: 5, y: 5 },
        scale: 1,
        kind: 'mouse',
        occupancy: none,
        element: null,
      }),
    ).toBeNull();
  });

  it('grabs the end of a wire that sits in the hole', () => {
    const target = resolvePress({
      board: hole,
      scale: 2,
      kind: 'mouse',
      occupancy: occupancy({ 'b0:c10:b': { kind: 'wire', wireId: 'w1', end: 'to' } }),
      element: null,
    });
    expect(target).toEqual({ kind: 'end', wireId: 'w1', end: 'to', point: 'b0:c10:b' });
  });

  it('grabs a wire body away from the holes, but starts a wire from a hole right under the pointer', () => {
    const wire = element('data-wire-id', 'w4');
    const press = (dx: number, dy: number) =>
      resolvePress({
        board: { x: hole.x + dx, y: hole.y + dy },
        scale: 2,
        kind: 'mouse',
        occupancy: none,
        element: wire,
      });
    // 1.4 board px is 2.8 screen px from the hole center: right under the pointer
    expect(press(1, 1)).toMatchObject({ kind: 'new', overWire: 'w4', point: { id: 'b0:c10:b' } });
    // 5 board px away is 14 screen px, past the 7 px limit: the wire is grabbed
    expect(press(5, 5)).toEqual({ kind: 'body', wireId: 'w4' });
  });

  it('picks the handle before anything else', () => {
    const target = resolvePress({
      board: hole,
      scale: 2,
      kind: 'mouse',
      occupancy: occupancy({ 'b0:c10:b': { kind: 'wire', wireId: 'w1', end: 'to' } }),
      element: element('data-lab-handle', 'w2'),
    });
    expect(target).toEqual({ kind: 'handle', wireId: 'w2' });
  });

  it('does not start a wire when the board is too small to aim at, but still edits wires', () => {
    const small = {
      board: hole,
      scale: 0.2,
      kind: 'touch' as const,
      occupancy: none,
      element: null,
    };
    expect(resolvePress(small)).toBeNull();
    expect(resolvePress({ ...small, element: element('data-wire-id', 'w4') })).toEqual({
      kind: 'body',
      wireId: 'w4',
    });
  });

  it('reaches further for a finger than for a mouse', () => {
    // the middle of four holes, about 10.5 board px from each: past a mouse's reach, within a finger's
    const near = { x: hole.x + PITCH / 2, y: hole.y + PITCH / 2 };
    const press = (kind: 'mouse' | 'touch') =>
      resolvePress({ board: near, scale: 1.5, kind, occupancy: none, element: null });
    expect(press('mouse')).toBeNull();
    expect(press('touch')).not.toBeNull();
  });
});

describe('canStartWire', () => {
  it('needs more zoom for a finger than for a mouse', () => {
    expect(canStartWire(0.45, 'mouse')).toBe(true);
    expect(canStartWire(0.45, 'touch')).toBe(false);
    expect(canStartWire(10 / PITCH, 'touch')).toBe(true);
  });
});

describe('findSnap', () => {
  const hole = at('b0:c10:b');

  it('snaps to the nearest free point and skips taken ones', () => {
    const board = { x: hole.x + 3, y: hole.y };
    expect(findSnap(board, 2, 'mouse', () => false)?.id).toBe('b0:c10:b');
    // zoomed in, the neighbors are out of reach of the snap radius
    expect(findSnap(board, 4, 'mouse', (id) => id === 'b0:c10:b')).toBeNull();
    expect(findSnap(board, 0.5, 'mouse', (id) => id === 'b0:c10:b')?.id).not.toBe('b0:c10:b');
  });

  it('is more generous for a finger', () => {
    const board = { x: hole.x + PITCH / 2, y: hole.y + PITCH / 2 };
    expect(findSnap(board, 3, 'mouse', () => false)).toBeNull();
    expect(findSnap(board, 3, 'touch', () => false)).not.toBeNull();
  });
});

describe('resolvePress: chips and switches', () => {
  const leg = at('b0:c12:f');
  const taken = occupancy({ 'b0:c12:f': { kind: 'ic', icId: 'u1', pin: 2 } });

  it('grabs a chip by its body or by a leg', () => {
    const body = resolvePress({
      board: { x: leg.x, y: leg.y - 20 },
      scale: 2,
      kind: 'mouse',
      occupancy: taken,
      element: element('data-ic-id', 'u1'),
    });
    expect(body).toEqual({ kind: 'ic', icId: 'u1' });
    const byLeg = resolvePress({
      board: leg,
      scale: 2,
      kind: 'mouse',
      occupancy: taken,
      element: null,
    });
    expect(byLeg).toEqual({ kind: 'ic', icId: 'u1' });
  });

  it('prefers a wire end to the chip leg it shares a hole with, and a wire over a chip', () => {
    const wireOver = resolvePress({
      board: { x: leg.x, y: leg.y - 20 },
      scale: 2,
      kind: 'mouse',
      occupancy: taken,
      element: element('data-wire-id', 'w3'),
    });
    expect(wireOver).toEqual({ kind: 'body', wireId: 'w3' });
  });

  it('does not start a wire from a point that a chip leg holds', () => {
    const target = resolvePress({
      board: leg,
      scale: 2,
      kind: 'mouse',
      occupancy: taken,
      element: null,
    });
    expect(target?.kind).not.toBe('new');
  });

  it('presses a logic switch at any zoom, where a wire could not start', () => {
    const target = resolvePress({
      board: { x: 10, y: 10 },
      scale: 0.1,
      kind: 'touch',
      occupancy: none,
      element: element('data-lab-switch', '4'),
    });
    expect(target).toEqual({ kind: 'switch', index: 4 });
  });
});
