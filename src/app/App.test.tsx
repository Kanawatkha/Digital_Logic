import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { ContentFile } from '@/content/types';
import { AppRoutes } from './App';

const loadContentFile = vi.hoisted(() => vi.fn());
vi.mock('@/content/loaders', () => ({ loadContentFile }));
// the frame of the site (navbar, toasts) is not what is tested here
vi.mock('@/app/layouts/AppLayout', async () => {
  const { Outlet } = await import('react-router-dom');
  return { AppLayout: () => <Outlet /> };
});

const file = (collection: string, chapter: string): ContentFile => ({
  collection: collection as ContentFile['collection'],
  chapter,
  slug: 'x',
  title: [{ t: 'text', v: `${collection} ${chapter}` }],
  root: {
    id: `${collection}/${chapter}/chapter`,
    kind: 'chapter',
    level: 1,
    title: [{ t: 'text', v: `${collection} ${chapter}` }],
    explain: [],
    examples: [],
    children: [],
    source: { file: 'x.md', line: 1 },
  },
});

function Where() {
  return <p data-testid="where">{useLocation().pathname}</p>;
}

function open(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
      <Where />
    </MemoryRouter>,
  );
}
const where = () => screen.getByTestId('where').textContent;

beforeEach(() => {
  loadContentFile.mockReset();
  loadContentFile.mockImplementation((collection: string, chapter: string) =>
    Promise.resolve(file(collection, chapter)),
  );
});

describe('the addresses of the site', () => {
  it('opens a chapter of the midterm at /chapters/mid/:n, and the chapters at the first one', async () => {
    open('/chapters/mid/3');
    expect(
      // the first lazy page of the file is loaded here, which can take longer than a second
      await screen.findByRole(
        'heading',
        { level: 1, name: 'worked-solutions 03' },
        { timeout: 5000 },
      ),
    ).toBeInTheDocument();
    expect(where()).toBe('/chapters/mid/3');
  });

  it.each([
    ['/chapters', '/chapters/mid/1'],
    ['/chapters/mid', '/chapters/mid/1'],
    ['/chapters/mid/9', '/chapters/mid/1'],
    ['/chapters/final', '/chapters/final/6'],
    ['/chapters/final/3', '/chapters/final/6'],
    ['/exam', '/exam/mid'],
    ['/exam/mid/9', '/exam/mid'],
    ['/formulas', '/formulas/mid'],
  ])('sends %s to %s', async (from, to) => {
    open(from);
    await waitFor(() => expect(where()).toBe(to));
  });

  it.each([
    ['/chapter/1', '/chapters/mid/1'],
    ['/chapter/5', '/chapters/mid/5'],
    ['/exam/2', '/exam/mid/2'],
    ['/exam/3', '/exam/mid/3'],
    ['/exam/4', '/exam/mid/4'],
    ['/exam/xyz', '/exam/mid'],
  ])('keeps the old address %s working: it goes to %s', async (from, to) => {
    open(from);
    await waitFor(() => expect(where()).toBe(to));
  });

  it('opens an exam set of the midterm, and the formula sheet of the midterm', async () => {
    open('/exam/mid/2');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'worked-solutions 07' }),
    ).toBeInTheDocument();
  });

  it('opens the exam of the final at its first big problem, and each problem from its own file', async () => {
    open('/exam/final');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'final-exam 01' }),
    ).toBeInTheDocument();
    expect(where()).toBe('/exam/final/1');
    expect(loadContentFile).toHaveBeenCalledWith('final-exam', '01');
  });

  it('opens a big problem of the exam of the final, and sends an unknown one to the first', async () => {
    const view = open('/exam/final/3');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'final-exam 03' }),
    ).toBeInTheDocument();
    expect(loadContentFile).toHaveBeenCalledWith('final-exam', '03');
    view.unmount();
    open('/exam/final/9');
    await waitFor(() => expect(where()).toBe('/exam/final/1'));
  });

  it('opens the formula sheet of each term from its own file: summary/00 and final/00', async () => {
    const mid = open('/formulas/mid');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'summary 00' }),
    ).toBeInTheDocument();
    expect(loadContentFile).toHaveBeenCalledWith('summary', '00');
    mid.unmount();
    open('/formulas/final');
    expect(await screen.findByRole('heading', { level: 1, name: 'final 00' })).toBeInTheDocument();
    expect(loadContentFile).toHaveBeenCalledWith('final', '00');
  });

  it('opens chapter 6 of the final from the final collection, as it is written', async () => {
    open('/chapters/final/6');
    expect(await screen.findByRole('heading', { level: 1, name: 'final 06' })).toBeInTheDocument();
    expect(loadContentFile).toHaveBeenCalledWith('final', '06');
    expect(where()).toBe('/chapters/final/6');
  });

  it('puts the switch between the terms on the final pages, and the chapter picker on the chapters', async () => {
    const exam = open('/exam/final/2');
    const terms = await screen.findByRole('navigation', { name: 'ภาคการศึกษา' });
    expect(terms.querySelector('[aria-current="page"]')).toHaveTextContent('ปลายภาค');
    exam.unmount();
    open('/chapters/final/8');
    const picker = await screen.findByRole('navigation', { name: 'เลือกบท' });
    expect(picker.querySelector('[aria-current="page"]')).toHaveAttribute('aria-label', 'บทที่ 8');
    expect(picker.querySelectorAll('a[href^="/chapters/final/"]')).toHaveLength(5);
  });

  it('puts the switch on the formula sheet of the midterm, on the midterm, and of the final, on the final', async () => {
    const mid = open('/formulas/mid');
    const terms = await screen.findByRole('navigation', { name: 'ภาคการศึกษา' });
    expect(terms.querySelector('[aria-current="page"]')).toHaveTextContent('กลางภาค');
    mid.unmount();
    open('/formulas/final');
    const final = await screen.findByRole('navigation', { name: 'ภาคการศึกษา' });
    expect(final.querySelector('[aria-current="page"]')).toHaveTextContent('ปลายภาค');
  });

  it('does not take a path it does not know for a page', async () => {
    open('/nowhere');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'ไม่พบหน้านี้' }),
    ).toBeInTheDocument();
  });
});
