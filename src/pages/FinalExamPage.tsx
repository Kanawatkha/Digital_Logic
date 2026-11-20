import { Navigate, useParams } from 'react-router-dom';
import { SolutionsProvider } from '@/components/content/SolutionsProvider';
import { FinalExamTabs } from '@/components/layout/FinalExamTabs';
import { finalExamPath, findFinalExamProblem } from '@/config/site';
import { ContentPage } from '@/features/content-page/ContentPage';

/** One of the four big problems of the exam of the final: final-exam/01 to /04. */
export default function FinalExamPage() {
  const { n } = useParams();
  const problem = findFinalExamProblem(Number(n));
  if (!problem) return <Navigate to={finalExamPath(1)} replace />;
  return (
    <SolutionsProvider>
      <ContentPage
        key={problem.n}
        collection="final-exam"
        chapter={String(problem.n).padStart(2, '0')}
        variant="exercises"
        badge="แนวข้อสอบปลายภาค"
        tabTitle={`ข้อสอบปลายภาค ข้อ ${problem.n}`}
        above={<FinalExamTabs />}
      />
    </SolutionsProvider>
  );
}
