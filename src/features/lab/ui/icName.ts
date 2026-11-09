import { UI_TEXT } from '@/config/site';
import type { PlacedIc } from '../sim/evaluate';

/** A chip as the student knows it: its type and where it sits, "7408 (เบรดบอร์ด 1 #11)". */
export const icName = (ic: PlacedIc): string =>
  `${ic.type} (${UI_TEXT.labBreadboard} ${ic.board + 1} #${ic.col})`;
