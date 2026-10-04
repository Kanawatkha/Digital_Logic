// @vitest-environment node
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildContent } from '../scripts/build-content/index';
import { walkNodes } from '../scripts/build-content/tree';

const contentDir = join(process.cwd(), 'content');
const result = buildContent(contentDir);

describe('real content', () => {
  it('converts all 12 Markdown files with no errors (parse, KaTeX strict, SVG rules, round trip)', () => {
    expect(result.errors).toEqual([]);
    expect(result.files).toHaveLength(12);
  });

  it('produces no warnings', () => {
    expect(result.warnings).toEqual([]);
  });

  it('gives every summary chapter at least one leaf with an explanation', () => {
    for (const f of result.files.filter((x) => x.collection === 'summary' && x.chapter !== '00')) {
      let leaves = 0;
      walkNodes(f.root, (n) => {
        if (
          n.level > 1 &&
          n.children.length === 0 &&
          (n.explain.length > 0 || n.examples.length > 0)
        )
          leaves++;
      });
      expect(leaves, f.chapter).toBeGreaterThan(0);
    }
  });

  it('keeps counts stable (review any change before accepting the snapshot)', () => {
    expect(result.manifest).toMatchSnapshot();
  });
});
