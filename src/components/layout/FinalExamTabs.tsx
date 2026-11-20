import { NavLink } from 'react-router-dom';
import { FloatingSolutionsSwitch } from '@/components/layout/SolutionsSwitch';
import { TermSwitch } from '@/components/layout/TermSwitch';
import { examPath } from '@/components/layout/termPaths';
import { FINAL_EXAM_PROBLEMS, UI_TEXT, finalExamPath } from '@/config/site';
import { cn } from '@/lib/cn';

/**
 * Toolbar above every page of the exam of the final: the switch to the midterm, pills that move between
 * the four big problems, and the floating switch that shows or hides the solutions.
 */
export function FinalExamTabs() {
  return (
    <>
      <FloatingSolutionsSwitch reserveRow />
      <TermSwitch to={examPath} />
      <nav aria-label={UI_TEXT.examProblemPick} className="mb-6">
        <ul className="flex flex-wrap gap-2">
          {FINAL_EXAM_PROBLEMS.map(({ n, title }) => (
            <li key={n}>
              <NavLink
                to={finalExamPath(n)}
                end
                aria-label={`ข้อ ${n} ${title}`}
                className={({ isActive }) =>
                  cn(
                    'type-nav block rounded-md px-3.5 py-2 whitespace-nowrap transition-colors duration-200',
                    isActive ? 'bg-surface-dark text-on-dark' : 'bg-surface-card text-ink',
                  )
                }
              >
                <span aria-hidden="true">ข้อ {n}</span>
                <span aria-hidden="true" className="hidden sm:inline">
                  {' '}
                  {title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
