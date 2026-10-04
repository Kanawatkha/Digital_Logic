import { BlockList } from '@/components/content/BlockRenderer';
import { InlineContent } from '@/components/content/InlineContent';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import type { ContentNode } from '@/content/types';
import { plainText } from '@/lib/text';
import { examplesButtonId } from './model';

type TopicBlockProps = {
  node: ContentNode;
  examplesOpen: boolean;
  /** Id of the example column, passed to aria-controls while it is open. */
  examplesColumnId: string;
  onToggleExamples: () => void;
};

/** Expanded topic: title, explanation and formulas, and a button for the examples (never inline). */
export function TopicBlock({
  node,
  examplesOpen,
  examplesColumnId,
  onToggleExamples,
}: TopicBlockProps) {
  const count = node.examples.length;
  return (
    <Card as="article" className="diagram-enter relative z-10 flex flex-col gap-4">
      <h2 className="type-title-md text-ink">
        <InlineContent nodes={node.title} />
      </h2>
      <BlockList blocks={node.explain} />
      {count > 0 ? (
        <Button
          variant="secondary"
          data-node-id={examplesButtonId(node.id)}
          aria-expanded={examplesOpen}
          aria-controls={examplesOpen ? examplesColumnId : undefined}
          onClick={onToggleExamples}
          className="self-start"
        >
          {examplesOpen ? 'ซ่อนตัวอย่าง' : `ดูตัวอย่าง (${count})`}
        </Button>
      ) : null}
    </Card>
  );
}

/** All examples of a topic in order, each with problem, Sol and the answer strip. */
export function ExamplesBlock({ node }: { node: ContentNode }) {
  return (
    <Card
      as="section"
      variant="feature"
      aria-label={`ตัวอย่าง ${plainText(node.title)}`}
      className="diagram-enter relative z-10 flex flex-col gap-6"
    >
      <h2 className="type-title-md text-ink">
        ตัวอย่าง{' '}
        <span className="text-body">
          <InlineContent nodes={node.title} />
        </span>
      </h2>
      {node.examples.map((block, i) => (
        <div key={i} className="border-t border-hairline pt-6 first:border-0 first:pt-0">
          <BlockList blocks={[block]} />
        </div>
      ))}
    </Card>
  );
}
