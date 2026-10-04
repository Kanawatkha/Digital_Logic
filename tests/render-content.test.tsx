import { join } from 'node:path';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import type { Block, ContentNode } from '../src/content/types';
import { BlockList } from '../src/components/content/BlockRenderer';
import { buildContent } from '../scripts/build-content/index';
import { walkBlocks, walkNodes } from '../scripts/build-content/tree';

const result = buildContent(join(process.cwd(), 'content'));

function allBlocks(root: ContentNode): Block[] {
  const out: Block[] = [];
  walkNodes(root, (n) => out.push(...n.explain, ...n.examples));
  return out;
}

describe('rendering the real content', () => {
  it('renders every block of every file with all formulas and figures present', () => {
    expect(result.errors).toEqual([]);
    for (const f of result.files) {
      const blocks = allBlocks(f.root);
      let figures = 0;
      walkBlocks(blocks, (b) => {
        if (b.t === 'figure') figures++;
      });
      const countMath = (nodes: unknown) => {
        // inline formulas live inside paragraphs, list items, table cells and display blocks
        const json = JSON.stringify(nodes);
        return (json.match(/"t":"math"/g) ?? []).length;
      };
      const math = countMath(blocks);

      const html = renderToString(<BlockList blocks={blocks} />);
      const label = `${f.collection}/${f.chapter}`;
      expect((html.match(/class="katex"/g) ?? []).length, `${label} formulas`).toBe(math);
      expect((html.match(/<figure /g) ?? []).length, `${label} figures`).toBe(figures);
      expect(html, label).not.toContain('undefined');
    }
  });
});
