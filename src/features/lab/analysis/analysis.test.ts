import { describe, expect, it } from 'vitest';
import { simulate } from '../sim/evaluate';
import { andOr, direct, latch, nand } from './circuits.fixture';
import {
  formatTerm,
  minimize,
  productOfMaxterms,
  simplifiedExpression,
  sumOfMinterms,
  termCovers,
  wiredExpression,
} from './expression';
import { buildNetlist } from './netlist';
import {
  buildTruthTable,
  currentRow,
  mintermsOf,
  tableAsText,
  type TruthTable,
} from './truthTable';

const names = (k: number) => String.fromCharCode(65 + [0, 1, 2].indexOf(k));

describe('buildNetlist', () => {
  it('reads the gates of Y = (A AND B) OR C, each after the gates it reads', () => {
    const net = buildNetlist(andOr());
    expect(net.wiredLeds).toEqual([1]);
    expect(net.inputs).toEqual([0, 1, 2]);
    expect(net.gates.map((g) => g.id)).toEqual(['u1:1', 'u2:1']);
    expect(net.gates.map((g) => g.kind)).toEqual(['and', 'or']);
    expect(net.gates[0]?.inputs).toEqual([
      { kind: 'input', index: 0 },
      { kind: 'input', index: 1 },
    ]);
    expect(net.gates[1]?.inputs).toEqual([
      { kind: 'gate', id: 'u1:1' },
      { kind: 'input', index: 2 },
    ]);
    expect(net.outputs).toEqual([{ led: 1, source: { kind: 'gate', id: 'u2:1' } }]);
    expect(net.feedback).toBe(false);
    expect(net.faults).toEqual({ short: false, conflict: false, unpowered: [], floating: false });
  });

  it('keeps only the part that leads to the chosen LEDs', () => {
    const net = buildNetlist(andOr(), []);
    expect(net.outputs).toEqual([]);
    expect(net.gates).toEqual([]);
    expect(net.inputs).toEqual([]);
    expect(net.wiredLeds).toEqual([1]);
  });

  it('follows a switch wired straight to an LED', () => {
    const net = buildNetlist(direct());
    expect(net.gates).toEqual([]);
    expect(net.inputs).toEqual([3]);
    expect(net.outputs).toEqual([{ led: 2, source: { kind: 'input', index: 3 } }]);
  });

  it('finds a feedback loop', () => {
    const net = buildNetlist(latch());
    expect(net.feedback).toBe(true);
    expect(net.gates.length).toBeGreaterThan(0);
  });

  it('says which chips have no power, and which inputs float', () => {
    const circuit = andOr();
    const noPower = buildNetlist({ ...circuit, wires: circuit.wires.slice(4) });
    expect(noPower.faults.unpowered.sort()).toEqual(['u1', 'u2']);
    const loose = buildNetlist({
      ...circuit,
      wires: circuit.wires.filter((w) => w.from !== 'sw1:0'),
    });
    expect(loose.faults.floating).toBe(true);
    expect(loose.gates[0]?.inputs[1]).toEqual({ kind: 'floating' });
  });

  it('says when the supplies are shorted', () => {
    const circuit = andOr();
    const shorted = buildNetlist({
      ...circuit,
      wires: [...circuit.wires, { from: 'power:+5V:2', to: 'power:GND:2' }],
    });
    expect(shorted.faults.short).toBe(true);
  });

  it('tells a constant from a switch: a gate input on +5V', () => {
    const circuit = nand();
    const net = buildNetlist({
      ...circuit,
      wires: [
        ...circuit.wires.filter((w) => w.from !== 'sw1:0'),
        { from: 'power:+5V:3', to: 'b0:c12:i' },
      ],
    });
    expect(net.gates[0]?.inputs[1]).toEqual({ kind: 'const', value: true });
    expect(net.inputs).toEqual([0]);
  });
});

describe('buildTruthTable', () => {
  const table = (switches?: boolean[]) => {
    const circuit = andOr(switches);
    const net = buildNetlist(circuit);
    return buildTruthTable(circuit, net.inputs, [1]);
  };

  it('has a row for every combination, the first input as the top bit', () => {
    const t = table();
    expect(t.rows).toHaveLength(8);
    expect(t.rows[5]?.values).toEqual([true, false, true]);
    expect(t.rows.map((r) => (r.outputs[0] ? 1 : 0))).toEqual([0, 1, 0, 1, 0, 1, 1, 1]);
  });

  it('gives the minterms and the maxterms', () => {
    const t = table();
    expect(mintermsOf(t, 1)).toEqual([1, 3, 5, 6, 7]);
    expect(sumOfMinterms(mintermsOf(t, 1))).toBe('Σm(1, 3, 5, 6, 7)');
    expect(productOfMaxterms(3, mintermsOf(t, 1))).toBe('ΠM(0, 2, 4)');
  });

  it('does not depend on where the switches are now', () => {
    const a = table();
    const b = table([true, true, true, true, true, true, true, true]);
    expect(b.rows).toEqual(a.rows);
    expect(b.problems).toEqual(a.problems);
  });

  it('finds the row the switches are on', () => {
    expect(currentRow([true, false, true, false], [0, 1, 2])).toBe(5);
    expect(currentRow([false, false, false], [0, 1, 2])).toBe(0);
    expect(currentRow([true, true, true, true], [3])).toBe(1);
  });

  it('copies as text with tabs', () => {
    const lines = tableAsText(table()).split('\n');
    expect(lines).toHaveLength(9);
    expect(lines[0]).toBe('A\tB\tC\tLED1');
    expect(lines[6]).toBe('1\t0\t1\t1');
  });

  it('takes the table of a switch wired to an LED, and of a NAND', () => {
    const d = direct();
    expect(buildTruthTable(d, [3], [2]).rows.map((r) => r.outputs[0])).toEqual([false, true]);
    const n = nand();
    const t = buildTruthTable(n, buildNetlist(n).inputs, [3]);
    expect(mintermsOf(t, 3)).toEqual([0, 1, 2]);
  });

  it('has one row when nothing is an input', () => {
    const t = buildTruthTable(andOr(), [], [1]);
    expect(t.rows).toHaveLength(1);
    expect(t.rows[0]?.values).toEqual([]);
  });

  it('shows a chip without power in the table, and says so', () => {
    const circuit = andOr();
    const dead = { ...circuit, wires: circuit.wires.slice(4) };
    const t = buildTruthTable(dead, buildNetlist(dead).inputs, [1]);
    expect(t.problems.unpowered).toBe(true);
    expect(mintermsOf(t, 1)).toEqual([]);
  });

  it('agrees with the simulator for every row', () => {
    const t = table();
    t.rows.forEach((row, index) => {
      const switches = Array.from({ length: 8 }, () => false);
      row.values.forEach((v, i) => {
        switches[t.inputs[i] ?? 0] = v;
      });
      expect(simulate({ ...andOr(), switches }).leds[0], `row ${index}`).toBe(row.outputs[0]);
    });
  });
});

describe('simplified expressions', () => {
  it('reads Σm(1, 3, 5, 6, 7) as AB + C', () => {
    expect(simplifiedExpression(3, [1, 3, 5, 6, 7])).toBe('AB + C');
  });

  it('handles the constants and a single minterm', () => {
    expect(simplifiedExpression(3, [])).toBe('0');
    expect(simplifiedExpression(2, [0, 1, 2, 3])).toBe('1');
    expect(simplifiedExpression(3, [5])).toBe("AB'C");
    expect(simplifiedExpression(0, [0])).toBe('1');
  });

  it('writes XOR and XNOR in full', () => {
    expect(simplifiedExpression(2, [1, 2])).toBe("A'B + AB'");
    expect(simplifiedExpression(2, [0, 3])).toBe("A'B' + AB");
  });

  it('finds the smallest cover of a function with a cyclic prime chart', () => {
    // Σm(0, 1, 2, 5, 6, 7) has two minimal covers of three terms
    const terms = minimize(3, [0, 1, 2, 5, 6, 7]);
    expect(terms).toHaveLength(3);
  });

  it('is true on exactly the minterms, for many functions', () => {
    // a small deterministic generator, so the test is the same every time
    let seed = 12345;
    const next = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff);
    for (let round = 0; round < 60; round++) {
      const n = 1 + (round % 5);
      const ones = Array.from({ length: 2 ** n }, (_, m) => m).filter(() => next() % 3 === 0);
      const terms = minimize(n, ones);
      for (let m = 0; m < 2 ** n; m++) {
        expect(
          terms.some((t) => termCovers(t, m)),
          `n=${n} ones=${ones.join(',')} m=${m}`,
        ).toBe(ones.includes(m));
      }
    }
  });

  it('handles eight variables, parity and all', () => {
    const parity = Array.from({ length: 256 }, (_, m) => m).filter(
      (m) => m.toString(2).split('1').length % 2 === 0,
    );
    expect(minimize(8, parity)).toHaveLength(128);
    expect(formatTerm({ value: 0b1010, dashes: 0b0101 }, 4)).toBe('AC');
  });
});

describe('expressions as wired', () => {
  it('writes Y = (A AND B) OR C from the gates', () => {
    const net = buildNetlist(andOr());
    expect(wiredExpression(net, net.outputs[0]!.source, names)).toBe('A·B + C');
  });

  it('writes a NAND with a prime', () => {
    const net = buildNetlist(nand());
    const letters = (k: number) => (k === 0 ? 'A' : 'B');
    expect(wiredExpression(net, net.outputs[0]!.source, letters)).toBe("(A·B)'");
  });

  it('writes a switch wired straight to an LED, and says nothing for a feedback loop', () => {
    const net = buildNetlist(direct());
    expect(wiredExpression(net, net.outputs[0]!.source, () => 'A')).toBe('A');
    const loop = buildNetlist(latch());
    expect(wiredExpression(loop, loop.outputs[0]!.source, () => 'A')).toBeNull();
  });
});

describe('the pieces agree', () => {
  it('the simplified expression has the minterms of the table of the circuit', () => {
    const circuit = andOr();
    const net = buildNetlist(circuit);
    const t: TruthTable = buildTruthTable(circuit, net.inputs, [1]);
    const ones = mintermsOf(t, 1);
    for (const term of minimize(3, ones)) {
      for (let m = 0; m < 8; m++) if (termCovers(term, m)) expect(ones).toContain(m);
    }
  });
});
