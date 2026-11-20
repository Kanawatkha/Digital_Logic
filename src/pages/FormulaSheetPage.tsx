import { TermSwitch } from '@/components/layout/TermSwitch';
import { formulasPath } from '@/components/layout/termPaths';
import { ContentPage } from '@/features/content-page/ContentPage';

/** Formula sheet of the midterm, all the chapters: summary/00. */
export default function FormulaSheetPage() {
  return (
    <ContentPage
      collection="summary"
      chapter="00"
      variant="formulas"
      tabTitle="สรุปสูตรกลางภาค"
      above={<TermSwitch to={formulasPath} />}
    />
  );
}
