import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import type { NetState } from '../sim/evaluate';
import type { NetMembers } from '../sim/netOf';
import { describePoint } from './pointName';

type NetBarProps = {
  /** The point the student asked about */
  point: string;
  members: NetMembers;
  state: NetState;
  onClear: () => void;
};

const VALUE: Record<NetState, string> = {
  high: UI_TEXT.labNetHigh,
  low: UI_TEXT.labNetLow,
  floating: UI_TEXT.labNetFloat,
  conflict: UI_TEXT.labNetConflict,
};

/** One line over the board about the net that is lit: where it was asked, what it carries, what is on it. */
export function NetBar({ point, members, state, onClear }: NetBarProps) {
  const others = members.points.length - 1;
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={UI_TEXT.labNet}
      className="lab-appear type-nav pointer-events-auto mx-auto flex w-fit max-w-full items-center gap-2 rounded-md bg-surface-dark py-1 ps-3 pe-1 text-on-dark"
      data-state="open"
    >
      <span className="min-w-0">
        <span className="font-medium">{describePoint(point)}</span>
        {' · '}
        {UI_TEXT.labNetValue} {VALUE[state]}
        {' · '}
        {members.wireIds.length === 0
          ? UI_TEXT.labNetNone
          : `${UI_TEXT.labNetParts} ${others + 1}, ${members.wireIds.length} ${UI_TEXT.labSummaryWires}`}
      </span>
      <button
        type="button"
        onClick={onClear}
        aria-label={UI_TEXT.labNetClear}
        title={UI_TEXT.labNetClear}
        className="inline-flex size-8 shrink-0 items-center justify-center rounded-md active:bg-surface-dark-elevated"
      >
        <Icon name="close" size={16} />
      </button>
    </div>
  );
}
