# PLAN: Delivery plan

Phases run in order. Each phase ends with exit criteria and a **gate**: the user reviews and says "go" before the next phase starts. Update checkboxes as work completes. Nothing below has started.

Legend: `[ ]` todo, `[x]` done. "Ask" means stop and ask the user first.

## Phase 0 - Planning documents  (current)

- [x] Decisions captured (stack, design, pages, offline, light theme only, name and logo)
- [ ] User reviews `CLAUDE.md`, `AGENTS.md`, `PRD.md`, `PLAN.md`, `ARCHITECTURE.md`, `CONTENT-SCHEMA.md`, `UI-SPEC.md`, `TESTING.md`, `DEPLOY.md`, the Thai font (Mitr) addendum in `DESIGN-claude.md`, and `.claude/skills/*`
- Gate: user approves the documents or requests changes

## Phase 1 - Repository restructure and scaffold  (done, awaiting user review)

Goal: a clean repo that builds an empty app and deploys it.

Decisions recorded: `docs/` PDFs removed from the repo (local copies kept outside the repo in `../docs-backup`; they remain in git history); `CLAUDE.md` stays git-ignored; Thai font changed from Maledpan to Mitr (Google Fonts, open license, self-hosted via fontsource; no files needed from the user); Node 24.

- [x] Remove `docs/` PDFs from the repo (backup kept outside the repo)
- [x] Create `content/` and move `summary/` and `worked-solutions/` into it with `git mv` (history preserved)
- [x] Update internal references and docs paths (planning docs already used `content/`)
- [x] `.gitignore` keeps `CLAUDE.md` ignored; adds `node_modules`, `dist`, generated data
- [x] Scaffold Vite + React + TypeScript (strict), Tailwind v4, ESLint (with architecture import rules), Prettier, Vitest, `@/` alias
- [x] Vite `base` set to `/Digital_Logic/` for build and preview, `HashRouter`, placeholder pages and navbar stub, `src/config/site.ts`
- [x] Scripts listed in `AGENTS.md` (`npm run content` is a stub until Phase 2)
- [x] `.github/workflows/ci.yml` and `deploy.yml` per `DEPLOY.md`
- [ ] User: commit and push, then set Pages source to "GitHub Actions" in the repo settings
- Exit: `npm run build` is green locally (done) and in CI; empty site is live at the Pages URL (needs the push)
- Gate

## Phase 2 - Content pipeline  (done, awaiting tree review)

Goal: Markdown to typed, tested data.

- [x] `scripts/build-content` per `CONTENT-SCHEMA.md` (parser, node tree, example segmentation, KaTeX pre-render, SVG validation, manifest, report)
- [x] Types in `src/content/types.ts`; loaders in `src/content/loaders.ts`; generated output in `src/content/generated/` (git-ignored)
- [x] Round-trip, KaTeX-strict, SVG and tree tests (`tests/parse.test.ts`, `tests/content.test.ts`; 18 tests green)
- [x] Report of the home tree at `src/content/generated/report.txt` (run `npm run content`)
- [x] All 12 Markdown files convert with 0 errors and 0 warnings; no Markdown file was changed
- [ ] User reviews the tree report (chapters 1-5) and approves or asks to flatten/merge nodes
- Gate

## Phase 3 - Design system and app shell  (done, awaiting user review)

- [x] Tailwind `@theme` tokens from `DESIGN-claude.md` (colors, radii, spacing, fonts) and the type scale utilities (`type-display-*`, `type-title-*`, `type-body-*`, ...) in `src/styles/index.css`
- [x] Fonts self-hosted as woff2, only the used subsets: Cormorant Garamond 400/500 and Inter variable (Latin), Mitr 300/400/500 (Thai); stack order puts the DESIGN fonts first so Thai falls through to Mitr
- [x] Logo (mark + wordmark) and `public/favicon.svg`
- [x] Navbar (tab row from md, short chapter labels between md and lg, hamburger below md), full-screen mobile menu with focus trap, Esc, scroll lock, closes on navigation
- [x] Router with skip link, focus moved to `<main>` after navigation, page titles, skeleton fallback, 404 page, toast host stub
- [x] UI primitives: `Button`/`ButtonLink`, `Badge`, `Card`, `Skeleton`, `Prose`, `Toast`, `Icon`; layout: `PageContainer`, `PageHeading`
- [x] Tests: Navbar and mobile menu (4 tests); whole suite 22 tests green; typecheck, lint, build green
- [x] Checked in the browser at 768 and 390 widths: no horizontal overflow, menu works
- [ ] User reviews the look and feel (colors, type, navbar) at desktop, tablet and phone sizes, and Thai body weight (Mitr Light 300) on a real phone
- Gate

## Phase 4 - Content pages  (done, awaiting user review)

- [x] Block renderer (`src/components/content/`): paragraph, inline math, display math, nested lists, table, note, SVG figure, example (problem, Sol label, answer strip); exhaustive switch so a new block type breaks the build
- [x] KaTeX CSS (woff2 only through a small Vite plugin) and content styles
- [x] `ContentPage` (loader hook, skeleton, error with retry), `ExerciseOutline` (groups and exercise cards), `FormulaOutline` (sections, topics, contents rail on desktop and chips on small screens), `JumpNav` chips
- [x] Pages wired: chapters 1-5 (`worked-solutions/01..05`), exam (`06`), formula sheet (`summary/00`)
- [x] Wide math, tables and figures scroll inside their own block; checked at 390 px: no horizontal page scroll on any of the 7 content routes
- [x] Tests: block renderer, content page (loading, error and retry), and a test that renders every block of all 12 files and checks every formula and figure appears (31 tests green)
- [x] Exam questions 3 to 8 are now `##` headings in `06-midterm-practice-exam.md` (text unchanged) so they render as their own question cards instead of nesting under question 2
- [ ] User compares pages with the Markdown preview, spot checks formulas and figures
- Gate

## Phase 5 - Home diagram  (done, awaiting user review)

- [x] Layout engine (`features/home-diagram`): columns in one flex row, each child column centered on its open parent (clamped to the top), connectors as measured cubic curves in one SVG layer, one open node per column
- [x] Enter animation (fade and 16 px slide, 40 ms stagger) and connector draw-in, both off under `prefers-reduced-motion`
- [x] Topic block (explanation and formulas) with "ดูตัวอย่าง (N)" button and a separate example column
- [x] Auto-scroll to the newest column (16 px inset, only when not fully visible), keyboard (Enter/Space, Esc, arrow keys), live region, `aria-expanded`/`aria-controls`
- [x] Same right-growing layout in every orientation; widths per UI-SPEC 4.3
- [x] Tests: state model, component behavior (open, one per column, examples, Esc focus, error retry), and a test that every leaf of chapters 1-5 opens its block and examples
- Not done on purpose: close animation (columns leave instantly), URL state (UI-SPEC 4.6, optional)
- Deviation: the example column uses the light `surface-card` look instead of the dark card, because example blocks are styled for light backgrounds
- [ ] User review of the diagram
- Gate

## Phase 6 - Polish and quality  (done, awaiting user review)

- [x] Responsive QA at 360, 390, 768, 1024, 844 (landscape) and desktop: no horizontal page scroll on any of the 9 routes; diagram scrolls only inside its own canvas (checked by measurement in the Browser pane; a real phone check is still the user's)
- [x] Accessibility audit with axe-core (dev dependency) on all routes and on the open diagram: zero serious or critical violations. Fixes: white-on-coral buttons and badge now use `primary-active` (contrast 3.3 to 5.3), muted labels on cream cards use `body`, block headings in the diagram are `h2`, scrollable math/table/figure areas are keyboard focusable only when they overflow (`ScrollArea`), empty table header cells render as plain cells
- [x] Formulas are readable by screen readers: KaTeX now outputs HTML plus MathML (hidden visually)
- [x] Performance budget: heaviest route is about 140 KB gzip of JS and CSS (budget 300 KB); content is lazy per chapter
- [x] Copy pass: UI labels and error states reviewed, no changes needed
- Known: axe reports 2 minor "empty table header" items on the formula sheet because its header cells hold formulas that axe cannot read from MathML; screen readers read them
- Not done here: Lighthouse scores and a real phone test (need Lighthouse CI and a device); Phase 8
- Gate

## Phase 7 - Offline (PWA)  (done, awaiting user review)

- [x] `vite-plugin-pwa` (generateSW) precaches all 57 build files: HTML, JS, CSS, the 12 content chunks, 19 KaTeX fonts, Mitr/Inter/Cormorant fonts, icons. `HashRouter` so only `index.html` is needed as the navigation fallback
- [x] Update flow: `registerType: 'prompt'` (changed from autoUpdate so a reload never happens mid-study), toasts "ใช้งานออฟไลน์ได้แล้ว" and "มีเวอร์ชันใหม่ พร้อมใช้งาน" with "โหลดใหม่"; unit-tested
- [x] Manifest (name, short name, standalone, base path scope, canvas colors) and icons 192, 512, maskable 512 (mark inside the 80% safe zone) and an Apple touch icon, generated from the logo geometry
- [x] Dependencies added: `vite-plugin-pwa`, `workbox-window` (peer of the plugin)
- [ ] Offline test on a real browser: the built-in preview pane blocks service workers, so this check is the user's (steps in `TESTING.md` section 6, run `npm run build` then `npm run preview`)
- Gate

## Phase 8 - Launch  (prepared, waiting for the user)

- [x] Lighthouse mobile (local preview, run with the Lighthouse CLI): Home 98 / 100 / 100 (performance / accessibility / best practices), formula sheet 91, chapters 2 and 4 and exam 90 to 92 after the fixes below; accessibility and best practices 100 everywhere. SEO 100 on Home
- [x] Performance fixes found by the audit: one shared ResizeObserver for all scroll areas, long pages mount their cards in small batches after first paint (anchors are kept with placeholders), preload of the four fonts used at first paint
- [x] README with the content-editing workflow (no screenshots: the built-in browser captures are unreliable, add them by hand if wanted)
- [ ] Known: LCP on content pages is about 3.0 s in the throttled mobile profile (budget 2.5 s), because the chapter data is fetched after the page shell. Home is 2.2 s. PWA installability can only be confirmed in a real Chrome
- [ ] User: commit and push, set Pages source to "GitHub Actions", open the live URL, run the offline check in `TESTING.md` section 6
- [ ] Tag `v1.0.0` after the user approves (not done, nothing was committed)
- [ ] Share the Pages URL

## Working agreements

- One phase at a time. Report progress after each checklist group.
- If a decision is missing, ask. Do not guess on scope, dependencies, content changes, or anything that costs money.
- Keep the docs current. If behavior changes, update the matching document in the same change.
- Estimated effort is not tracked. The order matters more than dates.
