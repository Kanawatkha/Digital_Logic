import { fireEvent, render, screen, within } from '@testing-library/react';
import type { ComponentProps } from 'react';
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

const show = (
  circuit: Circuit,
  onClose = () => {},
  extra: Partial<ComponentProps<typeof ResultsDrawer>> = {},
) => render(<ResultsDrawer open onClose={onClose} circuit={circuit} {...extra} />);

/** Y = (A AND B) OR C and a second LED on the AND gate, which has two outputs to list */
const twoLeds = (): Circuit => {
  const circuit = andOr();
  return { ...circuit, wires: [...circuit.wires, { from: 'b0:c13:h', to: 'led2:0' }] };
};

const tab = (name: string) => screen.getByRole('tab', { name });
const rows = () => screen.getAllByRole('row').slice(1);

describe('ResultsDrawer', () => {
  it('renders nothing while it is closed', () => {
    render(<ResultsDrawer open={false} onClose={() => {}} circuit={andOr()} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('is a modal dialog with four tabs, the truth table first', () => {
    show(andOr());
    expect(screen.getByRole('dialog', { name: 'ผลลัพธ์วงจร' })).toHaveAttribute(
      'aria-modal',
      'true',
    );
    expect(screen.getAllByRole('tab').map((t) => t.textContent)).toEqual([
      'ตารางความจริง',
      'วงจร',
      'สมการ',
      'แผนที่การ์โนห์',
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
    expect(tab('แผนที่การ์โนห์')).toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(tab('แผนที่การ์โนห์'), { key: 'ArrowRight' });
    expect(tab('ตารางความจริง')).toHaveAttribute('aria-selected', 'true');
  });

  it('works for a switch wired straight to an LED', () => {
    show(direct());
    expect(rows()).toHaveLength(2);
    fireEvent.click(tab('สมการ'));
    expect(screen.getByRole('region', { name: 'LED 2' })).toHaveTextContent('LED2 = A');
  });

  it('says what to do when no LED has a wire', () => {
    // wires but no LED: connect an output to an LED
    show({ ...andOr(), wires: andOr().wires.slice(0, -1) });
    expect(screen.getByText(/ยังไม่มีสายต่อเข้า LED/)).toBeInTheDocument();
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  it('says what to do next, by how far the circuit is', () => {
    const { unmount } = show({ ics: [], wires: [], switches: [] });
    expect(screen.getByText(/ยังไม่มีวงจร เริ่มจากวางชิป/)).toBeInTheDocument();
    unmount();
    show({ ...andOr(), wires: [] });
    expect(screen.getByText(/มีชิปแล้วแต่ยังไม่มีสาย/)).toBeInTheDocument();
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
    // one line for each chip, in the words of the warnings on the board
    const problems = screen.getByRole('list', { name: 'คำเตือนของวงจร' });
    expect(problems).toHaveTextContent(/7408.*ไม่มีไฟ ต่อขา 14 เข้า \+5V และขา 7 เข้า GND/);
    expect(problems).toHaveTextContent(/7432.*ไม่มีไฟ/);
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

  describe('pressing a row or a cell', () => {
    const bits = (row: number) => [
      { index: 0, up: Boolean(row & 4) },
      { index: 1, up: Boolean(row & 2) },
      { index: 2, up: Boolean(row & 1) },
    ];

    it('sets the switches to the row, the first input as the top bit', () => {
      const onSetSwitches = vi.fn();
      show(andOr(), () => {}, { onSetSwitches });
      fireEvent.click(rows()[5]!);
      expect(onSetSwitches).toHaveBeenLastCalledWith(bits(5));
      // the button of the row number does the same, for the keyboard
      fireEvent.click(within(rows()[2]!).getByRole('button'));
      expect(onSetSwitches).toHaveBeenLastCalledWith(bits(2));
    });

    it('does nothing without a place to put the switches', () => {
      show(andOr());
      expect(() => fireEvent.click(rows()[5]!)).not.toThrow();
    });

    it('is one stop of the Tab key, on the row of the switches, and the arrows go between rows', () => {
      show(andOr([true, false, true]));
      const buttons = rows().map((row) => within(row).getByRole('button'));
      expect(buttons.map((b) => b.tabIndex)).toEqual([-1, -1, -1, -1, -1, 0, -1, -1]);
      buttons[5]!.focus();
      fireEvent.keyDown(buttons[5]!, { key: 'ArrowDown' });
      expect(buttons[6]).toHaveFocus();
      fireEvent.keyDown(buttons[6]!, { key: 'ArrowUp' });
      fireEvent.keyDown(buttons[5]!, { key: 'ArrowUp' });
      expect(buttons[4]).toHaveFocus();
      // at the ends there is nowhere to go
      buttons[0]!.focus();
      fireEvent.keyDown(buttons[0]!, { key: 'ArrowUp' });
      expect(buttons[0]).toHaveFocus();
    });

    it('keeps the row of the switches in view when it is below the box', () => {
      const scrollTo = vi.fn();
      const original = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetTop');
      Object.defineProperty(HTMLElement.prototype, 'offsetTop', {
        configurable: true,
        get(this: HTMLElement) {
          return this.tagName === 'TR' ? [...this.parentElement!.children].indexOf(this) * 40 : 0;
        },
      });
      Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
        configurable: true,
        get: () => 40,
      });
      Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
        configurable: true,
        get: () => 120,
      });
      HTMLElement.prototype.scrollTo = scrollTo as typeof HTMLElement.prototype.scrollTo;
      try {
        const { unmount } = show(andOr([false, false, false]));
        // row 0 is in view: no scrolling
        expect(scrollTo).not.toHaveBeenCalled();
        unmount();
        show(andOr([true, true, true]));
        // row 7 is at 280..320 in a box 120 high
        expect(scrollTo).toHaveBeenCalledWith(expect.objectContaining({ top: 320 - 120 }));
      } finally {
        if (original) Object.defineProperty(HTMLElement.prototype, 'offsetTop', original);
        else delete (HTMLElement.prototype as { offsetTop?: number }).offsetTop;
        delete (HTMLElement.prototype as { offsetHeight?: number }).offsetHeight;
        delete (HTMLElement.prototype as { clientHeight?: number }).clientHeight;
        delete (HTMLElement.prototype as { scrollTo?: unknown }).scrollTo;
      }
    });
  });

  describe('the Karnaugh map', () => {
    it('draws the map of Y = AB + C with its ones, its loops and the cell of the switches', () => {
      show(andOr([true, true, false]));
      fireEvent.click(tab('แผนที่การ์โนห์'));
      const figure = screen.getByRole('group', { name: 'แผนที่การ์โนห์ LED 1' });
      const cell = (m: number) =>
        within(figure).getByRole('button', { name: `ตั้งสวิตช์เป็นแถวที่ ${m}` });
      expect(figure.querySelectorAll('[role="button"]')).toHaveLength(8);
      // the ones of the table: rows 1, 3, 5, 6 and 7
      for (let m = 0; m < 8; m++) {
        expect(cell(m).textContent).toBe(`${m}${[1, 3, 5, 6, 7].includes(m) ? 1 : 0}`);
      }
      // the switches are on row 6 (A and B up)
      expect(figure.querySelectorAll('[aria-current="true"]')).toHaveLength(1);
      expect(cell(6)).toHaveAttribute('aria-current', 'true');
      // two loops, AB and C, each in a color, written under the map
      const loops = screen.getByRole('region', { name: 'LED 1' }).querySelectorAll('li');
      expect([...loops].map((li) => li.textContent)).toEqual(['AB', 'C']);
    });

    it('sets the switches from a cell, with the keyboard too', () => {
      const onSetSwitches = vi.fn();
      show(andOr(), () => {}, { onSetSwitches });
      fireEvent.click(tab('แผนที่การ์โนห์'));
      const figure = screen.getByRole('group', { name: 'แผนที่การ์โนห์ LED 1' });
      fireEvent.click(within(figure).getByRole('button', { name: 'ตั้งสวิตช์เป็นแถวที่ 6' }));
      expect(onSetSwitches).toHaveBeenLastCalledWith([
        { index: 0, up: true },
        { index: 1, up: true },
        { index: 2, up: false },
      ]);
      fireEvent.keyDown(within(figure).getByRole('button', { name: 'ตั้งสวิตช์เป็นแถวที่ 1' }), {
        key: 'Enter',
      });
      expect(onSetSwitches).toHaveBeenLastCalledWith([
        { index: 0, up: false },
        { index: 1, up: false },
        { index: 2, up: true },
      ]);
    });

    it('draws one map for each chosen LED', () => {
      show(twoLeds());
      fireEvent.click(tab('แผนที่การ์โนห์'));
      expect(screen.getAllByRole('group', { name: /^แผนที่การ์โนห์ LED/ })).toHaveLength(2);
      fireEvent.click(screen.getByRole('button', { name: 'LED 1' }));
      expect(screen.getAllByRole('group', { name: /^แผนที่การ์โนห์ LED/ })).toHaveLength(1);
    });

    it('says so when there is no input, or one, to make a map of', () => {
      show(direct());
      fireEvent.click(tab('แผนที่การ์โนห์'));
      expect(screen.getByText(/ทำได้เมื่อมีสวิตช์เป็นอินพุต 2 ถึง 4 ตัว/)).toBeInTheDocument();
    });
  });

  describe('copying equations', () => {
    const clipboard = () => {
      const writeText = vi.fn().mockResolvedValue(undefined);
      Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
      return writeText;
    };

    it('copies the simplified and the wired equation of an LED, each by its own button', async () => {
      const writeText = clipboard();
      show(andOr());
      fireEvent.click(tab('สมการ'));
      fireEvent.click(screen.getByRole('button', { name: 'คัดลอกสมการ ลดรูปแล้ว' }));
      await vi.waitFor(() => expect(writeText).toHaveBeenLastCalledWith('LED1 = AB + C'));
      // the button says it was copied for a moment
      await vi.waitFor(() =>
        expect(screen.getAllByRole('button', { name: 'คัดลอกแล้ว' }).length).toBeGreaterThan(0),
      );
      fireEvent.click(screen.getByRole('button', { name: 'คัดลอกสมการ ตามที่ต่อ' }));
      await vi.waitFor(() => expect(writeText).toHaveBeenLastCalledWith('LED1 = A·B + C'));
    });

    it('copies all the equations at once when there are several LEDs, and not for one', async () => {
      const writeText = clipboard();
      const { unmount } = show(andOr());
      fireEvent.click(tab('สมการ'));
      expect(screen.queryByRole('button', { name: 'คัดลอกสมการทั้งหมด' })).not.toBeInTheDocument();
      unmount();
      show(twoLeds());
      fireEvent.click(tab('สมการ'));
      fireEvent.click(screen.getByRole('button', { name: 'คัดลอกสมการทั้งหมด' }));
      await vi.waitFor(() =>
        expect(writeText).toHaveBeenLastCalledWith('LED1 = AB + C\nLED2 = AB'),
      );
    });
  });

  describe('the circuit tab', () => {
    it('makes a gate a button for its chip when the board can show it, and says so', () => {
      const onLocate = vi.fn();
      show(andOr(), () => {}, { onLocate });
      fireEvent.click(tab('วงจร'));
      const figure = screen.getByRole('group', { name: 'วงจร' });
      expect(screen.queryByRole('img', { name: 'วงจร' })).not.toBeInTheDocument();
      expect(screen.getByText(/แตะเกตเพื่อดูชิปของมันบนบอร์ด/)).toBeInTheDocument();
      fireEvent.click(within(figure).getByRole('button', { name: /U1·1.*ดูชิปบนบอร์ด/ }));
      expect(onLocate).toHaveBeenLastCalledWith('u1');
      fireEvent.keyDown(within(figure).getByRole('button', { name: /U2·1.*ดูชิปบนบอร์ด/ }), {
        key: ' ',
      });
      expect(onLocate).toHaveBeenLastCalledWith('u2');
    });

    it('is a picture, not buttons, when there is nowhere to show a chip', () => {
      show(andOr());
      fireEvent.click(tab('วงจร'));
      expect(screen.getByRole('img', { name: 'วงจร' })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /ดูชิปบนบอร์ด/ })).not.toBeInTheDocument();
    });

    it('has a button that saves the diagram as a picture', () => {
      show(andOr());
      fireEvent.click(tab('วงจร'));
      expect(screen.getByRole('button', { name: 'บันทึกเป็นรูป' })).toBeInTheDocument();
    });
  });

  it('brings a tab in with a fade, and again for the next', () => {
    show(andOr());
    const fade = () => screen.getByRole('tabpanel').querySelector('.lab-fade');
    expect(fade()).not.toBeNull();
    const first = fade();
    fireEvent.click(tab('สมการ'));
    expect(fade()).not.toBe(first);
  });
});
