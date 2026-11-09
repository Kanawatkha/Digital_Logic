import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SIGNAL_KEY, useSignalView } from './useSignalView';

beforeEach(() => localStorage.clear());
afterEach(() => vi.restoreAllMocks());

describe('the choice of the signal view', () => {
  it('starts off, turns over, and is kept in the browser', () => {
    const { result } = renderHook(() => useSignalView());
    expect(result.current[0]).toBe(false);
    act(() => result.current[1]());
    expect(result.current[0]).toBe(true);
    expect(localStorage.getItem(SIGNAL_KEY)).toBe('1');
    // the next visit starts as it was left
    const next = renderHook(() => useSignalView());
    expect(next.result.current[0]).toBe(true);
    act(() => next.result.current[1]());
    expect(next.result.current[0]).toBe(false);
    expect(localStorage.getItem(SIGNAL_KEY)).toBeNull();
  });

  it('works without storage: off to start, and it still turns over', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    const { result } = renderHook(() => useSignalView());
    expect(result.current[0]).toBe(false);
    act(() => result.current[1]());
    expect(result.current[0]).toBe(true);
  });
});
