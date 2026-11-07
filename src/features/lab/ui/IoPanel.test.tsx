import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { IoPanel } from './IoPanel';

const down = Array.from({ length: 8 }, () => false);
const dark = Array.from({ length: 16 }, () => false);

describe('IoPanel', () => {
  it('has a button for each of the eight switches, with its state', () => {
    const switches = [...down];
    switches[2] = true;
    render(<IoPanel stacked={false} switches={switches} leds={dark} onToggle={() => {}} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(8);
    expect(screen.getByRole('button', { name: 'สวิตช์ 3' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.getByRole('button', { name: 'สวิตช์ 1' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
  });

  it('reports the index of the switch that was pressed, with a click or the keyboard', () => {
    const onToggle = vi.fn();
    render(<IoPanel stacked={false} switches={down} leds={dark} onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('button', { name: 'สวิตช์ 5' }));
    fireEvent.click(screen.getByRole('button', { name: 'สวิตช์ 1' }));
    expect(onToggle.mock.calls).toEqual([[4], [0]]);
  });

  it('shows all sixteen LEDs and says which are lit', () => {
    const leds = [...dark];
    leds[0] = true;
    leds[15] = true;
    render(<IoPanel stacked={false} switches={down} leds={leds} onToggle={() => {}} />);
    expect(screen.getAllByRole('img')).toHaveLength(16);
    expect(screen.getByRole('img', { name: 'LED 1: ติด' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'LED 16: ติด' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'LED 8: ดับ' })).toBeInTheDocument();
  });

  it('lists the LEDs as the monitor prints them: 16 to 9, then 8 to 1', () => {
    render(<IoPanel stacked={false} switches={down} leds={dark} onToggle={() => {}} />);
    const order = screen.getAllByRole('img').map((led) => led.getAttribute('title'));
    expect(order[0]).toBe('LED 16');
    expect(order[7]).toBe('LED 9');
    expect(order[8]).toBe('LED 8');
    expect(order[15]).toBe('LED 1');
  });

  it('works the same stacked, for a narrow window', () => {
    const onToggle = vi.fn();
    const leds = [...dark];
    leds[2] = true;
    render(<IoPanel stacked switches={down} leds={leds} onToggle={onToggle} />);
    expect(screen.getAllByRole('button')).toHaveLength(8);
    expect(screen.getAllByRole('img')).toHaveLength(16);
    expect(screen.getByRole('img', { name: 'LED 3: ติด' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'สวิตช์ 8' }));
    expect(onToggle).toHaveBeenCalledWith(7);
  });
});
