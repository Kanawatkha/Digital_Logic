import type { Dispatch, SetStateAction } from 'react';
import { BlockList } from '@/components/content/BlockRenderer';
import { InlineContent } from '@/components/content/InlineContent';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import type { LabTasksIndex } from '@/content/types';
import {
  CHIPS,
  LEVELS,
  NO_FILTER,
  isFiltered,
  narrow,
  pickRandom,
  type ChipFilter,
  type TaskFilter,
} from './filter';
import { LevelChip } from './LevelChip';

type TaskListProps = {
  data: LabTasksIndex;
  onSelect: (id: string) => void;
  /** The kinds that are unfolded, kept by the page: every kind is folded to start with */
  open: ReadonlySet<string>;
  onOpenChange: (open: ReadonlySet<string>) => void;
  /** What the list is narrowed to, kept by the page like the kinds */
  filter: TaskFilter;
  onFilterChange: Dispatch<SetStateAction<TaskFilter>>;
  /** Where the chance in "สุ่มโจทย์" comes from (tests give their own) */
  random?: () => number;
};

const LEVEL_TEXT = {
  easy: UI_TEXT.labTaskLevelEasy,
  medium: UI_TEXT.labTaskLevelMedium,
  hard: UI_TEXT.labTaskLevelHard,
} as const;

const CHIP_TEXT: Record<ChipFilter, string> = {
  free: UI_TEXT.labTasksFree,
  nand: UI_TEXT.labTasksNandOnly,
  nor: UI_TEXT.labTasksNorOnly,
};

/** One choice of a filter: pressed when it is the one that is on. */
function Choice({
  pressed,
  onPress,
  children,
}: {
  pressed: boolean;
  onPress: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onPress}
      className={`type-caption inline-flex h-8 items-center rounded-full border px-3 transition-colors ${
        pressed
          ? 'border-ink bg-ink text-on-dark'
          : 'border-hairline bg-canvas text-ink active:bg-surface-card'
      }`}
    >
      {children}
    </button>
  );
}

/** The tasks by kind, each kind folded until it is pressed. */
export function TaskList({
  data: full,
  onSelect,
  open,
  onOpenChange,
  filter,
  onFilterChange,
  random = Math.random,
}: TaskListProps) {
  const data = narrow(full, filter);
  const total = full.groups.reduce((sum, group) => sum + group.tasks.length, 0);
  const shown = data.groups.reduce((sum, group) => sum + group.tasks.length, 0);
  const totals = new Map(full.groups.map((group) => [group.id, group.tasks.length]));
  // from what the filter is when the change is made, so two quick presses both count
  const choose = (next: Partial<TaskFilter>) => onFilterChange((was) => ({ ...was, ...next }));
  const toggle = (id: string) => {
    const next = new Set(open);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onOpenChange(next);
  };
  return (
    <div className="flex flex-col gap-4">
      <div
        role="group"
        aria-label={UI_TEXT.labTasksFilter}
        className="flex flex-col gap-2 rounded-lg border border-hairline bg-surface-soft p-3"
      >
        <div
          role="group"
          aria-label={UI_TEXT.labTasksLevel}
          className="flex flex-wrap items-center gap-1.5"
        >
          <span className="type-caption me-1 w-14 text-muted">{UI_TEXT.labTasksLevel}</span>
          <Choice pressed={filter.level === null} onPress={() => choose({ level: null })}>
            {UI_TEXT.labTasksAll}
          </Choice>
          {LEVELS.map((level) => (
            <Choice key={level} pressed={filter.level === level} onPress={() => choose({ level })}>
              {LEVEL_TEXT[level]}
            </Choice>
          ))}
        </div>
        <div
          role="group"
          aria-label={UI_TEXT.labTasksChips}
          className="flex flex-wrap items-center gap-1.5"
        >
          <span className="type-caption me-1 w-14 text-muted">{UI_TEXT.labTasksChips}</span>
          <Choice pressed={filter.chips === null} onPress={() => choose({ chips: null })}>
            {UI_TEXT.labTasksAll}
          </Choice>
          {CHIPS.map((chips) => (
            <Choice key={chips} pressed={filter.chips === chips} onPress={() => choose({ chips })}>
              {CHIP_TEXT[chips]}
            </Choice>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p role="status" className="type-caption text-muted tabular-nums">
            {UI_TEXT.labTasksShown} {shown} {UI_TEXT.labTasksOf} {total} {UI_TEXT.labTasksUnit}
          </p>
          <div className="flex items-center gap-1.5">
            {isFiltered(filter) ? (
              <button
                type="button"
                onClick={() => onFilterChange(NO_FILTER)}
                className="type-caption inline-flex h-8 items-center rounded-md px-2 text-ink underline underline-offset-2 active:bg-surface-card"
              >
                {UI_TEXT.labTasksClearFilter}
              </button>
            ) : null}
            <button
              type="button"
              disabled={shown === 0}
              title={UI_TEXT.labTasksRandomHint}
              onClick={() => {
                const id = pickRandom(full, filter, random);
                if (id !== null) onSelect(id);
              }}
              className="type-caption inline-flex h-8 items-center gap-1.5 rounded-md bg-ink px-3 text-on-dark transition-opacity disabled:opacity-40"
            >
              <Icon name="shuffle" size={16} />
              {UI_TEXT.labTasksRandom}
            </button>
          </div>
        </div>
      </div>
      {shown === 0 ? <p className="type-body-md text-muted">{UI_TEXT.labTasksNoMatch}</p> : null}
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
                {isFiltered(filter)
                  ? `${group.tasks.length}/${totals.get(group.id) ?? group.tasks.length}`
                  : group.tasks.length}
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
