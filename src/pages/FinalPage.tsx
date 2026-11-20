import { TermSwitch } from '@/components/layout/TermSwitch';
import { PageContainer, PageHeading } from '@/components/layout/PageContainer';
import { examPath, formulasPath } from '@/components/layout/termPaths';
import { UI_TEXT } from '@/config/site';
import { usePageTitle } from '@/hooks/usePageTitle';

const PAGES = {
  exam: { title: UI_TEXT.finalExam },
  formulas: { title: UI_TEXT.finalFormulas },
} as const;

/**
 * A page of the final that has no content yet: the exam or the formula sheet. It has the switch
 * between the terms and says that it is being made.
 */
export default function FinalPage({ kind }: { kind: keyof typeof PAGES }) {
  const { title } = PAGES[kind];
  usePageTitle(title);
  return (
    <PageContainer>
      {kind === 'exam' ? <TermSwitch to={examPath} /> : null}
      {kind === 'formulas' ? <TermSwitch to={formulasPath} /> : null}
      <PageHeading title={title} badge={UI_TEXT.comingSoon} lead={UI_TEXT.finalSoon} />
    </PageContainer>
  );
}
