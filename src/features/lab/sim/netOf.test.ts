import { describe, expect, it } from 'vitest';
import type { PlacedIc } from './evaluate';
import { icPinPoints } from './ics';
import { netOf } from './netOf';

const wire = (id: string, from: string, to: string) => ({ id, from, to });
const ic: PlacedIc = { id: 'u1', type: '7408', board: 0, col: 11 };
const pins = icPinPoints(0, 11);

describe('what is on a net', () => {
  it('is null for a point that is not on the board', () => {
    expect(netOf({ wires: [], ics: [] }, 'nowhere')).toBeNull();
  });

  it('is the point alone when nothing is wired to it', () => {
    expect(netOf({ wires: [], ics: [] }, 'b0:c1:a')).toEqual({ wireIds: [], points: ['b0:c1:a'] });
  });

  it('follows a wire through the joins of the board, and finds the pins of a chip on the way', () => {
    const wires = [
      // switch 1 to the strip of pin 1, and from the strip of pin 2 to LED 1: two nets
      wire('w1', 'sw0:0', 'b0:c11:j'),
      wire('w2', 'b0:c12:j', 'led1:0'),
    ];
    const net = netOf({ wires, ics: [ic] }, 'sw0:1')!;
    // sw0:1 is on the same switch as sw0:0
    expect(net.wireIds).toEqual(['w1']);
    expect(new Set(net.points)).toEqual(new Set(['sw0:1', 'sw0:0', 'b0:c11:j', pins[1]]));
    const other = netOf({ wires, ics: [ic] }, 'led1:1')!;
    expect(other.wireIds).toEqual(['w2']);
    expect(other.points).toContain(pins[2]);
    expect(other.points).not.toContain(pins[1]);
  });

  it('joins nets through several wires', () => {
    const wires = [
      wire('w1', 'power:+5V:0', 'b0:r:top1:3'),
      wire('w2', 'b0:r:top1:10', 'b0:c11:a'),
      // the other half of the rail is not the same net
      wire('w3', 'b0:r:top1:40', 'b0:c30:a'),
    ];
    const net = netOf({ wires, ics: [ic] }, 'power:+5V:2')!;
    expect(net.wireIds).toEqual(['w1', 'w2']);
    // the 7408's pin 14 is above column 11
    expect(net.points).toContain(pins[14]);
    expect(net.points).not.toContain('b0:c30:a');
  });
});
