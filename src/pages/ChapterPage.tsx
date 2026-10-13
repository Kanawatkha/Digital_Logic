import { Navigate, useParams } from 'react-router-dom';
import { SolutionsProvider } from '@/components/content/SolutionsProvider';
import { SolutionsSwitch } from '@/components/layout/SolutionsSwitch';
import { isChapterNumber } from '@/config/site';
import { ContentPage } from '@/features/content-page/ContentPage';

/** Chapter exercises: worked-solutions/0N. */
export default function ChapterPage() {
  const { n } = useParams();
  const chapter = Number(n);
  if (!isChapterNumber(chapter)) {
    return <Navigate to="/" replace />;
  }
  return (
    <SolutionsProvider>
      <ContentPage
        key={chapter}
        collection="worked-solutions"
        chapter={`0${chapter}`}
        variant="exercises"
        badge="แบบฝึกหัด"
        tabTitle={`บทที่ ${chapter}`}
        above={
          <div className="mb-6 flex justify-end">
            <SolutionsSwitch />
          </div>
        }
      />
    </SolutionsProvider>
  );
}
