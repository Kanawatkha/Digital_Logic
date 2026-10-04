import type { Block, ContentFile, ContentNode, Manifest } from '../../src/content/types.ts';
import { inlineText, walkBlocks } from './tree.ts';

const countKinds = (blocks: Block[]) => {
  let examples = 0;
  let figures = 0;
  let tables = 0;
  let math = 0;
  walkBlocks(blocks, (b) => {
    if (b.t === 'example') examples++;
    if (b.t === 'figure') figures++;
    if (b.t === 'table') tables++;
    if (b.t === 'math') math++;
  });
  return { examples, figures, tables, math };
};

function line(n: ContentNode, depth: number): string[] {
  const e = countKinds(n.examples);
  const x = countKinds(n.explain);
  const children = n.children.length > 0 ? ` children:${n.children.length}` : '';
  const out = [
    `${'  '.repeat(depth)}[${n.kind}] ${inlineText(n.title).trim()}  (explain: ${n.explain.length} blocks, ${x.math} formulas, ${x.figures} figures; examples: ${e.examples}${children})`,
  ];
  for (const c of n.children) out.push(...line(c, depth + 1));
  return out;
}

/** Human-readable report: the home tree (summary chapters) in full, other files as counts. */
export function renderReport(files: ContentFile[], manifest: Manifest, warnings: string[]): string {
  const out: string[] = ['CONTENT REPORT', ''];
  out.push('Counts per file');
  for (const c of ['summary', 'worked-solutions'] as const) {
    for (const e of manifest.collections[c]) {
      out.push(
        `  ${c}/${e.chapter}  ${e.slug}: nodes ${e.nodes}, examples ${e.examples}, figures ${e.figures}`,
      );
    }
  }
  out.push('', 'Home diagram tree (summary chapters 01-05)');
  for (const f of files) {
    if (f.collection !== 'summary' || f.chapter === '00') continue;
    out.push('', `Chapter ${f.chapter}: ${inlineText(f.title)}`);
    for (const c of f.root.children) out.push(...line(c, 1));
  }
  out.push('', `Warnings (${warnings.length})`);
  for (const w of warnings) out.push(`  - ${w}`);
  out.push('');
  return out.join('\n');
}
