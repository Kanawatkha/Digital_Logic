import type { Selection } from '@/components/content/selectionContext';
import type { ContentNode, Selector } from '@/content/types';

export type { Selection };

/** The first option of every selector. */
export function defaultSelection(selectors: Selector[]): Selection {
  return Object.fromEntries(selectors.map((s) => [s.key, s.options[0].value]));
}

/** Shown when every choice that the node names has the value that is selected. A node with none is always shown. */
export function isVisible(node: ContentNode, selection: Selection): boolean {
  return Object.entries(node.when ?? {}).every(([key, values]) => values.includes(selection[key]));
}

/** The tree without the nodes that the selection hides (and without what is inside them). */
export function filterTree(node: ContentNode, selection: Selection): ContentNode {
  return {
    ...node,
    children: node.children
      .filter((c) => isVisible(c, selection))
      .map((c) => filterTree(c, selection)),
  };
}

const storageKey = (chapterKey: string) => `dl-selection:${chapterKey}`;

/** The saved choices of a chapter, kept only where they still name an option that exists. */
export function readSelection(chapterKey: string, selectors: Selector[]): Selection {
  const base = defaultSelection(selectors);
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(storageKey(chapterKey)) ?? 'null');
    if (typeof saved !== 'object' || saved === null) return base;
    for (const s of selectors) {
      const v = (saved as Record<string, unknown>)[s.key];
      if (typeof v === 'string' && s.options.some((o) => o.value === v)) base[s.key] = v;
    }
  } catch {
    // no storage (private window, blocked): the defaults
  }
  return base;
}

export function writeSelection(chapterKey: string, selection: Selection): void {
  try {
    localStorage.setItem(storageKey(chapterKey), JSON.stringify(selection));
  } catch {
    // the choice then lasts for the visit only
  }
}

/** True when the Markdown has an `@choices` line, so the buttons are shown there and not at the top. */
export function hasChoicesBlock(node: ContentNode): boolean {
  return (
    [...node.explain, ...node.examples].some((b) => b.t === 'choices') ||
    node.children.some(hasChoicesBlock)
  );
}
