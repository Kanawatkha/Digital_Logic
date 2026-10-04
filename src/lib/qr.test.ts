import { describe, expect, it } from 'vitest';
import { QR_MAX_BYTES, formatBits, qrMatrix } from './qr';

const SITE = 'https://kanawatkha.github.io/Digital_Logic/';

describe('qrMatrix', () => {
  it('uses the right size for the data length (version 1 to 6)', () => {
    expect(qrMatrix('hi')).toHaveLength(21);
    expect(qrMatrix('A'.repeat(26))).toHaveLength(25);
    expect(qrMatrix(SITE)).toHaveLength(33);
    expect(qrMatrix('E'.repeat(QR_MAX_BYTES))).toHaveLength(41);
  });

  it('draws the three finder patterns and the timing lines', () => {
    const m = qrMatrix(SITE);
    const n = m.length;
    for (const [r, c] of [
      [0, 0],
      [0, n - 7],
      [n - 7, 0],
    ]) {
      expect(m[r][c] && m[r][c + 6] && m[r + 6][c] && m[r + 6][c + 6]).toBe(true);
      expect(m[r + 1][c + 1]).toBe(false);
      expect(m[r + 3][c + 3]).toBe(true);
    }
    for (let i = 8; i < n - 8; i++) expect(m[6][i]).toBe(i % 2 === 0);
  });

  it('is deterministic and rejects text that does not fit', () => {
    expect(qrMatrix(SITE)).toEqual(qrMatrix(SITE));
    expect(() => qrMatrix('x'.repeat(QR_MAX_BYTES + 1))).toThrow();
  });

  it('matches the matrix that a real QR reader decoded as the site link', () => {
    expect(qrMatrix(SITE).map((row) => row.map((b) => (b ? '#' : '.')).join(''))).toMatchSnapshot();
  });
});

describe('formatBits', () => {
  it('gives the standard format string for level M', () => {
    expect(formatBits(0).toString(2).padStart(15, '0')).toBe('101010000010010');
    expect(formatBits(5).toString(2).padStart(15, '0')).toBe('100000011001110');
  });
});
