import { UI_TEXT } from '@/config/site';
import type { PlacedIc, Warning } from '../sim/evaluate';

/** One line for the student; `severe` is for a fault that breaks the circuit. */
export type WarningMessage = { text: string; severe: boolean };

/**
 * The warnings of the simulator as messages: one line for each short, conflict, loop and supply, and
 * one line per chip for power and floating inputs (so a chip with several loose inputs is one line).
 */
export function warningMessages(
  warnings: readonly Warning[],
  ics: readonly PlacedIc[] = [],
): WarningMessage[] {
  const name = (id: string) => {
    const ic = ics.find((item) => item.id === id);
    return ic ? `${ic.type} (${UI_TEXT.labBreadboard} ${ic.board + 1} #${ic.col})` : id;
  };
  const messages: WarningMessage[] = [];
  const floating = new Map<string, Set<number>>();
  let conflict = false;
  for (const warning of warnings) {
    switch (warning.kind) {
      case 'short':
        messages.push({ text: UI_TEXT.labShort, severe: true });
        break;
      case 'conflict':
        if (!conflict) messages.push({ text: UI_TEXT.labWarnConflict, severe: true });
        conflict = true;
        break;
      case 'unsupportedSupply':
        messages.push({
          text: `${warning.socket}: ${UI_TEXT.labUnsupportedSupply}`,
          severe: false,
        });
        break;
      case 'unpowered':
        messages.push({ text: `${name(warning.ic)}: ${UI_TEXT.labWarnUnpowered}`, severe: false });
        break;
      case 'floatingInput': {
        const pins = floating.get(warning.ic) ?? new Set<number>();
        pins.add(warning.pin);
        floating.set(warning.ic, pins);
        break;
      }
      case 'unstable':
        messages.push({
          text: `${UI_TEXT.labWarnUnstable}: ${warning.ics.map(name).join(', ')}`,
          severe: true,
        });
        break;
      case 'overlap':
      case 'badPoint':
        break;
    }
  }
  for (const [id, pins] of floating) {
    const list = [...pins].sort((a, b) => a - b).join(', ');
    messages.push({ text: `${name(id)}: ${UI_TEXT.labWarnFloating} ${list}`, severe: false });
  }
  return messages;
}
