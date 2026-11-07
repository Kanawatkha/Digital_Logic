import { UI_TEXT } from '@/config/site';
import { parsePoint } from '../sim/points';

/** A point of the board in words, for a screen reader and for the keyboard hint. */
export function describePoint(id: string): string {
  const point = parsePoint(id);
  if (!point) return id;
  switch (point.kind) {
    case 'hole':
      return `${UI_TEXT.labBreadboard} ${point.board + 1} ${UI_TEXT.labPtColumn} ${point.col} ${UI_TEXT.labPtRow} ${point.row}`;
    case 'rail':
      return `${UI_TEXT.labBreadboard} ${point.board + 1} ${UI_TEXT.labPtRail} ${UI_TEXT.labPtRails[point.line]} ${UI_TEXT.labPtHole} ${point.index + 1}`;
    case 'power':
      return `${UI_TEXT.labPtSupply} ${point.socket} ${UI_TEXT.labPtSocket} ${point.pin + 1}`;
    case 'switch':
      return `${UI_TEXT.labSwitch} ${point.index + 1} ${UI_TEXT.labPtSocket} ${point.pin + 1}`;
    case 'led':
      return `${UI_TEXT.labLeds} ${point.number} ${UI_TEXT.labPtSocket} ${point.pin + 1}`;
  }
}
