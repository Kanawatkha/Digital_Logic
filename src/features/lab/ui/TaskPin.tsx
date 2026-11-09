import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import { taskLabel } from './taskLabel';

type TaskPinProps = {
  /** The task the student is working on, as the list names it ("03.05") */
  id: string;
  onOpen: () => void;
  onClear: () => void;
};

/**
 * A small label over the board that says which task is being worked on while the tasks drawer is
 * closed. Pressing it opens the task again; the cross lets go of it.
 */
export function TaskPin({ id, onOpen, onClear }: TaskPinProps) {
  return (
    <div
      className="lab-appear type-nav pointer-events-auto mx-auto flex w-fit max-w-full items-center rounded-md border border-hairline bg-canvas py-0.5 ps-1 pe-0.5 text-ink shadow-[0_2px_10px_rgba(20,20,19,0.12)]"
      data-state="open"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${UI_TEXT.labTaskPinOpen} ${taskLabel(id)}`}
        title={UI_TEXT.labTaskPinOpen}
        className="inline-flex h-8 items-center gap-1.5 rounded-md px-2 active:bg-surface-card"
      >
        <Icon name="tasks" size={16} />
        {UI_TEXT.labTaskPin} {taskLabel(id)}
      </button>
      <button
        type="button"
        onClick={onClear}
        aria-label={UI_TEXT.labTaskPinClear}
        title={UI_TEXT.labTaskPinClear}
        className="inline-flex size-8 items-center justify-center rounded-md text-muted active:bg-surface-card"
      >
        <Icon name="close" size={16} />
      </button>
    </div>
  );
}
