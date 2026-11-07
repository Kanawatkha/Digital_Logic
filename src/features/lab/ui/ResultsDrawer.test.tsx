import { fireEvent, render, screen, within } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { andOr, direct, latch } from '../analysis/circuits.fixture';
import type { Circuit } from '../sim/evaluate';
import { ResultsDrawer } from './ResultsDrawer';

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

const show = (circuit: Circuit, onClose = () => {}) =>
  render(<ResultsDrawer open onClose={onClose} circuit={circuit} />);

const tab = (name: string) => screen.getByRole('tab', { name });
const rows = () => screen.getAllByRole('row').slice(1);

describe('ResultsDrawer', () => {
  it('renders nothing while it is closed', () => {
    render(<ResultsDrawer open={false} onClose={() => {}} circuit={andOr()} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('is a modal dialog with three tabs, the truth table first', () => {
    show(andOr());
    expect(screen.getByRole('dialog', { name: 'ผลลัพธ์วงจร' })).toHaveAttribute(
      'aria-modal',
      'true',
    );
    expect(screen.getAllByRole('tab').map((t) => t.textContent)).toEqual([
      'ตารางความจริง',
      'วงจร',
      'สมการ',
    ]);
    expect(tab('ตารางความจริง')).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });

  it('lists every row of the truth table of Y = (A AND B) OR C', () => {
    show(andOr());
    expect(rows()).toHaveLength(8);
    const cells = rows().map((row) =>
      within(row)
        .getAllByRole('cell')
        .map((c) => c.textContent)
        .join(''),
    );
    // A, B, C, then LED 1
    expect(cells).toEqual(['0000', '0011', '0100', '0111', '1000', '1011', '1101', '1111']);
    expect(screen.getByRole('columnheader', { name: /^A/ })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'LED 1' })).toBeInTheDocument();
  });

  it('marks the row the switches are on', () => {
    show(andOr([true, false, true]));
    const marked = rows().filter((row) => row.getAttribute('aria-current') === 'true');
    expect(marked).toHaveLength(1);
    expect(marked[0]).toHaveTextContent('1011');
  });

  it('copies the table as text', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
    show(andOr());
    fireEvent.click(screen.getByRole('button', { name: /คัดลอกตาราง/ }));
    await vi.waitFor(() => expect(writeText).toHaveBeenCalledTimes(1));
    expect((writeText.mock.calls[0]?.[0] as string).split('\n')[0]).toBe('A\tB\tC\tLED1');
    await vi.waitFor(() => expect(screen.getByText('คัดลอกแล้ว')).toBeInTheDocument());
  });

  it('writes the equations, simplified and as wired, with the minterms', () => {
    show(andOr());
    fireEvent.click(tab('สมการ'));
    const card = screen.getByRole('region', { name: 'LED 1' });
    expect(card).toHaveTextContent('LED1 = AB + C');
    expect(card).toHaveTextContent('LED1 = A·B + C');
    expect(card).toHaveTextContent('Σm(1, 3, 5, 6, 7)');
    expect(card).toHaveTextContent('ΠM(0, 2, 4)');
  });

  it('draws the circuit with its gates, its switches and its LED', () => {
    show(andOr());
    fireEvent.click(tab('วงจร'));
    const svg = screen.getByRole('img', { name: 'วงจร' });
    expect(svg.querySelectorAll('[data-node^="g:"]')).toHaveLength(2);
    expect(svg.querySelectorAll('[data-node^="in:"]')).toHaveLength(3);
    expect(svg.querySelectorAll('[data-node^="o:"]')).toHaveLength(1);
    expect(svg).toHaveTextContent('U1·1');
    expect(svg).toHaveTextContent('U2·1');
    expect(svg.querySelectorAll('[data-edge]')).toHaveLength(5);
  });

  it('zooms the circuit, and fits it again', () => {
    show(andOr());
    fireEvent.click(tab('วงจร'));
    const width = () => screen.getByRole('img', { name: 'วงจร' }).getAttribute('width');
    expect(width()).toBe('100%');
    fireEvent.click(screen.getByRole('button', { name: 'ขยายวงจร' }));
    expect(Number(width())).toBeGreaterThan(0);
    fireEvent.click(screen.getByRole('button', { name: 'พอดีหน้าจอ' }));
    expect(width()).toBe('100%');
  });

  it('moves between the tabs with the arrow keys', () => {
    show(andOr());
    tab('ตารางความจริง').focus();
    fireEvent.keyDown(tab('ตารางความจริง'), { key: 'ArrowRight' });
    expect(tab('วงจร')).toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(tab('วงจร'), { key: 'ArrowLeft' });
    expect(tab('ตารางความจริง')).toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(tab('ตารางความจริง'), { key: 'ArrowLeft' });
    expect(tab('สมการ')).toHaveAttribute('aria-selected', 'true');
  });

  it('works for a switch wired straight to an LED', () => {
    show(direct());
    expect(rows()).toHaveLength(2);
    fireEvent.click(tab('สมการ'));
    expect(screen.getByRole('region', { name: 'LED 2' })).toHaveTextContent('LED2 = A');
  });

  it('says what to do when no LED has a wire', () => {
    show({ ics: [], wires: [], switches: [] });
    expect(screen.getByText(/ยังไม่มีสายต่อเข้า LED/)).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  it('shows the diagram but not the table for a feedback loop, and says why', () => {
    show(latch());
    expect(screen.getByText(/ลูปป้อนกลับ/)).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    fireEvent.click(tab('วงจร'));
    expect(screen.getByRole('img', { name: 'วงจร' })).toBeInTheDocument();
    fireEvent.click(tab('สมการ'));
    expect(screen.getByText(/ลูปป้อนกลับ/)).toBeInTheDocument();
  });

  it('warns when a chip has no power, and when the supplies are shorted', () => {
    const circuit = andOr();
    const dead = { ...circuit, wires: circuit.wires.slice(4) };
    const { unmount } = show(dead);
    expect(screen.getByText(/ไม่มีไฟ ผลจึงอาจไม่ถูกต้อง ชิป U1, U2/)).toBeInTheDocument();
    unmount();
    show({ ...circuit, wires: [...circuit.wires, { from: 'power:+5V:2', to: 'power:GND:2' }] });
    expect(screen.getByText(/ลัดวงจร/)).toBeInTheDocument();
  });

  it('lets the LEDs be chosen, and rebuilds the table for the ones that are', () => {
    const circuit = andOr();
    // LED 2 reads the AND gate directly, so it only depends on A and B
    const two: Circuit = {
      ...circuit,
      wires: [...circuit.wires, { from: 'b0:c13:h', to: 'led2:0' }],
    };
    show(two);
    expect(screen.getAllByRole('columnheader').map((h) => h.textContent)).toEqual(
      expect.arrayContaining(['LED 1', 'LED 2']),
    );
    expect(rows()).toHaveLength(8);
    const led1 = screen.getByRole('button', { name: 'LED 1' });
    expect(led1).toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(led1);
    expect(led1).toHaveAttribute('aria-pressed', 'false');
    // only LED 2 is left: its inputs are A and B
    expect(rows()).toHaveLength(4);
    fireEvent.click(screen.getByRole('button', { name: 'LED 2' }));
    expect(screen.getByText(/ไม่ได้เลือก LED ใดเลย/)).toBeInTheDocument();
  });

  it('closes with the cross and Esc, and keeps the focus inside', () => {
    const onClose = vi.fn();
    show(andOr(), onClose);
    expect(screen.getByRole('button', { name: 'ปิด' })).toHaveFocus();
    fireEvent.click(screen.getByRole('button', { name: 'ปิด' }));
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(2);
  });
});
