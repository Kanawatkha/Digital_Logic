import { pointPosition, type Position } from '../board/geometry';
import type { WireColor } from '../board/palette';
import { createNets } from '../sim/nets';
import { GND_KEY, VCC_KEY, netKey, parsePoint } from '../sim/points';
import { CLEARANCE, crossings, curveSamples } from './arrange';
import type { Bend } from './curve';

/**
 * Automatic wire colors. The wires on the GND net are black and the wires on the +5V net are red,
 * wherever they are (a wire from the socket to a rail, from the rail to pin 7 of a chip). Every
 * other net, that is every signal, gets its own color from the rest of the palette, and all the
 * wires of one net share it, so a signal can be followed by its color. Nets whose wires cross or run
 * close to each other are given different colors as far as the palette allows. Nothing is random.
 */

export type PaintWire = { id: string; from: string; to: string; bend: Bend };

/**
 * The colors of the signals, in the order they are handed out: neighbors in this list differ most in
 * light and hue, which also helps with the colors red and green looking alike.
 */
export const SIGNAL_COLORS: readonly WireColor[] = [
  'blue',
  'yellow',
  'purple',
  'green',
  'white',
  'orange',
];

/** Distance between two wires at which they count as close, for the choice of colors. */
const CLOSE = CLEARANCE + 4;
/** Points of a curve compared, leaving out the ends, which sit next to their holes. */
const FIRST = 2;

type Box = { x0: number; y0: number; x1: number; y1: number };
type Curve = { samples: Position[]; box: Box };

const makeCurve = (a: Position, b: Position, bend: Bend): Curve => {
  const samples = curveSamples(a, b, bend);
  const box = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity };
  for (const p of samples) {
    box.x0 = Math.min(box.x0, p.x);
    box.y0 = Math.min(box.y0, p.y);
    box.x1 = Math.max(box.x1, p.x);
    box.y1 = Math.max(box.y1, p.y);
  }
  return { samples, box };
};

/** How much two curves get in each other's way: crossings count more than running close. */
function conflict(p: Curve, q: Curve): number {
  const m = CLOSE;
  if (
    p.box.x1 + m < q.box.x0 ||
    q.box.x1 + m < p.box.x0 ||
    p.box.y1 + m < q.box.y0 ||
    q.box.y1 + m < p.box.y0
  ) {
    return 0;
  }
  let weight = crossings(p.samples, q.samples) * 3;
  const last = p.samples.length - 1 - FIRST;
  const lastQ = q.samples.length - 1 - FIRST;
  let close = false;
  for (let i = FIRST; i <= last && !close; i++) {
    for (let j = FIRST; j <= lastQ; j++) {
      const dx = p.samples[i]!.x - q.samples[j]!.x;
      const dy = p.samples[i]!.y - q.samples[j]!.y;
      if (dx * dx + dy * dy < CLOSE * CLOSE) {
        close = true;
        break;
      }
    }
  }
  if (close) weight += 1;
  return weight;
}

/**
 * The color of every wire, by wire id. A wire on a net that holds both +5V and GND (a short) is left
 * out: there is no right color for it. Wires with a point that is not on the board are left out too.
 */
export function recolorWires(wires: readonly PaintWire[]): Map<string, WireColor> {
  const nets = createNets();
  const known: { wire: PaintWire; a: Position; b: Position }[] = [];
  for (const wire of wires) {
    const from = parsePoint(wire.from);
    const to = parsePoint(wire.to);
    const a = pointPosition(wire.from);
    const b = pointPosition(wire.to);
    if (!from || !to || !a || !b) continue;
    nets.union(netKey(from), netKey(to));
    known.push({ wire, a, b });
  }
  const vcc = nets.root(VCC_KEY);
  const gnd = nets.root(GND_KEY);

  // the wires of each net, in the order the nets first appear
  const byNet = new Map<string, { wire: PaintWire; curve: Curve }[]>();
  for (const { wire, a, b } of known) {
    const root = nets.root(netKey(parsePoint(wire.from)!));
    const list = byNet.get(root) ?? [];
    list.push({ wire, curve: makeCurve(a, b, wire.bend) });
    byNet.set(root, list);
  }

  const colors = new Map<string, WireColor>();
  const signals: string[] = [];
  for (const [root, list] of byNet) {
    if (vcc === gnd && root === vcc) continue;
    const fixed: WireColor | null = root === gnd ? 'black' : root === vcc ? 'red' : null;
    if (fixed) for (const { wire } of list) colors.set(wire.id, fixed);
    else signals.push(root);
  }

  // how much the signal nets get in each other's way
  const weight = new Map<string, Map<string, number>>(signals.map((root) => [root, new Map()]));
  signals.forEach((x, i) => {
    for (const y of signals.slice(i + 1)) {
      let total = 0;
      for (const p of byNet.get(x)!) {
        for (const q of byNet.get(y)!) total += conflict(p.curve, q.curve);
      }
      if (total > 0) {
        weight.get(x)!.set(y, total);
        weight.get(y)!.set(x, total);
      }
    }
  });

  // the nets that get in the most trouble choose first
  const busy = (root: string) => [...weight.get(root)!.values()].reduce((s, w) => s + w, 0);
  const order = signals
    .map((root, index) => ({ root, index }))
    .sort((p, q) => busy(q.root) - busy(p.root) || p.index - q.index)
    .map((item) => item.root);
  const chosen = new Map<string, WireColor>();
  const used = new Map<WireColor, number>();
  for (const root of order) {
    let best: WireColor = SIGNAL_COLORS[0]!;
    let bestScore = Infinity;
    for (const color of SIGNAL_COLORS) {
      let score = 0;
      for (const [other, w] of weight.get(root)!) if (chosen.get(other) === color) score += w;
      // between colors that are as good, the one used least, then the one first in the list
      const total = score * 1000 + (used.get(color) ?? 0);
      if (total < bestScore) {
        bestScore = total;
        best = color;
      }
    }
    chosen.set(root, best);
    used.set(best, (used.get(best) ?? 0) + 1);
  }
  for (const root of signals) {
    for (const { wire } of byNet.get(root)!) colors.set(wire.id, chosen.get(root)!);
  }
  return colors;
}
