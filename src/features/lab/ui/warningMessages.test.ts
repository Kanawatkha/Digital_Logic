import { describe, expect, it } from 'vitest';
import type { PlacedIc, Warning } from '../sim/evaluate';
import { icNotes } from '../sim/notes';
import { warningMessages } from './warningMessages';

const ics: PlacedIc[] = [
  { id: 'u1', type: '7408', board: 0, col: 11 },
  { id: 'u2', type: '7432', board: 1, col: 4 },
];

const both = { missing: ['vcc', 'gnd'] as ('vcc' | 'gnd')[], railSplit: false };

describe('warning messages', () => {
  it('says nothing when there is nothing to say', () => {
    expect(warningMessages([], ics)).toEqual([]);
  });

  it('marks a short and a conflict as severe, the rest as warnings', () => {
    const warnings: Warning[] = [
      { kind: 'short' },
      {
        kind: 'conflict',
        net: 'a',
        drivers: [
          { kind: 'supply', name: '+5V', at: 'power:+5V:0' },
          { kind: 'gate', ic: 'u1', gate: 1, at: 'b0:c13:e' },
        ],
      },
      { kind: 'unsupportedSupply', socket: '+12V' },
    ];
    const messages = warningMessages(warnings, ics);
    expect(messages.filter((m) => m.level === 'severe')).toHaveLength(2);
    expect(messages.filter((m) => m.level === 'warn')).toHaveLength(1);
    expect(messages.find((m) => m.level === 'warn')?.text).toContain('+12V');
  });

  it('names what collides in a conflict and points at the chip', () => {
    const [message] = warningMessages(
      [
        {
          kind: 'conflict',
          net: 'a',
          drivers: [
            { kind: 'switch', index: 2, at: 'sw2:0' },
            { kind: 'gate', ic: 'u1', gate: 2, at: 'b0:c13:e' },
          ],
        },
      ],
      ics,
    );
    expect(message?.text).toContain('สวิตช์ 3');
    expect(message?.text).toContain('7408');
    expect(message?.text).toContain('เกต 2');
    expect(message?.target).toEqual({ kind: 'ic', id: 'u1' });
  });

  it('names a chip by its type and place, and joins its loose inputs into one line', () => {
    const warnings: Warning[] = [
      { kind: 'unpowered', ic: 'u2', ...both },
      { kind: 'floatingInput', ic: 'u1', gate: 1, pin: 2 },
      { kind: 'floatingInput', ic: 'u1', gate: 2, pin: 5 },
      { kind: 'floatingInput', ic: 'u1', gate: 1, pin: 2 },
    ];
    const messages = warningMessages(warnings, ics);
    const texts = messages.map((m) => m.text);
    expect(texts).toHaveLength(2);
    expect(texts[0]).toContain('7432');
    expect(texts[0]).toContain('2 #4');
    expect(texts[1]).toContain('7408');
    expect(texts[1]).toContain('2, 5');
    expect(messages.map((m) => m.target)).toEqual([
      { kind: 'ic', id: 'u2' },
      { kind: 'ic', id: 'u1' },
    ]);
  });

  it('says which supply pin of a chip is missing, and when the rail is split', () => {
    const text = (missing: ('vcc' | 'gnd')[], railSplit = false) =>
      warningMessages([{ kind: 'unpowered', ic: 'u1', missing, railSplit }], ics)[0]?.text ?? '';
    expect(text(['vcc', 'gnd'])).toContain('ต่อขา 14 เข้า +5V และขา 7 เข้า GND');
    expect(text(['vcc'])).toContain('ขา 14 ยังไม่ได้ต่อเข้า +5V');
    expect(text(['gnd'])).toContain('ขา 7 ยังไม่ได้ต่อเข้า GND');
    expect(text(['vcc'])).not.toContain('รางไฟแบ่งเป็นสองท่อน');
    expect(text(['vcc'], true)).toContain('รางไฟแบ่งเป็นสองท่อน');
  });

  it('reports a chip with its power the wrong way round as severe', () => {
    const [message] = warningMessages([{ kind: 'reversed', ic: 'u1' }], ics);
    expect(message?.level).toBe('severe');
    expect(message?.text).toContain('ไฟกลับขั้ว');
  });

  it('reports a loop as severe and ignores warnings a student cannot cause', () => {
    const warnings: Warning[] = [
      { kind: 'unstable', ics: ['u1'] },
      { kind: 'overlap', ics: ['u1', 'u2'] },
      { kind: 'badPoint', id: 'x' },
    ];
    const messages = warningMessages(warnings, ics);
    expect(messages).toHaveLength(1);
    expect(messages[0]?.level).toBe('severe');
  });

  it('keeps suggestions about the wiring apart: soft, and one line for all LEDs or wires', () => {
    const warnings: Warning[] = [
      { kind: 'ledUndriven', led: 1 },
      { kind: 'ledUndriven', led: 4 },
      { kind: 'redundantWire', from: 'b0:c1:a', to: 'b0:c1:b' },
      { kind: 'redundantWire', from: 'b0:c2:a', to: 'b0:c2:b' },
      { kind: 'outputUnused', ic: 'u1', gates: [2, 3] },
      { kind: 'noOutput' },
    ];
    const messages = warningMessages(warnings, ics);
    expect(messages).toHaveLength(4);
    expect(messages.every((m) => m.soft)).toBe(true);
    const byKind = Object.fromEntries(messages.map((m) => [m.kind, m]));
    expect(byKind.ledUndriven?.text).toContain('LED 1, 4');
    expect(byKind.ledUndriven?.level).toBe('warn');
    expect(byKind.redundantWire?.text).toContain('2');
    expect(byKind.redundantWire?.target).toEqual({ kind: 'point', id: 'b0:c1:a' });
    expect(byKind.outputUnused?.level).toBe('hint');
    expect(byKind.outputUnused?.text).toContain('2, 3');
    expect(byKind.noOutput?.level).toBe('hint');
    expect(byKind.noOutput?.target).toBeUndefined();
  });

  it('does not hold back a fault that the student must see at once', () => {
    const warnings: Warning[] = [
      { kind: 'short' },
      { kind: 'unpowered', ic: 'u1', ...both },
      { kind: 'floatingInput', ic: 'u1', gate: 1, pin: 1 },
    ];
    expect(warningMessages(warnings, ics).every((m) => !m.soft)).toBe(true);
  });
});

describe('chip notes', () => {
  it('picks the most important hint for each chip', () => {
    const notes = icNotes([
      { kind: 'floatingInput', ic: 'u1', gate: 1, pin: 2 },
      { kind: 'unpowered', ic: 'u1', ...both },
      { kind: 'floatingInput', ic: 'u2', gate: 1, pin: 1 },
      { kind: 'unstable', ics: ['u2', 'u3'] },
      { kind: 'reversed', ic: 'u3' },
      { kind: 'short' },
    ]);
    expect(notes).toEqual({ u1: 'unpowered', u2: 'unstable', u3: 'reversed' });
  });
});
