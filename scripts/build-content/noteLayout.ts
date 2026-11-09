import type { Block } from '../../src/content/types.ts';
import { renderMath } from './math.ts';

/** A row of an aligned chain that ends in a note: ` &= rhs && \text{$law$} \\`. */
const NOTE_ROW = /^(.*?)\s*&&\s*(\\text\{.*\})\s*(\\\\)?\s*$/;

/**
 * The same chain with every note moved to a row of its own under its row, indented under the
 * right hand side. A chain with the notes at the side is the way of the exams, but it is wider than a
 * phone; this is the layout the page falls back to when the first one does not fit. Null for TeX with
 * no note.
 */
export function narrowNotes(tex: string): string | null {
  if (!tex.includes('&&')) return null;
  let changed = false;
  const out: string[] = [];
  for (const row of tex.split('\n')) {
    const m = NOTE_ROW.exec(row);
    if (!m) {
      out.push(row);
      continue;
    }
    changed = true;
    const [, body, note, separator] = m;
    out.push(`${body} \\\\`);
    // smaller, so that a note reads as a note and not as one more row of the chain
    out.push(` & \\quad {\\small ${note}}${separator ? ' \\\\' : ''}`);
  }
  return changed ? out.join('\n') : null;
}

/** Gives every display formula with notes, inside the blocks and the lists and notes in them, the narrow layout too. */
export function addNarrowLayouts(blocks: Block[]): void {
  for (const b of blocks) {
    if (b.t === 'math') {
      const narrow = narrowNotes(b.tex);
      if (narrow) b.htmlNarrow = renderMath(narrow, true);
    } else if (b.t === 'list') {
      for (const item of b.items) addNarrowLayouts(item.children);
    } else if (b.t === 'note') {
      addNarrowLayouts(b.c);
    }
  }
}
