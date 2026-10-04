import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/Card';
import type { ContentNode } from '@/content/types';
import { BlockList } from '@/components/content/BlockRenderer';
import { InlineContent } from '@/components/content/InlineContent';
import { anchorId } from '@/lib/ids';

const TARGET = 'scroll-mt-20 outline-none';

/**
 * A heading with a body: a card with the problem heading, or a bare sub-heading when it has no
 * body. Usually a `###` item, but a standalone `##` question (exam questions 3 to 8) uses it too.
 */
function Exercise({ node }: { node: ContentNode }) {
  const Heading = node.level === 2 ? 'h2' : 'h3';
  const empty =
    node.explain.length === 0 && node.examples.length === 0 && node.children.length === 0;
  if (empty) {
    return (
      <Heading
        id={anchorId(node.id)}
        tabIndex={-1}
        className={`type-title-md pt-4 text-ink ${TARGET}`}
      >
        <InlineContent nodes={node.title} />
      </Heading>
    );
  }
  return (
    <Card
      as="article"
      id={anchorId(node.id)}
      tabIndex={-1}
      className={`flex flex-col gap-4 [content-visibility:auto] [contain-intrinsic-size:auto_480px] ${TARGET}`}
    >
      <Heading className="type-title-md text-ink">
        <InlineContent nodes={node.title} />
      </Heading>
      <BlockList blocks={node.explain} />
      <BlockList blocks={node.examples} />
    </Card>
  );
}

/**
 * Long pages (hundreds of formulas and figures) are mounted a few cards at a time after the
 * first paint, so the heading appears at once and the main thread is never blocked for long.
 */
const FIRST_CARDS = 5;
const CARDS_PER_STEP = 4;

function useCardLimit(total: number): number {
  const [limit, setLimit] = useState(FIRST_CARDS);
  useEffect(() => {
    if (limit >= total) return;
    const next = () => setLimit((l) => l + CARDS_PER_STEP);
    if (typeof requestIdleCallback === 'function') {
      const id = requestIdleCallback(next, { timeout: 200 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(next, 16);
    return () => clearTimeout(id);
  }, [limit, total]);
  return limit;
}

/** Keeps the anchor (and its place in the page) of a card that is not mounted yet. */
function Pending({ node }: { node: ContentNode }) {
  return <div id={anchorId(node.id)} tabIndex={-1} className="h-60 scroll-mt-20 outline-none" />;
}

function Group({ node, start, limit }: { node: ContentNode; start: number; limit: number }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 id={anchorId(node.id)} tabIndex={-1} className={`type-title-lg pt-6 text-ink ${TARGET}`}>
        <InlineContent nodes={node.title} />
      </h2>
      <BlockList blocks={node.explain} />
      <BlockList blocks={node.examples} />
      {node.children.map((child, i) =>
        start + i < limit ? (
          <Exercise key={child.id} node={child} />
        ) : (
          <Pending key={child.id} node={child} />
        ),
      )}
    </section>
  );
}

/** Chapter and exam pages: `##` groups containing `###` exercise cards, in source order. */
export function ExerciseOutline({ root }: { root: ContentNode }) {
  const isGroup = (node: ContentNode) => node.level === 2 && node.children.length > 0;
  const sizes = root.children.map((child) => (isGroup(child) ? child.children.length : 1));
  const limit = useCardLimit(sizes.reduce((sum, n) => sum + n, 0));
  const starts = sizes.map((_, i) => sizes.slice(0, i).reduce((sum, n) => sum + n, 0));
  return (
    <div className="flex flex-col gap-4">
      <BlockList blocks={root.explain} />
      {root.children.map((child, i) => {
        const first = starts[i];
        if (isGroup(child))
          return <Group key={child.id} node={child} start={first} limit={limit} />;
        return first < limit ? (
          <Exercise key={child.id} node={child} />
        ) : (
          <Pending key={child.id} node={child} />
        );
      })}
    </div>
  );
}
