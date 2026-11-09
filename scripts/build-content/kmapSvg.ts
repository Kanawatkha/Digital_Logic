/**
 * The Karnaugh map of three variables as the figures of the chapters and the practice exams draw it:
 * AB across the top in Gray code, C down the side, the number of each cell small in its corner,
 * its value in the middle, and the loops as coloured rounded rectangles (a loop that wraps round the
 * edge is drawn in two pieces). Used for the `@kmap:Y` placeholder of the lab tasks.
 */

const CELL = 58;
const ORIGIN_X = 100;
const ORIGIN_Y = 56;
const COLUMNS = 4;
const ROWS = 2;
const WIDTH = COLUMNS * CELL;
const HEIGHT = ROWS * CELL;
/** AB of each column, left to right: 00, 01, 11, 10 */
const GRAY = [0, 1, 3, 2] as const;
/** The loop palette of the content (SVG rules in CONTENT-SCHEMA.md): orange, blue, green */
export const LOOP_COLORS = ['#e8743b', '#3b8be8', '#2fae5f'] as const;

export type KmapCell = '0' | '1' | 'x';

const text = (x: number, y: number, size: number, anchor: string, body: string, dim = false) =>
  `<text x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}" fill="currentColor"${
    dim ? ' fill-opacity="0.6"' : ''
  } stroke="none">${body}</text>`;

/** Cell number of column c and row r (A is the top bit, then B, then C). */
const cellNumber = (column: number, row: number): number => (GRAY[column] as number) * 2 + row;

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

/**
 * What is wrong with a loop, or null. A loop is a block of cells that a product (or a sum) of the
 * variables stands for: 1, 2, 4 or 8 cells that differ only in the variables that are dropped.
 */
export function loopProblem(loop: number[]): string | null {
  if (loop.length === 0) return 'a loop has no cells';
  if (new Set(loop).size !== loop.length) return `loop ${loop.join(',')} repeats a cell`;
  if (loop.some((c) => !Number.isInteger(c) || c < 0 || c > 7)) {
    return `loop ${loop.join(',')} has a cell that is not 0 to 7`;
  }
  const and = loop.reduce((a, c) => a & c, 7);
  const or = loop.reduce((a, c) => a | c, 0);
  const varying = and ^ or;
  const bits = [1, 2, 4].filter((b) => varying & b).length;
  if (loop.length !== 2 ** bits) {
    return `loop ${loop.join(',')} is not a block of 1, 2, 4 or 8 cells that one product stands for`;
  }
  return null;
}

/**
 * What is wrong with a set of loops for these cell values, or null: at most three (the palette),
 * each a block, all of ones or all of zeros (a don't care may join either), and together covering
 * every cell of that kind.
 */
export function loopsProblem(cells: readonly KmapCell[], loops: number[][]): string | null {
  if (loops.length === 0) return null;
  if (loops.length > LOOP_COLORS.length) return `at most ${LOOP_COLORS.length} loops can be drawn`;
  for (const loop of loops) {
    const problem = loopProblem(loop);
    if (problem) return problem;
  }
  const first = loops[0]!;
  const kind: '0' | '1' | null = first.some((c) => cells[c] === '1')
    ? '1'
    : first.some((c) => cells[c] === '0')
      ? '0'
      : null;
  if (!kind) return `loop ${first.join(',')} holds only don't cares`;
  for (const loop of loops) {
    const bad = loop.filter((c) => cells[c] !== kind && cells[c] !== 'x');
    if (bad.length > 0) {
      return `loop ${loop.join(',')} holds cell ${bad[0]}, which is not ${kind} (loops are all ones or all zeros)`;
    }
  }
  const covered = new Set(loops.flat());
  const missing = [...cells.keys()].filter((c) => cells[c] === kind && !covered.has(c));
  if (missing.length > 0) return `cell ${missing.join(',')} (${kind}) is in no loop`;
  return null;
}

/** The lines of the figure (a centred block of HTML with one SVG, no blank line inside). */
export function kmapSvg(cells: readonly KmapCell[], loops: number[][]): string[] {
  const lines: string[] = [];
  const grid: string[] = [
    `<rect x="${ORIGIN_X}" y="${ORIGIN_Y}" width="${WIDTH}" height="${HEIGHT}"/>`,
  ];
  for (let i = 1; i < COLUMNS; i++) {
    const x = ORIGIN_X + i * CELL;
    grid.push(`<line x1="${x}" y1="${ORIGIN_Y}" x2="${x}" y2="${ORIGIN_Y + HEIGHT}"/>`);
  }
  for (let i = 1; i < ROWS; i++) {
    const y = ORIGIN_Y + i * CELL;
    grid.push(`<line x1="${ORIGIN_X}" y1="${y}" x2="${ORIGIN_X + WIDTH}" y2="${y}"/>`);
  }
  grid.push(
    `<line x1="${ORIGIN_X - 74}" y1="${ORIGIN_Y - 44}" x2="${ORIGIN_X}" y2="${ORIGIN_Y}"/>`,
  );

  let labels =
    text(ORIGIN_X - 20, ORIGIN_Y - 30, 18, 'middle', 'AB') +
    text(ORIGIN_X - 58, ORIGIN_Y - 6, 18, 'middle', 'C');
  for (let c = 0; c < COLUMNS; c++) {
    const ab = (GRAY[c] as number).toString(2).padStart(2, '0');
    labels += text(ORIGIN_X + c * CELL + CELL / 2, ORIGIN_Y - 8, 18, 'middle', ab);
  }
  for (let r = 0; r < ROWS; r++) {
    labels += text(ORIGIN_X - 10, ORIGIN_Y + r * CELL + CELL / 2 + 6, 18, 'end', String(r));
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLUMNS; c++) {
      const x0 = ORIGIN_X + c * CELL;
      const y0 = ORIGIN_Y + r * CELL;
      const n = cellNumber(c, r);
      labels += text(x0 + 10, y0 + 21, 11, 'start', String(n), true);
      labels += text(x0 + CELL / 2, y0 + CELL / 2 + 8, 22, 'middle', cells[n] ?? '0');
    }
  }

  const height = ORIGIN_Y + HEIGHT + 24;
  lines.push('<div align="center">');
  lines.push(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${Math.floor(340 * 0.88)}" height="${Math.floor(height * 0.88)}" viewBox="0 0 340 ${height}" font-family="Times New Roman, serif" font-size="20" fill="currentColor">`,
  );
  lines.push(`<g stroke="currentColor" stroke-width="1.8" fill="none">${grid.join('')}</g>`);
  lines.push(labels);

  const pieces: string[] = [];
  loops.forEach((loop, k) => {
    const columns = [
      ...new Set(loop.map((n) => GRAY.indexOf(((n >> 1) & 3) as 0 | 1 | 2 | 3))),
    ].sort((a, b) => a - b);
    const rows = [...new Set(loop.map((n) => n & 1))].sort((a, b) => a - b);
    const inset = 4 + 2 * k;
    for (const rowRun of runs(rows)) {
      for (const columnRun of runs(columns)) {
        const x = ORIGIN_X + columnRun[0]! * CELL + inset;
        const y = ORIGIN_Y + rowRun[0]! * CELL + inset;
        const w = columnRun.length * CELL - 2 * inset;
        const h = rowRun.length * CELL - 2 * inset;
        pieces.push(
          `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" stroke="${LOOP_COLORS[k]}" stroke-width="3" fill="none"/>`,
        );
      }
    }
  });
  if (pieces.length > 0) lines.push(`<g>${pieces.join('')}</g>`);
  lines.push('</svg>');
  lines.push('</div>');
  return lines;
}
