import { NavLink } from 'react-router-dom';
import { TERMS, UI_TEXT, type Term } from '@/config/site';
import { cn } from '@/lib/cn';

type TermSwitchProps = {
  /** The page of the same kind (exam, formula sheet) for a term */
  to: (term: Term) => string;
};

/** Two buttons that move between the midterm and the final of a page: the one that is on is dark. */
export function TermSwitch({ to }: TermSwitchProps) {
  return (
    <nav aria-label={UI_TEXT.termSwitch} className="mb-4">
      <ul className="inline-flex gap-0.5 rounded-lg bg-surface-card p-0.5">
        {TERMS.map((term) => (
          <li key={term.id}>
            <NavLink
              to={to(term.id)}
              className={({ isActive }) =>
                cn(
                  'type-nav block rounded-md px-4 py-2 whitespace-nowrap transition-colors duration-200',
                  isActive ? 'bg-surface-dark text-on-dark' : 'text-ink',
                )
              }
            >
              {term.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
