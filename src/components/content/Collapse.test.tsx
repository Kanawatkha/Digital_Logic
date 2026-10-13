import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Collapse } from './Collapse';

describe('Collapse', () => {
  it('renders nothing while closed and mounts the children when opened', async () => {
    const { rerender } = render(<Collapse id="e1" open={false}>เฉลย</Collapse>);
    expect(screen.queryByText('เฉลย')).toBeNull();
    rerender(<Collapse id="e1" open>เฉลย</Collapse>);
    expect(await screen.findByText('เฉลย')).toBeInTheDocument();
  });

  it('unmounts the children after closing (at once when nothing can animate)', async () => {
    const { rerender } = render(<Collapse id="e1" open>เฉลย</Collapse>);
    rerender(<Collapse id="e1" open={false}>เฉลย</Collapse>);
    await waitFor(() => expect(screen.queryByText('เฉลย')).toBeNull());
  });
});
