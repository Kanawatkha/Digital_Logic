import type { ReactNode } from 'react';
import { PageContainer, PageHeading } from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/Button';
import { PageSkeleton } from '@/components/ui/Skeleton';
import { UI_TEXT } from '@/config/site';
import type { Collection, ContentNode } from '@/content/types';
import { ExerciseOutline } from './ExerciseOutline';
import { FormulaOutline } from './FormulaOutline';
import { JumpNav, type JumpItem } from './JumpNav';
import { useContentFile } from './useContentFile';
import { usePageTitle } from '@/hooks/usePageTitle';
import { anchorId } from '@/lib/ids';
import { plainText, truncate } from '@/lib/text';

type ContentPageProps = {
  collection: Collection;
  /** Two digit chapter key, "00".."06". */
  chapter: string;
  variant: 'exercises' | 'formulas';
  /** Short title for the browser tab. Defaults to the file's own title. */
  tabTitle?: string;
  badge?: string;
  /** Shown above the page heading in every state (for example the exam set switcher). */
  above?: ReactNode;
};

function jumpItems(root: ContentNode): JumpItem[] {
  return root.children.map((c) => ({
    id: anchorId(c.id),
    label: truncate(plainText(c.title), 26),
  }));
}

/** Loads a generated content file and renders it as exercise cards or as the formula sheet. */
export function ContentPage({
  collection,
  chapter,
  variant,
  tabTitle,
  badge,
  above,
}: ContentPageProps) {
  const state = useContentFile(collection, chapter);
  const title = state.status === 'ready' ? plainText(state.file.title) : undefined;
  usePageTitle(tabTitle ?? title);

  if (state.status === 'loading') {
    return (
      <PageContainer>
        {above}
        <PageSkeleton />
      </PageContainer>
    );
  }

  if (state.status === 'error') {
    return (
      <PageContainer>
        {above}
        <div role="alert" className="flex flex-col items-start gap-4">
          <p className="type-body-md">{UI_TEXT.loadError}</p>
          <Button onClick={state.retry}>{UI_TEXT.retry}</Button>
        </div>
      </PageContainer>
    );
  }

  const { file } = state;
  const items = jumpItems(file.root);

  return (
    <PageContainer className={variant === 'formulas' ? 'lg:pl-14 xl:pl-6' : undefined}>
      {above}
      {variant === 'exercises' ? (
        <>
          <PageHeading title={plainText(file.title)} badge={badge} />
          <JumpNav items={items} label="หัวข้อในหน้านี้" />
          <ExerciseOutline root={file.root} />
        </>
      ) : (
        <>
          {/* the sheet starts straight at its content; the title stays for screen readers */}
          <h1 className="sr-only">{plainText(file.title)}</h1>
          <FormulaOutline root={file.root} items={items} />
        </>
      )}
    </PageContainer>
  );
}
