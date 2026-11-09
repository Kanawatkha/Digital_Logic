// @vitest-environment node
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildLabTasks, labTasksIndex } from '../../../../scripts/build-content/tasks';
import {
  CHIPS,
  LEVELS,
  NO_FILTER,
  isFiltered,
  matches,
  narrow,
  pickRandom,
  type TaskFilter,
} from './filter';

// the real tasks of the content, as the list sees them
const index = labTasksIndex(buildLabTasks(join(process.cwd(), 'content')).data);
const all = index.groups.flatMap((group) => group.tasks);
const count = (data: typeof index) => data.groups.reduce((sum, g) => sum + g.tasks.length, 0);

describe('narrowing the list of tasks', () => {
  it('lets everything through when nothing is chosen, and says nothing is chosen', () => {
    expect(isFiltered(NO_FILTER)).toBe(false);
    expect(narrow(index, NO_FILTER)).toBe(index);
    expect(all.every((task) => matches(task, NO_FILTER))).toBe(true);
  });

  it('by level: every task is in exactly one level', () => {
    let total = 0;
    for (const level of LEVELS) {
      const part = narrow(index, { level, chips: null });
      total += count(part);
      for (const group of part.groups) {
        for (const task of group.tasks) expect(task.level).toBe(level);
      }
    }
    expect(total).toBe(all.length);
  });

  it('by chips: free, NAND only and NOR only together are every task', () => {
    let total = 0;
    for (const chips of CHIPS) {
      const part = narrow(index, { level: null, chips });
      total += count(part);
      for (const group of part.groups) {
        for (const task of group.tasks) {
          expect(task.only).toBe(chips === 'free' ? null : chips);
        }
      }
    }
    expect(total).toBe(all.length);
  });

  it('by both: a task has to pass both, and a kind with none left is dropped', () => {
    const filter: TaskFilter = { level: 'hard', chips: 'nor' };
    const part = narrow(index, filter);
    expect(count(part)).toBe(all.filter((t) => t.level === 'hard' && t.only === 'nor').length);
    expect(part.groups.every((g) => g.tasks.length > 0)).toBe(true);
    // the kinds keep their own text and order
    const order = index.groups.map((g) => g.id);
    expect(part.groups.map((g) => g.id)).toEqual(
      order.filter((id) => part.groups.some((g) => g.id === id)),
    );
  });

  it('can leave nothing: no hard task allows only NAND in some kinds, and an empty list is an empty list', () => {
    const none = narrow(index, { level: 'hard', chips: 'nand' });
    // whatever is left is a real task of that kind
    expect(count(none)).toBe(all.filter((t) => t.level === 'hard' && t.only === 'nand').length);
    const impossible = {
      groups: [{ ...index.groups[0]!, tasks: [] }],
    };
    expect(narrow(impossible, { level: 'easy', chips: null }).groups).toEqual([]);
  });
});

describe('choosing a task by chance', () => {
  it('picks among the tasks that are let through, over the whole range', () => {
    const filter: TaskFilter = { level: 'easy', chips: 'free' };
    const allowed = all.filter((t) => matches(t, filter)).map((t) => t.id);
    expect(allowed.length).toBeGreaterThan(2);
    // the first, the last and one in the middle of the range of random numbers
    expect(pickRandom(index, filter, () => 0)).toBe(allowed[0]);
    expect(pickRandom(index, filter, () => 0.999999)).toBe(allowed[allowed.length - 1]);
    expect(allowed).toContain(pickRandom(index, filter, () => 0.5));
    // a random of exactly 1 (which Math.random never gives) stays inside the list
    expect(pickRandom(index, filter, () => 1)).toBe(allowed[allowed.length - 1]);
  });

  it('picks from all the tasks when nothing is chosen, in the order of the list', () => {
    expect(pickRandom(index, NO_FILTER, () => 0)).toBe(all[0]?.id);
    expect(pickRandom(index, NO_FILTER, () => 0.999999)).toBe(all[all.length - 1]?.id);
  });

  it('says there is nothing to pick when no task is let through', () => {
    expect(pickRandom({ groups: [] }, NO_FILTER)).toBeNull();
    expect(pickRandom({ groups: [{ ...index.groups[0]!, tasks: [] }] }, NO_FILTER)).toBeNull();
  });

  it('reaches every task that is let through when asked often enough', () => {
    const filter: TaskFilter = { level: 'medium', chips: null };
    const allowed = new Set(all.filter((t) => matches(t, filter)).map((t) => t.id));
    const seen = new Set<string>();
    for (let k = 0; k < allowed.size * 40; k++) {
      const id = pickRandom(index, filter);
      expect(allowed.has(id ?? '')).toBe(true);
      seen.add(id ?? '');
    }
    expect(seen.size).toBe(allowed.size);
  });
});
