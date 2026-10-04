import { Navigate, useParams } from 'react-router-dom';
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
    <ContentPage
      collection="worked-solutions"
      chapter={`0${chapter}`}
      variant="exercises"
      badge="แบบฝึกหัด"
      tabTitle={`บทที่ ${chapter}`}
    />
  );
}
