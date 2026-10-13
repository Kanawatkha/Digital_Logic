import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { Block, Inline } from '@/content/types';
import { BlockList } from '@/components/content/BlockRenderer';
import { SolutionsContext } from '@/components/content/solutions';

const text = (v: string): Inline => ({ t: 'text', v });
const math = (tex: string): Inline => ({ t: 'math', tex, html: `<span class="katex">${tex}</span>` });

describe('BlockRenderer', () => {
  it('renders paragraphs with bold text and inline math', () => {
    const blocks: Block[] = [{ t: 'p', c: [{ t: 'strong', c: [text('สูตร')] }, text(' '), math('x')] }];
    const { container } = render(<BlockList blocks={blocks} />);
    expect(screen.getByText('สูตร').tagName).toBe('STRONG');
    expect(container.querySelector('.katex')).toHaveTextContent('x');
  });

  it('renders display math inside a scrolling wrapper', () => {
    const { container } = render(
      <BlockList blocks={[{ t: 'math', tex: 'y', html: '<span class="katex-display">y</span>' }]} />,
    );
    const wrapper = container.querySelector('.katex-display')?.parentElement;
    expect(wrapper?.className).toContain('overflow-x-auto');
  });

  it('renders nested lists', () => {
    const blocks: Block[] = [
      {
        t: 'list',
        ordered: true,
        items: [
          { c: [text('หนึ่ง')], children: [{ t: 'list', ordered: false, items: [{ c: [text('ย่อย')], children: [] }] }] },
        ],
      },
    ];
    const { container } = render(<BlockList blocks={blocks} />);
    expect(container.querySelector('ol li ul li')).toHaveTextContent('ย่อย');
  });

  it('renders tables with header cells, alignment and a scroll wrapper', () => {
    const blocks: Block[] = [
      { t: 'table', align: ['l', 'r'], head: [[text('ก')], [text('ข')]], rows: [[[text('1')], [text('2')]]] },
    ];
    const { container } = render(<BlockList blocks={blocks} />);
    expect(container.querySelectorAll('th')).toHaveLength(2);
    expect(container.querySelector('td:nth-child(2)')?.className).toContain('text-right');
    expect(container.querySelector('table')?.parentElement?.className).toContain('overflow-x-auto');
  });

  it('renders figures as inline svg and notes as a panel', () => {
    const blocks: Block[] = [
      { t: 'figure', svg: '<svg viewBox="0 0 1 1"><line x1="0"/></svg>' },
      { t: 'note', c: [{ t: 'p', c: [text('หมายเหตุ')] }] },
    ];
    const { container } = render(<BlockList blocks={blocks} />);
    expect(container.querySelector('figure svg')).not.toBeNull();
    expect(screen.getByText('หมายเหตุ').closest('aside')).not.toBeNull();
  });

  it('renders an example with a Sol label and an answer strip, and omits empty parts', () => {
    const full: Block = {
      t: 'example',
      id: 'e1',
      problem: [{ t: 'p', c: [text('โจทย์')] }],
      sol: [{ t: 'p', c: [text('วิธี')] }],
      ans: [{ t: 'p', c: [text('คำตอบ')] }],
    };
    const noAns: Block = { ...full, id: 'e2', ans: [] };
    const { container } = render(<BlockList blocks={[full, noAns]} />);
    const sections = container.querySelectorAll('section[data-example]');
    expect(sections[0].textContent).toContain('Sol');
    expect(sections[0].textContent).toContain('คำตอบ');
    expect(sections[1].textContent).toContain('Sol');
    expect(sections[1].textContent).not.toContain('คำตอบ');
  });

  it('shows only the question of an example when the solutions are hidden', () => {
    const example: Block = {
      t: 'example',
      id: 'e1',
      problem: [{ t: 'p', c: [text('โจทย์')] }],
      sol: [{ t: 'p', c: [text('วิธี')] }],
      ans: [{ t: 'p', c: [text('คำตอบ')] }],
    };
    const { container } = render(
      <SolutionsContext.Provider value={{ show: false, setShow: () => {} }}>
        <BlockList blocks={[example]} />
      </SolutionsContext.Provider>,
    );
    const section = container.querySelector('section[data-example]');
    expect(section?.textContent).toContain('โจทย์');
    expect(section?.textContent).not.toContain('Sol');
    expect(section?.textContent).not.toContain('วิธี');
    expect(section?.textContent).not.toContain('คำตอบ');
  });
});
