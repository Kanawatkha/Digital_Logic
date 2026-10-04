import type { Align, Inline } from '@/content/types';
import { ScrollArea } from '@/components/content/ScrollArea';
import { InlineContent } from '@/components/content/InlineContent';

const ALIGN_CLASS: Record<Align, string> = {
  n: 'text-center',
  l: 'text-left',
  c: 'text-center',
  r: 'text-right',
};

type TableBlockProps = { align: Align[]; head: Inline[][]; rows: Inline[][][] };

/** Pipe table. The wrapper scrolls sideways so wide tables never widen the page. */
export function TableBlock({ align, head, rows }: TableBlockProps) {
  return (
    <ScrollArea className="rounded-md border border-hairline">
      <table className="type-body-sm w-full border-collapse">
        <thead>
          <tr>
            {head.map((cell, c) =>
              cell.length === 0 ? (
                // an empty header cell is not a column label, so it is a plain cell
                <td key={c} className="bg-surface-soft" />
              ) : (
                <th
                  key={c}
                  scope="col"
                  className={`bg-surface-soft px-3 py-2 font-medium whitespace-nowrap text-ink ${ALIGN_CLASS[align[c] ?? 'n']}`}
                >
                  <InlineContent nodes={cell} />
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={`border-t border-hairline px-3 py-2 ${ALIGN_CLASS[align[c] ?? 'n']}`}
                >
                  <InlineContent nodes={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </ScrollArea>
  );
}
