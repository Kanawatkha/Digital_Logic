import { useEffect, useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { UI_TEXT } from '@/config/site';
import { currentRow, inputName, tableAsText, type TruthTable } from '../analysis/truthTable';
import { CopyButton } from './CopyButton';

type TruthTableViewProps = {
  table: TruthTable;
  switches: readonly boolean[];
  /** Sets the switches to a row of the table */
  onPickRow: (row: number) => void;
};

const reducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

/**
 * The truth table of the LEDs. The row the switches are on is marked and kept in view; pressing a
 * row sets the switches to it (the row buttons are one stop of the Tab key, the arrows go between them).
 */
export function TruthTableView({ table, switches, onPickRow }: TruthTableViewProps) {
  const now = currentRow(switches, table.inputs);
  const box = useRef<HTMLDivElement>(null);

  // the row of the switches stays in the box, however far down the table is scrolled
  useEffect(() => {
    const scroller = box.current;
    const row = scroller?.querySelector<HTMLElement>('tr[aria-current="true"]');
    if (!scroller || !row) return;
    const head = scroller.querySelector('thead')?.getBoundingClientRect().height ?? 0;
    const top = row.offsetTop - head;
    const bottom = row.offsetTop + row.offsetHeight;
    let target: number | null = null;
    if (top < scroller.scrollTop) target = top;
    else if (bottom > scroller.scrollTop + scroller.clientHeight) {
      target = bottom - scroller.clientHeight;
    }
    if (target === null) return;
    if (typeof scroller.scrollTo === 'function') {
      scroller.scrollTo({ top: target, behavior: reducedMotion() ? 'auto' : 'smooth' });
    } else {
      scroller.scrollTop = target;
    }
  }, [now]);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const step = event.key === 'ArrowDown' ? 1 : event.key === 'ArrowUp' ? -1 : 0;
    if (step === 0) return;
    const buttons = [
      ...(box.current?.querySelectorAll<HTMLButtonElement>('button[data-row]') ?? []),
    ];
    const at = buttons.indexOf(event.target as HTMLButtonElement);
    const next = buttons[at + step];
    if (at < 0 || !next) return;
    event.preventDefault();
    next.focus();
  };

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="type-caption text-muted">
          {table.inputs.length === 0
            ? UI_TEXT.labResultsNoInputs
            : `${table.rows.length} แถว · ${UI_TEXT.labResultsNow} ${now}. ${UI_TEXT.labResultsRowHint}`}
        </p>
        <CopyButton text={tableAsText(table)} label={UI_TEXT.labResultsCopy} />
      </div>
      <div
        ref={box}
        className="relative max-h-[52dvh] overflow-auto rounded-lg border border-hairline"
      >
        <table className="w-full border-collapse text-center tabular-nums">
          <caption className="sr-only">{UI_TEXT.labResultsTable}</caption>
          <thead className="sticky top-0 z-10 bg-surface-card">
            <tr>
              <th scope="col" className="type-caption px-3 py-2 text-muted">
                #
              </th>
              {table.inputs.map((k, i) => (
                <th
                  key={k}
                  scope="col"
                  className="type-caption border-s border-hairline px-3 py-2 text-ink"
                >
                  {inputName(i)}
                  <span className="block text-[10px] font-normal text-muted">
                    {UI_TEXT.labResultsSwitch} {k + 1}
                  </span>
                </th>
              ))}
              {table.outputs.map((led, i) => (
                <th
                  key={led}
                  scope="col"
                  className={`type-caption px-3 py-2 text-ink ${i === 0 ? 'border-s-2 border-ink' : 'border-s border-hairline'}`}
                >
                  LED {led}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, index) => (
              <tr
                key={index}
                aria-current={index === now ? 'true' : undefined}
                onClick={() => onPickRow(index)}
                className={`cursor-pointer border-t border-hairline-soft transition-colors duration-200 ${
                  index === now ? 'bg-primary/15' : 'active:bg-surface-card'
                }`}
              >
                <th scope="row" className="type-caption px-3 py-1.5 font-normal text-muted">
                  <button
                    type="button"
                    data-row={index}
                    tabIndex={index === now ? 0 : -1}
                    title={`${UI_TEXT.labResultsSetRow} ${index}`}
                    onKeyDown={onKeyDown}
                    className="inline-flex min-w-8 items-center justify-center rounded-md px-1.5 py-0.5 tabular-nums"
                  >
                    {index}
                  </button>
                </th>
                {row.values.map((v, i) => (
                  <td
                    key={i}
                    className="type-body-sm border-s border-hairline-soft px-3 py-1.5 text-body"
                  >
                    {v ? 1 : 0}
                  </td>
                ))}
                {row.outputs.map((v, i) => (
                  <td
                    key={i}
                    className={`type-body-sm px-3 py-1.5 font-medium ${
                      i === 0 ? 'border-s-2 border-ink' : 'border-s border-hairline-soft'
                    } ${v ? 'text-error' : 'text-ink'}`}
                  >
                    {v ? 1 : 0}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
