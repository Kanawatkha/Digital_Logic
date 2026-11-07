import { BOARD_COLORS } from '../palette';

type SocketProps = {
  /** Top left corner */
  x: number;
  y: number;
  cols: number;
  rows: number;
  pitch?: number;
};

/** A block of black female header sockets. */
export function Socket({ x, y, cols, rows, pitch = 12 }: SocketProps) {
  const pad = 3;
  const width = cols * pitch + pad * 2;
  const height = rows * pitch + pad * 2;
  const holes: { cx: number; cy: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      holes.push({ cx: x + pad + pitch / 2 + c * pitch, cy: y + pad + pitch / 2 + r * pitch });
    }
  }
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={1.5} fill={BOARD_COLORS.socket} />
      {holes.map(({ cx, cy }) => (
        <rect
          key={`${cx}:${cy}`}
          x={cx - pitch * 0.3}
          y={cy - pitch * 0.3}
          width={pitch * 0.6}
          height={pitch * 0.6}
          rx={0.8}
          fill={BOARD_COLORS.socketHole}
        />
      ))}
    </g>
  );
}
