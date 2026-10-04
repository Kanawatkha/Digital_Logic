# UI-SPEC

Pages, components, interactions and responsive behavior. Visual tokens (colors, type, radius, spacing) come from `DESIGN-claude.md`; this file only says where and how they are used. Light theme only.

## 1. Global rules

- Canvas is `canvas` (#faf9f5). Text is `ink` / `body`. Coral (`primary`) is scarce: the diagram root node, the active connector path, primary buttons, focus ring accent.
- No footer. No dark theme. No hover styling beyond DESIGN (primary darkens on press only). Focus is always visible (2 px ring, coral at 40% plus ink outline).
- Max content width 1200 px; reading width for prose pages 880 px.
- Fonts: Thai script uses Mitr, Latin uses the DESIGN stack (see `DESIGN-claude.md` addendum). Code/mono uses JetBrains Mono (only if code appears).
- UI labels shown to students are Thai. Code, comments and docs are English.

### UI strings (Thai)

| Key | Text |
|---|---|
| app name | Digital Logic Notes |
| nav chapter | บทที่ 1 ... บทที่ 5 (short form on tablet: บท 1 ... บท 5) |
| nav exam | ข้อสอบกลางภาค |
| nav formulas | สรุปสูตรรวม |
| root node | Midterm |
| show examples | ดูตัวอย่าง (N) |
| hide examples | ซ่อนตัวอย่าง |
| solution / answer labels | Sol / Ans |
| loading | กำลังโหลด... |
| load error | โหลดเนื้อหาไม่สำเร็จ ลองอีกครั้ง |
| not found | ไม่พบหน้านี้ |
| update toast | มีเวอร์ชันใหม่ พร้อมใช้งาน |
| update action | โหลดใหม่ |
| offline ready toast | ใช้งานออฟไลน์ได้แล้ว |

## 2. App shell

```
<Navbar />             64 px, flat, canvas background, hairline bottom border
<main>                 route content
```

No footer. A small toast host (bottom-left) shows update and offline-ready messages using the `cookie-consent-card` style (dark surface, `on-dark` text, radius 12, padding 24).

### Navbar

- Left: logo mark + wordmark, linking to Home. Wordmark: "Digital Logic" in display serif (Latin), "Notes" in `muted`. Responsive: phones show mark + "Digital Logic"; the tab-row range md (768-1023) shows the mark only so the seven tabs fit; lg and up show "Digital Logic Notes".
- Right (desktop, width >= 1024): `บทที่ 1` ... `บทที่ 5`, `ข้อสอบกลางภาค`, `สรุปสูตรรวม` as `category-tab` items. Active page uses `category-tab-active`.
- Tablet (768-1023): chapter links shorten to `บท 1` ... `บท 5`; same row.
- Phone (< 768): hamburger button (icon button, 44 px target) at right.
- The active item has `aria-current="page"`.

### Mobile menu (hamburger)

- Opens a full-screen cream sheet below the navbar (DESIGN: "menu opens as a full-screen cream sheet").
- One row per page, 56 px high, full-width tap target, in this order: Home, บทที่ 1-5, ข้อสอบกลางภาค, สรุปสูตรรวม.
- Closes on: row selected, close button, `Esc`, route change, or back gesture. Focus is trapped inside while open and returns to the hamburger on close. Body scroll is locked while open.

## 3. Routes and pages

| Route | Page | Data | Layout summary |
|---|---|---|---|
| `#/` | Home | `summary/01..05` trees | Diagram canvas (section 4) |
| `#/chapter/:n` | Chapter exercises | `worked-solutions/0n` | Prose column, jump chips, exercise cards (section 5) |
| `#/exam` | Midterm practice exam | `worked-solutions/06` | Same as chapter page |
| `#/formulas` | Formula sheet | `summary/00` | Prose with per-chapter sections and a contents rail (section 6) |
| `*` | Not found | none | Centered message and link to Home |

Every page sets `document.title` to `<page> | Digital Logic Notes` and moves focus to the main heading on navigation.

## 4. Home diagram (core feature)

### 4.1 Behavior

The diagram grows to the right, in every orientation and screen size.

Columns, left to right:

| Column | Content | Appears when |
|---|---|---|
| 0 | Root node "Midterm" | always |
| 1 | Five chapter nodes | root is open |
| 2 | Section nodes of the open chapter | a chapter is open |
| 3 | Topic nodes of the open section | only when the open section is a group (it has topic children) |
| next | Expanded block (explanation and formulas) | a leaf (a topic, or a section without topics) is open |
| next + 1 | Example block | "ดูตัวอย่าง" is pressed |

Depth is data-driven: column 3 exists only for group sections, so the expanded block lands in column 3 or column 4. Column widths and rules below apply to whichever column holds a given kind of content.

Rules:

1. Initial state: root closed, only the root is visible.
2. Pressing the root toggles it. Closing the root collapses everything.
3. **One open node per column.** Opening another node in the same column closes the previous one and all of its descendants.
4. Nothing overlays anything. Columns sit in normal flow side by side. When a column opens, the canvas becomes wider and blocks keep their own space.
5. Expanded topic block shows the title, the `explain` blocks (text, formulas, tables, figures) and, if the topic has examples, a button "ดูตัวอย่าง (N)". It never shows examples inline.
6. The example block opens in the column right after the expanded block. It lists all examples of that topic in order, each with problem, Sol and Ans (labels shown). Pressing "ซ่อนตัวอย่าง" or closing the topic closes it.
7. Leaves with no examples (for example the `ข้อควรระวังในการสอบ` tips node) show no example button.
8. Whenever a column opens, the canvas scrolls horizontally (smooth) so that the new column's left edge sits 16 px inside the viewport's left side, unless it is already fully visible.
9. Group sections open a topics column. Leaf sections open the expanded block directly. The leaf and group rules come from `CONTENT-SCHEMA.md` section 5.

> To confirm in the Phase 2 tree review: the home tree is chapter, then section, then (for groups) topic, then expanded block. The generated tree report shows how many leaves and groups each chapter has, and the user may ask to flatten it.

### 4.2 Node visuals

| Element | Style (DESIGN component) |
|---|---|
| Root node | Coral pill/rounded block, white text "Midterm", `button-primary` look, 56 px high, closed and open states differ by a chevron or plus/minus icon |
| Chapter node | `feature-card` (surface-card), radius 12, padding 20, number badge (`badge-pill`) and title in `title-md` |
| Topic node | `connector-tile` style (canvas, hairline, radius 12, padding 16-20), title `title-sm` |
| Expanded topic block | `model-comparison-card` style (canvas, hairline, radius 12, padding 32 desktop, 20 phone) |
| Example block | `product-mockup-card-dark` style (surface-dark, `on-dark`, radius 12) so the cream-to-dark rhythm of DESIGN is kept. Math and SVG inside use `currentColor` so they follow `on-dark`. This is a default decision; revisit if readability is poor |
| Open/active node | `category-tab-active` background tint plus a 2 px coral left border (the only extra accent) |

Connector lines: cubic Bezier from the parent's right-middle to each child's left-middle. Default stroke `muted-soft` 1.5 px. The currently open path uses `primary` 2 px. Lines never cross blocks because columns do not overlap.

### 4.3 Layout engine

- Each column is a vertical stack (flex column) inside a horizontal flex row. The row is the scroll container (`overflow-x: auto`).
- Child columns are vertically aligned so the group's center matches the parent's center, clamped to the top of the canvas.
- Connectors are one absolutely positioned SVG layer behind the columns. Paths are recomputed from `getBoundingClientRect` after layout using `ResizeObserver` and on window resize and orientation change.
- Gaps between columns: 48 px desktop/tablet, 32 px phone, so curves stay readable.
- Column widths:

| Column | Desktop (>= 1024) | Tablet (768-1023) | Phone (< 768) |
|---|---|---|---|
| Root | 168 px | 160 px | 140 px |
| Chapter nodes | 280 px | 260 px | min(78vw, 280 px) |
| Topic nodes | 300 px | 280 px | min(80vw, 300 px) |
| Expanded topic block | 640 px | min(70vw, 640 px) | min(92vw, 640 px) |
| Example block | 640 px | min(70vw, 640 px) | min(92vw, 640 px) |

- Blocks keep natural height. The page scrolls vertically. Wide math and tables scroll horizontally inside their own block.

### 4.4 Animation

- Open: column fades in and slides 16 px from the left, 240 ms ease-out, children staggered 40 ms. Connector paths draw in with `stroke-dashoffset`, 300 ms.
- Close: reverse in 160 ms.
- Motion layout animation for height changes.
- `prefers-reduced-motion: reduce`: no slide, no draw, instant state changes; auto-scroll uses `behavior: 'auto'`.

### 4.5 Keyboard and screen reader

- Every node is a `<button>` with `aria-expanded` and `aria-controls` pointing at its child column.
- Tab order follows visual order (left to right, top to bottom).
- `Enter` or `Space` toggles. `Esc` closes the deepest open node and returns focus to its parent node.
- Optional enhancement (Phase 5): `ArrowDown`/`ArrowUp` within a column, `ArrowRight` to the first child, `ArrowLeft` to the parent.
- The canvas is a `region` labeled "Midterm diagram". A polite live region announces "opened <title>" and "closed <title>".
- Connector layer is `aria-hidden`.

### 4.6 State in the URL (optional, decided in Phase 5)

If cheap, mirror the open path in the hash query, for example `#/?c=3&t=2.2&x=1`, so a state can be shared and survives reload.

## 5. Chapter and exam pages

Layout (all breakpoints):

```
[ Page heading: บทที่ N  <chapter title> ]          display-md (Thai: Mitr), badge-pill with number
[ Jump chips: one chip per ## group ]               category-tab style, horizontal scroll on phone
[ Group heading ]                                    title-lg
[ Exercise card ] x N                                canvas + hairline, radius 12, padding 32 / 20 on phone
```

Exercise card content, in order: title (the `###` heading), problem blocks, label `Sol`, solution blocks, label `Ans` and answer blocks (when present), figures inline where they occur. Labels use `caption-uppercase` in `muted`. The answer sits on a `surface-soft` strip.

Exam page uses the identical structure with the question wording as titles.

## 6. Formula sheet page

- Heading plus one section per chapter in source order.
- Desktop (>= 1024): sticky left contents rail listing chapters and their `###` items; content column 880 px.
- Tablet and phone: contents become a horizontally scrollable chip row under the heading.
- Includes the 0-16 reference table at the end; tables scroll horizontally inside a wrapper with a soft edge fade.

## 7. Content block rendering

| Block | Rendering |
|---|---|
| `p`, `list` | `body-md`, line height 1.55, Thai wrapping with `overflow-wrap: anywhere` only inside table cells |
| inline `math` | KaTeX HTML, `font-size` 1.05em |
| display `math` | Centered; wrapper `overflow-x: auto`; never wraps lines |
| `table` | Wrapper with `overflow-x: auto`, hairline cell borders, header row in `surface-soft`, centered columns by alignment row |
| `figure` | SVG inline, `max-width: 100%`, `height: auto`, centered, color from `currentColor` |
| `note` | `surface-soft` panel, radius 8, padding 16 |
| `example` | Section 4 (diagram) or section 5 (pages) |

## 8. Responsive behavior

| Size class | Width | Navbar | Pages | Diagram |
|---|---|---|---|---|
| Phone portrait | 360-767 | hamburger | single column, cards padding 20, 16 px gutters | grows right, column widths per 4.3, snap-assisted horizontal scroll |
| Phone landscape | up to 932 x 430 | hamburger if < 768 else row | as phone, shorter vertical space | same; keep 48 px navbar height not required, use 56 px |
| Tablet | 768-1023 | row, short chapter labels | single column 880 px | column widths per 4.3 |
| Desktop | 1024-1440 | full row | formula sheet gets contents rail | full widths |
| Wide | > 1440 | full row | content capped at 1200 px | diagram canvas capped at 1200 px viewport but scrolls |

Rules:
- No horizontal page scroll anywhere except inside the diagram canvas, wide tables and display math.
- Touch targets at least 40 px (44 px for icon buttons where possible).
- Orientation change recomputes connector paths.
- Use `100dvh` for full-height sheets to avoid mobile browser UI jumps.

## 9. Loading, empty and error states

- Route chunks load with a skeleton (three `surface-card` bars) and `aria-busy`.
- A failed chunk or generated JSON shows the load-error message with a "ลองอีกครั้ง" button. The service worker usually prevents this offline.
- Not found page shows the message and a button to Home.

## 10. Brand mark and icons

- **Mark:** an outlined AND gate (flat left edge, rounded right edge), two short input stubs at left, an output stub at right ending in a coral dot. It echoes the diagram's root node.
- Geometry on a 32 x 32 grid: body path `M8 7 H16 A9 9 0 0 1 16 25 H8 Z`, input stubs `M3 12 H8` and `M3 20 H8`, output stub `M25 16 H27`, coral dot at (29.5, 16) radius 2.5. Strokes 2 px, `ink`, round joins; the dot uses `primary`.
- Wordmark per the navbar section. Favicon: the mark on a `canvas` rounded tile (SVG favicon plus PNG fallback).
- PWA icons: 192 and 512 px with `canvas` background, plus a maskable variant with the mark inside the safe zone (80%).
- Theme color: `canvas`. Background color in manifest: `canvas`.
- Never use the Anthropic spike mark, the word "Claude" in the wordmark, or Anthropic colors beyond the shared DESIGN tokens.

## 11. Definition of done for any page or component

1. Matches this spec and the tokens in `DESIGN-claude.md`.
2. Works at 360, 390, 768, 1024, 1440 widths and phone landscape.
3. Keyboard operable, correct focus order, visible focus.
4. Respects `prefers-reduced-motion`.
5. No overlap, no horizontal page scroll, no clipped math.
6. Covered by the checks in `TESTING.md`.
