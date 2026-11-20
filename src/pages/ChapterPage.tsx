import { Navigate, useParams } from 'react-router-dom';
import { SolutionsProvider } from '@/components/content/SolutionsProvider';
import { ChapterPicker } from '@/components/layout/ChapterPicker';
import { FloatingSolutionsSwitch } from '@/components/layout/SolutionsSwitch';
import { chapterPath, isChapterNumber } from '@/config/site';
import { ContentPage } from '@/features/content-page/ContentPage';

/** Chapter exercises of the midterm, under the picker of the chapters: worked-solutions/0N. */
export default function ChapterPage() {
  const { n } = useParams();
  const chapter = Number(n);
  if (!isChapterNumber(chapter)) {
    return <Navigate to={chapterPath(1)} replace />;
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
          <>
            <FloatingSolutionsSwitch reserveRow />
            <ChapterPicker />
          </>
        }
      />
    </SolutionsProvider>
  );
}
