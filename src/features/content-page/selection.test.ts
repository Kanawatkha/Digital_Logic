import { beforeEach, describe, expect, it } from 'vitest';
import type { ContentNode, Selector } from '@/content/types';
import {
  defaultSelection,
  filterTree,
  isVisible,
  readSelection,
  writeSelection,
} from './selection';

const selectors: Selector[] = [
  {
    key: 'code',
    label: 'รหัส',
    options: [
      { value: 'bcd', label: 'BCD' },
      { value: 'xs3', label: 'XS3' },
    ],
  },
  {
    key: 'digit',
    label: 'เลข',
    options: [
      { value: 'none', label: '-' },
      { value: '0', label: '0' },
    ],
  },
];

const node = (
  id: string,
  when?: ContentNode['when'],
  children: ContentNode[] = [],
): ContentNode => ({
  id,
  kind: 'exercise',
  level: 3,
  title: [{ t: 'text', v: id }],
  explain: [],
  examples: [],
  children,
  ...(when ? { when } : {}),
  source: { file: 'x.md', line: 1 },
});

describe('the choices of a page', () => {
  beforeEach(() => localStorage.clear());

  it('starts at the first option of each selector', () => {
    expect(defaultSelection(selectors)).toEqual({ code: 'bcd', digit: 'none' });
  });

  it('shows a node when each choice it names has a selected value, and a node with none always', () => {
    const sel = { code: 'bcd', digit: 'none' };
    expect(isVisible(node('a'), sel)).toBe(true);
    expect(isVisible(node('b', { code: ['bcd'] }), sel)).toBe(true);
    expect(isVisible(node('c', { code: ['xs3'] }), sel)).toBe(false);
    expect(isVisible(node('d', { code: ['bcd', 'xs3'], digit: ['0'] }), sel)).toBe(false);
  });

  it('takes out the hidden nodes with what is inside them', () => {
    const tree = node('root', undefined, [
      node('keep'),
      node('hide', { code: ['xs3'] }, [node('inner')]),
      node('group', undefined, [node('x', { code: ['xs3'] }), node('y', { code: ['bcd'] })]),
    ]);
    const out = filterTree(tree, { code: 'bcd', digit: 'none' });
    expect(out.children.map((c) => c.id)).toEqual(['keep', 'group']);
    expect(out.children[1].children.map((c) => c.id)).toEqual(['y']);
    expect(tree.children).toHaveLength(3);
  });

  it('keeps the choices of a chapter, and drops a saved value that is not an option any more', () => {
    writeSelection('final/06', { code: 'xs3', digit: '0' });
    expect(readSelection('final/06', selectors)).toEqual({ code: 'xs3', digit: '0' });
    localStorage.setItem('dl-selection:final/06', JSON.stringify({ code: 'gray', digit: '0' }));
    expect(readSelection('final/06', selectors)).toEqual({ code: 'bcd', digit: '0' });
    localStorage.setItem('dl-selection:final/06', 'not json');
    expect(readSelection('final/06', selectors)).toEqual({ code: 'bcd', digit: 'none' });
  });
});

describe('the sections that are solutions', () => {
  const sol = (id: string, children: ContentNode[] = []): ContentNode => ({
    ...node(id, undefined, children),
    solution: true,
  });

  it('are hidden, with what is inside them, when the solutions are off, and shown when they are on', () => {
    const root = node('root', undefined, [node('problem'), sol('answer', [node('inside')])]);
    expect(filterTree(root, {}, false).children.map((c) => c.id)).toEqual(['problem']);
    expect(filterTree(root, {}, true).children.map((c) => c.id)).toEqual(['problem', 'answer']);
    // the default : the solutions are shown
    expect(filterTree(root, {}).children).toHaveLength(2);
  });

  it('can also name choices : both must agree', () => {
    const one: ContentNode = { ...sol('one'), when: { code: ['bcd'] } };
    const root = node('root', undefined, [one]);
    expect(filterTree(root, { code: 'bcd' }, true).children).toHaveLength(1);
    expect(filterTree(root, { code: 'xs3' }, true).children).toHaveLength(0);
    expect(filterTree(root, { code: 'bcd' }, false).children).toHaveLength(0);
  });
});
