import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { SolutionsProvider } from '@/components/content/SolutionsProvider';
import { useSolutions } from '@/components/content/solutions';
import { ExamSetTabs } from './ExamSetTabs';

function Probe() {
  return <p>{useSolutions().show ? 'solutions on' : 'solutions off'}</p>;
}

const setup = () =>
  render(
    <MemoryRouter initialEntries={['/exam/3']}>
      <SolutionsProvider>
        <ExamSetTabs />
        <Probe />
      </SolutionsProvider>
    </MemoryRouter>,
  );

describe('ExamSetTabs', () => {
  beforeEach(() => window.localStorage.clear());

  it('lists the four sets and marks the current one', () => {
    setup();
    const nav = screen.getByRole('navigation', { name: 'ชุดข้อสอบ' });
    expect(nav.querySelectorAll('a')).toHaveLength(4);
    expect(screen.getByRole('link', { name: 'ชุดที่ 3' })).toHaveAttribute('aria-current', 'page');
  });

  it('switches the solutions off and on, and remembers the choice', () => {
    const { unmount } = setup();
    const toggle = screen.getByRole('switch', { name: 'แสดงเฉลย' });
    expect(toggle).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByText('solutions on')).toBeInTheDocument();

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByText('solutions off')).toBeInTheDocument();

    unmount();
    setup();
    expect(screen.getByRole('switch', { name: 'แสดงเฉลย' })).toHaveAttribute(
      'aria-checked',
      'false',
    );
    expect(screen.getByText('solutions off')).toBeInTheDocument();
  });
});
