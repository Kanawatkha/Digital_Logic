# CONTENT-SCHEMA

Rules for turning the Markdown in `content/` into typed data. This is the contract between content authors and `scripts/build-content`. Based on a scan of the current 12 Markdown files (about 11,500 lines).

## 1. Source files

| Collection | Files | Used by |
|---|---|---|
| `summary` | `00-formula-sheet-ch1-5.md`, `01..05-<name>-summary.md` | Home diagram (01-05), Formula sheet page (00) |
| `worked-solutions` | `01..05-<name>.md`, `06-midterm-practice-exam.md` | Chapter pages (01-05), Exam page (06) |
| `lab-tasks` | `01..05-<name>.md` (one per kind of task) | Task card of the Lab page, see section 12 |

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
  lab-tasks.json                 # the tasks of the lab (section 12)
  lab-tasks-report.txt           # every task with its truth row, answer, gate count and the chains checked, for review
```

Git-ignored. Regenerate with `npm run content`. A build report (`generated/report.txt`) lists chapters, node counts per kind, example counts, figure counts, and warnings.

## 9. Build-time checks (all fail the build)

1. Every file parses; unknown constructs are errors.
2. Every formula compiles in KaTeX strict mode.
3. Every SVG passes the rules in section 6.
4. Every node id is unique.
5. Round-trip: converting data back to normalized text equals the normalized Markdown text (see `TESTING.md`).
6. Every in-text reference such as "ข้อ 3(a)" or "หัวข้อ 4.1" points to something that exists, where it can be checked mechanically.
7. Every lab task is well formed and can be answered (section 12).

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
- The lab tasks are built by `tasks.ts` in the same folder, with the logic of `src/features/lab/tasks/logic.ts` (the same file the app uses to draw and place the answer, so the two cannot drift apart); `latexExpr.ts` reads the formulas of the written solutions back for the checks; that file and the files it imports carry `.ts` extensions for Node.
- Node ids: numbered headings use the number (`summary/02/5.3`); worked-solutions and the formula sheet use positional ids (`worked-solutions/04/h2-3.h3-5`). Ids are stable while headings keep their order.

## 12. Lab tasks (`content/lab-tasks/`)

The tasks of the lab page (`LAB-PLAN.md`, Round 14). Five files, one per kind of task: `01-large-boolean-expression.md`, `02-truth-table.md`, `03-sop-pos-expression.md`, `04-large-logic-circuit.md`, `05-word-description.md` (the file name must look like `NN-name.md`). They are ordinary content (section 2) with one more construct, the `lab` block.

- `# Title` is the name of the kind, the text under it before the first `##` is its introduction, and each `##` heading (`## ข้อ N <title>`) is one task. The id of a task is `<file number>.<position in the file>` (for example `03.2`); a task keeps its id as long as it keeps its place.
- A task is the statement (paragraphs, formulas, tables), then a fenced block with the language `lab`. Text may come before and after the block. Every task says to simplify and draw the circuit; every task has three inputs named A, B and C and one or two outputs; XOR and XNOR functions are refused.

````text
```lab
outputs: X, Y            one or two output names
X = m(3,5,6,7)           rows that are 1 (row = A*4 + B*2 + C), and rows that do not matter: m(1,5,6) d(0,2)
Y = expr A'B + AC        or a boolean expression
Y = rule ones >= 2       or a rule: `ones` (inputs that are 1) or `value` (ABC as a number) with >=, <=, >, <, ==, !=
Y = figure               or what the circuit of `figure:` does
only: nand               optional: only NAND (7400) or only NOR (7402) may be used (nand | nor)
form: pos                optional: the statement asks for a sum of products or a product of sums (sop | pos); the circuit of the answer is then in that form, and the statement must say SOP or POS
figure:                  optional: the circuit drawn in the statement, one gate a line, a gate has 2 or 3 inputs (NOT has 1)
  g1 = NAND A B
  g2 = AND g1 B C
  X = g2                 `<output> = <gate>` says which gate drives an output
```
````

- Expressions use `A B C 0 1`, `'` or `!` for NOT, `&`, `*` or nothing between two factors for AND (`AB`), `+` or `|` for OR, and brackets; NOT binds tighter than AND and AND tighter than OR. Gate kinds: NOT, AND, OR, NAND, NOR. An input of a gate is A, B, C, 0, 1 or another gate.
- Placeholders in the statement, written by the build from the data of the block (so the text cannot disagree with what is checked): a line `@table` is the truth table of all outputs (X for a don't care); `@expr:Y` is the expression of Y as LaTeX (the output must be given as `expr`), `@sum:Y` is `Σm(...)` (with `+ Σd(...)`) and `@prod:Y` is `ΠM(...)` (with `· Πd(...)`).
- **The solution is written by hand**, after the block, in the style of the worked solutions of the chapters and the practice exams: short, no lead-in sentence, every step of an `aligned` chain carries, as its note, the formula of the law it uses, with X, Y and Z for the parts (`\text{$\overline{X+Y}=\overline{X}\,\overline{Y}$}`), and neither a law number nor a name, the loops of a K-map are short bullets, and no gate count (the drawer shows it). For a task that names `only: nand` or `only: nor` the answer line is the last line of the conversion to that gate, written with gates of two inputs only (a gate of three inputs is built from two, as `\overline{\overline{\overline{\overline{AB}\cdot\overline{AC}}}\cdot\overline{BC}}` does), so the answer shows what is wired. The theorems are the ten of the table: the consensus theorem is not among them, so a redundant term is removed with those laws. The structure is: the line `$\mathbf{Sol}^{n}$` (it is not shown; the page writes its own heading), the steps (paragraphs, formulas, tables, `@kmap:Y`), then one answer line for each output, `$\mathbf{Ans}\quad Y = ...$`, and nothing after them. In the statement the text before the `Sol` line and around the block is the statement. `@kmap:Y` is the Karnaugh map of three variables drawn like the figures of the chapters and the exams (AB across the top in Gray code, C down the side, the cell numbers small in the corners, `x` for a don't care), written from the data like `@table`. The loops are written after the name, cells joined by commas and loops joined by bars, for example `@kmap:Y 2,3 | 5,7`, and are drawn as coloured rounded rectangles (orange, blue, green; a loop that wraps round the edge in two pieces). The build refuses a loop that is not a block of 1, 2, 4 or 8 cells that one product stands for, more than three loops, loops that mix ones and zeros (a don't care may join either), and loops that leave a cell of that kind uncovered. The loops of ones read as products and the loops of zeros as sums; the bullets under the figure name each loop by its colour (`- ลูปสีส้ม (ช่อง $2,3$) : $A=0,\ B=1$ $\Rightarrow \overline{A}B$`), as in the exam solutions. A task that can be done by algebra and by a K-map (one with no don't care row) may be worked both ways: the steps are split by lines of their own, `@method algebra`, then `@method kmap`, then optionally `@method all` for what follows both (such as the conversion to NAND or NOR), and the answer lines come after them as before. The drawer shows two tabs, algebra and K-map, and the part marked `all` is shown under whichever is chosen. The build checks every chain of every way (the shared part included), refuses a K-map way with no `@kmap` figure, an algebra way whose own part has no chain, ways out of that order, text before the first marker and an empty way. Both ways end in the formula the shared part starts from (loops of ones for a NAND task, loops of zeros for a NOR task that wants a product of sums), so the shared conversion follows either. The K-map way of a task given as an expression or a figure first brings the formula to a sum of products or a product of sums, then writes the minterms or maxterms of it (generated by a program, never typed), then draws the map. The algebra way of a task given as a table, a word description or a sum of minterms starts from the minterms of the rows that are 1 (or the maxterms of the rows that are 0, when there are fewer of them) written as an expression, then simplifies with the ten laws: a term needed in two groups is written twice with `X+X=X`, and each pair is merged with `X(Y+Z)=XY+XZ` and `X+\overline{X}=1` (a pair of maxterms with `X+YZ=(X+Y)(X+Z)` and `X\overline{X}=0`). The first row is generated and every row is checked by the build. A task written without markers is worked one way and shows no tabs. Only a task with a row that does not matter (algebra cannot choose it) or with one minterm for an answer (nothing to simplify or loop) is worked one way; a test keeps the count at 37 of 44. The statement of a task that is worked both ways does not say which method to use.
- **The circuit of the answer is not written.** The build finds the smallest circuit (AND, OR and NOT when no gate is named; NAND only; NOR only; only the form named by `form:`), shown as a diagram with its gate count and put on the boards by the Put-on-the-boards button. Write a task, run `npm run content`, and read `src/content/generated/lab-tasks-report.txt` (the statement, the truth row, the answer, the gate count and the chains checked of every task) to review it.
- **What the build reads back from the steps**: every answer line (`Y = formula`, of A, B, C, `\overline{}`, `\cdot`, `+`, brackets) must do what the task asks for that output, with a don't care row taking either value, and every display formula made only of such formulas joined by `=` (an `aligned` block with `&=` and `\\`, `\text{...}` notes, which may hold math in `$...$`) must be true in every part. Formulas that use anything else (`\sum`, arrows, words) are explanation and are left alone, The notes are explanation too: the build takes them out before it reads a chain and does not check the formula in them, so copy the laws from the chapter 3 table.
- Build-time checks (all fail the build): the block is present, closed and well formed; one or two outputs, each given once; an output that is constant, or an XOR or XNOR; a figure with a gate of the wrong number of inputs, an unknown name or a gate that reads one that does not exist; a figure that is not larger than the answer (counted in two input gates); `only: nand` or `only: nor`, or `form: sop` or `pos`, with a statement that does not name it; no `Sol` line, no steps, no answer line, an answer line missing for an output, text after the answer lines; a wrong answer or a wrong step; a duplicate id.
- Output: `src/content/generated/lab-tasks.json` (`LabTasksData` in `src/content/types.ts`) and `lab-tasks-report.txt`, both git-ignored. The app loads the JSON only when the lab opens its tasks (`loadLabTasks` in `src/content/loaders.ts`).
