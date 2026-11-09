import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import type {
  Block,
  LabNetlist,
  LabTask,
  LabTaskGroup,
  LabTasksData,
} from '../../src/content/types.ts';
import {
  GATE_KIND_NAMES,
  ROW_COUNT,
  cellsOf,
  evalNetlist,
  exprToLatex,
  gateCount,
  isXorLike,
  twoInputCost,
  netlistProblems,
  parseExpr,
  agrees,
  solveOutputs,
  specOfExpr,
  specOfMinterms,
  specOfRule,
  truthOf,
  type Expr,
  type Form,
  type GateKind,
  type Spec,
  type TaskNetlist,
} from '../../src/features/lab/tasks/logic.ts';
import { kmapSvg, loopsProblem, type KmapCell } from './kmapSvg.ts';
import { checkAnswer, checkChain } from './latexExpr.ts';
import { ParseError, parseInline, parseLines } from './parse.ts';
import { inlineText } from './tree.ts';

/**
 * The lab tasks: Markdown files in content/lab-tasks, one per kind of task. The text of a task is
 * ordinary content (paragraphs, formulas, tables). What the machine needs is in a fenced block:
 *
 *   ```lab
 *   outputs: Y
 *   Y = expr !(!A & B | A & C) & (A | B)
 *   only: nand
 *   figure:
 *     g1 = AND A B C
 *     Y = g1
 *   ```
 *
 * An output is given by `m(1,3,5) d(0)` (rows that are 1 and rows that do not matter), by `expr`
 * (a boolean expression), by `rule` (`ones >= 2`, `value > 4`), or by `figure` (what the figure
 * given in the statement does). In the statement `@expr:Y`, `@sum:Y` and `@prod:Y` stand for the
 * formula of the output Y and a line with `@table` for its truth table, written by the build from
 * the same data the check uses, so the text cannot disagree with it. The answer of each task is a
 * smallest circuit found by the build; the build refuses a task that cannot be answered.
 */

export type TasksResult = {
  data: LabTasksData;
  errors: string[];
  warnings: string[];
  report: string;
};

type Line = { text: string; no: number };

type OutputSpec = {
  name: string;
  spec: Spec;
  expr: Expr | null;
};

const LAB_OPEN = /^```lab\s*$/;
const SOL_LINE = '$\\mathbf{Sol}^{n}$';
const ANS_LINE = /^\$\\mathbf\{Ans\}/;
const FENCE = /^```\s*$/;
const GATE_LINE = /^(\w+)\s*=\s*([A-Z]+)\s+(.+)$/;
const KIND_SET = new Set<string>(GATE_KIND_NAMES);

function parseNetlist(lines: Line[], where: string): TaskNetlist {
  const gates: TaskNetlist['gates'] = [];
  const outputs: Record<string, string> = {};
  for (const { text, no } of lines) {
    const t = text.trim();
    if (t === '') continue;
    const g = GATE_LINE.exec(t);
    if (g && KIND_SET.has(g[2]!)) {
      gates.push({ name: g[1]!, kind: g[2] as GateKind, inputs: g[3]!.trim().split(/\s+/) });
      continue;
    }
    const o = /^(\w+)\s*=\s*(\w+)$/.exec(t);
    if (o) {
      outputs[o[1]!] = o[2]!;
      continue;
    }
    throw new ParseError(`${where}:${no}: cannot read the circuit line "${t}"`);
  }
  return { gates, outputs };
}

type Block0 = {
  outputs: string[];
  only: 'nand' | 'nor' | null;
  /** The task asks for a sum of products or a product of sums */
  form: Form | null;
  figure: TaskNetlist | null;
  specs: OutputSpec[];
};

/** Reads the lines inside a ```lab fence. */
function parseLab(lines: Line[], where: string): Block0 {
  let outputs: string[] = [];
  let only: 'nand' | 'nor' | null = null;
  let form: Form | null = null;
  let figureLines: Line[] | null = null;
  const given: { name: string; rest: string; no: number }[] = [];
  for (let i = 0; i < lines.length; i++) {
    const { text, no } = lines[i]!;
    const t = text.trim();
    if (t === '' || t.startsWith('#')) continue;
    if (t === 'figure:') {
      figureLines = [];
      while (
        i + 1 < lines.length &&
        (lines[i + 1]!.text.startsWith(' ') || lines[i + 1]!.text.trim() === '')
      ) {
        figureLines.push(lines[++i]!);
      }
      continue;
    }
    const kv = /^(outputs|only|form):\s*(.+)$/.exec(t);
    if (kv) {
      if (kv[1] === 'outputs')
        outputs = kv[2]!
          .split(',')
          .map((x) => x.trim())
          .filter(Boolean);
      else if (kv[1] === 'form') {
        if (kv[2] === 'sop' || kv[2] === 'pos') form = kv[2];
        else throw new ParseError(`${where}:${no}: form must be sop or pos`);
      } else if (kv[2] === 'nand' || kv[2] === 'nor') only = kv[2];
      else throw new ParseError(`${where}:${no}: only must be nand or nor`);
      continue;
    }
    const spec = /^(\w+)\s*=\s*(.+)$/.exec(t);
    if (spec) {
      given.push({ name: spec[1]!, rest: spec[2]!.trim(), no });
      continue;
    }
    throw new ParseError(`${where}:${no}: cannot read "${t}"`);
  }
  if (outputs.length < 1 || outputs.length > 2) {
    throw new ParseError(`${where}: a task has one or two outputs`);
  }
  const figure = figureLines ? parseNetlist(figureLines, where) : null;
  const specs: OutputSpec[] = outputs.map((name) => {
    const item = given.find((g) => g.name === name);
    if (!item) throw new ParseError(`${where}: output ${name} has no line "${name} = ..."`);
    if (given.filter((g) => g.name === name).length > 1) {
      throw new ParseError(`${where}: output ${name} is given twice`);
    }
    const at = `${where}:${item.no}`;
    try {
      if (item.rest === 'figure') {
        if (!figure) throw new Error('there is no figure');
        const signal = figure.outputs[name];
        if (!signal) throw new Error(`the figure has no output ${name}`);
        const net: TaskNetlist = { gates: figure.gates, outputs: { [name]: signal } };
        const on = Array.from({ length: ROW_COUNT }, (_, r) => r).filter(
          (r) => evalNetlist(net, r)[name],
        );
        return { name, spec: { on, dc: [] }, expr: null };
      }
      if (item.rest.startsWith('expr ')) {
        const expr = parseExpr(item.rest.slice(5));
        return { name, spec: specOfExpr(expr), expr };
      }
      if (item.rest.startsWith('rule '))
        return { name, spec: specOfRule(item.rest.slice(5)), expr: null };
      return { name, spec: specOfMinterms(item.rest), expr: null };
    } catch (e) {
      throw new ParseError(`${at}: ${e instanceof Error ? e.message : String(e)}`);
    }
  });
  for (const g of given) {
    if (!outputs.includes(g.name))
      throw new ParseError(`${where}:${g.no}: ${g.name} is not an output`);
  }
  return { outputs, only, form, figure, specs };
}

/** The formula and table placeholders of a statement, written from the data of the task. */
function fillPlaceholders(lines: Line[], specs: OutputSpec[], where: string): Line[] {
  const byName = new Map(specs.map((s) => [s.name, s]));
  const need = (name: string, no: number): OutputSpec => {
    const s = byName.get(name);
    if (!s) throw new ParseError(`${where}:${no}: no output ${name}`);
    return s;
  };
  const out: Line[] = [];
  for (const { text, no } of lines) {
    if (text.trim() === '@table') {
      const head = ['A', 'B', 'C', ...specs.map((s) => s.name)];
      out.push({ no, text: `| ${head.join(' | ')} |` });
      out.push({ no, text: `|${head.map(() => ':-:').join('|')}|` });
      const cells = specs.map((s) => cellsOf(s.spec));
      for (let r = 0; r < ROW_COUNT; r++) {
        const row = [(r >> 2) & 1, (r >> 1) & 1, r & 1, ...cells.map((c) => c[r]!.toUpperCase())];
        out.push({ no, text: `| ${row.join(' | ')} |` });
      }
      continue;
    }
    const km = /^@kmap:(\w+)(?:\s+(.+))?$/.exec(text.trim());
    if (km) {
      // the Karnaugh map of three variables, drawn like the figures of the chapters; the loops are
      // written after the name as cells joined by commas and loops joined by bars: @kmap:Y 2,3 | 5,7
      const cells = cellsOf(need(km[1]!, no).spec) as KmapCell[];
      const loops = (km[2] ?? '')
        .split('|')
        .filter((part) => part.trim() !== '')
        .map((part) => part.split(',').map((n) => Number(n.trim())));
      const problem = loopsProblem(cells, loops);
      if (problem) throw new ParseError(`${where}:${no}: @kmap:${km[1]}: ${problem}`);
      for (const line of kmapSvg(cells, loops)) out.push({ no, text: line });
      continue;
    }
    const replaced = text.replace(/@(expr|sum|prod):(\w+)/g, (_m, kind: string, name: string) => {
      const s = need(name, no);
      if (kind === 'expr') {
        if (!s.expr) throw new ParseError(`${where}:${no}: ${name} was not given as an expression`);
        return exprToLatex(s.expr);
      }
      const rows = Array.from({ length: ROW_COUNT }, (_, r) => r);
      const dc = s.spec.dc.join(',');
      if (kind === 'sum') {
        const base = `\\sum m(${s.spec.on.join(',')})`;
        return dc ? `${base} + \\sum d(${dc})` : base;
      }
      const zeros = rows.filter((r) => !s.spec.on.includes(r) && !s.spec.dc.includes(r));
      const base = `\\prod M(${zeros.join(',')})`;
      return dc ? `${base} \\cdot \\prod d(${dc})` : base;
    });
    out.push({ no, text: replaced });
  }
  return out;
}

/** The display formulas of some blocks, and of the blocks inside lists and notes. */
function mathOf(blocks: Block[]): string[] {
  const out: string[] = [];
  const walk = (list: Block[]) => {
    for (const b of list) {
      if (b.t === 'math') out.push(b.tex);
      else if (b.t === 'list') b.items.forEach((it) => walk(it.children));
      else if (b.t === 'note') walk(b.c);
    }
  };
  walk(blocks);
  return out;
}

function blockText(blocks: Block[]): string {
  const parts: string[] = [];
  const walk = (list: Block[]) => {
    for (const b of list) {
      if (b.t === 'p') parts.push(inlineText(b.c));
      else if (b.t === 'math') parts.push(`$$${b.tex}$$`);
      else if (b.t === 'table') {
        parts.push(b.head.map((c) => inlineText(c)).join(' | '));
        for (const row of b.rows) parts.push(row.map((c) => inlineText(c)).join(' | '));
      } else if (b.t === 'list') {
        for (const it of b.items) {
          parts.push(`- ${inlineText(it.c)}`);
          walk(it.children);
        }
      } else if (b.t === 'note') walk(b.c);
    }
  };
  walk(blocks);
  return parts.join('\n');
}

const fileOf = (name: string) => {
  const m = /^(\d{2})-(.+)\.md$/.exec(name);
  if (!m) throw new Error(`lab task file name must look like NN-name.md: ${name}`);
  return m[1]!;
};

/** Converts content/lab-tasks. Never writes. */
export function buildLabTasks(contentDir: string): TasksResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const groups: LabTaskGroup[] = [];
  const report: string[] = [];
  const dir = join(contentDir, 'lab-tasks');
  const names = existsSync(dir)
    ? readdirSync(dir)
        .filter((f) => f.endsWith('.md'))
        .sort()
    : [];

  for (const name of names) {
    const rel = `lab-tasks/${name}`;
    try {
      const id = fileOf(name);
      const lines: Line[] = readFileSync(join(dir, name), 'utf8')
        .split(/\r?\n/)
        .map((text, k) => ({ text, no: k + 1 }));

      // sections: the title and what follows it, then one section for each task
      const starts: number[] = [];
      let inFence = false;
      lines.forEach((l, k) => {
        if (/^```/.test(l.text)) inFence = !inFence;
        if (!inFence && /^##\s/.test(l.text)) starts.push(k);
      });
      const head = lines.slice(0, starts[0] ?? lines.length);
      const title = head.find((l) => /^#\s/.test(l.text));
      if (!title) throw new ParseError(`${rel}: no title line "# ..."`);
      const intro = parseLines(
        head.filter((l) => !/^#\s/.test(l.text)),
        rel,
        false,
      );
      const group: LabTaskGroup = {
        id,
        title: parseInline(title.text.replace(/^#\s+/, '').trim(), `${rel}:${title.no}`),
        intro: intro.map((t) => {
          if (t.k !== 'block') throw new ParseError(`${rel}: heading in the introduction`);
          return t.block;
        }),
        tasks: [],
      };
      report.push(`== ${id} ${inlineText(group.title)}`);

      starts.forEach((from, index) => {
        const section = lines.slice(from, starts[index + 1] ?? lines.length);
        const heading = section[0]!;
        const where = `${rel}:${heading.no}`;
        try {
          const open = section.findIndex((l) => LAB_OPEN.test(l.text));
          if (open < 0) throw new ParseError(`${where}: no \`\`\`lab block`);
          const close = section.findIndex((l, k) => k > open && FENCE.test(l.text));
          if (close < 0) throw new ParseError(`${where}: the \`\`\`lab block is not closed`);
          const lab = parseLab(section.slice(open + 1, close), where);
          const after = section.slice(close + 1);
          const solAt = after.findIndex((l) => l.text.trim() === SOL_LINE);
          if (solAt < 0)
            throw new ParseError(`${where}: no solution, the line ${SOL_LINE} is missing`);
          const body = [...section.slice(1, open), ...after.slice(0, solAt)];
          const blocksOf = (list: Line[]): Block[] =>
            parseLines(fillPlaceholders(list, lab.specs, where), rel, false).map((t) => {
              if (t.k !== 'block') throw new ParseError(`${where}: heading inside a task`);
              return t.block;
            });
          const statement = blocksOf(body);
          if (statement.length === 0) throw new ParseError(`${where}: the task has no statement`);

          // the solution: steps, then one answer line for each output
          const written = after.slice(solAt + 1);
          const ansAt = written.findIndex((l) => ANS_LINE.test(l.text.trim()));
          if (ansAt < 0) throw new ParseError(`${where}: the solution has no answer line`);
          const ansLines = written.slice(ansAt).filter((l) => l.text.trim() !== '');
          const stray = ansLines.find((l) => !ANS_LINE.test(l.text.trim()));
          if (stray)
            throw new ParseError(
              `${where}:${stray.no}: only answer lines may follow the first one`,
            );
          const steps = blocksOf(written.slice(0, ansAt));
          if (steps.length === 0) throw new ParseError(`${where}: the solution has no steps`);
          const answer = blocksOf(written.slice(ansAt));

          // what was written must be right: every answer line, and every chain of equal formulas
          const outs = lab.specs.map((s) => ({ name: s.name, spec: s.spec }));
          const answered = new Set<string>();
          for (const l of ansLines) {
            const r = checkAnswer(l.text.trim().replace(/^\$|\$$/g, ''), outs);
            if (r.output) answered.add(r.output);
            if (r.problems.length)
              throw new ParseError(`${where}:${l.no}: ${r.problems.join('; ')}`);
          }
          for (const o of outs) {
            if (!answered.has(o.name))
              throw new ParseError(`${where}: no answer line for ${o.name}`);
          }
          let chains = 0;
          for (const tex of mathOf(steps)) {
            const bad = checkChain(tex, outs);
            if (bad === null) continue;
            if (bad.length) throw new ParseError(`${where}: step: ${bad.join('; ')}`);
            chains++;
          }

          // checks on the task
          for (const s of lab.specs) {
            const cells = cellsOf(s.spec);
            if (isXorLike(cells))
              throw new ParseError(`${where}: output ${s.name} is an XOR or XNOR`);
          }
          if (lab.figure) {
            const problems = netlistProblems(lab.figure, 3);
            if (problems.length) throw new ParseError(`${where}: figure: ${problems.join('; ')}`);
          }
          const solved = solveOutputs(
            lab.specs.map((s) => ({ name: s.name, spec: s.spec })),
            lab.only,
            lab.form,
          );
          const text = blockText(statement);
          if (lab.form && !text.includes(lab.form.toUpperCase())) {
            throw new ParseError(
              `${where}: the task says form: ${lab.form} but the statement does not mention ${lab.form.toUpperCase()}`,
            );
          }
          if (lab.figure) {
            // the figure is the circuit to simplify, so it has to be larger than the answer
            const cost = twoInputCost(lab.figure);
            if (cost <= solved.gates) {
              throw new ParseError(
                `${where}: the figure (${cost} two input gates) is no larger than the answer`,
              );
            }
          }
          if (lab.only === 'nand' && !/NAND/.test(text)) {
            throw new ParseError(
              `${where}: the task says only: nand but the statement does not mention NAND`,
            );
          }
          if (lab.only === 'nor' && !/NOR/.test(text)) {
            throw new ParseError(
              `${where}: the task says only: nor but the statement does not mention NOR`,
            );
          }

          const problems = netlistProblems(solved.netlist, 2);
          if (problems.length) throw new ParseError(`${where}: solution: ${problems.join('; ')}`);
          for (const s of lab.specs) {
            const values = Array.from(
              { length: ROW_COUNT },
              (_, r) => evalNetlist(solved.netlist, r)[s.name]!,
            );
            if (!agrees(cellsOf(s.spec), values))
              throw new ParseError(`${where}: the solution of ${s.name} is wrong`);
          }
          if (gateCount(solved.netlist) !== solved.gates)
            throw new ParseError(`${where}: gate count`);

          const task: LabTask = {
            id: `${id}.${index + 1}`,
            number: index + 1,
            title: parseInline(heading.text.replace(/^##\s+/, '').trim(), where),
            statement,
            outputs: lab.specs.map((s) => ({ name: s.name, cells: cellsOf(s.spec) })),
            only: lab.only,
            figure: lab.figure as LabNetlist | null,
            steps,
            answer,
            solution: { netlist: solved.netlist, gates: solved.gates, equations: solved.equations },
          };
          group.tasks.push(task);

          report.push(
            `-- ${task.id} ${inlineText(task.title)}${lab.only ? `  [${lab.only.toUpperCase()} only]` : ''}`,
            ...text.split('\n').map((x) => `   | ${x}`),
            ...lab.specs.map(
              (s) =>
                `   ${s.name}: ${cellsOf(s.spec).join('')}   answer: ${solved.equations[s.name]}  (${solved.forms[s.name]})`,
            ),
            `   steps: ${steps.length} blocks, ${chains} chains of equal formulas checked`,
            `   budget: ${solved.gates} gates (${solved.basis})${lab.figure ? `; figure ${lab.figure.gates.length} gates (${Object.keys(truthOf(lab.figure)).length} outputs)` : ''}`,
            '',
          );
        } catch (e) {
          errors.push(e instanceof Error ? e.message : String(e));
        }
      });
      groups.push(group);
    } catch (e) {
      errors.push(`${rel}: ${e instanceof Error ? e.message : String(e)}`);
    }
  }

  // task ids are unique
  const seen = new Set<string>();
  for (const g of groups) {
    for (const t of g.tasks) {
      if (seen.has(t.id)) errors.push(`duplicate task id ${t.id}`);
      seen.add(t.id);
    }
  }
  const total = groups.reduce((s, g) => s + g.tasks.length, 0);
  report.unshift(`lab tasks: ${groups.length} files, ${total} tasks`, '');
  return { data: { groups }, errors, warnings, report: report.join('\n') };
}
