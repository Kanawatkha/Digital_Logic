import { GATE_WIDTH } from '../diagram/pinDiagram';
import type { Pt } from '../diagram/pinDiagram';
import type { NetGate, Netlist, Signal } from './netlist';

/**
 * Where everything goes in the diagram of a circuit: switches and supplies on the left, the gates in
 * columns by how many gates lie between them and a switch, the LEDs on the right. Wires run in
 * straight lines with right angles; a wire that skips a column passes through a free place in it. A
 * wire that goes back (a feedback loop) loops under the diagram.
 */

export type LNodeKind = 'input' | 'const' | 'floating' | 'conflict' | 'gate' | 'output' | 'dummy';

export type LNode = {
  id: string;
  kind: LNodeKind;
  level: number;
  /** Where the wires come in on the left, and where they leave on the right */
  x: number;
  outX: number;
  /** The middle of the node */
  y: number;
  /** For a switch the letter, for a gate its name, for an LED its number as text */
  label: string;
  gate?: NetGate;
  led?: number;
  switchIndex?: number;
  value?: boolean;
  /** The name of an LED output, when it has one (a task output is called Y, not LED 1) */
  title?: string;
  /** The y of each input lead of a gate */
  inputYs: number[];
};

export type LEdge = {
  id: string;
  from: string;
  to: string;
  /** Which input of the gate it enters */
  pin: number;
  /** What it carries: see `signalKey` */
  signal: string;
  points: Pt[];
  /** A wire that goes back to an earlier column, round the bottom */
  back: boolean;
};

export type DiagramLayout = {
  nodes: LNode[];
  edges: LEdge[];
  /** The places where the wires of one signal branch, each of which is drawn with a dot */
  junctions: Pt[];
  width: number;
  height: number;
};

/** How much larger a gate symbol is drawn than the symbols of the pin diagrams */
export const GATE_SCALE = 1.35;
const MARGIN = 28;
const SOURCE_WIDTH = 112;
const OUTPUT_WIDTH = 124;
const SOURCE_HEIGHT = 40;
const GATE_HEIGHT = 80;
const DUMMY_HEIGHT = 14;
/** Empty space between the nodes of a column */
const GAP = 34;
/** Where a node starts, from the left of its column, for what is not a switch or a supply */
const INSET = 20;
const GATE_INPUT_OFFSET = 9 * GATE_SCALE;
/** The curved back of an OR or NOR is this far in at a lead `dy` (in symbol units) from the middle */
const curveIn = (dy: number) => {
  const t = (1 - Math.min(1, Math.abs(dy) / 18)) / 2;
  return 20 * t * (1 - t);
};
/** The narrowest the space between two columns is, and the room kept for each wire that has to change height in it */
const MIN_GAP = 70;
const CHANNEL_SPACING = 18;
const BACK_TRACK = 14;
/**
 * The least space between two wires of different signals that run side by side. Under it two wires
 * read as one, or as joined; it is half the distance between the two inputs of a gate.
 */
export const MIN_WIRE_GAP = 12;

/** The id of what a signal is, shared by the node that drives it and the wires that carry it. */
export function signalKey(signal: Signal): string {
  switch (signal.kind) {
    case 'input':
      return `in:${signal.index}`;
    case 'gate':
      return `g:${signal.id}`;
    case 'const':
      return signal.value ? 'c:1' : 'c:0';
    case 'floating':
      return 'f';
    case 'conflict':
      return 'x';
  }
}

/**
 * The order of the vertical channels in the gap between two columns, left to right. A wire runs
 * along its own height from the column on the left to its channel, and along the height of its
 * target from its channel to the column on the right. Two wires of different signals whose two
 * stretches would lie side by side (the start of one is at about the height where the other ends)
 * do not overlap when the first turns before the second does, so that order is asked for. Where
 * the wishes go round in a circle the usual order, by starting height, stands.
 */
function orderChannels<T extends { src: string; ya: number; yb: number }>(list: T[]): T[] {
  const first = list.map((_, i) => i);
  const before = list.map(() => new Set<number>());
  list.forEach((a, i) => {
    list.forEach((b, j) => {
      if (i === j || a.src === b.src) return;
      // the start of `a` and the end of `b` are side by side: `a` turns first
      if (Math.abs(a.ya - b.yb) < MIN_WIRE_GAP) before[j]!.add(i);
    });
  });
  const placed = new Set<number>();
  const out: T[] = [];
  while (out.length < list.length) {
    // the wire that no wire waiting still has to turn before, the first in the usual order
    const ready = first.find(
      (i) => !placed.has(i) && [...before[i]!].every((other) => placed.has(other)),
    );
    // a circle of wishes: the first one left goes, the usual order decides
    const next = ready ?? first.find((i) => !placed.has(i))!;
    placed.add(next);
    out.push(list[next]!);
  }
  return out;
}

/**
 * Where the wires of one signal branch: a point at which three or more directions meet, once the
 * wires that share a line are counted as one. Each such place is drawn with a dot.
 */
function junctionsOf(edges: readonly LEdge[]): Pt[] {
  type Line = { horizontal: boolean; at: number; from: number; to: number };
  const bySignal = new Map<string, LEdge[]>();
  for (const edge of edges) bySignal.set(edge.from, [...(bySignal.get(edge.from) ?? []), edge]);
  const found: Pt[] = [];
  for (const group of bySignal.values()) {
    if (group.length < 2) continue;
    const lines: Line[] = [];
    for (const edge of group) {
      for (let k = 1; k < edge.points.length; k++) {
        const a = edge.points[k - 1]!;
        const b = edge.points[k]!;
        if (a.x === b.x && a.y === b.y) continue;
        const horizontal = a.y === b.y;
        lines.push(
          horizontal
            ? { horizontal, at: a.y, from: Math.min(a.x, b.x), to: Math.max(a.x, b.x) }
            : { horizontal, at: a.x, from: Math.min(a.y, b.y), to: Math.max(a.y, b.y) },
        );
      }
    }
    // wires that lie on one another are one wire
    const merged: Line[] = [];
    for (const horizontal of [true, false]) {
      const same = lines
        .filter((l) => l.horizontal === horizontal)
        .sort((l, m) => l.at - m.at || l.from - m.from);
      let current: Line | null = null;
      for (const line of same) {
        if (current && current.at === line.at && line.from <= current.to) {
          current.to = Math.max(current.to, line.to);
        } else {
          if (current) merged.push(current);
          current = { ...line };
        }
      }
      if (current) merged.push(current);
    }
    const at = (line: Line, p: Pt) => (line.horizontal ? p.x : p.y);
    const across = (line: Line, p: Pt) => (line.horizontal ? p.y : p.x);
    const ends = new Map<string, Pt>();
    for (const line of merged) {
      const [a, b] = line.horizontal
        ? [
            { x: line.from, y: line.at },
            { x: line.to, y: line.at },
          ]
        : [
            { x: line.at, y: line.from },
            { x: line.at, y: line.to },
          ];
      ends.set(`${a.x},${a.y}`, a);
      ends.set(`${b.x},${b.y}`, b);
    }
    for (const p of ends.values()) {
      let directions = 0;
      for (const line of merged) {
        if (line.at !== across(line, p) || at(line, p) < line.from || at(line, p) > line.to)
          continue;
        if (at(line, p) > line.from) directions++;
        if (at(line, p) < line.to) directions++;
      }
      if (directions >= 3) found.push(p);
    }
  }
  return found;
}

/**
 * How many places there are where two wires of different signals lie side by side closer than
 * `MIN_WIRE_GAP` (or on one another), or where a wire ends or turns on the line of another signal.
 */
function crowdedPlaces(edges: readonly LEdge[]): number {
  type Seg = { src: string; horizontal: boolean; at: number; from: number; to: number };
  const segs: Seg[] = [];
  for (const edge of edges) {
    for (let k = 1; k < edge.points.length; k++) {
      const a = edge.points[k - 1]!;
      const b = edge.points[k]!;
      if (a.x === b.x && a.y === b.y) continue;
      const horizontal = a.y === b.y;
      segs.push({
        src: edge.from,
        horizontal,
        at: horizontal ? a.y : a.x,
        from: horizontal ? Math.min(a.x, b.x) : Math.min(a.y, b.y),
        to: horizontal ? Math.max(a.x, b.x) : Math.max(a.y, b.y),
      });
    }
  }
  let count = 0;
  for (let i = 0; i < segs.length; i++) {
    for (let j = i + 1; j < segs.length; j++) {
      const a = segs[i]!;
      const b = segs[j]!;
      if (a.src === b.src || a.horizontal !== b.horizontal) continue;
      if (Math.min(a.to, b.to) - Math.max(a.from, b.from) <= 0) continue;
      if (Math.abs(a.at - b.at) < MIN_WIRE_GAP) count++;
    }
  }
  for (const edge of edges) {
    for (const p of edge.points) {
      for (const s of segs) {
        if (s.src === edge.from) continue;
        const onLine = s.horizontal
          ? p.y === s.at && p.x > s.from && p.x < s.to
          : p.x === s.at && p.y > s.from && p.y < s.to;
        if (onLine) count++;
      }
    }
  }
  return count;
}

export function layoutDiagram(
  netlist: Netlist,
  nameOf: (switchIndex: number) => string,
  /** `inputsInOrder`: the switches are in the first column from the top in the order of their number (A, B, C), even if that costs a crossing */
  options: { inputsInOrder?: boolean } = {},
): DiagramLayout {
  const nodes = new Map<string, LNode>();
  const make = (node: Omit<LNode, 'x' | 'outX' | 'y' | 'level' | 'inputYs'>): LNode => {
    const full: LNode = { ...node, level: 0, x: 0, outX: 0, y: 0, inputYs: [] };
    nodes.set(node.id, full);
    return full;
  };

  for (const gate of netlist.gates) {
    make({
      id: `g:${gate.id}`,
      kind: 'gate',
      label: gate.label ?? `${gate.ic.toUpperCase()}·${gate.gate}`,
      gate,
    });
  }
  const sourceOf = (signal: Signal): string => {
    const id = signalKey(signal);
    if (nodes.has(id)) return id;
    switch (signal.kind) {
      case 'input':
        make({ id, kind: 'input', label: nameOf(signal.index), switchIndex: signal.index });
        break;
      case 'const':
        make({ id, kind: 'const', label: signal.value ? '1' : '0', value: signal.value });
        break;
      case 'floating':
        make({ id, kind: 'floating', label: '1' });
        break;
      case 'conflict':
        make({ id, kind: 'conflict', label: '?' });
        break;
      case 'gate':
        // a gate that is not in the circuit cannot be drawn: treat it as a loose end
        return sourceOf({ kind: 'floating' });
    }
    return id;
  };

  type Raw = { from: string; to: string; pin: number };
  const raw: Raw[] = [];
  for (const gate of netlist.gates) {
    gate.inputs.forEach((signal, pin) =>
      raw.push({ from: sourceOf(signal), to: `g:${gate.id}`, pin }),
    );
  }
  for (const output of netlist.outputs) {
    const id = `o:${output.led}`;
    make({ id, kind: 'output', label: String(output.led), led: output.led, title: output.name });
    raw.push({ from: sourceOf(output.source), to: id, pin: 0 });
  }

  // columns: a gate is one column to the right of the gates it reads
  const incoming = new Map<string, Raw[]>();
  for (const edge of raw) incoming.set(edge.to, [...(incoming.get(edge.to) ?? []), edge]);
  const levels = new Map<string, number>();
  const visiting = new Set<string>();
  const levelOf = (id: string): number => {
    const node = nodes.get(id);
    if (!node || node.kind !== 'gate') return 0;
    const known = levels.get(id);
    if (known !== undefined) return known;
    // a gate on the way here is read through a feedback wire, which does not count
    if (visiting.has(id)) return 0;
    visiting.add(id);
    let deepest = 0;
    for (const edge of incoming.get(id) ?? []) deepest = Math.max(deepest, levelOf(edge.from));
    visiting.delete(id);
    levels.set(id, deepest + 1);
    return deepest + 1;
  };
  let last = 0;
  for (const node of nodes.values()) {
    node.level = node.kind === 'gate' ? levelOf(node.id) : 0;
    last = Math.max(last, node.level);
  }
  for (const node of nodes.values()) if (node.kind === 'output') node.level = last + 1;
  const top = last + 1;

  // wires that skip a column pass through a free place in it
  type Chain = { edge: Raw; ids: string[]; back: boolean };
  const chains: Chain[] = [];
  raw.forEach((edge, index) => {
    const from = nodes.get(edge.from)!;
    const to = nodes.get(edge.to)!;
    if (from.level >= to.level) {
      chains.push({ edge, ids: [edge.from, edge.to], back: true });
      return;
    }
    const ids = [edge.from];
    for (let level = from.level + 1; level < to.level; level++) {
      const id = `d:${index}:${level}`;
      const dummy = make({ id, kind: 'dummy', label: '' });
      dummy.level = level;
      ids.push(id);
    }
    ids.push(edge.to);
    chains.push({ edge, ids, back: false });
  });

  const columns: string[][] = Array.from({ length: top + 1 }, () => []);
  for (const node of nodes.values()) columns[node.level]!.push(node.id);

  // order each column by the average place of its neighbors, a few sweeps each way
  const preds = new Map<string, string[]>();
  const succs = new Map<string, string[]>();
  for (const chain of chains) {
    if (chain.back) continue;
    for (let k = 1; k < chain.ids.length; k++) {
      const [a, b] = [chain.ids[k - 1]!, chain.ids[k]!];
      preds.set(b, [...(preds.get(b) ?? []), a]);
      succs.set(a, [...(succs.get(a) ?? []), b]);
    }
  }
  const place = new Map<string, number>();
  const refresh = () => columns.forEach((col) => col.forEach((id, i) => place.set(id, i)));
  const sweep = (col: string[], neighbors: ReadonlyMap<string, string[]>) => {
    const score = (id: string) => {
      const near = neighbors.get(id) ?? [];
      if (near.length === 0) return place.get(id) ?? 0;
      return near.reduce((sum, n) => sum + (place.get(n) ?? 0), 0) / near.length;
    };
    col.sort((a, b) => score(a) - score(b) || (place.get(a) ?? 0) - (place.get(b) ?? 0));
  };
  refresh();
  for (let round = 0; round < 4; round++) {
    for (let c = 1; c <= top; c++) {
      sweep(columns[c]!, preds);
      refresh();
    }
    for (let c = top - 1; c >= 0; c--) {
      sweep(columns[c]!, succs);
      refresh();
    }
  }
  if (options.inputsInOrder) {
    const first = columns[0]!;
    const index = (id: string) => nodes.get(id)?.switchIndex ?? 0;
    const inputs = first
      .filter((id) => nodes.get(id)?.kind === 'input')
      .sort((a, b) => index(a) - index(b));
    columns[0] = [...inputs, ...first.filter((id) => nodes.get(id)?.kind !== 'input')];
    refresh();
  }

  // places: first how high everything is, then, knowing how many wires have to change height
  // between two columns, how far apart the columns are
  const gateWidth = (node: LNode) => GATE_WIDTH[node.gate!.kind] * GATE_SCALE;
  const heightOf = (node: LNode) =>
    node.kind === 'gate' ? GATE_HEIGHT : node.kind === 'dummy' ? DUMMY_HEIGHT : SOURCE_HEIGHT;
  const columnHeight = (col: string[]) =>
    col.reduce((sum, id) => sum + heightOf(nodes.get(id)!), 0) + GAP * Math.max(0, col.length - 1);
  const tallest = Math.max(...columns.map(columnHeight), SOURCE_HEIGHT);
  for (const col of columns) {
    let y = MARGIN + (tallest - columnHeight(col)) / 2;
    for (const id of col) {
      const node = nodes.get(id)!;
      const h = heightOf(node);
      node.y = y + h / 2;
      y += h + GAP;
      if (node.kind === 'gate') {
        // one lead in the middle, two above and below it, three with one in the middle too
        const n = node.gate!.inputs.length;
        node.inputYs =
          n === 1
            ? [node.y]
            : n === 2
              ? [node.y - GATE_INPUT_OFFSET, node.y + GATE_INPUT_OFFSET]
              : [
                  node.y - 2 * GATE_INPUT_OFFSET * 0.9,
                  node.y,
                  node.y + 2 * GATE_INPUT_OFFSET * 0.9,
                ];
      } else if (node.kind === 'output') {
        node.inputYs = [node.y];
      }
    }
  }

  // how high everything was placed, which each column can be moved down from as a whole
  const baseY = new Map<string, number>();
  const baseInputs = new Map<string, number[]>();
  for (const node of nodes.values()) {
    baseY.set(node.id, node.y);
    baseInputs.set(node.id, [...node.inputYs]);
  }

  /** Lays out and routes everything with column `c` moved down by `shift[c]`; the nodes are left there. */
  const route = (shift: readonly number[]) => {
    columns.forEach((col, c) => {
      for (const id of col) {
        const node = nodes.get(id)!;
        node.y = baseY.get(id)! + shift[c]!;
        node.inputYs = baseInputs.get(id)!.map((y) => y + shift[c]!);
      }
    });
    const entryY = (node: LNode, pin: number) => node.inputYs[pin] ?? node.y;
    type Segment = {
      chain: number;
      step: number;
      /** The signal the wire carries: wires of one signal may share a line */
      src: string;
      ya: number;
      yb: number;
      channel: number;
    };
    const segments = new Map<number, Segment[]>();
    chains.forEach((chain, c) => {
      if (chain.back) return;
      for (let k = 1; k < chain.ids.length; k++) {
        const a = nodes.get(chain.ids[k - 1]!)!;
        const b = nodes.get(chain.ids[k]!)!;
        const last = k === chain.ids.length - 1;
        const seg: Segment = {
          chain: c,
          step: k,
          src: chain.edge.from,
          ya: a.y,
          yb: last ? entryY(b, chain.edge.pin) : b.y,
          channel: 0,
        };
        segments.set(a.level, [...(segments.get(a.level) ?? []), seg]);
      }
    });
    const moving = new Map<number, Segment[]>();
    for (const [level, list] of segments) {
      moving.set(
        level,
        list.filter((s) => s.ya !== s.yb).sort((a, b) => a.ya - b.ya || a.yb - b.yb),
      );
    }

    const spanOf = (col: string[]) =>
      Math.max(
        0,
        ...col.map((id) => {
          const node = nodes.get(id)!;
          if (node.kind === 'gate') return INSET + gateWidth(node);
          if (node.kind === 'output') return INSET + OUTPUT_WIDTH;
          return node.kind === 'dummy' ? INSET : SOURCE_WIDTH;
        }),
      );
    const lefts: number[] = [];
    const spans: number[] = [];
    let edgeOfLast = MARGIN;
    columns.forEach((col, c) => {
      lefts[c] = edgeOfLast;
      spans[c] = spanOf(col);
      const room = Math.max(MIN_GAP, ((moving.get(c)?.length ?? 0) + 1) * CHANNEL_SPACING + 24);
      edgeOfLast += spans[c]! + (c < top ? room : 0);
    });
    columns.forEach((col, c) => {
      for (const id of col) {
        const node = nodes.get(id)!;
        if (node.kind === 'gate') {
          node.x = lefts[c]! + INSET;
          node.outX = node.x + gateWidth(node);
        } else if (node.kind === 'dummy') {
          node.x = node.outX = lefts[c]! + INSET;
        } else if (node.kind === 'output') {
          node.x = lefts[c]! + INSET;
          node.outX = node.x + OUTPUT_WIDTH;
        } else {
          node.x = lefts[c]!;
          node.outX = node.x + SOURCE_WIDTH;
        }
      }
    });

    // wires: one channel in the gap between two columns for each wire that has to change height
    const entryX = (node: LNode, pin = 0) => {
      const curved = node.gate && (node.gate.kind === 'or' || node.gate.kind === 'nor');
      if (!curved || node.gate!.inputs.length < 2) return node.x;
      return node.x + curveIn((node.inputYs[pin]! - node.y) / GATE_SCALE) * GATE_SCALE;
    };
    for (const [level, list] of moving) {
      const left = lefts[level]! + spans[level]! + 10;
      const right = lefts[level + 1]! + 10;
      orderChannels(list).forEach((seg, rank) => {
        seg.channel = left + ((rank + 1) * (right - left)) / (list.length + 1);
      });
    }
    const bySeg = new Map<string, Segment>();
    for (const list of segments.values())
      for (const s of list) bySeg.set(`${s.chain}:${s.step}`, s);

    const bottom = Math.max(
      MARGIN + tallest,
      ...[...nodes.values()].map((n) => n.y + heightOf(n) / 2),
    );
    let backTrack = 0;
    const edges: LEdge[] = chains.map((chain, c) => {
      const from = nodes.get(chain.ids[0]!)!;
      const to = nodes.get(chain.edge.to)!;
      const points: Pt[] = [];
      if (chain.back) {
        const yLow = bottom + 22 + backTrack++ * BACK_TRACK;
        const yIn = entryY(to, chain.edge.pin);
        points.push(
          { x: from.outX, y: from.y },
          { x: from.outX + 16, y: from.y },
          { x: from.outX + 16, y: yLow },
          { x: entryX(to, chain.edge.pin) - 16, y: yLow },
          { x: entryX(to, chain.edge.pin) - 16, y: yIn },
          { x: entryX(to, chain.edge.pin), y: yIn },
        );
      } else {
        points.push({ x: from.outX, y: from.y });
        for (let k = 1; k < chain.ids.length; k++) {
          const seg = bySeg.get(`${c}:${k}`)!;
          const next = nodes.get(chain.ids[k]!)!;
          if (seg.ya !== seg.yb) {
            points.push({ x: seg.channel, y: seg.ya }, { x: seg.channel, y: seg.yb });
          }
          points.push({
            x: k === chain.ids.length - 1 ? entryX(next, chain.edge.pin) : next.x,
            y: seg.yb,
          });
          if (k < chain.ids.length - 1) points.push({ x: next.outX, y: next.y });
        }
      }
      return {
        id: `e${c}`,
        from: chain.edge.from,
        to: chain.edge.to,
        pin: chain.edge.pin,
        signal: chain.edge.from,
        points: points.filter(
          (p, i) => i === 0 || p.x !== points[i - 1]!.x || p.y !== points[i - 1]!.y,
        ),
        back: chain.back,
      };
    });
    return { edges, bottom, backTrack, edgeOfLast };
  };

  // Where two wires of different signals would lie side by side, or one would end on the line of
  // another, a column is moved down a little, as a whole, until they do not. The columns are tried
  // one after the other, a few rounds, and a move is kept only when it leaves fewer such places.
  const STEPS = [0, 6, 12, 18, 24, 30, 36, 42, 48];
  let shift = columns.map(() => 0);
  let cost = crowdedPlaces(route(shift).edges);
  for (let round = 0; round < 3 && cost > 0; round++) {
    let better = false;
    for (let c = 0; c <= top && cost > 0; c++) {
      for (const step of STEPS) {
        if (step === shift[c]) continue;
        const trial = shift.map((moved, i) => (i === c ? step : moved));
        const attempt = route(trial);
        const attemptCost = crowdedPlaces(attempt.edges);
        if (attemptCost < cost) {
          shift = trial;
          cost = attemptCost;
          better = true;
        }
      }
    }
    if (!better) break;
  }
  // the nodes are where the last trial left them: put them where the best one was
  const { edges, bottom, backTrack, edgeOfLast } = route(shift);

  return {
    nodes: [...nodes.values()].filter((n) => n.kind !== 'dummy'),
    edges,
    junctions: junctionsOf(edges),
    width: edgeOfLast + MARGIN,
    height: bottom + MARGIN + (backTrack > 0 ? 22 + backTrack * BACK_TRACK : 0),
  };
}
