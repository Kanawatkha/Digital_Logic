import { Fragment } from 'react';
import { barDepth, parseNotation, type Notation as Node } from '../analysis/notation';

/** Space between stacked bars, in px */
const BAR_GAP = 3;

function Part({ node }: { node: Node }) {
  if (node.t === 'text') return <>{node.text}</>;
  return (
    <span
      className="notation-bar"
      // an outer bar rides above the bars inside it
      style={{ paddingTop: (barDepth(node) - 1) * BAR_GAP }}
    >
      {node.inner.map((part, i) => (
        <Part key={i} node={part} />
      ))}
    </span>
  );
}

/**
 * A boolean expression with NOT as a bar over the letter or the group: `A'B` shows as A-bar B and
 * `(A·B)'` as a bar over A·B. The expression is written with primes (as in `expression.ts`); a
 * screen reader gets that text.
 */
export function Notation({ text, className }: { text: string; className?: string }) {
  const parts = parseNotation(text);
  return (
    <span role="img" aria-label={text} className={className}>
      <span aria-hidden="true" className="leading-[2.1]">
        {parts.map((part, i) => (
          <Fragment key={i}>
            <Part node={part} />
          </Fragment>
        ))}
      </span>
    </span>
  );
}
