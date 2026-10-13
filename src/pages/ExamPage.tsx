import { SolutionsProvider } from '@/components/content/SolutionsProvider';
import { ExamSetTabs } from '@/components/layout/ExamSetTabs';
import { ContentPage } from '@/features/content-page/ContentPage';

/** Midterm practice exam, set 1: worked-solutions/06. */
export default function ExamPage() {
  return (
    <SolutionsProvider>
      <ContentPage
        collection="worked-solutions"
        chapter="06"
        variant="exercises"
        badge="แนวข้อสอบ"
        tabTitle="ข้อสอบกลางภาค"
        above={<ExamSetTabs />}
      />
    </SolutionsProvider>
  );
}
