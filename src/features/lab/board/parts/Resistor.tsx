import { BOARD_COLORS } from '../palette';

type ResistorProps = {
  /** Center */
  x: number;
  y: number;
  length?: number;
  direction?: 'horizontal' | 'vertical';
};

/** A small blue resistor with three bands. */
export function Resistor({ x, y, length = 20, direction = 'horizontal' }: ResistorProps) {
  const thick = 7;
  const rotate = direction === 'vertical' ? `rotate(90 ${x} ${y})` : undefined;
  return (
    <g transform={rotate}>
      <rect
        x={x - length / 2}
        y={y - thick / 2}
        width={length}
        height={thick}
        rx={2.5}
        fill={BOARD_COLORS.resistor}
        stroke={BOARD_COLORS.resistorEdge}
        strokeWidth={0.8}
      />
      {[-0.22, 0, 0.22].map((f) => (
        <rect
          key={f}
          x={x + f * length - 0.8}
          y={y - thick / 2}
          width={1.6}
          height={thick}
          fill={BOARD_COLORS.band}
        />
      ))}
    </g>
  );
}
