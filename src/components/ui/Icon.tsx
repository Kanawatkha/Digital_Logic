type IconName = 'menu' | 'close' | 'chevron-right' | 'plus' | 'minus';

const PATHS: Record<IconName, string> = {
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  'chevron-right': 'M9 5l7 7-7 7',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
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
