import type { ReactNode } from 'react';
import { PANEL_SHIFT, type ShiftedPanel } from '../layout';

/** Draws the contents of a frame where the frame is now (see PANEL_SHIFT). */
export function Shift({ panel, children }: { panel: ShiftedPanel; children: ReactNode }) {
  const { dx, dy } = PANEL_SHIFT[panel];
  return <g transform={`translate(${dx} ${dy})`}>{children}</g>;
}
