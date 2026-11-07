import { describe, expect, it } from 'vitest';
import {
  agrees,
  cellsOf,
  evalExpr,
  evalNetlist,
  exprToLatex,
  gateCount,
  isXorLike,
  netlistProblems,
  parseExpr,
  rowBits,
  solveOutputs,
  specOfExpr,
  specOfMinterms,
  specOfRule,
  truthOf,
  twoInputCost,
  type Cell,
  type TaskNetlist,
} from './logic';

const rowsOf = (text: string) => specOfExpr(parseExpr(text)).on;

describe('rows', () => {
  it('numbers the rows with A as the top bit', () => {
    expect(rowBits(0)).toEqual([false, false, false]);
    expect(rowBits(5)).toEqual([true, false, true]);
    expect(rowBits(3)).toEqual([false, true, true]);
  });
});

describe('expressions', () => {
  it('reads NOT as a prime or a bang, AND tighter than OR, and brackets', () => {
    // A'B + AC is 1 in rows 2, 3 (A = 0, B = 1) and 5, 7 (A = 1, C = 1)
    expect(rowsOf("A'B + AC")).toEqual([2, 3, 5, 7]);
    expect(rowsOf('!A&B | A*C')).toEqual([2, 3, 5, 7]);
    expect(rowsOf("(A + B)'")).toEqual([0, 1]);
    expect(rowsOf("A'B'C'")).toEqual([0]);
    expect(rowsOf('1')).toHaveLength(8);
    expect(rowsOf('0')).toHaveLength(0);
  });

  it('refuses text it cannot read', () => {
    expect(() => parseExpr('A + D')).toThrow();
    expect(() => parseExpr('(A + B')).toThrow();
    expect(() => parseExpr('A B ?')).toThrow();
    expect(() => parseExpr('')).toThrow();
  });

  it('evaluates a row at a time', () => {
    const e = parseExpr('AB + C');
    expect(evalExpr(e, 0)).toBe(false);
    expect(evalExpr(e, 1)).toBe(true);
    expect(evalExpr(e, 6)).toBe(true);
  });

  it('writes LaTeX with bars, thin spaces between bars, and brackets only where needed', () => {
    expect(exprToLatex(parseExpr("A'B + C"))).toBe('\\overline{A}B + C');
    expect(exprToLatex(parseExpr("A'B'"))).toBe('\\overline{A}\\,\\overline{B}');
    expect(exprToLatex(parseExpr('(A + B)C'))).toBe('(A + B)C');
    expect(exprToLatex(parseExpr("(AB)'"))).toBe('\\overline{AB}');
  });
});

describe('rules and tables', () => {
  it('reads a rule over the number of ones or over ABC as a number', () => {
    expect(specOfRule('ones >= 2').on).toEqual([3, 5, 6, 7]);
    expect(specOfRule('ones == 1').on).toEqual([1, 2, 4]);
    expect(specOfRule('value > 4').on).toEqual([5, 6, 7]);
    expect(specOfRule('value <= 2').on).toEqual([0, 1, 2]);
    expect(() => specOfRule('colour > 1')).toThrow();
  });

  it("reads minterms and don't cares", () => {
    expect(specOfMinterms('m(1,5,6) d(0,2)')).toEqual({ on: [1, 5, 6], dc: [0, 2] });
    expect(specOfMinterms('m(7, 3)')).toEqual({ on: [3, 7], dc: [] });
    expect(() => specOfMinterms('m(8)')).toThrow();
    expect(() => specOfMinterms('m(1) d(1)')).toThrow();
    expect(() => specOfMinterms('m(1,1)')).toThrow();
    expect(() => specOfMinterms('m(1) extra')).toThrow();
  });

  it("turns a spec into cells, and a don't care agrees with both values", () => {
    const cells = cellsOf({ on: [1, 5], dc: [0] });
    expect(cells).toEqual(['x', '1', '0', '0', '0', '1', '0', '0']);
    const values = (on: number[]) => Array.from({ length: 8 }, (_, r) => on.includes(r));
    expect(agrees(cells, values([1, 5]))).toBe(true);
    expect(agrees(cells, values([0, 1, 5]))).toBe(true);
    expect(agrees(cells, values([1]))).toBe(false);
    expect(agrees(cells, values([1, 5, 2]))).toBe(false);
  });

  it('knows XOR and XNOR of the inputs, and nothing else', () => {
    const cells = (on: number[]): Cell[] => cellsOf({ on, dc: [] });
    expect(isXorLike(cells(rowsOf("A'B + AB'")))).toBe(true);
    expect(isXorLike(cells(rowsOf("A'B'C + A'BC' + AB'C' + ABC")))).toBe(true);
    expect(isXorLike(cells(rowsOf("AB + A'B'")))).toBe(true);
    expect(isXorLike(cells(rowsOf('AB')))).toBe(false);
    expect(isXorLike(cells(rowsOf('AB + AC + BC')))).toBe(false);
    expect(isXorLike(cells(rowsOf('A + B')))).toBe(false);
  });
});

describe('gate netlists', () => {
  // Y = NAND(NAND(A, B), NAND(C, C)) = AB + C, with a gate nobody reads
  const net: TaskNetlist = {
    gates: [
      { name: 'g1', kind: 'NAND', inputs: ['A', 'B'] },
      { name: 'g2', kind: 'NAND', inputs: ['C', 'C'] },
      { name: 'g3', kind: 'NAND', inputs: ['g1', 'g2'] },
      { name: 'lonely', kind: 'NOT', inputs: ['A'] },
    ],
    outputs: { Y: 'g3' },
  };

  it('evaluates and tabulates', () => {
    expect(evalNetlist(net, 6)).toEqual({ Y: true });
    expect(evalNetlist(net, 2)).toEqual({ Y: false });
    expect(truthOf(net)['Y']!.join('')).toBe('01010111');
  });

  it('counts only the gates that lead to an output', () => {
    expect(gateCount(net)).toBe(3);
  });

  it('costs a figure in two input gates: a gate of k inputs is k - 1, a NOT is one', () => {
    const big: TaskNetlist = {
      gates: [
        { name: 'n', kind: 'NOT', inputs: ['A'] },
        { name: 'a', kind: 'AND', inputs: ['n', 'B', 'C'] },
        { name: 'o', kind: 'OR', inputs: ['a', 'C'] },
      ],
      outputs: { Y: 'o' },
    };
    expect(twoInputCost(big)).toBe(1 + 2 + 1);
    expect(gateCount(big)).toBe(3);
  });

  it('says what is wrong with a netlist', () => {
    expect(netlistProblems(net, 2)).toEqual([]);
    const threeInputs: TaskNetlist = {
      gates: [{ name: 'g', kind: 'AND', inputs: ['A', 'B', 'C'] }],
      outputs: { Y: 'g' },
    };
    expect(netlistProblems(threeInputs, 2)).toHaveLength(1);
    expect(netlistProblems(threeInputs, 3)).toEqual([]);
    expect(
      netlistProblems({ gates: [{ name: 'g', kind: 'NOT', inputs: ['A', 'B'] }], outputs: {} }, 3),
    ).toHaveLength(1);
    expect(netlistProblems({ gates: [], outputs: { Y: 'nothing' } }, 2)).toHaveLength(1);
    expect(
      netlistProblems({ gates: [{ name: 'g', kind: 'NOT', inputs: ['zz'] }], outputs: {} }, 2),
    ).toHaveLength(1);
    expect(
      netlistProblems(
        {
          gates: [
            { name: 'g', kind: 'NOT', inputs: ['A'] },
            { name: 'g', kind: 'NOT', inputs: ['B'] },
          ],
          outputs: { Y: 'g' },
        },
        2,
      ),
    ).toHaveLength(1);
    expect(
      netlistProblems({ gates: [{ name: 'A', kind: 'NOT', inputs: ['B'] }], outputs: {} }, 2),
    ).toHaveLength(1);
  });
});

describe('the smallest circuit', () => {
  const sum = (text: string) => ({ name: 'Y', spec: specOfExpr(parseExpr(text)) });

  /** The circuit does what the cells ask in every row. */
  function expectDoes(net: TaskNetlist, name: string, cells: readonly Cell[]) {
    const values = Array.from({ length: 8 }, (_, r) => evalNetlist(net, r)[name]!);
    expect(agrees(cells, values)).toBe(true);
  }

  it('finds AND and OR for AB + C, in two gates', () => {
    const solution = solveOutputs([sum('AB + C')], null);
    expect(solution.gates).toBe(2);
    expect(solution.equations['Y']).toBe('AB + C');
    expect(solution.basis).toBe('aon');
    expect(solution.netlist.gates.map((g) => g.kind).sort()).toEqual(['AND', 'OR']);
  });

  it('finds NAND only and NOR only for the same function, in three gates each', () => {
    const nand = solveOutputs([sum('AB + C')], 'nand');
    const nor = solveOutputs([sum('AB + C')], 'nor');
    expect(nand.gates).toBe(3);
    expect(nor.gates).toBe(3);
    expect(new Set(nand.netlist.gates.map((g) => g.kind))).toEqual(new Set(['NAND']));
    expect(new Set(nor.netlist.gates.map((g) => g.kind))).toEqual(new Set(['NOR']));
    const cells = cellsOf(sum('AB + C').spec);
    expectDoes(nand.netlist, 'Y', cells);
    expectDoes(nor.netlist, 'Y', cells);
  });

  it('never uses more than two inputs for a gate', () => {
    for (const text of ["AB + A'C + BC", "A'B'C + AB'C' + ABC + A'BC'", 'A + B + C', 'ABC']) {
      for (const only of [null, 'nand', 'nor'] as const) {
        const { netlist } = solveOutputs([sum(text)], only);
        for (const gate of netlist.gates) expect(gate.inputs.length).toBeLessThanOrEqual(2);
      }
    }
  });

  it("uses the don't cares to make the circuit smaller", () => {
    // 1 in rows 1 and 3, free in 5 and 7: the whole function is C, which is no gate at all
    const solution = solveOutputs([{ name: 'Y', spec: { on: [1, 3], dc: [5, 7] } }], null);
    expect(solution.gates).toBe(0);
    expect(solution.equations['Y']).toBe('C');
    expect(solution.netlist.outputs['Y']).toBe('C');
    // without them it takes a gate or more
    const without = solveOutputs([{ name: 'Y', spec: { on: [1, 3], dc: [] } }], null);
    expect(without.gates).toBeGreaterThan(0);
    expectDoes(without.netlist, 'Y', cellsOf({ on: [1, 3], dc: [] }));
  });

  it('builds a gate that two outputs need once', () => {
    const solution = solveOutputs(
      [
        { name: 'Y', spec: specOfExpr(parseExpr('AB')) },
        { name: 'Z', spec: specOfExpr(parseExpr('AB + C')) },
      ],
      null,
    );
    // AND(A, B) is shared: Y reads it, Z reads it and ORs C
    expect(solution.gates).toBe(2);
    expect(gateCount(solution.netlist)).toBe(2);
    expectDoes(solution.netlist, 'Y', cellsOf(specOfExpr(parseExpr('AB'))));
    expectDoes(solution.netlist, 'Z', cellsOf(specOfExpr(parseExpr('AB + C'))));
  });

  it('picks a product of sums when it is smaller', () => {
    // (A + B)(A + C) is A + BC as a product, and (A + B + C)(A + B' + C') style covers are worse; the
    // function below is cheaper as a product of sums than as a sum of products
    const spec = specOfExpr(parseExpr("(A + B)(A' + C)"));
    const solution = solveOutputs([{ name: 'Y', spec }], null);
    expectDoes(solution.netlist, 'Y', cellsOf(spec));
    expect(solution.gates).toBeLessThanOrEqual(4);
  });

  it('keeps to the form a task asks for, and measures the answer in it', () => {
    const spec = { on: [1, 3, 6], dc: [2, 5] };
    const sop = solveOutputs([{ name: 'Y', spec }], null, 'sop');
    const pos = solveOutputs([{ name: 'Y', spec }], null, 'pos');
    expect(sop.forms['Y']).toBe('sop');
    expect(pos.forms['Y']).toBe('pos');
    for (const s of [sop, pos]) expectDoes(s.netlist, 'Y', cellsOf(spec));
    expect(solveOutputs([{ name: 'Y', spec }], null).gates).toBeLessThanOrEqual(
      Math.min(sop.gates, pos.gates),
    );
  });

  it('refuses an output that is always 0 or always 1', () => {
    expect(() => solveOutputs([{ name: 'Y', spec: { on: [], dc: [] } }], null)).toThrow();
    expect(() =>
      solveOutputs([{ name: 'Y', spec: { on: [0, 1, 2, 3, 4, 5, 6, 7], dc: [] } }], null),
    ).toThrow();
  });
});
