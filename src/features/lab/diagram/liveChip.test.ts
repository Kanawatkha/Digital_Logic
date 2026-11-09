import { describe, expect, it } from 'vitest';
import { simulate, type Circuit, type PlacedIc, type Wire } from '../sim/evaluate';
import { IC_SPECS, IC_TYPES, icPinPoints } from '../sim/ics';
import { functionTable, liveChip } from './liveChip';

const wire = (from: string, to: string): Wire => ({ from, to });
const VCC = 'power:+5V:0';
const GND = 'power:GND:0';

const not: PlacedIc = { id: 'u1', type: '7404', board: 0, col: 10 };
const pins = icPinPoints(0, 10);
/** The holes a wire can use: the same column as the pin, on the strip side that is free */
const free = (pin: number) => (pins[pin] ?? '').replace(/:[ef]$/, pin > 7 ? ':a' : ':j');

const powered: Wire[] = [wire(VCC, free(14)), wire(GND, free(7))];

const circuit = (wires: Wire[], up: number[] = []): Circuit => ({
  wires,
  ics: [not],
  switches: Array.from({ length: 8 }, (_, k) => up.includes(k)),
});

describe('reading a chip that is on the board', () => {
  it('says what every pin carries, and what each gate reads and gives', () => {
    // a NOT gate with its input on switch 1 (up) and its output on LED 1
    const wires = [...powered, wire('sw0:0', free(1)), wire(free(2), 'led1:0')];
    const chip = liveChip(not, simulate(circuit(wires, [0])));
    expect(chip.powered).toBe(true);
    expect(chip.vcc).toBe('ok');
    expect(chip.gnd).toBe('ok');
    expect(chip.pins[14]).toBe('high');
    expect(chip.pins[7]).toBe('low');
    expect(chip.pins[1]).toBe('high');
    expect(chip.pins[2]).toBe('low');
    // a pin nothing is wired to floats
    expect(chip.pins[3]).toBe('floating');
    expect(chip.gates).toHaveLength(6);
    expect(chip.gates[0]).toEqual({
      index: 1,
      inputs: [{ pin: 1, value: true, floating: false }],
      outputPin: 2,
      output: false,
    });
    // gate 2 has nothing on its input: it reads 1, floating, and gives 0
    expect(chip.gates[1]).toEqual({
      index: 2,
      inputs: [{ pin: 3, value: true, floating: true }],
      outputPin: 4,
      output: false,
    });
  });

  it('follows the switches', () => {
    const wires = [...powered, wire('sw0:0', free(1)), wire(free(2), 'led1:0')];
    const low = liveChip(not, simulate(circuit(wires, [])));
    expect(low.pins[1]).toBe('low');
    expect(low.gates[0]?.output).toBe(true);
    expect(low.pins[2]).toBe('high');
  });

  it('tells which supply pin is not wired', () => {
    const onlyVcc = liveChip(not, simulate(circuit([powered[0]!, wire('sw0:0', free(1))])));
    expect(onlyVcc).toMatchObject({ powered: false, vcc: 'ok', gnd: 'missing' });
    const onlyGnd = liveChip(not, simulate(circuit([powered[1]!, wire('sw0:0', free(1))])));
    expect(onlyGnd).toMatchObject({ powered: false, vcc: 'missing', gnd: 'ok' });
    const none = liveChip(not, simulate(circuit([wire('sw0:0', free(1))])));
    expect(none).toMatchObject({ vcc: 'missing', gnd: 'missing' });
    // a chip without power gives nothing
    expect(none.gates.every((gate) => gate.output === null)).toBe(true);
  });

  it('tells a chip whose power is the wrong way round from one with none', () => {
    const swapped = [wire(GND, free(14)), wire(VCC, free(7))];
    const chip = liveChip(not, simulate(circuit(swapped)));
    expect(chip).toMatchObject({ powered: false, vcc: 'reversed', gnd: 'reversed' });
  });

  it('says it cannot tell when the supplies are shorted', () => {
    const short = [...powered, wire(VCC, 'b1:c1:a'), wire(GND, 'b1:c1:b')];
    const chip = liveChip(not, simulate(circuit(short)));
    expect(chip).toMatchObject({ vcc: 'unknown', gnd: 'unknown' });
  });

  it('shows two outputs that fight on one net as a conflict', () => {
    // the NOT gate drives 0 onto a net that is on +5V
    const wires = [...powered, wire('sw0:0', free(1)), wire(free(2), VCC)];
    const chip = liveChip(not, simulate(circuit(wires, [0])));
    expect(chip.pins[2]).toBe('conflict');
  });
});

describe('the function table of a chip', () => {
  it('has a row for every combination of what a gate reads, first input as the top bit', () => {
    expect(functionTable('7404')).toEqual([
      { inputs: [false], output: true },
      { inputs: [true], output: false },
    ]);
    expect(functionTable('7408').map((row) => row.inputs.map(Number).join(''))).toEqual([
      '00',
      '01',
      '10',
      '11',
    ]);
  });

  it('gives what each chip is named for', () => {
    const outputs = (type: (typeof IC_TYPES)[number]) =>
      functionTable(type).map((row) => Number(row.output));
    expect(outputs('7408')).toEqual([0, 0, 0, 1]);
    expect(outputs('7432')).toEqual([0, 1, 1, 1]);
    expect(outputs('7400')).toEqual([1, 1, 1, 0]);
    expect(outputs('7402')).toEqual([1, 0, 0, 0]);
    for (const type of IC_TYPES) {
      for (const row of functionTable(type))
        expect(row.output).toBe(IC_SPECS[type].evaluate(row.inputs));
    }
  });
});
