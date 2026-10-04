import { cn } from '@/lib/cn';
import { jumpTo } from './jumpTo';

export type JumpItem = { id: string; label: string };

type JumpNavProps = { items: JumpItem[]; label: string; className?: string };

/** Row of chips that jump to sections of the current page. Scrolls sideways on phones. */
export function JumpNav({ items, label, className }: JumpNavProps) {
  if (items.length < 2) return null;
  return (
    <nav
      aria-label={label}
      className={cn('-mx-4 mb-8 overflow-x-auto px-4 md:mx-0 md:px-0', className)}
    >
      <ul className="flex gap-2 pb-1">
        {items.map((item) => (
          <li key={item.id} className="shrink-0">
            <button
              type="button"
              onClick={() => jumpTo(item.id)}
              className="type-nav rounded-md bg-surface-card px-3.5 py-2 whitespace-nowrap text-ink"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
