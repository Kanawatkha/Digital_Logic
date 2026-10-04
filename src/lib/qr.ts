/**
 * Minimal QR Code encoder: byte mode, error correction level M, versions 1 to 6 (up to 106
 * bytes). Enough for a short link, with no dependency. Follows ISO/IEC 18004; the output is
 * checked by decoding it with a real QR reader (see tests/qr.test.ts for the structural checks).
 */

/** Per version: error correction codewords per block and the blocks as [count, data codewords]. */
const LEVEL_M: { ec: number; blocks: [number, number][] }[] = [
  { ec: 10, blocks: [[1, 16]] },
  { ec: 16, blocks: [[1, 28]] },
  { ec: 26, blocks: [[1, 44]] },
  { ec: 18, blocks: [[2, 32]] },
  { ec: 24, blocks: [[2, 43]] },
  { ec: 16, blocks: [[4, 27]] },
];

const ALIGNMENT: number[][] = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34]];

export const QR_MAX_BYTES = 106;

const EXP = new Array<number>(512);
const LOG = new Array<number>(256);
(() => {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP[i] = x;
    LOG[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
})();

const mul = (a: number, b: number) => (a === 0 || b === 0 ? 0 : EXP[LOG[a] + LOG[b]]);

function generator(degree: number): number[] {
  let poly = [1];
  for (let i = 0; i < degree; i++) {
    const next = new Array<number>(poly.length + 1).fill(0);
    poly.forEach((coef, j) => {
      next[j] ^= coef;
      next[j + 1] ^= mul(coef, EXP[i]);
    });
    poly = next;
  }
  return poly;
}

function reedSolomon(data: number[], degree: number): number[] {
  const gen = generator(degree);
  const rem = new Array<number>(degree).fill(0);
  for (const byte of data) {
    const factor = byte ^ rem.shift()!;
    rem.push(0);
    for (let i = 0; i < degree; i++) rem[i] ^= mul(gen[i + 1], factor);
  }
  return rem;
}

function dataCodewords(bytes: Uint8Array, version: number): number[] {
  const capacity = LEVEL_M[version - 1].blocks.reduce((sum, [n, d]) => sum + n * d, 0);
  const bits: number[] = [];
  const push = (value: number, length: number) => {
    for (let i = length - 1; i >= 0; i--) bits.push((value >>> i) & 1);
  };
  push(0b0100, 4);
  push(bytes.length, 8);
  bytes.forEach((b) => push(b, 8));
  push(0, Math.min(4, capacity * 8 - bits.length));
  while (bits.length % 8 !== 0) bits.push(0);
  const words: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    words.push(parseInt(bits.slice(i, i + 8).join(''), 2));
  }
  for (let pad = 0xec; words.length < capacity; pad ^= 0xec ^ 0x11) words.push(pad);
  return words;
}

function allCodewords(words: number[], version: number): number[] {
  const { ec, blocks } = LEVEL_M[version - 1];
  const data: number[][] = [];
  let at = 0;
  for (const [count, size] of blocks) {
    for (let i = 0; i < count; i++) {
      data.push(words.slice(at, at + size));
      at += size;
    }
  }
  const parity = data.map((block) => reedSolomon(block, ec));
  const out: number[] = [];
  const longest = Math.max(...data.map((b) => b.length));
  for (let i = 0; i < longest; i++) data.forEach((block) => i < block.length && out.push(block[i]));
  for (let i = 0; i < ec; i++) parity.forEach((block) => out.push(block[i]));
  return out;
}

type Grid = boolean[][];

const MASKS: ((r: number, c: number) => boolean)[] = [
  (r, c) => (r + c) % 2 === 0,
  (r) => r % 2 === 0,
  (_, c) => c % 3 === 0,
  (r, c) => (r + c) % 3 === 0,
  (r, c) => (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0,
  (r, c) => ((r * c) % 2) + ((r * c) % 3) === 0,
  (r, c) => (((r * c) % 2) + ((r * c) % 3)) % 2 === 0,
  (r, c) => (((r + c) % 2) + ((r * c) % 3)) % 2 === 0,
];

/** 15 format bits for level M and the given mask (BCH code, then the standard XOR mask). */
export function formatBits(mask: number): number {
  const data = mask; // level M is 00
  let rem = data;
  for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
  return ((data << 10) | rem) ^ 0x5412;
}

function penalty(grid: Grid): number {
  const size = grid.length;
  let score = 0;
  const scanLine = (get: (i: number) => boolean) => {
    let run = 1;
    for (let i = 1; i < size; i++) {
      if (get(i) === get(i - 1)) {
        run++;
        if (run === 5) score += 3;
        else if (run > 5) score += 1;
      } else run = 1;
    }
    let pattern = 0;
    for (let i = 0; i < size; i++) {
      pattern = ((pattern << 1) | (get(i) ? 1 : 0)) & 0x7ff;
      if (i >= 10 && (pattern === 0b10111010000 || pattern === 0b00001011101)) score += 40;
    }
  };
  for (let a = 0; a < size; a++) {
    scanLine((i) => grid[a][i]);
    scanLine((i) => grid[i][a]);
  }
  for (let r = 0; r < size - 1; r++) {
    for (let c = 0; c < size - 1; c++) {
      const v = grid[r][c];
      if (v === grid[r][c + 1] && v === grid[r + 1][c] && v === grid[r + 1][c + 1]) score += 3;
    }
  }
  const dark = grid.reduce((sum, row) => sum + row.filter(Boolean).length, 0);
  score += 10 * Math.floor(Math.abs((dark * 100) / (size * size) - 50) / 5);
  return score;
}

function build(codewords: number[], version: number, mask: number): Grid {
  const size = 17 + 4 * version;
  const grid: Grid = Array.from({ length: size }, () => new Array<boolean>(size).fill(false));
  const fixed: boolean[][] = Array.from({ length: size }, () =>
    new Array<boolean>(size).fill(false),
  );
  const setFixed = (x: number, y: number, dark: boolean) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    grid[y][x] = dark;
    fixed[y][x] = true;
  };

  for (let i = 0; i < size; i++) {
    setFixed(6, i, i % 2 === 0);
    setFixed(i, 6, i % 2 === 0);
  }
  const finder = (cx: number, cy: number) => {
    for (let dy = -4; dy <= 4; dy++) {
      for (let dx = -4; dx <= 4; dx++) {
        const ring = Math.max(Math.abs(dx), Math.abs(dy));
        setFixed(cx + dx, cy + dy, ring !== 2 && ring !== 4);
      }
    }
  };
  finder(3, 3);
  finder(size - 4, 3);
  finder(3, size - 4);

  const centers = ALIGNMENT[version - 1];
  centers.forEach((cy, i) => {
    centers.forEach((cx, j) => {
      const atCorner =
        (i === 0 && j === 0) ||
        (i === 0 && j === centers.length - 1) ||
        (i === centers.length - 1 && j === 0);
      if (atCorner) return;
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          setFixed(cx + dx, cy + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
        }
      }
    });
  });

  const bits = formatBits(mask);
  const bit = (i: number) => ((bits >>> i) & 1) !== 0;
  for (let i = 0; i <= 5; i++) setFixed(8, i, bit(i));
  setFixed(8, 7, bit(6));
  setFixed(8, 8, bit(7));
  setFixed(7, 8, bit(8));
  for (let i = 9; i < 15; i++) setFixed(14 - i, 8, bit(i));
  for (let i = 0; i < 8; i++) setFixed(size - 1 - i, 8, bit(i));
  for (let i = 8; i < 15; i++) setFixed(8, size - 15 + i, bit(i));
  setFixed(8, size - 8, true);

  let index = 0;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let vertical = 0; vertical < size; vertical++) {
      for (let j = 0; j < 2; j++) {
        const x = right - j;
        const upward = ((right + 1) & 2) === 0;
        const y = upward ? size - 1 - vertical : vertical;
        if (fixed[y][x] || index >= codewords.length * 8) continue;
        grid[y][x] = ((codewords[index >>> 3] >>> (7 - (index & 7))) & 1) !== 0;
        index++;
      }
    }
  }

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (!fixed[y][x] && MASKS[mask](y, x)) grid[y][x] = !grid[y][x];
    }
  }
  return grid;
}

/** The QR modules for `text` as rows of booleans (true is dark), without the quiet zone. */
export function qrMatrix(text: string): boolean[][] {
  const bytes = new TextEncoder().encode(text);
  if (bytes.length > QR_MAX_BYTES) throw new Error('Text is too long for this QR encoder');
  const version =
    LEVEL_M.findIndex((v) => v.blocks.reduce((s, [n, d]) => s + n * d, 0) - 2 >= bytes.length) + 1;
  const codewords = allCodewords(dataCodewords(bytes, version), version);
  let best: Grid | undefined;
  let bestScore = Infinity;
  for (let mask = 0; mask < 8; mask++) {
    const candidate = build(codewords, version, mask);
    const score = penalty(candidate);
    if (score < bestScore) {
      best = candidate;
      bestScore = score;
    }
  }
  return best as Grid;
}
