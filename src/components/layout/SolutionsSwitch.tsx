import { useSolutions } from '@/components/content/solutions';
import { UI_TEXT } from '@/config/site';
import { cn } from '@/lib/cn';

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
