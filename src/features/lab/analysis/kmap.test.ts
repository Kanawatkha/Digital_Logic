import { describe, expect, it } from 'vitest';
import { kmapLayout, kmapLoops, loopPieces } from './kmap';

const bitCount = (n: number) => n.toString(2).replaceAll('0', '').length;

describe('the layout of a Karnaugh map', () => {
  it('is drawn for 2 to 4 inputs and for no other number', () => {
    for (const n of [0, 1, 5, 8, 2.5, -1]) expect(kmapLayout(n)).toBeNull();
    expect(kmapLayout(2)).toMatchObject({ topVars: 'A', sideVars: 'B', columns: ['0', '1'] });
    expect(kmapLayout(3)).toMatchObject({
      topVars: 'AB',
      sideVars: 'C',
      columns: ['00', '01', '11', '10'],
      rows: ['0', '1'],
    });
    expect(kmapLayout(4)).toMatchObject({
      topVars: 'AB',
      sideVars: 'CD',
      rows: ['00', '01', '11', '10'],
    });
  });

  it('puts every row of the truth table in exactly one cell, with the bits the labels say', () => {
    for (const n of [2, 3, 4]) {
      const layout = kmapLayout(n)!;
      const seen = new Set<number>();
      layout.columns.forEach((top, c) =>
        layout.rows.forEach((side, r) => {
          const cell = layout.cell(c, r);
          // the label of the column is the top bits of the row number, the label of the row the rest
          expect(cell.toString(2).padStart(n, '0')).toBe(top + side);
          seen.add(cell);
        }),
      );
      expect(seen.size).toBe(2 ** n);
    }
  });

  it('puts cells that differ in one input side by side, round the edges too', () => {
    for (const n of [2, 3, 4]) {
      const layout = kmapLayout(n)!;
      const columns = layout.columns.length;
      const rows = layout.rows.length;
      for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows; r++) {
          const here = layout.cell(c, r);
          if (columns > 2) expect(bitCount(here ^ layout.cell((c + 1) % columns, r))).toBe(1);
          if (rows > 2) expect(bitCount(here ^ layout.cell(c, (r + 1) % rows))).toBe(1);
        }
      }
    }
  });
});

describe('the loops of a Karnaugh map', () => {
  /** Every function of 2 and 3 inputs, and 400 spread over the 65,536 of 4 inputs */
  const functions = (n: number): number[][] => {
    const total = 2 ** (2 ** n);
    const picks =
      n < 4
        ? Array.from({ length: total }, (_, k) => k)
        : Array.from({ length: 400 }, (_, k) => (k * 163) % total);
    return picks.map((bits) =>
      Array.from({ length: 2 ** n }, (_, m) => m).filter((m) => (bits >> m) & 1),
    );
  };

  for (const n of [2, 3, 4]) {
    it(`cover the ones and only the ones, in blocks of 1, 2, 4, 8 or 16 cells (${n} inputs)`, () => {
      const layout = kmapLayout(n)!;
      for (const ones of functions(n)) {
        const loops = kmapLoops(n, ones);
        const covered = new Set(loops.flatMap((loop) => loop.cells));
        expect([...covered].sort((a, b) => a - b)).toEqual(ones);
        for (const loop of loops) {
          expect(Math.log2(loop.cells.length) % 1).toBe(0);
          // the rectangles of a loop hold exactly its cells
          const area = loopPieces(layout, loop.cells).reduce((s, p) => s + p.columns * p.rows, 0);
          expect(area).toBe(loop.cells.length);
        }
      }
    });
  }

  it('says nothing for an output that is never 1, and one loop for an output that is always 1', () => {
    expect(kmapLoops(3, [])).toEqual([]);
    const all = kmapLoops(3, [0, 1, 2, 3, 4, 5, 6, 7]);
    expect(all).toHaveLength(1);
    expect(all[0]).toMatchObject({ term: '1', cells: [0, 1, 2, 3, 4, 5, 6, 7] });
  });

  it('writes a loop as its product, and draws a loop that wraps round as two pieces', () => {
    // Y = A'C' + AC' covers cells 0, 2, 4, 6: the whole row C = 0
    const row = kmapLoops(3, [0, 2, 4, 6]);
    expect(row.map((l) => l.term)).toEqual(["C'"]);
    expect(loopPieces(kmapLayout(3)!, row[0]!.cells)).toEqual([
      { column: 0, row: 0, columns: 4, rows: 1 },
    ]);
    // columns AB = 00 and AB = 10 are the two ends: the loop of B' (cells 0, 1, 4, 5) wraps round
    const wrap = kmapLoops(3, [0, 1, 4, 5]);
    expect(wrap.map((l) => l.term)).toEqual(["B'"]);
    expect(loopPieces(kmapLayout(3)!, wrap[0]!.cells)).toEqual([
      { column: 0, row: 0, columns: 1, rows: 2 },
      { column: 3, row: 0, columns: 1, rows: 2 },
    ]);
    // the four corners of a map of four inputs are one loop
    const corners = kmapLoops(4, [0, 2, 8, 10]);
    expect(corners.map((l) => l.term)).toEqual(["B'D'"]);
    expect(loopPieces(kmapLayout(4)!, corners[0]!.cells)).toHaveLength(4);
  });
});
