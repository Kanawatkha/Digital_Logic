import { describe, expect, it } from 'vitest';
import {
  EXAM_SETS,
  FINAL_CHAPTERS,
  NAV_ITEMS,
  REPO_NAME,
  TERMS,
  chapterPath,
  finalChapterPath,
  findFinalChapter,
  isChapterNumber,
} from './site';

describe('site config', () => {
  it('uses the GitHub repository name for the Pages base path', () => {
    expect(REPO_NAME).toBe('Digital_Logic');
  });

  it('lists the chapters, the exams, the formula sheets and the lab in the navbar, one each', () => {
    expect(NAV_ITEMS.map((i) => [i.to, i.label])).toEqual([
      ['/chapters', 'เนื้อหาตามบท'],
      ['/exam', 'ข้อสอบ'],
      ['/formulas', 'สรุปสูตร'],
      ['/lab', 'แล็บ'],
    ]);
  });

  it('has two terms, the midterm and the final, and the pages of the midterm under /mid', () => {
    expect(TERMS.map((t) => t.id)).toEqual(['mid', 'final']);
    expect(TERMS.map((t) => t.label)).toEqual(['กลางภาค', 'ปลายภาค']);
    expect(chapterPath(3)).toBe('/chapters/mid/3');
    expect(EXAM_SETS.map((s) => s.to)).toEqual([
      '/exam/mid',
      '/exam/mid/2',
      '/exam/mid/3',
      '/exam/mid/4',
    ]);
  });

  it('accepts only chapters 1 to 5', () => {
    expect(isChapterNumber(1)).toBe(true);
    expect(isChapterNumber(5)).toBe(true);
    expect(isChapterNumber(0)).toBe(false);
    expect(isChapterNumber(6)).toBe(false);
  });

  it('has the chapters 6 to 10 of the final, in order, each with its own page', () => {
    expect(FINAL_CHAPTERS.map((c) => c.n)).toEqual([6, 7, 8, 9, 10]);
    expect(finalChapterPath(8)).toBe('/chapters/final/8');
    expect(findFinalChapter(9)?.title).toBe('Verilog');
    expect(findFinalChapter(5)).toBeUndefined();
    expect(findFinalChapter(11)).toBeUndefined();
  });
});
