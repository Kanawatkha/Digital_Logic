import type { CSSProperties } from 'react';

type MenuToggleIconProps = { open: boolean; size?: number };

const LINE = 'motion-reduce:transition-none';

/** Hamburger that turns into a cross: the outer bars rotate into an X while the middle one folds away. */
export function MenuToggleIcon({ open, size = 24 }: MenuToggleIconProps) {
  const base: CSSProperties = {
    transformBox: 'fill-box',
    transformOrigin: 'center',
    transition: 'transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 200ms ease',
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line
        x1="4"
        x2="20"
        y1="7"
        y2="7"
        className={LINE}
        style={{ ...base, transform: open ? 'translateY(5px) rotate(45deg)' : 'none' }}
      />
      <line
        x1="4"
        x2="20"
        y1="12"
        y2="12"
        className={LINE}
        style={{ ...base, opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'none' }}
      />
      <line
        x1="4"
        x2="20"
        y1="17"
        y2="17"
        className={LINE}
        style={{ ...base, transform: open ? 'translateY(-5px) rotate(-45deg)' : 'none' }}
      />
    </svg>
  );
}
