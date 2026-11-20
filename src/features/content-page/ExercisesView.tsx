import { useCallback, useMemo, useState } from 'react';
import { SelectionContext } from '@/components/content/selectionContext';
import { useSolutions } from '@/components/content/solutions';
import { SelectorBar } from '@/components/content/SelectorBar';
import { PageHeading } from '@/components/layout/PageContainer';
import type { ContentFile } from '@/content/types';
import { plainText } from '@/lib/text';
import { ExerciseOutline } from './ExerciseOutline';
import { JumpNav } from './JumpNav';
import { jumpItems } from './jumpItems';
import {
  filterTree,
  hasChoicesBlock,
  readSelection,
  writeSelection,
  type Selection,
} from './selection';

/**
 * The heading, the jump chips and the cards. When the chapter has choices, what the reader has
 * chosen decides which cards are shown and is kept for the next visit. The buttons are where the
 * Markdown puts them (`@choices`), or under the heading when it does not say.
 */
export function ExercisesView({ file, badge }: { file: ContentFile; badge?: string }) {
  const selectors = file.selectors;
  const chapterKey = `${file.collection}/${file.chapter}`;
  const [selection, setSelection] = useState<Selection>(() =>
    selectors ? readSelection(chapterKey, selectors) : {},
  );
  const { show: showSolutions } = useSolutions();
  const root = useMemo(
    () => filterTree(file.root, selection, showSolutions),
    [file.root, selection, showSolutions],
  );
  const inText = useMemo(() => hasChoicesBlock(file.root), [file.root]);

  const choose = useCallback(
    (key: string, value: string) => {
      const next = { ...selection, [key]: value };
      setSelection(next);
      writeSelection(chapterKey, next);
    },
    [selection, chapterKey],
  );

  const context = useMemo(
    () => (selectors ? { selectors, selection, onChange: choose } : null),
    [selectors, selection, choose],
  );

  return (
    <SelectionContext.Provider value={context}>
      <PageHeading title={plainText(file.title)} badge={badge} />
      {selectors && !inText ? (
        <SelectorBar selectors={selectors} selection={selection} onChange={choose} />
      ) : null}
      <JumpNav items={jumpItems(root)} label="หัวข้อในหน้านี้" />
      <ExerciseOutline root={root} />
    </SelectionContext.Provider>
  );
}
