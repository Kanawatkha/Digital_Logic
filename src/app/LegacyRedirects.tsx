import { Navigate, useParams } from 'react-router-dom';
import { chapterPath } from '@/config/site';

/** `#/chapter/3`, the address a chapter had before the chapters were gathered in one page. */
export function LegacyChapter() {
  const { n } = useParams();
  const chapter = Number(n);
  return <Navigate to={Number.isInteger(chapter) ? chapterPath(chapter) : '/chapters'} replace />;
}

/** `#/exam/2`, the address of an exam set before the exams were split into the midterm and the final. */
export function LegacyExamSet() {
  const { set } = useParams();
  return <Navigate to={set && /^[2-9]$/.test(set) ? `/exam/mid/${set}` : '/exam/mid'} replace />;
}
