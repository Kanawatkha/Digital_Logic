import { InlineContent } from '@/components/content/InlineContent';
import { Icon } from '@/components/ui/Icon';
import type { Inline } from '@/content/types';
import { cn } from '@/lib/cn';

type DiagramNodeProps = {
  id: string;
  number?: string;
  title: Inline[];
  open: boolean;
  /** Id of the column this node opens, set only while it is open. */
  controls?: string;
  tone: 'chapter' | 'item';
  /** Position in its column, used to stagger the enter animation. */
  order: number;
  onToggle: () => void;
};

/** One node of the diagram: a disclosure button. The open node gets a tint and a coral left edge. */
export function DiagramNode({
  id,
  number,
  title,
  open,
  controls,
  tone,
  order,
  onToggle,
}: DiagramNodeProps) {
  return (
    <button
      type="button"
      data-node-id={id}
      data-open={open}
      aria-expanded={open}
      aria-controls={controls}
      onClick={onToggle}
      style={{ animationDelay: `${order * 40}ms` }}
      className={cn(
        'diagram-enter relative z-10 flex w-full items-center gap-3 rounded-lg border-l-2 text-left',
        tone === 'chapter'
          ? 'p-5'
          : 'border-y border-r border-y-hairline border-r-hairline px-4 py-4 md:px-5',
        open ? 'border-l-primary bg-surface-card' : 'border-l-transparent',
        tone === 'chapter' ? (open ? '' : 'bg-surface-card') : open ? '' : 'bg-canvas',
      )}
    >
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        {number ? <span className="type-caption text-muted">{number}</span> : null}
        <span className={cn('text-ink', tone === 'chapter' ? 'type-title-md' : 'type-title-sm')}>
          <InlineContent nodes={title} />
        </span>
      </span>
      <Icon
        name="chevron-right"
        size={18}
        className={cn('shrink-0', open ? 'text-primary' : 'text-muted')}
      />
    </button>
  );
}
