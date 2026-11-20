import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { ContentFile, ContentNode } from '@/content/types';
import { SolutionsProvider } from '@/components/content/SolutionsProvider';
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
    // the title is set by an effect, so it can land a moment after the heading
    await waitFor(() => expect(document.title).toBe('บทที่ 3 พีชคณิตบูลีน | Digital Logic Notes'));
  });

  it('shows the cards of the choice that is on, and changes them when another button is pressed', async () => {
    localStorage.clear();
    const card = (id: string, title: string, when?: ContentNode['when']) =>
      node(`worked-solutions/03/${id}`, 3, title, {
        ...(when ? { when } : {}),
        explain: [{ t: 'p', c: t(`ข้อความของ ${title}`) }],
      });
    const chosen: ContentFile = {
      ...file,
      selectors: [
        {
          key: 'code',
          label: 'รหัสอินพุต',
          options: [
            { value: 'bcd', label: 'BCD-8421' },
            { value: 'xs3', label: 'Excess-3' },
          ],
        },
      ],
      root: node('worked-solutions/03/chapter', 1, 'บทที่ 3 พีชคณิตบูลีน', {
        children: [
          node('worked-solutions/03/h2-1', 2, 'หัวข้อ', {
            children: [
              card('a', 'การ์ด BCD', { code: ['bcd'] }),
              card('b', 'การ์ด Excess-3', { code: ['xs3'] }),
              card('c', 'การ์ดของทุกแบบ'),
            ],
          }),
        ],
      }),
    };
    loadContentFile.mockResolvedValue(chosen);
    renderPage();
    expect(await screen.findByRole('heading', { level: 3, name: 'การ์ด BCD' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3, name: 'การ์ด Excess-3' })).toBeNull();
    expect(screen.getByRole('button', { name: 'BCD-8421' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );

    fireEvent.click(screen.getByRole('button', { name: 'Excess-3' }));
    expect(screen.getByRole('heading', { level: 3, name: 'การ์ด Excess-3' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3, name: 'การ์ด BCD' })).toBeNull();
    expect(screen.getByRole('heading', { level: 3, name: 'การ์ดของทุกแบบ' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Excess-3' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('shows the buttons where the chapter puts them, and not under the heading as well', async () => {
    localStorage.clear();
    const chosen: ContentFile = {
      ...file,
      selectors: [
        {
          key: 'code',
          label: 'รหัสอินพุต',
          options: [
            { value: 'bcd', label: 'BCD-8421' },
            { value: 'xs3', label: 'Excess-3' },
          ],
        },
      ],
      root: node('worked-solutions/03/chapter', 1, 'บทที่ 3 พีชคณิตบูลีน', {
        children: [
          node('worked-solutions/03/h2-1', 2, 'หัวข้อ', {
            explain: [{ t: 'choices' }],
            children: [
              node('worked-solutions/03/h2-1.h3-1', 3, 'การ์ด BCD', {
                when: { code: ['bcd'] },
                explain: [{ t: 'p', c: t('ข้อความ BCD') }],
              }),
            ],
          }),
        ],
      }),
    };
    loadContentFile.mockResolvedValue(chosen);
    renderPage();
    await screen.findByRole('heading', { level: 2, name: 'หัวข้อ' });
    const groups = screen.getAllByRole('group', { name: 'รหัสอินพุต' });
    expect(groups).toHaveLength(1);
    const section = screen.getByRole('heading', { level: 2, name: 'หัวข้อ' }).closest('section');
    expect(section).toContainElement(groups[0]);
    fireEvent.click(screen.getByRole('button', { name: 'Excess-3' }));
    expect(screen.queryByRole('heading', { level: 3, name: 'การ์ด BCD' })).toBeNull();
  });

  it('hides the sections that are solutions when the solutions switch is off, and shows them when it is on', async () => {
    const withSolution: ContentFile = {
      ...file,
      root: node('worked-solutions/03/chapter', 1, 'บทที่ 3 พีชคณิตบูลีน', {
        children: [
          node('worked-solutions/03/h2-1', 2, 'โจทย์'),
          node('worked-solutions/03/h2-2', 2, 'เฉลย', { solution: true }),
        ],
      }),
    };
    loadContentFile.mockResolvedValue(withSolution);
    const view = (stored: string) => {
      localStorage.setItem('dln:show-solutions', stored);
      return render(
        <MemoryRouter>
          <SolutionsProvider>
            <ContentPage
              collection="worked-solutions"
              chapter="03"
              variant="exercises"
              badge="แนวข้อสอบ"
            />
          </SolutionsProvider>
        </MemoryRouter>,
      );
    };
    const off = view('0');
    await screen.findByRole('heading', { level: 2, name: 'โจทย์' });
    expect(screen.queryByRole('heading', { level: 2, name: 'เฉลย' })).toBeNull();
    off.unmount();
    view('1');
    expect(await screen.findByRole('heading', { level: 2, name: 'เฉลย' })).toBeInTheDocument();
    localStorage.clear();
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
