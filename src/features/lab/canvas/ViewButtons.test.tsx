import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ViewButtons } from './ViewButtons';

describe('the zoom buttons', () => {
  it('say the zoom, and zoom in, out, to fit and to the real size', () => {
    const h = { zoomIn: vi.fn(), zoomOut: vi.fn(), fit: vi.fn(), actual: vi.fn() };
    render(
      <ViewButtons
        percent={61}
        onZoomIn={h.zoomIn}
        onZoomOut={h.zoomOut}
        onFit={h.fit}
        onActualSize={h.actual}
      />,
    );
    expect(screen.getByRole('button', { name: 'ขนาดจริง 100%' })).toHaveTextContent('61%');
    fireEvent.click(screen.getByRole('button', { name: 'ซูมเข้า' }));
    fireEvent.click(screen.getByRole('button', { name: 'ซูมออก' }));
    fireEvent.click(screen.getByRole('button', { name: 'พอดีจอ' }));
    fireEvent.click(screen.getByRole('button', { name: 'ขนาดจริง 100%' }));
    expect([h.zoomIn, h.zoomOut, h.fit, h.actual].map((f) => f.mock.calls.length)).toEqual([
      1, 1, 1, 1,
    ]);
    // the tools of the board are not here: they are in the tray of the chips
    expect(screen.queryByRole('button', { name: 'เลือกเครื่องมือกระดาน' })).not.toBeInTheDocument();
  });
});
