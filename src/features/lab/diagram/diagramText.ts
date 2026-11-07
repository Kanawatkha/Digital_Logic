import { UI_TEXT } from '@/config/site';
import { IC_SPECS } from '../sim/ics';
import type { DiagramGate, DiagramPin, IcDiagram } from './pinDiagram';

/** What a pin does, in a line: "ขา 3 · เอาต์พุต 1Y · เกต 1 (AND)". */
export function pinHint(diagram: IcDiagram, pin: DiagramPin): string {
  const head = `${UI_TEXT.labDiagramPin} ${pin.number}`;
  if (pin.role === 'vcc') return `${head} · ${UI_TEXT.labDiagramVcc}`;
  if (pin.role === 'gnd') return `${head} · ${UI_TEXT.labDiagramGnd}`;
  const role = pin.role === 'input' ? UI_TEXT.labDiagramInput : UI_TEXT.labDiagramOutput;
  const symbol = IC_SPECS[diagram.type].symbol;
  return `${head} · ${role} ${pin.name} · ${UI_TEXT.labDiagramGate} ${pin.gate} (${symbol})`;
}

/** What a gate connects to, in a line: "เกต 1 (AND) · อินพุตขา 1, 2 · เอาต์พุตขา 3". */
export function gateHint(diagram: IcDiagram, gate: DiagramGate): string {
  const symbol = IC_SPECS[diagram.type].symbol;
  return (
    `${UI_TEXT.labDiagramGate} ${gate.index} (${symbol}) · ` +
    `${UI_TEXT.labDiagramInputPins} ${gate.inputs.join(', ')} · ` +
    `${UI_TEXT.labDiagramOutputPin} ${gate.output}`
  );
}

/** The whole chip for a screen reader: every gate with its pins, and the supply pins. */
export function diagramDescription(diagram: IcDiagram): string {
  const gates = diagram.gates.map((gate) => gateHint(diagram, gate)).join('. ');
  const supply = diagram.pins
    .filter((pin) => pin.role === 'vcc' || pin.role === 'gnd')
    .map((pin) => pinHint(diagram, pin))
    .join('. ');
  return `${diagram.title}. ${gates}. ${supply}`;
}
