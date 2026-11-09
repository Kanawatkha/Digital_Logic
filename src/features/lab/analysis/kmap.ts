import { termCovers, formatTerm, minimize } from './expression';
import { inputName } from './truthTable';

/** A Karnaugh map is drawn for this many inputs: fewer is a table of two rows, more is too big to read. */
export const KMAP_MIN_INPUTS = 2;
export const KMAP_MAX_INPUTS = 4;

/**
 * The colors of the loops: the first three are the palette of the figures in the content (orange,
 * blue, green); a map of four inputs can need more loops, which take on three more.
 */
export const LOOP_COLORS = [
  '#e8743b',
  '#3b8be8',
  '#2fae5f',
  '#8e5bd9',
  '#13a3a3',
  '#d6457f',
] as const;

/** The values of 1 or 2 bits in Gray code, the order of the sides of a map. */
const gray = (bits: number): number[] => (bits === 1 ? [0, 1] : [0, 1, 3, 2]);

export type KmapLayout = {
  /** How many inputs, A first (the top bit of a row number) */
  n: number;
  /** The inputs along the top, the inputs down the side, as letters (`AB`, `C`) */
  topVars: string;
  sideVars: string;
  /** The bits of each column and each row, as text: `00 01 11 10` */
  columns: string[];
  rows: string[];
  /** The row of the truth table (the minterm) a cell stands for */
  cell: (column: number, row: number) => number;
};

/** The map of `n` inputs, or null when `n` is not one a map is drawn for. */
export function kmapLayout(n: number): KmapLayout | null {
  if (!Number.isInteger(n) || n < KMAP_MIN_INPUTS || n > KMAP_MAX_INPUTS) return null;
  const sideBits = Math.floor(n / 2);
  const topBits = n - sideBits;
  const letters = (from: number, count: number) =>
    Array.from({ length: count }, (_, i) => inputName(from + i)).join('');
  const topValues = gray(topBits);
  const sideValues = gray(sideBits);
  return {
    n,
    topVars: letters(0, topBits),
    sideVars: letters(topBits, sideBits),
    columns: topValues.map((v) => v.toString(2).padStart(topBits, '0')),
    rows: sideValues.map((v) => v.toString(2).padStart(sideBits, '0')),
    cell: (column, row) => ((topValues[column] ?? 0) << sideBits) | (sideValues[row] ?? 0),
  };
}

export type KmapLoop = {
  /** The product the loop stands for, as text: `AB'` */
  term: string;
  /** The cells it covers (rows of the truth table) */
  cells: number[];
};

/** The loops of the smallest sum of products of an output, from the rows where it is 1. */
export function kmapLoops(n: number, minterms: readonly number[]): KmapLoop[] {
  if (minterms.length === 0) return [];
  return minimize(n, minterms).map((term) => ({
    term: formatTerm(term, n),
    cells: Array.from({ length: 2 ** n }, (_, m) => m).filter((m) => termCovers(term, m)),
  }));
}

/** One rectangle of a loop on the grid: a loop that wraps round an edge is drawn in pieces. */
export type KmapPiece = { column: number; row: number; columns: number; rows: number };

/** Runs of consecutive numbers in a sorted list: [0, 1, 3] -> [[0, 1], [3]]. */
function runs(values: number[]): number[][] {
  const out: number[][] = [];
  for (const v of values) {
    const last = out[out.length - 1];
    if (last && v === last[last.length - 1]! + 1) last.push(v);
    else out.push([v]);
  }
  return out;
}

/** The rectangles a loop is drawn as on the map. */
export function loopPieces(layout: KmapLayout, cells: readonly number[]): KmapPiece[] {
  const where = new Map<number, { column: number; row: number }>();
  layout.columns.forEach((_, column) => {
    layout.rows.forEach((__, row) => where.set(layout.cell(column, row), { column, row }));
  });
  const set = (pick: (c: { column: number; row: number }) => number) =>
    [...new Set(cells.map((m) => pick(where.get(m)!)))].sort((a, b) => a - b);
  const pieces: KmapPiece[] = [];
  for (const rowRun of runs(set((c) => c.row))) {
    for (const columnRun of runs(set((c) => c.column))) {
      pieces.push({
        column: columnRun[0]!,
        row: rowRun[0]!,
        columns: columnRun.length,
        rows: rowRun.length,
      });
    }
  }
  return pieces;
}
