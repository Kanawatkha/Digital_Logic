import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { LabBoard } from '../LabBoard';
import { resetLabTasks } from './useLabTasks';

// the tasks come from the content, built here the way `npm run content` builds them
vi.mock('@/content/loaders', async (importOriginal) => {
  const { join } = await import('node:path');
  const { buildLabTasks } = await import('../../../../scripts/build-content/tasks');
  const data = buildLabTasks(join(process.cwd(), 'content')).data;
  return { ...(await importOriginal<object>()), loadLabTasks: () => Promise.resolve(data) };
});

beforeAll(() => {
  // reduced motion, so the drawer opens and closes at once; a wide window, so every tool is in the row
  window.matchMedia = ((query: string) => ({
    matches: query.includes('prefers-reduced-motion') || query.includes('min-width'),
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;
});

beforeEach(() => {
  localStorage.clear();
  resetLabTasks();
});

const chips = () => document.querySelectorAll('[data-ic-id]').length;
const wires = () => document.querySelectorAll('[data-wire-id]').length;

function openLab() {
  return render(
    <MemoryRouter>
      <LabBoard />
    </MemoryRouter>,
  );
}

/** Opens the drawer and waits for the list. */
async function openDrawer() {
  fireEvent.click(screen.getByRole('button', { name: 'โจทย์' }));
  const dialog = screen.getByRole('dialog', { name: 'โจทย์' });
  await within(dialog).findByRole('heading', { level: 3, name: /สมการบูลีนขนาดใหญ่/ });
  return dialog;
}

/** Unfolds a kind of the list by its name. */
function openKind(dialog: HTMLElement, name: RegExp) {
  fireEvent.click(within(dialog).getByRole('button', { name }));
}

/** Opens the first task of the first kind. */
async function openFirstTask() {
  const dialog = await openDrawer();
  openKind(dialog, /สมการบูลีนขนาดใหญ่/);
  fireEvent.click(within(dialog).getByRole('button', { name: /^ข้อ 1 / }));
  return dialog;
}

describe('the tasks drawer of the lab', () => {
  it('opens from the tray button over the board, and closes with Esc and gives the focus back', async () => {
    openLab();
    const button = screen.getByRole('button', { name: 'โจทย์' });
    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await openDrawer();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(button).toHaveFocus();
  });

  it('lists the tasks by kind, every kind folded to start with', async () => {
    openLab();
    const dialog = await openDrawer();
    const toggles = within(dialog)
      .getAllByRole('heading', { level: 3 })
      .map((h) => within(h).getByRole('button'));
    expect(toggles).toHaveLength(5);
    expect(toggles.every((b) => b.getAttribute('aria-expanded') === 'false')).toBe(true);
    expect(within(dialog).queryAllByRole('button', { name: /^ข้อ \d+ / })).toHaveLength(0);
    fireEvent.click(toggles[0]!);
    expect(within(dialog).getAllByRole('button', { name: /^ข้อ \d+ / })).toHaveLength(8);
    fireEvent.click(toggles[1]!);
    expect(within(dialog).getAllByRole('button', { name: /^ข้อ \d+ / })).toHaveLength(16);
    fireEvent.click(toggles[0]!);
    expect(within(dialog).getAllByRole('button', { name: /^ข้อ \d+ / })).toHaveLength(8);
  });

  it('keeps the list as it was left: coming back from a task, and closing and opening the drawer', async () => {
    openLab();
    const dialog = await openDrawer();
    // open the truth table kind, and the first task in it
    openKind(dialog, /ตารางความจริง/);
    const list = document.getElementById('lab-task-list-02')!;
    fireEvent.click(within(list).getByRole('button', { name: /^ข้อ 1 / }));
    fireEvent.click(within(dialog).getByRole('button', { name: 'กลับรายการโจทย์' }));
    // the kind that was open is still the one open, and no other opened in its place
    const states = () =>
      within(dialog)
        .getAllByRole('heading', { level: 3 })
        .map((h) => within(h).getByRole('button').getAttribute('aria-expanded'));
    expect(states()).toEqual(['false', 'true', 'false', 'false', 'false']);
    // closed and opened again: the same
    fireEvent.keyDown(document, { key: 'Escape' });
    fireEvent.click(screen.getByRole('button', { name: 'โจทย์' }));
    const again = await screen.findByRole('dialog', { name: 'โจทย์' });
    await within(again).findByRole('heading', { level: 3, name: /สมการบูลีนขนาดใหญ่/ });
    expect(
      within(again)
        .getAllByRole('heading', { level: 3 })
        .map((h) => within(h).getByRole('button').getAttribute('aria-expanded')),
    ).toEqual(['false', 'true', 'false', 'false', 'false']);
  });

  it('has nothing of a check: no button, no marks, no choice of switches', async () => {
    openLab();
    const dialog = await openFirstTask();
    expect(within(dialog).queryByRole('button', { name: /ตรวจ/ })).not.toBeInTheDocument();
    expect(within(dialog).queryByText(/ทำแล้ว|ผ่าน|ไม่เกิน \d+ เกต/)).not.toBeInTheDocument();
    expect(within(dialog).queryByRole('combobox')).not.toBeInTheDocument();
    expect(within(dialog).getByRole('button', { name: 'ดูเฉลย' })).toBeInTheDocument();
  });

  it('shows a task, and goes back to the list and to the same task when it is opened again', async () => {
    openLab();
    const dialog = await openFirstTask();
    expect(within(dialog).getByRole('heading', { level: 3, name: /^ข้อ 1 / })).toBeInTheDocument();
    // the answer is not shown until it is asked for
    expect(within(dialog).queryByText('วิธีทำ')).not.toBeInTheDocument();
    fireEvent.click(within(dialog).getByRole('button', { name: 'กลับรายการโจทย์' }));
    expect(within(dialog).getAllByRole('heading', { level: 3 })).toHaveLength(5);
    // the kind of the task is still unfolded
    fireEvent.click(within(dialog).getByRole('button', { name: /^ข้อ 2 / }));
    fireEvent.keyDown(document, { key: 'Escape' });
    // the drawer remembers the task that was open
    fireEvent.click(screen.getByRole('button', { name: 'โจทย์' }));
    const again = await screen.findByRole('dialog', { name: 'โจทย์' });
    expect(await within(again).findByRole('heading', { level: 3, name: /^ข้อ 2 / })).toBeVisible();
  });

  it('says which chip a NAND only task allows', async () => {
    openLab();
    const dialog = await openDrawer();
    openKind(dialog, /สมการบูลีนขนาดใหญ่/);
    fireEvent.click(within(dialog).getByRole('button', { name: /^ข้อ 5 .*NAND$/ }));
    expect(within(dialog).getByText('ใช้ได้เฉพาะ NAND (7400)')).toBeInTheDocument();
  });

  it('draws the figure of a task that has one', async () => {
    openLab();
    const dialog = await openDrawer();
    fireEvent.click(within(dialog).getByRole('button', { name: /วงจรลอจิกขนาดใหญ่/ }));
    const list = document.getElementById('lab-task-list-04')!;
    fireEvent.click(within(list).getByRole('button', { name: /^ข้อ 1 / }));
    const figure = within(dialog).getByRole('region', { name: 'วงจรในโจทย์' });
    expect(within(figure).getByRole('img', { name: 'วงจร' })).toBeInTheDocument();
    expect(figure.querySelector('desc')?.textContent).toMatch(/(AND|OR|NOT|NAND|NOR) \(/);
  });

  it('shows behind one button the worked solution, the answer, the table and the circuit', async () => {
    openLab();
    const dialog = await openFirstTask();
    const button = within(dialog).getByRole('button', { name: 'ดูเฉลย' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(button).toHaveAccessibleName('ซ่อนเฉลย');
    expect(within(dialog).getByText('วิธีทำ')).toBeInTheDocument();
    // the written answer line and the table of the answer
    expect(dialog.querySelectorAll('.katex').length).toBeGreaterThan(2);
    expect(within(dialog).getByText('Ans')).toBeInTheDocument();
    const table = within(dialog).getByRole('table', { name: 'ตารางความจริงของเฉลย' });
    expect(within(table).getAllByRole('row')).toHaveLength(9);
    expect(within(dialog).getByText(/^วงจรเฉลย · เฉลยใช้ \d+ เกต$/)).toBeInTheDocument();
    fireEvent.click(button);
    expect(within(dialog).queryByText('วิธีทำ')).not.toBeInTheDocument();
  });

  it('keeps the solution shown when the drawer is closed and opened again, for that task only', async () => {
    openLab();
    const dialog = await openFirstTask();
    fireEvent.click(within(dialog).getByRole('button', { name: 'ดูเฉลย' }));
    expect(within(dialog).getByText('วิธีทำ')).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    fireEvent.click(screen.getByRole('button', { name: 'โจทย์' }));
    const again = await screen.findByRole('dialog', { name: 'โจทย์' });
    expect(await within(again).findByText('วิธีทำ')).toBeInTheDocument();
    expect(within(again).getByRole('button', { name: 'ซ่อนเฉลย' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    // another task has its own solution, folded to start with
    fireEvent.click(within(again).getByRole('button', { name: 'กลับรายการโจทย์' }));
    fireEvent.click(within(again).getByRole('button', { name: /^ข้อ 2 / }));
    expect(within(again).queryByText('วิธีทำ')).not.toBeInTheDocument();
    // and the first one still has its solution shown
    fireEvent.click(within(again).getByRole('button', { name: 'กลับรายการโจทย์' }));
    fireEvent.click(within(again).getByRole('button', { name: /^ข้อ 1 / }));
    expect(within(again).getByText('วิธีทำ')).toBeInTheDocument();
    // hiding it is remembered too
    fireEvent.click(within(again).getByRole('button', { name: 'ซ่อนเฉลย' }));
    fireEvent.keyDown(document, { key: 'Escape' });
    fireEvent.click(screen.getByRole('button', { name: 'โจทย์' }));
    const third = await screen.findByRole('dialog', { name: 'โจทย์' });
    expect(await within(third).findByRole('button', { name: 'ดูเฉลย' })).toBeInTheDocument();
  });

  it("marks the don't care rows of the table of the answer", async () => {
    openLab();
    const dialog = await openDrawer();
    fireEvent.click(within(dialog).getByRole('button', { name: /ตารางความจริง/ }));
    const list = document.getElementById('lab-task-list-02')!;
    fireEvent.click(within(list).getByRole('button', { name: /^ข้อ 3 / }));
    fireEvent.click(within(dialog).getByRole('button', { name: 'ดูเฉลย' }));
    const table = within(dialog).getByRole('table', { name: 'ตารางความจริงของเฉลย' });
    expect(within(table).getAllByText('X').length).toBeGreaterThan(0);
    expect(within(dialog).getByText('X คือค่าไม่สนใจ')).toBeInTheDocument();
  });

  it('puts the answer on the boards, closes, and one undo takes it off', async () => {
    openLab();
    const button = screen.getByRole('button', { name: 'โจทย์' });
    const dialog = await openFirstTask();
    expect(chips()).toBe(0);
    fireEvent.click(within(dialog).getByRole('button', { name: 'ดูเฉลย' }));
    fireEvent.click(within(dialog).getByRole('button', { name: 'วางเฉลยบนบอร์ด' }));
    // the drawer gives the boards back to be looked at
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(button).toHaveFocus();
    expect(chips()).toBeGreaterThan(0);
    expect(wires()).toBeGreaterThan(0);
    fireEvent.click(screen.getByRole('button', { name: 'ย้อนกลับ' }));
    expect(chips()).toBe(0);
    expect(wires()).toBe(0);
    fireEvent.click(screen.getByRole('button', { name: 'ทำซ้ำ' }));
    expect(chips()).toBeGreaterThan(0);
  });

  it('puts the answer in place of what is on the boards', async () => {
    openLab();
    fireEvent.click(screen.getByRole('button', { name: '7408 AND' }));
    fireEvent.click(screen.getByRole('button', { name: '7408 AND' }));
    expect(chips()).toBe(2);
    const dialog = await openFirstTask();
    fireEvent.click(within(dialog).getByRole('button', { name: 'ดูเฉลย' }));
    fireEvent.click(within(dialog).getByRole('button', { name: 'วางเฉลยบนบอร์ด' }));
    // the answer of the first task is a NOT and an AND
    expect(chips()).toBe(2);
    fireEvent.click(screen.getByRole('button', { name: 'ย้อนกลับ' }));
    expect(chips()).toBe(2);
  });
});
