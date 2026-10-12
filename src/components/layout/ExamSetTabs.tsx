import { NavLink } from 'react-router-dom';
import { EXAM_SETS } from '@/config/site';
import { cn } from '@/lib/cn';

/** Pills that switch between the practice exam sets. They sit above the page content on every exam page. */
export function ExamSetTabs() {
  return (
    <nav aria-label="ชุดข้อสอบ" className="mb-6">
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
  );
}
