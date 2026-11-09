import { describe, expect, it } from 'vitest';
import { IC_SPECS, IC_TYPES, canPlaceIc, icPinPoints, type IcType } from './ics';
import { simulate, type Circuit, type PlacedIc, type Wire } from './evaluate';
import { allPoints, netKey, parsePoint, pointId } from './points';

const VCC = 'power:+5V:0';
const GND = 'power:GND:0';
const sw = (k: number) => `sw${k}:0`;
const led = (n: number) => `led${n}:0`;
const wire = (from: string, to: string): Wire => ({ from, to });

/** Wires that power a chip: +5V to pin 14, GND to pin 7. */
function power(ic: PlacedIc): Wire[] {
  const pins = icPinPoints(ic.board, ic.col);
  return [wire(VCC, pins[14] ?? ''), wire(GND, pins[7] ?? '')];
}

const circuit = (wires: Wire[], ics: PlacedIc[] = [], up: number[] = []): Circuit => ({
  wires,
  ics,
  switches: Array.from({ length: 8 }, (_, k) => up.includes(k)),
});

const bits = (n: number, width: number) =>
  Array.from({ length: width }, (_, k) => Boolean((n >> k) & 1));

describe('points', () => {
  it('parses and prints every point of the board both ways', () => {
    for (const point of allPoints()) {
      const id = pointId(point);
      expect(parsePoint(id)).toEqual(point);
    }
  });

  it('rejects ids that are not on the board', () => {
    for (const id of [
      'b2:c1:a',
      'b0:c0:a',
      'b0:c61:a',
      'b0:c1:k',
      'b0:r:top3:1',
      'b0:r:top1:50',
      'sw8:0',
      'sw0:6',
      'led0:0',
      'led17:0',
      'led1:2',
      'power:+3V:0',
      'power:GND:6',
      'x',
    ]) {
      expect(parsePoint(id)).toBeNull();
    }
  });

  it('joins the five holes of a column half, not the two halves', () => {
    const key = (id: string) => netKey(parsePoint(id)!);
    expect(key('b0:c5:a')).toBe(key('b0:c5:e'));
    expect(key('b0:c5:f')).toBe(key('b0:c5:j'));
    expect(key('b0:c5:e')).not.toBe(key('b0:c5:f'));
    expect(key('b0:c5:a')).not.toBe(key('b0:c6:a'));
    expect(key('b0:c5:a')).not.toBe(key('b1:c5:a'));
  });

  it('joins each half of a rail line, and keeps the halves, the lines and the boards apart', () => {
    const key = (id: string) => netKey(parsePoint(id)!);
    expect(key('b0:r:top1:0')).toBe(key('b0:r:top1:24'));
    expect(key('b0:r:top1:25')).toBe(key('b0:r:top1:49'));
    // the real rail is cut in the middle
    expect(key('b0:r:top1:24')).not.toBe(key('b0:r:top1:25'));
    expect(key('b0:r:top1:0')).not.toBe(key('b0:r:top1:49'));
    expect(key('b0:r:top1:0')).not.toBe(key('b0:r:top2:0'));
    expect(key('b0:r:top1:0')).not.toBe(key('b1:r:top1:0'));
  });
});

describe('chips', () => {
  it('puts pin 1 at the left of the lower row and pin 14 above it', () => {
    const pins = icPinPoints(0, 10);
    expect(pins[1]).toBe('b0:c10:f');
    expect(pins[7]).toBe('b0:c16:f');
    expect(pins[8]).toBe('b0:c16:e');
    expect(pins[14]).toBe('b0:c10:e');
    expect(Object.keys(pins)).toHaveLength(14);
  });

  it('fits a chip only when all seven columns are on the board', () => {
    expect(canPlaceIc(0, 1)).toBe(true);
    expect(canPlaceIc(1, 54)).toBe(true);
    expect(canPlaceIc(0, 55)).toBe(false);
    expect(canPlaceIc(0, 0)).toBe(false);
    expect(canPlaceIc(2, 1)).toBe(false);
  });

  it('has the datasheet pins', () => {
    expect(IC_SPECS['7404'].gates.map((g) => [g.inputs[0], g.output])).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [9, 8],
      [11, 10],
      [13, 12],
    ]);
    for (const type of ['7400', '7408', '7432'] as const) {
      expect(IC_SPECS[type].gates.map((g) => [...g.inputs, g.output])).toEqual([
        [1, 2, 3],
        [4, 5, 6],
        [9, 10, 8],
        [12, 13, 11],
      ]);
    }
    expect(IC_SPECS['7402'].gates.map((g) => [...g.inputs, g.output])).toEqual([
      [2, 3, 1],
      [5, 6, 4],
      [8, 9, 10],
      [11, 12, 13],
    ]);
  });
});

describe('simulate: wiring', () => {
  it('lights an LED from a switch through a wire', () => {
    const wires = [wire(sw(0), led(1))];
    expect(simulate(circuit(wires, [], [0])).leds[0]).toBe(true);
    expect(simulate(circuit(wires, [], [])).leds[0]).toBe(false);
  });

  it('lets any of the six sockets of a switch and both sockets of a monitor input carry the signal', () => {
    const result = simulate(circuit([wire('sw2:5', 'led7:1')], [], [2]));
    expect(result.leds[6]).toBe(true);
  });

  it('connects holes in the same column half without a wire', () => {
    const wires = [
      wire(sw(0), 'b0:c5:a'),
      wire('b0:c5:e', led(1)),
      wire(sw(0), 'b0:c9:f'),
      wire('b0:c9:e', led(2)),
    ];
    const result = simulate(circuit(wires, [], [0]));
    expect(result.leds[0]).toBe(true);
    // e and f are on different halves, so nothing reaches LED 2
    expect(result.leds[1]).toBe(false);
    expect(result.state('b0:c9:e')).toBe('floating');
  });

  it('connects every hole of one half of a rail line', () => {
    const wires = [wire(sw(1), 'b1:r:bot2:3'), wire('b1:r:bot2:20', led(5))];
    expect(simulate(circuit(wires, [], [1])).leds[4]).toBe(true);
    const other = [wire(sw(1), 'b1:r:bot2:30'), wire('b1:r:bot2:44', led(5))];
    expect(simulate(circuit(other, [], [1])).leds[4]).toBe(true);
  });

  it('does not carry a signal from one half of a rail to the other', () => {
    const wires = [wire(sw(1), 'b1:r:bot2:3'), wire('b1:r:bot2:44', led(5))];
    expect(simulate(circuit(wires, [], [1])).leds[4]).toBe(false);
    // a jumper across the cut joins them
    const bridged = [...wires, wire('b1:r:bot2:20', 'b1:r:bot2:30')];
    expect(simulate(circuit(bridged, [], [1])).leds[4]).toBe(true);
  });

  it('ignores a wire to a point that is not on the board and says so', () => {
    const result = simulate(circuit([wire(sw(0), 'nowhere'), wire(sw(0), led(1))], [], [0]));
    expect(result.warnings).toContainEqual({ kind: 'badPoint', id: 'nowhere' });
    expect(result.leds[0]).toBe(true);
  });
});

describe('simulate: gates', () => {
  const place = (type: IcType): PlacedIc => ({ id: 'u1', type, board: 0, col: 10 });

  for (const type of IC_TYPES) {
    const spec = IC_SPECS[type];
    spec.gates.forEach((gate, g) => {
      it(`${type} gate ${g + 1} follows its truth table`, () => {
        const ic = place(type);
        const pins = icPinPoints(0, 10);
        const wires = [
          ...power(ic),
          ...gate.inputs.map((pin, k) => wire(sw(k), pins[pin] ?? '')),
          wire(pins[gate.output] ?? '', led(1)),
        ];
        for (let n = 0; n < 1 << gate.inputs.length; n++) {
          const values = bits(n, gate.inputs.length);
          const up = values.flatMap((v, k) => (v ? [k] : []));
          const result = simulate(circuit(wires, [ic], up));
          expect(result.leds[0], `${type} gate ${g + 1} inputs ${values.join('')}`).toBe(
            spec.evaluate(values),
          );
          expect(result.warnings).toEqual([]);
        }
      });
    });
  }

  it('computes a two level circuit: (A AND B) OR C', () => {
    const and = { id: 'and', type: '7408' as const, board: 0, col: 3 };
    const or = { id: 'or', type: '7432' as const, board: 0, col: 20 };
    const a = icPinPoints(0, 3);
    const o = icPinPoints(0, 20);
    const wires = [
      ...power(and),
      ...power(or),
      wire(sw(0), a[1] ?? ''),
      wire(sw(1), a[2] ?? ''),
      wire(a[3] ?? '', o[1] ?? ''),
      wire(sw(2), o[2] ?? ''),
      wire(o[3] ?? '', led(1)),
    ];
    for (let n = 0; n < 8; n++) {
      const [A, B, C] = bits(n, 3);
      const up = [A, B, C].flatMap((v, k) => (v ? [k] : []));
      const result = simulate(circuit(wires, [and, or], up));
      expect(result.leds[0]).toBe(Boolean((A && B) || C));
      expect(result.warnings).toEqual([]);
    }
  });

  it('reports what each gate drives', () => {
    const ic = place('7400');
    const pins = icPinPoints(0, 10);
    const wires = [...power(ic), wire(sw(0), pins[1] ?? ''), wire(sw(1), pins[2] ?? '')];
    const result = simulate(circuit(wires, [ic], [0, 1]));
    // gate 1 sees 1 and 1; the three unused gates have floating inputs, which read as 1 too
    expect(result.ics['u1']).toEqual({ powered: true, outputs: [false, false, false, false] });
    expect(simulate(circuit(wires, [ic], [0])).ics['u1']?.outputs[0]).toBe(true);
  });
});

describe('simulate: power and warnings', () => {
  const ic: PlacedIc = { id: 'u1', type: '7404', board: 0, col: 10 };
  const pins = icPinPoints(0, 10);
  const notWires = [wire(sw(0), pins[1] ?? ''), wire(pins[2] ?? '', led(1))];

  it('leaves a chip dead without power and says so', () => {
    const result = simulate(circuit(notWires, [ic], []));
    expect(result.leds[0]).toBe(false);
    expect(result.ics['u1']?.powered).toBe(false);
    expect(result.warnings).toContainEqual({
      kind: 'unpowered',
      ic: 'u1',
      missing: ['vcc', 'gnd'],
      railSplit: false,
    });
    expect(result.state(pins[2] ?? '')).toBe('floating');
  });

  it('needs both +5V on pin 14 and GND on pin 7', () => {
    const onlyVcc = simulate(circuit([...notWires, wire(VCC, pins[14] ?? '')], [ic]));
    const onlyGnd = simulate(circuit([...notWires, wire(GND, pins[7] ?? '')], [ic]));
    expect(onlyVcc.ics['u1']?.powered).toBe(false);
    expect(onlyGnd.ics['u1']?.powered).toBe(false);
    const swapped = simulate(
      circuit([...notWires, wire(GND, pins[14] ?? ''), wire(VCC, pins[7] ?? '')], [ic]),
    );
    expect(swapped.ics['u1']?.powered).toBe(false);
    // the wrong way round is told apart from no power
    expect(swapped.warnings).toContainEqual({ kind: 'reversed', ic: 'u1' });
    expect(swapped.warnings.some((w) => w.kind === 'unpowered')).toBe(false);
    expect(onlyVcc.warnings).toContainEqual({
      kind: 'unpowered',
      ic: 'u1',
      missing: ['gnd'],
      railSplit: false,
    });
    expect(onlyGnd.warnings).toContainEqual({
      kind: 'unpowered',
      ic: 'u1',
      missing: ['vcc'],
      railSplit: false,
    });
  });

  it('powers a chip through a rail', () => {
    const wires = [
      ...notWires,
      wire(VCC, 'b0:r:top1:0'),
      wire('b0:r:top1:20', pins[14] ?? ''),
      wire(GND, 'b0:r:top2:0'),
      wire('b0:r:top2:20', pins[7] ?? ''),
    ];
    const result = simulate(circuit(wires, [ic], []));
    expect(result.leds[0]).toBe(true);
    expect(result.warnings).toEqual([]);
  });

  it('does not power a chip from the other half of the rail, unless a jumper joins the halves', () => {
    const wires = [
      ...notWires,
      wire(VCC, 'b0:r:top1:0'),
      wire('b0:r:top1:30', pins[14] ?? ''),
      wire(GND, 'b0:r:top2:0'),
      wire('b0:r:top2:30', pins[7] ?? ''),
    ];
    const cut = simulate(circuit(wires, [ic], []));
    expect(cut.ics['u1']?.powered).toBe(false);
    // the other half of each rail has the supply: the message can say the rail is split
    expect(cut.warnings).toContainEqual({
      kind: 'unpowered',
      ic: 'u1',
      missing: ['vcc', 'gnd'],
      railSplit: true,
    });
    const jumpered = [
      ...wires,
      wire('b0:r:top1:20', 'b0:r:top1:40'),
      wire('b0:r:top2:20', 'b0:r:top2:40'),
    ];
    const joined = simulate(circuit(jumpered, [ic], []));
    expect(joined.ics['u1']?.powered).toBe(true);
    expect(joined.leds[0]).toBe(true);
  });

  it('reads a floating input as 1 and warns, only for gates that are used', () => {
    const wires = [...power(ic), wire(pins[2] ?? '', led(1))];
    const result = simulate(circuit(wires, [ic], []));
    // NOT of a floating (1) input is 0
    expect(result.leds[0]).toBe(false);
    expect(result.warnings).toEqual([{ kind: 'floatingInput', ic: 'u1', gate: 1, pin: 1 }]);
  });

  it('stays quiet about the gates of a chip that nothing is wired to', () => {
    expect(simulate(circuit(power(ic), [ic])).warnings).toEqual([]);
  });

  it('reports a short between +5V and GND and lights nothing', () => {
    const result = simulate(
      circuit([wire(VCC, 'b0:c1:a'), wire('b0:c1:c', GND), wire(sw(0), led(1))], [], [0]),
    );
    expect(result.short).toBe(true);
    expect(result.leds.every((on) => !on)).toBe(true);
    expect(result.warnings).toContainEqual({ kind: 'short' });
  });

  it('reports two switches that disagree on one net', () => {
    const result = simulate(circuit([wire(sw(0), sw(1)), wire(sw(0), led(1))], [], [0]));
    expect(result.state(led(1))).toBe('conflict');
    expect(result.leds[0]).toBe(false);
    expect(result.warnings).toContainEqual({
      kind: 'conflict',
      net: expect.any(String),
      drivers: [
        { kind: 'switch', index: 0, at: 'sw0:0' },
        { kind: 'switch', index: 1, at: 'sw1:0' },
      ],
    });
  });

  it('reports a chip output fighting +5V', () => {
    // the NOT gate drives 0 (input is up) onto a net tied to +5V
    const wires = [...power(ic), wire(sw(0), pins[1] ?? ''), wire(pins[2] ?? '', VCC)];
    const result = simulate(circuit(wires, [ic], [0]));
    expect(result.warnings).toContainEqual({
      kind: 'conflict',
      net: expect.any(String),
      drivers: [
        { kind: 'supply', name: '+5V', at: 'power:+5V:0' },
        { kind: 'gate', ic: 'u1', gate: 1, at: pins[2] ?? '' },
      ],
    });
  });

  it('reports a feedback loop that never settles and does not hang', () => {
    // a NOT gate whose output feeds its own input
    const wires = [
      ...power(ic),
      wire(pins[2] ?? '', pins[3] ?? ''),
      wire(pins[3] ?? '', pins[1] ?? ''),
    ];
    const result = simulate(circuit(wires, [ic]));
    expect(result.warnings).toContainEqual({ kind: 'unstable', ics: ['u1'] });
  });

  it('settles a two-gate memory so the answer does not depend on the order', () => {
    // two NOT gates in a ring hold their value
    const wires = [
      ...power(ic),
      wire(pins[2] ?? '', pins[3] ?? ''),
      wire(pins[4] ?? '', pins[1] ?? ''),
    ];
    const result = simulate(circuit(wires, [ic]));
    expect(result.warnings.some((w) => w.kind === 'unstable')).toBe(true);
  });

  it('warns about two chips on the same holes', () => {
    const other: PlacedIc = { id: 'u2', type: '7400', board: 0, col: 14 };
    const result = simulate(circuit([], [ic, other]));
    expect(result.warnings).toContainEqual({ kind: 'overlap', ics: ['u1', 'u2'] });
  });

  it('says when a supply that is only drawn is wired', () => {
    const result = simulate(circuit([wire('power:+12V:0', 'b0:c1:a')]));
    expect(result.warnings).toContainEqual({ kind: 'unsupportedSupply', socket: '+12V' });
  });
});

describe('simulate: hints about the wiring', () => {
  const ic: PlacedIc = { id: 'u1', type: '7404', board: 0, col: 10 };
  const pins = icPinPoints(0, 10);
  const kinds = (c: Circuit) => simulate(c).warnings.map((w) => w.kind);

  it('flags a wire between points that were one net already, and only the extra one', () => {
    // two holes of one column half are joined by the board
    expect(simulate(circuit([wire('b0:c1:a', 'b0:c1:b')])).warnings).toContainEqual({
      kind: 'redundantWire',
      from: 'b0:c1:a',
      to: 'b0:c1:b',
    });
    // the same wire twice: the second one adds nothing
    const twice = simulate(circuit([wire(sw(0), 'b0:c1:a'), wire(sw(0), 'b0:c1:a')]));
    expect(twice.warnings.filter((w) => w.kind === 'redundantWire')).toHaveLength(1);
    // two wires that do not repeat each other
    expect(kinds(circuit([wire(sw(0), 'b0:c1:a'), wire(sw(1), 'b0:c2:a')]))).not.toContain(
      'redundantWire',
    );
  });

  it('flags an LED that has a wire and nothing to drive it', () => {
    expect(simulate(circuit([wire('b0:c1:a', led(1))])).warnings).toContainEqual({
      kind: 'ledUndriven',
      led: 1,
    });
    expect(kinds(circuit([wire(sw(0), led(1))]))).not.toContain('ledUndriven');
    expect(kinds(circuit([]))).not.toContain('ledUndriven');
  });

  it('does not blame an LED that is dark because its chip has no power', () => {
    const wires = [wire(sw(0), pins[1] ?? ''), wire(pins[2] ?? '', led(1))];
    const found = kinds(circuit(wires, [ic]));
    expect(found).toContain('unpowered');
    expect(found).not.toContain('ledUndriven');
  });

  it('says so when chips and wires are there but no LED is connected', () => {
    const wires = [...power(ic), wire(sw(0), pins[1] ?? '')];
    expect(kinds(circuit(wires, [ic]))).toContain('noOutput');
    expect(kinds(circuit([]))).not.toContain('noOutput');
    expect(kinds(circuit([], [ic]))).not.toContain('noOutput');
    expect(kinds(circuit([...wires, wire(pins[2] ?? '', led(1))], [ic]))).not.toContain('noOutput');
  });

  it('names the gates whose inputs are wired and whose output goes nowhere, once an LED is used', () => {
    const wires = [
      ...power(ic),
      wire(sw(0), pins[1] ?? ''),
      wire(sw(1), pins[3] ?? ''),
      wire(pins[4] ?? '', led(1)),
    ];
    const result = simulate(circuit(wires, [ic]));
    expect(result.warnings).toContainEqual({ kind: 'outputUnused', ic: 'u1', gates: [1] });
    expect(result.warnings.some((w) => w.kind === 'noOutput')).toBe(false);
    // with no LED the one hint is that there is none
    const noLed = kinds(circuit(wires.slice(0, 3), [ic]));
    expect(noLed).toContain('noOutput');
    expect(noLed).not.toContain('outputUnused');
  });
});
