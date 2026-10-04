import { describe, expect, it } from 'vitest';
import type { ContentFile, ContentNode, ManifestEntry } from '@/content/types';
import {
  INITIAL_STATE,
  buildColumns,
  chapterItem,
  closeDeepest,
  toggleExamples,
  toggleNode,
  toggleRoot,
} from './model';

const t = (v: string) => [{ t: 'text' as const, v }];
const node = (id: string, children: ContentNode[] = [], examples = 0): ContentNode => ({
  id,
  kind: children.length ? 'section' : 'topic',
  level: 2,
  title: t(id),
  explain: [],
  examples: Array.from({ length: examples }, (_, i) => ({
    t: 'example' as const,
    id: `${id}-e${i}`,
    problem: [],
    sol: [],
    ans: [],
  })),
  children,
  source: { file: 'x.md', line: 1 },
});

const leaf = node('leaf', [], 2);
const file: ContentFile = {
  collection: 'summary',
  chapter: '01',
  slug: 's',
  title: t('x'),
  root: node('root', [node('group', [node('topic', [], 1)]), leaf]),
};
const entry = (chapter: string, title: string): ManifestEntry => ({
  chapter,
  slug: 's',
  title,
  file: '',
  nodes: 1,
  examples: 0,
  figures: 0,
});
const chapters = [
  entry('01', 'สรุปบทที่ 1 ระบบเลขฐาน (Number)'),
  entry('02', 'สรุปบทที่ 2 ไอซี (IC)'),
];
const files = { '01': file };
const kinds = (
  s: Parameters<typeof buildColumns>[2],
  f: Parameters<typeof buildColumns>[1] = files,
) => buildColumns(chapters, f, s).map((c) => c.kind);

describe('diagram state', () => {
  it('toggles the root and clears everything when it closes', () => {
    const open = toggleRoot(INITIAL_STATE);
    expect(open.rootOpen).toBe(true);
    const deep = toggleNode(open, 1, 'chapter:01');
    expect(toggleRoot(deep)).toEqual(INITIAL_STATE);
  });

  it('keeps one open node per column and drops descendants when a sibling opens', () => {
    let s = toggleRoot(INITIAL_STATE);
    s = toggleNode(s, 1, 'chapter:01');
    s = toggleNode(s, 2, 'group');
    s = toggleNode(s, 3, 'topic');
    expect(s.path).toEqual(['chapter:01', 'group', 'topic']);
    s = toggleNode(s, 2, 'leaf');
    expect(s.path).toEqual(['chapter:01', 'leaf']);
    s = toggleNode(s, 2, 'leaf');
    expect(s.path).toEqual(['chapter:01']);
  });

  it('closes the example column when the path changes', () => {
    let s = toggleNode(toggleRoot(INITIAL_STATE), 1, 'chapter:01');
    s = toggleNode(s, 2, 'leaf');
    s = toggleExamples(s, 'leaf');
    expect(s.examplesFor).toBe('leaf');
    expect(toggleExamples(s, 'leaf').examplesFor).toBeNull();
    expect(toggleNode(s, 1, 'chapter:02').examplesFor).toBeNull();
  });

  it('Esc closes the deepest thing first and names the control to focus', () => {
    let s = toggleNode(toggleRoot(INITIAL_STATE), 1, 'chapter:01');
    s = toggleExamples(toggleNode(s, 2, 'leaf'), 'leaf');
    let r = closeDeepest(s);
    expect(r).toMatchObject({ focusId: 'ex:leaf', state: { examplesFor: null } });
    r = closeDeepest(r.state);
    expect(r.focusId).toBe('leaf');
    r = closeDeepest(r.state);
    expect(r.focusId).toBe('chapter:01');
    r = closeDeepest(r.state);
    expect(r).toMatchObject({ focusId: 'root', state: { rootOpen: false } });
    expect(closeDeepest(r.state).focusId).toBeNull();
  });
});

describe('buildColumns', () => {
  it('shows nothing while the root is closed', () => {
    expect(buildColumns(chapters, files, INITIAL_STATE)).toEqual([]);
  });

  it('splits the chapter title into a number and a name', () => {
    const item = chapterItem(chapters[0]);
    expect(item.number).toBe('บทที่ 1');
    expect(item.title).toEqual(t('ระบบเลขฐาน (Number)'));
  });

  it('shows the chapters, then a loading or error column until the file arrives', () => {
    const s = toggleNode(toggleRoot(INITIAL_STATE), 1, 'chapter:02');
    expect(kinds(s)).toEqual(['nodes', 'loading']);
    expect(kinds(s, { '02': 'error' })).toEqual(['nodes', 'error']);
  });

  it('opens a block for a leaf section and a topics column for a group', () => {
    let s = toggleNode(toggleRoot(INITIAL_STATE), 1, 'chapter:01');
    expect(kinds(toggleNode(s, 2, 'leaf'))).toEqual(['nodes', 'nodes', 'block']);
    s = toggleNode(s, 2, 'group');
    expect(kinds(s)).toEqual(['nodes', 'nodes', 'nodes']);
    expect(kinds(toggleNode(s, 3, 'topic'))).toEqual(['nodes', 'nodes', 'nodes', 'block']);
  });

  it('adds the example column only for a leaf that has examples', () => {
    let s = toggleNode(toggleRoot(INITIAL_STATE), 1, 'chapter:01');
    s = toggleExamples(toggleNode(s, 2, 'leaf'), 'leaf');
    expect(buildColumns(chapters, files, s).at(-1)).toMatchObject({
      kind: 'examples',
      index: 4,
      parentId: 'ex:leaf',
    });
  });
});
