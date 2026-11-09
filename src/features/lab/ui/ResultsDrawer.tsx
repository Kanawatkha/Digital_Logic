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
import { saveBlob, svgToPng } from '../analysis/exportPng';
import {
  buildTruthTable,
  currentRow,
  inputName,
  mintermsOf,
  type TruthTable,
} from '../analysis/truthTable';
import type { Circuit } from '../sim/evaluate';
import { simulate } from '../sim/evaluate';
import { CopyButton } from './CopyButton';
import { Drawer } from './Drawer';
import { KmapView } from './KmapView';
import { Notation } from './Notation';
import { TruthTableView } from './TruthTableView';
import { warningMessages } from './warningMessages';

type ResultsDrawerProps = {
  open: boolean;
  onClose: () => void;
  circuit: Circuit;
  /** Sets switches (from 0) to positions: a row of the table or a cell of the map was pressed */
  onSetSwitches?: (changes: readonly { index: number; up: boolean }[]) => void;
  /** Shows a chip on the board (its id), after the drawer has been closed */
  onLocate?: (ic: string) => void;
};

const TABS = ['table', 'circuit', 'equations', 'kmap'] as const;
type Tab = (typeof TABS)[number];
const TAB_TEXT: Record<Tab, string> = {
  table: UI_TEXT.labResultsTable,
  circuit: UI_TEXT.labResultsCircuit,
  equations: UI_TEXT.labResultsEquations,
  kmap: UI_TEXT.labResultsKmap,
};

const ZOOM_STEP = 1.25;

/** What is wrong with the circuit, in the words of the warnings on the board (suggestions about the wiring are left to the board). */
function Problems({ circuit, table }: { circuit: Circuit; table: TruthTable | null }) {
  const { warnings } = useMemo(() => simulate(circuit), [circuit]);
  const lines = useMemo(() => {
    const found = warningMessages(warnings, circuit.ics).filter(
      (message) => message.level !== 'hint' && message.kind !== 'redundantWire',
    );
    // the table finds a conflict that shows only for some switches
    if (table?.problems.conflict && !found.some((message) => message.kind === 'conflict')) {
      found.push({
        text: UI_TEXT.labResultsConflict,
        level: 'severe',
        kind: 'conflict',
        soft: false,
      });
    }
    return found.sort((a, b) => Number(b.level === 'severe') - Number(a.level === 'severe'));
  }, [warnings, circuit.ics, table]);
  if (lines.length === 0) return null;
  return (
    <ul className="mb-3 flex flex-col gap-1" aria-label={UI_TEXT.labWarnings}>
      {lines.map(({ text, level }) => (
        <li
          key={text}
          className={`type-nav flex items-start gap-2 rounded-md px-3 py-2 ${
            level === 'severe' ? 'bg-error text-on-primary' : 'bg-warning text-ink'
          }`}
        >
          <Icon name="alert" size={18} className="mt-0.5 shrink-0" />
          {text}
        </li>
      ))}
    </ul>
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
  const simplified = (led: number) =>
    `LED${led} = ${simplifiedExpression(n, mintermsOf(table, led))}`;
  return (
    <div className="flex flex-col gap-3">
      {netlist.outputs.length > 1 ? (
        <div className="flex justify-end">
          <CopyButton
            text={netlist.outputs.map((output) => simplified(output.led)).join('\n')}
            label={UI_TEXT.labResultsCopyAllEq}
          />
        </div>
      ) : null}
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
                <dd className="flex items-center justify-between gap-2 rounded-md bg-canvas py-1 ps-3 pe-1 font-mono text-[15px] text-ink">
                  <Notation text={simplified(output.led)} />
                  <CopyButton
                    iconOnly
                    text={simplified(output.led)}
                    label={`${UI_TEXT.labResultsCopyEq} ${UI_TEXT.labResultsSimplified}`}
                  />
                </dd>
              </div>
              <div>
                <dt className="type-caption text-muted">{UI_TEXT.labResultsWired}</dt>
                <dd className="flex items-center justify-between gap-2 rounded-md bg-canvas py-1 ps-3 pe-1 font-mono text-[15px] break-words text-ink">
                  {wired === null ? (
                    <span className="py-1 font-sans text-muted">{UI_TEXT.labResultsNoWired}</span>
                  ) : (
                    <>
                      <Notation text={`LED${output.led} = ${wired}`} />
                      <CopyButton
                        iconOnly
                        text={`LED${output.led} = ${wired}`}
                        label={`${UI_TEXT.labResultsCopyEq} ${UI_TEXT.labResultsWired}`}
                      />
                    </>
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
  onLocate,
}: {
  netlist: Netlist;
  circuit: Circuit;
  nameOf: (switchIndex: number) => string;
  onLocate?: (ic: string) => void;
}) {
  const layout = useMemo(() => layoutDiagram(netlist, nameOf), [netlist, nameOf]);
  const result = useMemo(() => simulate(circuit), [circuit]);
  const [saveFailed, setSaveFailed] = useState(false);
  const savePicture = async () => {
    const element = svg.current;
    if (!element) return;
    try {
      saveBlob(await svgToPng(element), 'circuit.png');
      setSaveFailed(false);
    } catch {
      setSaveFailed(true);
    }
  };
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
        <p className="type-caption text-muted">
          {UI_TEXT.labResultsLegend}
          {onLocate ? `. ${UI_TEXT.labResultsGateHint}` : ''}
        </p>
        <div className="flex items-center rounded-lg border border-hairline bg-canvas p-0.5">
          <button
            type="button"
            className={zoomButton}
            aria-label={UI_TEXT.labResultsSavePng}
            title={UI_TEXT.labResultsSavePng}
            onClick={savePicture}
          >
            <Icon name="download" size={18} />
          </button>
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
          onGate={onLocate}
        />
      </div>
      {saveFailed ? (
        <p role="alert" className="type-caption mt-2 text-error">
          {UI_TEXT.labResultsSaveFailed}
        </p>
      ) : null}
    </div>
  );
}

/** What is inside the drawer: it is made only while the drawer is open. */
function ResultsBody({
  circuit,
  onSetSwitches,
  onLocate,
}: Pick<ResultsDrawerProps, 'circuit' | 'onSetSwitches' | 'onLocate'>) {
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
  // what to do next depends on how far the circuit is
  const emptyText =
    ics.length === 0 && wires.length === 0
      ? UI_TEXT.labResultsEmptyStart
      : wires.length === 0
        ? UI_TEXT.labResultsEmptyWire
        : UI_TEXT.labResultsEmpty;

  // a row of the table (or a cell of the map) sets the switches that are its inputs
  const now = table ? currentRow(circuit.switches, table.inputs) : 0;
  const pickRow = (row: number) => {
    if (!table || !onSetSwitches) return;
    const n = table.inputs.length;
    onSetSwitches(
      table.inputs.map((index, i) => ({ index, up: Boolean((row >> (n - 1 - i)) & 1) })),
    );
  };
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
          <p className="type-body-md text-muted">{emptyText}</p>
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
            <Problems circuit={circuit} table={table} />
            {/* a tab comes in with a fade (a fade only: a move would flash the scroll bars of the drawer) */}
            <div key={tab} className="lab-fade">
              {chosen.length === 0 ? (
                <p className="type-body-md text-muted">{UI_TEXT.labResultsNoOutputs}</p>
              ) : tab === 'circuit' ? (
                <CircuitView
                  netlist={netlist}
                  circuit={circuit}
                  nameOf={nameOf}
                  onLocate={onLocate}
                />
              ) : netlist.feedback || !table ? (
                <p className="type-body-md rounded-md bg-surface-card px-3 py-2 text-body">
                  {UI_TEXT.labResultsFeedback}
                </p>
              ) : tab === 'table' ? (
                <TruthTableView table={table} switches={circuit.switches} onPickRow={pickRow} />
              ) : tab === 'kmap' ? (
                <KmapView table={table} now={now} onPickRow={pickRow} />
              ) : (
                <EquationsView netlist={netlist} table={table} nameOf={nameOf} />
              )}
            </div>
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
export function ResultsDrawer({
  open,
  onClose,
  circuit,
  onSetSwitches,
  onLocate,
}: ResultsDrawerProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={UI_TEXT.labResults}
      hint={UI_TEXT.labResultsHint}
      size="lg"
    >
      <ResultsBody circuit={circuit} onSetSwitches={onSetSwitches} onLocate={onLocate} />
    </Drawer>
  );
}
