import { useEffect, useState } from 'react';
import type { LabTasksData } from '@/content/types';
import { loadLabTasks } from '@/content/loaders';

export type LabTasksState =
  { status: 'loading' } | { status: 'error' } | { status: 'ready'; data: LabTasksData };

/** The tasks are loaded once, the first time they are asked for, and kept for the rest of the visit. */
let loaded: Promise<LabTasksData> | null = null;

function load(): Promise<LabTasksData> {
  loaded ??= loadLabTasks().catch((error: unknown) => {
    // a failed load is tried again the next time the tasks are opened
    loaded = null;
    throw error;
  });
  return loaded;
}

/** Forgets what was loaded. For tests. */
export function resetLabTasks(): void {
  loaded = null;
}

export function useLabTasks(): LabTasksState {
  const [state, setState] = useState<LabTasksState>({ status: 'loading' });
  useEffect(() => {
    let alive = true;
    load().then(
      (data) => {
        if (alive) setState({ status: 'ready', data });
      },
      () => {
        if (alive) setState({ status: 'error' });
      },
    );
    return () => {
      alive = false;
    };
  }, []);
  return state;
}
