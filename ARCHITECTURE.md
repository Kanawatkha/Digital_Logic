# ARCHITECTURE

How the repository, the build pipeline and the app are organized. Target state; nothing here is built yet. Rules marked **MUST** are enforced by lint, tests or review.

## 1. Principles

1. **One source of truth.** Markdown in `content/`. Everything shown to students is generated from it.
2. **Data-driven UI.** Components render typed data. No course text is hard-coded in components.
3. **Feature-first.** Code that changes together lives together. Shared primitives are small and generic.
4. **Static and cheap.** Heavy work (parsing, KaTeX) happens at build time. The browser only renders.
5. **Boundaries are explicit.** Layers import downward only (see section 5).
6. **Flexible by data.** Adding a chapter or an example means editing Markdown, not code.

## 2. System overview

```
content/*.md  --(scripts/build-content)-->  src/content/generated/*.json + manifest
                                                   |
                      React app (Vite) <-----------+  lazy import per route
                                |
                         dist/  (static files + service worker)
                                |
                         GitHub Pages  (deployed by GitHub Actions)
```

Build order is always: `content` then `typecheck` then `vite build`.

## 3. Target folder structure

```
Digital_Logic/
├─ AGENTS.md  CLAUDE.md  PRD.md  PLAN.md  ARCHITECTURE.md  CONTENT-SCHEMA.md
├─ UI-SPEC.md  TESTING.md  DEPLOY.md  DESIGN-claude.md  README.md
├─ package.json  package-lock.json  tsconfig*.json  vite.config.ts
├─ eslint.config.js  .prettierrc  .gitignore  .nvmrc
├─ .github/
│  └─ workflows/            ci.yml, deploy.yml
├─ .claude/
│  └─ skills/               edit-content/, verify-math/, add-component/
├─ content/                 SOURCE OF TRUTH (Markdown only)
│  ├─ summary/              00-formula-sheet-ch1-5.md, 01..05-*-summary.md
│  └─ worked-solutions/     01..05-*.md, 06-midterm-practice-exam.md
├─ scripts/
│  └─ build-content/        run.ts (CLI), index.ts, parse.ts, tree.ts, math.ts, svg.ts, project.ts, report.ts
├─ public/                  favicon, manifest icons, robots.txt
├─ src/
│  ├─ main.tsx              entry
│  ├─ app/                  App.tsx, router.tsx, layouts/, providers/, pwa/ (update notice)
│  ├─ pages/                HomePage, ChapterPage, ExamPage, FormulaSheetPage, NotFoundPage
│  ├─ features/
│  │  ├─ diagram/           home diagram: Diagram.tsx, nodes/, connectors/, layout/, useDiagramState.ts
│  │  ├─ home-diagram/      HomeDiagram, DiagramNode, DiagramBlocks, model (state and columns), useDiagramLayout
│  │  └─ content-page/      chapter, exam and formula sheet pages: ContentPage, ExerciseOutline, FormulaOutline, JumpNav, useContentFile
│  ├─ components/
│  │  ├─ ui/                Button, Badge, Card, Skeleton, Icon, Prose, Toast
│  │  ├─ content/           shared block renderer used by pages and the diagram: BlockRenderer, InlineContent, TableBlock, FigureBlock
│  │  └─ layout/            Navbar, MobileMenu, Logo, PageContainer
│  ├─ content/
│  │  ├─ types.ts           ContentNode, Block, Inline (shared with scripts)
│  │  ├─ loaders.ts         lazy loaders for generated JSON
│  │  └─ generated/         BUILD OUTPUT, git-ignored
│  ├─ hooks/                generic hooks (useMediaQuery, useReducedMotion, useResizeObserver)
│  ├─ lib/                  pure helpers (cn, ids, paths, text utilities)
│  ├─ styles/               index.css (Tailwind, @theme tokens, fonts, KaTeX CSS import)
│  ├─ assets/               fonts/, logo/
│  └─ config/               site.ts (name, base path, nav items)
└─ tests/                   e2e/ (smoke), fixtures/, content/ (round-trip)
```

Notes:
- `content/` replaces today's root-level `summary/` and `worked-solutions/`. Migration happens in Phase 1.
- The `docs/` folder with lecturer PDFs is not part of the target structure.
- Planning documents stay at the repository root.

## 4. Data flow in detail

1. `scripts/build-content` reads every `content/**/*.md`.
2. It parses Markdown into blocks, builds the node tree (see `CONTENT-SCHEMA.md`), pre-renders every formula with KaTeX in strict mode, keeps SVG verbatim, and writes:
   - `generated/manifest.json` (collections, nodes, titles, slugs, order)
   - `generated/summary/<NN>.json`, `generated/worked-solutions/<NN>.json` (NN = chapter key), `generated/report.txt`
3. `src/content/loaders.ts` exposes `loadCollectionPage(kind, slug)` using `import.meta.glob` so each file is its own lazy chunk.
4. Pages call loaders, show a skeleton while loading, then pass typed data to feature components.
5. `BlockRenderer` maps `block.type` to a component. Unknown types fail the type-check, not at runtime.

The browser never ships a Markdown parser and never ships KaTeX JavaScript. It receives KaTeX HTML plus `katex.min.css` and KaTeX fonts.

## 5. Layering and import rules (MUST)

Allowed import direction (top may import from below, never the reverse):

```
pages  ->  features  ->  components  ->  hooks / lib / content(types) / config
app    ->  pages, components, config
```

- `features/*` MUST NOT import from other `features/*`. Shared pieces move to `components/` or `lib/`.
- `components/ui/*` MUST NOT import from `features/` or `pages/`.
- `scripts/*` MAY import `src/content/types.ts` only. It MUST NOT import React code.
- `src/content/generated/*` is imported only by `src/content/loaders.ts`.
- Enforce with ESLint `no-restricted-imports` and path patterns.

## 6. State management

- Local component state and `useReducer` only. No global store library.
- Diagram state (which node is open per column) lives in `useDiagramState` inside `features/diagram`, kept in the URL hash query when practical so a state can be shared (for example `#/?c=3&t=2`). Optional, decided in Phase 5.
- No persistence of user data. Nothing is stored beyond the service worker cache.

## 7. Routing

- `HashRouter`, because GitHub Pages cannot rewrite deep links.
- Routes: `/`, `/chapter/:n` (1-5), `/exam`, `/formulas`, `*` (not found).
- Each route is code-split with `React.lazy`.

## 8. Styling and tokens

- Tailwind v4 CSS-first config. All colors, radii, spacing and type scales are defined once in `src/styles/index.css` under `@theme`, copied from `DESIGN-claude.md` (single source: that file).
- Components use utility classes that reference those tokens. No raw hex in TSX.
- `Prose` wraps rendered content with typography rules (headings, tables, lists, math overflow).

## 9. Diagram engine (summary; details in `UI-SPEC.md`)

- Columns laid out in normal document flow (CSS grid or flex), not absolute positioning, so blocks never overlap.
- Connectors are SVG cubic Bezier paths computed from measured DOM rectangles (`ResizeObserver`), redrawn on open, close and resize.
- Animation with Motion layout animations; fallback to instant transitions when `prefers-reduced-motion` is set.

## 10. Offline and PWA

- `vite-plugin-pwa` in `generateSW` mode precaches all build output including fonts and generated JSON chunks.
- `registerType: 'prompt'`; the app shows a small "new version ready" notice from `app/pwa/`.
- Scope and `start_url` use the repository base path. See `DEPLOY.md`.

## 11. Naming and conventions

| Thing | Convention |
|---|---|
| Components | `PascalCase.tsx`, named export, default export only for lazy pages |
| Hooks | `useThing.ts` |
| Utilities | `camelCase.ts` |
| Types | `PascalCase`, no `I` prefix |
| Constants | `SCREAMING_SNAKE_CASE` only for true constants |
| Content slugs | file name without number prefix and suffix, lowercase kebab-case |
| Test files | `thing.test.ts(x)` next to the code, plus `tests/` for cross-cutting |
| Commits | Conventional Commits |

## 12. Extension points

| Want to add | Do this |
|---|---|
| A new chapter | Add Markdown to `content/`, register it in `config/site.ts`. No component changes |
| A new Markdown construct | Extend `parse.ts` and `types.ts`, add a block component, add tests, document in `CONTENT-SCHEMA.md` |
| A new page | Add `pages/XPage.tsx`, a route, a nav item in `config/site.ts` |
| A new design token | Change `DESIGN-claude.md` first (ask the user), then `@theme` |
