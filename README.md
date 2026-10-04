# Digital Logic Notes

Midterm study notes for course 1322201 Digital Logic Design (chapters 1-5). A static, frontend-only
site with an interactive home diagram, chapter pages with worked solutions, a practice exam page and
a formula sheet. It works offline once opened.

Live site: https://kanawatkha.github.io/Digital_Logic/

## What is in it

| Page | Source Markdown | Content |
|---|---|---|
| Home | `content/summary/01..05` | Diagram: Midterm, chapters, sections, topics, then formulas, explanation and examples |
| บทที่ 1-5 | `content/worked-solutions/01..05` | Worked solutions per chapter |
| ข้อสอบกลางภาค | `content/worked-solutions/06` | Practice exam with solutions, circuits and K-maps |
| สรุปสูตรรวม | `content/summary/00` | Formula sheet for chapters 1-5 |

## Editing content

All text lives in Markdown under `content/`. Never edit generated files.

1. Edit a file in `content/summary/` or `content/worked-solutions/`. Follow `CONTENT-SCHEMA.md`.
2. Check the result locally:

```bash
npm run content
```

   The build script converts Markdown to typed data and fails on bad KaTeX, bad SVG, a broken
   heading structure or anything that does not round-trip back to the Markdown.
3. Preview with `npm run dev`.
4. Commit and push to `main`. GitHub Actions lints, tests, builds and publishes the site.

Every answer, truth table, K-map loop and conversion must be verified by a program before it is
written (see `.claude/skills/verify-math/SKILL.md`).

## Commands

```bash
npm ci                 # install exactly from the lockfile (Node 24, see .nvmrc)
npm run dev            # content + dev server
npm run content        # Markdown -> generated data
npm run typecheck      # TypeScript
npm run lint           # ESLint
npm run format:check   # Prettier
npm run test           # Vitest, including the content round-trip
npm run build          # content + typecheck + production build into dist/
npm run preview        # serve dist/ with the real base path
```

## How it is built

Markdown -> `scripts/build-content` -> JSON per file (formulas pre-rendered with KaTeX) -> lazy chunks
-> React renders typed blocks. The browser never parses Markdown and ships no KaTeX code, only its CSS
and fonts. Stack: Vite, React, TypeScript (strict), Tailwind CSS v4, React Router (`HashRouter`),
Vitest, vite-plugin-pwa. See `ARCHITECTURE.md`.

## Deploy

GitHub Pages through `.github/workflows/deploy.yml`. In the repository settings, set
Pages > Source to "GitHub Actions" once. Details in `DEPLOY.md`.

## Offline

A service worker precaches the whole build. After the first visit every page works without a
network. A new version is offered through a "โหลดใหม่" toast and never reloads by itself.

## Documents

`PRD.md` (goals), `PLAN.md` (phases), `ARCHITECTURE.md`, `CONTENT-SCHEMA.md`, `UI-SPEC.md`,
`DESIGN-claude.md` (design standard), `TESTING.md`, `DEPLOY.md`, `AGENTS.md` (rules for AI agents).

## Fonts and licenses

Mitr, Inter and Cormorant Garamond are open licensed (SIL Open Font License) and self-hosted through
`@fontsource` packages. KaTeX is MIT. The logo is original.
