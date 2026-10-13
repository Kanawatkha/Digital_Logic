import { NavLink } from 'react-router-dom';
import { useSolutions } from '@/components/content/solutions';
import { EXAM_SETS, UI_TEXT } from '@/config/site';
import { cn } from '@/lib/cn';

/**
 * Toolbar above every exam page: pills that switch between the practice exam sets, and a switch
 * that shows or hides the solutions (hidden, each sub-question shows only its question).
 */
export function ExamSetTabs() {
  const { show, setShow } = useSolutions();
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <nav aria-label="ชุดข้อสอบ">
        <ul className="flex flex-wrap gap-2">
          {EXAM_SETS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end
                className={({ isActive }) =>
                  cn(
                    'type-nav block rounded-md px-3.5 py-2 whitespace-nowrap transition-colors duration-200',
                    isActive ? 'bg-surface-dark text-on-dark' : 'bg-surface-card text-ink',
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
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
    </div>
  );
}
