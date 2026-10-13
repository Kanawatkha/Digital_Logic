import { NavLink } from 'react-router-dom';
import { FloatingSolutionsSwitch } from '@/components/layout/SolutionsSwitch';
import { EXAM_SETS } from '@/config/site';
import { cn } from '@/lib/cn';

/**
 * Toolbar above every exam page: pills that switch between the practice exam sets, and the floating
 * switch that shows or hides the solutions (see FloatingSolutionsSwitch).
 */
export function ExamSetTabs() {
  return (
    <>
      <FloatingSolutionsSwitch />
      <div className="mb-6 flex flex-wrap items-center gap-3">
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
      </div>
    </>
  );
}
