import type { Position } from '../board/geometry';
import { EDIT_COLORS } from '../board/palette';
import { LENS_SIZE, SCENE_ID, lensCenter, lensScale } from './lens';

type MagnifierProps = {
  /** The finger, in px inside the canvas */
  finger: Position;
  canvas: { width: number; height: number };
  /** The board point under the finger */
  board: Position;
  /** The scale of the board on screen */
  scale: number;
};

/**
 * A round magnifier that follows a finger while it draws a wire or places a chip, because the finger
 * covers the very holes it is aiming at. It shows the same scene again, larger, around the finger.
 */
export function Magnifier({ finger, canvas, board, scale }: MagnifierProps) {
  const r = LENS_SIZE / 2;
  const center = lensCenter(finger, canvas);
  const k = lensScale(scale);
  return (
    <div
      data-lab-magnifier=""
      aria-hidden="true"
      className="pointer-events-none absolute overflow-hidden rounded-full border-2 border-ink bg-surface-soft shadow-[0_4px_16px_rgba(20,20,19,0.28)]"
      style={{ left: center.x - r, top: center.y - r, width: LENS_SIZE, height: LENS_SIZE }}
    >
      <svg width={LENS_SIZE} height={LENS_SIZE} className="block">
        <g transform={`translate(${r} ${r}) scale(${k}) translate(${-board.x} ${-board.y})`}>
          <use href={`#${SCENE_ID}`} />
        </g>
        <g stroke={EDIT_COLORS.halo} strokeWidth={1.5} fill="none">
          <path d={`M${r - 10} ${r}H${r + 10}M${r} ${r - 10}V${r + 10}`} />
          <circle cx={r} cy={r} r={4} />
        </g>
      </svg>
    </div>
  );
}
