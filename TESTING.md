# TESTING

What is checked, how, and when. The goal is that wrong content or a broken layout can never reach GitHub Pages.

## 1. Test layers

| Layer | Tool | Runs | Fails the build |
|---|---|---|---|
| Content pipeline | Vitest + build-time checks | `npm run test`, `npm run build` | yes |
| Math correctness (authoring) | Scripts in the `verify-math` skill | when content changes | no (author gate, required before commit) |
| Types and lint | `tsc`, ESLint | CI | yes |
| Components | Vitest + Testing Library | `npm run test` | yes |
| Smoke / e2e | Playwright (Chromium, WebKit) against `npm run preview` | CI on pull requests and main | yes |
| Accessibility | `@axe-core/playwright` inside smoke tests | CI | yes for serious/critical |
| Performance and PWA | Lighthouse CI (mobile preset) | CI on main, local before release | budget warnings, regressions fail |
| Offline | Playwright with offline mode | CI on main | yes |

Playwright and Lighthouse are dev dependencies only. They are introduced in the phases that need them (see `PLAN.md`); ask before adding if scope changes.

## 2. Content pipeline checks (Phase 2)

1. **Parse coverage.** Every file in `content/` parses. Unknown constructs fail with file and line.
2. **Round trip.** Convert generated data back to normalized text and compare with the normalized Markdown. Normalization: collapse whitespace, drop `---` rules and the `<div align="center">` wrappers, decode entities, keep math source verbatim. Zero diff is required. This is what guarantees "the same words as the Markdown".
3. **KaTeX strict.** Every inline and display formula compiles with `throwOnError: true, strict: 'error'`.
4. **SVG rules.** No blank line inside `<svg>`, well-formed XML, `viewBox` present, no scripts or event handlers, no external references.
5. **Tree rules.** Node ids are unique. Every chapter in `summary/01..05` yields at least one leaf. Examples attach to the right leaf (fixture-based test on a small sample file per construct).
6. **Counts snapshot.** `report.txt` counts (nodes, examples, figures per file) are committed as a snapshot. A change must be reviewed, not silently accepted.
7. **Reference integrity.** References like "ข้อ 3(a)" and "หัวข้อ 4.1" resolve where they can be checked mechanically.

Fixtures live in `tests/fixtures/` and cover each construct in `CONTENT-SCHEMA.md` section 2, including: example without `Ans`, `###` examples group, group section with intro, table with entities, blockquote, figure.

## 3. Math verification for authored content

Before any answer, simplification, K-map reading, Sigma-m/Pi-M conversion or base conversion is written into the Markdown it is verified by program. See `.claude/skills/verify-math/SKILL.md` for the procedure. Minimum bar:

- Boolean simplifications: compare original and result on every row of the truth table.
- K-map: recompute the minterm set from the loops and compare with the function.
- Sigma-m and Pi-M: check set complement over all `2^n` rows.
- Base conversions and arithmetic: recompute with integer arithmetic and compare.
- Circuits drawn as SVG: render and view the result; compare the netlist's truth table with the expression.

## 4. Component tests

- Block renderer: one test per block type with a minimal data fixture; unknown block type is a TypeScript error.
- Diagram state: unit tests for `useDiagramState` (one open node per column, closing a parent closes descendants, example column toggling).
- Navbar and mobile menu: focus trap, `Esc`, `aria-current`, route change closes the menu.
- Connector math: given rectangles, path endpoints are right-middle of parent and left-middle of child.

## 5. Smoke and accessibility (Playwright)

Run at 360x640, 390x844, 768x1024, 1024x768, 1440x900 and phone landscape 844x390.

1. All eight routes load without console errors.
2. Home: open Midterm, open each chapter, open one leaf per chapter, press "ดูตัวอย่าง", and confirm that:
   - no two blocks overlap (bounding boxes are disjoint)
   - the page has no horizontal scroll (`document.scrollingElement.scrollWidth <= innerWidth`)
   - the newest column is inside the viewport after the auto-scroll
3. Keyboard: the same path can be walked with Tab, Enter and Esc only.
4. axe: zero serious or critical violations on each route.
5. `prefers-reduced-motion` emulation: states change without transitions.
6. Chapter, exam and formula pages: every `###` title from the Markdown appears in the DOM.

## 6. Offline test (Phase 7)

1. Serve the production build, load Home, wait for the service worker to take control.
2. Set the context offline.
3. Reload and visit all eight routes. Formulas, figures and fonts must render.
4. Online again with a rebuilt version: the update toast appears.

## 7. Performance budgets

| Metric | Budget |
|---|---|
| JS + CSS per route, gzip | under 300 KB |
| LCP (mobile, 4G profile) | under 2.5 s |
| Cumulative Layout Shift | under 0.1 |
| Lighthouse mobile | Performance 90+, Accessibility 95+, Best Practices 95+ |

KaTeX fonts and the font files (Mitr, Inter, Cormorant Garamond) are excluded from the JS+CSS budget but must be preloaded sensibly (`font-display: swap`, import only the subsets and weights in use).

## 8. CI gates

`ci.yml` runs on every push and pull request: install with `npm ci`, `lint`, `typecheck`, `test`, `build`, then Playwright smoke against `preview`. `deploy.yml` runs only on `main` after the same steps pass. See `DEPLOY.md`.

## 9. Manual checks before each release

- View the home diagram on a real phone, portrait and landscape.
- Compare three random content pages with the Markdown preview in VS Code.
- Install as PWA, go offline, open each page.
- Read the build report for warnings.
