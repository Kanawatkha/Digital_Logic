import { BOARD_COLORS } from '../palette';

type LedProps = {
  x: number;
  y: number;
  color?: 'red' | 'green' | 'yellow';
  radius?: number;
  /** Lit LEDs glow; the others are dull */
  lit?: boolean;
  /** Draw the soft halo of a lit LED (off when the lamps of a row must look equally big) */
  glow?: boolean;
};

const BRIGHT = {
  red: BOARD_COLORS.led,
  green: BOARD_COLORS.ledGreen,
  yellow: BOARD_COLORS.ledYellow,
} as const;
const DULL = { red: BOARD_COLORS.ledDim, green: '#3f8a37', yellow: '#a99a26' } as const;

/** A round 5 mm LED. */
export function Led({ x, y, color = 'red', radius = 8, lit = false, glow = true }: LedProps) {
  return (
    <g>
      {lit && glow ? (
        <circle cx={x} cy={y} r={radius * 2.1} fill={BRIGHT[color]} opacity={0.28} />
      ) : null}
      <circle
        cx={x}
        cy={y}
        r={radius}
        fill={lit ? BRIGHT[color] : DULL[color]}
        stroke="#00000055"
        strokeWidth={1}
      />
      <circle
        cx={x - radius * 0.3}
        cy={y - radius * 0.32}
        r={radius * 0.3}
        fill="#ffffff"
        opacity={lit ? 0.7 : 0.35}
      />
    </g>
  );
}
