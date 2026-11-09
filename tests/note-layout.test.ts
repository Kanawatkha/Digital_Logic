// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { renderMath } from '../scripts/build-content/math';
import { addNarrowLayouts, narrowNotes } from '../scripts/build-content/noteLayout';
import type { Block } from '../src/content/types';

const chain = String.raw`\begin{aligned}
Y &= AB + C \\
 &= C + AB && \text{$X+Y=Y+X$} \\
 &= C + BA && \text{$X+Y=Y+X,\ XY=YX$}
\end{aligned}`;

describe('the narrow layout of a chain with notes', () => {
  it('moves each note to a row of its own under its row, keeping the row ends', () => {
    const narrow = narrowNotes(chain)!;
    expect(narrow.split('\n')).toEqual([
      String.raw`\begin{aligned}`,
      String.raw`Y &= AB + C \\`,
      String.raw` &= C + AB \\`,
      String.raw` & \quad {\small \text{$X+Y=Y+X$}} \\`,
      String.raw` &= C + BA \\`,
      String.raw` & \quad {\small \text{$X+Y=Y+X,\ XY=YX$}}`,
      String.raw`\end{aligned}`,
    ]);
  });

  it('compiles in KaTeX and has no note left at the side', () => {
    const html = renderMath(narrowNotes(chain)!, true);
    expect(html).toContain('katex');
    expect(narrowNotes(chain)).not.toContain('&&');
  });

  it('is null for a formula with no note, so such a block gets no second layout', () => {
    expect(narrowNotes(String.raw`Y = AB + C = C + AB`)).toBeNull();
    expect(narrowNotes(String.raw`\begin{aligned} Y &= AB \\ &= BA \end{aligned}`)).toBeNull();
  });

  it('gives the narrow layout to the display formulas inside lists and notes, and leaves the others alone', () => {
    const blocks: Block[] = [
      { t: 'math', tex: chain, html: '<wide>' },
      { t: 'math', tex: 'Y = A', html: '<plain>' },
      {
        t: 'list',
        ordered: false,
        items: [{ c: [], children: [{ t: 'math', tex: chain, html: '<wide>' }] }],
      },
      { t: 'note', c: [{ t: 'math', tex: chain, html: '<wide>' }] } as Block,
    ];
    addNarrowLayouts(blocks);
    const math = (b: Block | undefined) => (b?.t === 'math' ? b : null);
    expect(math(blocks[0])?.htmlNarrow).toContain('katex');
    expect(math(blocks[1])?.htmlNarrow).toBeUndefined();
    const list = blocks[2];
    expect(list?.t === 'list' && math(list.items[0]?.children[0])?.htmlNarrow).toContain('katex');
    const note = blocks[3];
    expect(note?.t === 'note' && math(note.c[0])?.htmlNarrow).toContain('katex');
    // the wide layout is untouched
    expect(math(blocks[0])?.html).toBe('<wide>');
  });
});
