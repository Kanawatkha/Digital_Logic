import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import { KEYS, withKey } from '../shortcuts';

type ViewButtonsProps = {
  percent: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFit: () => void;
  onActualSize: () => void;
};

const BUTTON =
  'inline-flex size-10 items-center justify-center rounded-md text-ink active:bg-surface-card';

/** Zoom in, zoom out, fit and 100% buttons, at the bottom right of the canvas. */
export function ViewButtons({
  percent,
  onZoomIn,
  onZoomOut,
  onFit,
  onActualSize,
}: ViewButtonsProps) {
  return (
    <div className="pointer-events-auto ml-auto flex shrink-0 items-center gap-0.5 rounded-lg border border-hairline bg-canvas p-1 shadow-[0_2px_10px_rgba(20,20,19,0.12)]">
      <button
        type="button"
        className={BUTTON}
        aria-label={UI_TEXT.labZoomOut}
        title={withKey(UI_TEXT.labZoomOut, KEYS.zoomOut)}
        onClick={onZoomOut}
      >
        <Icon name="minus" />
      </button>
      <button
        type="button"
        className="type-nav h-10 min-w-14 rounded-md px-1 text-center text-ink tabular-nums active:bg-surface-card"
        aria-label={UI_TEXT.labActual}
        title={withKey(UI_TEXT.labActual, KEYS.actualSize)}
        onClick={onActualSize}
      >
        {percent}%
      </button>
      <button
        type="button"
        className={BUTTON}
        aria-label={UI_TEXT.labZoomIn}
        title={withKey(UI_TEXT.labZoomIn, KEYS.zoomIn)}
        onClick={onZoomIn}
      >
        <Icon name="plus" />
      </button>
      <button
        type="button"
        className={BUTTON}
        aria-label={UI_TEXT.labFit}
        title={withKey(UI_TEXT.labFit, KEYS.fit)}
        onClick={onFit}
      >
        <Icon name="fit" />
      </button>
    </div>
  );
}
