import { useMemo } from 'react';
import { BlockList } from '@/components/content/BlockRenderer';
import { InlineContent } from '@/components/content/InlineContent';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import type { LabTask } from '@/content/types';
import { placeSolution, type PlacedSolution } from './place';
import { TaskDiagram } from './TaskDiagram';
import { TaskTruthTable } from './TaskTruthTable';

type TaskDetailProps = {
  task: LabTask;
  onBack: () => void;
  /** Whether the solution is shown, kept by the page so it is as it was left */
  solutionOpen: boolean;
  onSolutionOpenChange: (open: boolean) => void;
  /** The answer, put on the boards in place of what is there */
  onLoadSolution: (placed: PlacedSolution) => void;
};

const buttonClass =
  'type-nav inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 transition-transform duration-150 active:scale-95';

/** One task: the statement, and behind one button the worked solution, the answer and the circuit. */
export function TaskDetail({
  task,
  onBack,
  solutionOpen,
  onSolutionOpenChange,
  onLoadSolution,
}: TaskDetailProps) {
  const outputNames = useMemo(() => task.outputs.map((o) => o.name), [task.outputs]);

  // A, B and C are switches 1, 2 and 3; the outputs are LED 1 and LED 2
  const load = () =>
    onLoadSolution(
      placeSolution(task.solution.netlist, outputNames, {
        inputs: [0, 1, 2],
        leds: outputNames.map((_, k) => k + 1),
      }),
    );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-1">
        <button
          type="button"
          className="-ms-2 inline-flex size-10 shrink-0 items-center justify-center rounded-md text-ink transition-transform duration-150 active:scale-90 active:bg-surface-card"
          aria-label={UI_TEXT.labTasksBack}
          title={UI_TEXT.labTasksBack}
          onClick={onBack}
        >
          <Icon name="chevron-right" size={20} className="rotate-180" />
        </button>
        <h3 className="type-title-sm text-ink">
          <InlineContent nodes={task.title} />
        </h3>
      </div>

      {task.only ? (
        <p className="type-caption w-fit rounded-full bg-surface-dark px-3 py-1 text-on-dark">
          {task.only === 'nand' ? UI_TEXT.labTaskOnlyNand : UI_TEXT.labTaskOnlyNor}
        </p>
      ) : null}

      <BlockList blocks={task.statement} />

      {task.figure ? (
        <section aria-label={UI_TEXT.labTaskFigure} className="flex flex-col gap-1.5">
          <h4 className="type-caption text-muted">{UI_TEXT.labTaskFigure}</h4>
          <TaskDiagram net={task.figure} outputNames={outputNames} />
        </section>
      ) : null}

      <section className="flex flex-col gap-3 border-t border-hairline pt-4">
        <button
          type="button"
          aria-expanded={solutionOpen}
          className={`${buttonClass} self-start border border-hairline bg-canvas text-ink active:bg-surface-card`}
          onClick={() => onSolutionOpenChange(!solutionOpen)}
        >
          {solutionOpen ? UI_TEXT.labTaskSolutionHide : UI_TEXT.labTaskSolutionShow}
          <Icon
            name="chevron-down"
            size={16}
            className={`transition-transform duration-200 ${solutionOpen ? 'rotate-180' : ''}`}
          />
        </button>
        {solutionOpen ? (
          <div className="lab-fade flex flex-col gap-4">
            <div>
              <h4 className="type-caption mb-1 text-muted">{UI_TEXT.labTaskSteps}</h4>
              <BlockList blocks={task.steps} />
            </div>
            <div className="rounded-md bg-surface-soft px-4 py-3">
              <BlockList blocks={task.answer} />
            </div>
            <div>
              <h4 className="type-caption mb-1 text-muted">{UI_TEXT.labTaskTruthTable}</h4>
              <TaskTruthTable task={task} />
            </div>
            <div>
              <h4 className="type-caption mb-1 text-muted">
                {UI_TEXT.labTaskSolutionCircuit} · {UI_TEXT.labTaskSolutionGates}{' '}
                {task.solution.gates} {UI_TEXT.labTaskGateUnit}
              </h4>
              <TaskDiagram net={task.solution.netlist} outputNames={outputNames} />
            </div>
            <button
              type="button"
              className={`${buttonClass} self-start bg-surface-dark text-on-dark active:bg-surface-dark-elevated`}
              onClick={load}
            >
              <Icon name="chip" size={18} />
              {UI_TEXT.labTaskSolutionLoad}
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}
