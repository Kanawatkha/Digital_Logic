import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AppLayout } from '@/app/layouts/AppLayout';
import { SECTIONS } from '@/config/sections';
import { recallPlace, resetPlaces } from '@/lib/placeMemory';

vi.mock('@/app/pwa/ToastHost', () => ({ ToastHost: () => null }));

function Where() {
  return <p data-testid="where">{useLocation().pathname}</p>;
}

function open(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="*" element={<Where />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  resetPlaces();
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
});

describe('the frame of the site', () => {
  it('remembers the page of a section as it is opened, and the tab brings it back', () => {
    open('/exam/final/3');
    const exam = SECTIONS.find((s) => s.id === 'exam')!;
    expect(recallPlace(exam)).toBe('/exam/final/3');

    const nav = screen.getByRole('navigation', { name: 'Main' });
    fireEvent.click(within(nav).getByRole('link', { name: 'สรุปสูตร' }));
    expect(screen.getByTestId('where')).toHaveTextContent('/formulas/mid');
    fireEvent.click(within(nav).getByRole('link', { name: 'ข้อสอบ' }));
    expect(screen.getByTestId('where')).toHaveTextContent('/exam/final/3');
  });
});
