import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ExamTimer } from './ExamTimer';
import { TIMER_KEY, TIMER_SECONDS, loadTimer } from './useCountdown';

const group = () => screen.getByRole('group', { name: 'จับเวลาสอบ' });
const start = () => screen.getByRole('button', { name: /^(เริ่มจับเวลา 15 นาที|จับเวลาต่อ)$/ });
const stop = () => screen.getByRole('button', { name: 'หยุดจับเวลา' });
const reset = () => screen.getByRole('button', { name: 'เริ่มใหม่' });
/** The time on the face of the timer, without the words for a screen reader */
const face = () => group().querySelector('[data-lab-timer-face]')?.textContent ?? '';
const shown = () => (face().match(/\d+:\d\d|หมดเวลา/) ?? [''])[0];
const pass = (seconds: number) => act(() => void vi.advanceTimersByTime(seconds * 1000));

beforeEach(() => {
  localStorage.clear();
  vi.useFakeTimers();
});
afterEach(() => vi.useRealTimers());

describe('the exam timer', () => {
  it('is fixed at 15 minutes and waits to be started', () => {
    expect(TIMER_SECONDS).toBe(900);
    render(<ExamTimer />);
    expect(shown()).toBe('15:00');
    expect(reset()).toBeDisabled();
    pass(30);
    expect(shown()).toBe('15:00');
  });

  it('counts down once started, and stops with the button', () => {
    render(<ExamTimer />);
    fireEvent.click(start());
    pass(61);
    expect(shown()).toBe('13:59');
    fireEvent.click(stop());
    expect(screen.getByRole('status')).toHaveTextContent('หยุดจับเวลาที่ 13:59');
    // stopped: the time does not move
    pass(120);
    expect(shown()).toBe('13:59');
    expect(reset()).toBeEnabled();
  });

  it('goes on from where it stopped', () => {
    render(<ExamTimer />);
    fireEvent.click(start());
    pass(100);
    fireEvent.click(stop());
    fireEvent.click(screen.getByRole('button', { name: 'จับเวลาต่อ' }));
    pass(20);
    expect(shown()).toBe('13:00');
  });

  it('starts again from the full 15 minutes, while running or stopped', () => {
    render(<ExamTimer />);
    fireEvent.click(start());
    pass(300);
    fireEvent.click(reset());
    expect(shown()).toBe('15:00');
    // reset stops it
    pass(10);
    expect(shown()).toBe('15:00');
    expect(screen.getByRole('button', { name: 'เริ่มจับเวลา 15 นาที' })).toBeInTheDocument();
    fireEvent.click(start());
    pass(5);
    fireEvent.click(stop());
    fireEvent.click(reset());
    expect(shown()).toBe('15:00');
  });

  it('turns red for the last minute, and says that the time is out, and only a reset starts it again', () => {
    render(<ExamTimer />);
    fireEvent.click(start());
    pass(839);
    expect(shown()).toBe('1:01');
    expect(group().className).not.toContain('bg-error');
    pass(1);
    expect(shown()).toBe('1:00');
    expect(group().firstElementChild?.className).toContain('text-error');
    pass(60);
    expect(shown()).toBe('หมดเวลา');
    expect(group().className).toContain('bg-error');
    expect(screen.getByRole('status')).toHaveTextContent('หมดเวลา');
    expect(
      screen.getByRole('button', { name: /^(เริ่มจับเวลา 15 นาที|จับเวลาต่อ)$/ }),
    ).toBeDisabled();
    fireEvent.click(reset());
    expect(shown()).toBe('15:00');
    expect(group().className).not.toContain('bg-error');
  });

  it('is not told to a screen reader every second', () => {
    render(<ExamTimer />);
    fireEvent.click(start());
    expect(screen.getByRole('status')).toHaveTextContent('เริ่มจับเวลาแล้ว');
    pass(30);
    expect(screen.getByRole('status')).toHaveTextContent(/^เริ่มจับเวลาแล้ว$/);
  });

  it('keeps the time in the browser: a page that is opened again finds it as it was', () => {
    const first = render(<ExamTimer />);
    fireEvent.click(start());
    pass(200);
    first.unmount();
    // it kept running while the page was away
    pass(100);
    render(<ExamTimer />);
    expect(shown()).toBe('10:00');
    // and it still counts
    pass(60);
    expect(shown()).toBe('9:00');
  });

  it('comes back stopped, with the time it had, and out of time when it ran out while away', () => {
    const first = render(<ExamTimer />);
    fireEvent.click(start());
    pass(60);
    fireEvent.click(stop());
    first.unmount();
    pass(500);
    const second = render(<ExamTimer />);
    expect(shown()).toBe('14:00');
    fireEvent.click(start());
    second.unmount();
    pass(2000);
    render(<ExamTimer />);
    expect(shown()).toBe('หมดเวลา');
  });

  it('ignores what it cannot read in the storage', () => {
    for (const text of [
      'x',
      '[]',
      '{"remainingMs":"a"}',
      '{"remainingMs":1,"endAt":"b"}',
      'null',
    ]) {
      localStorage.setItem(TIMER_KEY, text);
      expect(loadTimer().remainingMs).toBe(TIMER_SECONDS * 1000);
    }
    localStorage.setItem(TIMER_KEY, '{"remainingMs":-5,"endAt":null}');
    expect(loadTimer().remainingMs).toBe(0);
    localStorage.setItem(TIMER_KEY, '{"remainingMs":99999999,"endAt":null}');
    expect(loadTimer().remainingMs).toBe(TIMER_SECONDS * 1000);
  });

  it('forgets nothing and stores nothing while it is untouched', () => {
    render(<ExamTimer />);
    expect(localStorage.getItem(TIMER_KEY)).toBeNull();
    fireEvent.click(start());
    expect(localStorage.getItem(TIMER_KEY)).not.toBeNull();
    fireEvent.click(reset());
    expect(localStorage.getItem(TIMER_KEY)).toBeNull();
  });
});
