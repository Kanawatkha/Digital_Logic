import { forwardRef } from 'react';
import { UI_TEXT } from '@/config/site';
import { GATE_BUBBLE, GATE_PATH, GATE_WIDTH } from '../diagram/pinDiagram';
import { GATE_SCALE, type DiagramLayout, type LEdge, type LNode } from './diagramLayout';

type ResultDiagramProps = {
  layout: DiagramLayout;
  /** What a signal carries now (see `signalKey`): 1, 0, or null when it is not known */
  value: (signal: string) => boolean | null;
  /** 1 is the size it is laid out at; null fills the width it is given */
  scale: number | null;
  /** For a screen reader: the circuit in words */
  description: string;
};

const line = (points: readonly { x: number; y: number }[]) =>
  points.map((p) => `${p.x},${p.y}`).join(' ');

function Edge({ edge, value }: { edge: LEdge; value: boolean | null }) {
  const color =
    value === null ? 'stroke-muted-soft' : value ? 'stroke-primary-active' : 'stroke-ink';
  return (
    <polyline
      data-edge={edge.id}
      points={line(edge.points)}
      fill="none"
      strokeWidth={value ? 3.2 : 2.6}
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeDasharray={edge.back ? '7 5' : undefined}
      className={`${color} transition-colors duration-200`}
    />
  );
}

function SourceBox({ node }: { node: LNode }) {
  const width = node.outX - node.x;
  const bad = node.kind === 'conflict';
  const loose = node.kind === 'floating';
  const sub =
    node.kind === 'input'
      ? `${UI_TEXT.labResultsSwitch} ${(node.switchIndex ?? 0) + 1}`
      : node.kind === 'const'
        ? node.value
          ? UI_TEXT.labResultsSupply
          : UI_TEXT.labResultsGround
        : loose
          ? UI_TEXT.labResultsLoose
          : '';
  return (
    <g data-node={node.id}>
      <rect
        x={node.x}
        y={node.y - 20}
        width={width}
        height={40}
        rx={8}
        strokeWidth={2.4}
        strokeDasharray={loose ? '5 4' : undefined}
        className={`fill-canvas ${bad ? 'stroke-error' : 'stroke-ink'}`}
      />
      <text
        x={node.x + 15}
        y={node.y + 7}
        fontSize={21}
        fontWeight={600}
        className="fill-ink select-none"
      >
        {node.label}
      </text>
      <text x={node.x + 40} y={node.y + 5.5} fontSize={13} className="fill-muted select-none">
        {sub}
      </text>
    </g>
  );
}

function GateShape({ node }: { node: LNode }) {
  const gate = node.gate!;
  const bubble = GATE_BUBBLE[gate.kind];
  const width = GATE_WIDTH[gate.kind] * GATE_SCALE;
  const stroke = gate.powered ? 'stroke-ink' : 'stroke-error';
  return (
    <g data-node={node.id}>
      <g transform={`translate(${node.x} ${node.y}) scale(${GATE_SCALE})`}>
        <path
          d={GATE_PATH[gate.kind]}
          strokeWidth={1.9}
          strokeLinejoin="round"
          strokeDasharray={gate.powered ? undefined : '5 3'}
          className={`fill-canvas ${stroke}`}
        />
        {bubble ? (
          <circle
            cx={bubble.x}
            r={bubble.r}
            strokeWidth={1.9}
            className={`fill-canvas ${stroke}`}
          />
        ) : null}
      </g>
      <text
        x={node.x + width / 2}
        y={node.y + 43}
        textAnchor="middle"
        fontSize={15}
        fontWeight={600}
        className="fill-ink select-none"
      >
        {node.label}
      </text>
      <text
        x={node.x + width / 2}
        y={node.y + 60}
        textAnchor="middle"
        fontSize={12}
        className={`select-none ${gate.powered ? 'fill-muted' : 'fill-error'}`}
      >
        {gate.powered ? gate.type : UI_TEXT.labResultsNoPower}
      </text>
    </g>
  );
}

function Led({ node, lit }: { node: LNode; lit: boolean | null }) {
  return (
    <g data-node={node.id}>
      <line
        x1={node.x}
        y1={node.y}
        x2={node.x + 16}
        y2={node.y}
        strokeWidth={2.6}
        className="stroke-ink"
      />
      <circle
        cx={node.x + 30}
        cy={node.y}
        r={14}
        strokeWidth={2.6}
        className={`stroke-ink transition-colors duration-200 ${lit ? 'fill-error' : 'fill-surface-cream-strong'}`}
      />
      <text
        x={node.x + 52}
        y={node.y + 6}
        fontSize={18}
        fontWeight={600}
        className="fill-ink select-none"
      >
        LED {node.label}
      </text>
    </g>
  );
}

/**
 * The circuit as a gate diagram: the switches on the left, the gates in columns, the LEDs on the
 * right. A wire that is carrying a 1 now is orange, a 0 is black.
 */
export const ResultDiagram = forwardRef<SVGSVGElement, ResultDiagramProps>(function ResultDiagram(
  { layout, value, scale, description },
  ref,
) {
  // a signal that feeds more than one wire is marked where it leaves
  const fanOut = new Map<string, number>();
  for (const edge of layout.edges) fanOut.set(edge.from, (fanOut.get(edge.from) ?? 0) + 1);
  const into = new Map(layout.edges.map((edge) => [edge.to, edge]));
  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${layout.width} ${layout.height}`}
      width={scale === null ? '100%' : layout.width * scale}
      height={scale === null ? undefined : layout.height * scale}
      role="img"
      aria-label={UI_TEXT.labResultsCircuit}
      className={`block ${scale === null ? 'h-auto w-full' : 'max-w-none'}`}
      fontFamily="Inter, 'Helvetica Neue', Arial, sans-serif"
    >
      <desc>{description}</desc>
      {layout.edges.map((edge) => (
        <Edge key={edge.id} edge={edge} value={value(edge.signal)} />
      ))}
      {layout.nodes
        .filter((node) => (fanOut.get(node.id) ?? 0) > 1)
        .map((node) => (
          <circle key={`dot:${node.id}`} cx={node.outX} cy={node.y} r={3.6} className="fill-ink" />
        ))}
      {layout.nodes.map((node) => {
        if (node.kind === 'gate') return <GateShape key={node.id} node={node} />;
        if (node.kind === 'output') {
          const feeder = into.get(node.id);
          return <Led key={node.id} node={node} lit={feeder ? value(feeder.signal) : null} />;
        }
        return <SourceBox key={node.id} node={node} />;
      })}
    </svg>
  );
});
