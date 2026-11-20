import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { restoreScroll } from '@/lib/restoreScroll';

let height: number;
let scrollY: number;
let scrollTo: ReturnType<typeof vi.fn>;

const frames = (n: number) => {
  for (let i = 0; i < n; i++) vi.advanceTimersByTime(16);
};

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['requestAnimationFrame', 'cancelAnimationFrame', 'performance'] });
  height = 3000;
  scrollY = 0;
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    configurable: true,
    get: () => height,
  });
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 });
  Object.defineProperty(window, 'scrollY', { configurable: true, get: () => scrollY });
  scrollTo = vi.fn((arg: ScrollToOptions) => {
    scrollY = Math.min(arg.top ?? 0, height - 800);
  });
  window.scrollTo = scrollTo as unknown as typeof window.scrollTo;
});

afterEach(() => {
  vi.useRealTimers();
  Reflect.deleteProperty(document.documentElement, 'scrollHeight');
});

describe('restoreScroll', () => {
  it('goes to the place at once when the page is tall enough, and stops after it was held', () => {
    const done = vi.fn();
    restoreScroll(1500, done, { settleMs: 200 });
    frames(2);
    expect(scrollY).toBe(1500);
    expect(done).not.toHaveBeenCalled();
    frames(20);
    expect(done).toHaveBeenCalledTimes(1);
  });

  it('goes as far as the page goes while the content is still coming, then to the place', () => {
    height = 1000;
    const done = vi.fn();
    restoreScroll(2000, done, { settleMs: 200 });
    frames(3);
    expect(scrollY).toBe(200);
    height = 3200;
    frames(3);
    expect(scrollY).toBe(2000);
    frames(20);
    expect(done).toHaveBeenCalledTimes(1);
  });

  it('puts the place back when the layout shifts it', () => {
    restoreScroll(1500, vi.fn(), { settleMs: 300 });
    frames(2);
    scrollY = 1300;
    frames(2);
    expect(scrollY).toBe(1500);
  });

  it('gives up when the time is out', () => {
    height = 900;
    const done = vi.fn();
    restoreScroll(2000, done, { timeoutMs: 500 });
    frames(20);
    expect(done).not.toHaveBeenCalled();
    frames(20);
    expect(done).toHaveBeenCalledTimes(1);
    expect(scrollY).toBe(100);
  });

  it.each(['wheel', 'touchstart', 'mousedown', 'keydown'])(
    'leaves the page to the student at the first %s',
    (name) => {
      const done = vi.fn();
      restoreScroll(1500, done, { settleMs: 5000 });
      frames(2);
      scrollTo.mockClear();
      window.dispatchEvent(new Event(name));
      expect(done).toHaveBeenCalledTimes(1);
      scrollY = 1100;
      frames(5);
      expect(scrollTo).not.toHaveBeenCalled();
      expect(scrollY).toBe(1100);
    },
  );

  it('can be stopped by the caller, once', () => {
    const done = vi.fn();
    const stop = restoreScroll(1500, done);
    stop();
    stop();
    expect(done).toHaveBeenCalledTimes(1);
  });
});
