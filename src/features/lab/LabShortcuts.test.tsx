import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom';
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { resetLayers } from '@/lib/layers';
import { LabBoard } from './LabBoard';
import { resetLabTasks } from './tasks/useLabTasks';

// the tasks come from the content, built here the way `npm run content` builds them
vi.mock('@/content/loaders', async (importOriginal) => {
  const { join } = await import('node:path');
  const { buildLabTasks, labTasksIndex } = await import('../../../scripts/build-content/tasks');
  const data = buildLabTasks(join(process.cwd(), 'content')).data;
  const index = labTasksIndex(data);
  return {
    ...(await importOriginal<object>()),
    loadLabTasksIndex: () => Promise.resolve(index),
    loadLabTaskGroup: (group: string) =>
      Promise.resolve(data.groups.find((g) => g.id === group)?.tasks ?? []),
  };
});

beforeAll(() => {
  // reduced motion, so a drawer opens and closes at once; a wide window, so every tool is in the row
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
  resetLayers();
});

function Gesture() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div>
      <p data-testid="where">{pathname}</p>
      <button onClick={() => navigate(-1)}>gesture back</button>
    </div>
  );
}

function openLab() {
  return render(
    <MemoryRouter initialEntries={['/home', '/lab']} initialIndex={1}>
      <LabBoard />
      <Gesture />
    </MemoryRouter>,
  );
}

/** A key pressed with nothing focused, as after a click on an empty part of the page. */
const press = (code: string, init: KeyboardEventInit = {}, target: Element = document.body) =>
  fireEvent.keyDown(target, { code, ...init });

const dialog = (name: string) => screen.queryByRole('dialog', { name });
const chips = () => document.querySelectorAll('[data-ic-id]').length;
const back = () => fireEvent.click(screen.getByRole('button', { name: 'gesture back' }));

describe('the keyboard in the lab', () => {
  it('opens the tasks, the results, the pin diagrams and the help by their keys, and Esc closes them', () => {
    openLab();
    for (const [code, name, init] of [
      ['KeyT', 'โจทย์', {}],
      ['KeyR', 'ผลลัพธ์วงจร', {}],
      ['KeyP', 'ไดอะแกรมขา IC', {}],
      ['KeyH', 'วิธีใช้และคีย์ลัด', {}],
      ['Slash', 'วิธีใช้และคีย์ลัด', { key: '?', shiftKey: true }],
    ] as const) {
      press(code, init);
      expect(dialog(name), code).toBeInTheDocument();
      press('Escape', { key: 'Escape' });
      expect(dialog(name), code).not.toBeInTheDocument();
    }
  });

  it('works on a Thai layout, where the key prints a Thai letter', () => {
    openLab();
    press('KeyT', { key: 'ะ' });
    expect(dialog('โจทย์')).toBeInTheDocument();
  });

  it('leaves the keys to a drawer that is open', () => {
    openLab();
    press('KeyH');
    press('KeyT');
    expect(dialog('โจทย์')).not.toBeInTheDocument();
    expect(dialog('วิธีใช้และคีย์ลัด')).toBeInTheDocument();
    press('Digit1');
    press('Escape', { key: 'Escape' });
    expect(screen.getByRole('button', { name: 'สวิตช์ 1' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
  });

  it('keeps out of a field where text is typed', () => {
    openLab();
    const field = document.createElement('input');
    document.body.appendChild(field);
    field.focus();
    press('KeyT', {}, field);
    press('Digit2', {}, field);
    expect(dialog('โจทย์')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'สวิตช์ 2' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
    field.remove();
  });

  it('flips the switches with the keys 1 to 8, the digit row and the number pad', () => {
    openLab();
    const sw = (n: number) => screen.getByRole('button', { name: `สวิตช์ ${n}` });
    press('Digit3');
    expect(sw(3)).toHaveAttribute('aria-pressed', 'true');
    press('Numpad3');
    expect(sw(3)).toHaveAttribute('aria-pressed', 'false');
    press('Digit8');
    expect(sw(8)).toHaveAttribute('aria-pressed', 'true');
    press('Digit9');
    press('Digit0');
    for (let n = 1; n <= 7; n++) expect(sw(n)).toHaveAttribute('aria-pressed', 'false');
    // a key held down does not flip it again and again
    press('Digit5');
    press('Digit5', { repeat: true });
    expect(sw(5)).toHaveAttribute('aria-pressed', 'true');
  });

  it('undoes and redoes from anywhere on the page, with nothing focused, on any layout', () => {
    openLab();
    fireEvent.click(screen.getByRole('button', { name: '7404 NOT' }));
    expect(chips()).toBe(1);
    (document.activeElement as HTMLElement | null)?.blur();
    expect(document.activeElement).toBe(document.body);
    press('KeyZ', { key: 'ผ', ctrlKey: true });
    expect(chips()).toBe(0);
    press('KeyZ', { key: 'ผ', ctrlKey: true, shiftKey: true });
    expect(chips()).toBe(1);
    press('KeyZ', { ctrlKey: true });
    expect(chips()).toBe(0);
    press('KeyY', { ctrlKey: true });
    expect(chips()).toBe(1);
    press('KeyZ', { metaKey: true });
    expect(chips()).toBe(0);
  });

  it('does not undo while a drawer is open', () => {
    openLab();
    fireEvent.click(screen.getByRole('button', { name: '7404 NOT' }));
    press('KeyH');
    press('KeyZ', { ctrlKey: true });
    expect(chips()).toBe(1);
  });

  it('says its key in the tooltips and for assistive technology', () => {
    openLab();
    const undo = screen.getByRole('button', { name: 'ย้อนกลับ' });
    expect(undo).toHaveAttribute('title', 'ย้อนกลับ (Ctrl+Z)');
    expect(undo).toHaveAttribute('aria-keyshortcuts', expect.stringContaining('Control+Z'));
    expect(screen.getByRole('button', { name: 'ทำซ้ำ' })).toHaveAttribute(
      'title',
      'ทำซ้ำ (Ctrl+Shift+Z)',
    );
    expect(screen.getByRole('button', { name: 'จัดสายอัตโนมัติ' })).toHaveAttribute(
      'title',
      'จัดสายอัตโนมัติ (A)',
    );
    expect(screen.getByRole('button', { name: 'โจทย์' })).toHaveAttribute('title', 'โจทย์ (T)');
    expect(screen.getByRole('button', { name: 'ผลลัพธ์วงจร' })).toHaveAttribute(
      'title',
      'ผลลัพธ์วงจร (R)',
    );
    expect(screen.getByRole('button', { name: 'ไดอะแกรมขา IC' })).toHaveAttribute(
      'title',
      'ไดอะแกรมขา IC (P)',
    );
    expect(screen.getByRole('button', { name: 'ขนาดจริง 100%' })).toHaveAttribute(
      'title',
      'ขนาดจริง 100% (Shift+0)',
    );
    expect(screen.getByRole('button', { name: 'สวิตช์ 4' })).toHaveAttribute(
      'aria-keyshortcuts',
      '4',
    );
  });
});

describe('the keys of the tasks drawer', () => {
  async function openFirstTask() {
    press('KeyT');
    const drawer = screen.getByRole('dialog', { name: 'โจทย์' });
    await within(drawer).findByRole('heading', { level: 3, name: /สมการบูลีนขนาดใหญ่/ });
    fireEvent.click(within(drawer).getByRole('button', { name: /สมการบูลีนขนาดใหญ่/ }));
    fireEvent.click(within(drawer).getByRole('button', { name: /^ข้อ 1 / }));
    await within(drawer).findByRole('heading', { level: 3, name: /^ข้อ 1 / });
    return drawer;
  }

  it('goes to the next and the previous task with ] and [, without a new layer', async () => {
    openLab();
    const drawer = await openFirstTask();
    // there is no task before the first
    press('BracketLeft');
    expect(within(drawer).getByRole('heading', { level: 3, name: /^ข้อ 1 / })).toBeInTheDocument();
    press('BracketRight');
    expect(
      await within(drawer).findByRole('heading', { level: 3, name: /^ข้อ 2 / }),
    ).toBeInTheDocument();
    press('BracketRight');
    expect(
      await within(drawer).findByRole('heading', { level: 3, name: /^ข้อ 3 / }),
    ).toBeInTheDocument();
    press('BracketLeft');
    expect(
      await within(drawer).findByRole('heading', { level: 3, name: /^ข้อ 2 / }),
    ).toBeInTheDocument();
    // three moves later one back goes from the task to the list, as if they had not been
    back();
    expect(
      await within(drawer).findByRole('heading', { level: 3, name: /สมการบูลีนขนาดใหญ่/ }),
    ).toBeInTheDocument();
    back();
    expect(dialog('โจทย์')).not.toBeInTheDocument();
    expect(screen.getByTestId('where')).toHaveTextContent('/lab');
  });

  it('shows and hides the solution with S', async () => {
    openLab();
    const drawer = await openFirstTask();
    const button = within(drawer).getByRole('button', { name: 'ดูเฉลย' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    press('KeyS');
    expect(within(drawer).getByRole('button', { name: 'ซ่อนเฉลย' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    press('KeyS');
    expect(within(drawer).getByRole('button', { name: 'ดูเฉลย' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  it('does not take the keys in the list, where there is no task', async () => {
    openLab();
    press('KeyT');
    const drawer = screen.getByRole('dialog', { name: 'โจทย์' });
    await within(drawer).findByRole('heading', { level: 3, name: /สมการบูลีนขนาดใหญ่/ });
    act(() => {
      press('BracketRight');
      press('KeyS');
    });
    expect(
      within(drawer).getByRole('heading', { level: 3, name: /สมการบูลีนขนาดใหญ่/ }),
    ).toBeInTheDocument();
  });
});

describe('the help drawer', () => {
  it('opens from its button on the tools row, and closes with the back gesture', () => {
    openLab();
    fireEvent.click(screen.getByRole('button', { name: 'วิธีใช้และคีย์ลัด' }));
    expect(dialog('วิธีใช้และคีย์ลัด')).toBeInTheDocument();
    back();
    expect(dialog('วิธีใช้และคีย์ลัด')).not.toBeInTheDocument();
    expect(screen.getByTestId('where')).toHaveTextContent('/lab');
    expect(screen.getByRole('button', { name: 'วิธีใช้และคีย์ลัด' })).toHaveFocus();
  });

  it('says what each button does, then how the board answers a touch, then the shortcuts', () => {
    openLab();
    press('KeyH');
    const drawer = screen.getByRole('dialog', { name: 'วิธีใช้และคีย์ลัด' });
    const tabs = within(drawer).getAllByRole('tab');
    expect(tabs.map((t) => t.textContent)).toEqual(['ปุ่มเครื่องมือ', 'ใช้กระดาน', 'คีย์ลัด']);
    // the buttons: one line each
    expect(within(drawer).getByText('จัดสายอัตโนมัติ')).toBeInTheDocument();
    expect(within(drawer).getByText('ลบสายหรือชิปที่เลือกอยู่')).toBeInTheDocument();
    expect(within(drawer).getByText('ผลลัพธ์วงจร')).toBeInTheDocument();
    fireEvent.click(tabs[1]!);
    expect(within(drawer).getByText('ต่อสาย')).toBeInTheDocument();
    fireEvent.click(tabs[2]!);
    const rows = within(drawer).getAllByRole('listitem');
    const undoRow = rows.find((row) => within(row).queryByText('ย้อนกลับ'));
    expect(undoRow).toBeDefined();
    expect(within(undoRow!).getByText('Ctrl')).toBeInTheDocument();
    expect(within(undoRow!).getByText('Z')).toBeInTheDocument();
    expect(within(drawer).getByText('สลับสวิตช์ 1 ถึง 8')).toBeInTheDocument();
    expect(within(drawer).getByText(/บน Mac ใช้ Cmd แทน Ctrl/)).toBeInTheDocument();
  });

  it('moves between its tabs with the arrow keys', () => {
    openLab();
    press('KeyH');
    const drawer = screen.getByRole('dialog', { name: 'วิธีใช้และคีย์ลัด' });
    const [tools, board, keys] = within(drawer).getAllByRole('tab');
    expect(tools).toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(tools!, { key: 'ArrowRight' });
    expect(board).toHaveAttribute('aria-selected', 'true');
    expect(board).toHaveFocus();
    fireEvent.keyDown(board!, { key: 'ArrowLeft' });
    fireEvent.keyDown(tools!, { key: 'ArrowLeft' });
    expect(keys).toHaveAttribute('aria-selected', 'true');
  });
});
