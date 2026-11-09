import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { PlacedIc, Warning } from '../sim/evaluate';
import { SOFT_DELAY_MS, Warnings } from './Warnings';

const ics: PlacedIc[] = [{ id: 'u1', type: '7408', board: 0, col: 11 }];
const unpowered: Warning = {
  kind: 'unpowered',
  ic: 'u1',
  missing: ['vcc', 'gnd'],
  railSplit: false,
};
const short: Warning = { kind: 'short' };
const ledUndriven: Warning = { kind: 'ledUndriven', led: 2 };
const noOutput: Warning = { kind: 'noOutput' };

const button = () => screen.queryByRole('button', { name: /^คำเตือนของวงจร: \d+$/ });
/** jsdom has no AnimationEvent, so the name of the animation is put on a plain event */
const animationEnd = (animationName: string) => {
  // React listens for the name the browser has (jsdom has the prefixed one only)
  for (const type of ['animationend', 'webkitAnimationEnd']) {
    const event = new Event(type, { bubbles: true });
    Object.defineProperty(event, 'animationName', { value: animationName });
    act(() => void button()!.dispatchEvent(event));
  }
};
const pass = (ms: number) => act(() => void vi.advanceTimersByTime(ms));

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

describe('the warnings button', () => {
  it('is dark when there are only suggestions, amber for something to fix and red for a fault', () => {
    const { rerender } = render(<Warnings warnings={[noOutput]} ics={ics} />);
    pass(SOFT_DELAY_MS);
    expect(button()?.className).toContain('bg-surface-dark');
    rerender(<Warnings warnings={[noOutput, unpowered]} ics={ics} />);
    expect(button()?.className).toContain('bg-warning');
    rerender(<Warnings warnings={[noOutput, unpowered, short]} ics={ics} />);
    expect(button()?.className).toContain('bg-error');
  });

  it('shows a fault and an unpowered chip at once, but holds a suggestion about the wiring back', () => {
    const { rerender } = render(<Warnings warnings={[unpowered]} ics={ics} />);
    expect(button()).toHaveAccessibleName('คำเตือนของวงจร: 1');
    rerender(<Warnings warnings={[unpowered, ledUndriven, noOutput]} ics={ics} />);
    // the circuit changed just now: the two suggestions wait
    expect(button()).toHaveAccessibleName('คำเตือนของวงจร: 1');
    pass(SOFT_DELAY_MS - 50);
    expect(button()).toHaveAccessibleName('คำเตือนของวงจร: 1');
    pass(50);
    expect(button()).toHaveAccessibleName('คำเตือนของวงจร: 3');
  });

  it('starts the wait again whenever the circuit changes, and drops a suggestion that no longer holds', () => {
    const { rerender } = render(<Warnings warnings={[ledUndriven]} ics={ics} />);
    pass(SOFT_DELAY_MS);
    expect(button()).toHaveAccessibleName('คำเตือนของวงจร: 1');
    // a new suggestion waits, and the one that held stays
    rerender(<Warnings warnings={[ledUndriven, noOutput]} ics={ics} />);
    expect(button()).toHaveAccessibleName('คำเตือนของวงจร: 1');
    pass(SOFT_DELAY_MS - 100);
    // another change in the middle of the wait
    rerender(<Warnings warnings={[ledUndriven, noOutput, unpowered]} ics={ics} />);
    pass(SOFT_DELAY_MS - 100);
    expect(button()).toHaveAccessibleName('คำเตือนของวงจร: 2');
    pass(100);
    expect(button()).toHaveAccessibleName('คำเตือนของวงจร: 3');
    // the suggestion goes and comes back: it has to wait again
    rerender(<Warnings warnings={[unpowered]} ics={ics} />);
    expect(button()).toHaveAccessibleName('คำเตือนของวงจร: 1');
    rerender(<Warnings warnings={[unpowered, noOutput]} ics={ics} />);
    expect(button()).toHaveAccessibleName('คำเตือนของวงจร: 1');
  });

  it('lists a line with a place as a button that shows the place, then closes the list', () => {
    const onLocate = vi.fn();
    render(<Warnings warnings={[unpowered, short]} ics={ics} onLocate={onLocate} />);
    fireEvent.click(button()!);
    const line = screen.getByRole('button', { name: /ไม่มีไฟ ต่อขา 14/ });
    expect(line).toHaveTextContent('พาไปดู');
    fireEvent.click(line);
    expect(onLocate).toHaveBeenCalledWith({ kind: 'ic', id: 'u1' });
    expect(button()).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button()!);
    fireEvent.click(screen.getByRole('button', { name: /ลัดวงจร/ }));
    expect(onLocate).toHaveBeenLastCalledWith({ kind: 'point', id: 'power:+5V:0' });
  });

  it('gives a line about a chip a button for its pins, and closes the list', () => {
    const onShowPins = vi.fn();
    const onLocate = vi.fn();
    render(
      <Warnings
        warnings={[unpowered, short]}
        ics={ics}
        onLocate={onLocate}
        onShowPins={onShowPins}
      />,
    );
    fireEvent.click(button()!);
    // one chip line has the button, the line about the short (a point) has not
    expect(screen.getAllByRole('button', { name: 'ดูขา' })).toHaveLength(1);
    fireEvent.click(screen.getByRole('button', { name: 'ดูขา' }));
    expect(onShowPins).toHaveBeenCalledWith('u1');
    expect(onLocate).not.toHaveBeenCalled();
    expect(button()).toHaveAttribute('aria-expanded', 'false');
  });

  it('has no button for the pins unless there is somewhere to show them', () => {
    render(<Warnings warnings={[unpowered]} ics={ics} onLocate={vi.fn()} />);
    fireEvent.click(button()!);
    expect(screen.queryByRole('button', { name: 'ดูขา' })).not.toBeInTheDocument();
  });

  it('lists a line as plain text when nothing can be shown, or a line has no place', () => {
    render(<Warnings warnings={[noOutput, unpowered]} ics={ics} />);
    pass(SOFT_DELAY_MS);
    fireEvent.click(button()!);
    const list = screen.getByRole('list');
    expect(list.querySelectorAll('button')).toHaveLength(0);
    expect(list).toHaveTextContent('ยังไม่มี LED ต่อเข้าวงจร');
  });

  it('puts the lines in order of weight: faults, then things to fix, then suggestions', () => {
    render(<Warnings warnings={[noOutput, unpowered, short]} ics={ics} />);
    pass(SOFT_DELAY_MS);
    fireEvent.click(button()!);
    const items = screen.getAllByRole('listitem').map((item) => item.className);
    expect(items[0]).toContain('bg-error');
    expect(items[1]).toContain('bg-warning');
    expect(items[2]).toContain('bg-surface-card');
  });

  it('shakes once when a fault that breaks the circuit appears, and not for the rest', () => {
    const { rerender } = render(<Warnings warnings={[unpowered]} ics={ics} />);
    expect(button()).not.toHaveAttribute('data-shaking');
    rerender(<Warnings warnings={[unpowered, short]} ics={ics} />);
    expect(button()).toHaveAttribute('data-shaking');
    // the end of another animation (the shake, the number) leaves it be; the end of the ring clears it
    animationEnd('lab-shake');
    expect(button()).toHaveAttribute('data-shaking');
    animationEnd('lab-ring');
    expect(button()).not.toHaveAttribute('data-shaking');
    // a second fault while one is there does not shake it again
    rerender(<Warnings warnings={[unpowered, short, { kind: 'reversed', ic: 'u1' }]} ics={ics} />);
    expect(button()).not.toHaveAttribute('data-shaking');
    // when the faults are gone and one comes back, it does
    rerender(<Warnings warnings={[unpowered]} ics={ics} />);
    rerender(<Warnings warnings={[unpowered, short]} ics={ics} />);
    expect(button()).toHaveAttribute('data-shaking');
  });
});
