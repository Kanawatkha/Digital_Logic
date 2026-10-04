# PRD: Digital Logic Notes

Product requirements for the study website. Status: agreed in discussion, not yet built.

## 1. Purpose

Give one student a fast, clean, readable place to review chapters 1-5 of 1322201 Digital Logic Design before the midterm: formulas first, worked examples on demand, full exercise solutions per chapter, one practice exam, and one all-in-one formula sheet.

## 2. Users and context

- **Primary user:** the author, a Thai student, studying on phone (portrait and landscape), tablet, and laptop, often with poor connectivity before an exam.
- **Secondary:** classmates who receive the link. The repository is public.
- Language of study content: Thai with English technical terms. Language of project documents and code: English.

## 3. Goals

1. Find any formula in two taps or fewer.
2. Read comfortably on a 360 px wide phone and on a desktop.
3. Work offline after the first visit.
4. Make content changes cheap: edit Markdown once, push, site updates.
5. Look calm and editorial, following `DESIGN-claude.md`.

## 4. Non-goals

- No backend, accounts, comments, analytics, or user data of any kind.
- No dark theme (light only, decided).
- No show/hide-answers toggle (decided against).
- No content beyond chapters 1-5. Chapter 5 covers basic combination circuits only (no adders/subtractors, no encoders/decoders, no applied circuits). Parity, Hamming code, multiplication and division of binary numbers are not part of the study set.
- No in-browser Markdown rendering. No editing UI.

## 5. Information architecture

Eight pages, all client-side routes (HashRouter):

| Page | Route | Source content |
|---|---|---|
| Home (diagram) | `#/` | `content/summary/01..05` |
| Chapter 1-5 exercises (5 pages) | `#/chapter/1` .. `#/chapter/5` | `content/worked-solutions/01..05` |
| Midterm practice exam | `#/exam` | `content/worked-solutions/06` |
| Formula sheet | `#/formulas` | `content/summary/00` |

Navigation: a top navbar only. No footer. Mobile uses a hamburger menu where each row is one page.

## 6. Features

### F1 Home diagram (core feature)
An interactive, animated diagram that expands to the right. Root node "Midterm" is closed by default and toggles. Open: five chapter blocks slide out connected by curves. Open a chapter: its topics appear in the next column. Open a topic: an expanded block shows the explanation and formulas (no examples). The expanded block has a "show examples" button that opens an example block next to it (one or more examples). Everything stays in the same flow area. Nothing overlays or covers other blocks. Detailed behavior: `UI-SPEC.md`.

### F2 Chapter exercise pages
Each chapter page lists all worked examples and exercises for that chapter in source order, grouped by the Markdown headings, with in-page jump links.

### F3 Practice exam page
The 8-question practice exam with full solutions, using the exact question wording.

### F4 Formula sheet page
The all-chapter formula summary with a table of contents per chapter and the 0-16 reference table.

### F5 Responsive layout
Desktop, tablet, phone portrait, phone landscape. See `UI-SPEC.md` section 8.

### F6 Offline
After the first load the whole site (pages, formulas, SVG figures, fonts) works with no network. Updates are picked up on the next visit.

### F7 Brand
Name "Digital Logic Notes". Original logo: an AND-gate outline with a coral output node, which echoes the diagram's central node. No Anthropic or Claude marks.

## 7. Content requirements

- Markdown is the single source of truth. Thai text is preserved character for character from the Markdown. The pipeline never rewrites wording.
- Math is KaTeX. Figures are inline SVG using `currentColor`. See `CONTENT-SCHEMA.md`.
- Home node leaf rules and the example split are defined in `CONTENT-SCHEMA.md` section 5.

## 8. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | First load of any page under 300 KB gzip of JS+CSS (fonts and KaTeX CSS excluded); Largest Contentful Paint under 2.5 s on a mid-range phone over 4G; math is pre-rendered at build time |
| Accessibility | WCAG 2.2 AA contrast, full keyboard operation of the diagram and navbar, `prefers-reduced-motion` honored, correct heading order, alt text or `aria-label` for figures |
| Compatibility | Last 2 versions of Chrome, Safari, Firefox, Edge; iOS Safari 16+ |
| Reliability | Build fails if any formula fails KaTeX, any SVG contains a blank line, or the content round-trip test fails |
| Maintainability | Feature-first structure, strict TypeScript, tested content pipeline, documents kept in sync |
| Hosting | GitHub Pages only, deployed by GitHub Actions |

## 9. Acceptance criteria

1. Every Markdown content file converts without error and the round-trip test passes.
2. All five chapters in the home diagram can be opened to every leaf node, each showing explanation and formulas, with examples behind the button.
3. Every chapter page, the exam page and the formula sheet render all their Markdown content, including tables and SVG figures.
4. Layouts verified at 360x640, 390x844, 768x1024, 1024x768, 1440x900, and phone landscape 844x390 with no horizontal page scroll except inside the diagram canvas and wide math blocks.
5. Offline test: load once, switch the network off, reload and navigate all eight pages.
6. `npm run build` is green in CI and the site is reachable at `https://kanawatkha.github.io/Digital_Logic/`.
7. Lighthouse (mobile) scores: Performance 90+, Accessibility 95+, Best Practices 95+, PWA installable.

## 10. Risks and open items

| Item | Handling |
|---|---|
| Mitr (Thai) reads heavy in long paragraphs | Use Light 300 for body Thai, check on a real phone in Phase 3. See `DESIGN-claude.md` addendum |
| Content Markdown is heterogeneous across chapters | Uniform node rules in `CONTENT-SCHEMA.md`; the generated tree is reviewed by the user before UI work |
| `docs/` PDFs (lecturer slides) in the public repo | Not used by the site. Decision pending: remove them from the repo (recommended). Do not act without the user's approval |
| Diagram complexity on small screens | Prototype early (Phase 5), test on real phone, simplify before polishing |
| Offline caching serving stale content | `autoUpdate` strategy with a visible "updated, reload" notice |
