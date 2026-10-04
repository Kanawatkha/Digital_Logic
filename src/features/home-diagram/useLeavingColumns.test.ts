import { describe, expect, it } from 'vitest';
import { LEAVE_STAGGER_MS, leaveDelay } from './useLeavingColumns';

describe('leaveDelay', () => {
  it('closes from the deepest column back to the root, one step after the other', () => {
    // columns 1 to 5 were open and all of them close
    expect(leaveDelay(5, 5, 0)).toBe(0);
    expect(leaveDelay(4, 5, 0)).toBe(LEAVE_STAGGER_MS);
    expect(leaveDelay(1, 5, 0)).toBe(4 * LEAVE_STAGGER_MS);
  });

  it('only delays columns that disappear, not ones that are replaced', () => {
    // column 2 gets a new content while columns 3 to 5 close
    expect(leaveDelay(2, 5, 2)).toBe(0);
    expect(leaveDelay(3, 5, 2)).toBe(2 * LEAVE_STAGGER_MS);
    expect(leaveDelay(5, 5, 2)).toBe(0);
  });
});
