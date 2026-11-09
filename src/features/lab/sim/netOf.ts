import { createNets } from './nets';
import { icPinPoints } from './ics';
import { netKey, parsePoint } from './points';
import type { PlacedIc } from './evaluate';

/** What is on the same net as a point: the wires that touch it and the places a part is plugged in. */
export type NetMembers = {
  /** Ids of the wires with an end on the net */
  wireIds: string[];
  /** The points on the net that something is plugged into: wire ends, chip pins, and the point asked about */
  points: string[];
};

/**
 * Everything that is joined to a point, by the same rules the simulator uses (the joins inside the
 * board, then the wires). Null for a point that is not on the board.
 */
export function netOf(
  circuit: {
    wires: readonly { id: string; from: string; to: string }[];
    ics: readonly PlacedIc[];
  },
  pointId: string,
): NetMembers | null {
  const start = parsePoint(pointId);
  if (!start) return null;
  const nets = createNets();
  const keyOf = (id: string) => {
    const point = parsePoint(id);
    return point ? netKey(point) : null;
  };
  for (const wire of circuit.wires) {
    const a = keyOf(wire.from);
    const b = keyOf(wire.to);
    if (a !== null && b !== null) nets.union(a, b);
  }
  const root = nets.root(netKey(start));
  const on = (id: string) => {
    const key = keyOf(id);
    return key !== null && nets.root(key) === root;
  };
  const points = new Set<string>([pointId]);
  const wireIds: string[] = [];
  for (const wire of circuit.wires) {
    if (on(wire.from) || on(wire.to)) {
      wireIds.push(wire.id);
      for (const end of [wire.from, wire.to]) if (on(end)) points.add(end);
    }
  }
  for (const ic of circuit.ics) {
    for (const id of Object.values(icPinPoints(ic.board, ic.col))) if (on(id)) points.add(id);
  }
  return { wireIds, points: [...points] };
}
