import { describe, expect, it } from 'vitest';
import type { ContentNode } from '@/content/types';
import { jumpItems } from './jumpItems';

const node = (id: string, title: string, over: Partial<ContentNode> = {}): ContentNode => ({
  id,
  kind: 'group',
  level: 2,
  title: [{ t: 'text', v: title }],
  explain: [],
  examples: [],
  children: [],
  source: { file: 'x.md', line: 1 },
  ...over,
});

describe('jumpItems', () => {
  it('makes a chip for each section, and none for a merged solution', () => {
    const root = node('root', 'root', {
      level: 1,
      children: [
        node('a', 'ข้อ 1.1'),
        node('b', 'ข้อ 1.2'),
        node('c', 'Sol', { merge: true, solution: true }),
      ],
    });
    expect(jumpItems(root).map((i) => i.label)).toEqual(['ข้อ 1.1', 'ข้อ 1.2']);
  });
});
