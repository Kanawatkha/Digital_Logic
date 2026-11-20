import { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/app/layouts/AppLayout';
import { LegacyChapter, LegacyExamSet } from '@/app/LegacyRedirects';
import { PageContainer } from '@/components/layout/PageContainer';
import { PageSkeleton } from '@/components/ui/Skeleton';
import { installDragScroll } from '@/lib/dragScroll';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ChapterPage = lazy(() => import('@/pages/ChapterPage'));
const ExamPage = lazy(() => import('@/pages/ExamPage'));
const ExamSetPage = lazy(() => import('@/pages/ExamSetPage'));
const FinalChapterPage = lazy(() => import('@/pages/FinalChapterPage'));
const FinalPage = lazy(() => import('@/pages/FinalPage'));
const FormulaSheetPage = lazy(() => import('@/pages/FormulaSheetPage'));
const LabPage = lazy(() => import('@/pages/LabPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

/** The pages of the site, with the addresses of before redirected to the new ones. */
export function AppRoutes() {
  return (
    <Suspense
      fallback={
        <PageContainer>
          <PageSkeleton />
        </PageContainer>
      }
    >
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="chapters" element={<Navigate to="/chapters/mid/1" replace />} />
          <Route path="chapters/mid" element={<Navigate to="/chapters/mid/1" replace />} />
          <Route path="chapters/mid/:n" element={<ChapterPage />} />
          <Route path="chapters/final" element={<Navigate to="/chapters/final/6" replace />} />
          <Route path="chapters/final/:n" element={<FinalChapterPage />} />
          <Route path="exam" element={<Navigate to="/exam/mid" replace />} />
          <Route path="exam/mid" element={<ExamPage />} />
          <Route path="exam/mid/:set" element={<ExamSetPage />} />
          <Route path="exam/final" element={<FinalPage kind="exam" />} />
          <Route path="formulas" element={<Navigate to="/formulas/mid" replace />} />
          <Route path="formulas/mid" element={<FormulaSheetPage />} />
          <Route path="formulas/final" element={<FinalPage kind="formulas" />} />
          {/* the addresses from before the chapters and the exams were gathered by term */}
          <Route path="chapter/:n" element={<LegacyChapter />} />
          <Route path="exam/:set" element={<LegacyExamSet />} />
          <Route path="lab" element={<LabPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export function App() {
  useEffect(installDragScroll, []);
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}
