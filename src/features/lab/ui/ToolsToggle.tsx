import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';

type ToolsToggleProps = {
  open: boolean;
  onToggle: () => void;
  /** Id of the tools it folds, while they are on screen */
  controls?: string;
  /** `floating`: a card over the canvas. `header`: a small button in the navbar, next to share */
  variant: 'floating' | 'header';
};

const SHAPE = {
  floating:
    'size-12 rounded-lg border shadow-[0_2px_10px_rgba(20,20,19,0.12)] ' + 'pointer-events-auto',
  header: 'size-10 rounded-md border border-transparent md:me-2',
} as const;

const TONE = {
  floating: {
    open: 'border-surface-dark bg-surface-dark text-on-dark',
    closed: 'border-hairline bg-canvas text-ink active:bg-surface-card',
  },
  header: {
    open: 'bg-surface-dark text-on-dark',
    closed: 'bg-surface-card text-ink',
  },
} as const;

/** The icon-only button that folds the lab tools away and brings them back. */
export function ToolsToggle({ open, onToggle, controls, variant }: ToolsToggleProps) {
  const label = open ? UI_TEXT.labToolsHide : UI_TEXT.labToolsShow;
  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={controls}
      aria-label={label}
      title={label}
      className={`inline-flex shrink-0 items-center justify-center transition-colors duration-200 active:scale-95 ${SHAPE[variant]} ${
        TONE[variant][open ? 'open' : 'closed']
      }`}
      onClick={onToggle}
    >
      <span
        className={`inline-flex transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          open ? 'rotate-180' : ''
        }`}
      >
        <Icon name="sliders" />
      </span>
    </button>
  );
}
