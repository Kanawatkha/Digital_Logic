// @vitest-environment node
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { buildContent } from '../scripts/build-content/index';

const root = mkdtempSync(join(tmpdir(), 'final-collection-'));
afterAll(() => rmSync(root, { recursive: true, force: true }));

function build(files: Record<string, string>) {
  rmSync(root, { recursive: true, force: true });
  for (const [path, md] of Object.entries(files)) {
    mkdirSync(join(root, path, '..'), { recursive: true });
    writeFileSync(join(root, path), md);
  }
  return buildContent(root);
}

const CHAPTER = [
  '# บทที่ 6 ทดสอบ',
  '',
  '---',
  '',
  '## 1. หัวข้อ',
  '',
  'คำอธิบายก่อนตัวอย่าง $y=\\overline{A}$',
  '',
  '```verilog',
  'assign y = ~a; // # | $x',
  '- not a list',
  '```',
  '',
  '### ตัวอย่างที่ 1 โจทย์',
  '',
  'จงหา $y$',
  '',
  '$\\mathbf{Sol}^{n}$',
  '',
  '$y=1$',
  '',
  '$\\mathbf{Ans}\\quad y=1$',
  '',
  '### 1.2 ส่วนที่มีแต่คำอธิบาย',
  '',
  'ข้อความ',
  '',
].join('\n');

describe('the final collection', () => {
  it('builds chapters from content/final, with no summary and worked-solutions folder', () => {
    const r = build({ 'final/06-decoders.md': CHAPTER });
    expect(r.errors).toEqual([]);
    expect(r.files.map((f) => [f.collection, f.chapter, f.slug])).toEqual([
      ['final', '06', 'decoders'],
    ]);
    expect(r.manifest.collections.final).toHaveLength(1);
    expect(r.manifest.collections.final[0]).toMatchObject({ file: 'final/06.json', examples: 1 });
  });

  it('keeps explanation, code and an example in one chapter, in order, as a card each', () => {
    const [file] = build({ 'final/06-decoders.md': CHAPTER }).files;
    const [group] = file.root.children;
    expect(group.kind).toBe('group');
    expect(group.explain.map((b) => b.t)).toEqual(['p', 'code']);
    const [example, explainOnly] = group.children;
    expect(example.kind).toBe('exercise');
    expect(example.examples.map((b) => b.t)).toContain('example');
    expect(explainOnly.explain.map((b) => b.t)).toEqual(['p']);
  });

  it('passes the round trip with pipes, stars and dollars in inline code', () => {
    const md = [
      '# บทที่ 6 ทดสอบ',
      '',
      '## 1. หัวข้อ',
      '',
      '- ตัวกระทำ `A | B`, `A || B` และ `a * b` กับ `$x`',
      '',
    ].join('\n');
    const r = build({ 'final/06-decoders.md': md });
    expect(r.errors).toEqual([]);
  });

  it('keeps the text of a code block exactly, though it looks like Markdown', () => {
    const [file] = build({ 'final/06-decoders.md': CHAPTER }).files;
    const code = file.root.children[0].explain.find((b) => b.t === 'code');
    expect(code).toEqual({ t: 'code', v: 'assign y = ~a; // # | $x\n- not a list' });
  });
});
