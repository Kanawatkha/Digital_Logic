import { fireEvent, render, screen, within } from '@testing-library/react';
import { useState } from 'react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { ViewButtons } from './ViewButtons';

beforeAll(() => {
  // reduced motion: a menu is gone as soon as it is closed
  window.matchMedia = ((query: string) => ({
    matches: query.includes('prefers-reduced-motion'),
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;
});

function Harness({ handlers }: { handlers: Record<string, () => void> }) {
  const [signal, setSignal] = useState(false);
  return (
    <ViewButtons
      percent={61}
      onZoomIn={handlers.zoomIn!}
      onZoomOut={handlers.zoomOut!}
      onFit={handlers.fit!}
      onActualSize={handlers.actual!}
      signal={signal}
      onSignal={() => {
        handlers.signal!();
        setSignal((on) => !on);
      }}
      onImage={handlers.image!}
      onSaved={handlers.saved!}
    />
  );
}

const handlers = () => ({
  zoomIn: vi.fn(),
  zoomOut: vi.fn(),
  fit: vi.fn(),
  actual: vi.fn(),
  signal: vi.fn(),
  image: vi.fn(),
  saved: vi.fn(),
});

const arrow = () => screen.getByRole('button', { name: 'เลือกเครื่องมือกระดาน' });
const menu = () => screen.getByRole('group', { name: 'เลือกเครื่องมือกระดาน' });

describe('the buttons of the view', () => {
  it('show one button for the three tools, the signal view first, and the zoom buttons as they were', () => {
    render(<Harness handlers={handlers()} />);
    expect(screen.getByRole('button', { name: 'มุมมองสัญญาณ' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
    // the picture and the saved circuits are not on the bar until they are picked
    expect(
      screen.queryByRole('button', { name: 'บันทึกภาพบอร์ดเป็น PNG' }),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'วงจรที่บันทึกไว้' })).not.toBeInTheDocument();
    for (const name of ['ซูมออก', 'ซูมเข้า', 'พอดีจอ', 'ขนาดจริง 100%']) {
      expect(screen.getByRole('button', { name })).toBeInTheDocument();
    }
    expect(screen.getByRole('button', { name: 'ขนาดจริง 100%' })).toHaveTextContent('61%');
    expect(arrow()).toHaveAttribute('aria-expanded', 'false');
  });

  it('do what the shown button says when it is pressed, and keep it shown', () => {
    const h = handlers();
    render(<Harness handlers={h} />);
    const signal = screen.getByRole('button', { name: 'มุมมองสัญญาณ' });
    fireEvent.click(signal);
    expect(h.signal).toHaveBeenCalledTimes(1);
    expect(signal).toHaveAttribute('aria-pressed', 'true');
    expect(signal.className).toContain('bg-ink');
    fireEvent.click(signal);
    expect(signal).toHaveAttribute('aria-pressed', 'false');
    expect(h.image).not.toHaveBeenCalled();
    expect(h.saved).not.toHaveBeenCalled();
  });

  it('open a menu of the three, with the signal view marked on or off', () => {
    render(<Harness handlers={handlers()} />);
    fireEvent.click(arrow());
    expect(arrow()).toHaveAttribute('aria-expanded', 'true');
    const items = within(menu()).getAllByRole('button');
    expect(items.map((b) => b.textContent)).toEqual([
      'มุมมองสัญญาณปิด',
      'บันทึกภาพบอร์ดเป็น PNG',
      'วงจรที่บันทึกไว้',
    ]);
    expect(items[0]).toHaveAttribute('aria-pressed', 'false');
    // the one that is shown is marked
    expect(items[0]).toHaveAttribute('aria-current', 'true');
    expect(items[1]).not.toHaveAttribute('aria-current');
  });

  it('do a tool that is chosen in the menu, close the menu, and show that tool from then on', () => {
    const h = handlers();
    render(<Harness handlers={h} />);
    fireEvent.click(arrow());
    fireEvent.click(within(menu()).getByRole('button', { name: 'บันทึกภาพบอร์ดเป็น PNG' }));
    expect(h.image).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('group', { name: 'เลือกเครื่องมือกระดาน' })).not.toBeInTheDocument();
    // the picture is now the button on the bar, and the signal view is in the menu
    expect(screen.queryByRole('button', { name: 'มุมมองสัญญาณ' })).not.toBeInTheDocument();
    const picture = screen.getByRole('button', { name: 'บันทึกภาพบอร์ดเป็น PNG' });
    expect(picture).not.toHaveAttribute('aria-pressed');
    fireEvent.click(picture);
    expect(h.image).toHaveBeenCalledTimes(2);
    fireEvent.click(arrow());
    fireEvent.click(within(menu()).getByRole('button', { name: 'วงจรที่บันทึกไว้' }));
    expect(h.saved).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByRole('button', { name: 'วงจรที่บันทึกไว้' }));
    expect(h.saved).toHaveBeenCalledTimes(2);
  });

  it('turn the signal view over from the menu, and say in the menu whether it is on', () => {
    const h = handlers();
    render(<Harness handlers={h} />);
    fireEvent.click(arrow());
    fireEvent.click(within(menu()).getByRole('button', { name: /^มุมมองสัญญาณ/ }));
    expect(h.signal).toHaveBeenCalledTimes(1);
    fireEvent.click(arrow());
    const item = within(menu()).getByRole('button', { name: /^มุมมองสัญญาณ/ });
    expect(item).toHaveTextContent('เปิด');
    expect(item).toHaveAttribute('aria-pressed', 'true');
  });

  it('close the menu with Esc and with a press anywhere else, and give the focus back to the arrow', () => {
    render(<Harness handlers={handlers()} />);
    fireEvent.click(arrow());
    fireEvent.keyDown(menu(), { key: 'Escape' });
    expect(screen.queryByRole('group', { name: 'เลือกเครื่องมือกระดาน' })).not.toBeInTheDocument();
    expect(arrow()).toHaveFocus();
    fireEvent.click(arrow());
    expect(menu()).toBeInTheDocument();
    fireEvent.pointerDown(document.body);
    expect(screen.queryByRole('group', { name: 'เลือกเครื่องมือกระดาน' })).not.toBeInTheDocument();
  });

  it('keep the zoom buttons working', () => {
    const h = handlers();
    render(<Harness handlers={h} />);
    fireEvent.click(screen.getByRole('button', { name: 'ซูมเข้า' }));
    fireEvent.click(screen.getByRole('button', { name: 'ซูมออก' }));
    fireEvent.click(screen.getByRole('button', { name: 'พอดีจอ' }));
    fireEvent.click(screen.getByRole('button', { name: 'ขนาดจริง 100%' }));
    expect([h.zoomIn, h.zoomOut, h.fit, h.actual].map((f) => f.mock.calls.length)).toEqual([
      1, 1, 1, 1,
    ]);
  });
});
