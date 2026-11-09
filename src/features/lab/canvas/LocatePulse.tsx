import { CHANNEL_GAP } from '../board/layout';
import type { IcFrame, Position } from '../board/geometry';
import { EDIT_COLORS } from '../board/palette';

/** A place the board was moved to, to be pointed at for a moment. */
export type Pulse = {
  /** Changes with every request, so asking again for the same place plays the ring again */
  id: number;
  at: Position;
  /** The body of the chip, when the place is a chip */
  frame: IcFrame | null;
};

/** A ring that fades in and out twice around a chip or a point ("here"). */
export function LocatePulse({ pulse, scale }: { pulse: Pulse; scale: number }) {
  // a ring around a point keeps a size that can be seen however far the board is zoomed out
  const radius = Math.max(12, 22 / scale);
  const frame = pulse.frame;
  return (
    <g key={pulse.id} pointerEvents="none" data-testid="locate-pulse">
      {frame ? (
        <rect
          className="lab-locate"
          x={frame.x - 6}
          y={frame.centerY - CHANNEL_GAP / 2 - 7}
          width={frame.width + 12}
          height={CHANNEL_GAP + 14}
          rx={8}
          fill={EDIT_COLORS.halo}
          fillOpacity={0.2}
          stroke={EDIT_COLORS.halo}
          strokeWidth={3}
          vectorEffect="non-scaling-stroke"
        />
      ) : (
        <circle
          className="lab-locate"
          cx={pulse.at.x}
          cy={pulse.at.y}
          r={radius}
          fill={EDIT_COLORS.halo}
          fillOpacity={0.2}
          stroke={EDIT_COLORS.halo}
          strokeWidth={3}
          vectorEffect="non-scaling-stroke"
        />
      )}
    </g>
  );
}
