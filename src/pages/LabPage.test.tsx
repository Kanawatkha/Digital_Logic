import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { icFrame, pointPosition } from '@/features/lab/board/geometry';
import { BOARD_SIZE, SWITCHES } from '@/features/lab/board/layout';
import { STORAGE_KEY } from '@/features/lab/state/storage';
import { NAVBAR_SLOT_ID } from '@/lib/navbarSlot';
import { saveBlob, sceneToPng } from '@/features/lab/analysis/exportPng';
import { SAVED_KEY } from '@/features/lab/state/savedCircuits';
import LabPage from './LabPage';

// jsdom cannot draw a canvas: what turns the board into a PNG is replaced, and what the page does with it is tested
vi.mock('@/features/lab/analysis/exportPng', async (importOriginal) => ({
  ...(await importOriginal<object>()),
  sceneToPng: vi.fn(),
  saveBlob: vi.fn(),
}));

const SLOW = { timeout: 3000 };

// the lab saves the circuit in the browser; every test starts with an empty one
beforeEach(() => localStorage.clear());

/** A `matchMedia` that answers yes to reduced motion and to the queries `also` says yes to. */
const media = (also: (query: string) => boolean) =>
  ((query: string) => ({
    matches: query.includes('prefers-reduced-motion') || also(query),
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;

beforeAll(() => {
  // reduced motion: the view jumps instead of gliding, and panels open and close at once, so the
  // tests do not depend on frame timing. A wide window: every wire color and chip is in the row.
  window.matchMedia = media((query) => query.includes('min-width'));
});

describe('LabPage', () => {
  it('shows the board canvas with the zoom controls', () => {
    render(
      <MemoryRouter>
        <LabPage />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { level: 1, name: 'บอร์ดทดลอง NX-4i' })).toBeInTheDocument();
    expect(screen.getByRole('application')).toHaveAccessibleName(/บอร์ดทดลอง NX-4i/);
    for (const name of ['ซูมเข้า', 'ซูมออก', 'พอดีจอ', 'ขนาดจริง 100%']) {
      expect(screen.getByRole('button', { name })).toBeInTheDocument();
    }
    // the board is drawn: the title block and the power supply are in the canvas
    expect(document.body.textContent).toContain('POWER SUPPLY');
    expect(document.body.textContent).toContain('LOGIC SWITCH'.replace(' ', ''));
  });

  it('zooms with the buttons and the keyboard, and goes back to 100%', async () => {
    render(
      <MemoryRouter>
        <LabPage />
      </MemoryRouter>,
    );
    const percent = () =>
      Number(screen.getByRole('button', { name: 'ขนาดจริง 100%' }).textContent?.replace('%', ''));
    // the label starts at 100 until the first frame shows the fitted view (8% in jsdom, which has no size)
    await waitFor(() => expect(percent()).toBeLessThan(100), SLOW);
    const fitted = percent();
    fireEvent.click(screen.getByRole('button', { name: 'ซูมเข้า' }));
    await waitFor(() => expect(percent()).toBeGreaterThan(fitted), SLOW);
    // the real size is Shift and 0: the keys 1 to 8 are the switches
    fireEvent.keyDown(screen.getByRole('application'), {
      key: ')',
      code: 'Digit0',
      shiftKey: true,
    });
    await waitFor(() => expect(percent()).toBe(100), SLOW);
    fireEvent.click(screen.getByRole('button', { name: 'ซูมออก' }));
    await waitFor(() => expect(percent()).toBeLessThan(100), SLOW);
  });
});

describe('LabPage board', () => {
  /** The canvas is 1200 x 800, so at 100% the board is centered: its corner is at this screen point. */
  const OFFSET = { x: (1200 - BOARD_SIZE.width) / 2, y: (800 - BOARD_SIZE.height) / 2 };
  const SHORT = 'ลัดวงจร: +5V ต่อกับ GND';

  beforeAll(() => {
    // jsdom has no pointer capture
    Element.prototype.setPointerCapture = () => {};
    Element.prototype.releasePointerCapture = () => {};
    Element.prototype.hasPointerCapture = () => false;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  async function openBoard(zoom100 = true) {
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      x: 0,
      y: 0,
      left: 0,
      top: 0,
      right: 1200,
      bottom: 800,
      width: 1200,
      height: 800,
      toJSON: () => ({}),
    });
    const mounted = render(
      <MemoryRouter>
        <LabPage />
      </MemoryRouter>,
    );
    const board = screen.getByRole('application');
    const transform = () => board.querySelector('svg > g')?.getAttribute('transform');
    if (zoom100) {
      fireEvent.keyDown(board, { key: ')', code: 'Digit0', shiftKey: true });
      await waitFor(
        () => expect(transform()).toBe(`translate(${OFFSET.x} ${OFFSET.y}) scale(1)`),
        SLOW,
      );
    }
    const at = (id: string) => {
      const p = pointPosition(id)!;
      return { clientX: p.x + OFFSET.x, clientY: p.y + OFFSET.y };
    };
    const drag = (from: string, to: string, pointerType = 'mouse') => {
      const common = { pointerId: 1, pointerType, isPrimary: true };
      fireEvent.pointerDown(board, { ...common, button: 0, buttons: 1, ...at(from) });
      fireEvent.pointerMove(board, { ...common, buttons: 1, ...at(to) });
      fireEvent.pointerUp(board, { ...common, button: 0, buttons: 0, ...at(to) });
    };
    const wires = () => board.querySelectorAll('[data-wire-id]').length;
    const chips = () => board.querySelectorAll('[data-ic-id]').length;
    const led = (n: number) =>
      board.querySelector(`[data-lab-led="${n}"]`)?.getAttribute('data-lit') === 'true';
    const switchUp = (k: number) =>
      board.querySelector(`[data-lab-switch="${k}"]`)?.getAttribute('data-up') === 'true';
    /** A tap on a logic switch */
    const tapSwitch = (k: number, pointerType = 'mouse') => {
      const element = board.querySelector(`[data-lab-switch="${k}"] rect`)!;
      const { button } = SWITCHES[k]!;
      const common = {
        pointerId: 2,
        pointerType,
        isPrimary: true,
        clientX: button.x + button.width / 2 + OFFSET.x,
        clientY: button.y + button.height / 2 + OFFSET.y,
      };
      fireEvent.pointerDown(element, { ...common, button: 0, buttons: 1 });
      fireEvent.pointerUp(element, { ...common, button: 0, buttons: 0 });
    };
    /** Drags a chip out of the tray to where a chip with pin 1 at `col` of `breadboard` sits */
    const trayDrag = (name: string, breadboard: number, col: number) => {
      const frame = icFrame(breadboard, col)!;
      const common = { pointerId: 3, pointerType: 'mouse', isPrimary: true };
      const target = { clientX: frame.centerX + OFFSET.x, clientY: frame.centerY + OFFSET.y };
      fireEvent.pointerDown(screen.getByRole('button', { name }), {
        ...common,
        button: 0,
        buttons: 1,
        clientX: 20,
        clientY: 60,
      });
      fireEvent.pointerMove(document.body, { ...common, buttons: 1, ...target });
      fireEvent.pointerUp(document.body, { ...common, button: 0, buttons: 0, ...target });
    };
    const saved = () => JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null');
    return {
      board,
      at,
      transform,
      drag,
      wires,
      chips,
      led,
      switchUp,
      tapSwitch,
      trayDrag,
      saved,
      unmount: mounted.unmount,
    };
  }

  it('draws a wire from one point to another and selects it', async () => {
    const { board, drag, wires } = await openBoard();
    expect(screen.getByRole('button', { name: 'ย้อนกลับ' })).toBeDisabled();
    drag('power:+5V:0', 'b0:r:top1:3');
    expect(wires()).toBe(1);
    expect(board.querySelectorAll('[data-lab-handle]')).toHaveLength(1);
    expect(screen.getByRole('button', { name: 'ย้อนกลับ' })).toBeEnabled();
    expect(screen.getByRole('button', { name: 'ลบสาย' })).toBeEnabled();
  });

  it('shows a short circuit when +5V and GND meet, and clears it with undo', async () => {
    const { drag, wires } = await openBoard();
    drag('power:+5V:0', 'b0:r:top1:3');
    expect(screen.queryByText(SHORT)).not.toBeInTheDocument();
    drag('power:GND:0', 'b0:r:top1:20');
    expect(wires()).toBe(2);
    expect(screen.getByText(SHORT)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'ย้อนกลับ' }));
    expect(wires()).toBe(1);
    expect(screen.queryByText(SHORT)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'ทำซ้ำ' }));
    expect(screen.getByText(SHORT)).toBeInTheDocument();
  });

  it('recolors the selected wire, and deletes it with the Delete key', async () => {
    const { board, drag, wires } = await openBoard();
    drag('power:+5V:0', 'b0:r:top1:3');
    fireEvent.click(screen.getByRole('radio', { name: 'น้ำเงิน' }));
    expect(screen.getByRole('radio', { name: 'น้ำเงิน' })).toHaveAttribute('aria-checked', 'true');
    fireEvent.keyDown(board, { key: 'Delete' });
    expect(wires()).toBe(0);
    fireEvent.keyDown(board, { key: 'z', ctrlKey: true });
    expect(wires()).toBe(1);
  });

  it('does not draw with a finger when the board is zoomed out, and pans instead', async () => {
    const { transform, drag, wires } = await openBoard(false);
    const before = transform();
    drag('power:+5V:0', 'b0:r:top1:3', 'touch');
    expect(wires()).toBe(0);
    expect(transform()).not.toBe(before);
  });

  it('keeps one wire to a hole: a wire dropped on a taken hole lands on a free one', async () => {
    const { board, drag, wires } = await openBoard();
    drag('power:+5V:0', 'b0:c10:b');
    drag('b0:c20:b', 'b0:c10:b');
    expect(wires()).toBe(2);
    const plugs = [...board.querySelectorAll('circle[r="4.9"]')].map(
      (plug) => `${plug.getAttribute('cx')},${plug.getAttribute('cy')}`,
    );
    expect(plugs).toHaveLength(4);
    expect(new Set(plugs).size).toBe(4);
  });

  it('shows the warnings as a button with a count, red for a fault, and opens the list over the board', async () => {
    const { drag } = await openBoard();
    const warningsButton = (count: number) =>
      screen.queryByRole('button', { name: `คำเตือนของวงจร: ${count}` });
    // nothing to say: no button
    expect(screen.queryByRole('button', { name: /^คำเตือนของวงจร/ })).not.toBeInTheDocument();
    drag('power:+5V:0', 'b0:r:top1:3');
    drag('power:GND:0', 'b0:r:top1:20');
    const button = warningsButton(1)!;
    expect(button.className).toContain('bg-error');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    // the list is not on screen until it is asked for (a screen reader still gets it)
    const shortLine = () => screen.queryByRole('button', { name: (name) => name.includes(SHORT) });
    expect(shortLine()).not.toBeInTheDocument();
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    const item = shortLine()!.closest('li')!;
    expect(item).toBeInTheDocument();
    // inside a box that scrolls the entrance only fades: a move or a bounce would flash scroll bars
    expect(item.className).toContain('lab-fade');
    expect(item.parentElement?.className).toContain('overflow-x-hidden');
    // Esc closes the list and keeps the button
    fireEvent.keyDown(item, { key: 'Escape' });
    expect(shortLine()).not.toBeInTheDocument();
    expect(button).toHaveFocus();
    // the fault goes and so does the button
    fireEvent.click(screen.getByRole('button', { name: 'ย้อนกลับ' }));
    expect(screen.queryByRole('button', { name: /^คำเตือนของวงจร/ })).not.toBeInTheDocument();
  });

  it('shows an amber button when the warnings are only hints, with how many there are', async () => {
    await openBoard();
    fireEvent.click(screen.getByRole('button', { name: '7408 AND' }));
    const button = screen.getByRole('button', { name: /^คำเตือนของวงจร: \d+$/ });
    expect(button.className).toContain('bg-warning');
    expect(button.className).not.toContain('bg-error');
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /ไม่มีไฟ ต่อขา 14/ })).toBeInTheDocument();
  });

  it('moves to the chip a warning is about, rings it for a moment, and closes the list', async () => {
    await openBoard();
    fireEvent.click(screen.getByRole('button', { name: '7408 AND' }));
    expect(screen.queryByTestId('locate-pulse')).not.toBeInTheDocument();
    const button = screen.getByRole('button', { name: /^คำเตือนของวงจร: \d+$/ });
    fireEvent.click(button);
    fireEvent.click(screen.getByRole('button', { name: /ไม่มีไฟ ต่อขา 14/ }));
    const ring = screen.getByTestId('locate-pulse');
    // a chip is ringed by a frame around its body
    expect(ring.querySelector('rect.lab-locate')).not.toBeNull();
    expect(button).toHaveAttribute('aria-expanded', 'false');
    // the ring goes by itself
    await waitFor(() => expect(screen.queryByTestId('locate-pulse')).not.toBeInTheDocument(), {
      timeout: 3000,
    });
  });

  it('places a chip from the tray with a tap, and warns that it has no power', async () => {
    const { board, chips, saved } = await openBoard();
    fireEvent.click(screen.getByRole('button', { name: '7408 AND' }));
    expect(chips()).toBe(1);
    expect(saved().ics).toHaveLength(1);
    expect(screen.getByRole('status', { name: 'คำเตือนของวงจร' })).toHaveTextContent('7408');
    expect(screen.getByRole('status', { name: 'คำเตือนของวงจร' })).toHaveTextContent('ไม่มีไฟ');
    expect(board.textContent).toContain('ไม่มีไฟ');
    fireEvent.click(screen.getByRole('button', { name: '7432 OR' }));
    // the second chip takes another place, not the first one
    const [a, b] = saved().ics as { board: number; col: number }[];
    expect(a?.board === b?.board && Math.abs((a?.col ?? 0) - (b?.col ?? 0)) < 7).toBe(false);
  });

  it('places a chip by dragging it out of the tray, and snaps it to the columns', async () => {
    const { chips, saved, trayDrag } = await openBoard();
    expect(chips()).toBe(0);
    trayDrag('7400 NAND', 1, 20);
    expect(chips()).toBe(1);
    expect(saved().ics[0]).toMatchObject({ type: '7400', board: 1, col: 20 });
  });

  it('moves a chip by dragging it, removes it off the boards, and undo brings it back', async () => {
    const { board, drag, chips, saved, trayDrag } = await openBoard();
    trayDrag('7404 NOT', 0, 10);
    const body = () => board.querySelector('[data-ic-id] rect:nth-of-type(2)')!;
    const frame10 = icFrame(0, 10)!;
    const press = (x: number, y: number, type: 'down' | 'move' | 'up') => {
      const init = {
        pointerId: 4,
        pointerType: 'mouse',
        isPrimary: true,
        button: 0,
        buttons: type === 'up' ? 0 : 1,
        clientX: x + OFFSET.x,
        clientY: y + OFFSET.y,
      };
      if (type === 'down') fireEvent.pointerDown(body(), init);
      else if (type === 'move') fireEvent.pointerMove(body(), init);
      else fireEvent.pointerUp(body(), init);
    };
    // move it ten columns to the right
    const to = icFrame(0, 20)!;
    press(frame10.centerX, frame10.centerY, 'down');
    press(to.centerX, to.centerY, 'move');
    press(to.centerX, to.centerY, 'up');
    expect(saved().ics[0]).toMatchObject({ board: 0, col: 20 });
    // dragged away from both breadboards, up into the monitor
    press(to.centerX, to.centerY, 'down');
    press(to.centerX, to.centerY - 300, 'move');
    press(to.centerX, to.centerY - 300, 'up');
    expect(chips()).toBe(0);
    fireEvent.click(screen.getByRole('button', { name: 'ย้อนกลับ' }));
    expect(chips()).toBe(1);
    // a wire dropped on a leg of the chip, which is back at column 20, lands on a free hole instead
    drag('power:+5V:0', 'b0:c20:f');
    const ends = (saved().wires as { from: string; to: string }[]).flatMap((w) => [w.from, w.to]);
    expect(ends).toHaveLength(2);
    expect(ends).not.toContain('b0:c20:f');
  });

  it('flips a logic switch with a tap and lights the monitor LED through a NOT gate', async () => {
    const { chips, wires, led, switchUp, tapSwitch, drag, trayDrag } = await openBoard();
    trayDrag('7404 NOT', 0, 10);
    expect(chips()).toBe(1);
    // power on pins 14 and 7, switch 1 into pin 1, pin 2 out to LED 1
    drag('power:+5V:0', 'b0:c10:b');
    drag('power:GND:0', 'b0:c16:i');
    drag('sw0:0', 'b0:c10:i');
    drag('b0:c11:i', 'led1:0');
    expect(wires()).toBe(4);
    expect(screen.queryByRole('status', { name: 'คำเตือนของวงจร' })?.textContent ?? '').toBe('');
    expect(switchUp(0)).toBe(false);
    expect(led(1)).toBe(true);
    tapSwitch(0);
    expect(switchUp(0)).toBe(true);
    expect(led(1)).toBe(false);
    tapSwitch(0);
    expect(led(1)).toBe(true);
  });

  it('pans on a drag that starts on a switch instead of flipping it', async () => {
    const { board, transform, switchUp } = await openBoard();
    const element = board.querySelector('[data-lab-switch="3"] rect')!;
    const { button } = SWITCHES[3]!;
    const start = { clientX: button.x + 30 + OFFSET.x, clientY: button.y + 40 + OFFSET.y };
    const common = { pointerId: 5, pointerType: 'touch', isPrimary: true };
    const before = transform();
    fireEvent.pointerDown(element, { ...common, button: 0, buttons: 1, ...start });
    // the first move hands the press over to the viewport, the next ones pan
    for (const step of [40, 60, 80]) {
      fireEvent.pointerMove(element, {
        ...common,
        buttons: 1,
        clientX: start.clientX - step,
        clientY: start.clientY - step * 0.75,
      });
    }
    fireEvent.pointerUp(element, { ...common, button: 0, buttons: 0 });
    expect(switchUp(3)).toBe(false);
    expect(transform()).not.toBe(before);
  });

  it('keeps the circuit when the page is opened again', async () => {
    const first = await openBoard();
    first.trayDrag('7404 NOT', 0, 10);
    first.drag('power:+5V:0', 'b0:c10:b');
    first.drag('sw0:0', 'b0:c10:i');
    first.tapSwitch(2);
    first.unmount();
    const second = await openBoard();
    expect(second.chips()).toBe(1);
    expect(second.wires()).toBe(2);
    expect(second.switchUp(2)).toBe(true);
    expect(second.switchUp(0)).toBe(false);
  });

  it('clears the circuit with one button, and undo brings it back', async () => {
    const { board, drag, chips, wires, saved, trayDrag } = await openBoard();
    expect(screen.getByRole('button', { name: 'ล้างวงจร' })).toBeDisabled();
    trayDrag('7408 AND', 0, 10);
    drag('power:+5V:0', 'b0:c10:b');
    fireEvent.click(screen.getByRole('button', { name: 'ล้างวงจร' }));
    expect(chips()).toBe(0);
    expect(wires()).toBe(0);
    expect(saved()).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'ย้อนกลับ' }));
    expect(chips()).toBe(1);
    expect(board.querySelectorAll('[data-wire-id]')).toHaveLength(1);
  });

  it('runs (A AND B) OR C from a saved circuit, for every row of the truth table', async () => {
    const wire = (id: string, from: string, to: string) => ({
      id,
      from,
      to,
      color: 'red',
      bend: { x: 0, y: 0 },
    });
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: 1,
        ics: [
          { id: 'u1', type: '7408', board: 0, col: 11 },
          { id: 'u2', type: '7432', board: 0, col: 25 },
        ],
        wires: [
          wire('w1', 'power:+5V:0', 'b0:c11:b'),
          wire('w2', 'power:+5V:1', 'b0:c25:b'),
          wire('w3', 'power:GND:0', 'b0:c17:i'),
          wire('w4', 'power:GND:1', 'b0:c31:i'),
          wire('w5', 'sw0:0', 'b0:c11:i'),
          wire('w6', 'sw1:0', 'b0:c12:i'),
          wire('w7', 'b0:c13:h', 'b0:c25:h'),
          wire('w8', 'sw2:0', 'b0:c26:i'),
          wire('w9', 'b0:c27:h', 'led1:0'),
        ],
        switches: [],
      }),
    );
    const { led, switchUp, tapSwitch } = await openBoard();
    expect(screen.queryByRole('status', { name: 'คำเตือนของวงจร' })?.textContent ?? '').toBe('');
    for (let n = 0; n < 8; n++) {
      const want = [Boolean(n & 4), Boolean(n & 2), Boolean(n & 1)];
      want.forEach((up, k) => {
        if (switchUp(k) !== up) tapSwitch(k);
      });
      const [A, B, C] = want;
      expect(led(1), `A=${A} B=${B} C=${C}`).toBe(Boolean((A && B) || C));
    }
  });

  it('shows a magnifier while a finger drags a wire, and not for a mouse', async () => {
    const { board, at } = await openBoard();
    const lens = () => document.querySelector('[data-lab-magnifier]');
    const run = (pointerType: string) => {
      const common = { pointerId: 6, pointerType, isPrimary: true };
      fireEvent.pointerDown(board, { ...common, button: 0, buttons: 1, ...at('b0:c10:b') });
      fireEvent.pointerMove(board, { ...common, buttons: 1, ...at('b0:c20:b') });
      const during = lens();
      fireEvent.pointerUp(board, { ...common, button: 0, buttons: 0, ...at('b0:c20:b') });
      return during;
    };
    expect(run('mouse')).toBeNull();
    const withFinger = run('touch');
    expect(withFinger).not.toBeNull();
    // it draws the scene again, larger, around the finger
    expect(withFinger?.querySelector('use')?.getAttribute('href')).toBe('#lab-scene');
    expect(board.querySelector('#lab-scene')).not.toBeNull();
    expect(lens()).toBeNull();
  });

  it('arranges the wires with one press, and undo brings the old shapes back', async () => {
    const wire = (id: string, from: string, to: string) => ({
      id,
      from,
      to,
      color: 'red',
      bend: { x: 0, y: 0 },
    });
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: 1,
        ics: [{ id: 'u1', type: '7404', board: 0, col: 10 }],
        // across the chip: straight, it would lie on it
        wires: [wire('w1', 'b0:c13:b', 'b0:c13:i')],
        switches: [],
      }),
    );
    const { saved } = await openBoard();
    const arrange = screen.getByRole('button', { name: 'จัดสายอัตโนมัติ' });
    expect(arrange).toBeEnabled();
    fireEvent.click(arrange);
    const [bent] = saved().wires as { bend: { x: number; y: number } }[];
    expect(Math.hypot(bent!.bend.x, bent!.bend.y)).toBeGreaterThan(20);
    fireEvent.click(screen.getByRole('button', { name: 'ย้อนกลับ' }));
    expect(saved().wires[0].bend).toEqual({ x: 0, y: 0 });
  });

  it('paints the wires by what they carry with one press, and undo brings the old colors back', async () => {
    const wire = (id: string, from: string, to: string) => ({
      id,
      from,
      to,
      color: 'orange',
      bend: { x: 0, y: 0 },
    });
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: 1,
        ics: [],
        wires: [
          wire('w1', 'power:+5V:0', 'b0:r:top1:3'),
          wire('w2', 'power:GND:0', 'b0:r:top2:3'),
          wire('w3', 'sw0:0', 'b0:c11:i'),
        ],
        switches: [],
      }),
    );
    const { saved } = await openBoard();
    const paint = screen.getByRole('button', { name: 'จัดสีสายอัตโนมัติ' });
    expect(paint).toBeEnabled();
    fireEvent.click(paint);
    const colors = (saved().wires as { color: string }[]).map((w) => w.color);
    expect(colors[0]).toBe('red');
    expect(colors[1]).toBe('black');
    expect(['red', 'black']).not.toContain(colors[2]);
    fireEvent.click(screen.getByRole('button', { name: 'ย้อนกลับ' }));
    expect((saved().wires as { color: string }[]).map((w) => w.color)).toEqual([
      'orange',
      'orange',
      'orange',
    ]);
  });

  it('has nothing to paint on an empty board', async () => {
    await openBoard();
    expect(screen.getByRole('button', { name: 'จัดสีสายอัตโนมัติ' })).toBeDisabled();
  });

  it('has nothing to arrange on an empty board', async () => {
    await openBoard();
    expect(screen.getByRole('button', { name: 'จัดสายอัตโนมัติ' })).toBeDisabled();
  });

  it('opens the results of what is built, over the board, and follows the switches', async () => {
    const wire = (id: string, from: string, to: string) => ({
      id,
      from,
      to,
      color: 'red',
      bend: { x: 0, y: 0 },
    });
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: 1,
        ics: [
          { id: 'u1', type: '7408', board: 0, col: 11 },
          { id: 'u2', type: '7432', board: 0, col: 25 },
        ],
        wires: [
          wire('w1', 'power:+5V:0', 'b0:c11:b'),
          wire('w2', 'power:+5V:1', 'b0:c25:b'),
          wire('w3', 'power:GND:0', 'b0:c17:i'),
          wire('w4', 'power:GND:1', 'b0:c31:i'),
          wire('w5', 'sw0:0', 'b0:c11:i'),
          wire('w6', 'sw1:0', 'b0:c12:i'),
          wire('w7', 'b0:c13:h', 'b0:c25:h'),
          wire('w8', 'sw2:0', 'b0:c26:i'),
          wire('w9', 'b0:c27:h', 'led1:0'),
        ],
        switches: [true, false, true],
      }),
    );
    const { wires } = await openBoard();
    const open = screen.getByRole('button', { name: 'ผลลัพธ์วงจร' });
    fireEvent.click(open);
    const dialog = screen.getByRole('dialog', { name: 'ผลลัพธ์วงจร' });
    expect(within(dialog).getAllByRole('row')).toHaveLength(9);
    // the switches are A=1, B=0, C=1: row 5
    const marked = within(dialog)
      .getAllByRole('row')
      .filter((row) => row.getAttribute('aria-current') === 'true');
    expect(marked[0]).toHaveTextContent('1011');
    // the keys belong to the drawer
    const before = wires();
    fireEvent.keyDown(dialog, { key: 'Delete' });
    expect(wires()).toBe(before);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(open).toHaveFocus();
  });

  describe('the results drawer and the board', () => {
    /** Y = (A AND B) OR C on switches 1 to 3, saved as the circuit the page starts with */
    const saveAndOr = () => {
      const wire = (id: string, from: string, to: string) => ({
        id,
        from,
        to,
        color: 'red',
        bend: { x: 0, y: 0 },
      });
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          version: 1,
          ics: [
            { id: 'u1', type: '7408', board: 0, col: 11 },
            { id: 'u2', type: '7432', board: 0, col: 25 },
          ],
          wires: [
            wire('w1', 'power:+5V:0', 'b0:c11:b'),
            wire('w2', 'power:+5V:1', 'b0:c25:b'),
            wire('w3', 'power:GND:0', 'b0:c17:i'),
            wire('w4', 'power:GND:1', 'b0:c31:i'),
            wire('w5', 'sw0:0', 'b0:c11:i'),
            wire('w6', 'sw1:0', 'b0:c12:i'),
            wire('w7', 'b0:c13:h', 'b0:c25:h'),
            wire('w8', 'sw2:0', 'b0:c26:i'),
            wire('w9', 'b0:c27:h', 'led1:0'),
          ],
          switches: [false, false, false, false, false, false, false, false],
        }),
      );
    };

    it('sets the switches of the board to the row that is pressed, and the table follows', async () => {
      saveAndOr();
      const { saved } = await openBoard();
      fireEvent.click(screen.getByRole('button', { name: 'ผลลัพธ์วงจร' }));
      const dialog = screen.getByRole('dialog', { name: 'ผลลัพธ์วงจร' });
      const row = (n: number) => within(dialog).getAllByRole('row')[n + 1]!;
      // row 6 is A = 1, B = 1, C = 0
      fireEvent.click(row(6));
      expect(saved().switches.slice(0, 3)).toEqual([true, true, false]);
      expect(row(6)).toHaveAttribute('aria-current', 'true');
      // and the switches of the strip are where the row put them
      fireEvent.click(row(1));
      expect(saved().switches.slice(0, 3)).toEqual([false, false, true]);
      expect(row(1)).toHaveAttribute('aria-current', 'true');
    });

    it('closes the drawer and rings the chip when a gate of the diagram is pressed', async () => {
      saveAndOr();
      await openBoard();
      fireEvent.click(screen.getByRole('button', { name: 'ผลลัพธ์วงจร' }));
      fireEvent.click(screen.getByRole('tab', { name: 'วงจร' }));
      expect(screen.queryByTestId('locate-pulse')).not.toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: /U2·1.*ดูชิปบนบอร์ด/ }));
      await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
      expect(screen.getByTestId('locate-pulse').querySelector('rect.lab-locate')).not.toBeNull();
    });
  });

  describe('the pin diagrams of the chips on the board', () => {
    it('open on the chip a warning is about, from the button for its pins', async () => {
      await openBoard();
      fireEvent.click(screen.getByRole('button', { name: '7408 AND' }));
      fireEvent.click(screen.getByRole('button', { name: '7432 OR' }));
      fireEvent.click(screen.getByRole('button', { name: /^คำเตือนของวงจร: \d+$/ }));
      const pins = screen.getAllByRole('button', { name: 'ดูขา' });
      expect(pins).toHaveLength(2);
      fireEvent.click(pins[1]!);
      const dialog = screen.getByRole('dialog', { name: 'ไดอะแกรมขา IC' });
      const live = within(dialog).getByRole('region', { name: 'ชิปบนบอร์ดตอนนี้' });
      const chosen = within(live)
        .getAllByRole('button')
        .filter((b) => b.getAttribute('aria-pressed') === 'true');
      // the second warning is about the second chip, which has no power
      expect(chosen[0]).toHaveTextContent('7432');
      expect(within(live).getByRole('list', { name: 'ไฟเลี้ยง' })).toHaveTextContent(
        'ขา 14 ยังไม่ได้ต่อเข้า +5V',
      );
    });

    it('open on the chip that is selected, and on the first chip when none is', async () => {
      await openBoard();
      fireEvent.click(screen.getByRole('button', { name: '7408 AND' }));
      // a chip that has just been placed is the selected one
      fireEvent.click(screen.getByRole('button', { name: '7432 OR' }));
      const chosen = () => {
        const dialog = screen.getByRole('dialog', { name: 'ไดอะแกรมขา IC' });
        const live = within(dialog).getByRole('region', { name: 'ชิปบนบอร์ดตอนนี้' });
        return within(live)
          .getAllByRole('button')
          .filter((b) => b.getAttribute('aria-pressed') === 'true')[0];
      };
      fireEvent.keyDown(document, { code: 'KeyP' });
      expect(chosen()).toHaveTextContent('7432');
      // Esc closes the drawer, then Esc again lets go of the chip
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      fireEvent.keyDown(document, { key: 'Escape' });
      fireEvent.click(screen.getByRole('button', { name: 'ไดอะแกรมขา IC' }));
      expect(chosen()).toHaveTextContent('7408');
    });
  });

  describe('the circuits kept by name and the picture of the board', () => {
    const keepAndOr = (up: number[]) => {
      const wire = (id: string, from: string, to: string) => ({
        id,
        from,
        to,
        color: 'red',
        bend: { x: 0, y: 0 },
      });
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          version: 1,
          ics: [
            { id: 'u1', type: '7408', board: 0, col: 11 },
            { id: 'u2', type: '7432', board: 0, col: 25 },
          ],
          wires: [
            wire('w1', 'power:+5V:0', 'b0:c11:b'),
            wire('w2', 'power:+5V:1', 'b0:c25:b'),
            wire('w3', 'power:GND:0', 'b0:c17:i'),
            wire('w4', 'power:GND:1', 'b0:c31:i'),
            wire('w5', 'sw0:0', 'b0:c11:i'),
            wire('w6', 'sw1:0', 'b0:c12:i'),
            wire('w7', 'b0:c13:h', 'b0:c25:h'),
            wire('w8', 'sw2:0', 'b0:c26:i'),
            wire('w9', 'b0:c27:h', 'led1:0'),
          ],
          switches: Array.from({ length: 8 }, (_, k) => up.includes(k)),
        }),
      );
    };
    /** Chooses a tool of the board from its menu: it is done, and it is the one shown from then on */
    const chooseTool = (name: string) => {
      fireEvent.click(screen.getByRole('button', { name: 'เลือกเครื่องมือกระดาน' }));
      const menu = screen.getByRole('group', { name: 'เลือกเครื่องมือกระดาน' });
      fireEvent.click(within(menu).getByRole('button', { name }));
    };
    const openSaved = () => chooseTool('วงจรที่บันทึกไว้');
    const savedDialog = () => screen.getByRole('dialog', { name: 'วงจรที่บันทึกไว้' });

    it('keeps the circuit under a name, and brings it back with its switches, in a step that undo takes back', async () => {
      keepAndOr([0, 1]);
      const { wires, chips, saved, switchUp } = await openBoard();
      openSaved();
      fireEvent.change(within(savedDialog()).getByLabelText('ชื่อวงจร'), {
        target: { value: 'ข้อทดสอบ' },
      });
      fireEvent.click(within(savedDialog()).getByRole('button', { name: 'บันทึกวงจรนี้' }));
      expect(within(savedDialog()).getByRole('status')).toHaveTextContent('บันทึกแล้ว');
      expect(JSON.parse(localStorage.getItem(SAVED_KEY) ?? '[]')).toHaveLength(1);
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      // clear the boards and flip a switch, then bring it back
      fireEvent.click(screen.getByRole('button', { name: 'ล้างวงจร' }));
      expect(wires()).toBe(0);
      expect(chips()).toBe(0);
      fireEvent.keyDown(document, { code: 'Digit1' });
      expect(switchUp(0)).toBe(false);
      openSaved();
      expect(within(savedDialog()).getByText('ข้อทดสอบ')).toBeInTheDocument();
      fireEvent.click(within(savedDialog()).getByRole('button', { name: 'เปิด ข้อทดสอบ' }));
      await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
      expect(wires()).toBe(9);
      expect(chips()).toBe(2);
      expect(saved().switches.slice(0, 3)).toEqual([true, true, false]);
      expect(switchUp(0)).toBe(true);
      // one step of undo takes the circuit away again
      fireEvent.keyDown(document, { key: 'z', ctrlKey: true });
      expect(wires()).toBe(0);
      expect(chips()).toBe(0);
    });

    it('names a circuit with no name typed, keeps the list across visits, and deletes only when asked twice', async () => {
      keepAndOr([]);
      const first = await openBoard();
      openSaved();
      fireEvent.click(within(savedDialog()).getByRole('button', { name: 'บันทึกวงจรนี้' }));
      expect(within(savedDialog()).getByText('วงจร 1')).toBeInTheDocument();
      first.unmount();
      await openBoard();
      openSaved();
      expect(within(savedDialog()).getByText('วงจร 1')).toBeInTheDocument();
      fireEvent.click(within(savedDialog()).getByRole('button', { name: 'ลบ วงจร 1' }));
      expect(within(savedDialog()).getByText('วงจร 1')).toBeInTheDocument();
      fireEvent.click(within(savedDialog()).getByRole('button', { name: 'ลบจริง วงจร 1' }));
      expect(within(savedDialog()).queryByText('วงจร 1')).not.toBeInTheDocument();
      expect(localStorage.getItem(SAVED_KEY)).toBeNull();
    });

    it('cannot keep an empty board', async () => {
      await openBoard();
      openSaved();
      expect(within(savedDialog()).getByRole('button', { name: 'บันทึกวงจรนี้' })).toBeDisabled();
    });

    it('closes with Esc and gives the focus back to its button', async () => {
      await openBoard();
      openSaved();
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'วงจรที่บันทึกไว้' })).toHaveFocus();
    });

    it('saves the picture of the board at its own size', async () => {
      const blob = new Blob(['png'], { type: 'image/png' });
      vi.mocked(sceneToPng).mockResolvedValueOnce(blob);
      await openBoard();
      chooseTool('บันทึกภาพบอร์ดเป็น PNG');
      await waitFor(() => expect(saveBlob).toHaveBeenCalledWith(blob, 'nx-4i-board.png'));
      const [scene, width, height] = vi.mocked(sceneToPng).mock.calls[0]!;
      expect((scene as Element).id).toBe('lab-scene');
      expect([width, height]).toEqual([BOARD_SIZE.width, BOARD_SIZE.height]);
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });

    it('says so when the picture cannot be made', async () => {
      vi.mocked(sceneToPng).mockRejectedValueOnce(new Error('no canvas'));
      await openBoard();
      chooseTool('บันทึกภาพบอร์ดเป็น PNG');
      expect(await screen.findByRole('alert')).toHaveTextContent('บันทึกภาพไม่สำเร็จ');
    });
  });

  describe('what the board shows about the signals', () => {
    /** Y = (A AND B) OR C on switches 1 to 3, saved as the circuit the page starts with */
    const saveAndOr = (up: number[] = []) => {
      const wire = (id: string, from: string, to: string) => ({
        id,
        from,
        to,
        color: 'red',
        bend: { x: 0, y: 0 },
      });
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          version: 1,
          ics: [
            { id: 'u1', type: '7408', board: 0, col: 11 },
            { id: 'u2', type: '7432', board: 0, col: 25 },
          ],
          wires: [
            wire('w1', 'power:+5V:0', 'b0:c11:b'),
            wire('w2', 'power:+5V:1', 'b0:c25:b'),
            wire('w3', 'power:GND:0', 'b0:c17:i'),
            wire('w4', 'power:GND:1', 'b0:c31:i'),
            wire('w5', 'sw0:0', 'b0:c11:i'),
            wire('w6', 'sw1:0', 'b0:c12:i'),
            wire('w7', 'b0:c13:h', 'b0:c25:h'),
            wire('w8', 'sw2:0', 'b0:c26:i'),
            wire('w9', 'b0:c27:h', 'led1:0'),
            // a wire that goes to an LED with nothing to drive it
            wire('w10', 'b0:c40:a', 'led2:0'),
          ],
          switches: Array.from({ length: 8 }, (_, k) => up.includes(k)),
        }),
      );
    };
    const signalButton = () => screen.getByRole('button', { name: 'มุมมองสัญญาณ' });
    const kinds = (board: HTMLElement) =>
      [...board.querySelectorAll('[data-signal]')].map((e) => e.getAttribute('data-signal'));

    it('puts the button for the signal view, the picture and the saved circuits in the tray of the chips', async () => {
      await openBoard();
      const tray = screen.getByRole('group', { name: 'ชิป IC' });
      expect(within(tray).getByRole('button', { name: 'มุมมองสัญญาณ' })).toBeInTheDocument();
      expect(
        within(tray).getByRole('button', { name: 'เลือกเครื่องมือกระดาน' }),
      ).toBeInTheDocument();
      // and not with the zoom buttons
      const zoom = screen.getByRole('button', { name: 'ซูมเข้า' }).parentElement!;
      expect(within(zoom).queryByRole('button', { name: 'มุมมองสัญญาณ' })).not.toBeInTheDocument();
    });

    it('gives the tray smaller buttons and no gaps on a screen under 400 px wide, and keeps its look above', async () => {
      await openBoard();
      const tray = screen.getByRole('group', { name: 'ชิป IC' });
      // a layout is not drawn here, so the rules for a narrow screen are checked in the classes: each
      // size is a 400 px rule over the usual one (40 px buttons, 4 px gaps), which stays
      expect(tray.className).toContain('gap-1');
      expect(tray.className).toContain('max-[400px]:gap-0');
      const buttons = within(tray).getAllByRole('button');
      expect(buttons.length).toBeGreaterThanOrEqual(8);
      for (const button of buttons) {
        // the chip and the arrows are 40 px high, the rest are 40 px squares: all get 36 px when narrow
        expect(button.className).toMatch(/\b(h-10|size-10)\b/);
        expect(button.className).toMatch(/max-\[400px\]:(h-9|size-9)/);
      }
    });

    it('starts with the signal view off, turns it on and off by the button and by V, and remembers it', async () => {
      saveAndOr([0, 1]);
      const first = await openBoard();
      expect(signalButton()).toHaveAttribute('aria-pressed', 'false');
      expect(kinds(first.board)).toEqual([]);
      fireEvent.click(signalButton());
      expect(signalButton()).toHaveAttribute('aria-pressed', 'true');
      expect(kinds(first.board).length).toBeGreaterThan(0);
      fireEvent.keyDown(document, { code: 'KeyV' });
      expect(signalButton()).toHaveAttribute('aria-pressed', 'false');
      expect(kinds(first.board)).toEqual([]);
      fireEvent.keyDown(document, { code: 'KeyV' });
      expect(localStorage.getItem('digital-logic-lab-signal')).toBe('1');
      // a visit later it is still on; turned off, it is off
      first.unmount();
      const second = await openBoard();
      expect(signalButton()).toHaveAttribute('aria-pressed', 'true');
      expect(kinds(second.board).length).toBeGreaterThan(0);
      fireEvent.click(signalButton());
      expect(localStorage.getItem('digital-logic-lab-signal')).toBeNull();
    });

    it('shows what each wire carries: 1 glows, 0 has a dark core, nothing is dashed', async () => {
      saveAndOr([0, 1]);
      const { board } = await openBoard();
      fireEvent.click(signalButton());
      // by wire: +5V, +5V, GND, GND, switch 1 (up), switch 2 (up), the AND gate (1), switch 3 (down), the OR gate (1), a wire to nothing
      expect(kinds(board)).toEqual([
        'high',
        'high',
        'low',
        'low',
        'high',
        'high',
        'high',
        'low',
        'high',
        'floating',
      ]);
    });

    it('shows two outputs that fight as a red glow', async () => {
      const { board, drag } = await openBoard();
      drag('power:+5V:0', 'b0:r:top1:3');
      drag('power:GND:0', 'b0:r:top1:20');
      fireEvent.click(signalButton());
      expect(kinds(board)).toEqual(['conflict', 'conflict']);
    });

    it('puts the letter of an input on its switch, in the order of the results', async () => {
      saveAndOr();
      const { board } = await openBoard();
      const letters = [...board.querySelectorAll('[data-input-letter]')].map((e) =>
        e.getAttribute('data-input-letter'),
      );
      expect(letters).toEqual(['A', 'B', 'C']);
      const { button } = SWITCHES[1]!;
      expect(board.querySelector('[data-input-letter="B"]')).toHaveAttribute(
        'x',
        String(button.x + button.width / 2),
      );
    });

    it('has no letters on an empty board', async () => {
      const { board } = await openBoard();
      expect(board.querySelectorAll('[data-input-letter]')).toHaveLength(0);
    });

    it('lights the net of a free point that is tapped, says what it carries, and lets go on Esc', async () => {
      const { board, at, drag, wires } = await openBoard();
      drag('power:+5V:0', 'b0:r:top1:3');
      expect(wires()).toBe(1);
      // the wire is selected: its net is lit, with the name of its first end
      const bar = () => screen.queryByRole('status', { name: 'สายเส้นเดียวกัน' });
      expect(bar()).toHaveTextContent('ค่า 1');
      // let go of the wire, then tap a free hole of the same rail
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(bar()).not.toBeInTheDocument();
      const tap = (id: string) => {
        const common = { pointerId: 5, pointerType: 'mouse', isPrimary: true };
        fireEvent.pointerDown(board, { ...common, button: 0, buttons: 1, ...at(id) });
        fireEvent.pointerUp(board, { ...common, button: 0, buttons: 0, ...at(id) });
      };
      tap('b0:r:top1:8');
      expect(bar()).toHaveTextContent('รางไฟ');
      expect(bar()).toHaveTextContent('ค่า 1');
      expect(bar()).toHaveTextContent('1 สาย');
      expect(board.querySelectorAll('[data-net-wire]')).toHaveLength(1);
      // a tap on a hole of another net asks about that one
      tap('b0:c30:a');
      expect(bar()).toHaveTextContent('ยังไม่มีสายต่อจุดนี้');
      expect(bar()).toHaveTextContent('ไม่มีอะไรขับ');
      expect(board.querySelectorAll('[data-net-wire]')).toHaveLength(0);
      // the cross lets go
      fireEvent.click(screen.getByRole('button', { name: 'ปิดการไฮไลต์' }));
      expect(bar()).not.toBeInTheDocument();
      // a press somewhere else lets go too
      tap('b0:r:top1:8');
      expect(bar()).toBeInTheDocument();
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(bar()).not.toBeInTheDocument();
    });

    it('draws a new wire and a new chip in, and not the ones that were there when the page opened', async () => {
      saveAndOr();
      const { board, drag, wires } = await openBoard();
      expect(wires()).toBe(10);
      expect(board.querySelectorAll('.lab-wire-in, .lab-chip-drop, .lab-plug-in')).toHaveLength(0);
      drag('power:+5V:2', 'b0:r:top1:3');
      expect(wires()).toBe(11);
      // the rope is two paths and a wire has two plugs
      expect(board.querySelectorAll('path.lab-wire-in')).toHaveLength(2);
      expect(board.querySelectorAll('.lab-plug-in')).toHaveLength(2);
      fireEvent.click(screen.getByRole('button', { name: '7400 NAND' }));
      expect(board.querySelectorAll('.lab-chip-drop')).toHaveLength(1);
    });

    it('lets a wire go on being new only while it comes in, so selecting wires does not draw them again', async () => {
      saveAndOr();
      const { board, drag, wires, at } = await openBoard();
      drag('power:+5V:2', 'b0:r:top1:3');
      expect(wires()).toBe(11);
      expect(board.querySelectorAll('path.lab-wire-in')).toHaveLength(2);
      // when it is in, nothing of it is left to play again
      await waitFor(
        () =>
          expect(board.querySelectorAll('.lab-wire-in, .lab-plug-in, .lab-chip-drop')).toHaveLength(
            0,
          ),
        { timeout: 4000 },
      );
      // select a wire and let go of it: the wires are put in another order, and none is drawn in again
      const tap = (id: string) => {
        const common = { pointerId: 6, pointerType: 'mouse', isPrimary: true };
        fireEvent.pointerDown(board, { ...common, button: 0, buttons: 1, ...at(id) });
        fireEvent.pointerUp(board, { ...common, button: 0, buttons: 0, ...at(id) });
      };
      tap('power:+5V:0');
      expect(board.querySelectorAll('[data-lab-handle]')).toHaveLength(1);
      expect(board.querySelectorAll('.lab-wire-in, .lab-plug-in')).toHaveLength(0);
      // a free hole: the wire is let go of
      tap('b0:c50:a');
      expect(board.querySelectorAll('[data-lab-handle]')).toHaveLength(0);
      expect(board.querySelectorAll('.lab-wire-in, .lab-plug-in')).toHaveLength(0);
    });

    it('swells the halo of a LED only while it is lit', async () => {
      saveAndOr();
      const off = await openBoard();
      expect(off.board.querySelectorAll('.lab-led-glow')).toHaveLength(0);
      off.unmount();
      saveAndOr([0, 1]);
      const on = await openBoard();
      expect(on.board.querySelector('[data-lab-led="1"] .lab-led-glow')).not.toBeNull();
      expect(on.board.querySelectorAll('.lab-led-glow')).toHaveLength(1);
    });
  });

  it('opens the pin diagrams over the board, and gives the board back when they close', async () => {
    const { drag, wires } = await openBoard();
    drag('power:+5V:0', 'b0:r:top1:3');
    expect(wires()).toBe(1);
    const open = screen.getByRole('button', { name: 'ไดอะแกรมขา IC' });
    fireEvent.click(open);
    const dialog = screen.getByRole('dialog', { name: 'ไดอะแกรมขา IC' });
    expect(within(dialog).getAllByRole('region')).toHaveLength(5);
    // the keys belong to the drawer: Delete does not remove the selected wire behind it
    fireEvent.keyDown(dialog, { key: 'Delete' });
    expect(wires()).toBe(1);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(open).toHaveFocus();
    // chips on the board are marked in the drawer
    fireEvent.click(screen.getByRole('button', { name: '7408 AND' }));
    fireEvent.click(open);
    expect(screen.getByRole('region', { name: '7408 Quad 2-input AND' })).toHaveTextContent(
      'อยู่บนบอร์ด',
    );
  });

  it('folds the tools away and brings them back', async () => {
    await openBoard();
    expect(screen.getByRole('group', { name: 'ชิป IC' })).toBeInTheDocument();
    const toggle = screen.getByRole('button', { name: 'ซ่อนเครื่องมือ' });
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(toggle);
    expect(screen.queryByRole('group', { name: 'ชิป IC' })).not.toBeInTheDocument();
    const show = screen.getByRole('button', { name: 'แสดงเครื่องมือ' });
    expect(show).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(show);
    expect(screen.getByRole('group', { name: 'ชิป IC' })).toBeInTheDocument();
  });

  it('starts with the tools folded on a phone', async () => {
    const before = window.matchMedia;
    window.matchMedia = media((query) => query.includes('max-width'));
    try {
      await openBoard();
      expect(screen.queryByRole('group', { name: 'ชิป IC' })).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'แสดงเครื่องมือ' })).toBeInTheDocument();
    } finally {
      window.matchMedia = before;
    }
  });

  it('keeps the wire colors in a row, and every chip, when the window is wide', async () => {
    await openBoard();
    expect(screen.getByRole('radiogroup', { name: 'สีสาย' })).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(8);
    for (const name of ['7404 NOT', '7408 AND', '7432 OR', '7400 NAND', '7402 NOR']) {
      expect(screen.getByRole('button', { name })).toBeInTheDocument();
    }
    expect(screen.queryByRole('button', { name: 'เลือกชิป IC' })).not.toBeInTheDocument();
  });

  describe('on a narrow window', () => {
    let wide: typeof window.matchMedia;
    beforeAll(() => {
      wide = window.matchMedia;
      window.matchMedia = media(() => false);
    });
    afterAll(() => {
      window.matchMedia = wide;
    });

    it('folds the wire colors into one button that opens them, and closes after a pick', async () => {
      const { drag } = await openBoard();
      expect(screen.queryByRole('radio')).not.toBeInTheDocument();
      const button = screen.getByRole('button', { name: 'สีสาย: แดง' });
      expect(button).toHaveAttribute('aria-expanded', 'false');
      fireEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getAllByRole('radio')).toHaveLength(8);
      expect(screen.getByRole('radio', { name: 'แดง' })).toHaveAttribute('aria-checked', 'true');
      fireEvent.click(screen.getByRole('radio', { name: 'น้ำเงิน' }));
      expect(screen.queryByRole('radio')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'สีสาย: น้ำเงิน' })).toHaveAttribute(
        'aria-expanded',
        'false',
      );
      // the next wire has the color that was picked
      drag('power:+5V:0', 'b0:r:top1:3');
      expect(screen.getByRole('button', { name: 'สีสาย: น้ำเงิน' })).toBeInTheDocument();
    });

    it('closes the color panel with Escape and with a press elsewhere, without touching the board', async () => {
      await openBoard();
      const button = screen.getByRole('button', { name: 'สีสาย: แดง' });
      fireEvent.click(button);
      fireEvent.keyDown(screen.getByRole('radio', { name: 'แดง' }), { key: 'Escape' });
      expect(screen.queryByRole('radio')).not.toBeInTheDocument();
      expect(button).toHaveFocus();
      fireEvent.click(button);
      expect(screen.getAllByRole('radio')).toHaveLength(8);
      fireEvent.pointerDown(screen.getByRole('application'));
      expect(screen.queryByRole('radio')).not.toBeInTheDocument();
    });

    it('moves the switches and LEDs to the bottom of the screen, stacked, and keeps them working', async () => {
      const { switchUp } = await openBoard();
      const strip = screen.getByRole('group', { name: 'สวิตช์และ LED' });
      // not in the row of tools any more: in the dock above the zoom buttons
      expect(document.getElementById('lab-tools')?.contains(strip)).toBe(false);
      expect(strip.parentElement?.className).toContain('lab-dock');
      expect(screen.getAllByRole('img')).toHaveLength(16);
      fireEvent.click(screen.getByRole('button', { name: 'สวิตช์ 2' }));
      expect(switchUp(1)).toBe(true);
      // folding the tools folds the dock too
      fireEvent.click(screen.getByRole('button', { name: 'ซ่อนเครื่องมือ' }));
      expect(screen.queryByRole('group', { name: 'สวิตช์และ LED' })).not.toBeInTheDocument();
    });

    it('keeps the warnings button at the top: at the right end of the row of the chips, and in the first row when the tools are folded', async () => {
      await openBoard();
      fireEvent.click(screen.getByRole('button', { name: '7404 NOT' }));
      const tools = document.getElementById('lab-tools')!;
      const button = screen.getByRole('button', { name: /^คำเตือนของวงจร: \d+$/ });
      expect(tools.contains(button)).toBe(true);
      // its box takes the rest of the row, and presses pass through it
      expect(button.closest('#lab-tools > div')?.className).toContain('ml-auto');
      // the list opens under the button, lined up with its right edge
      fireEvent.click(button);
      const panel = document.querySelector('[data-placement]');
      expect(panel?.getAttribute('data-placement')).toBe('bottom');
      expect(panel?.className).toContain('right-0');
      // folded tools: it stays at the top, now at the right of the first row, and still opens downward
      fireEvent.click(screen.getByRole('button', { name: 'ซ่อนเครื่องมือ' }));
      const folded = screen.getByRole('button', { name: /^คำเตือนของวงจร: \d+$/ });
      expect(document.getElementById('lab-tools')).toBeNull();
      expect(folded.closest('.absolute')?.className).toContain('top-3');
      expect(folded.closest('.absolute')?.className).toContain('right-3');
      fireEvent.click(folded);
      expect(document.querySelector('[data-placement]')?.getAttribute('data-placement')).toBe(
        'bottom',
      );
    });

    it('puts the tools button in the navbar when the page has a place for it', async () => {
      const slot = document.createElement('div');
      slot.id = NAVBAR_SLOT_ID;
      document.body.append(slot);
      try {
        await openBoard();
        const toggle = screen.getByRole('button', { name: 'ซ่อนเครื่องมือ' });
        expect(slot.contains(toggle)).toBe(true);
        fireEvent.click(toggle);
        expect(screen.getByRole('button', { name: 'แสดงเครื่องมือ' })).toHaveAttribute(
          'aria-expanded',
          'false',
        );
      } finally {
        slot.remove();
      }
    });

    it('lets presses through the empty space around the tools, so the board can be dragged there', async () => {
      await openBoard();
      const tools = document.getElementById('lab-tools')!;
      expect(tools.parentElement?.className).toContain('pointer-events-none');
      // each panel takes presses back for itself
      for (const panel of tools.children) expect(panel.className).toContain('pointer-events-auto');
    });

    it('folds arrange, paint and straighten into one button, and swaps the one that shows', async () => {
      const wire = (id: string, from: string, to: string) => ({
        id,
        from,
        to,
        color: 'orange',
        bend: { x: 0, y: 0 },
      });
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          version: 1,
          ics: [],
          wires: [wire('w1', 'power:+5V:0', 'b0:r:top1:3'), wire('w2', 'sw0:0', 'b0:c11:i')],
          switches: [],
        }),
      );
      const { saved } = await openBoard();
      // one of the three shows: arrange
      expect(screen.getByRole('button', { name: 'จัดสายอัตโนมัติ' })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'จัดสีสายอัตโนมัติ' })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'ทำสายให้ตรง' })).not.toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: 'เลือกเครื่องมือจัดสาย' }));
      expect(screen.getAllByRole('radio')).toHaveLength(3);
      expect(screen.getByRole('radio', { name: 'จัดสายอัตโนมัติ' })).toHaveAttribute(
        'aria-checked',
        'true',
      );
      fireEvent.click(screen.getByRole('radio', { name: 'จัดสีสายอัตโนมัติ' }));
      expect(screen.queryByRole('radio')).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'จัดสายอัตโนมัติ' })).not.toBeInTheDocument();
      // choosing does not do it: the button that shows does
      expect((saved().wires as { color: string }[]).map((w) => w.color)).toEqual([
        'orange',
        'orange',
      ]);
      fireEvent.click(screen.getByRole('button', { name: 'จัดสีสายอัตโนมัติ' }));
      expect((saved().wires as { color: string }[])[0]?.color).toBe('red');
    });

    it('shows one chip, swaps it for another, and places the one that shows', async () => {
      const { chips, saved } = await openBoard();
      expect(screen.getByRole('button', { name: '7404 NOT' })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: '7408 AND' })).not.toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: 'เลือกชิป IC' }));
      expect(screen.getAllByRole('radio')).toHaveLength(5);
      fireEvent.click(screen.getByRole('radio', { name: '7402 NOR' }));
      expect(screen.queryByRole('radio')).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: '7404 NOT' })).not.toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: '7402 NOR' }));
      expect(chips()).toBe(1);
      expect(saved().ics[0]).toMatchObject({ type: '7402' });
    });
  });

  it('flips the switches from the strip, and keeps the strip and the board in step', async () => {
    const { switchUp } = await openBoard();
    const button = screen.getByRole('button', { name: 'สวิตช์ 4' });
    expect(button).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(switchUp(3)).toBe(true);
    fireEvent.click(button);
    expect(switchUp(3)).toBe(false);
  });

  it('lights the LED dot in the strip with the LED on the board', async () => {
    const { led, trayDrag, drag } = await openBoard();
    trayDrag('7404 NOT', 0, 10);
    drag('power:+5V:0', 'b0:c10:b');
    drag('power:GND:0', 'b0:c16:i');
    drag('sw0:0', 'b0:c10:i');
    drag('b0:c11:i', 'led1:0');
    expect(led(1)).toBe(true);
    expect(screen.getByRole('img', { name: 'LED 1: ติด' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'สวิตช์ 1' }));
    expect(led(1)).toBe(false);
    expect(screen.getByRole('img', { name: 'LED 1: ดับ' })).toBeInTheDocument();
  });

  it('wires with the keyboard: Enter, arrows, Enter, and the board does not pan', async () => {
    const { board, transform, wires } = await openBoard();
    const key = (name: string, init: object = {}) =>
      fireEvent.keyDown(board, { key: name, ...init });
    const hint = () => screen.getByRole('status', { name: 'โหมดคีย์บอร์ด' }).textContent ?? '';
    const before = transform();
    expect(board.querySelector('[data-lab-keyboard-cursor]')).toBeNull();
    key('Enter');
    expect(board.querySelector('[data-lab-keyboard-cursor]')).not.toBeNull();
    expect(hint()).toContain('โหมดคีย์บอร์ด');
    key('Enter');
    expect(hint()).toContain('เริ่มสายจาก');
    for (let n = 0; n < 3; n++) key('ArrowRight');
    expect(transform()).toBe(before);
    key('Enter');
    expect(hint()).toContain('ต่อสายแล้ว');
    expect(wires()).toBe(1);
    // the new wire is selected, so Delete takes it away
    key('Delete');
    expect(wires()).toBe(0);
    key('Escape');
    expect(board.querySelector('[data-lab-keyboard-cursor]')).toBeNull();
  });

  it('keeps the arrow keys for panning when the keyboard cursor is off', async () => {
    const { board, transform } = await openBoard();
    const before = transform();
    fireEvent.keyDown(board, { key: 'ArrowLeft' });
    await waitFor(() => expect(transform()).not.toBe(before), SLOW);
  });

  it('cancels a wire that was started, and refuses a point that is taken', async () => {
    const { board, wires } = await openBoard();
    const key = (name: string) => fireEvent.keyDown(board, { key: name });
    const hint = () => screen.getByRole('status', { name: 'โหมดคีย์บอร์ด' }).textContent ?? '';
    key('Enter');
    key('Enter');
    key('Escape');
    expect(hint()).toContain('ยกเลิกสายที่เริ่มไว้');
    expect(board.querySelector('[data-lab-keyboard-cursor]')).not.toBeNull();
    // wire it for real, then try to end a second wire on the end of the first
    key('Enter');
    key('ArrowRight');
    key('Enter');
    expect(wires()).toBe(1);
    key('ArrowLeft');
    key('Enter'); // on the wire end: selects the wire
    expect(hint()).toContain('เลือกสาย');
    key('Escape');
    key('Escape');
    expect(board.querySelector('[data-lab-keyboard-cursor]')).toBeNull();
  });

  it('tells a screen reader what is on the board, and what is selected', async () => {
    await openBoard();
    const summary = () => screen.getByRole('status', { name: 'สรุปวงจร' }).textContent;
    expect(summary()).toBe('ยังไม่มีสายหรือชิป');
    fireEvent.click(screen.getByRole('button', { name: '7408 AND' }));
    expect(summary()).toBe('0 สาย, 1 ชิป. เลือกชิป 7408');
  });
});
