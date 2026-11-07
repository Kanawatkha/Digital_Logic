import { describe, expect, it } from 'vitest';
import { icPinPoints } from '../sim/ics';
import { allPoints, pointId } from '../sim/points';
import {
  IC_BODY,
  breadboardFrame,
  LAST_IC_COL,
  icFrame,
  icSlots,
  pointPosition,
  railSlot,
  snapIc,
} from './geometry';
import {
  BOARD_SIZE,
  BREADBOARDS,
  CHANNEL_GAP,
  COLUMNS,
  LEDS,
  PANEL_GAP,
  PANELS,
  PITCH,
  POWER_SOCKET_CENTERS,
  POWER_SOCKETS,
  SWITCHES,
  SWITCH_BUTTON_SIZE,
  SWITCH_COUNT,
} from './layout';

describe('board layout', () => {
  it('puts every panel and part inside the board', () => {
    for (const panel of PANELS) {
      expect(panel.x, panel.id).toBeGreaterThanOrEqual(0);
      expect(panel.y, panel.id).toBeGreaterThanOrEqual(0);
      expect(panel.x + panel.width, panel.id).toBeLessThanOrEqual(BOARD_SIZE.width);
      expect(panel.y + panel.height, panel.id).toBeLessThanOrEqual(BOARD_SIZE.height);
    }
  });

  it('has the eight switches and the sixteen LEDs numbered once each', () => {
    expect(SWITCHES).toHaveLength(SWITCH_COUNT);
    expect(LEDS.map((led) => led.number).sort((a, b) => a - b)).toEqual(
      Array.from({ length: 16 }, (_, k) => k + 1),
    );
  });

  it('gives every point a position on the board, with no two points on the same spot', () => {
    const seen = new Map<string, string>();
    for (const point of allPoints()) {
      const id = pointId(point);
      const position = pointPosition(point);
      expect(position, id).not.toBeNull();
      const { x, y } = position!;
      expect(x, id).toBeGreaterThanOrEqual(0);
      expect(y, id).toBeGreaterThanOrEqual(0);
      expect(x, id).toBeLessThanOrEqual(BOARD_SIZE.width);
      expect(y, id).toBeLessThanOrEqual(BOARD_SIZE.height);
      const spot = `${x.toFixed(1)},${y.toFixed(1)}`;
      expect(seen.get(spot), `${id} and ${seen.get(spot)}`).toBeUndefined();
      seen.set(spot, id);
    }
  });

  it('spaces holes by the pitch and leaves the channel between rows e and f', () => {
    const at = (id: string) => pointPosition(id)!;
    expect(at('b0:c2:a').x - at('b0:c1:a').x).toBeCloseTo(PITCH);
    expect(at('b0:c1:b').y - at('b0:c1:a').y).toBeCloseTo(PITCH);
    expect(at('b0:c1:f').y - at('b0:c1:e').y).toBeCloseTo(CHANNEL_GAP);
    expect(at('b0:c1:g').y - at('b0:c1:f').y).toBeCloseTo(PITCH);
  });

  it('keeps the breadboards in order, the second below the first', () => {
    expect(BREADBOARDS).toHaveLength(2);
    expect(pointPosition('b1:c1:a')!.y).toBeGreaterThan(pointPosition('b0:c1:j')!.y);
    expect(pointPosition(`b0:c${COLUMNS}:a`)!.x).toBeGreaterThan(pointPosition('b0:c1:a')!.x);
  });

  it('seats a chip over the channel with its pins on seven columns', () => {
    const pins = icPinPoints(0, 10);
    const bottomLeft = pointPosition(pins[1] ?? '')!;
    const bottomRight = pointPosition(pins[7] ?? '')!;
    const topRight = pointPosition(pins[8] ?? '')!;
    const topLeft = pointPosition(pins[14] ?? '')!;
    expect(bottomRight.x - bottomLeft.x).toBeCloseTo(6 * PITCH);
    expect(topRight.x).toBeCloseTo(bottomRight.x);
    expect(topLeft.x).toBeCloseTo(bottomLeft.x);
    expect(bottomLeft.y - topLeft.y).toBeCloseTo(CHANNEL_GAP);
  });

  it('returns null for an id that is not on the board', () => {
    expect(pointPosition('nowhere')).toBeNull();
  });
});

describe('chip frame and snapping', () => {
  it('centers the body over the channel and over its seven columns', () => {
    const frame = icFrame(0, 10)!;
    const pin1 = pointPosition('b0:c10:f')!;
    const pin7 = pointPosition('b0:c16:f')!;
    const pin14 = pointPosition('b0:c10:e')!;
    expect(frame.centerX).toBeCloseTo((pin1.x + pin7.x) / 2);
    expect(frame.centerY).toBeCloseTo((pin1.y + pin14.y) / 2);
    expect(frame.width).toBeCloseTo(IC_BODY.width);
    // the legs reach out of the body to rows e and f
    expect(frame.y).toBeGreaterThan(pin14.y);
    expect(frame.y + frame.height).toBeLessThan(pin1.y);
  });

  it('lists every place a chip can sit, on both breadboards', () => {
    const slots = icSlots();
    expect(slots).toHaveLength(2 * LAST_IC_COL);
    expect(slots.filter((slot) => slot.board === 1)).toHaveLength(LAST_IC_COL);
    expect(LAST_IC_COL).toBe(COLUMNS - 6);
  });

  it('snaps a chip held over a channel to the column that centers it', () => {
    const frame = icFrame(1, 20)!;
    expect(snapIc(frame.centerX, frame.centerY)).toEqual({ board: 1, col: 20 });
    // a little off in x or y still lands on the same place
    expect(snapIc(frame.centerX + 4, frame.centerY + 9)).toEqual({ board: 1, col: 20 });
    // half a pitch past the middle rounds to the next column
    expect(snapIc(frame.centerX + PITCH * 0.7, frame.centerY)?.col).toBe(21);
  });

  it('keeps a chip on the board at the edges, and finds nothing far from a channel', () => {
    const left = icFrame(0, 1)!;
    expect(snapIc(left.centerX - 2 * PITCH, left.centerY)).toEqual({ board: 0, col: 1 });
    const right = icFrame(0, LAST_IC_COL)!;
    expect(snapIc(right.centerX + 2 * PITCH, right.centerY)).toEqual({
      board: 0,
      col: LAST_IC_COL,
    });
    expect(snapIc(right.centerX + 20 * PITCH, right.centerY)).toBeNull();
    expect(snapIc(left.centerX, left.centerY - 12 * PITCH)).toBeNull();
    expect(snapIc(-500, -500)).toBeNull();
  });

  it('picks the breadboard whose channel is nearer', () => {
    const upper = icFrame(0, 10)!;
    const lower = icFrame(1, 10)!;
    expect(snapIc(upper.centerX, upper.centerY + 30)?.board).toBe(0);
    expect(snapIc(lower.centerX, lower.centerY - 30)?.board).toBe(1);
  });
});

describe('rail holes', () => {
  const at = (index: number) => pointPosition(`b0:r:top1:${index}`)!.x;

  it('groups the holes by five with one empty slot between blocks', () => {
    expect(at(1) - at(0)).toBeCloseTo(PITCH);
    expect(at(5) - at(4)).toBeCloseTo(2 * PITCH);
    expect(at(10) - at(9)).toBeCloseTo(2 * PITCH);
    expect(at(30) - at(29)).toBeCloseTo(2 * PITCH);
  });

  it('leaves a wider gap in the middle of the rail, between the fifth and the sixth block', () => {
    expect(at(25) - at(24)).toBeCloseTo(3 * PITCH);
    expect(at(25) - at(24)).toBeGreaterThan(at(20) - at(19));
  });

  it('keeps all fifty holes on the board, ending where the sixty columns end', () => {
    expect(railSlot(0)).toBe(0);
    expect(railSlot(49)).toBe(59);
    expect(at(49)).toBeCloseTo(pointPosition(`b0:c${COLUMNS}:a`)!.x);
  });

  it('puts the second half of every line of both breadboards on the same slots', () => {
    for (const board of [0, 1]) {
      for (const line of ['top1', 'top2', 'bot1', 'bot2']) {
        const first = pointPosition(`b${board}:r:${line}:0`)!.x;
        const last = pointPosition(`b${board}:r:${line}:49`)!.x;
        expect(last - first).toBeCloseTo(59 * PITCH);
      }
    }
  });
});

describe('proportions of the drawing', () => {
  const overlap = (
    a: { x: number; y: number; width: number; height: number },
    b: { x: number; y: number; width: number; height: number },
  ) => a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height;

  it('keeps every panel off every other panel (the title block spans the top left)', () => {
    const panels = PANELS.filter((panel) => panel.id !== 'title' && panel.id !== 'breadboards');
    for (const [i, a] of panels.entries()) {
      for (const b of panels.slice(i + 1)) {
        expect(overlap(a, b), `${a.id} and ${b.id}`).toBe(false);
      }
    }
  });

  it('keeps every panel off the breadboards', () => {
    for (const board of [0, 1]) {
      const frame = breadboardFrame(board)!;
      const body = {
        x: frame.left,
        y: frame.top,
        width: frame.right - frame.left,
        height: frame.bottom - frame.top,
      };
      for (const panel of PANELS.filter((item) => item.id !== 'breadboards')) {
        expect(overlap(panel, body), `${panel.id} and breadboard ${board + 1}`).toBe(false);
      }
    }
  });

  it('makes the red buttons square, on one line, evenly spaced, with the sockets over their middle', () => {
    const steps = SWITCHES.slice(1).map((s, k) => s.button.x - SWITCHES[k]!.button.x);
    for (const switchLayout of SWITCHES) {
      expect(switchLayout.button.width).toBe(SWITCH_BUTTON_SIZE);
      expect(switchLayout.button.height).toBe(SWITCH_BUTTON_SIZE);
      expect(switchLayout.button.y).toBe(SWITCHES[0]!.button.y);
      expect(switchLayout.button.x + SWITCH_BUTTON_SIZE / 2).toBeCloseTo(switchLayout.sockets.x);
    }
    for (const step of steps) expect(step).toBeCloseTo(steps[0]!);
  });

  it('lines the two rows of monitor LEDs up, with the same step and one height per row', () => {
    const rows = [LEDS.slice(0, 8), LEDS.slice(8)];
    for (const row of rows) {
      const steps = row.slice(1).map((led, k) => led.led.x - row[k]!.led.x);
      for (const step of steps) expect(step).toBeCloseTo(steps[0]!);
      for (const led of row) expect(led.led.y).toBe(row[0]!.led.y);
    }
    rows[0]!.forEach((led, k) => expect(led.led.x).toBeCloseTo(rows[1]![k]!.led.x));
  });

  it('spaces the power sockets evenly on one line', () => {
    const centers = POWER_SOCKETS.map((name) => POWER_SOCKET_CENTERS[name]);
    const steps = centers.slice(1).map((c, k) => c.x - centers[k]!.x);
    for (const step of steps) expect(step).toBeCloseTo(steps[0]!);
    for (const c of centers) expect(c.y).toBe(centers[0]!.y);
  });
});

describe('the white frames sit on one grid', () => {
  const frame = (id: string) => {
    const found = PANELS.find((panel) => panel.id === id);
    if (!found) throw new Error(`no panel ${id}`);
    return { ...found, right: found.x + found.width, bottom: found.y + found.height };
  };
  const same = (ids: string[], edge: 'x' | 'y' | 'right' | 'bottom') => {
    const values = ids.map((id) => frame(id)[edge]);
    for (const value of values) expect(value, `${edge} of ${ids.join(', ')}`).toBe(values[0]);
  };

  it('starts the title strip and the three big blocks of the top row at one height, and ends the blocks at one height', () => {
    same(['title-strip', 'logic-monitor', 'hex-decoder', 'led-7-segments'], 'y');
    same(['logic-probe', 'logic-monitor', 'hex-decoder', 'led-7-segments'], 'bottom');
  });

  it('keeps one gap between neighbors in the top row, and under the title strip', () => {
    expect(frame('logic-monitor').x - frame('logic-probe').right).toBe(PANEL_GAP);
    expect(frame('hex-decoder').x - frame('logic-monitor').right).toBe(PANEL_GAP);
    expect(frame('led-7-segments').x - frame('hex-decoder').right).toBe(PANEL_GAP);
    expect(frame('logic-probe').y - frame('title-strip').bottom).toBe(PANEL_GAP);
    expect(frame('title-strip').right).toBe(frame('logic-probe').right);
  });

  it('lines the left column up and keeps one gap between its blocks', () => {
    same(['power-supply', 'function-generator'], 'x');
    same(['power-supply', 'function-generator'], 'right');
    expect(frame('function-generator').y - frame('power-supply').bottom).toBe(PANEL_GAP);
  });

  it('stacks the right column in rows with one gap, aligned on both sides', () => {
    same(['amplifier', 'speaker'], 'y');
    same(['amplifier', 'speaker'], 'bottom');
    same(['da-converter', 'driver'], 'y');
    same(['driver-input', 'driver'], 'bottom');
    same(['v-source', 'ad-converter'], 'y');
    same(['v-source', 'ad-converter'], 'bottom');
    // left and right edges of the column
    same(['amplifier', 'da-converter', 'driver-input', 'v-source', 'debounce'], 'x');
    same(['led-7-segments', 'speaker', 'driver', 'ad-converter', 'debounce'], 'right');
    // gaps between the rows and between the two halves of a row
    expect(frame('amplifier').y - frame('led-7-segments').bottom).toBe(PANEL_GAP);
    expect(frame('da-converter').y - frame('amplifier').bottom).toBe(PANEL_GAP);
    expect(frame('driver-input').y - frame('da-converter').bottom).toBe(PANEL_GAP);
    expect(frame('v-source').y - frame('driver-input').bottom).toBe(PANEL_GAP);
    expect(frame('debounce').y - frame('v-source').bottom).toBe(PANEL_GAP);
    expect(frame('speaker').x - frame('amplifier').right).toBe(PANEL_GAP);
    expect(frame('driver').x - frame('da-converter').right).toBe(PANEL_GAP);
    expect(frame('ad-converter').x - frame('v-source').right).toBe(PANEL_GAP);
  });

  it('ends the left column, the logic switch strip and the right column at one height', () => {
    same(['function-generator', 'logic-switch', 'debounce'], 'bottom');
  });

  it('puts the logic switch strip PANEL_GAP from both columns and under the breadboards', () => {
    expect(frame('logic-switch').x - frame('function-generator').right).toBe(PANEL_GAP);
    expect(frame('debounce').x - frame('logic-switch').right).toBe(PANEL_GAP);
  });

  it('centers the breadboards between the two columns', () => {
    const left = breadboardFrame(0)!.left - frame('function-generator').right;
    const right = frame('amplifier').x - breadboardFrame(0)!.right;
    expect(left).toBeCloseTo(right);
    expect(breadboardFrame(1)!.left).toBeCloseTo(breadboardFrame(0)!.left);
  });

  it('keeps the breadboards PANEL_GAP from the top row and from the logic switch strip', () => {
    expect(breadboardFrame(0)!.top - frame('hex-decoder').bottom).toBeGreaterThanOrEqual(PANEL_GAP);
    expect(frame('logic-switch').y - breadboardFrame(1)!.bottom).toBeGreaterThanOrEqual(PANEL_GAP);
  });
});
