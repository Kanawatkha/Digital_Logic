import { pointPosition, type Position } from '../board/geometry';
import { PITCH } from '../board/layout';
import { EDIT_COLORS, WIRE_COLORS, type WireColor } from '../board/palette';
import { useEffect, useState } from 'react';
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

function Plug({ at, color }: { at: Position; color: WireColor }) {
  const { body, edge } = WIRE_COLORS[color];
  return (
    <g pointerEvents="none">
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

function Rope({ shape, color, opacity = 1 }: { shape: Shape; color: WireColor; opacity?: number }) {
  const { body, edge } = WIRE_COLORS[color];
  const d = wirePath(shape.a, shape.b, shape.bend);
  return (
    <g pointerEvents="none" opacity={opacity} fill="none" strokeLinecap="round">
      <path d={d} stroke={edge} strokeWidth={WIRE_WIDTH + 1.6} className={COLOR_FADE} />
      <path d={d} stroke={body} strokeWidth={WIRE_WIDTH} className={COLOR_FADE} />
    </g>
  );
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
}: WireLayerProps) {
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
        return (
          <g key={wire.id}>
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
            <Rope shape={shape} color={wire.color} />
            <Plug at={shape.a} color={wire.color} />
            <Plug at={shape.b} color={wire.color} />
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
