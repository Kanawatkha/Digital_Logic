import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { ContentFile, ContentNode } from '@/content/types';
import { ContentPage } from './ContentPage';

const loadContentFile = vi.hoisted(() => vi.fn());
vi.mock('@/content/loaders', () => ({ loadContentFile }));

const t = (v: string) => [{ t: 'text' as const, v }];
const node = (
  id: string,
  level: 1 | 2 | 3,
  title: string,
  over: Partial<ContentNode> = {},
): ContentNode => ({
  id,
  kind: level === 1 ? 'chapter' : level === 2 ? 'group' : 'exercise',
  level,
  title: t(title),
  explain: [],
  examples: [],
  children: [],
  source: { file: 'x.md', line: 1 },
  ...over,
});

const file: ContentFile = {
  collection: 'worked-solutions',
  chapter: '03',
  slug: 'boolean-algebra',
  title: t('บทที่ 3 พีชคณิตบูลีน'),
  root: node('worked-solutions/03/chapter', 1, 'บทที่ 3 พีชคณิตบูลีน', {
    children: [
      node('worked-solutions/03/h2-1', 2, 'ลดรูปสมการ', {
        children: [
          node('worked-solutions/03/h2-1.h3-1', 3, 'ข้อ 1  จงลดรูป', {
            examples: [
              {
                t: 'example',
                id: 'e1',
                problem: [],
                sol: [{ t: 'p', c: t('วิธีทำ') }],
                ans: [{ t: 'p', c: t('คำตอบสุดท้าย') }],
              },
            ],
          }),
          node('worked-solutions/03/h2-1.h3-2', 3, 'หัวข้อว่าง'),
        ],
      }),
      node('worked-solutions/03/h2-2', 2, 'พิสูจน์'),
    ],
  }),
};

const renderPage = () =>
  render(
    <MemoryRouter>
      <ContentPage
        collection="worked-solutions"
        chapter="03"
        variant="exercises"
        badge="แบบฝึกหัด"
      />
    </MemoryRouter>,
  );

describe('ContentPage', () => {
  beforeEach(() => {
    loadContentFile.mockReset();
  });

  it('shows the skeleton while loading, then the heading, chips, groups and exercise cards', async () => {
    loadContentFile.mockResolvedValue(file);
    const { container } = renderPage();
    expect(container.querySelector('[aria-busy="true"]')).not.toBeNull();

    expect(
      await screen.findByRole('heading', { level: 1, name: 'บทที่ 3 พีชคณิตบูลีน' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'หัวข้อในหน้านี้' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'ลดรูปสมการ' })).toBeInTheDocument();
    const card = screen
      .getByRole('heading', { level: 3, name: 'ข้อ 1 จงลดรูป' })
      .closest('article');
    expect(card).toHaveTextContent('คำตอบสุดท้าย');
    // a heading without a body is a plain sub-heading, not a card
    expect(
      screen.getByRole('heading', { level: 3, name: 'หัวข้อว่าง' }).closest('article'),
    ).toBeNull();
    expect(document.title).toBe('บทที่ 3 พีชคณิตบูลีน | Digital Logic Notes');
  });

  it('shows an error with a retry button and recovers', async () => {
    loadContentFile.mockRejectedValueOnce(new Error('network')).mockResolvedValue(file);
    renderPage();
    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent('โหลดเนื้อหาไม่สำเร็จ');
    fireEvent.click(screen.getByRole('button', { name: 'ลองอีกครั้ง' }));
    expect(await screen.findByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(loadContentFile).toHaveBeenCalledTimes(2);
  });
});
