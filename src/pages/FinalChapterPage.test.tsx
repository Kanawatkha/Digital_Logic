import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { ContentFile } from '@/content/types';
import FinalChapterPage from './FinalChapterPage';

const loadContentFile = vi.hoisted(() => vi.fn());
vi.mock('@/content/loaders', () => ({ loadContentFile }));

const file: ContentFile = {
  collection: 'final',
  chapter: '06',
  slug: 'decoders',
  title: [{ t: 'text', v: 'บทที่ 6 วงจรถอดรหัส' }],
  root: {
    id: 'final/06/chapter',
    kind: 'chapter',
    level: 1,
    title: [{ t: 'text', v: 'บทที่ 6 วงจรถอดรหัส' }],
    explain: [],
    examples: [],
    children: [],
    source: { file: 'x.md', line: 1 },
  },
};

function open(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/chapters/final/:n" element={<FinalChapterPage />} />
        <Route path="/chapters/final" element={<p>no chapter</p>} />
      </Routes>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  loadContentFile.mockReset();
  loadContentFile.mockResolvedValue(file);
});

describe('a chapter of the final', () => {
  it('loads the Markdown of the chapter, from the final collection', async () => {
    open('/chapters/final/6');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'บทที่ 6 วงจรถอดรหัส' }),
    ).toBeInTheDocument();
    expect(loadContentFile).toHaveBeenCalledWith('final', '06');
    expect(screen.getByRole('navigation', { name: 'เลือกบท' })).toBeInTheDocument();
  });

  it('uses two digits for the file of chapter 10', async () => {
    open('/chapters/final/10');
    await screen.findByRole('heading', { level: 1 });
    expect(loadContentFile).toHaveBeenCalledWith('final', '10');
  });
});
