import { BOARD_COLORS } from '../palette';

type SevenSegmentProps = {
  /** Top left corner of the digit window */
  x: number;
  y: number;
  width: number;
  height: number;
};

/** A seven segment digit with every segment dull (the display is not simulated). */
export function SevenSegment({ x, y, width, height }: SevenSegmentProps) {
  const t = Math.min(width, height) * 0.14;
  const m = t * 1.6;
  const left = x + m;
  const right = x + width - m;
  const top = y + m * 0.9;
  const bottom = y + height - m * 0.9;
  const mid = y + height / 2;
  const horizontal = (cy: number) => (
    <polygon
      points={`${left + t * 0.4},${cy} ${left + t},${cy - t / 2} ${right - t},${cy - t / 2} ${right - t * 0.4},${cy} ${right - t},${cy + t / 2} ${left + t},${cy + t / 2}`}
      fill={BOARD_COLORS.segOff}
    />
  );
  const vertical = (cx: number, y1: number, y2: number) => (
    <polygon
      points={`${cx},${y1 + t * 0.4} ${cx + t / 2},${y1 + t} ${cx + t / 2},${y2 - t} ${cx},${y2 - t * 0.4} ${cx - t / 2},${y2 - t} ${cx - t / 2},${y1 + t}`}
      fill={BOARD_COLORS.segOff}
    />
  );
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={3}
        fill={BOARD_COLORS.segBody}
        stroke={BOARD_COLORS.segBezel}
        strokeWidth={1.5}
      />
      {horizontal(top)}
      {horizontal(mid)}
      {horizontal(bottom)}
      {vertical(left, top, mid)}
      {vertical(right, top, mid)}
      {vertical(left, mid, bottom)}
      {vertical(right, mid, bottom)}
      <circle cx={right + t * 1.1} cy={bottom + t * 0.4} r={t * 0.45} fill={BOARD_COLORS.segOff} />
    </g>
  );
}
