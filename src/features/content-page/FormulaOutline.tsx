import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { ContentNode } from '@/content/types';
import { BlockList } from '@/components/content/BlockRenderer';
import { InlineContent } from '@/components/content/InlineContent';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import { cn } from '@/lib/cn';
import { JumpNav, type JumpItem } from './JumpNav';
import { jumpTo } from './jumpTo';
import { useActiveAnchor } from './useActiveAnchor';
import { anchorId } from '@/lib/ids';
import { plainText, truncate } from '@/lib/text';

const TARGET = 'scroll-mt-20 outline-none';
const RAIL_ID = 'formula-rail';

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

function Section({ node, first }: { node: ContentNode; first: boolean }) {
  return (
    <section className="flex flex-col gap-4">
      <h2
        id={anchorId(node.id)}
        tabIndex={-1}
        className={`type-title-lg ${first ? '' : 'pt-8'} text-ink ${TARGET}`}
      >
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

type RailProps = {
  root: ContentNode;
  activeId: string;
  onSelect: (id: string) => void;
  open: boolean;
};

/**
 * Left contents rail (desktop only). A marker slides to the entry the reader is at, and the
 * rail follows along when its own list is longer than the window.
 */
function Rail({ root, activeId, onSelect, open }: RailProps) {
  const navRef = useRef<HTMLElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);
  const placed = useRef(false);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const marker = markerRef.current;
    if (!nav || !marker || !open) return;
    const entry = Array.from(nav.querySelectorAll<HTMLElement>('[data-rail-id]')).find(
      (el) => el.dataset.railId === activeId,
    );
    if (!entry) return;
    if (!placed.current) {
      // first placement jumps there instead of sliding in from the top
      marker.style.transition = 'none';
      placed.current = true;
    }
    marker.style.height = `${entry.offsetHeight}px`;
    marker.style.transform = `translateY(${entry.offsetTop}px)`;
    marker.style.opacity = '1';
    if (marker.style.transition === 'none') {
      void marker.offsetHeight;
      marker.style.transition = '';
    }
    const top = entry.offsetTop;
    const bottom = top + entry.offsetHeight;
    if (top < nav.scrollTop + 8 || bottom > nav.scrollTop + nav.clientHeight - 8) {
      nav.scrollTo({ top: Math.max(0, top - nav.clientHeight / 2), behavior: 'smooth' });
    }
  }, [activeId, open]);

  const entry = (id: string, label: string, level: 'section' | 'topic') => (
    <button
      type="button"
      data-rail-id={id}
      aria-current={activeId === id ? 'location' : undefined}
      onClick={() => onSelect(id)}
      className={cn(
        'relative block w-full rounded-md px-3 py-1.5 text-start transition-colors duration-200',
        level === 'section' ? 'type-nav' : 'type-body-sm',
        activeId === id ? 'font-medium text-ink' : level === 'section' ? 'text-ink' : 'text-muted',
      )}
    >
      {label}
    </button>
  );

  return (
    <nav
      ref={navRef}
      id={RAIL_ID}
      aria-label="สารบัญสูตร"
      className="relative max-h-[calc(100dvh-8rem)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <span
        ref={markerRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 rounded-md border-s-[3px] border-primary bg-surface-card opacity-0 transition-[transform,height] duration-300 ease-out motion-reduce:transition-none"
      />
      <ul className="flex flex-col gap-2">
        {root.children.map((section) => (
          <li key={section.id}>
            {entry(anchorId(section.id), truncate(plainText(section.title), 40), 'section')}
            {section.children.length > 0 ? (
              <ul className="mt-0.5 ms-3 flex flex-col gap-0.5 border-s border-hairline ps-2">
                {section.children.map((topic) => (
                  <li key={topic.id}>
                    {entry(anchorId(topic.id), truncate(plainText(topic.title), 40), 'topic')}
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

const SLIDE_MS = 320;
const SLIDE_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
/** The rail column in pixels, as a number for the slide distance. */
const RAIL_SHIFT = 288;

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Elements of the sheet that sit in the middle of the text column and so move when its width changes. */
function visibleCentered(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>('[data-centered]')).filter((el) => {
    const { top, bottom } = el.getBoundingClientRect();
    return bottom > -200 && top < window.innerHeight + 200;
  });
}

/**
 * Formula sheet: one section per chapter, topics as plain headings. On desktop a contents rail
 * on the left can be folded away and marks where the reader is; chips replace it below lg.
 * The text column always fills the space that is left, so folding the rail widens it.
 *
 * Folding changes the layout at once and plays the movement on top of it with transforms: the
 * text slides from where it was, the rail slides out, and the formulas and figures that are
 * centered glide from their old middle to the new one. Animating the grid columns instead
 * re-laid out the whole sheet on every frame, which is what made it stutter.
 */
export function FormulaOutline({ root, items }: { root: ContentNode; items: JumpItem[] }) {
  const [railOpen, setRailOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const slide = useRef<Animation | null>(null);
  const centeredSlides = useRef<Animation[]>([]);
  const shownOpen = useRef(true);
  const ids = useMemo(
    () => root.children.flatMap((s) => [anchorId(s.id), ...s.children.map((t) => anchorId(t.id))]),
    [root],
  );
  const { active, activate } = useActiveAnchor(ids);

  useLayoutEffect(() => {
    // only a real change plays the slide (not the first render, nor a StrictMode re-run)
    if (shownOpen.current === railOpen) return;
    shownOpen.current = railOpen;
    const el = contentRef.current;
    if (!el || prefersReducedMotion() || typeof el.animate !== 'function') return;
    // continue from wherever a slide that is still running has got to
    const running = slide.current ? new DOMMatrix(getComputedStyle(el).transform).m41 : 0;
    slide.current?.cancel();
    const from = running + (railOpen ? -RAIL_SHIFT : RAIL_SHIFT);
    const timing = { duration: SLIDE_MS, easing: SLIDE_EASING };
    slide.current = el.animate(
      [{ transform: `translateX(${from}px)` }, { transform: 'translateX(0)' }],
      timing,
    );
    // the column grew or shrank by the rail width, so its middle moved by half of that more
    // than its left edge did
    centeredSlides.current.forEach((a) => a.cancel());
    const half = (railOpen ? RAIL_SHIFT : -RAIL_SHIFT) / 2;
    centeredSlides.current = visibleCentered(el).map((target) =>
      target.animate(
        [{ transform: `translateX(${half}px)` }, { transform: 'translateX(0)' }],
        timing,
      ),
    );
  }, [railOpen]);

  const select = (id: string) => {
    activate(id);
    jumpTo(id);
  };

  return (
    <>
      <JumpNav items={items} label="หัวข้อในหน้านี้" className="lg:hidden" />
      {/* Zero-height row that sticks like the rail: the button hangs in the left margin, level with the first entry. */}
      <div className="sticky top-20 z-30 hidden h-0 lg:block">
        <button
          type="button"
          aria-expanded={railOpen}
          aria-controls={RAIL_ID}
          aria-label={UI_TEXT.tocToggle}
          onClick={() => setRailOpen((v) => !v)}
          className="absolute -top-[3px] right-full mr-2 inline-flex size-10 items-center justify-center rounded-md bg-surface-card text-ink"
        >
          <Icon name="menu" size={20} />
        </button>
      </div>
      <div
        className="lg:grid lg:overflow-x-clip"
        style={{ gridTemplateColumns: `${railOpen ? `${RAIL_SHIFT}px` : '0px'} minmax(0,1fr)` }}
      >
        <div aria-hidden={!railOpen} inert={!railOpen} className="hidden lg:block">
          <div
            className={cn(
              'sticky top-20 w-[240px] transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none',
              railOpen ? 'translate-x-0 opacity-100' : '-translate-x-[288px] opacity-0',
            )}
          >
            <Rail root={root} activeId={active} onSelect={select} open={railOpen} />
          </div>
        </div>
        <div ref={contentRef} className="flex min-w-0 flex-col gap-4">
          <BlockList blocks={root.explain} />
          {root.children.map((section, i) => (
            <Section key={section.id} node={section} first={i === 0} />
          ))}
        </div>
      </div>
    </>
  );
}
