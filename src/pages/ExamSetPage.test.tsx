import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { ContentFile } from '@/content/types';
import ExamPage from './ExamPage';
import ExamSetPage from './ExamSetPage';

const loadContentFile = vi.hoisted(() => vi.fn());
vi.mock('@/content/loaders', () => ({ loadContentFile }));

const file = (chapter: string, title: string): ContentFile => ({
  collection: 'worked-solutions',
  chapter,
  slug: 'x',
  title: [{ t: 'text', v: title }],
  root: {
    id: `worked-solutions/${chapter}/chapter`,
    kind: 'chapter',
    level: 1,
    title: [{ t: 'text', v: title }],
    explain: [],
    examples: [],
    children: [],
    source: { file: 'x.md', line: 1 },
  },
});

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/exam" element={<ExamPage />} />
        <Route path="/exam/:set" element={<ExamSetPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('exam pages', () => {
  beforeEach(() => {
    loadContentFile.mockReset();
    loadContentFile.mockImplementation((_c: string, chapter: string) =>
      Promise.resolve(file(chapter, `เฉลย ${chapter}`)),
    );
  });

  it('shows the solutions of set 2 from worked-solutions/08 with the set switcher', async () => {
    renderAt('/exam/2');
    expect(await screen.findByRole('heading', { level: 1, name: 'เฉลย 08' })).toBeInTheDocument();
    expect(loadContentFile).toHaveBeenCalledWith('worked-solutions', '08');
    const tabs = screen.getByRole('navigation', { name: 'ชุดข้อสอบ' });
    expect(tabs.querySelectorAll('a')).toHaveLength(3);
    expect(screen.getByRole('link', { name: 'ชุดที่ 2' })).toHaveAttribute('aria-current', 'page');
    await waitFor(() => expect(document.title).toBe('เฉลยข้อสอบ ชุดที่ 2 | Digital Logic Notes'));
  });

  it('shows the solutions of set 3 from worked-solutions/10', async () => {
    renderAt('/exam/3');
    expect(await screen.findByRole('heading', { level: 1, name: 'เฉลย 10' })).toBeInTheDocument();
    expect(loadContentFile).toHaveBeenCalledWith('worked-solutions', '10');
    expect(screen.getByRole('link', { name: 'ชุดที่ 3' })).toHaveAttribute('aria-current', 'page');
  });

  it('keeps set 1 on /exam with the same switcher', async () => {
    renderAt('/exam');
    expect(await screen.findByRole('heading', { level: 1, name: 'เฉลย 06' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'ชุดที่ 1' })).toHaveAttribute('aria-current', 'page');
  });

  it('sends an unknown set back to the first exam page', () => {
    renderAt('/exam/9');
    expect(loadContentFile).not.toHaveBeenCalledWith('worked-solutions', '08');
    expect(loadContentFile).not.toHaveBeenCalledWith('worked-solutions', '10');
  });
});
