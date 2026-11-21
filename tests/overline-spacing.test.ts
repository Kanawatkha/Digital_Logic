import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = join(process.cwd(), 'content');
const BAR = String.raw`\overline{`;

function markdownFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return markdownFiles(path);
    return entry.name.endsWith('.md') ? [path] : [];
  });
}

/** The line numbers where a `\overline{...}` is followed at once (or after blanks, which TeX ignores) by another `\overline`. */
export function touchingBars(text: string): number[] {
  const lines: number[] = [];
  let from = 0;
  for (;;) {
    const start = text.indexOf(BAR, from);
    if (start < 0) return lines;
    let depth = 0;
    let end = -1;
    for (let k = start + BAR.length - 1; k < text.length; k++) {
      if (text[k] === '{') depth++;
      else if (text[k] === '}' && --depth === 0) {
        end = k + 1;
        break;
      }
    }
    if (end < 0) return lines;
    if (/^[ \t]*\\overline\{/.test(text.slice(end, end + 40))) {
      lines.push(text.slice(0, start).split('\n').length);
    }
    from = start + BAR.length;
  }
}

describe('bars of the formulas', () => {
  it('finds two bars that touch, the way TeX sees them', () => {
    expect(touchingBars(String.raw`$\overline{A}\overline{B}$`)).toEqual([1]);
    expect(touchingBars('x\n' + String.raw`$\overline{A} \overline{B}$`)).toEqual([2]);
    expect(touchingBars(String.raw`$\overline{A}\,\overline{B}$`)).toEqual([]);
    expect(touchingBars(String.raw`$\overline{\overline{A}}\,B$`)).toEqual([]);
    expect(touchingBars(String.raw`$\overline{Q_{A}}\overline{Q_{B}}\overline{Q_{C}}$`)).toEqual([
      1, 1,
    ]);
  });

  it('keeps a thin space between two bars in every file of the content (two bars side by side look like one)', () => {
    const bad: string[] = [];
    for (const file of markdownFiles(ROOT)) {
      const text = readFileSync(file, 'utf8').replace(/<svg[\s\S]*?<\/svg>/g, (m) =>
        m.replace(/[^\n]/g, ' '),
      );
      for (const line of touchingBars(text)) bad.push(`${file.slice(ROOT.length + 1)}:${line}`);
    }
    expect(bad).toEqual([]);
  });
});
