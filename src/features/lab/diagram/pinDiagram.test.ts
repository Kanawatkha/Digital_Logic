import { describe, expect, it } from 'vitest';
import { DIP_PINS, GND_PIN, IC_SPECS, IC_TYPES, VCC_PIN } from '../sim/ics';
import { diagramDescription, gateHint, pinHint } from './diagramText';
import { BODY, GATE_KINDS, buildIcDiagram, type Pt } from './pinDiagram';

const horizontal = (a: Pt, b: Pt) => a.y === b.y;
const vertical = (a: Pt, b: Pt) => a.x === b.x;

/** True when two axis-aligned segments cross or touch anywhere but at a shared end. */
function segmentsCross(a1: Pt, a2: Pt, b1: Pt, b2: Pt): boolean {
  const [ax0, ax1] = [Math.min(a1.x, a2.x), Math.max(a1.x, a2.x)];
  const [ay0, ay1] = [Math.min(a1.y, a2.y), Math.max(a1.y, a2.y)];
  const [bx0, bx1] = [Math.min(b1.x, b2.x), Math.max(b1.x, b2.x)];
  const [by0, by1] = [Math.min(b1.y, b2.y), Math.max(b1.y, b2.y)];
  return ax0 <= bx1 && bx0 <= ax1 && ay0 <= by1 && by0 <= ay1;
}

describe('pinDiagram: built from the simulator pin tables', () => {
  for (const type of IC_TYPES) {
    const spec = IC_SPECS[type];
    const diagram = buildIcDiagram(type);

    describe(type, () => {
      it('draws all 14 pins once, the supply on 14 and 7', () => {
        expect(diagram.pins.map((pin) => pin.number)).toEqual(
          Array.from({ length: DIP_PINS }, (_, k) => k + 1),
        );
        expect(diagram.pins.find((pin) => pin.number === VCC_PIN)?.name).toBe('VCC');
        expect(diagram.pins.find((pin) => pin.number === GND_PIN)?.name).toBe('GND');
      });

      it('puts pins 1 to 7 along the bottom, left to right, and 14 to 8 along the top', () => {
        for (let n = 1; n <= 7; n++) expect(diagram.pins[n - 1]?.top).toBe(false);
        for (let n = 8; n <= 14; n++) expect(diagram.pins[n - 1]?.top).toBe(true);
        const x = (n: number) => diagram.pins[n - 1]!.x;
        for (let n = 1; n < 7; n++) expect(x(n + 1)).toBeGreaterThan(x(n));
        for (let n = 9; n <= 14; n++) expect(x(n)).toBeLessThan(x(n - 1));
        // pin 14 is above pin 1
        expect(x(14)).toBe(x(1));
        expect(x(8)).toBe(x(7));
      });

      it('has the gates of the simulator, with their pins', () => {
        expect(diagram.gates).toHaveLength(spec.gates.length);
        spec.gates.forEach((gate, k) => {
          expect(diagram.gates[k]?.inputs).toEqual(gate.inputs);
          expect(diagram.gates[k]?.output).toBe(gate.output);
          expect(diagram.gates[k]?.kind).toBe(GATE_KINDS[type]);
        });
        // every pin but the supply belongs to exactly one gate
        const used = diagram.gates.flatMap((gate) => gate.pins).sort((a, b) => a - b);
        expect(used).toEqual(
          Array.from({ length: DIP_PINS }, (_, k) => k + 1).filter(
            (n) => n !== VCC_PIN && n !== GND_PIN,
          ),
        );
      });

      it('names the pins as a datasheet does', () => {
        const names = diagram.pins.map((pin) => pin.name);
        expect(new Set(names).size).toBe(DIP_PINS);
        for (const gate of diagram.gates) {
          expect(diagram.pins[gate.output - 1]?.name).toBe(`${gate.index}Y`);
          expect(diagram.pins[gate.inputs[0]! - 1]?.name).toBe(`${gate.index}A`);
        }
      });

      it('draws leads that run straight up and down from the pins and straight across', () => {
        for (const gate of diagram.gates) {
          expect(gate.leads).toHaveLength(gate.pins.length);
          for (const lead of gate.leads) {
            for (let k = 1; k < lead.length; k++) {
              const [a, b] = [lead[k - 1]!, lead[k]!];
              expect(horizontal(a, b) || vertical(a, b)).toBe(true);
            }
          }
        }
      });

      it('starts each lead on the edge of the package, at its pin', () => {
        for (const gate of diagram.gates) {
          gate.pins.forEach((number, k) => {
            const pin = diagram.pins[number - 1]!;
            const lead = gate.leads[k]!;
            const edgeEnd = number === gate.output ? lead[lead.length - 1]! : lead[0]!;
            expect(edgeEnd.x).toBe(pin.x);
            expect(edgeEnd.y).toBe(pin.top ? BODY.y : BODY.y + BODY.height);
          });
        }
      });

      it('keeps every lead inside the package, with room between the symbol and the output pin', () => {
        for (const gate of diagram.gates) {
          for (const lead of gate.leads) {
            for (const p of lead) {
              expect(p.x).toBeGreaterThan(BODY.x);
              expect(p.x).toBeLessThan(BODY.x + BODY.width);
            }
          }
          const output = gate.leads[gate.leads.length - 1]!;
          const run = Math.abs(output[1]!.x - output[0]!.x);
          expect(run, `gate ${gate.index} output lead`).toBeGreaterThanOrEqual(8);
        }
      });

      it('never crosses two leads of one gate, or the leads of two gates', () => {
        const leads = diagram.gates.flatMap((gate) =>
          gate.leads.map((lead) => ({ gate: gate.index, lead })),
        );
        const segments = leads.flatMap(({ gate, lead }, id) =>
          lead.slice(1).map((end, k) => ({ gate, id, a: lead[k]!, b: end })),
        );
        for (let i = 0; i < segments.length; i++) {
          for (let j = i + 1; j < segments.length; j++) {
            const [s, t] = [segments[i]!, segments[j]!];
            // the segments of one lead touch at their corners
            if (s.id === t.id) continue;
            expect(
              segmentsCross(s.a, s.b, t.a, t.b),
              `${type}: a lead of gate ${s.gate} meets a lead of gate ${t.gate}`,
            ).toBe(false);
          }
        }
      });
    });
  }

  it('points the gates of the 7402 toward their outputs, which come first on that chip', () => {
    const nor = buildIcDiagram('7402');
    expect(nor.gates.every((gate) => gate.flip)).toBe(true);
    expect(buildIcDiagram('7404').gates.every((gate) => !gate.flip)).toBe(true);
  });

  it('titles the chips', () => {
    expect(buildIcDiagram('7404').title).toBe('7404 Hex Inverter');
    expect(buildIcDiagram('7408').title).toBe('7408 Quad 2-input AND');
  });
});

describe('diagramText', () => {
  const diagram = buildIcDiagram('7408');

  it('says what a pin does', () => {
    expect(pinHint(diagram, diagram.pins[2]!)).toBe('ขา 3 · เอาต์พุต 1Y · เกต 1 (AND)');
    expect(pinHint(diagram, diagram.pins[0]!)).toBe('ขา 1 · อินพุต 1A · เกต 1 (AND)');
    expect(pinHint(diagram, diagram.pins[13]!)).toBe('ขา 14 · VCC ไฟเลี้ยง +5V');
    expect(pinHint(diagram, diagram.pins[6]!)).toBe('ขา 7 · GND กราวด์ 0V');
  });

  it('says what a gate connects to', () => {
    expect(gateHint(diagram, diagram.gates[0]!)).toBe('เกต 1 (AND) · อินพุตขา 1, 2 · เอาต์พุตขา 3');
    expect(gateHint(diagram, diagram.gates[2]!)).toBe(
      'เกต 3 (AND) · อินพุตขา 9, 10 · เอาต์พุตขา 8',
    );
  });

  it('describes the whole chip for a screen reader', () => {
    const text = diagramDescription(diagram);
    expect(text).toContain('7408 Quad 2-input AND');
    expect(text).toContain('เกต 4 (AND)');
    expect(text).toContain('ขา 14 · VCC');
  });
});
