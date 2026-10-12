import { Navigate, useParams } from 'react-router-dom';
import { ExamSetTabs } from '@/components/layout/ExamSetTabs';
import { EXAM_SETS } from '@/config/site';
import { ContentPage } from '@/features/content-page/ContentPage';

/** Practice exam sets 2 and 3: the solutions in worked-solutions/08 and /10. */
export default function ExamSetPage() {
  const { set } = useParams();
  const item = EXAM_SETS.find((s) => s.set === set && s.set !== '1');
  if (!item) {
    return <Navigate to="/exam" replace />;
  }
  return (
    <ContentPage
      key={item.set}
      collection="worked-solutions"
      chapter={item.chapter}
      variant="exercises"
      badge="เฉลย"
      tabTitle={`เฉลยข้อสอบ ${item.label}`}
      above={<ExamSetTabs />}
    />
  );
}
