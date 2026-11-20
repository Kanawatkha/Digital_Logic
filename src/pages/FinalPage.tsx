import { TermSwitch } from '@/components/layout/TermSwitch';
import { PageContainer, PageHeading } from '@/components/layout/PageContainer';
import { examPath } from '@/components/layout/termPaths';
import { UI_TEXT } from '@/config/site';
import { usePageTitle } from '@/hooks/usePageTitle';

/**
 * The exam page of the final, which has no content yet. It has the switch between the terms and says
 * that it is being made.
 */
export default function FinalPage() {
  usePageTitle(UI_TEXT.finalExam);
  return (
    <PageContainer>
      <TermSwitch to={examPath} />
      <PageHeading title={UI_TEXT.finalExam} badge={UI_TEXT.comingSoon} lead={UI_TEXT.finalSoon} />
    </PageContainer>
  );
}
