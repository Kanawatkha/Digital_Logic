/** Union-find over net keys: points that are connected end up with the same root. */
export type Nets = {
  /** Joins the nets of two keys. Returns false when they were one net already (the join added nothing). */
  union: (a: string, b: string) => boolean;
  /** The representative key of the net a key belongs to. */
  root: (key: string) => string;
};

export function createNets(): Nets {
  const parent = new Map<string, string>();

  const root = (key: string): string => {
    let top = key;
    for (let next = parent.get(top); next !== undefined && next !== top; next = parent.get(top)) {
      top = next;
    }
    // path compression
    let walk = key;
    while (walk !== top) {
      const next = parent.get(walk) ?? top;
      parent.set(walk, top);
      walk = next;
    }
    return top;
  };

  return {
    root,
    union(a, b) {
      const rootA = root(a);
      const rootB = root(b);
      if (rootA === rootB) return false;
      parent.set(rootB, rootA);
      return true;
    },
  };
}
