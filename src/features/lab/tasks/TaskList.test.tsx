import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import type { LabLevel, LabTaskSummary, LabTasksIndex } from '@/content/types';
import { NO_FILTER, type TaskFilter } from './filter';
import { TaskList } from './TaskList';

const task = (
  id: string,
  title: string,
  level: LabLevel,
  only: LabTaskSummary['only'],
): LabTaskSummary => ({
  id,
  number: Number(id.split('.')[1]),
  title: [{ t: 'text', v: title }] as LabTaskSummary['title'],
  level,
  only,
});

const data: LabTasksIndex = {
  groups: [
    {
      id: '01',
      title: [{ t: 'text', v: 'หมวดหนึ่ง' }] as LabTasksIndex['groups'][number]['title'],
      intro: [],
      tasks: [
        task('01.1', 'ข้อเบา', 'easy', null),
        task('01.2', 'ข้อยากแนนด์', 'hard', 'nand'),
        task('01.3', 'ข้อกลางนอร์', 'medium', 'nor'),
      ],
    },
    {
      id: '02',
      title: [{ t: 'text', v: 'หมวดสอง' }] as LabTasksIndex['groups'][number]['title'],
      intro: [],
      tasks: [task('02.1', 'ข้อยากอิสระ', 'hard', null), task('02.2', 'ข้อเบานอร์', 'easy', 'nor')],
    },
  ],
};

/** The list with its filter kept the way the page keeps it */
function Harness({
  onSelect = () => {},
  random,
  start = NO_FILTER,
  everyKindOpen = true,
}: {
  onSelect?: (id: string) => void;
  random?: () => number;
  start?: TaskFilter;
  everyKindOpen?: boolean;
}) {
  const [filter, setFilter] = useState(start);
  const [open, setOpen] = useState<ReadonlySet<string>>(new Set(everyKindOpen ? ['01', '02'] : []));
  return (
    <TaskList
      data={data}
      onSelect={onSelect}
      open={open}
      onOpenChange={setOpen}
      filter={filter}
      onFilterChange={setFilter}
      random={random}
    />
  );
}

const group = (name: string) => screen.getByRole('group', { name });
const press = (name: string, scope = screen.getByRole('group', { name: 'กรองโจทย์' })) =>
  fireEvent.click(within(scope).getByRole('button', { name }));
const listed = () =>
  screen
    .getAllByRole('listitem')
    .map((li) => li.textContent ?? '')
    .map((text) => text.replace(/(ง่าย|กลาง|ยาก|NAND|NOR)+$/, '').trim());

describe('the filters of the list of tasks', () => {
  it('start with everything shown, and say how many', () => {
    render(<Harness />);
    expect(screen.getByRole('status')).toHaveTextContent('แสดง 5 จาก 5 ข้อ');
    expect(within(group('ระดับ')).getByRole('button', { name: 'ทั้งหมด' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(within(group('เกตที่ใช้')).getByRole('button', { name: 'ทั้งหมด' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.queryByRole('button', { name: 'ล้างตัวกรอง' })).not.toBeInTheDocument();
    expect(listed()).toHaveLength(5);
  });

  it('narrow by level, one level at a time, and back to all', () => {
    render(<Harness />);
    press('ยาก', group('ระดับ'));
    expect(within(group('ระดับ')).getByRole('button', { name: 'ยาก' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(within(group('ระดับ')).getByRole('button', { name: 'ทั้งหมด' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
    expect(listed()).toEqual(['ข้อยากแนนด์', 'ข้อยากอิสระ']);
    expect(screen.getByRole('status')).toHaveTextContent('แสดง 2 จาก 5 ข้อ');
    press('ง่าย', group('ระดับ'));
    expect(listed()).toEqual(['ข้อเบา', 'ข้อเบานอร์']);
    press('ทั้งหมด', group('ระดับ'));
    expect(listed()).toHaveLength(5);
  });

  it('narrow by the chips a task allows: any, only NAND, only NOR', () => {
    render(<Harness />);
    press('ใช้ได้ทุกเกต', group('เกตที่ใช้'));
    expect(listed()).toEqual(['ข้อเบา', 'ข้อยากอิสระ']);
    press('NAND อย่างเดียว', group('เกตที่ใช้'));
    expect(listed()).toEqual(['ข้อยากแนนด์']);
    press('NOR อย่างเดียว', group('เกตที่ใช้'));
    expect(listed()).toEqual(['ข้อกลางนอร์', 'ข้อเบานอร์']);
  });

  it('narrow by both together, show how many of each kind are left, and drop a kind with none', () => {
    render(<Harness everyKindOpen={false} />);
    // the header of a kind says how many there are
    const headers = () => screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    expect(headers()).toEqual(['หมวดหนึ่ง3', 'หมวดสอง2']);
    press('NOR อย่างเดียว', group('เกตที่ใช้'));
    expect(headers()).toEqual(['หมวดหนึ่ง1/3', 'หมวดสอง1/2']);
    press('ยาก', group('ระดับ'));
    // no hard task allows only NOR: nothing is left, and it says so
    expect(screen.queryAllByRole('heading', { level: 3 })).toHaveLength(0);
    expect(screen.getByText('ไม่มีโจทย์ที่ตรงกับตัวกรอง')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('แสดง 0 จาก 5 ข้อ');
    // the kind that has some is back when the filter lets one in
    press('ทั้งหมด', group('เกตที่ใช้'));
    expect(headers()).toEqual(['หมวดหนึ่ง1/3', 'หมวดสอง1/2']);
  });

  it('clear all of it at once', () => {
    render(<Harness />);
    press('ยาก', group('ระดับ'));
    press('ใช้ได้ทุกเกต', group('เกตที่ใช้'));
    expect(listed()).toEqual(['ข้อยากอิสระ']);
    fireEvent.click(screen.getByRole('button', { name: 'ล้างตัวกรอง' }));
    expect(listed()).toHaveLength(5);
    expect(screen.queryByRole('button', { name: 'ล้างตัวกรอง' })).not.toBeInTheDocument();
  });

  it('counts two presses that come before the list is drawn again', () => {
    render(<Harness />);
    const level = within(group('ระดับ')).getByRole('button', { name: 'กลาง' });
    const chips = within(group('เกตที่ใช้')).getByRole('button', { name: 'NOR อย่างเดียว' });
    // both are pressed with no render in between, as two quick taps can be
    act(() => {
      level.click();
      chips.click();
    });
    expect(listed()).toEqual(['ข้อกลางนอร์']);
  });

  it('can start narrowed, as the page keeps it', () => {
    render(<Harness start={{ level: 'medium', chips: null }} />);
    expect(listed()).toEqual(['ข้อกลางนอร์']);
  });
});

describe('the random task', () => {
  it('opens one of the tasks that are shown, by the chance it is given', () => {
    const onSelect = vi.fn();
    render(<Harness onSelect={onSelect} random={() => 0} />);
    fireEvent.click(screen.getByRole('button', { name: 'สุ่มโจทย์' }));
    expect(onSelect).toHaveBeenLastCalledWith('01.1');
    cleanupAndRender(onSelect, 0.999);
    fireEvent.click(screen.getByRole('button', { name: 'สุ่มโจทย์' }));
    expect(onSelect).toHaveBeenLastCalledWith('02.2');
  });

  it('keeps to the filter', () => {
    const onSelect = vi.fn();
    render(<Harness onSelect={onSelect} random={() => 0.999} />);
    press('ยาก', group('ระดับ'));
    fireEvent.click(screen.getByRole('button', { name: 'สุ่มโจทย์' }));
    expect(onSelect).toHaveBeenLastCalledWith('02.1');
    press('NAND อย่างเดียว', group('เกตที่ใช้'));
    fireEvent.click(screen.getByRole('button', { name: 'สุ่มโจทย์' }));
    expect(onSelect).toHaveBeenLastCalledWith('01.2');
  });

  it('is off when no task is shown, and works for a folded kind too', () => {
    const onSelect = vi.fn();
    render(<Harness onSelect={onSelect} random={() => 0} everyKindOpen={false} />);
    // the kinds are folded: the task is still found in the whole list
    fireEvent.click(screen.getByRole('button', { name: 'สุ่มโจทย์' }));
    expect(onSelect).toHaveBeenCalledWith('01.1');
    press('NOR อย่างเดียว', group('เกตที่ใช้'));
    press('ยาก', group('ระดับ'));
    expect(screen.getByRole('button', { name: 'สุ่มโจทย์' })).toBeDisabled();
  });

  it('uses Math.random when it is given none, and always lands on a task of the list', () => {
    const onSelect = vi.fn();
    render(<Harness onSelect={onSelect} />);
    for (let k = 0; k < 30; k++) fireEvent.click(screen.getByRole('button', { name: 'สุ่มโจทย์' }));
    const ids = new Set(onSelect.mock.calls.map(([id]) => id as string));
    for (const id of ids) expect(['01.1', '01.2', '01.3', '02.1', '02.2']).toContain(id);
    expect(onSelect).toHaveBeenCalledTimes(30);
  });
});

/** Renders the list again, in a fresh page, with another chance */
function cleanupAndRender(onSelect: (id: string) => void, chance: number) {
  document.body.innerHTML = '';
  render(<Harness onSelect={onSelect} random={() => chance} />);
}
