import { fireEvent, render, screen, within } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import type { IcType } from '../sim/ics';
import { IcDiagramDrawer } from './IcDiagramDrawer';

const none: Record<IcType, number> = { '7404': 0, '7408': 0, '7432': 0, '7400': 0, '7402': 0 };

beforeAll(() => {
  // reduced motion: the drawer is gone as soon as it is closed
  window.matchMedia = ((query: string) => ({
    matches: query.includes('prefers-reduced-motion'),
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;
});

describe('IcDiagramDrawer', () => {
  it('renders nothing while it is closed', () => {
    render(<IcDiagramDrawer open={false} onClose={() => {}} onBoard={none} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('is a modal dialog with the diagram of every chip', () => {
    render(<IcDiagramDrawer open onClose={() => {}} onBoard={none} />);
    const dialog = screen.getByRole('dialog', { name: 'ไดอะแกรมขา IC' });
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    for (const title of [
      '7404 Hex Inverter',
      '7408 Quad 2-input AND',
      '7432 Quad 2-input OR',
      '7400 Quad 2-input NAND',
      '7402 Quad 2-input NOR',
    ]) {
      expect(within(dialog).getByRole('img', { name: title })).toBeInTheDocument();
    }
    expect(within(dialog).getAllByRole('region')).toHaveLength(5);
  });

  it('closes with the cross, with Esc and with a press on the blur', () => {
    const onClose = vi.fn();
    render(<IcDiagramDrawer open onClose={onClose} onBoard={none} />);
    fireEvent.click(screen.getByRole('button', { name: 'ปิด' }));
    expect(onClose).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(2);
    const blur = screen.getByRole('dialog').parentElement!;
    fireEvent.pointerDown(blur);
    expect(onClose).toHaveBeenCalledTimes(3);
    // a press inside the drawer is not a press on the blur
    fireEvent.pointerDown(screen.getByRole('dialog'));
    expect(onClose).toHaveBeenCalledTimes(3);
  });

  it('puts the focus on the close button, and keeps Tab inside', () => {
    render(<IcDiagramDrawer open onClose={() => {}} onBoard={none} />);
    const close = screen.getByRole('button', { name: 'ปิด' });
    expect(close).toHaveFocus();
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    expect(screen.getByRole('dialog')).toContainElement(document.activeElement as HTMLElement);
  });

  it('marks the chips that are on the boards, with how many', () => {
    render(<IcDiagramDrawer open onClose={() => {}} onBoard={{ ...none, '7408': 1, '7400': 3 }} />);
    const and = screen.getByRole('region', { name: '7408 Quad 2-input AND' });
    expect(and).toHaveTextContent('อยู่บนบอร์ด');
    expect(and).not.toHaveTextContent('×');
    expect(screen.getByRole('region', { name: '7400 Quad 2-input NAND' })).toHaveTextContent(
      'อยู่บนบอร์ด ×3',
    );
    expect(screen.getByRole('region', { name: '7404 Hex Inverter' })).not.toHaveTextContent(
      'อยู่บนบอร์ด',
    );
  });

  it('says what a pin and a gate do when they are pointed at', () => {
    render(<IcDiagramDrawer open onClose={() => {}} onBoard={none} />);
    const card = screen.getByRole('region', { name: '7408 Quad 2-input AND' });
    expect(card).toHaveTextContent('แตะหรือชี้ที่ขาหรือเกต');
    fireEvent.pointerEnter(card.querySelector('[data-pin="3"]')!);
    expect(card).toHaveTextContent('ขา 3 · เอาต์พุต 1Y · เกต 1 (AND)');
    fireEvent.pointerLeave(card.querySelector('[data-pin="3"]')!);
    expect(card).toHaveTextContent('แตะหรือชี้ที่ขาหรือเกต');
    fireEvent.pointerEnter(card.querySelector('[data-gate="2"]')!);
    expect(card).toHaveTextContent('เกต 2 (AND) · อินพุตขา 4, 5 · เอาต์พุตขา 6');
    fireEvent.pointerDown(card.querySelector('[data-pin="14"]')!);
    expect(card).toHaveTextContent('ขา 14 · VCC ไฟเลี้ยง +5V');
  });
});
