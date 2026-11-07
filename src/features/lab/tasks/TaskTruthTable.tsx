import { UI_TEXT } from '@/config/site';
import type { LabTask } from '@/content/types';
import { rowBits } from './logic';

/** The truth table of the answer: A, B, C and each output, X for a row that does not matter. */
export function TaskTruthTable({ task }: { task: LabTask }) {
  return (
    <div className="overflow-x-auto rounded-md border border-hairline">
      <table className="w-full border-collapse text-center tabular-nums">
        <caption className="sr-only">{UI_TEXT.labTaskTruthTable}</caption>
        <thead className="bg-surface-card">
          <tr>
            {['A', 'B', 'C'].map((name) => (
              <th key={name} scope="col" className="type-caption px-3 py-1.5 text-ink">
                {name}
              </th>
            ))}
            {task.outputs.map((output, i) => (
              <th
                key={output.name}
                scope="col"
                className={`type-caption px-3 py-1.5 text-ink ${i === 0 ? 'border-s-2 border-ink' : 'border-s border-hairline'}`}
              >
                {output.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }, (_, row) => (
            <tr key={row} className="border-t border-hairline-soft">
              {rowBits(row).map((bit, i) => (
                <td key={i} className="type-body-sm px-3 py-1 text-body">
                  {bit ? 1 : 0}
                </td>
              ))}
              {task.outputs.map((output, i) => (
                <td
                  key={output.name}
                  className={`type-body-sm px-3 py-1 font-medium text-ink ${
                    i === 0 ? 'border-s-2 border-ink' : 'border-s border-hairline-soft'
                  }`}
                >
                  {output.cells[row]!.toUpperCase()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {task.outputs.some((o) => o.cells.includes('x')) ? (
        <p className="type-caption border-t border-hairline px-3 py-1.5 text-muted">
          {UI_TEXT.labTaskDontCare}
        </p>
      ) : null}
    </div>
  );
}
