import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { ContentNode } from '@/content/types';
import { FormulaOutline } from './FormulaOutline';

const t = (v: string) => [{ t: 'text' as const, v }];
const node = (id: string, title: string, children: ContentNode[] = []): ContentNode => ({
  id,
  kind: children.length ? 'section' : 'topic',
  level: children.length ? 2 : 3,
  title: t(title),
  explain: [],
  examples: [],
  children,
  source: { file: 'x.md', line: 1 },
});

const root = node('r', 'root', [
  node('s1', 'บทที่ 1', [node('s1.a', '1.1 เลขฐาน'), node('s1.b', '1.2 แปลงฐาน')]),
  node('s2', 'บทที่ 2', [node('s2.a', '2.1 พื้นฐาน')]),
]);

describe('FormulaOutline contents rail', () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
    Element.prototype.scrollTo = vi.fn();
    window.scrollTo = vi.fn();
    window.matchMedia = vi
      .fn()
      .mockReturnValue({ matches: false }) as unknown as typeof window.matchMedia;
  });

  it('lists chapters and topics and marks the entry that was chosen', () => {
    render(<FormulaOutline root={root} items={[]} />);
    const nav = screen.getByRole('navigation', { name: 'สารบัญสูตร' });
    const entry = nav.querySelector('[data-rail-id="n-s1.b"]') as HTMLElement;
    fireEvent.click(entry);
    expect(entry).toHaveAttribute('aria-current', 'location');
    expect(nav.querySelectorAll('[aria-current]')).toHaveLength(1);
  });

  it('can be folded away and brought back with the toggle', () => {
    render(<FormulaOutline root={root} items={[]} />);
    const toggle = screen.getByRole('button', { name: 'สารบัญ' });
    const rail = document.getElementById('formula-rail')?.parentElement
      ?.parentElement as HTMLElement;
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(rail).not.toHaveAttribute('inert');

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(rail).toHaveAttribute('inert');

    fireEvent.click(toggle);
    expect(rail).not.toHaveAttribute('inert');
  });
});
