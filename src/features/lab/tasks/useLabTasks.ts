import { useEffect, useState } from 'react';
import type { LabTask, LabTasksIndex } from '@/content/types';
import { loadLabTaskGroup, loadLabTasksIndex } from '@/content/loaders';

type Loaded<T> = { status: 'loading' } | { status: 'error' } | { status: 'ready'; data: T };

export type LabTasksState = Loaded<LabTasksIndex>;
/** One task, or null when the id is null or no task has it */
export type LabTaskState = Loaded<LabTask | null>;

/** The index and the tasks of each kind are loaded once, the first time they are asked for, and kept for the visit. */
let indexLoad: Promise<LabTasksIndex> | null = null;
let indexData: LabTasksIndex | null = null;
const groupLoads = new Map<string, Promise<LabTask[]>>();
/** What has arrived, so a kind that was loaded shows at once the next time instead of after a frame of waiting */
const groupData = new Map<string, LabTask[]>();

function loadIndex(): Promise<LabTasksIndex> {
  indexLoad ??= loadLabTasksIndex().then(
    (data) => (indexData = data),
    (error: unknown) => {
      // a failed load is tried again the next time the tasks are opened
      indexLoad = null;
      throw error;
    },
  );
  return indexLoad;
}

function loadGroup(group: string): Promise<LabTask[]> {
  let load = groupLoads.get(group);
  if (!load) {
    load = loadLabTaskGroup(group).then(
      (tasks) => {
        groupData.set(group, tasks);
        return tasks;
      },
      (error: unknown) => {
        groupLoads.delete(group);
        throw error;
      },
    );
    groupLoads.set(group, load);
  }
  return load;
}

/** Starts loading the tasks of a kind, so one opens at once when it is pressed. A failure is left to the real load. */
export function prefetchLabTaskGroup(group: string): void {
  loadGroup(group).catch(() => {});
}

/** The file number of a task id: "03.2" is in "03". */
export const groupOfTask = (id: string): string => id.split('.')[0] ?? '';

/** Forgets what was loaded. For tests. */
export function resetLabTasks(): void {
  indexLoad = null;
  indexData = null;
  groupLoads.clear();
  groupData.clear();
}

/** Runs a load when `key` changes and says where it is; `null` for no load. `peek` gives what has already arrived. */
function useLoaded<T>(
  key: string | null,
  load: () => Promise<T>,
  peek: () => T | undefined,
): Loaded<T> | null {
  const [state, setState] = useState<{ key: string; value: Loaded<T> } | null>(null);
  useEffect(() => {
    if (key === null) return;
    let alive = true;
    load().then(
      (data) => {
        if (alive) setState({ key, value: { status: 'ready', data } });
      },
      () => {
        if (alive) setState({ key, value: { status: 'error' } });
      },
    );
    return () => {
      alive = false;
    };
    // the loader is a function of the key
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  if (key === null) return null;
  const arrived = peek();
  if (arrived !== undefined) return { status: 'ready', data: arrived };
  return state !== null && state.key === key ? state.value : { status: 'loading' };
}

/** The index of the tasks: the kinds and the tasks in them, for the list. */
export function useLabTasks(): LabTasksState {
  return useLoaded('index', loadIndex, () => indexData ?? undefined) ?? { status: 'loading' };
}

/** One task with its solution, loaded with the tasks of its kind. */
export function useLabTask(id: string | null): LabTaskState {
  const group = id === null ? null : groupOfTask(id);
  const state = useLoaded(
    group,
    () => loadGroup(group ?? ''),
    () => groupData.get(group ?? ''),
  );
  if (state === null) return { status: 'ready', data: null };
  if (state.status !== 'ready') return state;
  return { status: 'ready', data: state.data.find((t) => t.id === id) ?? null };
}
