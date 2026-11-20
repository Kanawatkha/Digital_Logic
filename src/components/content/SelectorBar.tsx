import type { Selector } from '@/content/types';
import { cn } from '@/lib/cn';
import { useChoices, type Selection } from './selectionContext';

const CHIP =
  'type-nav block rounded-md px-3.5 py-2 text-left transition-colors duration-200 sm:whitespace-nowrap';

type SelectorBarProps = {
  selectors: Selector[];
  selection: Selection;
  onChange: (key: string, value: string) => void;
};

/** A row of buttons for each choice of the page: the one that is on is dark, like the chapter picker. */
export function SelectorBar({ selectors, selection, onChange }: SelectorBarProps) {
  return (
    <div className="mb-6 flex flex-col gap-3">
      {selectors.map((s) => (
        <div
          key={s.key}
          role="group"
          aria-label={s.label}
          className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:gap-3"
        >
          <span className="type-caption w-28 shrink-0 pt-2 text-muted">{s.label}</span>
          <ul className="flex flex-wrap gap-2">
            {s.options.map((o) => {
              const on = selection[s.key] === o.value;
              return (
                <li key={o.value}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => onChange(s.key, o.value)}
                    className={cn(
                      CHIP,
                      on ? 'bg-surface-dark text-on-dark' : 'bg-surface-card text-ink',
                    )}
                  >
                    {o.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** The buttons of the choices of the page, at the place of the `@choices` line of the Markdown. */
export function ChoicesBlock() {
  const choices = useChoices();
  if (!choices) return null;
  return (
    <SelectorBar
      selectors={choices.selectors}
      selection={choices.selection}
      onChange={choices.onChange}
    />
  );
}
