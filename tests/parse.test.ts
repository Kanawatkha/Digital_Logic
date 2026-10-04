import { describe, expect, it } from 'vitest';
import type { Block } from '../src/content/types';
import { parseDocument } from '../scripts/build-content/parse';
import { buildContentFile, buildRaw, inlineText } from '../scripts/build-content/tree';

const blocksOf = (md: string): Block[] =>
  parseDocument(md, 'fixture.md').flatMap((t) => (t.k === 'block' ? [t.block] : []));

describe('block parser', () => {
  it('parses inline math, bold, entities and escapes', () => {
    const [p] = blocksOf('**สูตร** ค่า $x<b$ และ &#36; กับ \\* ดาว');
    expect(p.t).toBe('p');
    if (p.t !== 'p') return;
    expect(p.c[0]).toMatchObject({ t: 'strong' });
    expect(p.c.some((i) => i.t === 'math' && i.tex === 'x<b')).toBe(true);
    expect(inlineText(p.c)).toContain('$ กับ * ดาว');
  });

  it('parses one-line and multi-line display math', () => {
    const blocks = blocksOf('$$a+b$$\n\n$$\n\\begin{array}{c}\n1\n\\end{array}\n$$');
    expect(blocks.map((b) => b.t)).toEqual(['math', 'math']);
  });

  it('parses nested lists and display math inside list items', () => {
    const [list] = blocksOf('1. ก\n   - ข\n   - ค\n2. ง\n  $$q=1$$');
    expect(list.t).toBe('list');
    if (list.t !== 'list') return;
    expect(list.ordered).toBe(true);
    expect(list.items).toHaveLength(2);
    expect(list.items[0].children[0]).toMatchObject({ t: 'list', ordered: false });
    expect(list.items[1].children[0]).toMatchObject({ t: 'math' });
  });

  it('parses tables with alignment, entities and escaped pipes', () => {
    const [table] = blocksOf('| a | b |\n|:---:|---|\n| &lt; | \\| |');
    expect(table).toMatchObject({ t: 'table', align: ['c', 'n'] });
    if (table.t !== 'table') return;
    expect(inlineText(table.rows[0][0])).toBe('<');
    expect(inlineText(table.rows[0][1])).toBe('|');
  });

  it('parses blockquotes and skips horizontal rules', () => {
    const blocks = blocksOf('---\n\n> หมายเหตุ **x**\n\n---');
    expect(blocks).toHaveLength(1);
    expect(blocks[0].t).toBe('note');
  });

  it('parses a figure and rejects a blank line inside the svg', () => {
    const ok = '<div align="center">\n<svg viewBox="0 0 1 1"><g><line x1="0"/></g></svg>\n</div>';
    expect(blocksOf(ok)[0].t).toBe('figure');
    const bad = '<div align="center">\n<svg viewBox="0 0 1 1">\n\n</svg>\n</div>';
    expect(() => blocksOf(bad)).toThrow(/blank line/);
  });

  it('fails loudly on unknown constructs', () => {
    expect(() => blocksOf('ข้อความ $ไม่ปิด')).toThrow(/unmatched/);
    expect(() => blocksOf('<span>x</span>')).toThrow(/unsupported HTML/);
    expect(() => blocksOf('$$\\frac{$$')).toThrow();
  });
});

describe('summary tree rules', () => {
  const build = (md: string) => {
    const warnings: string[] = [];
    const raw = buildRaw(parseDocument(md, 'fixture.md'), 'fixture.md');
    const file = buildContentFile(
      raw,
      {
        collection: 'summary',
        chapter: '01',
        slug: 'fixture',
        file: 'summary/01-fixture-summary.md',
      },
      (m) => warnings.push(m),
    );
    return { file, warnings };
  };

  it('splits explanation from examples and allows an example without Ans', () => {
    const { file } = build(
      '# T\n\n## 1. หัวข้อ\n\nอธิบาย\n\n**สูตร**\n\n$$a=b$$\n\n**ตัวอย่าง** จงหา\n\n$\\mathbf{Sol}^{n}$\n\n$$a$$\n',
    );
    const leaf = file.root.children[0];
    expect(leaf.kind).toBe('section');
    expect(leaf.explain.map((b) => b.t)).toEqual(['p', 'p', 'math']);
    expect(leaf.examples).toHaveLength(1);
    expect(leaf.examples[0]).toMatchObject({ t: 'example', ans: [] });
  });

  it('attaches a "ตัวอย่าง" group to its section when the section has no topics', () => {
    const { file } = build(
      '# T\n\n## 2. ส่วน\n\nอธิบาย\n\n### 2.1 ตัวอย่าง\n\n**ตัวอย่างที่ 1** โจทย์\n\n$\\mathbf{Sol}^{n}$\n\nวิธี\n\n$\\mathbf{Ans}\\quad 1$\n',
    );
    const sec = file.root.children[0];
    expect(sec.children).toHaveLength(0);
    expect(sec.examples).toHaveLength(1);
    expect(sec.examplesTitle).toBeDefined();
  });

  it('turns a "ตัวอย่าง" group next to real topics into an examples-only topic', () => {
    const { file } = build(
      '# T\n\n## 1. ส่วน\n\n### 1.1 ตัวอย่างรวม\n\n**ตัวอย่าง** โจทย์\n\n$\\mathbf{Sol}^{n}$\n\nx\n\n### 1.2 หัวข้อ\n\nเนื้อหา\n',
    );
    const sec = file.root.children[0];
    expect(sec.children.map((c) => c.kind)).toEqual(['topic', 'topic']);
    expect(sec.children[0].explain).toHaveLength(0);
    expect(sec.children[0].examples).toHaveLength(1);
  });

  it('marks the exam tips section as a tips leaf', () => {
    const { file } = build('# T\n\n## 6. ข้อควรระวังในการสอบ\n\n1. ก\n2. ข\n');
    expect(file.root.children[0].kind).toBe('tips');
  });
});
