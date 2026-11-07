import { BOARD_COLORS } from '../palette';

type DipProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  /** Pins on each long side */
  pinsPerSide: number;
  /** Long side along x (pins top and bottom) or along y (pins left and right) */
  direction?: 'horizontal' | 'vertical';
};

/** A chip: black body, notch at one short end, silver pins along both long sides. */
export function Dip({ x, y, width, height, pinsPerSide, direction = 'horizontal' }: DipProps) {
  const horizontal = direction === 'horizontal';
  const long = horizontal ? width : height;
  const step = long / pinsPerSide;
  const pins = Array.from({ length: pinsPerSide }, (_, k) => k * step + step / 2);
  const stub = 3.5;
  const thick = Math.max(2, step * 0.38);
  return (
    <g>
      {pins.map((offset) =>
        horizontal ? (
          <g key={offset} fill={BOARD_COLORS.pin}>
            <rect x={x + offset - thick / 2} y={y - stub} width={thick} height={stub} />
            <rect x={x + offset - thick / 2} y={y + height} width={thick} height={stub} />
          </g>
        ) : (
          <g key={offset} fill={BOARD_COLORS.pin}>
            <rect x={x - stub} y={y + offset - thick / 2} width={stub} height={thick} />
            <rect x={x + width} y={y + offset - thick / 2} width={stub} height={thick} />
          </g>
        ),
      )}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={2}
        fill={BOARD_COLORS.chip}
        stroke={BOARD_COLORS.chipEdge}
        strokeWidth={1}
      />
      {horizontal ? (
        <path
          d={`M${x} ${y + height / 2 - 4}a4 4 0 0 1 0 8`}
          fill="none"
          stroke={BOARD_COLORS.chipEdge}
          strokeWidth={1.2}
        />
      ) : (
        <path
          d={`M${x + width / 2 - 4} ${y}a4 4 0 0 0 8 0`}
          fill="none"
          stroke={BOARD_COLORS.chipEdge}
          strokeWidth={1.2}
        />
      )}
    </g>
  );
}
