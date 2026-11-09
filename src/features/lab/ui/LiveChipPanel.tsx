import { useMemo, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import { IcDiagram, type DiagramFocus } from '../diagram/IcDiagram';
import { gateHint, pinHint } from '../diagram/diagramText';
import { functionTable, liveChip, type SupplyStatus } from '../diagram/liveChip';
import { buildIcDiagram } from '../diagram/pinDiagram';
import type { NetState, PlacedIc, SimResult } from '../sim/evaluate';
import { icName } from './icName';

type LiveChipPanelProps = {
  /** The chips on the boards */
  ics: readonly PlacedIc[];
  result: SimResult;
  /** The chip to start on (the one that was selected, or that a warning is about) */
  initial: string | null;
};

const NO_FOCUS: DiagramFocus = { pin: null, gate: null };

const READING: Record<NetState, string> = {
  high: UI_TEXT.labPinsHigh,
  low: UI_TEXT.labPinsLow,
  floating: UI_TEXT.labPinsFloat,
  conflict: UI_TEXT.labPinsConflict,
};

const READING_STYLE: Record<NetState, string> = {
  high: 'bg-primary/20 text-ink',
  low: 'bg-surface-card text-ink',
  floating: 'border border-dashed border-muted text-muted',
  conflict: 'bg-error/20 text-error',
};

const SUPPLY_TEXT: Record<'vcc' | 'gnd', Record<SupplyStatus, string>> = {
  vcc: {
    ok: UI_TEXT.labPinsVccOk,
    missing: UI_TEXT.labPinsVccMissing,
    reversed: UI_TEXT.labPinsReversed,
    unknown: UI_TEXT.labPinsUnknown,
  },
  gnd: {
    ok: UI_TEXT.labPinsGndOk,
    missing: UI_TEXT.labPinsGndMissing,
    reversed: UI_TEXT.labPinsReversed,
    unknown: UI_TEXT.labPinsUnknown,
  },
};

const bit = (value: boolean) => (value ? '1' : '0');

/**
 * The chips that are on the boards, one at a time: what the supply pins are wired to (a checklist),
 * the pin diagram with every pin colored by what it carries, a line for each gate (what its inputs
 * read and what it gives), the value at every pin, and the function table of its gate.
 */
export function LiveChipPanel({ ics, result, initial }: LiveChipPanelProps) {
  const [picked, setPicked] = useState(initial);
  const [focus, setFocus] = useState<DiagramFocus>(NO_FOCUS);
  const ic = ics.find((item) => item.id === picked) ?? ics[0];
  const diagram = useMemo(() => (ic ? buildIcDiagram(ic.type) : null), [ic]);
  const live = useMemo(() => (ic ? liveChip(ic, result) : null), [ic, result]);
  const table = useMemo(() => (ic ? functionTable(ic.type) : []), [ic]);
  if (!ic || !diagram || !live) return null;

  const inputNames = table[0]?.inputs.map((_, k) => String.fromCharCode(65 + k)) ?? [];
  const nowRows = new Set(
    live.gates
      .filter((gate) => gate.output !== null)
      .map((gate) => gate.inputs.map((input) => bit(input.value)).join('')),
  );
  const pin = focus.pin === null ? undefined : diagram.pins.find((p) => p.number === focus.pin);
  const gate = focus.gate === null ? undefined : diagram.gates.find((g) => g.index === focus.gate);
  const hint = pin ? pinHint(diagram, pin) : gate ? gateHint(diagram, gate) : '';
  const half = (pins: typeof diagram.pins) => (
    <table className="w-full border-collapse text-start">
      <tbody>
        {pins.map((p) => {
          const reading = live.pins[p.number] ?? 'floating';
          return (
            <tr key={p.number} className="border-t border-hairline-soft first:border-t-0">
              <th
                scope="row"
                className="type-caption w-12 py-1 pe-2 text-start font-normal text-muted"
              >
                {UI_TEXT.labDiagramPin} {p.number}
              </th>
              <td className="type-body-sm py-1 pe-2 text-ink">{p.name}</td>
              <td className="py-1 text-end">
                <span
                  className={`type-caption inline-flex min-w-12 justify-center rounded-full px-2 py-0.5 ${READING_STYLE[reading]}`}
                >
                  {READING[reading]}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <section
      aria-label={UI_TEXT.labPinsLive}
      className="rounded-lg border border-primary bg-surface-soft p-3 shadow-[0_0_0_3px_rgb(204_120_92/0.18)]"
    >
      <h3 className="type-title-sm mb-2 text-ink">{UI_TEXT.labPinsLive}</h3>
      {ics.length > 1 ? (
        <div
          role="group"
          aria-label={UI_TEXT.labPinsSelect}
          className="mb-3 flex flex-wrap items-center gap-1.5"
        >
          {ics.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={item.id === ic.id}
              onClick={() => {
                setPicked(item.id);
                setFocus(NO_FOCUS);
              }}
              className={`type-caption inline-flex h-8 items-center rounded-full border px-3 transition-colors ${
                item.id === ic.id
                  ? 'border-ink bg-ink text-on-dark'
                  : 'border-hairline bg-canvas text-ink active:bg-surface-card'
              }`}
            >
              {icName(item)}
            </button>
          ))}
        </div>
      ) : (
        <p className="type-body-sm mb-3 text-ink">{icName(ic)}</p>
      )}

      <ul aria-label={UI_TEXT.labPinsPower} className="mb-3 flex flex-col gap-1">
        {(['vcc', 'gnd'] as const).map((supply) => {
          const status = live[supply];
          const good = status === 'ok';
          return (
            <li
              key={supply}
              data-status={status}
              className={`type-body-sm flex items-center gap-2 rounded-md px-3 py-1.5 ${
                good
                  ? 'bg-surface-card text-ink'
                  : status === 'unknown'
                    ? 'bg-surface-card text-muted'
                    : 'bg-warning text-ink'
              }`}
            >
              <Icon name={good ? 'check' : 'alert'} size={16} className="shrink-0" />
              {SUPPLY_TEXT[supply][status]}
            </li>
          );
        })}
      </ul>

      <div className="rounded-md bg-canvas p-2">
        <IcDiagram type={ic.type} focus={focus} onFocus={setFocus} pinStates={live.pins} />
      </div>
      <p className="type-caption mt-1 text-muted">{UI_TEXT.labPinsLegend}</p>
      <p className="type-body-sm min-h-[1.7em] text-muted" aria-live="polite">
        {hint}
      </p>

      <h4 className="type-title-sm mt-2 mb-1 text-ink">{UI_TEXT.labPinsGates}</h4>
      <ul className="mb-3 flex flex-col gap-1">
        {live.gates.map((g) => (
          <li key={g.index} className="type-body-sm rounded-md bg-canvas px-3 py-1.5 text-ink">
            {UI_TEXT.labDiagramGate} {g.index}:{' '}
            {g.inputs
              .map(
                (input) =>
                  `${bit(input.value)}${input.floating ? ` (${UI_TEXT.labPinsFloatNote})` : ''}`,
              )
              .join(', ')}{' '}
            → {UI_TEXT.labPinsOut} {g.output === null ? UI_TEXT.labPinsNoPower : bit(g.output)}
          </li>
        ))}
      </ul>

      <h4 className="type-title-sm mb-1 text-ink">{UI_TEXT.labPinsValues}</h4>
      <div className="mb-3 grid gap-x-4 rounded-md bg-canvas px-3 py-1 md:grid-cols-2">
        {half(diagram.pins.filter((p) => p.number <= 7).sort((a, b) => a.number - b.number))}
        {half(diagram.pins.filter((p) => p.number > 7).sort((a, b) => a.number - b.number))}
      </div>

      <h4 className="type-title-sm mb-1 text-ink">{UI_TEXT.labPinsFunction}</h4>
      <p className="type-caption mb-1 text-muted">{UI_TEXT.labPinsFunctionNow}</p>
      <table className="w-full max-w-xs border-collapse rounded-md bg-canvas text-center tabular-nums">
        <caption className="sr-only">{UI_TEXT.labPinsFunction}</caption>
        <thead>
          <tr className="type-caption text-muted">
            {inputNames.map((name) => (
              <th key={name} scope="col" className="px-3 py-1.5 font-normal">
                {name}
              </th>
            ))}
            <th scope="col" className="border-s-2 border-ink px-3 py-1.5 font-normal">
              Y
            </th>
          </tr>
        </thead>
        <tbody>
          {table.map((row, index) => {
            const key = row.inputs.map(bit).join('');
            const now = nowRows.has(key);
            return (
              <tr
                key={index}
                aria-current={now ? 'true' : undefined}
                className={`border-t border-hairline-soft transition-colors duration-200 ${now ? 'bg-primary/15' : ''}`}
              >
                {row.inputs.map((value, k) => (
                  <td key={k} className="type-body-sm px-3 py-1 text-body">
                    {bit(value)}
                  </td>
                ))}
                <td
                  className={`type-body-sm border-s-2 border-ink px-3 py-1 font-medium ${row.output ? 'text-error' : 'text-ink'}`}
                >
                  {bit(row.output)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
