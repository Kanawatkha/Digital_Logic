import { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/app/layouts/AppLayout';
import { PageContainer } from '@/components/layout/PageContainer';
import { PageSkeleton } from '@/components/ui/Skeleton';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ChapterPage = lazy(() => import('@/pages/ChapterPage'));
const ExamPage = lazy(() => import('@/pages/ExamPage'));
const FormulaSheetPage = lazy(() => import('@/pages/FormulaSheetPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export function App() {
  return (
    <HashRouter>
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
            <Route path="chapter/:n" element={<ChapterPage />} />
            <Route path="exam" element={<ExamPage />} />
            <Route path="formulas" element={<FormulaSheetPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
