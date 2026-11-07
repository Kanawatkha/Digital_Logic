/**
 * Boolean expressions are written with a prime for NOT (`A'`, `(A·B)'`) wherever they are made as
 * text. For the screen the prime becomes a bar over the letter or over the whole group, as in the
 * course: this reads the text into a tree of plain text and barred parts.
 */

export type Notation = { t: 'text'; text: string } | { t: 'not'; inner: Notation[] };

function parseSequence(text: string, from: number, inGroup: boolean): [Notation[], number] {
  const out: Notation[] = [];
  let i = from;
  while (i < text.length) {
    const c = text[i]!;
    if (c === ')' && inGroup) return [out, i + 1];
    if (c === '(') {
      const [inner, next] = parseSequence(text, i + 1, true);
      i = next;
      if (text[i] === "'") {
        // a group with a prime gets a bar over all of it, without its brackets
        let bars = 0;
        while (text[i] === "'") {
          bars++;
          i++;
        }
        let node: Notation = { t: 'not', inner };
        for (let k = 1; k < bars; k++) node = { t: 'not', inner: [node] };
        out.push(node);
      } else {
        out.push({ t: 'text', text: '(' }, ...inner, { t: 'text', text: ')' });
      }
      continue;
    }
    if (c === "'") {
      const previous = out.pop();
      out.push({ t: 'not', inner: previous ? [previous] : [] });
      i++;
      continue;
    }
    out.push({ t: 'text', text: c });
    i++;
  }
  return [out, i];
}

/** The expression as text and bars. Text that has no prime comes back as it is. */
export function parseNotation(text: string): Notation[] {
  const [nodes] = parseSequence(text, 0, false);
  // neighbors of plain text are joined, so `AB` is one piece
  const joined: Notation[] = [];
  for (const node of nodes) {
    const last = joined[joined.length - 1];
    if (node.t === 'text' && last?.t === 'text') last.text += node.text;
    else joined.push(node.t === 'text' ? { ...node } : node);
  }
  return joined;
}

/** How many bars are stacked over the deepest part of a node: 1 for a bar over a letter. */
export function barDepth(node: Notation): number {
  if (node.t === 'text') return 0;
  return 1 + Math.max(0, ...node.inner.map(barDepth));
}

/** The text of the notation with the bars as primes again (for a screen reader). */
export function notationText(nodes: readonly Notation[]): string {
  return nodes
    .map((node) => {
      if (node.t === 'text') return node.text;
      const inner = notationText(node.inner);
      return inner.length > 1 && !/^[A-Z01?]$/.test(inner) ? `(${inner})'` : `${inner}'`;
    })
    .join('');
}
