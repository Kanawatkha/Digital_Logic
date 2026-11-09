import { BlockList } from '@/components/content/BlockRenderer';
import { InlineContent } from '@/components/content/InlineContent';
import { Icon } from '@/components/ui/Icon';
import type { LabTasksIndex } from '@/content/types';
import { LevelChip } from './LevelChip';

type TaskListProps = {
  data: LabTasksIndex;
  onSelect: (id: string) => void;
  /** The kinds that are unfolded, kept by the page: every kind is folded to start with */
  open: ReadonlySet<string>;
  onOpenChange: (open: ReadonlySet<string>) => void;
};

/** The tasks by kind, each kind folded until it is pressed. */
export function TaskList({ data, onSelect, open, onOpenChange }: TaskListProps) {
  const toggle = (id: string) => {
    const next = new Set(open);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onOpenChange(next);
  };
  return (
    <div className="flex flex-col gap-4">
      {data.groups.map((group) => (
        <section key={group.id} aria-labelledby={`lab-task-group-${group.id}`}>
          <h3 id={`lab-task-group-${group.id}`} className="type-title-sm text-ink">
            <button
              type="button"
              aria-expanded={open.has(group.id)}
              aria-controls={`lab-task-list-${group.id}`}
              className="flex min-h-10 w-full items-center gap-2 rounded-md px-1 text-left active:bg-surface-card"
              onClick={() => toggle(group.id)}
            >
              <span className="min-w-0 grow">
                <InlineContent nodes={group.title} />
              </span>
              <span className="type-caption shrink-0 text-muted tabular-nums">
                {group.tasks.length}
              </span>
              <Icon
                name="chevron-down"
                size={16}
                className={`shrink-0 transition-transform duration-200 ${open.has(group.id) ? 'rotate-180' : ''}`}
              />
            </button>
          </h3>
          {open.has(group.id) ? (
            <div id={`lab-task-list-${group.id}`} className="lab-fade">
              <div className="type-body-sm mb-2 px-1 text-muted [&_p]:text-sm [&_p]:text-muted">
                <BlockList blocks={group.intro} />
              </div>
              <ul className="flex flex-col gap-1">
                {group.tasks.map((task) => (
                  <li key={task.id}>
                    <button
                      type="button"
                      className="flex min-h-10 w-full items-center gap-2 rounded-md bg-surface-soft px-3 py-1.5 text-left text-ink transition-colors active:bg-surface-card"
                      onClick={() => onSelect(task.id)}
                    >
                      <span className="type-body-sm min-w-0 grow">
                        <InlineContent nodes={task.title} />
                      </span>
                      <LevelChip level={task.level} />
                      {task.only ? (
                        <span className="type-caption shrink-0 rounded-full bg-surface-dark px-2 py-0.5 text-on-dark">
                          {task.only === 'nand' ? 'NAND' : 'NOR'}
                        </span>
                      ) : null}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}
