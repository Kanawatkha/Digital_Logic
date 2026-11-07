import { BOARD_COLORS } from '../palette';

type PushButtonProps = {
  /** Top left corner */
  x: number;
  y: number;
  width: number;
  height: number;
  color: 'red' | 'yellow';
  /** A latched button sits lower and darker */
  pressed?: boolean;
};

/** A square push button cap. */
export function PushButton({ x, y, width, height, color, pressed = false }: PushButtonProps) {
  const face = color === 'red' ? BOARD_COLORS.buttonRed : BOARD_COLORS.buttonYellow;
  const edge = color === 'red' ? BOARD_COLORS.buttonRedDark : BOARD_COLORS.buttonYellowDark;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={4} fill={edge} />
      <rect
        x={x + 3}
        y={y + (pressed ? 6 : 3)}
        width={width - 6}
        height={height - (pressed ? 11 : 8)}
        rx={3}
        fill={face}
        opacity={pressed ? 0.82 : 1}
      />
      <rect
        x={x + 6}
        y={y + (pressed ? 9 : 6)}
        width={width - 12}
        height={4}
        rx={2}
        fill="#ffffff"
        opacity={0.22}
      />
    </g>
  );
}
