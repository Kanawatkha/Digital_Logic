export type IconName =
  | 'menu'
  | 'close'
  | 'chevron-right'
  | 'plus'
  | 'minus'
  | 'share'
  | 'copy'
  | 'check'
  | 'fit'
  | 'undo'
  | 'redo'
  | 'trash'
  | 'straight'
  | 'reset'
  | 'sliders'
  | 'chevron-down'
  | 'chip'
  | 'wand'
  | 'alert'
  | 'table'
  | 'tasks'
  | 'play'
  | 'pause'
  | 'palette'
  | 'help'
  | 'download'
  | 'signal'
  | 'save'
  | 'image'
  | 'shuffle';

const PATHS: Record<IconName, string> = {
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  'chevron-right': 'M9 5l7 7-7 7',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  share:
    'M21 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM9 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4',
  copy: 'M11 9h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
  check: 'M5 12.5l5 5 9-10.5',
  fit: 'M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5',
  undo: 'M9 14L4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3',
  redo: 'M15 14l5-5-5-5M20 9H10a6 6 0 0 0 0 12h3',
  trash: 'M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3',
  straight: 'M6 12h12M3 12h.01M21 12h.01',
  reset: 'M4 12a8 8 0 1 0 2.6-5.9M4 4v5h5',
  sliders: 'M4 7h9M17 7h3M4 17h3M11 17h9M15 4v6M9 14v6',
  'chevron-down': 'M5 9l7 7 7-7',
  chip: 'M7 4h10v16H7zM3.5 8H7M3.5 12H7M3.5 16H7M17 8h3.5M17 12h3.5M17 16h3.5M10 4a2 2 0 0 0 4 0',
  palette:
    'M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.9 1.3-1.9-.4-1 .2-2.1 1.3-2.1H17a4 4 0 0 0 4-4c0-5-4-10-9-10zM7.5 11.5h.01M10 7.5h.01M14.5 7.5h.01',
  table: 'M4 5h16v14H4zM4 10h16M4 15h16M10 5v14',
  play: 'M8 5.5v13l11-6.5z',
  pause: 'M8.5 5v14M15.5 5v14',
  tasks: 'M10 6h10M10 12h10M10 18h10M3.5 6l1.3 1.3L7 5M3.5 12l1.3 1.3L7 11M3.5 18l1.3 1.3L7 17',
  alert: 'M12 4.5l9 15.5H3zM12 10.5v4M12 17.4h.01',
  help: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.4 9.6a2.6 2.6 0 1 1 3.7 2.3c-.8.4-1.1.9-1.1 1.7M12 17h.01',
  signal: 'M2 12h4l2.5-7 4 14 3-9 1.5 2H22',
  save: 'M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6',
  image: 'M4 5h16v14H4zM4 16l4.5-4.5 4 4 3-3L20 17M15.5 9h.01',
  shuffle: 'M3 7h4l10 10h4M3 17h4l3.5-3.5M13.5 10.5L17 7h4M18 4l3 3-3 3M18 14l3 3-3 3',
  download: 'M12 4v11M7.5 11l4.5 4.5 4.5-4.5M5 20h14',
  wand: 'M4 20L15 9M13 4v3M13 4.5l1.8 1.8M19 10.5h-3M18.5 4.5l-1.8 1.8M5 6l.8 1.7L7.5 8.5 5.8 9.3 5 11l-.8-1.7L2.5 8.5l1.7-.8zM19 15l.6 1.4L21 17l-1.4.6L19 19l-.6-1.4L17 17l1.4-.6z',
};

type IconProps = { name: IconName; size?: number; className?: string };

/** Decorative stroke icon. Pair it with a text label or aria-label on the parent control. */
export function Icon({ name, size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
