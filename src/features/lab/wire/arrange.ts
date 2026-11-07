import { breadboardFrame, icFrame, pointPosition, type Position } from '../board/geometry';
import { BOARD_COUNT, BOARD_SIZE } from '../board/layout';
import type { PlacedIc } from '../sim/evaluate';
import { controlPoint, isStraight, type Bend } from './curve';

/**
 * Automatic wire arrangement: chooses how much each wire bows so that wires do not lie on top of
 * each other, cross as little as possible and keep off the chips. Only the bend of a wire changes,
 * never where it is plugged, so the circuit does the same as before.
 *
 * Each wire may bow sideways by one of a few amounts, to either side (a bend of 0 is a straight
 * wire). A wire's cost is the sum over the other wires of: crossings, running close alongside,
 * and passing over a plug; plus passing over a chip, leaving the board, and the length of the bend
 * itself, so a wire stays straight unless something is in its way. The wires are visited from the
 * longest to the shortest and each takes its cheapest bend given where all the others are now;
 * this repeats until nobody moves. The costs between two wires are symmetric, so every move lowers
 * the total and the loop ends. Nothing is random: the same circuit gives the same result.
 */

export type ArrangeWire = { id: string; from: string; to: string };

/** Points sampled along each curve. */
const SAMPLES = 16;
/** The middle part of a curve that is compared with other wires; the ends sit next to their holes. */
const FIRST = 2;
const LAST = SAMPLES - 2;
/** Distance, between the centers of two wires, below which they are too close, in board px. */
export const CLEARANCE = 12;
/** Distance from a plug below which a wire passing it covers it. */
const PLUG_CLEARANCE = 9;
/** The room kept around a chip body. */
const CHIP_MARGIN = 3;

const W_CROSS = 300;
const W_CLOSE = 1.5;
const W_PLUG = 400;
const W_CHIP = 90;
const W_OUTSIDE = 100;
/** A wire between two holes of one breadboard stays over that breadboard. */
const W_OFF_BOARD = 30;
/** Cost of each px of bend: only breaks ties between bends that are otherwise as good. */
const W_BEND = 1.6;
const MAX_ROUNDS = 6;

/** How far a bend may be at most, for a wire of this length, in board px. */
export const bendCap = (length: number): number => Math.min(260, Math.max(90, length * 1.2));

const STEPS = [0, 7, 14, 21, 28, 38, 50, 64, 82, 105, 135, 170, 220];

type Box = { x0: number; y0: number; x1: number; y1: number };
type Curve = { samples: Position[]; box: Box; a: Position; b: Position };

const boxOf = (points: readonly Position[]): Box => {
  const box = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity };
  for (const p of points) {
    box.x0 = Math.min(box.x0, p.x);
    box.y0 = Math.min(box.y0, p.y);
    box.x1 = Math.max(box.x1, p.x);
    box.y1 = Math.max(box.y1, p.y);
  }
  return box;
};

const apart = (p: Box, q: Box, margin: number) =>
  p.x1 + margin < q.x0 || q.x1 + margin < p.x0 || p.y1 + margin < q.y0 || q.y1 + margin < p.y0;

/** The curve of a wire from `a` to `b` bent by `bend`, as `SAMPLES + 1` points. */
export function curveSamples(a: Position, b: Position, bend: Bend): Position[] {
  const straight = isStraight(bend);
  const c = controlPoint(a, b, bend);
  const out: Position[] = [];
  for (let i = 0; i <= SAMPLES; i++) {
    const t = i / SAMPLES;
    if (straight) {
      out.push({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
    } else {
      const u = 1 - t;
      out.push({
        x: u * u * a.x + 2 * u * t * c.x + t * t * b.x,
        y: u * u * a.y + 2 * u * t * c.y + t * t * b.y,
      });
    }
  }
  return out;
}

const makeCurve = (a: Position, b: Position, bend: Bend): Curve => {
  const samples = curveSamples(a, b, bend);
  return { samples, box: boxOf(samples), a, b };
};

const cross2 = (o: Position, p: Position, q: Position) =>
  (p.x - o.x) * (q.y - o.y) - (p.y - o.y) * (q.x - o.x);

/** Whether the segments p1-p2 and q1-q2 cross each other. */
function segmentsCross(p1: Position, p2: Position, q1: Position, q2: Position): boolean {
  const d1 = cross2(q1, q2, p1);
  const d2 = cross2(q1, q2, p2);
  const d3 = cross2(p1, p2, q1);
  const d4 = cross2(p1, p2, q2);
  return ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0));
}

/** How many times two curves cross. */
export function crossings(p: readonly Position[], q: readonly Position[]): number {
  let count = 0;
  for (let i = 1; i < p.length; i++) {
    for (let j = 1; j < q.length; j++) {
      if (segmentsCross(p[i - 1]!, p[i]!, q[j - 1]!, q[j]!)) count++;
    }
  }
  return count;
}

const dist2 = (p: Position, q: Position) => (p.x - q.x) ** 2 + (p.y - q.y) ** 2;

/** One direction of the "too close" cost: the middle of `p` against the middle of `q`. */
function closeness(p: readonly Position[], q: readonly Position[]): number {
  let cost = 0;
  for (let i = FIRST; i <= LAST; i++) {
    let best = Infinity;
    for (let j = FIRST; j <= LAST; j++) best = Math.min(best, dist2(p[i]!, q[j]!));
    const d = Math.sqrt(best);
    if (d < CLEARANCE) cost += (CLEARANCE - d) ** 2 * W_CLOSE;
  }
  return cost;
}

/** One direction of the plug cost: the middle of `p` passing over an end of `q`. */
function overPlug(p: readonly Position[], q: Curve): number {
  let cost = 0;
  for (const end of [q.a, q.b]) {
    for (let i = FIRST; i <= LAST; i++) {
      if (dist2(p[i]!, end) < PLUG_CLEARANCE ** 2) {
        cost += W_PLUG;
        break;
      }
    }
  }
  return cost;
}

/** What two wires cost each other. Symmetric: swapping them gives the same number. */
function pairCost(p: Curve, q: Curve): number {
  if (apart(p.box, q.box, CLEARANCE)) return 0;
  return (
    crossings(p.samples, q.samples) * W_CROSS +
    closeness(p.samples, q.samples) +
    closeness(q.samples, p.samples) +
    overPlug(p.samples, q) +
    overPlug(q.samples, p)
  );
}

type Rect = { x0: number; y0: number; x1: number; y1: number };

function ownCost(curve: Curve, chips: readonly Rect[], home: Rect | null, bend: number): number {
  let cost = Math.abs(bend) * W_BEND;
  for (const p of curve.samples) {
    if (home && (p.x < home.x0 || p.x > home.x1 || p.y < home.y0 || p.y > home.y1)) {
      cost += W_OFF_BOARD;
    }
    if (p.x < 0 || p.y < 0 || p.x > BOARD_SIZE.width || p.y > BOARD_SIZE.height) cost += W_OUTSIDE;
    for (const r of chips) {
      if (p.x > r.x0 && p.x < r.x1 && p.y > r.y0 && p.y < r.y1) {
        cost += W_CHIP;
        break;
      }
    }
  }
  return cost;
}

type Item = {
  id: string;
  a: Position;
  b: Position;
  length: number;
  /** Unit vector at a right angle to the wire */
  normal: Position;
  bend: number;
  curve: Curve;
  /** The breadboard that both ends are on, if they are on one */
  home: Rect | null;
};

const bendVector = (item: Item, amount: number): Bend => ({
  // + 0 turns a negative zero into a zero
  x: Math.round(item.normal.x * amount) + 0,
  y: Math.round(item.normal.y * amount) + 0,
});

/**
 * The bend for every wire. Wires with a point that is not on the board are left out of the answer.
 * The result is by wire id; a wire that should be straight has a bend of 0.
 */
export function arrangeWires(
  wires: readonly ArrangeWire[],
  ics: readonly PlacedIc[],
): Map<string, Bend> {
  const chips: Rect[] = [];
  for (const ic of ics) {
    const frame = icFrame(ic.board, ic.col);
    if (!frame) continue;
    chips.push({
      x0: frame.x - CHIP_MARGIN,
      y0: frame.y - CHIP_MARGIN,
      x1: frame.x + frame.width + CHIP_MARGIN,
      y1: frame.y + frame.height + CHIP_MARGIN,
    });
  }

  const frames: Rect[] = [];
  for (let board = 0; board < BOARD_COUNT; board++) {
    const frame = breadboardFrame(board);
    if (frame) frames.push({ x0: frame.left, y0: frame.top, x1: frame.right, y1: frame.bottom });
  }
  const within = (r: Rect, p: Position) => p.x >= r.x0 && p.x <= r.x1 && p.y >= r.y0 && p.y <= r.y1;

  const items: Item[] = [];
  for (const wire of wires) {
    const a = pointPosition(wire.from);
    const b = pointPosition(wire.to);
    if (!a || !b) continue;
    const length = Math.hypot(b.x - a.x, b.y - a.y);
    const normal =
      length === 0 ? { x: 0, y: 0 } : { x: -(b.y - a.y) / length, y: (b.x - a.x) / length };
    items.push({
      id: wire.id,
      a,
      b,
      length,
      normal,
      bend: 0,
      curve: makeCurve(a, b, { x: 0, y: 0 }),
      home: frames.find((frame) => within(frame, a) && within(frame, b)) ?? null,
    });
  }

  // the longest wires choose first; the id keeps the order the same on every run
  const order = [...items].sort((p, q) => q.length - p.length || (p.id < q.id ? -1 : 1));

  for (let round = 0; round < MAX_ROUNDS; round++) {
    let moved = false;
    for (const item of order) {
      const others = items.filter((other) => other !== item);
      const cap = bendCap(item.length);
      let best = item.bend;
      let bestCost = Infinity;
      for (const step of STEPS) {
        if (step > cap) break;
        for (const amount of step === 0 ? [0] : [step, -step]) {
          const curve =
            amount === item.bend ? item.curve : makeCurve(item.a, item.b, bendVector(item, amount));
          let cost = ownCost(curve, chips, item.home, amount);
          for (const other of others) cost += pairCost(curve, other.curve);
          // strictly cheaper wins, so a tie keeps the smaller bend (the steps are in order)
          if (cost < bestCost - 1e-9) {
            bestCost = cost;
            best = amount;
          }
        }
      }
      if (best !== item.bend) {
        item.bend = best;
        item.curve = makeCurve(item.a, item.b, bendVector(item, best));
        moved = true;
      }
    }
    if (!moved) break;
  }

  return new Map(items.map((item) => [item.id, bendVector(item, item.bend)]));
}
