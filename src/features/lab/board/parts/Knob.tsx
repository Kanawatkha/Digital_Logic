import { BOARD_COLORS } from '../palette';

type KnobProps = {
  x: number;
  y: number;
  radius: number;
  capColor?: string;
};

/** A black rotary knob with a colored cap and a white pointer. */
export function Knob({ x, y, radius, capColor = BOARD_COLORS.knobCap }: KnobProps) {
  return (
    <g>
      <circle cx={x} cy={y} r={radius} fill={BOARD_COLORS.knob} stroke="#000" strokeWidth={1} />
      <circle cx={x} cy={y} r={radius * 0.62} fill={capColor} />
      {[...Array(9).keys()].map((k) => (
        <line
          key={k}
          x1={x - radius * 0.5 + k * radius * 0.125}
          y1={y - radius * 0.5}
          x2={x - radius * 0.5 + k * radius * 0.125}
          y2={y + radius * 0.5}
          stroke="#00000030"
          strokeWidth={1.4}
        />
      ))}
      <rect
        x={x - 1.6}
        y={y - radius * 0.96}
        width={3.2}
        height={radius * 0.3}
        rx={1.2}
        fill={BOARD_COLORS.silk}
        opacity={0.85}
      />
    </g>
  );
}
