import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Navbar } from '@/components/layout/Navbar';
import { NAV_ITEMS } from '@/config/site';

function GoToExam() {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate('/exam')}>
      go
    </button>
  );
}

function setup(initial = '/') {
  return render(
    <MemoryRouter initialEntries={[initial]}>
      <Navbar />
      <Routes>
        <Route path="*" element={<GoToExam />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('Navbar', () => {
  it('lists every page as a link in the tab row', () => {
    setup('/chapter/3');
    const nav = screen.getByRole('navigation', { name: 'Main' });
    const links = within(nav).getAllByRole('link');
    // logo link plus one link per nav item (the mobile menu is closed)
    expect(links).toHaveLength(NAV_ITEMS.length + 1);
    const current = links.filter((l) => l.getAttribute('aria-current') === 'page');
    expect(current).toHaveLength(1);
    expect(current[0]).toHaveAttribute('href', '/chapter/3');
  });

  it('opens the mobile menu with one row per page and closes it with Escape', () => {
    setup();
    const toggle = screen.getByRole('button', { name: 'เมนู' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(document.getElementById('mobile-menu')).toBeNull();

    fireEvent.click(toggle);
    const menu = document.getElementById('mobile-menu');
    expect(menu).not.toBeNull();
    expect(screen.getByRole('button', { name: 'ปิดเมนู' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    // Home row plus the 7 nav items
    expect(within(menu as HTMLElement).getAllByRole('link')).toHaveLength(NAV_ITEMS.length + 1);

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(document.getElementById('mobile-menu')).toBeNull();
    expect(screen.getByRole('button', { name: 'เมนู' })).toHaveFocus();
  });

  it('keeps focus inside the open mobile menu', () => {
    setup();
    fireEvent.click(screen.getByRole('button', { name: 'เมนู' }));
    const menu = document.getElementById('mobile-menu') as HTMLElement;
    const rows = within(menu).getAllByRole('link');
    expect(rows[0]).toHaveFocus();
    rows[rows.length - 1].focus();
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(rows[0]).toHaveFocus();
  });

  it('closes the mobile menu when the route changes', () => {
    setup();
    fireEvent.click(screen.getByRole('button', { name: 'เมนู' }));
    expect(document.getElementById('mobile-menu')).not.toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'go' }));
    expect(document.getElementById('mobile-menu')).toBeNull();
  });
});
