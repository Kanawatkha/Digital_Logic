/**
 * The logic behind the lab tasks, with no dependency on the app, so that the build of the content
 * (Node) and the app use the same code: abstract gate netlists and their evaluation, boolean
 * expressions, don't cares, and the search for the smallest circuit of a function in a chosen kind
 * of gates (any, NAND only or NOR only). Imports inside it carry the `.ts` extension for Node.
 */

export const VARS = ['A', 'B', 'C'] as const;
export const ROW_COUNT = 8;

/** The rows of a truth table are numbered with A as the top bit: row 5 is A = 1, B = 0, C = 1. */
export const rowBits = (row: number): [boolean, boolean, boolean] => [
  Boolean((row >> 2) & 1),
  Boolean((row >> 1) & 1),
  Boolean(row & 1),
];

// ---------------------------------------------------------------- netlists

export type GateKind = 'NOT' | 'AND' | 'OR' | 'NAND' | 'NOR';
export const GATE_KIND_NAMES: readonly GateKind[] = ['NOT', 'AND', 'OR', 'NAND', 'NOR'];

export type TaskGate = { name: string; kind: GateKind; inputs: string[] };

/**
 * Gates by name (each reads A, B, C, 0, 1 or another gate) and which signal drives each output.
 * A gate of a task figure may have three inputs; one of a solution has at most two.
 */
export type TaskNetlist = { gates: TaskGate[]; outputs: Record<string, string> };

export type Cell = '0' | '1' | 'x';

const INPUT_SIGNALS = new Set<string>([...VARS, '0', '1']);

/** What is wrong with a netlist, in words; empty when it is sound. */
export function netlistProblems(net: TaskNetlist, maxInputs: number): string[] {
  const problems: string[] = [];
  const names = new Set<string>();
  for (const gate of net.gates) {
    if (INPUT_SIGNALS.has(gate.name)) problems.push(`gate name ${gate.name} is an input`);
    if (names.has(gate.name)) problems.push(`gate ${gate.name} is defined twice`);
    names.add(gate.name);
    const n = gate.inputs.length;
    if (gate.kind === 'NOT' ? n !== 1 : n < 2 || n > maxInputs) {
      problems.push(`gate ${gate.name} (${gate.kind}) has ${n} inputs`);
    }
  }
  const known = (s: string) => INPUT_SIGNALS.has(s) || names.has(s);
  for (const gate of net.gates) {
    for (const s of gate.inputs)
      if (!known(s)) problems.push(`gate ${gate.name} reads unknown ${s}`);
  }
  for (const [out, s] of Object.entries(net.outputs)) {
    if (!known(s)) problems.push(`output ${out} reads unknown ${s}`);
  }
  return problems;
}

/** The value of every output of the netlist in one row. */
export function evalNetlist(net: TaskNetlist, row: number): Record<string, boolean> {
  const [a, b, c] = rowBits(row);
  const values = new Map<string, boolean>([
    ['A', a],
    ['B', b],
    ['C', c],
    ['0', false],
    ['1', true],
  ]);
  const byName = new Map(net.gates.map((g) => [g.name, g]));
  const visiting = new Set<string>();
  const get = (name: string): boolean => {
    const known = values.get(name);
    if (known !== undefined) return known;
    const gate = byName.get(name);
    if (!gate) throw new Error(`unknown signal ${name}`);
    if (visiting.has(name)) throw new Error(`loop at ${name}`);
    visiting.add(name);
    const ins = gate.inputs.map(get);
    visiting.delete(name);
    let v: boolean;
    switch (gate.kind) {
      case 'NOT':
        v = !ins[0];
        break;
      case 'AND':
        v = ins.every(Boolean);
        break;
      case 'OR':
        v = ins.some(Boolean);
        break;
      case 'NAND':
        v = !ins.every(Boolean);
        break;
      case 'NOR':
        v = !ins.some(Boolean);
        break;
    }
    values.set(name, v);
    return v;
  };
  return Object.fromEntries(Object.entries(net.outputs).map(([out, s]) => [out, get(s)]));
}

/** The truth table of each output, row by row. */
export function truthOf(net: TaskNetlist): Record<string, Cell[]> {
  const table: Record<string, Cell[]> = Object.fromEntries(
    Object.keys(net.outputs).map((o) => [o, []]),
  );
  for (let row = 0; row < ROW_COUNT; row++) {
    const values = evalNetlist(net, row);
    for (const [out, v] of Object.entries(values)) table[out]!.push(v ? '1' : '0');
  }
  return table;
}

/** Number of gates that lead to an output. */
export function gateCount(net: TaskNetlist): number {
  const byName = new Map(net.gates.map((g) => [g.name, g]));
  const seen = new Set<string>();
  const visit = (s: string) => {
    const g = byName.get(s);
    if (!g || seen.has(s)) return;
    seen.add(s);
    g.inputs.forEach(visit);
  };
  Object.values(net.outputs).forEach(visit);
  return seen.size;
}

/**
 * What a figure would cost if it were built from two input gates: a gate with k inputs is k - 1 two
 * input gates (a NOT is one gate), counting only what leads to an output.
 */
export function twoInputCost(net: TaskNetlist): number {
  const byName = new Map(net.gates.map((g) => [g.name, g]));
  const seen = new Set<string>();
  const visit = (s: string) => {
    const g = byName.get(s);
    if (!g || seen.has(s)) return;
    seen.add(s);
    g.inputs.forEach(visit);
  };
  Object.values(net.outputs).forEach(visit);
  let cost = 0;
  for (const name of seen) {
    const g = byName.get(name)!;
    cost += g.kind === 'NOT' ? 1 : g.inputs.length - 1;
  }
  return cost;
}

// ---------------------------------------------------------------- expressions

export type Expr =
  | { t: 'var'; name: string }
  | { t: 'const'; v: boolean }
  | { t: 'not'; e: Expr }
  | { t: 'and'; es: Expr[] }
  | { t: 'or'; es: Expr[] };

/**
 * Reads an expression in plain characters: A, B, C, 0, 1, `!` or a following `'` for NOT, `&` or `*`
 * for AND (or nothing between two factors, as in AB), `|` or `+` for OR, and brackets. NOT binds
 * tighter than AND, AND tighter than OR.
 */
export function parseExpr(text: string): Expr {
  const s = text.replace(/\s+/g, '');
  let i = 0;
  const fail = (why: string): never => {
    throw new Error(`${why} at ${i} in "${text}"`);
  };
  const orLevel = (): Expr => {
    const parts = [andLevel()];
    while (s[i] === '|' || s[i] === '+') {
      i++;
      parts.push(andLevel());
    }
    return parts.length === 1
      ? parts[0]!
      : { t: 'or', es: parts.flatMap((p) => (p.t === 'or' ? p.es : [p])) };
  };
  /** A factor that follows another with no sign between: AB, A(B + C), AB' */
  const startsFactor = () => s[i] !== undefined && '(!ABC01'.includes(s[i]!);
  const andLevel = (): Expr => {
    const parts = [unary()];
    while (s[i] === '&' || s[i] === '*' || startsFactor()) {
      if (s[i] === '&' || s[i] === '*') i++;
      parts.push(unary());
    }
    return parts.length === 1
      ? parts[0]!
      : { t: 'and', es: parts.flatMap((p) => (p.t === 'and' ? p.es : [p])) };
  };
  const unary = (): Expr => {
    if (s[i] === '!') {
      i++;
      return { t: 'not', e: unary() };
    }
    let e = primary();
    while (s[i] === "'") {
      i++;
      e = { t: 'not', e };
    }
    return e;
  };
  const primary = (): Expr => {
    const c = s[i];
    if (c === '(') {
      i++;
      const e = orLevel();
      if (s[i] !== ')') fail('missing )');
      i++;
      return e;
    }
    if (c === 'A' || c === 'B' || c === 'C') {
      i++;
      return { t: 'var', name: c };
    }
    if (c === '0' || c === '1') {
      i++;
      return { t: 'const', v: c === '1' };
    }
    return fail(`unexpected "${c ?? 'end'}"`);
  };
  const e = orLevel();
  if (i < s.length) fail('unexpected text');
  return e;
}

export function evalExpr(e: Expr, row: number): boolean {
  const [a, b, c] = rowBits(row);
  const go = (x: Expr): boolean => {
    switch (x.t) {
      case 'var':
        return x.name === 'A' ? a : x.name === 'B' ? b : c;
      case 'const':
        return x.v;
      case 'not':
        return !go(x.e);
      case 'and':
        return x.es.every(go);
      case 'or':
        return x.es.some(go);
    }
  };
  return go(e);
}

/** The expression as LaTeX, with a bar for NOT: `\overline{A}B + C`. */
export function exprToLatex(e: Expr): string {
  const go = (x: Expr, parent: 'top' | 'and' | 'or'): string => {
    switch (x.t) {
      case 'var':
        return x.name;
      case 'const':
        return x.v ? '1' : '0';
      case 'not':
        return `\\overline{${go(x.e, 'top')}}`;
      case 'and': {
        let out = '';
        for (const f of x.es) {
          const part = go(f, 'and');
          const bars = out.endsWith('}') && part.startsWith('\\overline');
          out += (out && bars ? '\\,' : '') + part;
        }
        return out;
      }
      case 'or': {
        const text = x.es.map((f) => go(f, 'or')).join(' + ');
        return parent === 'and' ? `(${text})` : text;
      }
    }
  };
  return go(e, 'top');
}

// ---------------------------------------------------------------- rules and tables

export type Spec = { on: number[]; dc: number[] };

const COMPARE: Record<string, (a: number, b: number) => boolean> = {
  '>=': (a, b) => a >= b,
  '<=': (a, b) => a <= b,
  '>': (a, b) => a > b,
  '<': (a, b) => a < b,
  '==': (a, b) => a === b,
  '!=': (a, b) => a !== b,
};

const popcount = (n: number) => (n & 1) + ((n >> 1) & 1) + ((n >> 2) & 1);

/**
 * A rule over the three inputs as a spec: `ones >= 2` counts the inputs that are 1; `value > 4` reads
 * ABC as a binary number with A on top.
 */
export function specOfRule(text: string): Spec {
  const m = /^(ones|value)\s*(>=|<=|==|!=|>|<)\s*(\d+)$/.exec(text.trim());
  if (!m) throw new Error(`cannot read the rule "${text}"`);
  const [, what, op, n] = m;
  const compare = COMPARE[op!]!;
  const on: number[] = [];
  for (let row = 0; row < ROW_COUNT; row++) {
    if (compare(what === 'ones' ? popcount(row) : row, Number(n))) on.push(row);
  }
  return { on, dc: [] };
}

/** `m(1,3,5) d(0,2)`: the rows that are 1 and the rows that do not matter. */
export function specOfMinterms(text: string): Spec {
  const list = (letter: string): number[] => {
    const m = new RegExp(`${letter}\\(([^)]*)\\)`).exec(text);
    if (!m) return [];
    return m[1]!
      .split(',')
      .map((x) => x.trim())
      .filter((x) => x !== '')
      .map(Number);
  };
  const on = list('m');
  const dc = list('d');
  const rest = text.replace(/[md]\([^)]*\)/g, '').trim();
  if (rest !== '') throw new Error(`cannot read "${text}"`);
  for (const row of [...on, ...dc]) {
    if (!Number.isInteger(row) || row < 0 || row >= ROW_COUNT)
      throw new Error(`row ${row} is not 0 to 7`);
  }
  if (on.some((r) => dc.includes(r))) throw new Error("a row is both 1 and a don't care");
  if (new Set(on).size !== on.length || new Set(dc).size !== dc.length)
    throw new Error('a row is listed twice');
  return { on: [...on].sort((a, b) => a - b), dc: [...dc].sort((a, b) => a - b) };
}

export const specOfExpr = (e: Expr): Spec => ({
  on: Array.from({ length: ROW_COUNT }, (_, r) => r).filter((r) => evalExpr(e, r)),
  dc: [],
});

/** The table of a spec as cells: 1, 0 or x for a don't care. */
export function cellsOf(spec: Spec): Cell[] {
  return Array.from({ length: ROW_COUNT }, (_, r) =>
    spec.dc.includes(r) ? 'x' : spec.on.includes(r) ? '1' : '0',
  );
}

/** Whether the values of an output in the eight rows agree with the cells, a don't care agreeing with both. */
export function agrees(cells: readonly Cell[], values: readonly boolean[]): boolean {
  return cells.every((c, r) => c === 'x' || (c === '1') === values[r]);
}

/** A function that is the XOR or XNOR of two or three of the inputs (the tasks avoid them). */
export function isXorLike(cells: readonly Cell[]): boolean {
  for (const mask of [3, 5, 6, 7]) {
    for (const flip of [false, true]) {
      const ok = cells.every(
        (c, r) => c === 'x' || (c === '1') === (Boolean(popcount(r & mask) & 1) !== flip),
      );
      if (ok) return true;
    }
  }
  return false;
}

// ---------------------------------------------------------------- the smallest circuit

export type Implicant = { value: number; dashes: number };

const termLiterals = (t: Implicant) => 3 - popcount(t.dashes);
const covers = (t: Implicant, row: number) => (row & ~t.dashes) === t.value;

/** The prime implicants of a function whose 1 rows (and don't cares) are `allowed`. */
export function primeImplicants(allowed: readonly number[]): Implicant[] {
  let level = new Map<string, Implicant>(
    [...new Set(allowed)].map((m) => [`${m}:0`, { value: m, dashes: 0 }]),
  );
  const primes: Implicant[] = [];
  while (level.size > 0) {
    const next = new Map<string, Implicant>();
    const merged = new Set<string>();
    const terms = [...level.values()];
    for (let i = 0; i < terms.length; i++) {
      for (let j = i + 1; j < terms.length; j++) {
        const a = terms[i]!;
        const b = terms[j]!;
        if (a.dashes !== b.dashes) continue;
        const diff = a.value ^ b.value;
        if (diff === 0 || (diff & (diff - 1)) !== 0) continue;
        const term = { value: a.value & b.value, dashes: a.dashes | diff };
        next.set(`${term.value}:${term.dashes}`, term);
        merged.add(`${a.value}:${a.dashes}`);
        merged.add(`${b.value}:${b.dashes}`);
      }
    }
    for (const [key, term] of level) if (!merged.has(key)) primes.push(term);
    level = next;
  }
  return primes;
}

/**
 * Every cover of the rows in `must` by prime implicants in which no term can be left out, the
 * cheapest first (fewest terms, then fewest letters). `primes` must hold at most 16 terms.
 */
export function irredundantCovers(
  must: readonly number[],
  primes: readonly Implicant[],
): Implicant[][] {
  if (primes.length > 16) throw new Error('too many prime implicants');
  const out: Implicant[][] = [];
  for (let mask = 1; mask < 1 << primes.length; mask++) {
    const chosen = primes.filter((_, k) => (mask >> k) & 1);
    const coversAll = (set: readonly Implicant[]) =>
      must.every((r) => set.some((t) => covers(t, r)));
    if (!coversAll(chosen)) continue;
    if (chosen.some((_, k) => coversAll(chosen.filter((__, j) => j !== k)))) continue;
    out.push(chosen);
  }
  const cost = (set: readonly Implicant[]) =>
    set.length * 100 + set.reduce((s, t) => s + termLiterals(t), 0);
  return out.sort((x, y) => cost(x) - cost(y));
}

type Basis = 'aon' | 'nand' | 'nor';

/** Builds gates, sharing a gate that already exists and never inverting twice. */
class Builder {
  basis: Basis;
  gates: TaskGate[] = [];
  private cache = new Map<string, string>();
  private byName = new Map<string, TaskGate>();

  constructor(basis: Basis) {
    this.basis = basis;
  }

  gate(kind: GateKind, inputs: string[]): string {
    const key = `${kind}:${(kind === 'NOT' ? inputs : [...inputs].sort()).join(',')}`;
    const known = this.cache.get(key);
    if (known) return known;
    const name = `n${this.gates.length + 1}`;
    const g = { name, kind, inputs };
    this.gates.push(g);
    this.byName.set(name, g);
    this.cache.set(key, name);
    return name;
  }

  /** The signal that `x` is the inversion of, if it is one. */
  private inverted(x: string): string | null {
    const g = this.byName.get(x);
    if (!g) return null;
    if (g.kind === 'NOT') return g.inputs[0]!;
    if (
      (g.kind === 'NAND' || g.kind === 'NOR') &&
      g.inputs.length === 2 &&
      g.inputs[0] === g.inputs[1]
    ) {
      return g.inputs[0]!;
    }
    return null;
  }

  not(x: string): string {
    const back = this.inverted(x);
    if (back !== null) return back;
    if (this.basis === 'aon') return this.gate('NOT', [x]);
    return this.gate(this.basis === 'nand' ? 'NAND' : 'NOR', [x, x]);
  }

  and2(a: string, b: string): string {
    if (this.basis === 'aon') return this.gate('AND', [a, b]);
    if (this.basis === 'nand') return this.not(this.gate('NAND', [a, b]));
    return this.gate('NOR', [this.not(a), this.not(b)]);
  }

  or2(a: string, b: string): string {
    if (this.basis === 'aon') return this.gate('OR', [a, b]);
    if (this.basis === 'nand') return this.gate('NAND', [this.not(a), this.not(b)]);
    return this.not(this.gate('NOR', [a, b]));
  }

  and(xs: string[]): string {
    return xs.slice(1).reduce((acc, x) => this.and2(acc, x), xs[0]!);
  }

  or(xs: string[]): string {
    return xs.slice(1).reduce((acc, x) => this.or2(acc, x), xs[0]!);
  }

  literal(index: number, positive: boolean): string {
    return positive ? VARS[index]! : this.not(VARS[index]!);
  }
}

export type Form = 'sop' | 'pos';
type Choice = { form: Form; cover: Implicant[] };

const termIndexes = (t: Implicant) => [0, 1, 2].filter((i) => !(t.dashes & (1 << (2 - i))));
const termPositive = (t: Implicant, i: number) => Boolean(t.value & (1 << (2 - i)));

function buildOutput(b: Builder, choice: Choice): string {
  const { form, cover } = choice;
  const parts = cover.map((t) => {
    const idx = termIndexes(t);
    // a product term of the function, or (for POS) a sum of the opposite letters of a product term of its inverse
    const lits = idx.map((i) =>
      b.literal(i, form === 'sop' ? termPositive(t, i) : !termPositive(t, i)),
    );
    return form === 'sop' ? b.and(lits) : b.or(lits);
  });
  return form === 'sop' ? b.or(parts) : b.and(parts);
}

/** The cover written out: `AB + C'` for a sum of products, `(A + B)C` for a product of sums. */
export function coverText(choice: Choice): string {
  const letter = (i: number, positive: boolean) => VARS[i] + (positive ? '' : "'");
  if (choice.form === 'sop') {
    return choice.cover
      .map((t) =>
        termIndexes(t)
          .map((i) => letter(i, termPositive(t, i)))
          .join(''),
      )
      .join(' + ');
  }
  return choice.cover
    .map((t) => {
      const sum = termIndexes(t).map((i) => letter(i, !termPositive(t, i)));
      return sum.length === 1 ? sum[0]! : `(${sum.join(' + ')})`;
    })
    .join('');
}

export type Solution = {
  netlist: TaskNetlist;
  gates: number;
  /** The simplified equation of each output, as text with primes */
  equations: Record<string, string>;
  basis: Basis;
  forms: Record<string, Form>;
};

const BASIS_RANK: Record<Basis, number> = { aon: 0, nand: 1, nor: 2 };
const KEEP_COVERS = 8;

/** Gates in the order they are needed, named g1, g2, ..., with the ones nobody reads dropped. */
function tidy(b: Builder, outputs: Record<string, string>): TaskNetlist {
  const byName = new Map(b.gates.map((g) => [g.name, g]));
  const order: string[] = [];
  const seen = new Set<string>();
  const visit = (s: string) => {
    const g = byName.get(s);
    if (!g || seen.has(s)) return;
    seen.add(s);
    g.inputs.forEach(visit);
    order.push(s);
  };
  Object.values(outputs).forEach(visit);
  const rename = new Map(order.map((n, i) => [n, `g${i + 1}`]));
  const re = (s: string) => rename.get(s) ?? s;
  return {
    gates: order.map((n) => {
      const g = byName.get(n)!;
      return { name: re(n), kind: g.kind, inputs: g.inputs.map(re) };
    }),
    outputs: Object.fromEntries(Object.entries(outputs).map(([o, s]) => [o, re(s)])),
  };
}

/**
 * The smallest circuit that does what the outputs ask, counting two input gates (a NOT is a gate and
 * so is a NAND or NOR with its inputs tied together). Every way of writing each output as a sum of
 * products or as a product of sums, with the cheapest covers, is built in each kind of gates that is
 * allowed (AND, OR and NOT when no gate is named; NAND only; NOR only) and the one with the fewest gates is kept. A gate
 * that two outputs need is built once.
 */
export function solveOutputs(
  outputs: readonly { name: string; spec: Spec }[],
  only: 'nand' | 'nor' | null,
  /** Restricts the answer to a sum of products or a product of sums, when a task asks for one */
  form: Form | null = null,
): Solution {
  const perOutput: Choice[][] = outputs.map(({ name, spec }) => {
    const all = Array.from({ length: ROW_COUNT }, (_, r) => r);
    const off = all.filter((r) => !spec.on.includes(r) && !spec.dc.includes(r));
    if (spec.on.length === 0 || off.length === 0) throw new Error(`output ${name} is a constant`);
    const sop = irredundantCovers(spec.on, primeImplicants([...spec.on, ...spec.dc]));
    const pos = irredundantCovers(off, primeImplicants([...off, ...spec.dc]));
    return [
      ...(form === 'pos'
        ? []
        : sop.slice(0, KEEP_COVERS).map((cover) => ({ form: 'sop' as const, cover }))),
      ...(form === 'sop'
        ? []
        : pos.slice(0, KEEP_COVERS).map((cover) => ({ form: 'pos' as const, cover }))),
    ];
  });
  // a task that does not name a gate is measured in AND, OR and NOT, as in the textbook: a trick
  // with NAND that saves a gate must not make the usual answer too big
  const bases: Basis[] = only === 'nand' ? ['nand'] : only === 'nor' ? ['nor'] : ['aon'];

  const found: { score: number[] | null; solution: Solution | null } = {
    score: null,
    solution: null,
  };
  const pick: Choice[] = [];
  const visit = (k: number) => {
    if (k === outputs.length) {
      for (const basis of bases) {
        const b = new Builder(basis);
        const outs: Record<string, string> = {};
        outputs.forEach((o, i) => {
          outs[o.name] = buildOutput(b, pick[i]!);
        });
        const netlist = tidy(b, outs);
        const gates = netlist.gates.length;
        const letters = pick.reduce(
          (s, c) => s + c.cover.reduce((t, x) => t + termLiterals(x), 0),
          0,
        );
        const score = [
          gates,
          BASIS_RANK[basis],
          pick.filter((c) => c.form === 'pos').length,
          letters,
        ];
        if (found.score === null || lexLess(score, found.score)) {
          found.score = score;
          found.solution = {
            netlist,
            gates,
            basis,
            equations: Object.fromEntries(outputs.map((o, i) => [o.name, coverText(pick[i]!)])),
            forms: Object.fromEntries(outputs.map((o, i) => [o.name, pick[i]!.form])),
          };
        }
      }
      return;
    }
    for (const choice of perOutput[k]!) {
      pick[k] = choice;
      visit(k + 1);
    }
  };
  visit(0);
  const solution = found.solution;
  if (!solution) throw new Error('no circuit found');
  // the circuit must do what was asked
  for (const { name, spec } of outputs) {
    const cells = cellsOf(spec);
    const values = Array.from(
      { length: ROW_COUNT },
      (_, r) => evalNetlist(solution.netlist, r)[name]!,
    );
    if (!agrees(cells, values)) throw new Error(`the circuit found for ${name} is wrong`);
  }
  return solution;
}

function lexLess(a: readonly number[], b: readonly number[]): boolean {
  for (let i = 0; i < a.length; i++) {
    if (a[i]! !== b[i]!) return a[i]! < b[i]!;
  }
  return false;
}
