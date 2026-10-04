import type { Inline } from '@/content/types';

/** Plain text of inline nodes (formulas are skipped). Used for page titles and short labels. */
export function plainText(nodes: Inline[]): string {
  return nodes
    .map((n) => {
      if (n.t === 'text' || n.t === 'code') return n.v;
      if (n.t === 'strong') return plainText(n.c);
      return '';
    })
    .join('')
    .replace(/\s+/g, ' ')
    .trim();
}

export function truncate(text: string, max: number): string {
  return text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;
}
