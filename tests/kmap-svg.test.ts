import { describe, expect, it } from 'vitest';
import {
  kmapSvg,
  loopProblem,
  loopsProblem,
  type KmapCell,
} from '../scripts/build-content/kmapSvg.ts';

const cells = (ones: number[], dc: number[] = []): KmapCell[] =>
  Array.from({ length: 8 }, (_, n) => (ones.includes(n) ? '1' : dc.includes(n) ? 'x' : '0'));

const svgOf = (lines: string[]) => lines.join('\n');
const rects = (svg: string) =>
  svg.match(/<rect x="\d+" y="\d+" width="\d+" height="\d+" rx="14"/g) ?? [];

describe('the Karnaugh map figure of the lab tasks', () => {
  it('is a centred block with one SVG and no blank line, as the content rules ask', () => {
    const lines = kmapSvg(cells([1, 3]), []);
    expect(lines[0]).toBe('<div align="center">');
    expect(lines.at(-1)).toBe('</div>');
    expect(lines.some((line) => line.trim() === '')).toBe(false);
    expect(svgOf(lines)).toContain('viewBox="0 0 340 196"');
  });

  it('numbers the cells like the figures of the chapters: AB across, C down the side', () => {
    const svg = svgOf(kmapSvg(cells([]), []));
    const numbers = [...svg.matchAll(/font-size="11"[^>]*>(\d)<\/text>/g)].map((m) => Number(m[1]));
    // row C = 0 runs 0, 2, 6, 4 and row C = 1 runs 1, 3, 7, 5
    expect(numbers).toEqual([0, 2, 6, 4, 1, 3, 7, 5]);
    expect(svg).toContain('>00</text>');
    expect(svg).toContain('>10</text>');
  });

  it("writes the value of each cell, x for a don't care", () => {
    const svg = svgOf(kmapSvg(cells([1], [2]), []));
    const values = [...svg.matchAll(/font-size="22"[^>]*>([01x])<\/text>/g)].map((m) => m[1]);
    // cells 0, 2, 6, 4, 1, 3, 7, 5
    expect(values.join('')).toBe('0x00100' + '0');
  });

  it('draws a loop that wraps round the edge in two pieces, and a block in one', () => {
    expect(rects(svgOf(kmapSvg(cells([0, 4]), [[0, 4]])))).toHaveLength(2);
    expect(rects(svgOf(kmapSvg(cells([0, 1, 4, 5]), [[0, 1, 4, 5]])))).toHaveLength(2);
    expect(rects(svgOf(kmapSvg(cells([0, 2, 4, 6]), [[0, 2, 4, 6]])))).toHaveLength(1);
    expect(rects(svgOf(kmapSvg(cells([3, 7]), [[3, 7]])))).toHaveLength(1);
  });

  it('colours the loops orange, blue, green', () => {
    const svg = svgOf(
      kmapSvg(cells([0, 1, 2, 3, 4, 5, 6, 7]), [
        [0, 1],
        [2, 3],
        [4, 5],
      ]),
    );
    expect(svg).toContain('stroke="#e8743b"');
    expect(svg).toContain('stroke="#3b8be8"');
    expect(svg).toContain('stroke="#2fae5f"');
  });
});

describe('what a loop may be', () => {
  it('accepts blocks of 1, 2, 4 or 8 cells and nothing else', () => {
    for (const ok of [
      [5],
      [0, 4],
      [3, 7],
      [0, 1, 4, 5],
      [0, 2, 4, 6],
      [4, 5, 6, 7],
      [0, 1, 2, 3, 4, 5, 6, 7],
    ]) {
      expect(loopProblem(ok), ok.join()).toBeNull();
    }
    for (const bad of [[], [1, 2, 3], [0, 3], [1, 2], [0, 1, 2, 4], [0, 0], [8], [-1]]) {
      expect(loopProblem(bad), bad.join()).not.toBeNull();
    }
  });

  it("wants loops of ones or of zeros, all covered, with don't cares free", () => {
    expect(loopsProblem(cells([1, 3, 5, 7]), [[1, 3, 5, 7]])).toBeNull();
    expect(loopsProblem(cells([3, 7], [2, 6]), [[2, 3, 6, 7]])).toBeNull();
    // zeros: the loop of zeros 0 and 4
    expect(loopsProblem(cells([1, 2, 3, 5, 6, 7]), [[0, 4]])).toBeNull();
    expect(
      loopsProblem(cells([1, 3]), [
        [1, 3],
        [0, 4],
      ]),
    ).toMatch(/not 1/);
    expect(loopsProblem(cells([1, 3, 5]), [[1, 3]])).toMatch(/cell 5 \(1\) is in no loop/);
    expect(loopsProblem(cells([], [1, 3]), [[1, 3]])).toMatch(/only don't cares/);
  });
});
