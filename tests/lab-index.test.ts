// @vitest-environment node
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildLabTasks, labTasksIndex } from '../scripts/build-content/tasks';

const data = buildLabTasks(join(process.cwd(), 'content')).data;
const index = labTasksIndex(data);

describe('the index of the lab tasks', () => {
  it('lists every kind and every task of the data, in order, with what the list shows', () => {
    expect(index.groups.map((g) => g.id)).toEqual(data.groups.map((g) => g.id));
    for (const [k, group] of index.groups.entries()) {
      const full = data.groups[k]!;
      expect(group.title).toEqual(full.title);
      expect(group.intro).toEqual(full.intro);
      expect(group.tasks.map((t) => [t.id, t.number, t.only])).toEqual(
        full.tasks.map((t) => [t.id, t.number, t.only]),
      );
      expect(group.tasks.map((t) => t.title)).toEqual(full.tasks.map((t) => t.title));
    }
  });

  it('holds no solution, so it stays small however many tasks there are', () => {
    for (const task of index.groups.flatMap((g) => g.tasks)) {
      expect(Object.keys(task).sort()).toEqual(['id', 'level', 'number', 'only', 'title']);
    }
    // the whole index, formulas of the introductions included, is a small fraction of the tasks
    expect(JSON.stringify(index).length).toBeLessThan(JSON.stringify(data).length / 20);
  });
});
