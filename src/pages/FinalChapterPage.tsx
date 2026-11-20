import { Navigate, useParams } from 'react-router-dom';
import { SolutionsProvider } from '@/components/content/SolutionsProvider';
import { ChapterPicker } from '@/components/layout/ChapterPicker';
import { FloatingSolutionsSwitch } from '@/components/layout/SolutionsSwitch';
import { finalChapterPath, findFinalChapter } from '@/config/site';
import { ContentPage } from '@/features/content-page/ContentPage';

/** A chapter of the final (6 to 10) under the chapter picker: final/NN, explanation and examples. */
export default function FinalChapterPage() {
  const { n } = useParams();
  const chapter = findFinalChapter(Number(n));
  if (!chapter) return <Navigate to={finalChapterPath(6)} replace />;
  return (
    <SolutionsProvider>
      <ContentPage
        key={chapter.n}
        collection="final"
        chapter={String(chapter.n).padStart(2, '0')}
        variant="exercises"
        badge="เนื้อหาปลายภาค"
        tabTitle={`บทที่ ${chapter.n}`}
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
