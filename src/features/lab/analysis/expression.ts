import type { NetGate, Netlist, Signal } from './netlist';
import { inputName } from './truthTable';

/**
 * Boolean expressions of the circuit, two ways: read straight off the gates ("as wired"), and the
 * smallest sum of products that has the same truth table ("simplified", by Quine and McCluskey).
 */

// ---------------------------------------------------------------- simplified

/** A product term: `value` holds the bits that are fixed, `dashes` marks the variables that are left out. */
export type Implicant = { value: number; dashes: number };

const bitCount = (x: number) => {
  let count = 0;
  for (let v = x; v > 0; v >>= 1) count += v & 1;
  return count;
};

/** A cap on the search for the smallest cover; after it the cover found so far is used. */
const SEARCH_LIMIT = 40000;

/**
 * The prime implicants of a function of `n` variables with these minterms, then a cover of all the
 * minterms with as few terms as possible (and as few letters). The essential terms are taken first;
 * what is left is searched exactly, or, if the search gets too large, covered greedily.
 */
export function minimize(n: number, minterms: readonly number[]): Implicant[] {
  if (minterms.length === 0) return [];
  if (minterms.length === 2 ** n) return [{ value: 0, dashes: 2 ** n - 1 }];

  // prime implicants
  let level = new Map<string, Implicant>(
    [...new Set(minterms)].map((m) => [`${m}:0`, { value: m, dashes: 0 }]),
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

  const covers = (term: Implicant, m: number) => (m & ~term.dashes) === term.value;
  const cost = (term: Implicant) => n - bitCount(term.dashes);
  const wanted = [...new Set(minterms)];
  const chosen: Implicant[] = [];
  let left = wanted;
  // essential: a minterm that only one prime covers
  for (const m of wanted) {
    const only = primes.filter((p) => covers(p, m));
    if (only.length === 1 && !chosen.includes(only[0]!)) chosen.push(only[0]!);
  }
  left = left.filter((m) => !chosen.some((p) => covers(p, m)));

  if (left.length > 0) {
    const rest = primes.filter((p) => !chosen.includes(p) && left.some((m) => covers(p, m)));
    let best: Implicant[] | null = null;
    let bestScore = Infinity;
    let steps = 0;
    const search = (uncovered: number[], picked: Implicant[], score: number) => {
      if (steps++ > SEARCH_LIMIT) return;
      if (uncovered.length === 0) {
        if (score < bestScore) {
          bestScore = score;
          best = picked;
        }
        return;
      }
      if (score >= bestScore) return;
      // branch on the minterm with the fewest ways to be covered
      let target = uncovered[0]!;
      let options = rest.filter((p) => covers(p, target));
      for (const m of uncovered) {
        const candidates = rest.filter((p) => covers(p, m));
        if (candidates.length < options.length) {
          target = m;
          options = candidates;
        }
      }
      for (const p of [...options].sort((a, b) => cost(a) - cost(b))) {
        search(
          uncovered.filter((m) => !covers(p, m)),
          [...picked, p],
          score + 1000 + cost(p),
        );
      }
    };
    search(left, [], 0);
    if (!best) {
      // too many choices: take the term that covers the most, again and again
      let uncovered = left;
      const greedy: Implicant[] = [];
      while (uncovered.length > 0) {
        const p = [...rest].sort(
          (a, b) =>
            uncovered.filter((m) => covers(b, m)).length -
            uncovered.filter((m) => covers(a, m)).length,
        )[0]!;
        greedy.push(p);
        uncovered = uncovered.filter((m) => !covers(p, m));
      }
      best = greedy;
    }
    chosen.push(...(best as Implicant[]));
  }
  // the terms with the most letters first, then by value
  return chosen.sort((a, b) => cost(b) - cost(a) || a.value - b.value);
}

/** Whether a term is true at minterm `m`. */
export const termCovers = (term: Implicant, m: number): boolean =>
  (m & ~term.dashes) === term.value;

/** One term as letters: `AB'C`. A term with every variable left out is `1`. */
export function formatTerm(term: Implicant, n: number): string {
  let text = '';
  for (let i = 0; i < n; i++) {
    const bit = 1 << (n - 1 - i);
    if (term.dashes & bit) continue;
    text += inputName(i) + (term.value & bit ? '' : "'");
  }
  return text === '' ? '1' : text;
}

/** The smallest sum of products as text: `AB + C`, or `0` or `1`. */
export function simplifiedExpression(n: number, minterms: readonly number[]): string {
  if (minterms.length === 0) return '0';
  if (minterms.length === 2 ** n) return '1';
  return minimize(n, minterms)
    .map((term) => formatTerm(term, n))
    .join(' + ');
}

/** `Σm(1, 3, 5)` for the rows where the output is 1. */
export const sumOfMinterms = (minterms: readonly number[]): string => `Σm(${minterms.join(', ')})`;

/** `ΠM(0, 2)` for the rows where the output is 0. */
export function productOfMaxterms(n: number, minterms: readonly number[]): string {
  const ones = new Set(minterms);
  const zeros = Array.from({ length: 2 ** n }, (_, row) => row).filter((row) => !ones.has(row));
  return `ΠM(${zeros.join(', ')})`;
}

// ---------------------------------------------------------------- as wired

/** The longest expression written out; beyond it a shared signal has been repeated too often. */
const MAX_LENGTH = 500;

type Written = { text: string; level: 'atom' | 'and' | 'or' };

/**
 * The output written from its gates: AND is a dot, OR is a plus, NOT is a prime, NAND and NOR are the
 * AND or OR with a prime. Null when it cannot be written: a feedback loop, or a text that is too long.
 */
export function wiredExpression(
  netlist: Netlist,
  source: Signal,
  nameOf: (switchIndex: number) => string,
): string | null {
  if (netlist.feedback) return null;
  const gates = new Map(netlist.gates.map((g) => [g.id, g]));
  const memo = new Map<string, Written | null>();
  const wrap = (w: Written, when: Written['level'][]) =>
    when.includes(w.level) ? `(${w.text})` : w.text;

  const write = (signal: Signal): Written | null => {
    switch (signal.kind) {
      case 'input':
        return { text: nameOf(signal.index), level: 'atom' };
      case 'const':
        return { text: signal.value ? '1' : '0', level: 'atom' };
      case 'floating':
        return { text: '1', level: 'atom' };
      case 'conflict':
        return { text: '?', level: 'atom' };
      case 'gate': {
        if (memo.has(signal.id)) return memo.get(signal.id) ?? null;
        const gate = gates.get(signal.id);
        const result = gate ? writeGate(gate) : null;
        memo.set(signal.id, result);
        return result;
      }
    }
  };

  const writeGate = (gate: NetGate): Written | null => {
    const parts = gate.inputs.map(write);
    if (parts.some((p) => p === null)) return null;
    const ins = parts as Written[];
    let result: Written;
    switch (gate.kind) {
      case 'not':
        result = {
          text: ins[0]!.level === 'atom' ? `${ins[0]!.text}'` : `(${ins[0]!.text})'`,
          level: 'atom',
        };
        break;
      case 'and':
        result = { text: ins.map((p) => wrap(p, ['or'])).join('·'), level: 'and' };
        break;
      case 'or':
        result = { text: ins.map((p) => p.text).join(' + '), level: 'or' };
        break;
      case 'nand':
        result = { text: `(${ins.map((p) => wrap(p, ['or'])).join('·')})'`, level: 'atom' };
        break;
      case 'nor':
        result = { text: `(${ins.map((p) => p.text).join(' + ')})'`, level: 'atom' };
        break;
    }
    return result.text.length > MAX_LENGTH ? null : result;
  };

  return write(source)?.text ?? null;
}
