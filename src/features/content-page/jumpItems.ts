import type { ContentNode } from '@/content/types';
import { anchorId } from '@/lib/ids';
import { plainText, truncate } from '@/lib/text';
import type { JumpItem } from './JumpNav';

/** One jump chip for each section of a page. */
export function jumpItems(root: ContentNode): JumpItem[] {
  return root.children.map((c) => ({
    id: anchorId(c.id),
    label: truncate(plainText(c.title), 26),
  }));
}
