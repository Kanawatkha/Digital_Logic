import { describe, expect, it } from 'vitest';
import { allPoints, pointId } from '../sim/points';
import { describePoint } from './pointName';

describe('point names', () => {
  it('says where a hole, a rail hole and the sockets are', () => {
    expect(describePoint('b0:c12:e')).toBe('เบรดบอร์ด 1 คอลัมน์ 12 แถว e');
    expect(describePoint('b1:r:top2:17')).toBe('เบรดบอร์ด 2 รางไฟ บน 2 รู 18');
    expect(describePoint('power:+5V:0')).toBe('ไฟ +5V ช่อง 1');
    expect(describePoint('sw3:5')).toBe('สวิตช์ 4 ช่อง 6');
    expect(describePoint('led9:1')).toBe('LED 9 ช่อง 2');
  });

  it('names every point of the board differently', () => {
    const names = new Set(allPoints().map((point) => describePoint(pointId(point))));
    expect(names.size).toBe(allPoints().length);
  });

  it('gives back an id that is not a point', () => {
    expect(describePoint('nowhere')).toBe('nowhere');
  });
});
