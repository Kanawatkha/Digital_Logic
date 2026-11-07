import { BOARD_COLORS, SILK_FONT } from '../palette';

type CapacitorProps = {
  x: number;
  y: number;
  kind: 'electrolytic' | 'ceramic';
  radius?: number;
};

/** An electrolytic (round can) or ceramic (small yellow block) capacitor. */
export function Capacitor({ x, y, kind, radius = 7 }: CapacitorProps) {
  if (kind === 'ceramic') {
    return (
      <g>
        <rect
          x={x - radius}
          y={y - radius * 0.65}
          width={radius * 2}
          height={radius * 1.3}
          rx={1.5}
          fill={BOARD_COLORS.capCeramic}
          stroke="#9c7f12"
          strokeWidth={0.8}
        />
        <text
          x={x}
          y={y + radius * 0.25}
          fontSize={radius * 0.7}
          textAnchor="middle"
          fill="#6b560a"
          fontFamily={SILK_FONT}
        >
          104
        </text>
      </g>
    );
  }
  return (
    <g>
      <circle cx={x} cy={y} r={radius} fill={BOARD_COLORS.capBody} stroke="#000" strokeWidth={1} />
      <circle cx={x} cy={y} r={radius * 0.72} fill={BOARD_COLORS.capTop} />
      <path
        d={`M${x - radius * 0.72} ${y}a${radius * 0.72} ${radius * 0.72} 0 0 1 ${radius * 0.72} -${radius * 0.72}v${radius * 1.44}a${radius * 0.72} ${radius * 0.72} 0 0 1 -${radius * 0.72} -${radius * 0.72}z`}
        fill={BOARD_COLORS.capBody}
        opacity={0.65}
      />
    </g>
  );
}
