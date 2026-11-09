import { useEffect, useMemo, useRef } from 'react';
import { UI_TEXT } from '@/config/site';
import type { LabMethodId } from '@/content/types';
import { taskActionOf } from '../shortcuts';
import { Drawer } from '../ui/Drawer';
import type { PlacedSolution } from './place';
import { TaskDetail } from './TaskDetail';
import { TaskList } from './TaskList';
import { prefetchLabTaskGroup, useLabTask, useLabTasks } from './useLabTasks';

type TasksDrawerProps = {
  open: boolean;
  onClose: () => void;
  /** The task that is open, or null for the list */
  taskId: string | null;
  onSelect: (id: string | null) => void;
  /** The kinds that are unfolded in the list (kept by the page, so the list is as it was left) */
  openKinds: ReadonlySet<string>;
  onOpenKinds: (kinds: ReadonlySet<string>) => void;
  /** The tasks whose solution is shown (kept by the page, like the kinds) */
  openSolutions: ReadonlySet<string>;
  onOpenSolutions: (tasks: ReadonlySet<string>) => void;
  /** The way a task with two ways is worked (kept by the page, so it follows the student from task to task) */
  method: LabMethodId;
  onMethodChange: (method: LabMethodId) => void;
  /** The answer, to be put on the boards in place of what is there */
  onLoadSolution: (placed: PlacedSolution) => void;
};

/** What is inside the drawer: it is made, and the tasks are loaded, only while the drawer is open. */
function TasksBody({
  taskId,
  onSelect,
  openKinds,
  onOpenKinds,
  openSolutions,
  onOpenSolutions,
  method,
  onMethodChange,
  onLoadSolution,
}: Omit<TasksDrawerProps, 'open' | 'onClose'>) {
  const tasks = useLabTasks();
  const detail = useLabTask(taskId);
  const task = detail.status === 'ready' ? detail.data : null;
  // the list needs the index, an open task needs the tasks of its own kind
  const failed = tasks.status === 'error' || (taskId !== null && detail.status === 'error');
  const waiting = tasks.status === 'loading' || (taskId !== null && detail.status === 'loading');

  // with a task open: [ and ] go to the task before and after (in the order of the list), S shows or hides the solution
  const order = useMemo(
    () =>
      tasks.status === 'ready' ? tasks.data.groups.flatMap((g) => g.tasks.map((t) => t.id)) : [],
    [tasks],
  );
  const scroller = useRef<HTMLDivElement>(null);
  // another task starts at its top, not where the one before was left
  useEffect(() => {
    scroller.current?.scrollTo?.({ top: 0 });
  }, [taskId]);
  useEffect(() => {
    if (taskId === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      const action = taskActionOf(event);
      if (!action) return;
      if (action === 'solution') {
        const next = new Set(openSolutions);
        if (!next.delete(taskId)) next.add(taskId);
        onOpenSolutions(next);
      } else {
        const target = order[order.indexOf(taskId) + (action === 'next' ? 1 : -1)];
        if (target === undefined) return;
        onSelect(target);
      }
      event.preventDefault();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [taskId, order, onSelect, openSolutions, onOpenSolutions]);

  return (
    <div
      ref={scroller}
      className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain p-4 md:p-5"
    >
      {failed ? (
        <p className="type-body-md text-error" role="alert">
          {UI_TEXT.labTasksError}
        </p>
      ) : waiting ? (
        <p className="type-body-md text-muted" role="status">
          {UI_TEXT.labTasksLoading}
        </p>
      ) : task ? (
        <TaskDetail
          key={task.id}
          task={task}
          onBack={() => onSelect(null)}
          solutionOpen={openSolutions.has(task.id)}
          onSolutionOpenChange={(open) => {
            const next = new Set(openSolutions);
            if (open) next.add(task.id);
            else next.delete(task.id);
            onOpenSolutions(next);
          }}
          method={method}
          onMethodChange={onMethodChange}
          onLoadSolution={onLoadSolution}
        />
      ) : (
        <TaskList
          data={tasks.data}
          onSelect={onSelect}
          open={openKinds}
          onOpenChange={(kinds) => {
            // a kind that is unfolded is likely to be opened next: bring its tasks in the meantime
            kinds.forEach((kind) => {
              if (!openKinds.has(kind)) prefetchLabTaskGroup(kind);
            });
            onOpenKinds(kinds);
          }}
        />
      )}
    </div>
  );
}

/**
 * The tasks of the lab in a drawer over a blurred page, like the pin diagrams and the results: a
 * list by kind, and one task at a time with its statement, its worked solution and the answer.
 */
export function TasksDrawer({ open, onClose, ...body }: TasksDrawerProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={UI_TEXT.labTasks}
      hint={UI_TEXT.labTasksHint}
      size="lg"
    >
      <TasksBody {...body} />
    </Drawer>
  );
}
