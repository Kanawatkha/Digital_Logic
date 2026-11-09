import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { andOr } from '../analysis/circuits.fixture';
import { saveBlob, svgToPng } from '../analysis/exportPng';
import { ResultsDrawer } from './ResultsDrawer';

// jsdom cannot draw a canvas: what turns the SVG into a PNG is replaced, and what the drawer does
// with it is what is tested
vi.mock('../analysis/exportPng', () => ({
  svgToPng: vi.fn(),
  saveBlob: vi.fn(),
}));

beforeEach(() => {
  vi.mocked(svgToPng).mockReset();
  vi.mocked(saveBlob).mockReset();
});

const open = () => {
  render(<ResultsDrawer open onClose={() => {}} circuit={andOr()} />);
  fireEvent.click(screen.getByRole('tab', { name: 'วงจร' }));
};

describe('saving the diagram of the circuit', () => {
  it('turns the diagram on screen into a picture and saves it as circuit.png', async () => {
    const blob = new Blob(['png'], { type: 'image/png' });
    vi.mocked(svgToPng).mockResolvedValue(blob);
    open();
    fireEvent.click(screen.getByRole('button', { name: 'บันทึกเป็นรูป' }));
    await vi.waitFor(() => expect(saveBlob).toHaveBeenCalledWith(blob, 'circuit.png'));
    const [svg] = vi.mocked(svgToPng).mock.calls[0]!;
    expect(svg.tagName.toLowerCase()).toBe('svg');
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('says so when the picture cannot be made, and stops saying it after a good one', async () => {
    vi.mocked(svgToPng).mockRejectedValueOnce(new Error('no canvas'));
    open();
    const button = screen.getByRole('button', { name: 'บันทึกเป็นรูป' });
    fireEvent.click(button);
    expect(await screen.findByRole('alert')).toHaveTextContent('บันทึกรูปไม่สำเร็จ');
    expect(saveBlob).not.toHaveBeenCalled();
    vi.mocked(svgToPng).mockResolvedValueOnce(new Blob(['png']));
    fireEvent.click(button);
    await vi.waitFor(() => expect(screen.queryByRole('alert')).not.toBeInTheDocument());
    expect(saveBlob).toHaveBeenCalledTimes(1);
  });
});
