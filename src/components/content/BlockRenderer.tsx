import type { Block } from '@/content/types';
import { FigureBlock } from '@/components/content/FigureBlock';
import { InlineContent } from '@/components/content/InlineContent';
import { ScrollArea } from '@/components/content/ScrollArea';
import { TableBlock } from '@/components/content/TableBlock';
import { cn } from '@/lib/cn';

/** Vertical stack of blocks with the standard reading rhythm. */
export function BlockList({ blocks, className }: { blocks: Block[]; className?: string }) {
  if (blocks.length === 0) return null;
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} />
      ))}
    </div>
  );
}

const LABEL = 'type-caption-upper text-body';

/** Maps one content block to its component. Adding a block type breaks the build here first. */
export function BlockRenderer({ block }: { block: Block }) {
  switch (block.t) {
    case 'p':
      return (
        <p className="type-body-md">
          <InlineContent nodes={block.c} />
        </p>
      );
    case 'math':
      return (
        <ScrollArea className="overflow-y-hidden" html={block.html} centered />
      );
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag
          className={cn(
            'type-body-md flex flex-col gap-1.5 ps-6',
            block.ordered ? 'list-decimal' : 'list-disc',
          )}
        >
          {block.items.map((item, i) => (
            <li key={i} className="ps-1">
              <InlineContent nodes={item.c} />
              <BlockList blocks={item.children} className="mt-2" />
            </li>
          ))}
        </Tag>
      );
    }
    case 'table':
      return <TableBlock align={block.align} head={block.head} rows={block.rows} />;
    case 'figure':
      return <FigureBlock svg={block.svg} />;
    case 'note':
      return (
        <aside className="rounded-md bg-surface-soft p-4">
          <BlockList blocks={block.c} />
        </aside>
      );
    case 'example':
      return (
        <section data-example={block.id} className="flex flex-col gap-3">
          <BlockList blocks={block.problem} />
          {block.sol.length > 0 ? (
            <>
              <p className={LABEL}>Sol</p>
              <BlockList blocks={block.sol} />
            </>
          ) : null}
          {block.ans.length > 0 ? (
            <ScrollArea className="rounded-md bg-surface-soft p-4">
              <BlockList blocks={block.ans} />
            </ScrollArea>
          ) : null}
        </section>
      );
  }
}
