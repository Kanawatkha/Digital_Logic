import type { Block, ContentFile, ContentNode, Inline } from '../../src/content/types.ts';

/**
 * Round-trip oracle (CONTENT-SCHEMA.md section 9). Both the Markdown and the generated data are
 * projected to the same canonical string: all text with whitespace removed, math as placeholders
 * (collected separately), figures as placeholders. Equality proves nothing was lost or reordered.
 */
export type Projection = { text: string; math: string[]; figures: number };

const SOL_TEX = '\\mathbf{Sol}^{n}';
const squash = (s: string) => s.replace(/\s+/g, '');

/* ---------- Markdown side (independent of the parser) ---------- */

export function projectMarkdown(md: string): Projection {
  const math: string[] = [];
  let figures = 0;
  let s = md.replace(/\r\n/g, '\n');
  s = s.replace(/<div align="center">[\s\S]*?<\/div>/g, () => {
    figures++;
    return '\n«F»\n';
  });
  s = s.replace(/^\s*---+\s*$/gm, '');
  s = s.replace(
    /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g,
    (_m, d: string | undefined, i: string | undefined) => {
      const tex = (d ?? i ?? '').trim();
      if (tex !== SOL_TEX) math.push(squash(tex));
      return tex === SOL_TEX ? '' : '«M»';
    },
  );
  s = s.replace(/\\[|]/g, '«P»');
  s = s.replace(/^\s*\|[\s:|-]+\|\s*$/gm, '');
  s = s.replace(/^\s*>\s?/gm, '');
  s = s.replace(/^\s*(?:-|\d+\.)\s+/gm, '');
  s = s.replace(/^#{1,6}\s+/gm, '');
  s = s.replace(/\*\*/g, '').replace(/`/g, '');
  s = s.replace(/&#(\d+);/g, (_m, n: string) => String.fromCodePoint(Number(n)));
  s = s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  s = s.replace(/\\([\\`*_{}[\]()#+\-.!|$<>~&])/g, '$1');
  s = s.replace(/\|/g, ' ').replace(/«P»/g, '|');
  return { text: squash(s), math, figures };
}

/* ---------- data side ---------- */

function inl(c: Inline[], p: Projection): string {
  return c
    .map((i) => {
      if (i.t === 'text' || i.t === 'code') return i.v;
      if (i.t === 'strong') return inl(i.c, p);
      p.math.push(squash(i.tex));
      return '«M»';
    })
    .join('');
}

function blk(blocks: Block[], p: Projection): string {
  return blocks
    .map((b): string => {
      switch (b.t) {
        case 'p':
          return inl(b.c, p);
        case 'math':
          p.math.push(squash(b.tex));
          return '«M»';
        case 'list':
          return b.items.map((it) => `${inl(it.c, p)} ${blk(it.children, p)}`).join(' ');
        case 'table':
          return [b.head, ...b.rows]
            .map((row) => row.map((cell) => inl(cell, p)).join(' '))
            .join(' ');
        case 'figure':
          p.figures++;
          return '«F»';
        case 'note':
          return blk(b.c, p);
        case 'example':
          return `${blk(b.problem, p)} ${blk(b.sol, p)} ${blk(b.ans, p)}`;
      }
    })
    .join(' ');
}

function node(n: ContentNode, p: Projection): string {
  const parts: string[] = [];
  if (!n.id.endsWith('#overview')) parts.push(inl(n.title, p));
  parts.push(blk(n.explain, p));
  if (n.examplesTitle) parts.push(inl(n.examplesTitle, p));
  parts.push(blk(n.examples, p));
  for (const c of n.children) parts.push(node(c, p));
  return parts.join(' ');
}

export function projectData(file: ContentFile): Projection {
  const p: Projection = { text: '', math: [], figures: 0 };
  p.text = squash(node(file.root, p));
  return p;
}
