import { SITE_NAME } from '@/config/site';

/** Brand mark: outlined AND gate with a coral output dot (geometry in UI-SPEC.md section 10). */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-ink"
    >
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 7 H16 A9 9 0 0 1 16 25 H8 Z" />
        <path d="M3 12 H8 M3 20 H8 M25 16 H27" />
      </g>
      <circle cx="29.5" cy="16" r="2.5" className="fill-primary" />
    </svg>
  );
}

/**
 * Mark plus wordmark. The Latin wordmark uses the display serif with negative tracking.
 * Responsive: phones show "Digital Logic", the tab-row range (md) shows the mark only so the
 * tabs fit, and lg and up show the full "Digital Logic Notes".
 */
export function Logo() {
  return (
    <span className="inline-flex items-center gap-2" aria-label={SITE_NAME}>
      <LogoMark />
      <span className="type-display-sm tracking-display text-[22px] whitespace-nowrap text-ink md:hidden lg:inline">
        Digital Logic
        <span className="ml-1.5 hidden text-muted lg:inline">Notes</span>
      </span>
    </span>
  );
}
