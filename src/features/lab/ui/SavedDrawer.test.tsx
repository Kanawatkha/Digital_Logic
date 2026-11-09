import { fireEvent, render, screen, within } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { addSaved, type SavedEntry } from '../state/savedCircuits';
import type { SavedCircuit } from '../state/storage';
import { SavedDrawer } from './SavedDrawer';
import { TaskPin } from './TaskPin';
import { taskLabel } from './taskLabel';

beforeAll(() => {
  // reduced motion: the drawer is gone as soon as it is closed
  window.matchMedia = ((query: string) => ({
    matches: query.includes('prefers-reduced-motion'),
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;
});

const circuit: SavedCircuit = {
  wires: [
    {
      id: 'w1',
      from: 'power:+5V:0',
      to: 'b0:c11:b',
      color: 'red',
      bend: { x: 0, y: 0 },
    },
  ],
  ics: [{ id: 'u1', type: '7408', board: 0, col: 11 }],
  switches: Array.from({ length: 8 }, () => false),
};

const entries = (): SavedEntry[] =>
  addSaved(
    addSaved([], 'ข้อ 1', circuit, new Date(2026, 10, 9, 14, 5).getTime()),
    'ข้อ 2',
    circuit,
    2e12,
  );

const show = (extra: Partial<ComponentProps<typeof SavedDrawer>> = {}) => {
  const props = {
    open: true,
    onClose: () => {},
    list: [] as SavedEntry[],
    canSave: true,
    onSave: vi.fn(() => true),
    onOpen: vi.fn(),
    onDelete: vi.fn(),
    ...extra,
  };
  render(<SavedDrawer {...props} />);
  return props;
};

describe('the drawer of the saved circuits', () => {
  it('renders nothing while it is closed, and is a modal dialog while it is open', () => {
    const { unmount } = render(
      <SavedDrawer
        open={false}
        onClose={() => {}}
        list={[]}
        canSave
        onSave={() => true}
        onOpen={() => {}}
        onDelete={() => {}}
      />,
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    unmount();
    show();
    expect(screen.getByRole('dialog', { name: 'วงจรที่บันทึกไว้' })).toHaveAttribute(
      'aria-modal',
      'true',
    );
    expect(screen.getByText('ยังไม่มีวงจรที่บันทึกไว้')).toBeInTheDocument();
  });

  it('saves under the typed name, says so, and empties the field', () => {
    const props = show();
    const field = screen.getByLabelText('ชื่อวงจร');
    expect(field).toHaveAttribute('placeholder', 'วงจร 1');
    fireEvent.change(field, { target: { value: 'ข้อ 3' } });
    fireEvent.click(screen.getByRole('button', { name: 'บันทึกวงจรนี้' }));
    expect(props.onSave).toHaveBeenCalledWith('ข้อ 3');
    expect(screen.getByRole('status')).toHaveTextContent('บันทึกแล้ว');
    expect(field).toHaveValue('');
    // typing again takes the message away
    fireEvent.change(field, { target: { value: 'x' } });
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('saves with Enter, and with no name at all (the page names it)', () => {
    const props = show();
    fireEvent.submit(screen.getByLabelText('ชื่อวงจร'));
    expect(props.onSave).toHaveBeenCalledWith('');
  });

  it('says so when the browser would not keep it', () => {
    show({ onSave: vi.fn(() => false) });
    fireEvent.click(screen.getByRole('button', { name: 'บันทึกวงจรนี้' }));
    expect(screen.getByRole('alert')).toHaveTextContent('บันทึกไม่สำเร็จ');
  });

  it('cannot save an empty board, and says why', () => {
    const props = show({ canSave: false });
    expect(screen.getByRole('button', { name: 'บันทึกวงจรนี้' })).toBeDisabled();
    expect(screen.getByText(/บอร์ดยังว่าง/)).toBeInTheDocument();
    fireEvent.submit(screen.getByLabelText('ชื่อวงจร'));
    expect(props.onSave).not.toHaveBeenCalled();
  });

  it('lists what is kept, newest first, with what each holds, and opens one', () => {
    const list = entries();
    const props = show({ list });
    const items = within(screen.getByRole('list', { name: 'วงจรที่บันทึกไว้' })).getAllByRole(
      'listitem',
    );
    expect(items.map((li) => li.querySelector('p')?.textContent)).toEqual(['ข้อ 2', 'ข้อ 1']);
    expect(items[0]).toHaveTextContent('1 ชิป, 1 สาย');
    expect(screen.getByText(/2\/12/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'เปิด ข้อ 1' }));
    expect(props.onOpen).toHaveBeenCalledWith(list[1]);
  });

  it('cannot open an entry that cannot be read', () => {
    const broken: SavedEntry = { id: 'b', name: 'เสีย', savedAt: 1, data: '{x' };
    show({ list: [broken] });
    expect(screen.getByRole('button', { name: 'เปิด เสีย' })).toBeDisabled();
    expect(screen.getByText(/อ่านวงจรนี้ไม่ได้/)).toBeInTheDocument();
  });

  it('asks twice before it deletes, and lets the first press be taken back', () => {
    const list = entries();
    const props = show({ list });
    fireEvent.click(screen.getByRole('button', { name: 'ลบ ข้อ 2' }));
    expect(props.onDelete).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: 'ไม่ลบ' }));
    expect(screen.getByRole('button', { name: 'ลบ ข้อ 2' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'ลบ ข้อ 2' }));
    fireEvent.click(screen.getByRole('button', { name: 'ลบจริง ข้อ 2' }));
    expect(props.onDelete).toHaveBeenCalledWith(list[0]!.id);
  });
});

describe('the label of the task that is being worked on', () => {
  it('names the task, opens it again, and lets go', () => {
    const onOpen = vi.fn();
    const onClear = vi.fn();
    render(<TaskPin id="03.05" onOpen={onOpen} onClear={onClear} />);
    const open = screen.getByRole('button', { name: 'เปิดโจทย์ข้อนี้อีกครั้ง หมวด 3 ข้อ 5' });
    expect(open).toHaveTextContent('โจทย์ หมวด 3 ข้อ 5');
    fireEvent.click(open);
    expect(onOpen).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByRole('button', { name: 'เลิกปักโจทย์' }));
    expect(onClear).toHaveBeenCalledTimes(1);
  });
});

describe('how a task is named on the label', () => {
  it('reads the id as a group and a number, and leaves an id of another shape alone', () => {
    expect(taskLabel('01.1')).toBe('หมวด 1 ข้อ 1');
    expect(taskLabel('05.21')).toBe('หมวด 5 ข้อ 21');
    expect(taskLabel('x')).toBe('x');
  });
});
