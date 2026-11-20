import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useScrollMemory } from '@/hooks/useScrollMemory';
import { flagRestore, resetScroll, saveScroll } from '@/lib/scrollMemory';

let height: number;
let scrollY: number;
let scrollTo: ReturnType<typeof vi.fn>;

function Page() {
  useScrollMemory();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div>
      <p data-testid="where">{pathname}</p>
      <button type="button" onClick={() => navigate('/b')}>
        to b
      </button>
      <button type="button" onClick={() => navigate('/a')}>
        to a
      </button>
      <button type="button" onClick={() => navigate(-1)}>
        back
      </button>
      <button type="button" onClick={() => navigate('/a', { state: { layers: ['menu'] } })}>
        layer
      </button>
    </div>
  );
}

function open(entries: string[], index = entries.length - 1) {
  return render(
    <MemoryRouter initialEntries={entries} initialIndex={index}>
      <Page />
    </MemoryRouter>,
  );
}

const frames = (n: number) => {
  for (let i = 0; i < n; i++) act(() => void vi.advanceTimersByTime(16));
};
/** The student scrolls: the window moves and the browser says so. */
const scrollBy = (y: number) => {
  scrollY = y;
  fireEvent.scroll(window);
};
const click = (name: string) => fireEvent.click(screen.getByRole('button', { name }));
const topCalls = () => scrollTo.mock.calls.filter(([o]) => (o as ScrollToOptions).top === 0);

beforeEach(() => {
  vi.useFakeTimers({
    toFake: [
      'requestAnimationFrame',
      'cancelAnimationFrame',
      'performance',
      'setTimeout',
      'clearTimeout',
    ],
  });
  resetScroll();
  height = 5000;
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

describe('the scroll memory of the pages', () => {
  it('goes to the top when a page is opened, and not to a place that was left', () => {
    saveScroll('/a', 900);
    open(['/start']);
    expect(topCalls().length).toBeGreaterThan(0);
    click('to a');
    frames(40);
    expect(scrollY).toBe(0);
  });

  it('brings a page back to where it was left with the back button', () => {
    open(['/a']);
    scrollBy(1400);
    click('to b');
    frames(2);
    expect(scrollY).toBe(0);
    click('back');
    expect(screen.getByTestId('where')).toHaveTextContent('/a');
    frames(3);
    expect(scrollY).toBe(1400);
  });

  it('waits for a page that is not tall enough yet', () => {
    open(['/a']);
    scrollBy(2200);
    click('to b');
    height = 900;
    click('back');
    frames(3);
    expect(scrollY).toBe(100);
    height = 5000;
    frames(3);
    expect(scrollY).toBe(2200);
  });

  it('brings the place back when a header tab flagged the arrival', () => {
    open(['/a']);
    scrollBy(1700);
    click('to b');
    flagRestore('/a');
    click('to a');
    frames(3);
    expect(screen.getByTestId('where')).toHaveTextContent('/a');
    expect(scrollY).toBe(1700);
  });

  it('does not record the short page while the place is being brought back', () => {
    open(['/a']);
    scrollBy(2200);
    click('to b');
    height = 900;
    click('back');
    frames(3);
    scrollBy(scrollY);
    height = 5000;
    frames(3);
    expect(scrollY).toBe(2200);
  });

  it('leaves the page to the student once they scroll', () => {
    open(['/a']);
    scrollBy(2200);
    click('to b');
    height = 900;
    click('back');
    frames(3);
    fireEvent.wheel(window);
    scrollBy(50);
    height = 5000;
    frames(10);
    expect(scrollY).toBe(50);
  });

  it('does not move the page when a layer (a menu, a card) opens on it', () => {
    open(['/a']);
    scrollBy(1100);
    scrollTo.mockClear();
    click('layer');
    frames(5);
    expect(scrollTo).not.toHaveBeenCalled();
    expect(scrollY).toBe(1100);
  });

  it('switches the scroll restoring of the browser off while the site is open', () => {
    window.history.scrollRestoration = 'auto';
    const { unmount } = open(['/a']);
    expect(window.history.scrollRestoration).toBe('manual');
    unmount();
    expect(window.history.scrollRestoration).toBe('auto');
  });
});
