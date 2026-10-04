import type { Inline } from '@/content/types';

/**
 * Renders inline nodes. Math HTML is pre-rendered KaTeX produced by scripts/build-content
 * (trusted build output), so it is inserted as-is.
 */
export function InlineContent({ nodes }: { nodes: Inline[] }) {
  return (
    <>
      {nodes.map((node, i) => {
        switch (node.t) {
          case 'text':
            return node.v;
          case 'strong':
            return (
              <strong key={i} className="font-medium text-ink">
                <InlineContent nodes={node.c} />
              </strong>
            );
          case 'code':
            return (
              <code key={i} className="rounded-xs bg-surface-soft px-1 font-mono text-[0.9em]">
                {node.v}
              </code>
            );
          case 'math':
            return <span key={i} dangerouslySetInnerHTML={{ __html: node.html }} />;
        }
      })}
    </>
  );
}
