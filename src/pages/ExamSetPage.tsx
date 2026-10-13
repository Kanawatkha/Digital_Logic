import { Navigate, useParams } from 'react-router-dom';
import { SolutionsProvider } from '@/components/content/SolutionsProvider';
import { ExamSetTabs } from '@/components/layout/ExamSetTabs';
import { EXAM_SETS } from '@/config/site';
import { ContentPage } from '@/features/content-page/ContentPage';

/** Practice exam sets 2 to 4: worked-solutions/07 to /09. */
export default function ExamSetPage() {
  const { set } = useParams();
  const item = EXAM_SETS.find((s) => s.set === set && s.set !== '1');
  if (!item) {
    return <Navigate to="/exam" replace />;
  }
  return (
    <SolutionsProvider>
      <ContentPage
        key={item.set}
        collection="worked-solutions"
        chapter={item.chapter}
        variant="exercises"
        badge="แนวข้อสอบ"
        tabTitle={`ข้อสอบกลางภาค ${item.label}`}
        above={<ExamSetTabs />}
      />
    </SolutionsProvider>
  );
}
