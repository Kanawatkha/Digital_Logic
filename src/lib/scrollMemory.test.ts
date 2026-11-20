import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  clearScroll,
  flagRestore,
  flushScroll,
  readScroll,
  resetScroll,
  saveScroll,
  takeRestore,
} from '@/lib/scrollMemory';

beforeEach(() => resetScroll());
afterEach(() => vi.restoreAllMocks());

describe('the scroll memory', () => {
  it('remembers each page on its own, and a page never read is at the top', () => {
    saveScroll('/exam/final/3', 1200);
    saveScroll('/formulas/mid', 300.4);
    expect(readScroll('/exam/final/3')).toBe(1200);
    expect(readScroll('/formulas/mid')).toBe(300);
    expect(readScroll('/chapters/mid/1')).toBe(0);
  });

  it('forgets a page that is saved at the top', () => {
    saveScroll('/a', 500);
    saveScroll('/a', 0);
    expect(readScroll('/a')).toBe(0);
  });

  it('forgets the pages of a section that was reset', () => {
    saveScroll('/exam/mid', 100);
    saveScroll('/exam/final/2', 200);
    saveScroll('/formulas/mid', 300);
    clearScroll(['/exam/mid', '/exam/final/2']);
    expect(readScroll('/exam/mid')).toBe(0);
    expect(readScroll('/exam/final/2')).toBe(0);
    expect(readScroll('/formulas/mid')).toBe(300);
  });

  it('keeps the 40 pages that were read last', () => {
    for (let i = 0; i < 45; i++) saveScroll(`/p/${i}`, 100 + i);
    expect(readScroll('/p/0')).toBe(0);
    expect(readScroll('/p/4')).toBe(0);
    expect(readScroll('/p/5')).toBe(105);
    expect(readScroll('/p/44')).toBe(144);
  });

  it('writes to the session storage, and reads it back after a reload', () => {
    saveScroll('/exam/final/3', 900);
    flushScroll();
    expect(JSON.parse(window.sessionStorage.getItem('dl-scroll') ?? '{}')).toEqual({
      '/exam/final/3': 900,
    });
    // a page that loads again (nothing in memory) finds it
    window.sessionStorage.setItem(
      'dl-scroll',
      JSON.stringify({ '/x': 450, '/bad': 'no', '/neg': -5 }),
    );
    resetScrollMemoryOnly();
    expect(readScroll('/x')).toBe(450);
    expect(readScroll('/bad')).toBe(0);
    expect(readScroll('/neg')).toBe(0);
  });

  it('writes a little after the last scroll, not on every one', () => {
    vi.useFakeTimers();
    const setItem = vi.spyOn(Storage.prototype, 'setItem');
    for (let y = 100; y < 600; y += 10) saveScroll('/a', y);
    expect(setItem).not.toHaveBeenCalled();
    vi.advanceTimersByTime(300);
    expect(setItem).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it('works for the visit when the browser gives no storage', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    saveScroll('/a', 700);
    flushScroll();
    expect(readScroll('/a')).toBe(700);
  });

  it('flags one arrival to bring the place back, once', () => {
    flagRestore('/exam/final/3');
    expect(takeRestore('/exam/mid')).toBe(false);
    flagRestore('/exam/final/3');
    expect(takeRestore('/exam/final/3')).toBe(true);
    expect(takeRestore('/exam/final/3')).toBe(false);
  });
});

/** A page that loads again: the memory is empty but the session storage is not. */
function resetScrollMemoryOnly() {
  const saved = window.sessionStorage.getItem('dl-scroll');
  resetScroll();
  if (saved !== null) window.sessionStorage.setItem('dl-scroll', saved);
}
