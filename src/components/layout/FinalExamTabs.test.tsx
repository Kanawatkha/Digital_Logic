import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import { SolutionsProvider } from '@/components/content/SolutionsProvider';
import { FinalExamTabs } from './FinalExamTabs';

const setup = (path = '/exam/final/3') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <SolutionsProvider>
        <FinalExamTabs />
      </SolutionsProvider>
    </MemoryRouter>,
  );

describe('FinalExamTabs', () => {
  beforeEach(() => window.localStorage.clear());

  it('lists the four big problems, each with its own address, and marks the current one', () => {
    setup();
    const nav = screen.getByRole('navigation', { name: 'เลือกข้อสอบ' });
    const links = within(nav).getAllByRole('link');
    expect(links.map((l) => l.getAttribute('href'))).toEqual([
      '/exam/final/1',
      '/exam/final/2',
      '/exam/final/3',
      '/exam/final/4',
    ]);
    expect(within(nav).getByRole('link', { name: 'ข้อ 3 วงจรนับ' })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  it('has the switch between the midterm and the final above them, on the final', () => {
    setup();
    const terms = screen.getByRole('navigation', { name: 'ภาคการศึกษา' });
    expect(within(terms).getByRole('link', { name: 'ปลายภาค' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(within(terms).getByRole('link', { name: 'กลางภาค' })).toHaveAttribute(
      'href',
      '/exam/mid',
    );
  });

  it('switches the solutions off and on', () => {
    setup();
    const toggle = screen.getByRole('switch', { name: 'แสดงเฉลย' });
    expect(toggle).toHaveAttribute('aria-checked', 'true');
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-checked', 'false');
  });
});
