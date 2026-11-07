import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Notation } from './Notation';

describe('Notation', () => {
  it('shows NOT as a bar and keeps the primes for a screen reader', () => {
    const { container } = render(<Notation text="LED1 = A'B + AB'" />);
    const math = screen.getByRole('img', { name: "LED1 = A'B + AB'" });
    expect(math).toBeInTheDocument();
    expect(container.querySelectorAll('.notation-bar')).toHaveLength(2);
    // no prime on screen
    expect(container.textContent).toBe('LED1 = AB + AB');
  });

  it('stacks the bars of a bar over a bar', () => {
    const { container } = render(<Notation text="(A'·B)'" />);
    const bars = container.querySelectorAll<HTMLElement>('.notation-bar');
    expect(bars).toHaveLength(2);
    // the outer bar sits above the inner one
    expect(bars[0]!.style.paddingTop).toBe('3px');
    expect(bars[1]!.style.paddingTop).toBe('0px');
  });
});
