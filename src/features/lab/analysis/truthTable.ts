import type { Circuit } from '../sim/evaluate';
import { simulate } from '../sim/evaluate';

/** The most input switches a table can have: all eight switches of the board, 256 rows. */
export const MAX_INPUTS = 8;

export type TruthRow = {
  /** The input switches in this row, in the order of `TruthTable.inputs` */
  values: boolean[];
  /** The chosen LEDs in this row, in the order of `TruthTable.outputs` */
  outputs: boolean[];
};

export type TruthTable = {
  /** Switch numbers from 0, in column order: the first is the top bit of the row number */
  inputs: number[];
  /** LED numbers from 1, in column order */
  outputs: number[];
  /** Row `n` has the inputs set to the bits of `n`, the first input as the top bit */
  rows: TruthRow[];
  /** What went wrong in at least one row, which makes the table unreliable */
  problems: { short: boolean; conflict: boolean; unstable: boolean; unpowered: boolean };
};

/** Letters for the input columns: A, B, C and so on. */
export const inputName = (position: number) => String.fromCharCode(65 + position);

/**
 * Runs the simulator on the circuit for every combination of the input switches, with every other
 * switch where it is, and reads the chosen LEDs. The table is what the board does, including a
 * chip without power or a floating input.
 */
export function buildTruthTable(
  circuit: Circuit,
  inputs: readonly number[],
  outputs: readonly number[],
): TruthTable {
  const used = [...new Set(inputs)].filter((k) => Number.isInteger(k) && k >= 0 && k < MAX_INPUTS);
  const columns = used.slice(0, MAX_INPUTS);
  const n = columns.length;
  const rows: TruthRow[] = [];
  const problems = { short: false, conflict: false, unstable: false, unpowered: false };
  for (let row = 0; row < 2 ** n; row++) {
    const values = columns.map((_, i) => Boolean((row >> (n - 1 - i)) & 1));
    const switches = Array.from({ length: MAX_INPUTS }, (_, k) => Boolean(circuit.switches[k]));
    columns.forEach((k, i) => {
      switches[k] = values[i] ?? false;
    });
    const result = simulate({ ...circuit, switches });
    for (const warning of result.warnings) {
      if (warning.kind === 'short') problems.short = true;
      else if (warning.kind === 'conflict') problems.conflict = true;
      else if (warning.kind === 'unstable') problems.unstable = true;
      else if (warning.kind === 'unpowered') problems.unpowered = true;
    }
    rows.push({ values, outputs: outputs.map((led) => result.leds[led - 1] === true) });
  }
  return { inputs: columns, outputs: [...outputs], rows, problems };
}

/** The row the switches are on now, for the inputs of a table. */
export function currentRow(switches: readonly boolean[], inputs: readonly number[]): number {
  return inputs.reduce((row, k) => row * 2 + (switches[k] ? 1 : 0), 0);
}

/** The rows where an output is 1 (the minterms). */
export function mintermsOf(table: TruthTable, output: number): number[] {
  const column = table.outputs.indexOf(output);
  if (column < 0) return [];
  return table.rows.flatMap((row, index) => (row.outputs[column] ? [index] : []));
}

/** The table as text with tabs between columns, for a spreadsheet or a lab report. */
export function tableAsText(table: TruthTable): string {
  const head = [
    ...table.inputs.map((_, i) => inputName(i)),
    ...table.outputs.map((led) => `LED${led}`),
  ].join('\t');
  const lines = table.rows.map((row) =>
    [...row.values, ...row.outputs].map((v) => (v ? '1' : '0')).join('\t'),
  );
  return [head, ...lines].join('\n');
}
