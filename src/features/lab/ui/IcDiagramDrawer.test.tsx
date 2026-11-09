import { fireEvent, render, screen, within } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { andOr } from '../analysis/circuits.fixture';
import { simulate } from '../sim/evaluate';
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

  describe('the chips on the board, live', () => {
    const live = (switches: boolean[] = [true, true, false], focusIc: string | null = null) => {
      const circuit = andOr(switches);
      render(
        <IcDiagramDrawer
          open
          onClose={() => {}}
          onBoard={{ ...none, '7408': 1, '7432': 1 }}
          ics={circuit.ics}
          result={simulate(circuit)}
          focusIc={focusIc}
        />,
      );
      return screen.getByRole('region', { name: 'ชิปบนบอร์ดตอนนี้' });
    };

    it('has no live view when no chip is on the board', () => {
      render(
        <IcDiagramDrawer
          open
          onClose={() => {}}
          onBoard={none}
          ics={[]}
          result={simulate(andOr())}
        />,
      );
      expect(screen.queryByRole('region', { name: 'ชิปบนบอร์ดตอนนี้' })).not.toBeInTheDocument();
      expect(screen.queryByText('ชิปทั้งหมด (อ้างอิง)')).not.toBeInTheDocument();
    });

    it('comes first, with the reference cards of all five chips after it', () => {
      const panel = live();
      expect(panel).toBeInTheDocument();
      expect(screen.getByText('ชิปทั้งหมด (อ้างอิง)')).toBeInTheDocument();
      // five cards, and the live view is a sixth region
      expect(screen.getAllByRole('region')).toHaveLength(6);
      expect(screen.getAllByRole('region')[0]).toBe(panel);
    });

    it('starts on the first chip, or on the one asked for, and moves between them', () => {
      const panel = live();
      const chips = within(panel).getByRole('group', { name: 'เลือกชิป' });
      const [first, second] = within(chips).getAllByRole('button');
      expect(first).toHaveAttribute('aria-pressed', 'true');
      expect(first).toHaveTextContent('7408');
      expect(panel).toHaveTextContent('เกต 1');
      fireEvent.click(second!);
      expect(second).toHaveAttribute('aria-pressed', 'true');
      expect(second).toHaveTextContent('7432');
      expect(within(panel).getByRole('img', { name: '7432 Quad 2-input OR' })).toBeInTheDocument();
    });

    it('starts on the chip it is asked to', () => {
      const panel = live([true, true, false], 'u2');
      const pressed = within(panel)
        .getAllByRole('button')
        .filter((b) => b.getAttribute('aria-pressed') === 'true');
      expect(pressed).toHaveLength(1);
      expect(pressed[0]).toHaveTextContent('7432');
    });

    it('checks the supply pins, and says which one is missing', () => {
      const circuit = andOr([true, true, false]);
      // take the GND wire of the 7408 away: pin 7 is not wired
      const wires = circuit.wires.filter((w) => !(w.from === 'power:GND:0'));
      render(
        <IcDiagramDrawer
          open
          onClose={() => {}}
          onBoard={none}
          ics={circuit.ics}
          result={simulate({ ...circuit, wires })}
          focusIc="u1"
        />,
      );
      const power = screen.getByRole('list', { name: 'ไฟเลี้ยง' });
      const [vcc, gnd] = within(power).getAllByRole('listitem');
      expect(vcc).toHaveAttribute('data-status', 'ok');
      expect(vcc).toHaveTextContent('ขา 14 ต่อ +5V แล้ว');
      expect(gnd).toHaveAttribute('data-status', 'missing');
      expect(gnd).toHaveTextContent('ขา 7 ยังไม่ได้ต่อเข้า GND');
    });

    it('says when the power is the wrong way round', () => {
      const circuit = andOr();
      const wires = circuit.wires.map((w) =>
        w.from === 'power:+5V:0'
          ? { from: 'power:GND:0', to: w.to }
          : w.from === 'power:GND:0'
            ? { from: 'power:+5V:0', to: w.to }
            : w,
      );
      render(
        <IcDiagramDrawer
          open
          onClose={() => {}}
          onBoard={none}
          ics={circuit.ics}
          result={simulate({ ...circuit, wires })}
          focusIc="u1"
        />,
      );
      const power = screen.getByRole('list', { name: 'ไฟเลี้ยง' });
      expect(power).toHaveTextContent('ไฟกลับขั้ว');
      expect(within(power).getAllByRole('listitem')[0]).toHaveAttribute('data-status', 'reversed');
    });

    it('colors every pin of the diagram by what it carries, and says the value at each pin', () => {
      const panel = live([true, true, false]);
      const state = (pin: number) =>
        panel.querySelector(`[data-pin="${pin}"] rect`)?.getAttribute('data-state');
      // switch 1 and 2 are up and on pins 1 and 2 of the AND gate, whose output is pin 3
      expect(state(1)).toBe('high');
      expect(state(2)).toBe('high');
      expect(state(3)).toBe('high');
      expect(state(7)).toBe('low');
      expect(state(14)).toBe('high');
      // a pin with nothing wired to it
      expect(state(4)).toBe('floating');
      const row = (pin: number) =>
        within(panel)
          .getByRole('rowheader', { name: `ขา ${pin}` })
          .closest('tr')!;
      expect(row(3)).toHaveTextContent('1Y');
      expect(row(3)).toHaveTextContent('1');
      expect(row(7)).toHaveTextContent('GND');
      expect(row(4)).toHaveTextContent('ลอย');
    });

    it('writes what every gate reads and gives, and marks a floating input', () => {
      const panel = live([true, false, false]);
      const gates = within(panel).getAllByRole('list')[1]!;
      const lines = within(gates).getAllByRole('listitem');
      expect(lines).toHaveLength(4);
      // gate 1: 1 AND 0
      expect(lines[0]).toHaveTextContent('เกต 1: 1, 0 → เอาต์พุต 0');
      // gate 2 has nothing wired: both inputs float and read 1
      expect(lines[1]).toHaveTextContent(
        'เกต 2: 1 (ลอย อ่านเป็น 1), 1 (ลอย อ่านเป็น 1) → เอาต์พุต 1',
      );
    });

    it('says a gate of a chip without power gives nothing', () => {
      const circuit = andOr();
      render(
        <IcDiagramDrawer
          open
          onClose={() => {}}
          onBoard={none}
          ics={circuit.ics}
          result={simulate({ ...circuit, wires: [] })}
        />,
      );
      const panel = screen.getByRole('region', { name: 'ชิปบนบอร์ดตอนนี้' });
      expect(panel).toHaveTextContent('เอาต์พุต ไม่มีไฟ');
    });

    it('shows the function table of the gate, with the rows the gates are on marked', () => {
      const panel = live([true, true, false]);
      const table = within(panel).getByRole('table', { name: 'ตารางหน้าที่ของเกต' });
      const rows = within(table).getAllByRole('row').slice(1);
      expect(rows.map((r) => r.textContent)).toEqual(['000', '010', '100', '111']);
      // gate 1 reads 1, 1; the other gates read 1, 1 too (floating)
      const marked = rows.filter((r) => r.getAttribute('aria-current') === 'true');
      expect(marked.map((r) => r.textContent)).toEqual(['111']);
    });

    it('says what a pin of the live diagram does when it is pointed at', () => {
      const panel = live();
      fireEvent.pointerEnter(panel.querySelector('[data-pin="3"]')!);
      expect(panel).toHaveTextContent('ขา 3 · เอาต์พุต 1Y · เกต 1 (AND)');
    });
  });
});
