import { describe, expect, it } from 'vitest';
import type { PlacedIc, Warning } from '../sim/evaluate';
import { icNotes } from '../sim/notes';
import { warningMessages } from './warningMessages';

const ics: PlacedIc[] = [
  { id: 'u1', type: '7408', board: 0, col: 11 },
  { id: 'u2', type: '7432', board: 1, col: 4 },
];

describe('warning messages', () => {
  it('says nothing when there is nothing to say', () => {
    expect(warningMessages([], ics)).toEqual([]);
  });

  it('marks a short and a conflict as severe, the rest as hints', () => {
    const warnings: Warning[] = [
      { kind: 'short' },
      { kind: 'conflict', net: 'a', drivers: ['+5V', 'u1 gate 1'] },
      { kind: 'conflict', net: 'b', drivers: ['GND', 'u1 gate 2'] },
      { kind: 'unsupportedSupply', socket: '+12V' },
    ];
    const messages = warningMessages(warnings, ics);
    // one line for all conflicts
    expect(messages.filter((m) => m.severe)).toHaveLength(2);
    expect(messages.filter((m) => !m.severe)).toHaveLength(1);
    expect(messages.find((m) => !m.severe)?.text).toContain('+12V');
  });

  it('names a chip by its type and place, and joins its loose inputs into one line', () => {
    const warnings: Warning[] = [
      { kind: 'unpowered', ic: 'u2' },
      { kind: 'floatingInput', ic: 'u1', gate: 1, pin: 2 },
      { kind: 'floatingInput', ic: 'u1', gate: 2, pin: 5 },
      { kind: 'floatingInput', ic: 'u1', gate: 1, pin: 2 },
    ];
    const texts = warningMessages(warnings, ics).map((m) => m.text);
    expect(texts).toHaveLength(2);
    expect(texts[0]).toContain('7432');
    expect(texts[0]).toContain('2 #4');
    expect(texts[1]).toContain('7408');
    expect(texts[1]).toContain('2, 5');
  });

  it('reports a loop as severe and ignores warnings a student cannot cause', () => {
    const warnings: Warning[] = [
      { kind: 'unstable', ics: ['u1'] },
      { kind: 'overlap', ics: ['u1', 'u2'] },
      { kind: 'badPoint', id: 'x' },
    ];
    const messages = warningMessages(warnings, ics);
    expect(messages).toHaveLength(1);
    expect(messages[0]?.severe).toBe(true);
  });
});

describe('chip notes', () => {
  it('picks the most important hint for each chip', () => {
    const notes = icNotes([
      { kind: 'floatingInput', ic: 'u1', gate: 1, pin: 2 },
      { kind: 'unpowered', ic: 'u1' },
      { kind: 'floatingInput', ic: 'u2', gate: 1, pin: 1 },
      { kind: 'unstable', ics: ['u2', 'u3'] },
      { kind: 'short' },
    ]);
    expect(notes).toEqual({ u1: 'unpowered', u2: 'unstable', u3: 'unstable' });
  });
});
