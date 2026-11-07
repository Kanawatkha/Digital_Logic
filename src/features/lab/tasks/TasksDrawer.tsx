import { UI_TEXT } from '@/config/site';
import { Drawer } from '../ui/Drawer';
import type { PlacedSolution } from './place';
import { TaskDetail } from './TaskDetail';
import { TaskList } from './TaskList';
import { useLabTasks } from './useLabTasks';

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
  onLoadSolution,
}: Omit<TasksDrawerProps, 'open' | 'onClose'>) {
  const tasks = useLabTasks();
  const task =
    tasks.status === 'ready'
      ? (tasks.data.groups.flatMap((g) => g.tasks).find((t) => t.id === taskId) ?? null)
      : null;
  return (
    <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain p-4 md:p-5">
      {tasks.status === 'loading' ? (
        <p className="type-body-md text-muted" role="status">
          {UI_TEXT.labTasksLoading}
        </p>
      ) : tasks.status === 'error' ? (
        <p className="type-body-md text-error" role="alert">
          {UI_TEXT.labTasksError}
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
          onLoadSolution={onLoadSolution}
        />
      ) : (
        <TaskList
          data={tasks.data}
          onSelect={onSelect}
          open={openKinds}
          onOpenChange={onOpenKinds}
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
