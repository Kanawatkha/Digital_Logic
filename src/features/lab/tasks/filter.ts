import type { LabLevel, LabTaskSummary, LabTasksIndex } from '@/content/types';

/** Which chips a task allows: any, or only NAND, or only NOR. */
export type ChipFilter = 'free' | 'nand' | 'nor';

/** What the list of tasks is narrowed to; null in a field is "all". */
export type TaskFilter = { level: LabLevel | null; chips: ChipFilter | null };

export const NO_FILTER: TaskFilter = { level: null, chips: null };

export const LEVELS: readonly LabLevel[] = ['easy', 'medium', 'hard'];
export const CHIPS: readonly ChipFilter[] = ['free', 'nand', 'nor'];

export const isFiltered = (filter: TaskFilter): boolean =>
  filter.level !== null || filter.chips !== null;

/** Whether a task is let through. */
export function matches(task: LabTaskSummary, filter: TaskFilter): boolean {
  if (filter.level !== null && task.level !== filter.level) return false;
  if (filter.chips === null) return true;
  return filter.chips === 'free' ? task.only === null : task.only === filter.chips;
}

/** The index with only the tasks that are let through; a kind with none left is dropped. */
export function narrow(data: LabTasksIndex, filter: TaskFilter): LabTasksIndex {
  if (!isFiltered(filter)) return data;
  return {
    groups: data.groups
      .map((group) => ({ ...group, tasks: group.tasks.filter((task) => matches(task, filter)) }))
      .filter((group) => group.tasks.length > 0),
  };
}

/** A task chosen by chance among those that are let through, or null when there are none. */
export function pickRandom(
  data: LabTasksIndex,
  filter: TaskFilter,
  random: () => number = Math.random,
): string | null {
  const ids = narrow(data, filter).groups.flatMap((group) => group.tasks.map((task) => task.id));
  if (ids.length === 0) return null;
  const at = Math.min(ids.length - 1, Math.floor(random() * ids.length));
  return ids[at] ?? null;
}
