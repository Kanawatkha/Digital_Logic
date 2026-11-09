import { fireEvent, render, screen, within } from '@testing-library/react';
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

/** The back gesture of a phone, and where the page is. */
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

const back = () => fireEvent.click(screen.getByRole('button', { name: 'gesture back' }));
const where = () => screen.getByTestId('where').textContent;
const dialog = (name: string) => screen.queryByRole('dialog', { name });

async function openTasks() {
  fireEvent.click(screen.getByRole('button', { name: 'โจทย์' }));
  const drawer = screen.getByRole('dialog', { name: 'โจทย์' });
  await within(drawer).findByRole('heading', { level: 3, name: /สมการบูลีนขนาดใหญ่/ });
  return drawer;
}

async function openFirstTask(drawer: HTMLElement) {
  fireEvent.click(within(drawer).getByRole('button', { name: /สมการบูลีนขนาดใหญ่/ }));
  fireEvent.click(within(drawer).getByRole('button', { name: /^ข้อ 1 / }));
  await within(drawer).findByRole('button', { name: 'กลับรายการโจทย์' });
}

describe('the back gesture in the lab', () => {
  it('closes the drawer of the tasks, and only then leaves the page', async () => {
    openLab();
    await openTasks();
    back();
    expect(dialog('โจทย์')).not.toBeInTheDocument();
    expect(where()).toBe('/lab');
    expect(screen.getByRole('button', { name: 'โจทย์' })).toHaveFocus();
    back();
    expect(where()).toBe('/home');
  });

  it('goes from a task back to the list, and then closes the drawer', async () => {
    openLab();
    const drawer = await openTasks();
    await openFirstTask(drawer);
    expect(
      within(drawer).queryByRole('heading', { level: 3, name: /สมการบูลีนขนาดใหญ่/ }),
    ).toBeNull();
    back();
    // the list again, with the kind that was unfolded still unfolded
    expect(
      await within(drawer).findByRole('heading', { level: 3, name: /สมการบูลีนขนาดใหญ่/ }),
    ).toBeInTheDocument();
    expect(within(drawer).getByRole('button', { name: /^ข้อ 1 / })).toBeInTheDocument();
    back();
    expect(dialog('โจทย์')).not.toBeInTheDocument();
    expect(where()).toBe('/lab');
  });

  it('forgets the task when the gesture goes back to the list, so the drawer opens on the list next time', async () => {
    openLab();
    const drawer = await openTasks();
    await openFirstTask(drawer);
    back();
    back();
    const again = await openTasks();
    expect(within(again).queryByRole('button', { name: 'กลับรายการโจทย์' })).toBeNull();
  });

  it('keeps the task when the drawer is closed from it, opens on it, and has the list below it', async () => {
    openLab();
    const drawer = await openTasks();
    await openFirstTask(drawer);
    fireEvent.click(within(drawer).getByRole('button', { name: 'ปิด' }));
    expect(dialog('โจทย์')).not.toBeInTheDocument();
    // nothing of the drawer is left in the history
    const again = screen.getByRole('button', { name: 'โจทย์' });
    fireEvent.click(again);
    const reopened = screen.getByRole('dialog', { name: 'โจทย์' });
    expect(await within(reopened).findByRole('button', { name: 'กลับรายการโจทย์' })).toBeVisible();
    back();
    expect(await within(reopened).findByRole('button', { name: /^ข้อ 1 / })).toBeVisible();
    back();
    expect(dialog('โจทย์')).not.toBeInTheDocument();
    back();
    expect(where()).toBe('/home');
  });

  it('pins the task over the board while the drawer is closed, opens it from the pin, and lets go', async () => {
    openLab();
    expect(screen.queryByRole('button', { name: /^เปิดโจทย์ข้อนี้อีกครั้ง/ })).toBeNull();
    const drawer = await openTasks();
    await openFirstTask(drawer);
    // with the drawer open the label is not needed
    expect(screen.queryByRole('button', { name: /^เปิดโจทย์ข้อนี้อีกครั้ง/ })).toBeNull();
    fireEvent.click(within(drawer).getByRole('button', { name: 'ปิด' }));
    const pin = screen.getByRole('button', { name: /^เปิดโจทย์ข้อนี้อีกครั้ง/ });
    expect(pin).toHaveTextContent('โจทย์ หมวด 1 ข้อ 1');
    fireEvent.click(pin);
    const reopened = screen.getByRole('dialog', { name: 'โจทย์' });
    expect(await within(reopened).findByRole('button', { name: 'กลับรายการโจทย์' })).toBeVisible();
    expect(screen.queryByRole('button', { name: /^เปิดโจทย์ข้อนี้อีกครั้ง/ })).toBeNull();
    // closed again, and let go of: the label goes and the drawer opens on the list
    fireEvent.click(within(reopened).getByRole('button', { name: 'ปิด' }));
    fireEvent.click(screen.getByRole('button', { name: 'เลิกปักโจทย์' }));
    expect(screen.queryByRole('button', { name: /^เปิดโจทย์ข้อนี้อีกครั้ง/ })).toBeNull();
    const again = await openTasks();
    expect(within(again).queryByRole('button', { name: 'กลับรายการโจทย์' })).toBeNull();
  });

  it('leaves nothing in the history when a drawer is closed with the cross, Esc or the blur', async () => {
    openLab();
    await openTasks();
    fireEvent.click(screen.getByRole('button', { name: 'ปิด' }));
    fireEvent.click(screen.getByRole('button', { name: 'โจทย์' }));
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(dialog('โจทย์')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'โจทย์' }));
    const drawer = screen.getByRole('dialog', { name: 'โจทย์' });
    fireEvent.pointerDown(drawer.parentElement as HTMLElement);
    expect(dialog('โจทย์')).not.toBeInTheDocument();
    // three openings and three closings later one back leaves the page
    back();
    expect(where()).toBe('/home');
  });

  it('closes the drawer of the results and the drawer of the pin diagrams', () => {
    openLab();
    for (const [button, name] of [
      ['ผลลัพธ์วงจร', 'ผลลัพธ์วงจร'],
      ['ไดอะแกรมขา IC', 'ไดอะแกรมขา IC'],
    ] as const) {
      fireEvent.click(screen.getByRole('button', { name: button }));
      expect(screen.getByRole('dialog', { name })).toBeInTheDocument();
      back();
      expect(dialog(name)).not.toBeInTheDocument();
      expect(where()).toBe('/lab');
    }
    back();
    expect(where()).toBe('/home');
  });

  it('puts the answer on the boards and closes the drawer in one step of the history', async () => {
    openLab();
    const drawer = await openTasks();
    await openFirstTask(drawer);
    fireEvent.click(within(drawer).getByRole('button', { name: 'ดูเฉลย' }));
    fireEvent.click(within(drawer).getByRole('button', { name: 'วางเฉลยบนบอร์ด' }));
    expect(dialog('โจทย์')).not.toBeInTheDocument();
    expect(document.querySelectorAll('[data-ic-id]').length).toBeGreaterThan(0);
    back();
    expect(where()).toBe('/home');
  });
});
