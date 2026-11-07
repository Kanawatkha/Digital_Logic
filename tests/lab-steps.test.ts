// @vitest-environment node
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { checkAnswer, checkChain, latexToExpr } from '../scripts/build-content/latexExpr';
import { buildLabTasks } from '../scripts/build-content/tasks';
import { cellsOf, parseExpr, specOfExpr, specOfMinterms } from '../src/features/lab/tasks/logic';

const spec = (text: string) => specOfExpr(parseExpr(text));
const abOrC = [{ name: 'Y', spec: spec('AB + C') }];

describe('formulas read back from LaTeX', () => {
  it('reads bars, products, sums, brackets and spacing', () => {
    expect(parseExpr(latexToExpr(String.raw`\overline{A}B + AC`))).toEqual(parseExpr("A'B + AC"));
    expect(latexToExpr(String.raw`\overline{\overline{A}\,\overline{B}}`)).toBe('!(!(A)!(B))');
    expect(latexToExpr(String.raw`A \cdot B`)).toContain('&');
    expect(latexToExpr(String.raw`(A + B)(\overline{C}\,)`)).toBe('(A + B)(!(C))');
  });

  it('refuses what is not a formula of A, B and C', () => {
    expect(() => latexToExpr(String.raw`\sum m(1,2)`)).toThrow();
    expect(() => latexToExpr('A + D')).toThrow();
    expect(() => latexToExpr(String.raw`\overline{A + B`)).toThrow();
    expect(() => latexToExpr(String.raw`A \Rightarrow B`)).toThrow();
  });
});

describe('chains of equal formulas', () => {
  it('accepts a true chain, with an output name or without, and with aligned text', () => {
    expect(checkChain(String.raw`Y = AB + C`, abOrC)).toEqual([]);
    expect(checkChain(String.raw`C + AB = C + BA = AB + C`, abOrC)).toEqual([]);
    expect(
      checkChain(
        String.raw`\begin{aligned} Y &= AB + AC + \overline{A}C && \text{(คำอธิบาย)} \\ &= AB + C \end{aligned}`,
        abOrC,
      ),
    ).toEqual([]);
  });

  it('finds a step that is not equal', () => {
    expect(checkChain(String.raw`Y = AB + C = A + C`, abOrC)).toHaveLength(1);
    expect(checkChain(String.raw`Y = AB`, abOrC)).toHaveLength(1);
  });

  it('leaves alone what is not a chain of formulas', () => {
    expect(checkChain(String.raw`Y = \sum m(3,5,6,7)`, abOrC)).toBeNull();
    expect(checkChain(String.raw`AB + C`, abOrC)).toBeNull();
    expect(checkChain(String.raw`\overline{A}B &\Rightarrow \text{ช่อง 2}`, abOrC)).toBeNull();
  });

  it("lets a don't care row take either value", () => {
    const dc = [{ name: 'Y', spec: specOfMinterms('m(3,7) d(1,5)') }];
    expect(checkChain(String.raw`Y = C = BC`, dc)).toEqual([]);
    expect(checkChain(String.raw`Y = B`, dc)).toHaveLength(1);
  });

  it('takes the output a formula is for among several', () => {
    const two = [
      { name: 'X', spec: spec('AB') },
      { name: 'Y', spec: spec('A + B') },
    ];
    expect(checkChain(String.raw`A + B = B + A`, two)).toEqual([]);
    expect(checkChain(String.raw`X = AB`, two)).toEqual([]);
    expect(checkChain(String.raw`Y = AB`, two)).toHaveLength(1);
  });
});

describe('answer lines', () => {
  it('checks the formula of the output the line is for', () => {
    expect(checkAnswer(String.raw`\mathbf{Ans}\quad Y = C + AB`, abOrC)).toEqual({
      output: 'Y',
      problems: [],
    });
    expect(checkAnswer(String.raw`\mathbf{Ans}\quad Y = C`, abOrC).problems).toHaveLength(1);
    expect(checkAnswer(String.raw`\mathbf{Ans}\quad Q = C`, abOrC).output).toBeNull();
    expect(checkAnswer(String.raw`\mathbf{Ans}\quad Y = \sum m(1)`, abOrC).problems[0]).toMatch(
      /cannot read/,
    );
  });

  it('knows cells of the output (sanity of the helper)', () => {
    expect(cellsOf(abOrC[0]!.spec).join('')).toBe('01010111');
  });
});

describe('a task with a solution, built from Markdown', () => {
  const dirs: string[] = [];
  afterAll(() => dirs.forEach((d) => rmSync(d, { recursive: true, force: true })));

  /** Builds a one task file and returns the errors and the task. */
  function build(solution: string, outputs = 'Y', extra = 'Y = expr AB + C') {
    const root = mkdtempSync(join(tmpdir(), 'lab-steps-'));
    dirs.push(root);
    mkdirSync(join(root, 'lab-tasks'));
    writeFileSync(
      join(root, 'lab-tasks', '01-test.md'),
      [
        '# Kind',
        '',
        'Intro.',
        '',
        '## ข้อ 1 ทดสอบ',
        '',
        'จงลดรูป',
        '',
        '```lab',
        `outputs: ${outputs}`,
        extra,
        '```',
        '',
        solution,
      ].join('\n'),
    );
    const result = buildLabTasks(root);
    return { errors: result.errors, task: result.data.groups[0]?.tasks[0] };
  }

  const good = String.raw`$\mathbf{Sol}^{n}$

ลดรูป

@kmap:Y

$$Y = AB + C = C + AB$$

$\mathbf{Ans}\quad Y = AB + C$
`;

  it('keeps the steps and the answer apart and builds the Karnaugh map from the data', () => {
    const { errors, task } = build(good);
    expect(errors).toEqual([]);
    expect(task?.steps.map((b) => b.t)).toEqual(['p', 'table', 'math']);
    expect(task?.answer).toHaveLength(1);
    const table = task?.steps[1];
    expect(table?.t === 'table' && table.rows.map((r) => r.map((c) => c.length))).toEqual([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ]);
  });

  it('refuses a task with no solution, no answer line or no steps', () => {
    expect(build('').errors[0]).toMatch(/no solution/);
    expect(build(String.raw`$\mathbf{Sol}^{n}$` + '\n\nข้อความ\n').errors[0]).toMatch(/no answer/);
    expect(
      build(String.raw`$\mathbf{Sol}^{n}$` + '\n\n' + String.raw`$\mathbf{Ans}\quad Y = AB + C$`)
        .errors[0],
    ).toMatch(/no steps/);
  });

  it('refuses a wrong answer, a wrong step and an output with no answer line', () => {
    expect(build(good.replace('Ans}\\quad Y = AB + C', 'Ans}\\quad Y = AB')).errors[0]).toMatch(
      /does not do what/,
    );
    expect(build(good.replace('= C + AB$$', () => '= C + A$$')).errors[0]).toMatch(/step/);
    const two = build(good, 'X, Y', 'X = expr AB\nY = expr AB + C');
    expect(two.errors[0]).toMatch(/no answer line for X/);
  });

  it('refuses text after the answer lines', () => {
    expect(build(good + '\nมีข้อความต่อท้าย\n').errors[0]).toMatch(/only answer lines/);
  });
});
