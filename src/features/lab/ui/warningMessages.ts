import { UI_TEXT } from '@/config/site';
import type { DriverRef, PlacedIc, Warning } from '../sim/evaluate';
import { icName } from './icName';

/**
 * How much a message matters: `severe` breaks the circuit (red), `warn` is something to fix (amber),
 * `hint` is a suggestion that may not be a mistake at all (quiet).
 */
export type WarningLevel = 'severe' | 'warn' | 'hint';

/** A place on the board a message is about: a chip, or a point (a hole, socket or LED). */
export type WarningTarget = { kind: 'ic'; id: string } | { kind: 'point'; id: string };

/** One line for the student. */
export type WarningMessage = {
  text: string;
  level: WarningLevel;
  /** Which warning it comes from */
  kind: Warning['kind'];
  /**
   * A suggestion about how the circuit is wired (not about what it does): it is shown only once the
   * circuit has stayed as it is for a moment, so it does not nag while a student is still building.
   */
  soft: boolean;
  /** What the board can be moved to and pointed at, when the message has a place */
  target?: WarningTarget;
};

const SOFT_KINDS: ReadonlySet<Warning['kind']> = new Set([
  'ledUndriven',
  'redundantWire',
  'outputUnused',
  'noOutput',
]);

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
    return ic ? icName(ic) : id;
  };
  const driverName = (driver: DriverRef) =>
    driver.kind === 'supply'
      ? driver.name
      : driver.kind === 'switch'
        ? `${UI_TEXT.labSwitch} ${driver.index + 1}`
        : `${name(driver.ic)} ${UI_TEXT.labWarnGate} ${driver.gate}`;

  const messages: WarningMessage[] = [];
  const add = (
    warning: Warning,
    level: WarningLevel,
    text: string,
    target?: WarningTarget,
  ): void => {
    messages.push({ text, level, kind: warning.kind, soft: SOFT_KINDS.has(warning.kind), target });
  };
  const floating = new Map<string, Set<number>>();
  const leds: number[] = [];
  const redundant: Warning[] = [];

  for (const warning of warnings) {
    switch (warning.kind) {
      case 'short':
        add(warning, 'severe', UI_TEXT.labShort, { kind: 'point', id: 'power:+5V:0' });
        break;
      case 'conflict': {
        const gate = warning.drivers.find((driver) => driver.kind === 'gate');
        const first = warning.drivers[0];
        const target: WarningTarget | undefined = gate
          ? { kind: 'ic', id: gate.ic }
          : first
            ? { kind: 'point', id: first.at }
            : undefined;
        const names = warning.drivers.map(driverName).join(` ${UI_TEXT.labWarnConflictWith} `);
        add(warning, 'severe', `${UI_TEXT.labWarnConflict}: ${names}`, target);
        break;
      }
      case 'unsupportedSupply':
        add(warning, 'warn', `${warning.socket}: ${UI_TEXT.labUnsupportedSupply}`, {
          kind: 'point',
          id: `power:${warning.socket}:0`,
        });
        break;
      case 'unpowered': {
        const both = warning.missing.length === 2;
        const why = both
          ? UI_TEXT.labWarnUnpowered
          : warning.missing[0] === 'vcc'
            ? UI_TEXT.labWarnNoVcc
            : UI_TEXT.labWarnNoGnd;
        const split = warning.railSplit ? `. ${UI_TEXT.labWarnRailSplit}` : '';
        add(warning, 'warn', `${name(warning.ic)}: ${why}${split}`, {
          kind: 'ic',
          id: warning.ic,
        });
        break;
      }
      case 'reversed':
        add(warning, 'severe', `${name(warning.ic)}: ${UI_TEXT.labWarnReversed}`, {
          kind: 'ic',
          id: warning.ic,
        });
        break;
      case 'floatingInput': {
        const pins = floating.get(warning.ic) ?? new Set<number>();
        pins.add(warning.pin);
        floating.set(warning.ic, pins);
        break;
      }
      case 'unstable':
        add(
          warning,
          'severe',
          `${UI_TEXT.labWarnUnstable}: ${warning.ics.map(name).join(', ')}`,
          warning.ics[0] ? { kind: 'ic', id: warning.ics[0] } : undefined,
        );
        break;
      case 'ledUndriven':
        leds.push(warning.led);
        break;
      case 'redundantWire':
        redundant.push(warning);
        break;
      case 'outputUnused':
        add(
          warning,
          'hint',
          `${name(warning.ic)}: ${UI_TEXT.labWarnOutputUnused} ${warning.gates.join(', ')}`,
          { kind: 'ic', id: warning.ic },
        );
        break;
      case 'noOutput':
        add(warning, 'hint', UI_TEXT.labWarnNoOutput);
        break;
      case 'overlap':
      case 'badPoint':
        break;
    }
  }
  for (const [id, pins] of floating) {
    const list = [...pins].sort((a, b) => a - b).join(', ');
    const text = `${name(id)}: ${UI_TEXT.labWarnFloating} ${list}`;
    messages.push({
      text,
      level: 'warn',
      kind: 'floatingInput',
      soft: false,
      target: { kind: 'ic', id },
    });
  }
  const firstLed = leds[0];
  if (firstLed !== undefined) {
    messages.push({
      text: `${UI_TEXT.labLeds} ${leds.join(', ')}: ${UI_TEXT.labWarnLedUndriven}`,
      level: 'warn',
      kind: 'ledUndriven',
      soft: true,
      target: { kind: 'point', id: `led${firstLed}:0` },
    });
  }
  const firstWire = redundant[0];
  if (firstWire?.kind === 'redundantWire') {
    messages.push({
      text: `${UI_TEXT.labWarnRedundant} ${redundant.length}`,
      level: 'warn',
      kind: 'redundantWire',
      soft: true,
      target: { kind: 'point', id: firstWire.from },
    });
  }
  return messages;
}
