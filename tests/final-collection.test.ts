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

const CHOOSE = [
  '# บทที่ 6 ทดสอบ',
  '',
  '@select code รหัสอินพุต | bcd=BCD-8421 | xs3=Excess-3',
  '@select method วิธี | andor=AND/OR | nor=NOR อย่างเดียว',
  '',
  '---',
  '',
  '## 1. หัวข้อ',
  '',
  '### การ์ดของทุกตัวเลือก',
  '',
  'ข้อความ',
  '',
  '### การ์ดของ BCD {code=bcd}',
  '',
  'ข้อความ BCD',
  '',
  '### การ์ดของ Excess-3 แบบ NOR {code=xs3; method=nor}',
  '',
  'ข้อความ XS3',
  '',
  '### การ์ดของหลายวิธี {method=andor,nor}',
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

  it('reads the @select lines as selectors and the end of a heading as the choices of a card', () => {
    const r = build({ 'final/06-decoders.md': CHOOSE });
    expect(r.errors).toEqual([]);
    const [file] = r.files;
    expect(file.selectors).toEqual([
      {
        key: 'code',
        label: 'รหัสอินพุต',
        options: [
          { value: 'bcd', label: 'BCD-8421' },
          { value: 'xs3', label: 'Excess-3' },
        ],
      },
      {
        key: 'method',
        label: 'วิธี',
        options: [
          { value: 'andor', label: 'AND/OR' },
          { value: 'nor', label: 'NOR อย่างเดียว' },
        ],
      },
    ]);
    // the lines that choose are not text of the chapter, and the marker is not in the title
    expect(file.root.explain).toEqual([]);
    const cards = file.root.children[0].children;
    expect(cards.map((c) => c.when)).toEqual([
      undefined,
      { code: ['bcd'] },
      { code: ['xs3'], method: ['nor'] },
      { method: ['andor', 'nor'] },
    ]);
    expect(cards[1].title).toEqual([{ t: 'text', v: 'การ์ดของ BCD' }]);
  });

  it('puts the buttons where the @choices line is, as a block of the chapter', () => {
    const md = CHOOSE.replace('### การ์ดของทุกตัวเลือก', '@choices\n\n### การ์ดของทุกตัวเลือก');
    const r = build({ 'final/06-decoders.md': md });
    expect(r.errors).toEqual([]);
    const group = r.files[0].root.children[0];
    expect(group.explain.map((b) => b.t)).toEqual(['choices']);
  });

  it('refuses @choices on a page that has no @select', () => {
    const md = ['# บทที่ 6 ทดสอบ', '', '## 1. หัวข้อ', '', '@choices', ''].join('\n');
    expect(build({ 'final/06-decoders.md': md }).errors[0]).toMatch(/no @select/);
  });

  it('refuses a card that names a choice the page does not have, or a value it does not have', () => {
    const noKey = CHOOSE.replace('{code=bcd}', '{size=big}');
    expect(build({ 'final/06-decoders.md': noKey }).errors[0]).toMatch(/no @select size/);
    const noValue = CHOOSE.replace('{code=bcd}', '{code=gray}');
    expect(build({ 'final/06-decoders.md': noValue }).errors[0]).toMatch(
      /code=gray is not an option/,
    );
  });

  it('refuses a selector with one option, a repeated value, or a bad line', () => {
    const one = CHOOSE.replace(' | xs3=Excess-3', '');
    expect(build({ 'final/06-decoders.md': one }).errors[0]).toMatch(/two options or more/);
    const twice = CHOOSE.replace('xs3=Excess-3', 'bcd=Excess-3');
    expect(build({ 'final/06-decoders.md': twice }).errors[0]).toMatch(/repeats an option value/);
    const bad = CHOOSE.replace('| bcd=BCD-8421', '| BCD-8421');
    expect(build({ 'final/06-decoders.md': bad }).errors[0]).toMatch(/bad @select option/);
  });

  it('keeps the text of a code block exactly, though it looks like Markdown', () => {
    const [file] = build({ 'final/06-decoders.md': CHAPTER }).files;
    const code = file.root.children[0].explain.find((b) => b.t === 'code');
    expect(code).toEqual({ t: 'code', v: 'assign y = ~a; // # | $x\n- not a list' });
  });
});
