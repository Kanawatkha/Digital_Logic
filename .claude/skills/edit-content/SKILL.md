---
name: edit-content
description: Add or change study content in the Markdown files under content/ (summary and worked-solutions) for the Digital Logic Notes site. Use whenever you write, edit, move or review course content, examples, exercises, formulas, tables or SVG figures, or when the content-to-data pipeline reports a parse error.
---

# edit-content

Content is the only thing authors edit. The site is generated from it. Read `CONTENT-SCHEMA.md` for the full parser contract; this file is the working checklist.

## Where things live

- `content/summary/NN-<name>-summary.md`: theory, formulas, short explanations, and examples. Feeds the home diagram. `00-formula-sheet-ch1-5.md` feeds the Formula sheet page (formulas and brief notes, no worked examples except the few already present).
- `content/worked-solutions/NN-<name>.md`: problems only (examples and exercises). **No theory or formula summaries here.** Theory belongs in `summary/`. `06-midterm-practice-exam.md` is the practice exam.
- Chapters: 01 number-systems-and-codes, 02 digital-ic-and-logic-gates, 03 boolean-algebra, 04 karnaugh-map, 05 combination-circuit (chapter 5 covers basic combination circuits only).
- Until the Phase 1 migration in `PLAN.md`, the folders are still `summary/` and `worked-solutions/` at the repository root.

## Workflow

1. Decide where the change belongs: theory or formula goes to `summary/` first (update `00-formula-sheet` if the formula is part of the all-chapter sheet); a problem goes to `worked-solutions/`.
2. Write it using the shapes below.
3. Verify every claim by program with the `verify-math` skill before saving.
4. Run `npm run content` (once the pipeline exists). Fix any parse error by correcting the Markdown, or extend the parser only if the construct is legitimate (ask the user first).
5. Do not rename files or renumber headings without updating every cross reference ("ข้อ 3(a)", "หัวข้อ 4.1").

## Shapes

### summary

- Headings: `## 1.` for sections, `### 1.1` for topics.
- A topic has a short explanation, then `**สูตร**` with the formula, then `**ตัวอย่าง**` with one example (two or three if needed).
- A `###` titled `ตัวอย่าง...` groups the examples of its parent `##`.
- Section titled `ข้อควรระวังในการสอบ` holds exam tips as a list.

### worked-solutions

- File starts with the chapter title, then `---`.
- Problem heading: `### ข้อ N  <question text>` or `### ตัวอย่าง ...`. For the practice exam use the exact wording of the exam question, never abbreviated.
- Then `$\mathbf{Sol}^{n}$`, the steps one line per step (moderate detail, with the law or technique named in a short note), then `$\mathbf{Ans}\quad ...$` when there is a final answer.
- No "verification" headings inside the files.

### Math (KaTeX)

- Inline `$...$`, display `$$...$$`. Never put formulas in code blocks.
- Use `\overline{A}`, `\,` for thin spaces between literals, `\oplus`, `\sum m(...)`, `\prod M(...)`.
- Must compile in KaTeX strict mode.

### Figures (SVG)

- Circuits, K-maps, Venn diagrams and timing diagrams are inline `<svg>` inside `<div align="center">`.
- Use `currentColor` for strokes and text. K-map loops use the fixed palette: `#e8743b` (loop 1), `#3b8be8` (loop 2), `#2fae5f` (loop 3).
- **No blank lines anywhere inside `<svg>` or the wrapping HTML.** A blank line breaks Markdown rendering.
- Never create separate image files or an `images/` folder.

### Language

- Content is Thai with English technical terms. Write concisely.

## Pitfalls

- A `Sol` without an `Ans` is valid. A problem without `Sol` is a plain block, not an example.
- Do not use a lone `$` for anything but math.
- Pipes `|` inside formulas in table cells break the table; avoid them.
- Keep the same numbering style in a file. Do not mix `1.` and `ข้อ 1` styles.
