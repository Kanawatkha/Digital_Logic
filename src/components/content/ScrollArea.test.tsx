import { render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ScrollArea } from './ScrollArea';

/** jsdom lays nothing out: the widths of the area are given */
function widths(scroll: number, client: number) {
  Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { configurable: true, get: () => scroll });
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', { configurable: true, get: () => client });
}

afterEach(() => {
  delete (HTMLElement.prototype as { scrollWidth?: number }).scrollWidth;
  delete (HTMLElement.prototype as { clientWidth?: number }).clientWidth;
});

const chain = '<span>Y = AB + C</span><span class="note">note at the side</span>';

describe('ScrollArea', () => {
  it('scrolls sideways, and is a stop of the Tab key only while its content is wider than it', () => {
    widths(500, 300);
    const wide = render(<ScrollArea html={chain} />);
    const area = wide.container.firstElementChild!;
    expect(area.className).toContain('overflow-x-auto');
    expect(area).toHaveAttribute('tabindex', '0');
    wide.unmount();
    widths(300, 300);
    const fits = render(<ScrollArea html={chain} />);
    expect(fits.container.firstElementChild).not.toHaveAttribute('tabindex');
  });

  it('keeps the layout it is given, however narrow the column is: a note stays at the side', () => {
    widths(900, 300);
    const { container } = render(<ScrollArea html={chain} />);
    expect(container.firstElementChild?.innerHTML).toBe(chain);
  });

  it('shows children when it has no markup', () => {
    widths(100, 300);
    const { container } = render(
      <ScrollArea>
        <p>inside</p>
      </ScrollArea>,
    );
    expect(container.firstElementChild).toHaveTextContent('inside');
  });
});
