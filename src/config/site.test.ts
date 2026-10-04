import { describe, expect, it } from 'vitest';
import { CHAPTER_NUMBERS, NAV_ITEMS, REPO_NAME, isChapterNumber } from './site';

describe('site config', () => {
  it('uses the GitHub repository name for the Pages base path', () => {
    expect(REPO_NAME).toBe('Digital_Logic');
  });

  it('lists five chapters, the exam and the formula sheet in the navbar', () => {
    expect(NAV_ITEMS).toHaveLength(CHAPTER_NUMBERS.length + 2);
    expect(NAV_ITEMS.map((i) => i.to)).toEqual([
      '/chapter/1',
      '/chapter/2',
      '/chapter/3',
      '/chapter/4',
      '/chapter/5',
      '/exam',
      '/formulas',
    ]);
  });

  it('accepts only chapters 1 to 5', () => {
    expect(isChapterNumber(1)).toBe(true);
    expect(isChapterNumber(5)).toBe(true);
    expect(isChapterNumber(0)).toBe(false);
    expect(isChapterNumber(6)).toBe(false);
  });
});
