import { useId, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import { ResultDiagram } from '../analysis/ResultDiagram';
import { layoutDiagram } from '../analysis/diagramLayout';
import {
  productOfMaxterms,
  simplifiedExpression,
  sumOfMinterms,
  wiredExpression,
} from '../analysis/expression';
import { buildNetlist, type Netlist } from '../analysis/netlist';
import {
  buildTruthTable,
  currentRow,
  inputName,
  mintermsOf,
  tableAsText,
  type TruthTable,
} from '../analysis/truthTable';
import type { Circuit } from '../sim/evaluate';
import { simulate } from '../sim/evaluate';
import { Drawer } from './Drawer';
import { Notation } from './Notation';

type ResultsDrawerProps = {
  open: boolean;
  onClose: () => void;
  circuit: Circuit;
};

const TABS = ['table', 'circuit', 'equations'] as const;
type Tab = (typeof TABS)[number];
const TAB_TEXT: Record<Tab, string> = {
  table: UI_TEXT.labResultsTable,
  circuit: UI_TEXT.labResultsCircuit,
  equations: UI_TEXT.labResultsEquations,
};

const ZOOM_STEP = 1.25;

function Problems({ netlist, table }: { netlist: Netlist; table: TruthTable | null }) {
  const lines: string[] = [];
  if (netlist.faults.short) lines.push(UI_TEXT.labResultsShort);
  if (netlist.faults.conflict || table?.problems.conflict) lines.push(UI_TEXT.labResultsConflict);
  if (netlist.faults.unpowered.length > 0) {
    lines.push(
      `${UI_TEXT.labResultsUnpowered} ${netlist.faults.unpowered.map((id) => id.toUpperCase()).join(', ')}`,
    );
  }
  if (netlist.faults.floating) lines.push(UI_TEXT.labResultsFloating);
  if (lines.length === 0) return null;
  return (
    <ul className="mb-3 flex flex-col gap-1" aria-label={UI_TEXT.labWarnings}>
      {lines.map((line) => (
        <li
          key={line}
          className="type-nav flex items-start gap-2 rounded-md bg-warning px-3 py-2 text-ink"
        >
          <Icon name="alert" size={18} className="mt-0.5 shrink-0" />
          {line}
        </li>
      ))}
    </ul>
  );
}

function TableView({ table, switches }: { table: TruthTable; switches: readonly boolean[] }) {
  const [copied, setCopied] = useState(false);
  const now = currentRow(switches, table.inputs);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(tableAsText(table));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="type-caption text-muted">
          {table.inputs.length === 0
            ? UI_TEXT.labResultsNoInputs
            : `${table.rows.length} แถว · ${UI_TEXT.labResultsNow} ${now}`}
        </p>
        <button
          type="button"
          onClick={copy}
          className="type-caption inline-flex h-9 items-center gap-1.5 rounded-md border border-hairline bg-canvas px-3 text-ink active:bg-surface-card"
        >
          <Icon name={copied ? 'check' : 'copy'} size={16} />
          {copied ? UI_TEXT.labResultsCopied : UI_TEXT.labResultsCopy}
        </button>
      </div>
      <div className="max-h-[52dvh] overflow-auto rounded-lg border border-hairline">
        <table className="w-full border-collapse text-center tabular-nums">
          <caption className="sr-only">{UI_TEXT.labResultsTable}</caption>
          <thead className="sticky top-0 z-10 bg-surface-card">
            <tr>
              <th scope="col" className="type-caption px-3 py-2 text-muted">
                #
              </th>
              {table.inputs.map((k, i) => (
                <th
                  key={k}
                  scope="col"
                  className="type-caption border-s border-hairline px-3 py-2 text-ink"
                >
                  {inputName(i)}
                  <span className="block text-[10px] font-normal text-muted">
                    {UI_TEXT.labResultsSwitch} {k + 1}
                  </span>
                </th>
              ))}
              {table.outputs.map((led, i) => (
                <th
                  key={led}
                  scope="col"
                  className={`type-caption px-3 py-2 text-ink ${i === 0 ? 'border-s-2 border-ink' : 'border-s border-hairline'}`}
                >
                  LED {led}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, index) => (
              <tr
                key={index}
                aria-current={index === now ? 'true' : undefined}
                className={`border-t border-hairline-soft ${index === now ? 'bg-primary/15' : ''}`}
              >
                <th scope="row" className="type-caption px-3 py-1.5 font-normal text-muted">
                  {index}
                </th>
                {row.values.map((v, i) => (
                  <td
                    key={i}
                    className="type-body-sm border-s border-hairline-soft px-3 py-1.5 text-body"
                  >
                    {v ? 1 : 0}
                  </td>
                ))}
                {row.outputs.map((v, i) => (
                  <td
                    key={i}
                    className={`type-body-sm px-3 py-1.5 font-medium ${
                      i === 0 ? 'border-s-2 border-ink' : 'border-s border-hairline-soft'
                    } ${v ? 'text-error' : 'text-ink'}`}
                  >
                    {v ? 1 : 0}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EquationsView({
  netlist,
  table,
  nameOf,
}: {
  netlist: Netlist;
  table: TruthTable;
  nameOf: (switchIndex: number) => string;
}) {
  const n = table.inputs.length;
  return (
    <div className="flex flex-col gap-3">
      {netlist.outputs.map((output) => {
        const ones = mintermsOf(table, output.led);
        const wired = wiredExpression(netlist, output.source, nameOf);
        return (
          <section
            key={output.led}
            aria-label={`LED ${output.led}`}
            className="rounded-lg border border-hairline bg-surface-soft p-3"
          >
            <h3 className="type-title-sm mb-2 text-ink">LED {output.led}</h3>
            <dl className="flex flex-col gap-2">
              <div>
                <dt className="type-caption text-muted">{UI_TEXT.labResultsSimplified}</dt>
                <dd className="rounded-md bg-canvas px-3 py-2 font-mono text-[15px] text-ink">
                  <Notation text={`LED${output.led} = ${simplifiedExpression(n, ones)}`} />
                </dd>
              </div>
              <div>
                <dt className="type-caption text-muted">{UI_TEXT.labResultsWired}</dt>
                <dd className="rounded-md bg-canvas px-3 py-2 font-mono text-[15px] break-words text-ink">
                  {wired === null ? (
                    <span className="font-sans text-muted">{UI_TEXT.labResultsNoWired}</span>
                  ) : (
                    <Notation text={`LED${output.led} = ${wired}`} />
                  )}
                </dd>
              </div>
              <div className="type-body-sm font-mono text-body">
                <p>{sumOfMinterms(ones)}</p>
                <p>{productOfMaxterms(n, ones)}</p>
              </div>
            </dl>
          </section>
        );
      })}
    </div>
  );
}

function CircuitView({
  netlist,
  circuit,
  nameOf,
}: {
  netlist: Netlist;
  circuit: Circuit;
  nameOf: (switchIndex: number) => string;
}) {
  const layout = useMemo(() => layoutDiagram(netlist, nameOf), [netlist, nameOf]);
  const result = useMemo(() => simulate(circuit), [circuit]);
  // null fits the width of the drawer; the buttons zoom from wherever it is
  const [scale, setScale] = useState<number | null>(null);
  const svg = useRef<SVGSVGElement>(null);
  const current = () => {
    if (scale !== null) return scale;
    const shown = svg.current?.getBoundingClientRect().width;
    return shown ? shown / layout.width : 1;
  };
  const value = (signal: string): boolean | null => {
    if (signal.startsWith('in:')) return circuit.switches[Number(signal.slice(3))] === true;
    if (signal === 'c:1' || signal === 'f') return true;
    if (signal === 'c:0') return false;
    if (signal.startsWith('g:')) {
      const [ic, gate] = signal.slice(2).split(':');
      return result.ics[ic ?? '']?.outputs[Number(gate) - 1] ?? null;
    }
    return null;
  };
  const description = layout.nodes
    .filter((node) => node.kind === 'gate')
    .map((node) => `${node.label} ${node.gate?.type}`)
    .join(', ');
  const zoomButton =
    'inline-flex size-9 items-center justify-center rounded-md text-ink active:bg-surface-card';
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="type-caption text-muted">{UI_TEXT.labResultsLegend}</p>
        <div className="flex items-center rounded-lg border border-hairline bg-canvas p-0.5">
          <button
            type="button"
            className={zoomButton}
            aria-label={UI_TEXT.labResultsZoomOut}
            onClick={() => setScale(Math.max(0.3, current() / ZOOM_STEP))}
          >
            <Icon name="minus" size={18} />
          </button>
          <button
            type="button"
            className={zoomButton}
            aria-label={UI_TEXT.labResultsFit}
            onClick={() => setScale(null)}
          >
            <Icon name="fit" size={18} />
          </button>
          <button
            type="button"
            className={zoomButton}
            aria-label={UI_TEXT.labResultsZoomIn}
            onClick={() => setScale(Math.max(0.3, Math.min(3, current() * ZOOM_STEP)))}
          >
            <Icon name="plus" size={18} />
          </button>
        </div>
      </div>
      <div className="max-h-[56dvh] overflow-auto rounded-lg border border-hairline bg-surface-soft p-2">
        <ResultDiagram
          ref={svg}
          layout={layout}
          value={value}
          scale={scale}
          description={description}
        />
      </div>
    </div>
  );
}

/** What is inside the drawer: it is made only while the drawer is open. */
function ResultsBody({ circuit }: { circuit: Circuit }) {
  const [tab, setTab] = useState<Tab>('table');
  const [off, setOff] = useState<ReadonlySet<number>>(new Set());
  const ids = useId();
  const { wires, ics } = circuit;

  const everything = useMemo(() => buildNetlist({ wires, ics }), [wires, ics]);
  const chosen = everything.wiredLeds.filter((led) => !off.has(led));
  const netlist = useMemo(() => buildNetlist({ wires, ics }, chosen), [wires, ics, chosen]);
  // the table does not depend on where the switches are now, so it is made from the wires alone
  const table = useMemo(
    () =>
      netlist.feedback || netlist.outputs.length === 0
        ? null
        : buildTruthTable(
            { wires, ics, switches: [] },
            netlist.inputs,
            netlist.outputs.map((o) => o.led),
          ),
    [netlist, wires, ics],
  );
  const nameOf = useMemo(() => {
    const inputs = netlist.inputs;
    return (k: number) => {
      const at = inputs.indexOf(k);
      return at < 0 ? `S${k + 1}` : inputName(at);
    };
  }, [netlist.inputs]);

  const onKeyDown = (event: KeyboardEvent) => {
    const at = TABS.indexOf(tab);
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (step === 0) return;
    event.preventDefault();
    const next = TABS[(at + step + TABS.length) % TABS.length]!;
    setTab(next);
    document.getElementById(`${ids}-tab-${next}`)?.focus();
  };

  const toggle = (led: number) =>
    setOff((was) => {
      const next = new Set(was);
      if (next.has(led)) next.delete(led);
      else next.add(led);
      return next;
    });

  const empty = everything.wiredLeds.length === 0;
  return (
    <>
      <div
        role="tablist"
        aria-label={UI_TEXT.labResultsTabs}
        className="flex gap-1 border-b border-hairline px-4 pt-2 md:px-5"
        onKeyDown={onKeyDown}
      >
        {TABS.map((name) => (
          <button
            key={name}
            id={`${ids}-tab-${name}`}
            type="button"
            role="tab"
            aria-selected={tab === name}
            aria-controls={`${ids}-panel`}
            tabIndex={tab === name ? 0 : -1}
            className={`type-nav -mb-px rounded-t-md border-b-2 px-3 py-2 transition-colors ${
              tab === name
                ? 'border-primary-active text-ink'
                : 'border-transparent text-muted active:bg-surface-card'
            }`}
            onClick={() => setTab(name)}
          >
            {TAB_TEXT[name]}
          </button>
        ))}
      </div>
      <div
        id={`${ids}-panel`}
        role="tabpanel"
        aria-labelledby={`${ids}-tab-${tab}`}
        tabIndex={0}
        className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain p-4 outline-none md:p-5"
      >
        {empty ? (
          <p className="type-body-md text-muted">{UI_TEXT.labResultsEmpty}</p>
        ) : (
          <>
            <div
              role="group"
              aria-label={UI_TEXT.labResultsOutputs}
              className="mb-3 flex flex-wrap items-center gap-1.5"
            >
              <span className="type-caption me-1 text-muted">{UI_TEXT.labResultsOutputs}</span>
              {everything.wiredLeds.map((led) => (
                <button
                  key={led}
                  type="button"
                  aria-pressed={!off.has(led)}
                  className={`type-caption inline-flex h-8 min-w-14 items-center justify-center rounded-full border px-3 transition-colors ${
                    off.has(led)
                      ? 'border-hairline bg-canvas text-muted'
                      : 'border-ink bg-ink text-on-dark'
                  }`}
                  onClick={() => toggle(led)}
                >
                  LED {led}
                </button>
              ))}
            </div>
            <Problems netlist={netlist} table={table} />
            {chosen.length === 0 ? (
              <p className="type-body-md text-muted">{UI_TEXT.labResultsNoOutputs}</p>
            ) : tab === 'circuit' ? (
              <CircuitView netlist={netlist} circuit={circuit} nameOf={nameOf} />
            ) : netlist.feedback || !table ? (
              <p className="type-body-md rounded-md bg-surface-card px-3 py-2 text-body">
                {UI_TEXT.labResultsFeedback}
              </p>
            ) : tab === 'table' ? (
              <TableView table={table} switches={circuit.switches} />
            ) : (
              <EquationsView netlist={netlist} table={table} nameOf={nameOf} />
            )}
          </>
        )}
      </div>
    </>
  );
}

/**
 * The result of the circuit that is on the boards, in a drawer over a blurred page: the truth table
 * of the LEDs that have a wire, the circuit as a gate diagram, and the equations. All three are made
 * from the wires and chips, so they say what the simulator would do.
 */
export function ResultsDrawer({ open, onClose, circuit }: ResultsDrawerProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={UI_TEXT.labResults}
      hint={UI_TEXT.labResultsHint}
      size="lg"
    >
      <ResultsBody circuit={circuit} />
    </Drawer>
  );
}
