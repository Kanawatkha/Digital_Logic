import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Navbar } from '@/components/layout/Navbar';
import { NAV_ITEMS } from '@/config/site';
import { resetLayers } from '@/lib/layers';
import { resetPlaces, usePlaceMemory } from '@/lib/placeMemory';

function GoToExam() {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate('/exam')}>
      go
    </button>
  );
}

/** The back gesture of a phone, and where the page is. */
function Gesture() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div>
      <p data-testid="where">{pathname}</p>
      <button type="button" onClick={() => navigate(-1)}>
        gesture back
      </button>
    </div>
  );
}

beforeEach(() => {
  resetLayers();
  resetPlaces();
});

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

describe('Navbar and the back gesture', () => {
  function setupWithHistory() {
    return render(
      <MemoryRouter initialEntries={['/chapters/mid/1', '/']} initialIndex={1}>
        <Navbar />
        <Gesture />
      </MemoryRouter>,
    );
  }
  const back = () => fireEvent.click(screen.getByRole('button', { name: 'gesture back' }));
  const where = () => screen.getByTestId('where').textContent;

  it('closes the mobile menu, and only then leaves the page', async () => {
    setupWithHistory();
    fireEvent.click(screen.getByRole('button', { name: 'เมนู' }));
    expect(document.getElementById('mobile-menu')).not.toBeNull();
    back();
    await waitFor(() => expect(document.getElementById('mobile-menu')).toBeNull());
    expect(where()).toBe('/');
    expect(screen.getByRole('button', { name: 'เมนู' })).toHaveFocus();
    back();
    expect(where()).toBe('/chapters/mid/1');
  });

  it('lets a row of the menu take the place of the menu, so back goes to the page it was opened on', async () => {
    setupWithHistory();
    fireEvent.click(screen.getByRole('button', { name: 'เมนู' }));
    const menu = document.getElementById('mobile-menu') as HTMLElement;
    const row = within(menu)
      .getAllByRole('link')
      .find((link) => link.getAttribute('href') === '/exam') as HTMLElement;
    fireEvent.click(row);
    expect(where()).toBe('/exam/mid');
    back();
    expect(where()).toBe('/');
    // the panel stays for the length of its slide-up animation
    await waitFor(() => expect(document.getElementById('mobile-menu')).toBeNull());
  });

  it('closes the share card with the back gesture', async () => {
    setupWithHistory();
    const share = screen.getByRole('button', { name: 'แชร์เว็บไซต์' });
    fireEvent.click(share);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    back();
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    expect(where()).toBe('/');
    expect(share).toHaveFocus();
  });

  it('closes the menu before it opens the share card, leaving one entry for the card', async () => {
    setupWithHistory();
    fireEvent.click(screen.getByRole('button', { name: 'เมนู' }));
    fireEvent.click(screen.getByRole('button', { name: 'แชร์เว็บไซต์' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await waitFor(() => expect(document.getElementById('mobile-menu')).toBeNull());
    back();
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    expect(where()).toBe('/');
    back();
    expect(where()).toBe('/chapters/mid/1');
  });

  it('leaves nothing in the history when the menu or the card is closed with Escape or the cross', async () => {
    setupWithHistory();
    fireEvent.click(screen.getByRole('button', { name: 'เมนู' }));
    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() => expect(document.getElementById('mobile-menu')).toBeNull());
    fireEvent.click(screen.getByRole('button', { name: 'แชร์เว็บไซต์' }));
    fireEvent.click(screen.getByRole('button', { name: 'ปิด' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    back();
    expect(where()).toBe('/chapters/mid/1');
  });
});

describe('the tabs that open a section', () => {
  /** The frame of the site: the navbar, the memory of the place, and where the page is. */
  function Frame() {
    usePlaceMemory();
    const { pathname } = useLocation();
    return <p data-testid="where">{pathname}</p>;
  }
  function open(initial: string, entries = [initial]) {
    return render(
      <MemoryRouter initialEntries={entries} initialIndex={entries.length - 1}>
        <Navbar />
        <Frame />
      </MemoryRouter>,
    );
  }
  const where = () => screen.getByTestId('where').textContent;
  const tab = (name: string) =>
    within(screen.getByRole('navigation', { name: 'Main' })).getByRole('link', { name });
  let scrollTo: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  });

  it('brings back the page that was last read when the section is entered again', () => {
    open('/exam/final/3');
    fireEvent.click(tab('สรุปสูตร'));
    expect(where()).toBe('/formulas/mid');
    fireEvent.click(tab('ข้อสอบ'));
    expect(where()).toBe('/exam/final/3');
  });

  it('remembers each section on its own', () => {
    open('/chapters/final/8');
    fireEvent.click(tab('ข้อสอบ'));
    expect(where()).toBe('/exam/mid');
    fireEvent.click(tab('เนื้อหาตามบท'));
    expect(where()).toBe('/chapters/final/8');
  });

  it('goes to the main page when the tab of the open section is pressed again, and keeps it as the place', () => {
    open('/exam/final/3');
    fireEvent.click(tab('ข้อสอบ'));
    expect(where()).toBe('/exam/mid');
    fireEvent.click(tab('สรุปสูตร'));
    fireEvent.click(tab('ข้อสอบ'));
    expect(where()).toBe('/exam/mid');
  });

  it('goes to the top, without a new entry of the history, when the main page is already open', () => {
    open('/exam/mid', ['/', '/exam/mid']);
    fireEvent.click(tab('ข้อสอบ'));
    expect(where()).toBe('/exam/mid');
    expect(scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it('starts at the main page when what was remembered is not a page any more', () => {
    window.sessionStorage.setItem('dl-place:exam', '/exam/final/9');
    open('/formulas/mid');
    fireEvent.click(tab('ข้อสอบ'));
    expect(where()).toBe('/exam/mid');
  });

  it('keeps the address of the tab in the link, so a new tab opens the main page', () => {
    open('/exam/final/3');
    expect(tab('ข้อสอบ')).toHaveAttribute('href', '/exam');
  });

  it('leaves a click with a modifier key to the browser', () => {
    open('/formulas/mid');
    const before = where();
    fireEvent.click(tab('ข้อสอบ'), { ctrlKey: true });
    expect(where()).toBe(before);
  });

  it('opens the page of the lab and the home page as they are', () => {
    open('/exam/final/3');
    fireEvent.click(tab('แล็บ'));
    expect(where()).toBe('/lab');
  });

  it('brings back the place from a row of the mobile menu, in the place of the menu', async () => {
    open('/exam/final/3', ['/', '/exam/final/3']);
    fireEvent.click(tab('สรุปสูตร'));
    expect(where()).toBe('/formulas/mid');
    fireEvent.click(screen.getByRole('button', { name: 'เมนู' }));
    const menu = document.getElementById('mobile-menu') as HTMLElement;
    const row = within(menu)
      .getAllByRole('link')
      .find((link) => link.getAttribute('href') === '/exam') as HTMLElement;
    fireEvent.click(row);
    expect(where()).toBe('/exam/final/3');
    await waitFor(() => expect(document.getElementById('mobile-menu')).toBeNull());
  });

  it('takes the menu row of the open section to the main page and closes the menu', async () => {
    open('/exam/final/3');
    fireEvent.click(screen.getByRole('button', { name: 'เมนู' }));
    const menu = document.getElementById('mobile-menu') as HTMLElement;
    fireEvent.click(
      within(menu)
        .getAllByRole('link')
        .find((link) => link.getAttribute('href') === '/exam') as HTMLElement,
    );
    expect(where()).toBe('/exam/mid');
    await waitFor(() => expect(document.getElementById('mobile-menu')).toBeNull());
  });
});

describe('Navbar', () => {
  it('lists every page as a link in the tab row', () => {
    setup('/chapters/mid/3');
    const nav = screen.getByRole('navigation', { name: 'Main' });
    const links = within(nav).getAllByRole('link');
    // logo link plus one link per nav item (the mobile menu is closed)
    expect(links).toHaveLength(NAV_ITEMS.length + 1);
    const current = links.filter((l) => l.getAttribute('aria-current') === 'page');
    expect(current).toHaveLength(1);
    // the chapters are one tab, whichever chapter is open
    expect(current[0]).toHaveAttribute('href', '/chapters');
  });

  it('opens the mobile menu with one row per page and closes it with Escape', async () => {
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
    // Home row plus the 4 nav items
    expect(within(menu as HTMLElement).getAllByRole('link')).toHaveLength(NAV_ITEMS.length + 1);

    fireEvent.keyDown(document, { key: 'Escape' });
    // the panel stays for the length of its slide-up animation
    await waitFor(() => expect(document.getElementById('mobile-menu')).toBeNull());
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

  it('closes the mobile menu when the route changes', async () => {
    setup();
    fireEvent.click(screen.getByRole('button', { name: 'เมนู' }));
    expect(document.getElementById('mobile-menu')).not.toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'go' }));
    await waitFor(() => expect(document.getElementById('mobile-menu')).toBeNull());
  });

  it('closes the mobile menu by pressing the dimmed page below it', async () => {
    setup();
    fireEvent.click(screen.getByRole('button', { name: 'เมนู' }));
    const menu = document.getElementById('mobile-menu') as HTMLElement;
    fireEvent.pointerDown(menu);
    expect(document.getElementById('mobile-menu')).not.toBeNull();
    fireEvent.pointerDown(menu.parentElement as HTMLElement);
    await waitFor(() => expect(document.getElementById('mobile-menu')).toBeNull());
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

  it('shows the highlight pill on the current tab only, and hides it on the home page', () => {
    const { container, unmount } = setup('/chapters/mid/3');
    const pill = container.querySelector('header ul > span') as HTMLElement;
    expect(pill).toHaveAttribute('aria-hidden', 'true');
    expect(pill.style.opacity).toBe('1');
    unmount();

    const home = setup('/');
    const hidden = home.container.querySelector('header ul > span') as HTMLElement;
    expect(hidden.style.opacity).toBe('0');
  });
});
