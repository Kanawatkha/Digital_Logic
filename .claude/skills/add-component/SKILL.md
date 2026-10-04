---
name: add-component
description: Add or change a React component, hook, page or feature in the Digital Logic Notes app following the project's folder structure, import boundaries, design tokens, accessibility and testing rules. Use when creating or modifying anything under src/.
---

# add-component

Follow `ARCHITECTURE.md` for structure, `UI-SPEC.md` for behavior, `DESIGN-claude.md` for tokens, `AGENTS.md` for style.

## Checklist

1. **Place it correctly.**
   - Generic, reusable, no course knowledge: `src/components/ui/` or `src/components/layout/`.
   - Belongs to one feature: `src/features/<feature>/`.
   - A route: `src/pages/<Name>Page.tsx`, lazy-loaded in `src/app/router.tsx`, listed in `src/config/site.ts`.
   - Generic hook: `src/hooks/`. Pure helper: `src/lib/`.
2. **Respect import direction.** `pages -> features -> components -> hooks/lib/content types`. A feature never imports another feature. `components/ui` never imports a feature or page. Use the `@/` alias.
3. **Type it.** Strict TypeScript, explicit props type, no `any`. Components take typed content data (`Block`, `ContentNode`) and never raw Markdown or hard-coded course text.
4. **Style with tokens.** Tailwind utilities that reference `@theme` tokens from `DESIGN-claude.md` (colors, radius, spacing, type). No inline hex, no magic pixel values that duplicate a token. Coral is scarce. Light theme only.
5. **Make it accessible.**
   - Semantic element first (`button`, `nav`, `main`, `section`, `h1..h6` in order).
   - Disclosure controls expose `aria-expanded` and `aria-controls`.
   - Visible focus ring, logical tab order, `Esc` closes transient UI and restores focus.
   - Respect `prefers-reduced-motion` (use the `useReducedMotion` hook).
   - Decorative SVG is `aria-hidden`; meaningful figures have a label.
6. **Make it responsive.** Verify 360, 390, 768, 1024, 1440 widths and phone landscape. No horizontal page scroll; wide math and tables scroll inside their own wrapper.
7. **Keep it small.** One component per file, named export, file name equals component name. Move data shaping out of JSX into `lib/` or the content pipeline.
8. **Test it.** Add a Vitest test next to the file for logic and rendering of each variant; add or update a Playwright smoke check if a route or the diagram behavior changed.
9. **Update docs.** If behavior or structure changed, update `UI-SPEC.md` or `ARCHITECTURE.md` in the same change.
10. **Run the gates.** `npm run typecheck`, `npm run lint`, `npm run test`, `npm run build` must all pass.

## Anti-patterns

- Hard-coding Thai course text in a component.
- Parsing Markdown or running KaTeX in the browser.
- Absolute positioning for diagram blocks (use flow layout; only the connector layer is absolute).
- Adding a dependency without asking.
- Styling hover beyond what `DESIGN-claude.md` allows.

## Component template

```tsx
import type { Block } from '@/content/types';

type NoteBlockProps = { blocks: Block[] };

export function NoteBlock({ blocks }: NoteBlockProps) {
  return (
    <aside className="rounded-md bg-surface-soft p-4" aria-label="Note">
      {/* render children through BlockRenderer */}
    </aside>
  );
}
```
