# CONTENT-SCHEMA

Rules for turning the Markdown in `content/` into typed data. This is the contract between content authors and `scripts/build-content`. Based on a scan of the current 12 Markdown files (about 11,500 lines).

## 1. Source files

| Collection | Files | Used by |
|---|---|---|
| `summary` | `00-formula-sheet-ch1-5.md`, `01..05-<name>-summary.md` | Home diagram (01-05), Formula sheet page (00) |
| `worked-solutions` | `01..05-<name>.md`, `06-midterm-practice-exam.md` | Chapter pages (01-05), Exam page (06) |

Chapter keys: 01 number-systems-and-codes, 02 digital-ic-and-logic-gates, 03 boolean-algebra, 04 karnaugh-map, 05 combination-circuit.

## 2. Constructs the parser must support

Counts are from the current content and show how common each construct is.

| Construct | Markdown form | Notes |
|---|---|---|
| Title | `# Title` (one per file) | First line |
| Section | `## ...` | May be numbered (`## 1.`) or a question group (`## ข้อ 2 ...`) |
| Subsection | `### ...` | Topic, example group, or single exercise |
| Paragraph | plain lines | Thai text with inline math and bold |
| Inline math | `$...$` | KaTeX |
| Display math | `$$ ... $$` (multi-line) | `array`, `aligned`, `cases`, etc. |
| Bold / emphasis | `**...**` | Also lead-ins such as `**สูตร**`, `**ตัวอย่าง**` |
| Inline code | `` `...` `` | Rare |
| Unordered list | `- item` (about 100 lines) | Items may contain indented child blocks: nested lists and display math exist in `01` |
| Ordered list | `1. item` (about 57 lines) | Same; a blank line between two items of the same kind continues the list |
| Pipe table | `\| a \| b \|` with alignment row | Cells may contain `$...$` and HTML entities |
| Blockquote | `> text` (1 occurrence) | Render as a note callout |
| Horizontal rule | `---` (about 204) | Section separator; ignored for structure |
| Figure | `<div align="center">` + `<svg>...</svg>` + `</div>` (131) | Kept verbatim, see section 6 |
| HTML entities | `&#35; &#36; &#92; &#96; &amp; &lt; &gt;` | Decoded in table cells |
| Line break | trailing double space or `<br>` (rare) | Preserve |
| Escapes | `\*`, `\_`, `\|` in tables | Un-escape in output text |

Anything else is a **parse error**, not silently dropped. Extend the parser and this table instead of changing the content.

## 3. Output data model (TypeScript)

Defined in `src/content/types.ts` and shared with the scripts.

```ts
type Inline =
  | { t: 'text'; v: string }
  | { t: 'strong'; c: Inline[] }
  | { t: 'em'; c: Inline[] }
  | { t: 'code'; v: string }
  | { t: 'math'; tex: string; html: string }          // inline, KaTeX pre-rendered
  | { t: 'br' };

type Block =
  | { t: 'p'; c: Inline[] }
  | { t: 'math'; tex: string; html: string }          // display
  | { t: 'list'; ordered: boolean; items: { c: Inline[]; children: Block[] }[] }
  | { t: 'table'; align: ('n' | 'l' | 'c' | 'r')[]; head: Inline[][]; rows: Inline[][][] }
  | { t: 'figure'; svg: string; title?: string }      // sanitized SVG markup
  | { t: 'note'; c: Block[] }                          // blockquote
  | { t: 'example'; id: string; title?: Inline[]; problem: Block[]; sol: Block[]; ans: Block[] };

type ContentNode = {
  id: string;            // stable, e.g. "summary/01/2.2"
  kind: 'chapter' | 'section' | 'topic' | 'tips' | 'group' | 'exercise';
  level: 1 | 2 | 3;
  number?: string;       // "2.2" when the heading is numbered
  title: Inline[];
  explain: Block[];      // explanation and formulas, never examples
  examples: Block[];     // example blocks (summary) or exercise body (worked-solutions)
  examplesTitle?: Inline[]; // heading of an examples group merged into this node
  children: ContentNode[];
  source: { file: string; line: number };
};

type ContentFile = { collection: 'summary' | 'worked-solutions'; chapter: string; title: Inline[]; root: ContentNode };
```

Every `html` string is produced by `katex.renderToString(tex, { displayMode, throwOnError: true, strict: 'error' })`. A failure fails the build.

## 4. Example detection

An **example** is a run of blocks that starts at a problem statement and contains the marker line `$\mathbf{Sol}^{n}$`.

- Marker: a paragraph whose entire text is `$\mathbf{Sol}^{n}$`.
- `problem` = blocks before the marker, back to the previous example, heading, or `**ตัวอย่าง**` lead-in.
- `sol` = blocks after the marker up to an answer line or the next example/heading.
- `ans` = the paragraph beginning with `$\mathbf{Ans}` plus following lines of the same paragraph. **`ans` may be empty**: about 194 `Sol` markers but only 102 `Ans` markers exist, because many exercises end with a final equation instead.
- Exercises in `worked-solutions` follow the same rule; their problem usually sits in the `###` heading title (for example `### ข้อ 1  ...`), so the heading is copied into `problem` when no preceding blocks exist.
- Proof-by-table items without a marker (some in `03-boolean-algebra`) stay as ordinary blocks under their heading. They are not examples.

## 5. Node tree rules (uniform across all chapters)

The home diagram needs the same logic for every chapter. The headings differ between chapters, so apply these rules to `summary/01..05`.

1. The file's `#` title is the chapter node.
2. Each `##` becomes a **section** node.
3. A `###` whose title is exactly or starts with `ตัวอย่าง` is an **examples group**. If its `##` has no other `###`, the group's examples attach to that `##` node's `examples` (its heading is kept in `examplesTitle`) and the group is not a node. If the `##` also has real topics, the group becomes an **examples-only topic** at its source position (empty `explain`, its examples in `examples`), for example `2.9 ตัวอย่างรวม` in chapter 2 and `2.1 ตัวอย่าง` in chapter 4.
4. Any other `###` becomes a **topic** node (leaf) under its `##`.
5. A `##` that has no topic children is itself a leaf. Its own paragraphs, formulas and tables are `explain`; its `**ตัวอย่าง**` runs and examples-group content are `examples`.
6. A `##` that has topic children is a **group**. Text directly under the `##` before its first `###` stays as the group's `explain` and is shown as a short intro line above the topic list.
7. A `##` titled `ข้อควรระวังในการสอบ` is kind `tips`, a leaf with no examples.
8. `explain` and `examples` split inside a leaf:
   - everything before the first `**ตัวอย่าง**` lead-in or first example is `explain`
   - the `**ตัวอย่าง**` lead-in and everything after belongs to `examples`
   - a single leaf may hold one or several examples
9. Order is source order. Node ids are stable (`<collection>/<chapter>/<number or slug>`), so URLs and tests do not change when text changes.

Edge cases to surface in the Phase 2 tree report: a `##` with both a topic `###` and an examples `###` (for example `04` section 2), and sections whose figures sit inside the explanation.

For `worked-solutions` and `summary/00`, nodes are not used by the diagram. Pages render their `##`/`###` hierarchy as grouped cards in source order.

## 6. Figures (SVG)

- Source form: `<div align="center">` containing one `<svg ...>...</svg>`, no blank lines inside.
- Pipeline extracts the `<svg>` element as a string, validates it (see below), and stores it as a `figure` block.
- At render time the SVG is inlined with `dangerouslySetInnerHTML`. It is trusted build output.
- Validation (build error on failure): no blank line inside the element, well-formed XML, root has `viewBox`, no `<script>`, no event-handler attributes, no external `href`, root `fill`/`stroke` use `currentColor` except the loop palette hex values already used in K-map figures.
- The `<div align="center">` wrapper is dropped. Centering is done by CSS.

## 7. Math

- Inline and display math are extracted before Markdown inline parsing so `_`, `*`, `|` inside formulas are not misread.
- Currency-style `$` is not used in the content. If a lone `$` is ever needed, escape it as `\$`.
- Table cells may contain `$...$` with `\,` and `\overline{...}`. The pipe `|` is never used inside formulas in cells.
- KaTeX strict mode is on. Do not rely on non-LaTeX behavior.

## 8. Generated output

```
src/content/generated/
  manifest.json                  # collections, ordered node index, ids, titles
  summary/<NN>.json              # ContentFile, NN = two digit chapter key from the file name
  worked-solutions/<NN>.json
```

Git-ignored. Regenerate with `npm run content`. A build report (`generated/report.txt`) lists chapters, node counts per kind, example counts, figure counts, and warnings.

## 9. Build-time checks (all fail the build)

1. Every file parses; unknown constructs are errors.
2. Every formula compiles in KaTeX strict mode.
3. Every SVG passes the rules in section 6.
4. Every node id is unique.
5. Round-trip: converting data back to normalized text equals the normalized Markdown text (see `TESTING.md`).
6. Every in-text reference such as "ข้อ 3(a)" or "หัวข้อ 4.1" points to something that exists, where it can be checked mechanically.

## 10. Author rules (what to keep doing in the Markdown)

- Headings: numbered `## 1.` / `### 1.1` in `summary`; `### ข้อ N  <question>` in `worked-solutions`.
- Examples: problem, then `$\mathbf{Sol}^{n}$`, steps, then `$\mathbf{Ans}\quad ...$` when there is a final answer.
- Figures: SVG inside `<div align="center">`, no blank lines inside.
- Never add separate image files or an `images/` folder.
- Do not rename files or renumber headings without updating references.

## 11. Implementation notes (Phase 2)

- Code: `scripts/build-content/` with `parse.ts` (blocks and inline), `tree.ts` (heading tree, node rules, example segmentation), `math.ts`, `svg.ts`, `project.ts` (round-trip oracle), `report.ts`, `index.ts` (`buildContent`, `writeOutput`) and `run.ts` (CLI used by `npm run content`). TypeScript runs directly on Node 24 (type stripping), so imports inside `scripts/` use `.ts` extensions.
- Math is pre-rendered with `output: 'html'` (no MathML) to keep the generated files small (10 to 25 KB gzip per file). Screen reader support for formulas is a Phase 6 accessibility item (for example an `aria-label` carrying the TeX).
- Round trip (`project.ts`): the Markdown and the generated data are both reduced to canonical text (whitespace removed), the ordered list of formulas, and the figure count. The `Sol` marker lines and the headings of attached examples groups are accounted for explicitly. Any difference fails `npm run content` and the test suite.
- Warnings are printed in `generated/report.txt`. The current content produces none.
- Node ids: numbered headings use the number (`summary/02/5.3`); worked-solutions and the formula sheet use positional ids (`worked-solutions/04/h2-3.h3-5`). Ids are stable while headings keep their order.
