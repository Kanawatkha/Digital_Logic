import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
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

  it('opens the share dialog with a QR code and the link, and closes it with Escape', async () => {
    setup();
    const share = screen.getByRole('button', { name: 'แชร์เว็บไซต์' });
    expect(screen.queryByRole('dialog')).toBeNull();

    fireEvent.click(share);
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('img', { name: /^QR / })).toBeInTheDocument();
    expect(within(dialog).getByRole('textbox')).toHaveValue(
      `${window.location.origin}${import.meta.env.BASE_URL}`,
    );
    expect(within(dialog).getByRole('button', { name: 'คัดลอกลิงก์' })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    expect(share).toHaveFocus();
  });

  it('closes the share dialog with the cross or by pressing outside the card', async () => {
    setup();
    fireEvent.click(screen.getByRole('button', { name: 'แชร์เว็บไซต์' }));
    fireEvent.click(screen.getByRole('button', { name: 'ปิด' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());

    fireEvent.click(screen.getByRole('button', { name: 'แชร์เว็บไซต์' }));
    const overlay = screen.getByRole('dialog').parentElement as HTMLElement;
    fireEvent.pointerDown(screen.getByRole('dialog'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.pointerDown(overlay);
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
  });

  it('copies the link and shows that it was copied', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    setup();
    fireEvent.click(screen.getByRole('button', { name: 'แชร์เว็บไซต์' }));
    fireEvent.click(screen.getByRole('button', { name: 'คัดลอกลิงก์' }));
    await waitFor(() => expect(screen.getByText('คัดลอกลิงก์แล้ว')).toBeInTheDocument());
    expect(writeText).toHaveBeenCalledWith(`${window.location.origin}${import.meta.env.BASE_URL}`);
  });
});
