import { afterEach, describe, expect, it, vi } from 'vitest';
import { watchVersion } from './versionCheck';

describe('watchVersion', () => {
  afterEach(() => vi.restoreAllMocks());

  it('does nothing in development builds', () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch');
    watchVersion()();
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
