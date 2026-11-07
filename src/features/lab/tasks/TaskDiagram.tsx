import { useMemo } from 'react';
import type { LabNetlist } from '@/content/types';
import { layoutDiagram } from '../analysis/diagramLayout';
import { ResultDiagram } from '../analysis/ResultDiagram';
import { taskInputName, toNetlist } from './toNetlist';

type TaskDiagramProps = {
  net: LabNetlist;
  outputNames: readonly string[];
};

/** A drawing is still: no signal is lit */
const unlit = () => false;

/** The gates of a task (its figure, or its answer) as a circuit diagram. */
export function TaskDiagram({ net, outputNames }: TaskDiagramProps) {
  const layout = useMemo(
    () => layoutDiagram(toNetlist(net, outputNames), taskInputName, { inputsInOrder: true }),
    [net, outputNames],
  );
  const description = net.gates
    .map((gate) => `${gate.name} ${gate.kind} (${gate.inputs.join(', ')})`)
    .join('; ');
  return (
    <div className="overflow-auto rounded-md border border-hairline bg-surface-soft p-1.5">
      <ResultDiagram
        layout={layout}
        value={unlit}
        scale={null}
        description={description}
        switchNames={false}
      />
    </div>
  );
}
