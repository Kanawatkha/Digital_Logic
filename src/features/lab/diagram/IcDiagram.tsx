import { useMemo } from 'react';
import { diagramDescription } from './diagramText';
import {
  BODY_PATH,
  DIAGRAM_SIZE,
  GATE_BUBBLE,
  GATE_PATH,
  PIN_BOX,
  SUPPLY_LABELS,
  buildIcDiagram,
  type DiagramGate,
  type DiagramPin,
} from './pinDiagram';
import type { NetState } from '../sim/evaluate';
import type { IcType } from '../sim/ics';

/** What the pointer or a finger is on: a pin (and so its gate), or a gate. */
export type DiagramFocus = { pin: number | null; gate: number | null };

type IcDiagramProps = {
  type: IcType;
  focus: DiagramFocus;
  onFocus: (focus: DiagramFocus) => void;
  /** What each pin of a chip on the board carries, by pin number: the boxes of the pins are colored by it */
  pinStates?: Readonly<Record<number, NetState>>;
};

/** How a pin box looks for what it carries: 1 orange, 0 plain, nothing dashed, a conflict red */
const STATE_STYLE: Record<NetState, string> = {
  high: 'fill-primary/20 stroke-primary-active',
  low: 'fill-surface-card stroke-ink',
  floating: 'fill-canvas stroke-muted',
  conflict: 'fill-error/20 stroke-error',
};

const points = (line: readonly { x: number; y: number }[]) =>
  line.map((p) => `${p.x},${p.y}`).join(' ');

function Gate({ gate, active }: { gate: DiagramGate; active: boolean }) {
  const bubble = GATE_BUBBLE[gate.kind];
  const stroke = active ? 'stroke-primary-active' : 'stroke-ink';
  return (
    <g transform={`translate(${gate.x} ${gate.y})${gate.flip ? ' scale(-1 1)' : ''}`}>
      <path
        d={GATE_PATH[gate.kind]}
        className={`${stroke} transition-colors duration-150 ${active ? 'fill-primary/15' : 'fill-canvas'}`}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      {bubble ? (
        <circle
          cx={bubble.x}
          cy={0}
          r={bubble.r}
          className={`${stroke} fill-canvas transition-colors duration-150`}
          strokeWidth={2}
        />
      ) : null}
    </g>
  );
}

function Pin({
  pin,
  active,
  state,
  onFocus,
}: {
  pin: DiagramPin;
  active: boolean;
  state?: NetState;
  onFocus: (focus: DiagramFocus) => void;
}) {
  return (
    <g
      data-pin={pin.number}
      className="cursor-pointer"
      onPointerEnter={() => onFocus({ pin: pin.number, gate: pin.gate })}
      onPointerLeave={() => onFocus({ pin: null, gate: null })}
      onPointerDown={() => onFocus({ pin: pin.number, gate: pin.gate })}
    >
      <rect
        x={pin.x - PIN_BOX.width / 2}
        y={pin.y - PIN_BOX.height / 2}
        width={PIN_BOX.width}
        height={PIN_BOX.height}
        rx={2}
        strokeWidth={2}
        strokeDasharray={!active && state === 'floating' ? '4 3' : undefined}
        data-state={state}
        className={`transition-colors duration-150 ${
          active
            ? 'fill-primary stroke-primary-active'
            : state
              ? STATE_STYLE[state]
              : 'fill-canvas stroke-ink'
        }`}
      />
      <text
        x={pin.x}
        y={pin.y + 6}
        textAnchor="middle"
        fontSize={17}
        fontWeight={500}
        className={`select-none ${active ? 'fill-on-primary' : 'fill-ink'}`}
      >
        {pin.number}
      </text>
    </g>
  );
}

/**
 * The pin diagram of one chip, like the one in a datasheet. Pointing at a pin lights it and its
 * gate; pointing at a gate lights its symbol, its leads and its pins.
 */
export function IcDiagram({ type, focus, onFocus, pinStates }: IcDiagramProps) {
  const diagram = useMemo(() => buildIcDiagram(type), [type]);
  const gateOf = (pin: DiagramPin) => pin.gate !== null && pin.gate === focus.gate;
  return (
    <svg
      viewBox={`0 0 ${DIAGRAM_SIZE.width} ${DIAGRAM_SIZE.height}`}
      role="img"
      aria-label={diagram.title}
      className="block h-auto w-full touch-manipulation"
      fontFamily="Inter, 'Helvetica Neue', Arial, sans-serif"
    >
      <desc>{diagramDescription(diagram)}</desc>
      <path
        d={BODY_PATH}
        className="fill-canvas stroke-ink"
        strokeWidth={2.5}
        strokeLinejoin="round"
      />
      <text
        x={SUPPLY_LABELS.vcc.x}
        y={SUPPLY_LABELS.vcc.y}
        textAnchor="middle"
        fontSize={15}
        className={`select-none ${focus.pin === 14 ? 'fill-primary-active' : 'fill-muted'}`}
      >
        VCC
      </text>
      <text
        x={SUPPLY_LABELS.gnd.x}
        y={SUPPLY_LABELS.gnd.y}
        textAnchor="middle"
        fontSize={15}
        className={`select-none ${focus.pin === 7 ? 'fill-primary-active' : 'fill-muted'}`}
      >
        GND
      </text>

      {diagram.gates.map((gate) => {
        const active = focus.gate === gate.index;
        return (
          <g
            key={gate.index}
            data-gate={gate.index}
            className="cursor-pointer"
            onPointerEnter={() => onFocus({ pin: null, gate: gate.index })}
            onPointerLeave={() => onFocus({ pin: null, gate: null })}
            onPointerDown={() => onFocus({ pin: null, gate: gate.index })}
          >
            {gate.leads.map((lead, k) => (
              <polyline
                key={k}
                points={points(lead)}
                fill="none"
                strokeWidth={2}
                strokeLinejoin="round"
                className={`transition-colors duration-150 ${active ? 'stroke-primary-active' : 'stroke-ink'}`}
              />
            ))}
            <Gate gate={gate} active={active} />
            {/* a wider, invisible target around the symbol, for a finger */}
            <rect
              x={Math.min(gate.x, gate.x + (gate.flip ? -1 : 1) * gate.width) - 4}
              y={gate.y - 24}
              width={gate.width + 8}
              height={48}
              fill="transparent"
            />
          </g>
        );
      })}

      {diagram.pins.map((pin) => (
        <Pin
          key={pin.number}
          pin={pin}
          active={focus.pin === pin.number || gateOf(pin)}
          state={pinStates?.[pin.number]}
          onFocus={onFocus}
        />
      ))}
    </svg>
  );
}
