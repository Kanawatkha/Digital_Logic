import { useSolutions } from '@/components/content/solutions';
import { UI_TEXT } from '@/config/site';
import { cn } from '@/lib/cn';

/**
 * The switch, floating under the header on every screen size: it follows the scroll so it can be
 * flipped from anywhere on the page and takes no room in the layout (it sits over the right end of
 * the first row). `reserveRow` gives it its own row below the `sm` width, for a first row that is
 * too full to share (the exam set pills).
 */
export function FloatingSolutionsSwitch({ reserveRow = false }: { reserveRow?: boolean }) {
  return (
    <div
      className={cn(
        'pointer-events-none sticky top-[calc(var(--spacing-nav)+0.75rem)] z-30 flex h-0 items-start justify-end',
        reserveRow && 'mb-4 h-11 sm:mb-0 sm:h-0',
      )}
    >
      <div className="pointer-events-auto rounded-md shadow-[0_2px_10px_rgba(20,20,19,0.12)]">
        <SolutionsSwitch />
      </div>
    </div>
  );
}

/** Switch that shows or hides the solutions (hidden, each sub-question shows only its question). */
export function SolutionsSwitch() {
  const { show, setShow } = useSolutions();
  return (
    <button
      type="button"
      role="switch"
      aria-checked={show}
      onClick={() => setShow(!show)}
      className="type-nav inline-flex items-center gap-2.5 rounded-md bg-surface-card px-3.5 py-2 text-ink"
    >
      <span
        aria-hidden="true"
        className={cn(
          'relative h-5 w-9 shrink-0 rounded-full transition-colors duration-200 motion-reduce:transition-none',
          show ? 'bg-primary-active' : 'bg-muted-soft',
        )}
      >
        <span
          className={cn(
            'absolute top-0.5 left-0.5 size-4 rounded-full bg-on-primary transition-transform duration-200 motion-reduce:transition-none',
            show && 'translate-x-4',
          )}
        />
      </span>
      {UI_TEXT.solutions}
    </button>
  );
}
