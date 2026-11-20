import { NavLink } from 'react-router-dom';
import {
  CHAPTER_NUMBERS,
  FINAL_CHAPTERS,
  TERMS,
  UI_TEXT,
  chapterPath,
  finalChapterPath,
} from '@/config/site';
import { cn } from '@/lib/cn';

const CHIP =
  'type-nav block rounded-md px-3.5 py-2 whitespace-nowrap transition-colors duration-200';

/**
 * Where a chapter is picked: the chapters of the midterm, then those of the final, one row each.
 */
export function ChapterPicker() {
  const [mid, final] = TERMS;
  const chip = (isActive: boolean) =>
    cn(CHIP, isActive ? 'bg-surface-dark text-on-dark' : 'bg-surface-card text-ink');
  // shorter on a phone, so that the five chapters fit in one row
  const label = (n: number) => (
    <>
      <span aria-hidden="true" className="sm:hidden">
        บท {n}
      </span>
      <span aria-hidden="true" className="hidden sm:inline">
        บทที่ {n}
      </span>
    </>
  );
  return (
    <nav aria-label={UI_TEXT.chapterPick} className="mb-6 flex flex-col gap-3">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
        <span className="type-caption w-20 shrink-0 text-muted">{mid.label}</span>
        <ul className="flex flex-wrap gap-2">
          {CHAPTER_NUMBERS.map((n) => (
            <li key={n}>
              <NavLink
                to={chapterPath(n)}
                end
                aria-label={`บทที่ ${n}`}
                className={({ isActive }) => chip(isActive)}
              >
                {label(n)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
        <span className="type-caption w-20 shrink-0 text-muted">{final.label}</span>
        <ul className="flex flex-wrap gap-2">
          {FINAL_CHAPTERS.map(({ n }) => (
            <li key={n}>
              <NavLink
                to={finalChapterPath(n)}
                end
                aria-label={`บทที่ ${n}`}
                className={({ isActive }) => chip(isActive)}
              >
                {label(n)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
