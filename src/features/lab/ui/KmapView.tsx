import type { KeyboardEvent } from 'react';
import { UI_TEXT } from '@/config/site';
import {
  KMAP_MAX_INPUTS,
  KMAP_MIN_INPUTS,
  LOOP_COLORS,
  kmapLayout,
  kmapLoops,
  loopPieces,
  type KmapLayout,
} from '../analysis/kmap';
import { mintermsOf, type TruthTable } from '../analysis/truthTable';
import { Notation } from './Notation';

const CELL = 56;
const LEFT = 64;
const TOP = 46;
const PAD = 10;

type MapProps = {
  layout: KmapLayout;
  table: TruthTable;
  led: number;
  /** The row of the truth table the switches are on now */
  now: number;
  onPick: (row: number) => void;
};

/** One map: the cells with their numbers and values, the loops over them, the cell of the switches marked. */
function KmapFigure({ layout, table, led, now, onPick }: MapProps) {
  const ones = mintermsOf(table, led);
  const column = table.outputs.indexOf(led);
  const loops = kmapLoops(layout.n, ones);
  const gridWidth = layout.columns.length * CELL;
  const gridHeight = layout.rows.length * CELL;
  const width = LEFT + gridWidth + PAD;
  const height = TOP + gridHeight + PAD;
  const press = (row: number) => (event: KeyboardEvent) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    onPick(row);
  };
  return (
    <div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        role="group"
        aria-label={`${UI_TEXT.labResultsKmap} LED ${led}`}
        className="mx-auto block h-auto max-w-full"
        fontFamily="Inter, 'Helvetica Neue', Arial, sans-serif"
      >
        <g className="stroke-ink" strokeWidth={1.8} fill="none">
          <rect x={LEFT} y={TOP} width={gridWidth} height={gridHeight} />
          {layout.columns.slice(1).map((bits, i) => (
            <line
              key={`c${bits}`}
              x1={LEFT + (i + 1) * CELL}
              y1={TOP}
              x2={LEFT + (i + 1) * CELL}
              y2={TOP + gridHeight}
            />
          ))}
          {layout.rows.slice(1).map((bits, i) => (
            <line
              key={`r${bits}`}
              x1={LEFT}
              y1={TOP + (i + 1) * CELL}
              x2={LEFT + gridWidth}
              y2={TOP + (i + 1) * CELL}
            />
          ))}
          <line x1={2} y1={2} x2={LEFT} y2={TOP} />
        </g>
        <g className="fill-ink select-none" fontSize={16} fontWeight={600}>
          <text x={LEFT - 10} y={17} textAnchor="end">
            {layout.topVars}
          </text>
          <text x={8} y={TOP - 8}>
            {layout.sideVars}
          </text>
          {layout.columns.map((bits, c) => (
            <text
              key={bits}
              x={LEFT + c * CELL + CELL / 2}
              y={TOP - 8}
              textAnchor="middle"
              fontWeight={400}
            >
              {bits}
            </text>
          ))}
          {layout.rows.map((bits, r) => (
            <text
              key={bits}
              x={LEFT - 8}
              y={TOP + r * CELL + CELL / 2 + 5}
              textAnchor="end"
              fontWeight={400}
            >
              {bits}
            </text>
          ))}
        </g>
        {layout.rows.map((_, r) =>
          layout.columns.map((__, c) => {
            const m = layout.cell(c, r);
            const value = table.rows[m]?.outputs[column] === true;
            const x = LEFT + c * CELL;
            const y = TOP + r * CELL;
            return (
              <g
                key={m}
                role="button"
                tabIndex={0}
                aria-label={`${UI_TEXT.labResultsSetRow} ${m}`}
                aria-current={m === now ? 'true' : undefined}
                className="cursor-pointer outline-none focus-visible:[&>rect]:stroke-ink"
                onClick={() => onPick(m)}
                onKeyDown={press(m)}
              >
                <rect
                  x={x + 1}
                  y={y + 1}
                  width={CELL - 2}
                  height={CELL - 2}
                  strokeWidth={2}
                  className={`stroke-transparent transition-colors duration-200 ${m === now ? 'fill-primary/20' : 'fill-transparent'}`}
                />
                <text x={x + 6} y={y + 14} fontSize={10} className="fill-muted select-none">
                  {m}
                </text>
                <text
                  x={x + CELL / 2}
                  y={y + CELL / 2 + 8}
                  textAnchor="middle"
                  fontSize={22}
                  fontWeight={600}
                  className={`select-none ${value ? 'fill-error' : 'fill-ink'}`}
                >
                  {value ? 1 : 0}
                </text>
              </g>
            );
          }),
        )}
        <g fill="none" pointerEvents="none">
          {loops.flatMap((loop, k) =>
            loopPieces(layout, loop.cells).map((piece, i) => {
              const inset = Math.min(12, 4 + 2 * k);
              return (
                <rect
                  key={`${k}:${i}`}
                  x={LEFT + piece.column * CELL + inset}
                  y={TOP + piece.row * CELL + inset}
                  width={piece.columns * CELL - 2 * inset}
                  height={piece.rows * CELL - 2 * inset}
                  rx={12}
                  strokeWidth={3}
                  stroke={LOOP_COLORS[k % LOOP_COLORS.length]}
                  className="lab-fade"
                />
              );
            }),
          )}
        </g>
      </svg>
      {loops.length === 0 ? (
        <p className="type-caption mt-2 text-muted">{UI_TEXT.labResultsKmapNone}</p>
      ) : (
        <div className="mt-2">
          <p className="type-caption mb-1 text-muted">{UI_TEXT.labResultsKmapLoops}</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {loops.map((loop, k) => (
              <li
                key={loop.term}
                className="flex items-center gap-1.5 font-mono text-[15px] text-ink"
              >
                <span
                  aria-hidden="true"
                  className="inline-block size-3 rounded-sm"
                  style={{ backgroundColor: LOOP_COLORS[k % LOOP_COLORS.length] }}
                />
                <Notation text={loop.term} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

type KmapViewProps = {
  table: TruthTable;
  now: number;
  onPickRow: (row: number) => void;
};

/** The Karnaugh map of every chosen LED, for a circuit with 2 to 4 switches as inputs. */
export function KmapView({ table, now, onPickRow }: KmapViewProps) {
  const layout = kmapLayout(table.inputs.length);
  if (!layout) {
    return (
      <p className="type-body-md rounded-md bg-surface-card px-3 py-2 text-body">
        {UI_TEXT.labResultsKmapNeeds} ({KMAP_MIN_INPUTS}-{KMAP_MAX_INPUTS})
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      <p className="type-caption text-muted">{UI_TEXT.labResultsKmapPick}</p>
      {table.outputs.map((led) => (
        <section
          key={led}
          aria-label={`LED ${led}`}
          className="rounded-lg border border-hairline bg-surface-soft p-3"
        >
          <h3 className="type-title-sm mb-2 text-ink">LED {led}</h3>
          <KmapFigure layout={layout} table={table} led={led} now={now} onPick={onPickRow} />
        </section>
      ))}
    </div>
  );
}
