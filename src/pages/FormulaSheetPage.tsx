import { TermSwitch } from '@/components/layout/TermSwitch';
import { formulasPath } from '@/components/layout/termPaths';
import { UI_TEXT } from '@/config/site';
import { ContentPage } from '@/features/content-page/ContentPage';

/** Formula sheet of a term, all its chapters: summary/00 for the midterm, final/00 for the final. */
export default function FormulaSheetPage({ term }: { term: 'mid' | 'final' }) {
  return (
    <ContentPage
      collection={term === 'mid' ? 'summary' : 'final'}
      chapter="00"
      variant="formulas"
      tabTitle={term === 'mid' ? 'สรุปสูตรกลางภาค' : UI_TEXT.finalFormulas}
      above={<TermSwitch to={formulasPath} />}
    />
  );
}
