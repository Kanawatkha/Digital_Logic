import {
  ROW_COUNT,
  agrees,
  cellsOf,
  evalExpr,
  parseExpr,
  type Cell,
  type Spec,
} from '../../src/features/lab/tasks/logic.ts';

/**
 * Reads the boolean formulas of a written solution back from their LaTeX, so that the build can
 * check them. A formula is made of A, B, C, 0, 1, `\overline{...}` for NOT, `\cdot` or nothing for
 * AND, `+` for OR and brackets, with the spacing commands `\,` `\;` `\!` `\quad`. Anything else
 * (a `\sum`, a word, an arrow) means the text is not a formula of this kind and `latexToExpr`
 * throws, so a line of explanation is left alone.
 */

const SPACING = /^\\(,|;|!|quad|qquad| )/;

/** The index of the `}` that closes the `{` at `open`. */
function closing(tex: string, open: number): number {
  let depth = 0;
  for (let i = open; i < tex.length; i++) {
    if (tex[i] === '{') depth++;
    else if (tex[i] === '}' && --depth === 0) return i;
  }
  throw new Error('unbalanced braces');
}

/** The formula as plain text for `parseExpr`. */
export function latexToExpr(tex: string): string {
  let out = '';
  let i = 0;
  while (i < tex.length) {
    const rest = tex.slice(i);
    const ch = tex[i]!;
    if (ch === '\\') {
      if (rest.startsWith('\\overline{')) {
        const open = i + '\\overline'.length;
        const end = closing(tex, open);
        out += `!(${latexToExpr(tex.slice(open + 1, end))})`;
        i = end + 1;
      } else if (rest.startsWith('\\cdot')) {
        out += '&';
        i += '\\cdot'.length;
      } else {
        const m = SPACING.exec(rest);
        if (!m) throw new Error(`not a formula: ${rest.slice(0, 12)}`);
        i += m[0].length;
      }
    } else if (/[ABC01+()\s]/.test(ch)) {
      out += ch;
      i++;
    } else {
      throw new Error(`not a formula: ${ch}`);
    }
  }
  return out;
}

/**
 * The text with every `\text{...}` note taken out. A note may hold math (`\text{$X+0=X$}`, the law
 * a step uses), so the end of the note is found by counting braces. The formulas inside a note are
 * explanation and are not checked.
 */
export function withoutNotes(tex: string): string {
  let out = '';
  let i = 0;
  while (i < tex.length) {
    if (tex.startsWith('\\text{', i)) {
      i = closing(tex, i + '\\text'.length) + 1;
      out += ' ';
    } else {
      out += tex[i];
      i++;
    }
  }
  return out;
}

/** Splits at the `=` signs that are not inside braces. */
function splitEquals(tex: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let from = 0;
  for (let i = 0; i < tex.length; i++) {
    if (tex[i] === '{') depth++;
    else if (tex[i] === '}') depth--;
    else if (tex[i] === '=' && depth === 0) {
      parts.push(tex.slice(from, i));
      from = i + 1;
    }
  }
  parts.push(tex.slice(from));
  return parts;
}

type Output = { name: string; spec: Spec };

const valuesOf = (formula: string) => {
  const e = parseExpr(formula);
  return Array.from({ length: ROW_COUNT }, (_, r) => evalExpr(e, r));
};

/**
 * A chain of equal formulas `F = a = b = c` (one display formula, `aligned` allowed), where F may be
 * the name of an output. Returns null when the text is not such a chain, or the list of what is
 * wrong with it (empty when it holds). Every part must do what one of the outputs asks.
 */
export function checkChain(tex: string, outputs: readonly Output[]): string[] | null {
  const plain = withoutNotes(tex)
    .replace(/\\begin\{aligned\}|\\end\{aligned\}/g, ' ')
    .replace(/\\\\/g, ' ')
    .replace(/&/g, ' ');
  const parts = splitEquals(plain).map((p) => p.trim());
  if (parts.length < 2 || parts.some((p) => p === '')) return null;

  const named = new Set<string>();
  const values: boolean[][] = [];
  try {
    for (const part of parts) {
      const o = outputs.find((x) => x.name === part);
      if (o) named.add(o.name);
      else values.push(valuesOf(latexToExpr(part)));
    }
  } catch {
    return null;
  }
  if (values.length === 0) return null;

  const candidates = outputs.filter((o) => named.size === 0 || named.has(o.name));
  const holds = (cells: readonly Cell[]) => values.every((v) => agrees(cells, v));
  if (candidates.some((o) => holds(cellsOf(o.spec)))) return [];
  return [`the formulas of "${parts.join(' = ')}" do not all do what the task asks`];
}

/** `Y = formula` of an answer line: the output it is for and what is wrong with it. */
export function checkAnswer(
  tex: string,
  outputs: readonly Output[],
): { output: string | null; problems: string[] } {
  const body = tex.replace(/\\mathbf\{Ans\}/, '').trim();
  const at = body.indexOf('=');
  const name = body
    .slice(0, at)
    .replace(/\\(quad|qquad|,|;)/g, '')
    .trim();
  const o = outputs.find((x) => x.name === name);
  if (at < 0 || !o) return { output: null, problems: [`answer line "${body}" names no output`] };
  try {
    const values = valuesOf(latexToExpr(body.slice(at + 1)));
    return agrees(cellsOf(o.spec), values)
      ? { output: o.name, problems: [] }
      : { output: o.name, problems: [`the answer for ${o.name} does not do what the task asks`] };
  } catch (e) {
    return {
      output: o.name,
      problems: [`cannot read the answer for ${o.name}: ${e instanceof Error ? e.message : e}`],
    };
  }
}
