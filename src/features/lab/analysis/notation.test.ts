import { describe, expect, it } from 'vitest';
import { barDepth, notationText, parseNotation } from './notation';

describe('parseNotation', () => {
  it('turns a prime into a bar over the letter before it', () => {
    expect(parseNotation("A'B + AB'")).toEqual([
      { t: 'not', inner: [{ t: 'text', text: 'A' }] },
      { t: 'text', text: 'B + A' },
      { t: 'not', inner: [{ t: 'text', text: 'B' }] },
    ]);
  });

  it('puts one bar over a whole group, without its brackets', () => {
    const [bar, rest] = parseNotation("(A·B)'·A");
    expect(bar?.t).toBe('not');
    expect(notationText([bar!])).toBe("(A·B)'");
    expect(rest).toEqual({ t: 'text', text: '·A' });
  });

  it('keeps the brackets of a group that has no prime', () => {
    expect(parseNotation('(A + B)·C')).toEqual([{ t: 'text', text: '(A + B)·C' }]);
  });

  it('stacks bars: a bar over a group that has a bar inside', () => {
    const [node] = parseNotation("(A'·B)'");
    expect(barDepth(node!)).toBe(2);
    expect(barDepth(parseNotation("A'")[0]!)).toBe(1);
    expect(barDepth(parseNotation('AB')[0]!)).toBe(0);
    // two primes in a row are two bars
    expect(barDepth(parseNotation("A''")[0]!)).toBe(2);
  });

  it('leaves text without a prime as it is, and reads the constants', () => {
    expect(parseNotation('0')).toEqual([{ t: 'text', text: '0' }]);
    expect(parseNotation('LED1 = A·B + C')).toEqual([{ t: 'text', text: 'LED1 = A·B + C' }]);
    expect(parseNotation('')).toEqual([]);
  });

  it('gives back the primes for a screen reader', () => {
    for (const text of ["A'", "A'B + AB'", "(A·B)'·A", "(A'·B)'", "((A + B)')'", 'A·B + C']) {
      expect(notationText(parseNotation(text))).toBe(text);
    }
  });

  it('does not fail on a prime with nothing before it, or a bracket never closed', () => {
    expect(() => parseNotation("'A")).not.toThrow();
    expect(() => parseNotation('(A·B')).not.toThrow();
    expect(() => parseNotation("A)'")).not.toThrow();
  });
});
