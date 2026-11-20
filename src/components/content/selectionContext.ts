import { createContext, useContext } from 'react';
import type { Selector } from '@/content/types';

/** What the reader has chosen: the value of each selector of the page, by key. */
export type Selection = Record<string, string>;

type Choices = {
  selectors: Selector[];
  selection: Selection;
  onChange: (key: string, value: string) => void;
};

/** The choices of the page, for the `choices` block that shows their buttons where the Markdown puts it. */
export const SelectionContext = createContext<Choices | null>(null);

export const useChoices = () => useContext(SelectionContext);
