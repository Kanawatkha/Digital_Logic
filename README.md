# Digital Logic Notes

Midterm study notes for course 1322201 Digital Logic Design (chapters 1-5). A static, frontend-only
site with an interactive home diagram, chapter pages with worked solutions, a practice exam page, a
formula sheet and a Lab page: a simulator of the lab board where a circuit is wired by hand, with 88
practice tasks. It works offline once opened.

Live site: https://kanawatkha.github.io/Digital_Logic/

## What is in it

| Page | Source Markdown | Content |
|---|---|---|
| Home | `content/summary/01..05` | Diagram: Midterm, chapters, sections, topics, then formulas, explanation and examples |
| บทที่ 1-5 | `content/worked-solutions/01..05` | Worked solutions per chapter |
| ข้อสอบกลางภาค | `content/worked-solutions/06` | Practice exam with solutions, circuits and K-maps |
| สรุปสูตรรวม | `content/summary/00` | Formula sheet for chapters 1-5 |
| แล็บ (`#/lab`) | `content/lab-tasks/01..05` | Board simulator and the lab tasks, see below |

## Lab

The Lab page draws the INEX NX-4i Digital Circuits Experiment Board from above and lets a student
build a circuit that really works: jumper wires between holes and sockets, the five chips of the lab
(7404 NOT, 7408 AND, 7432 OR, 7400 NAND, 7402 NOR) dragged onto the breadboards, eight switches as
inputs and sixteen LEDs as outputs. Power is strict like the real board (an IC works only with +5V on
pin 14 and GND on pin 7) and the page warns about shorts, floating inputs and unpowered chips. The
circuit is saved in the browser, with undo and redo, and a 15 minute exam timer sits next to the
warnings. A drawer shows the truth table, the diagram and the equations of what is built.

The tasks button opens 88 tasks in five kinds: large Boolean expressions, truth tables, SOP and POS
expressions, large logic circuits and word descriptions. Each kind has free tasks, tasks that allow
only NAND and tasks that allow only NOR. Every task has a level (ง่าย, กลาง or ยาก). A task shows its
worked solution (`Sol`) and answer (`Ans`) behind one button, and most can be worked two ways, by
boolean algebra or by a Karnaugh map, behind two tabs. The circuit of the answer is drawn and can be
put on the boards in one undoable step.

The tasks are Markdown like the rest. The build checks what a student would trust: every answer and
every row of every chain of equal formulas against the truth table, every K-map and loop, the figure
of a circuit task (it must be larger than its answer) and the answer circuit itself, which it finds as
a smallest circuit. A wrong step fails the build. The format is in `CONTENT-SCHEMA.md` section 12 and
the history and decisions of the page are in `LAB-PLAN.md`.

## Editing content

All text lives in Markdown under `content/`. Never edit generated files.

1. Edit a file in `content/summary/`, `content/worked-solutions/` or `content/lab-tasks/`. Follow
   `CONTENT-SCHEMA.md` (section 12 for the lab tasks: the `lab` block with `level:`, `@table`,
   `@kmap`, and `@method algebra`, `@method kmap` and `@method all` for the two ways).
2. Check the result locally:

```bash
npm run content
```

   The build script converts Markdown to typed data and fails on bad KaTeX, bad SVG, a broken
   heading structure, anything that does not round-trip back to the Markdown, or a lab task whose
   answer or steps are wrong.
3. Preview with `npm run dev`. The dev server reads the generated files when it starts: restart it
   after `npm run content` if the lab tasks show an error.
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
npm run test           # Vitest, including the content round-trip and the lab tasks
npm run build          # content + typecheck + production build into dist/
npm run preview        # serve dist/ with the real base path
```

## How it is built

Markdown -> `scripts/build-content` -> JSON per file (formulas pre-rendered with KaTeX) -> lazy chunks
-> React renders typed blocks. The browser never parses Markdown and ships no KaTeX code, only its CSS
and fonts. The lab tasks are a small index (what the list shows) and one chunk for each kind, loaded
when a kind is unfolded or one of its tasks is opened. Stack: Vite, React, TypeScript (strict),
Tailwind CSS v4, React Router (`HashRouter`), Vitest, vite-plugin-pwa. See `ARCHITECTURE.md`.

## Deploy

GitHub Pages through `.github/workflows/deploy.yml`. In the repository settings, set
Pages > Source to "GitHub Actions" once. Details in `DEPLOY.md`.

## Offline

A service worker precaches the whole build, the lab tasks included (about 27 MB in the cache, a
fraction of that over the network because it is compressed). After the first visit every page works
without a network. A new version is offered through a "โหลดใหม่" toast and never reloads by itself.

## Documents

`PRD.md` (goals), `PLAN.md` (phases), `ARCHITECTURE.md`, `CONTENT-SCHEMA.md`, `UI-SPEC.md`,
`DESIGN-claude.md` (design standard), `TESTING.md`, `DEPLOY.md`, `LAB-PLAN.md` (the Lab page: scope,
board, simulator, tasks and the record of each round), `AGENTS.md` (rules for AI agents).

## Fonts and licenses

Mitr, Inter and Cormorant Garamond are open licensed (SIL Open Font License) and self-hosted through
`@fontsource` packages. KaTeX is MIT. The logo is original.
