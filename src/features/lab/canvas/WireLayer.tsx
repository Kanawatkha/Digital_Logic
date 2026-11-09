import { pointPosition, type Position } from '../board/geometry';
import { PITCH } from '../board/layout';
import { EDIT_COLORS, SIGNAL_COLORS, WIRE_COLORS, type WireColor } from '../board/palette';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import type { NetState } from '../sim/evaluate';
import type { LabWire } from '../state/circuit';
import { handlePoint, wirePath, type Bend } from '../wire/curve';
import type { KeyboardCursor } from './useKeyboardWiring';
import type { Hover, Preview } from './useWireTool';

/** Thickness of a wire and the radius of the plug in a hole, in board px. */
const WIRE_WIDTH = 4;
const PLUG_RADIUS = 4.9;
/** Size of the handles and of the area that catches a press on a wire, in screen px. */
const HANDLE_PX = 8;
const HANDLE_HIT_PX = 20;
const WIRE_HIT_PX = 12;

type WireLayerProps = {
  wires: readonly LabWire[];
  selected: string | null;
  preview: Preview | null;
  hover: Hover | null;
  /** The board scale, so handles and hit areas keep their size on screen */
  scale: number;
  color: WireColor;
  /** The cursor of keyboard wiring, when it is on */
  keyboard?: KeyboardCursor | null;
  /** Wires that were just rearranged: where each was, so that it can glide from there. `id` counts the rearrangements */
  glide?: { from: ReadonlyMap<string, Bend>; id: number } | null;
  /** The signal view: what the net at a point carries; without it the wires are drawn as they are */
  signal?: ((pointId: string) => NetState) | null;
  /** The net a student is looking at: its wires get a halo and the points on it a ring */
  net?: { wireIds: ReadonlySet<string>; points: readonly string[] } | null;
};

const GLIDE_MS = 380;
/** A wire that is painted another color fades to it */
const COLOR_FADE = 'transition-[stroke,fill] duration-300';
const easeOut = (t: number) => 1 - (1 - t) ** 3;
const reducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

type Shape = { a: Position; b: Position; bend: Bend };

/** Where a saved wire is drawn, following a drag in progress. */
function shapeOf(wire: LabWire, preview: Preview | null, shown: Bend): Shape | null {
  let a = pointPosition(wire.from);
  let b = pointPosition(wire.to);
  let bend = shown;
  if (preview?.kind === 'end' && preview.wireId === wire.id) {
    if (preview.end === 'from') a = preview.position;
    else b = preview.position;
  } else if (preview?.kind === 'bend' && preview.wireId === wire.id) {
    bend = preview.bend;
  }
  return a && b ? { a, b, bend } : null;
}

/** The look of a wire that has just been put on the board: it is drawn in, and its plugs follow. */
const drawIn = (order: number | undefined): CSSProperties | undefined =>
  order === undefined ? undefined : ({ '--i': Math.min(order, 12) } as CSSProperties);

function Plug({ at, color, fresh }: { at: Position; color: WireColor; fresh?: number }) {
  const { body, edge } = WIRE_COLORS[color];
  return (
    <g
      pointerEvents="none"
      className={fresh === undefined ? undefined : 'lab-plug-in'}
      style={drawIn(fresh)}
    >
      <circle
        cx={at.x}
        cy={at.y}
        r={PLUG_RADIUS}
        fill={body}
        stroke={edge}
        strokeWidth={1.2}
        className={COLOR_FADE}
      />
      <circle cx={at.x} cy={at.y} r={1.5} fill={edge} opacity={0.55} />
    </g>
  );
}

function Rope({
  shape,
  color,
  opacity = 1,
  fresh,
}: {
  shape: Shape;
  color: WireColor;
  opacity?: number;
  fresh?: number;
}) {
  const { body, edge } = WIRE_COLORS[color];
  const d = wirePath(shape.a, shape.b, shape.bend);
  const grow = fresh === undefined ? '' : ' lab-wire-in';
  return (
    <g
      pointerEvents="none"
      opacity={opacity}
      fill="none"
      strokeLinecap="round"
      style={drawIn(fresh)}
    >
      <path
        d={d}
        stroke={edge}
        strokeWidth={WIRE_WIDTH + 1.6}
        pathLength={1}
        className={COLOR_FADE + grow}
      />
      <path
        d={d}
        stroke={body}
        strokeWidth={WIRE_WIDTH}
        pathLength={1}
        className={COLOR_FADE + grow}
      />
    </g>
  );
}

/** What a wire carries, drawn round it (1 glows, a clash is red) and over it (0 a dark core, nothing dashes). */
function SignalSkin({ d, state, over }: { d: string; state: NetState; over: boolean }) {
  if (!over) {
    if (state !== 'high' && state !== 'conflict') return null;
    return (
      <path
        d={d}
        data-signal={state}
        fill="none"
        stroke={state === 'high' ? SIGNAL_COLORS.high : SIGNAL_COLORS.conflict}
        strokeWidth={WIRE_WIDTH + 7}
        strokeLinecap="round"
        opacity={0.62}
        pointerEvents="none"
        className="lab-signal-glow"
      />
    );
  }
  if (state === 'low') {
    return (
      <path
        d={d}
        data-signal="low"
        fill="none"
        stroke={SIGNAL_COLORS.low}
        strokeWidth={1.4}
        strokeLinecap="round"
        opacity={0.55}
        pointerEvents="none"
      />
    );
  }
  if (state === 'floating') {
    return (
      <path
        d={d}
        data-signal="floating"
        fill="none"
        stroke={SIGNAL_COLORS.floating}
        strokeWidth={WIRE_WIDTH - 1}
        strokeDasharray="2.5 6"
        strokeLinecap="butt"
        opacity={0.8}
        pointerEvents="none"
      />
    );
  }
  return null;
}

function Ring({ at, radius, filled = false }: { at: Position; radius: number; filled?: boolean }) {
  return (
    <circle
      cx={at.x}
      cy={at.y}
      r={radius}
      fill={filled ? EDIT_COLORS.halo : 'none'}
      fillOpacity={0.22}
      stroke={EDIT_COLORS.halo}
      strokeWidth={2}
      vectorEffect="non-scaling-stroke"
      pointerEvents="none"
    />
  );
}

/**
 * The jumper wires over the board: each is a curve with a plug in both holes. The selected wire
 * gets a halo, rings on its ends and a handle in the middle that bends it. Drags in progress
 * (`preview`) are drawn here too, before they are saved.
 */
export function WireLayer({
  wires,
  selected,
  preview,
  hover,
  scale,
  color,
  keyboard = null,
  glide = null,
  signal = null,
  net = null,
}: WireLayerProps) {
  // a wire that is new to the board is drawn in, one after the other when there are many (the
  // answer of a task); the wires that were there when the page opened are not
  const [known, setKnown] = useState<ReadonlySet<string>>(() => new Set(wires.map((w) => w.id)));
  const [fresh, setFresh] = useState<ReadonlyMap<string, number>>(new Map());
  const ids = new Set(wires.map((wire) => wire.id));
  const unseen = wires.filter((wire) => !known.has(wire.id));
  const gone = [...known].filter((id) => !ids.has(id));
  if (unseen.length > 0 || gone.length > 0) {
    setKnown(new Set([...known].filter((id) => ids.has(id)).concat(unseen.map((w) => w.id))));
    setFresh((was) => {
      const next = new Map([...was].filter(([id]) => ids.has(id)));
      unseen.forEach((wire, order) => next.set(wire.id, order));
      return next;
    });
  }
  // a rearrangement glides: the wires are drawn between their old bend and their new one
  const [seen, setSeen] = useState(glide?.id ?? 0);
  const [from, setFrom] = useState<ReadonlyMap<string, Bend> | null>(null);
  const [progress, setProgress] = useState(1);
  if (glide && glide.id !== seen) {
    setSeen(glide.id);
    setFrom(glide.from);
    setProgress(reducedMotion() ? 1 : 0);
  }
  useEffect(() => {
    if (seen === 0 || reducedMotion()) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / GLIDE_MS);
      setProgress(easeOut(t));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen]);
  const shownBend = (wire: LabWire): Bend => {
    const before = progress < 1 ? from?.get(wire.id) : undefined;
    if (!before) return wire.bend;
    return {
      x: before.x + (wire.bend.x - before.x) * progress,
      y: before.y + (wire.bend.y - before.y) * progress,
    };
  };

  const ordered = [...wires].sort((x, y) => Number(x.id === selected) - Number(y.id === selected));
  const px = (screen: number) => screen / scale;
  const draftFrom = preview?.kind === 'draft' ? pointPosition(preview.from) : null;

  return (
    <g>
      {ordered.map((wire) => {
        const shape = shapeOf(wire, preview, shownBend(wire));
        if (!shape) return null;
        const isSelected = wire.id === selected;
        const isOnNet = net?.wireIds.has(wire.id) === true;
        const order = fresh.get(wire.id);
        const d = wirePath(shape.a, shape.b, shape.bend);
        const state = signal ? signal(wire.from) : null;
        return (
          <g key={wire.id}>
            {isOnNet && !isSelected ? (
              <path
                d={d}
                data-net-wire={wire.id}
                fill="none"
                stroke={EDIT_COLORS.halo}
                strokeWidth={WIRE_WIDTH + 7}
                strokeLinecap="round"
                opacity={0.5}
                pointerEvents="none"
              />
            ) : null}
            {state ? <SignalSkin d={d} state={state} over={false} /> : null}
            {isSelected ? (
              <path
                d={wirePath(shape.a, shape.b, shape.bend)}
                fill="none"
                stroke={EDIT_COLORS.halo}
                strokeWidth={WIRE_WIDTH + 7}
                strokeLinecap="round"
                opacity={0.5}
                pointerEvents="none"
              />
            ) : null}
            <Rope shape={shape} color={wire.color} fresh={order} />
            {state ? <SignalSkin d={d} state={state} over /> : null}
            <Plug at={shape.a} color={wire.color} fresh={order} />
            <Plug at={shape.b} color={wire.color} fresh={order} />
            <path
              data-wire-id={wire.id}
              d={wirePath(shape.a, shape.b, shape.bend)}
              fill="none"
              stroke="transparent"
              strokeWidth={Math.max(px(WIRE_HIT_PX), WIRE_WIDTH + 2)}
              strokeLinecap="round"
              pointerEvents="stroke"
            />
            {isSelected ? (
              <>
                <Ring at={shape.a} radius={PITCH * 0.55} />
                <Ring at={shape.b} radius={PITCH * 0.55} />
                <g data-lab-handle={wire.id}>
                  <circle
                    cx={handlePoint(shape.a, shape.b, shape.bend).x}
                    cy={handlePoint(shape.a, shape.b, shape.bend).y}
                    r={px(HANDLE_HIT_PX)}
                    fill="transparent"
                    pointerEvents="all"
                  />
                  <circle
                    cx={handlePoint(shape.a, shape.b, shape.bend).x}
                    cy={handlePoint(shape.a, shape.b, shape.bend).y}
                    r={px(HANDLE_PX)}
                    fill={EDIT_COLORS.handle}
                    stroke={EDIT_COLORS.handleEdge}
                    strokeWidth={2}
                    vectorEffect="non-scaling-stroke"
                    pointerEvents="none"
                  />
                </g>
              </>
            ) : null}
          </g>
        );
      })}

      {net
        ? net.points.map((id) => {
            const at = pointPosition(id);
            return at ? <Ring key={id} at={at} radius={PITCH * 0.6} /> : null;
          })
        : null}

      {preview?.kind === 'draft' && draftFrom ? (
        <>
          <Rope shape={{ a: draftFrom, b: preview.end, bend: { x: 0, y: 0 } }} color={color} />
          <Plug at={draftFrom} color={color} />
          <Plug at={preview.end} color={color} />
        </>
      ) : null}

      {preview && 'snapAt' in preview && preview.snapAt ? (
        <Ring at={preview.snapAt} radius={PITCH * 0.7} filled />
      ) : null}
      {!preview && hover?.at ? <Ring at={hover.at} radius={PITCH * 0.55} filled /> : null}

      {keyboard ? (
        <g data-lab-keyboard-cursor="">
          {keyboard.from ? (
            <>
              <Rope
                shape={{ a: keyboard.from.at, b: keyboard.at, bend: { x: 0, y: 0 } }}
                color={color}
              />
              <Plug at={keyboard.from.at} color={color} />
            </>
          ) : null}
          <circle
            cx={keyboard.at.x}
            cy={keyboard.at.y}
            r={PITCH * 0.85}
            fill={EDIT_COLORS.halo}
            fillOpacity={0.2}
            stroke={EDIT_COLORS.halo}
            strokeWidth={2.5}
            strokeDasharray="5 3"
            vectorEffect="non-scaling-stroke"
            pointerEvents="none"
          />
        </g>
      ) : null}
    </g>
  );
}
