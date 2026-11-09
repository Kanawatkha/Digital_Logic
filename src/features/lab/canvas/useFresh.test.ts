import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useFresh } from './useFresh';

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

const show = (ids: string[]) =>
  renderHook(({ list }) => useFresh(list, 1000), { initialProps: { list: ids } });
const asObject = (map: ReadonlyMap<string, number>) => Object.fromEntries(map);

describe('the parts that are new to the board', () => {
  it('are none for what was there when the page opened', () => {
    const { result } = show(['a', 'b']);
    expect(asObject(result.current)).toEqual({});
  });

  it('are the ones that arrive later, in the order they arrive', () => {
    const { result, rerender } = show(['a']);
    rerender({ list: ['a', 'b', 'c'] });
    expect(asObject(result.current)).toEqual({ b: 0, c: 1 });
  });

  it('stop being new when their entrance is over, and are not new again', () => {
    const { result, rerender } = show(['a']);
    rerender({ list: ['a', 'b'] });
    expect(result.current.has('b')).toBe(true);
    act(() => void vi.advanceTimersByTime(999));
    expect(result.current.has('b')).toBe(true);
    act(() => void vi.advanceTimersByTime(1));
    expect(asObject(result.current)).toEqual({});
    // moved in the list (a selected wire is drawn last): still not new
    rerender({ list: ['b', 'a'] });
    expect(asObject(result.current)).toEqual({});
  });

  it('start the wait again when another one arrives while the first is still coming in', () => {
    const { result, rerender } = show(['a']);
    rerender({ list: ['a', 'b'] });
    act(() => void vi.advanceTimersByTime(600));
    rerender({ list: ['a', 'b', 'c'] });
    act(() => void vi.advanceTimersByTime(600));
    // 1200 ms after b, but only 600 after c: both are still coming in
    expect(Object.keys(asObject(result.current)).sort()).toEqual(['b', 'c']);
    act(() => void vi.advanceTimersByTime(400));
    expect(asObject(result.current)).toEqual({});
  });

  it('forget a part that is taken away, so that it comes in again if it is put back', () => {
    const { result, rerender } = show(['a']);
    rerender({ list: ['a', 'b'] });
    rerender({ list: ['a'] });
    expect(asObject(result.current)).toEqual({});
    rerender({ list: ['a', 'b'] });
    expect(asObject(result.current)).toEqual({ b: 0 });
  });
});
