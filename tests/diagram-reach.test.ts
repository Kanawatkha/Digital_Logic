import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import type { ContentNode, ManifestEntry } from '../src/content/types';
import { buildContent } from '../scripts/build-content/index';
import {
  INITIAL_STATE,
  buildColumns,
  chapterNodeId,
  toggleExamples,
  toggleNode,
  toggleRoot,
} from '../src/features/home-diagram/model';

const result = buildContent(join(process.cwd(), 'content'));
const summary = result.files.filter((f) => f.collection === 'summary' && f.chapter !== '00');
const chapters: ManifestEntry[] = summary.map((f) => ({
  chapter: f.chapter,
  slug: f.slug,
  title: 'x',
  file: '',
  nodes: 0,
  examples: 0,
  figures: 0,
}));
const files = Object.fromEntries(summary.map((f) => [f.chapter, f]));

function leavesWithPath(
  node: ContentNode,
  path: string[] = [],
): { leaf: ContentNode; path: string[] }[] {
  return node.children.flatMap((child) =>
    child.children.length > 0
      ? leavesWithPath(child, [...path, child.id])
      : [{ leaf: child, path: [...path, child.id] }],
  );
}

describe('home diagram reaches all content', () => {
  it('opens the block of every leaf in chapters 1-5, and its examples when it has any', () => {
    let leaves = 0;
    for (const file of summary) {
      for (const { leaf, path } of leavesWithPath(file.root)) {
        let s = toggleRoot(INITIAL_STATE);
        s = toggleNode(s, 1, chapterNodeId(file.chapter));
        path.forEach((id, i) => {
          s = toggleNode(s, i + 2, id);
        });
        s = toggleExamples(s, leaf.id);
        const columns = buildColumns(chapters, files, s);
        const block = columns.find((c) => c.kind === 'block');
        expect(block, leaf.id).toMatchObject({ node: { id: leaf.id } });
        expect(
          columns.some((c) => c.kind === 'examples'),
          leaf.id,
        ).toBe(leaf.examples.length > 0);
        leaves++;
      }
    }
    expect(leaves).toBeGreaterThan(30);
  });
});
