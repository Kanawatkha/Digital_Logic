import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { ContentFile, ContentNode, Manifest } from '@/content/types';
import { HomeDiagram } from './HomeDiagram';

const loaders = vi.hoisted(() => ({ loadManifest: vi.fn(), loadContentFile: vi.fn() }));
vi.mock('@/content/loaders', () => loaders);

const t = (v: string) => [{ t: 'text' as const, v }];
const node = (id: string, title: string, over: Partial<ContentNode> = {}): ContentNode => ({
  id,
  kind: 'topic',
  level: 3,
  title: t(title),
  explain: [{ t: 'p', c: t(`อธิบาย ${title}`) }],
  examples: [],
  children: [],
  source: { file: 'x.md', line: 1 },
  ...over,
});

const example = {
  t: 'example' as const,
  id: 'e1',
  problem: [],
  sol: [{ t: 'p' as const, c: t('วิธีทำ') }],
  ans: [],
};
const file: ContentFile = {
  collection: 'summary',
  chapter: '01',
  slug: 's',
  title: t('บท 1'),
  root: node('summary/01/chapter', 'บท 1', {
    kind: 'chapter',
    level: 1,
    explain: [],
    children: [
      node('g', '1. กลุ่ม', {
        kind: 'section',
        level: 2,
        children: [node('g.t', '1.1 หัวข้อย่อย', { examples: [example] })],
      }),
      node('l', '2. ใบ', { kind: 'section', level: 2 }),
    ],
  }),
};
const manifest: Manifest = {
  collections: {
    summary: [
      {
        chapter: '00',
        slug: 'f',
        title: 'สรุปสูตรรวม',
        file: '',
        nodes: 0,
        examples: 0,
        figures: 0,
      },
      {
        chapter: '01',
        slug: 's',
        title: 'สรุปบทที่ 1 ระบบเลขฐาน',
        file: '',
        nodes: 0,
        examples: 0,
        figures: 0,
      },
    ],
    'worked-solutions': [],
  },
};

describe('HomeDiagram', () => {
  beforeEach(() => {
    loaders.loadManifest.mockResolvedValue(manifest);
    loaders.loadContentFile.mockResolvedValue(file);
  });

  it('starts with only the root and opens columns to the right', async () => {
    render(<HomeDiagram />);
    const root = screen.getByRole('button', { name: /Midterm/ });
    expect(root).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText('ระบบเลขฐาน')).toBeNull();

    fireEvent.click(root);
    const chapter = await screen.findByRole('button', { name: /ระบบเลขฐาน/ });
    expect(chapter).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText('สรุปสูตรรวม')).toBeNull();

    fireEvent.click(chapter);
    fireEvent.click(await screen.findByRole('button', { name: '1. กลุ่ม' }));
    fireEvent.click(await screen.findByRole('button', { name: '1.1 หัวข้อย่อย' }));
    expect(screen.getByText('อธิบาย 1.1 หัวข้อย่อย')).toBeInTheDocument();
    expect(screen.queryByText('วิธีทำ')).toBeNull();
  });

  it('shows examples only after the button, and Esc closes them and returns focus', async () => {
    render(<HomeDiagram />);
    fireEvent.click(screen.getByRole('button', { name: /Midterm/ }));
    fireEvent.click(await screen.findByRole('button', { name: /ระบบเลขฐาน/ }));
    fireEvent.click(await screen.findByRole('button', { name: '1. กลุ่ม' }));
    fireEvent.click(await screen.findByRole('button', { name: '1.1 หัวข้อย่อย' }));

    const examples = screen.getByRole('button', { name: 'ดูตัวอย่าง (1)' });
    fireEvent.click(examples);
    expect(screen.getByText('วิธีทำ')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'ซ่อนตัวอย่าง' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );

    fireEvent.keyDown(screen.getByRole('button', { name: 'ซ่อนตัวอย่าง' }), { key: 'Escape' });
    expect(screen.queryByText('วิธีทำ')).toBeNull();
    expect(screen.getByRole('button', { name: 'ดูตัวอย่าง (1)' })).toHaveFocus();
  });

  it('keeps one open node per column', async () => {
    render(<HomeDiagram />);
    fireEvent.click(screen.getByRole('button', { name: /Midterm/ }));
    fireEvent.click(await screen.findByRole('button', { name: /ระบบเลขฐาน/ }));
    const group = await screen.findByRole('button', { name: '1. กลุ่ม' });
    const leaf = screen.getByRole('button', { name: '2. ใบ' });
    fireEvent.click(group);
    expect(group).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(leaf);
    expect(group).toHaveAttribute('aria-expanded', 'false');
    expect(leaf).toHaveAttribute('aria-expanded', 'true');
    expect(screen.queryByRole('button', { name: '1.1 หัวข้อย่อย' })).toBeNull();
  });

  it('collapses everything when the root closes', async () => {
    render(<HomeDiagram />);
    const root = screen.getByRole('button', { name: /Midterm/ });
    fireEvent.click(root);
    fireEvent.click(await screen.findByRole('button', { name: /ระบบเลขฐาน/ }));
    fireEvent.click(root);
    expect(screen.queryByRole('button', { name: /ระบบเลขฐาน/ })).toBeNull();
  });

  it('shows an error with retry when a chapter fails to load', async () => {
    loaders.loadContentFile.mockRejectedValueOnce(new Error('x')).mockResolvedValue(file);
    render(<HomeDiagram />);
    fireEvent.click(screen.getByRole('button', { name: /Midterm/ }));
    fireEvent.click(await screen.findByRole('button', { name: /ระบบเลขฐาน/ }));
    fireEvent.click(await screen.findByRole('button', { name: 'ลองอีกครั้ง' }));
    expect(await screen.findByRole('button', { name: '1. กลุ่ม' })).toBeInTheDocument();
  });
});
