import { act, render } from '@testing-library/react';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { ScrollArea } from './ScrollArea';

// jsdom has no layout: the width of the content is read from the markup, the width of the area is set here
let areaWidth = 300;
const original = {
  scrollWidth: Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollWidth'),
  clientWidth: Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth'),
};

// the one observer of the component, with the resize fired by hand
let fireResize: (target: Element) => void = () => {};
class FakeResizeObserver {
  constructor(callback: (entries: { target: Element }[]) => void) {
    fireResize = (target) => callback([{ target }]);
  }
  observe() {}
  unobserve() {}
}

beforeAll(() => {
  vi.stubGlobal('ResizeObserver', FakeResizeObserver);
});

beforeEach(() => {
  areaWidth = 300;
  Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
    configurable: true,
    get(this: HTMLElement) {
      const wanted = /data-wants="(\d+)"/.exec(this.innerHTML)?.[1];
      return Math.max(areaWidth, wanted ? Number(wanted) : 0);
    },
  });
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
    configurable: true,
    get: () => areaWidth,
  });
});

afterEach(() => {
  for (const key of ['scrollWidth', 'clientWidth'] as const) {
    const was = original[key];
    if (was) Object.defineProperty(HTMLElement.prototype, key, was);
    else delete (HTMLElement.prototype as unknown as Record<string, unknown>)[key];
  }
});

const wide = '<span data-wants="500">wide layout</span>';
const narrowFits = '<span data-wants="250">narrow layout</span>';
const narrowTooWide = '<span data-wants="400">narrow layout</span>';

describe('ScrollArea', () => {
  it('shows the markup as it is, and is a keyboard stop only when it overflows', () => {
    const { container, rerender } = render(<ScrollArea html={wide} />);
    const area = container.firstElementChild as HTMLElement;
    expect(area).toHaveTextContent('wide layout');
    expect(area).toHaveAttribute('tabindex', '0');
    areaWidth = 600;
    rerender(<ScrollArea html={'<span data-wants="100">short</span>'} />);
    expect(container.firstElementChild).not.toHaveAttribute('tabindex');
  });

  it('shows the narrow layout when the wide one does not fit, and then needs no scrolling', () => {
    const { container } = render(<ScrollArea html={wide} narrowHtml={narrowFits} />);
    const area = container.firstElementChild as HTMLElement;
    expect(area).toHaveTextContent('narrow layout');
    expect(area).not.toHaveAttribute('tabindex');
  });

  it('keeps the wide layout when it fits, and scrolls the narrow one when that does not fit either', () => {
    areaWidth = 600;
    const fits = render(<ScrollArea html={wide} narrowHtml={narrowFits} />);
    expect(fits.container.firstElementChild).toHaveTextContent('wide layout');
    fits.unmount();
    areaWidth = 300;
    const tooWide = render(<ScrollArea html={wide} narrowHtml={narrowTooWide} />);
    const area = tooWide.container.firstElementChild as HTMLElement;
    expect(area).toHaveTextContent('narrow layout');
    expect(area).toHaveAttribute('tabindex', '0');
  });

  it('goes back to the wide layout when the area has grown wide enough for it', () => {
    const { container } = render(<ScrollArea html={wide} narrowHtml={narrowFits} />);
    const area = container.firstElementChild as HTMLElement;
    expect(area).toHaveTextContent('narrow layout');
    // still too narrow for the wide layout: it stays narrow
    areaWidth = 450;
    act(() => fireResize(area));
    expect(area).toHaveTextContent('narrow layout');
    areaWidth = 520;
    act(() => fireResize(area));
    expect(container.firstElementChild).toHaveTextContent('wide layout');
    // and back again when the area shrinks
    areaWidth = 300;
    act(() => fireResize(container.firstElementChild as HTMLElement));
    expect(container.firstElementChild).toHaveTextContent('narrow layout');
  });
});
