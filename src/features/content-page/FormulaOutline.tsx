import type { ContentNode } from '@/content/types';
import { BlockList } from '@/components/content/BlockRenderer';
import { InlineContent } from '@/components/content/InlineContent';
import { JumpNav, type JumpItem } from './JumpNav';
import { jumpTo } from './jumpTo';
import { anchorId } from '@/lib/ids';
import { plainText, truncate } from '@/lib/text';

const TARGET = 'scroll-mt-20 outline-none';

function Topic({ node }: { node: ContentNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 id={anchorId(node.id)} tabIndex={-1} className={`type-title-md pt-4 text-ink ${TARGET}`}>
        <InlineContent nodes={node.title} />
      </h3>
      <BlockList blocks={node.explain} />
      <BlockList blocks={node.examples} />
    </div>
  );
}

function Section({ node }: { node: ContentNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 id={anchorId(node.id)} tabIndex={-1} className={`type-title-lg pt-8 text-ink ${TARGET}`}>
        <InlineContent nodes={node.title} />
      </h2>
      <BlockList blocks={node.explain} />
      <BlockList blocks={node.examples} />
      {node.children.map((child) => (
        <Topic key={child.id} node={child} />
      ))}
    </section>
  );
}

/** Left rail (desktop only): chapters with their topics. Chips replace it below lg. */
function Rail({ root }: { root: ContentNode }) {
  return (
    <nav
      aria-label="สารบัญสูตร"
      className="sticky top-20 hidden max-h-[calc(100dvh-6rem)] overflow-y-auto lg:block"
    >
      <ul className="flex flex-col gap-3">
        {root.children.map((section) => (
          <li key={section.id}>
            <button
              type="button"
              onClick={() => jumpTo(anchorId(section.id))}
              className="type-nav text-start text-ink"
            >
              {truncate(plainText(section.title), 40)}
            </button>
            {section.children.length > 0 ? (
              <ul className="mt-1 flex flex-col gap-0.5 border-s border-hairline ps-3">
                {section.children.map((topic) => (
                  <li key={topic.id}>
                    <button
                      type="button"
                      onClick={() => jumpTo(anchorId(topic.id))}
                      className="type-body-sm text-start text-muted"
                    >
                      {truncate(plainText(topic.title), 40)}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Formula sheet: one section per chapter, topics as plain headings, contents rail on desktop. */
export function FormulaOutline({ root, items }: { root: ContentNode; items: JumpItem[] }) {
  return (
    <>
      <JumpNav items={items} label="หัวข้อในหน้านี้" className="lg:hidden" />
      <div className="lg:grid lg:grid-cols-[240px_minmax(0,880px)] lg:gap-12">
        <Rail root={root} />
        <div className="flex min-w-0 flex-col gap-4">
          <BlockList blocks={root.explain} />
          {root.children.map((section) => (
            <Section key={section.id} node={section} />
          ))}
        </div>
      </div>
    </>
  );
}
