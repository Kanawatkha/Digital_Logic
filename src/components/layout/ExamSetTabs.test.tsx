import { fireEvent, render, screen, within } from '@testing-library/react';
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
    <MemoryRouter initialEntries={['/exam/mid/3']}>
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

  it('has the switch between the midterm and the final above the sets, on the midterm', () => {
    setup();
    const terms = screen.getByRole('navigation', { name: 'ภาคการศึกษา' });
    expect(
      within(terms)
        .getAllByRole('link')
        .map((l) => l.textContent),
    ).toEqual(['กลางภาค', 'ปลายภาค']);
    expect(within(terms).getByRole('link', { name: 'ปลายภาค' })).toHaveAttribute(
      'href',
      '/exam/final',
    );
    expect(within(terms).getByRole('link', { name: 'กลางภาค' })).toHaveAttribute(
      'href',
      '/exam/mid',
    );
    // the one for the page that is open is marked: the sets are the midterm's
    expect(within(terms).getByRole('link', { name: 'กลางภาค' })).toHaveAttribute(
      'aria-current',
      'page',
    );
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
