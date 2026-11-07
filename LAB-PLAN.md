# LAB-PLAN: Lab page (NX-4i board simulator)

Status: **Phase L6 started: the truth table builder was built and then removed at the user's request; the tools row was redesigned (Round 5); the lab task mode was built in Round 14**; the other extras wait for the user's pick. L1 (simulator and data) is done. L2 (the drawn board) is done except Round 2 and 3, which wait for the user's review of hole counts and positions. L3 (wires), L4 (chips, switches, LEDs, warnings, autosave) and L5 (magnifier, phone and tablet layouts, switch and LED strip, keyboard wiring, labels) work end to end in the browser: a real circuit such as Y = (A AND B) OR C can be built and run with a mouse, a finger or the keyboard. Work moves on only when the user says so, one phase at a time, each phase ending at a gate (same rule as `PLAN.md`). Do not commit or push unless asked.

## 1. Goal and scope

A new page `#/lab` that shows the INEX **NX-4i Digital Circuits Experiment Board** as a 2D top view, drawn to match the photo the user took in the real lab, and lets a student wire a real working circuit on it.

Works on:

- Active: the +5V and GND power sockets, the 8 red logic switches (inputs), the 16 LEDs of the 16-BITs Logic Monitor (outputs), the solderless breadboards, jumper wires, and ICs.
- Drawn only (no behavior, no clicks): everything else on the board (logic probe, hex decoder displays, LED 7 segments, function generator, amplifier, speaker, R-2R D/A, 8-channel driver, A/D converter, debounce switch, knobs, resistors, chips).

Usable with mouse, touch and keyboard where practical, on desktop, tablet and phone. The canvas zooms and pans freely, like the home diagram but with no edge limits.

Out of scope: 3D, analog behavior, timing and propagation delay, any panel that is only drawn, ICs other than the five listed below, clocks, flip-flops, sequential circuits.

## 2. Decisions

### Locked by the user

| Topic | Decision |
|---|---|
| View | 2D top view, no 3D |
| Reference | Only the user's own photo of the real board (`NX-4i`, copyright 2004 INEX). Other sources are used only to learn what a socket or panel is called, never as a drawing model |
| Power | Only +5V and GND work. The other supply sockets are drawn |
| Inputs | The 8 red switch buttons toggle 0 and 1 |
| Outputs | The 16 red LEDs of the Logic Monitor (LED on = logic 1) |
| ICs | Exactly five, all 2-input (NOT has 1): **7404** NOT, **7408** AND, **7432** OR, **7400** NAND, **7402** NOR. Draggable in and out |
| Wires | Drag to draw, choose a color, bend the curve so wires do not overlap |
| Viewport | Free zoom and pan, no limit at the screen edge, touch friendly |
| Hole counts | The assistant analyses them from the photo first. They are corrected later. Keep them in data, never in drawing code |

### Proposed defaults (the user confirms or changes)

| Topic | Default |
|---|---|
| IC power | Strict like the real lab: an IC works only if pin 14 is on +5V and pin 7 is on GND |
| Floating input | Reads as 1 like TTL (74LS), and the IC shows a "floating input" hint |
| Warnings | 5V shorted to GND, two outputs driving one net, unpowered IC, floating input, a feedback loop that does not settle |
| Save | Circuit saved automatically in the browser, with undo and redo |
| Navigation | New navbar tab and route `#/lab` |

### Open questions

1. Exact hole counts and the position of every socket (the photo is an angled, lit shot). A close, straight-on photo of the breadboards, the logic switch strip, the power supply sockets and the monitor sockets would remove the guessing.
2. What the 6 sockets of each logic switch carry. The user confirmed every switch has **6 sockets in a 2 x 3 block**. Assumed until checked on the real board: all 6 are the same output net (so one switch can feed up to 6 wires); the green and red LEDs beside the block show the state (green = 0, red = 1 is assumed). If some sockets are the complement or GND, only `board/layout.ts` changes.
3. Whether the switch buttons are latching (stay pressed) or momentary. Assumed latching toggle (a tap flips 0 and 1), which is what the plan builds.
4. Which 74 series the lab uses (LS or HC). Only matters for the floating input rule. Assumed LS: a floating input reads 1.
5. Menu layout when the final-exam content arrives (the navbar will get crowded).

## 3. Board analysis (from the photo)

Coordinates are photo pixels (the photo is 1984 x 1488). The board itself spans about x 220 to 1920 and y 88 to 1420, so the drawing uses a board space of roughly **1700 x 1332** with the photo coordinates minus (220, 88). All numbers are estimates to be corrected.

| Panel | Photo area (approx) | What is on it | Behavior |
|---|---|---|---|
| Title and logo | x 235-775, y 140-335 | INEX logo, "NX-4i", "DIGITAL CIRCUITS EXPERIMENT BOARD", copyright line | drawn |
| Power supply | x 245-575, y 340-615 | text "+-5V 1A", "short circuit protect", 4 red short-circuit LEDs, 5 sockets in a row (labels in the photo: +5V, GND, +12V, -12V; the first socket is probably -5V, its label is washed out) | **+5V and GND active**, others drawn |
| Function generator | x 245-575, y 625-1400 | many chips, resistors, capacitors, 5 LEDs, 2 yellow buttons, 2 knobs (FREQUENCY, AMPLITUDE) | drawn |
| Logic probe | x 585-770, y 200-490 | LO (green), HI (red), PULSE (yellow) LEDs, INPUT socket, 2 chips | drawn |
| 16-BITs Logic Monitor | x 785-1125, y 150-500 | 16 red LEDs (top row 16..9, second row 8..1), sockets 16..9 and 8..1 below, 2 chips, text "Logic 0 - LED off, Logic 1 - LED on" | **active outputs** |
| Binary to hex decoder | x 1135-1555, y 165-505 | four large 7 segment digits, big chip, sockets DECODER-4..1 (D C B A dp) | drawn |
| LED 7 segments | x 1570-1905, y 185-545 | two digit pairs (common anode, common cathode), socket rows a..g dp | drawn |
| Amplifier and speaker | x 1540-1905, y 565-745 | input socket, volume knob, small chips, speaker symbol | drawn |
| R-2R D/A converter | x 1525-1745, y 750-925 | resistor ladder, sockets | drawn |
| 8-channel driver | x 1760-1905, y 760-1000 | green screw terminal block, sockets | drawn |
| A/D converter and V-source | x 1505-1830, y 1000-1160 | chip, trimmer, small sockets | drawn |
| Debounce switch | x 1490-1760, y 1160-1405 | 2 yellow buttons, chip, outputs text | drawn |
| Breadboards | x 595-1535, y 505-1215 | two solderless breadboards, see below | **active** |
| Logic switch | x 560-1495, y 1205-1405 | 8 red buttons (x about 615, 745, 870, 990, 1100, 1215, 1335, 1450), each with LEDs and a socket block above it | **8 inputs active** |

### Breadboards

Read from the photo (to verify):

- Two boards stacked vertically (the upper one white, the lower one yellowed), each wider than it is tall.
- Each board has a **top power rail strip**, a **terminal strip of 60 columns x 2 halves of 5 holes** separated by a center channel, and a **bottom power rail strip**.
- Column numbers are printed every 5 (1, 5, 10 .. 60).
- Hole pitch about 15 photo px (the 2.54 mm grid). The terminal strip is about 910 px wide for 60 columns.
- Rails are grouped in blocks of 5 holes with a small gap (one slot), and the middle of each rail, between the fifth and the sixth block, has a wider gap (two slots). **Each rail line is cut in the middle**: holes 0 to 24 are one line and holes 25 to 49 another, with no connection between them (the user checked the real board with a continuity test). Power plugged into one half does not reach the other half; a jumper wire across the gap joins them (`RAIL_SPLIT_AT` in `board/layout.ts`).
- Each column half connects its 5 holes together; the two halves are not connected. Each half of a rail line connects all its holes; the two halves of a rail line are not connected (verified on the real board).

Assumption used for data until verified: each board has 4 rail lines (2 on top, 2 on the bottom) of 50 holes. These counts live in `board/layout.ts`, not in drawing code.

## 4. Simulation model

Pure TypeScript with no React, fully unit tested.

### Nets

- Every connectable point (breadboard hole, socket pin, IC pin, switch output) is a node.
- Union-find joins nodes that are connected: holes in the same column half, holes in the same half of a rail line, wire ends, socket pins tied on the board.
- One net may be: `+5V` (from the power socket), `GND`, a switch output, an IC output, or none.

### Values

Each net has one of `0`, `1`, `floating`, `conflict`.

- `+5V` net is 1 and `GND` net is 0. If both are the same net: **short** (warning, the whole circuit shows a short state and stops computing).
- A switch drives its net with 0 or 1.
- An IC output drives its net only when the IC is powered. Two drivers on one net with different values: `conflict` (warning).
- An undriven input net reads `floating`, treated as 1 (TTL) with a hint (see 2).

### Evaluation

1. Compute nets and their powered status.
2. Evaluate gates repeatedly until nothing changes, at most N rounds (N = number of gates + 2).
3. If it does not settle, mark the nets that keep changing as `unstable` and show a "feedback loop" warning. The values shown stay stable (the last round).
4. Output LED k lights when the net on its socket reads 1.

Runs on every change (wire, IC, switch). The scale (a few dozen gates) makes this effectively instant.

### ICs (pinouts verified against manufacturer datasheets in phase L1)

All are 14-pin DIP. Pin 14 is VCC and pin 7 is GND on every chip. Top view with the notch on the left: pin 1 is at the bottom left, pins 1 to 7 run left to right along the bottom, pins 8 to 14 run right to left along the top.

| Chip | Function | Gate 1 | Gate 2 | Gate 3 | Gate 4 | Gate 5 | Gate 6 |
|---|---|---|---|---|---|---|---|
| 7404 | hex NOT | in 1, out 2 | in 3, out 4 | in 5, out 6 | in 9, out 8 | in 11, out 10 | in 13, out 12 |
| 7408 | quad AND | in 1, 2, out 3 | in 4, 5, out 6 | in 9, 10, out 8 | in 12, 13, out 11 | | |
| 7432 | quad OR | in 1, 2, out 3 | in 4, 5, out 6 | in 9, 10, out 8 | in 12, 13, out 11 | | |
| 7400 | quad NAND | in 1, 2, out 3 | in 4, 5, out 6 | in 9, 10, out 8 | in 12, 13, out 11 | | |
| 7402 | quad NOR | in 2, 3, out 1 | in 5, 6, out 4 | in 8, 9, out 10 | in 11, 12, out 13 | | |

Sources: SN7400, SN7402, SN7404 and SN7432 from the Texas Instruments datasheets (pin diagrams read from the documents); the 7408 from the TI SN74AHC08 datasheet pin table, and onsemi states the 74HC08 is identical in pinout to the 74LS08. The datasheets label gate 3 of the 7400 as pin 10 = 3A and pin 9 = 3B (the reverse of the table above); the gates are symmetric, so the simulator is unaffected.

Placement rule: an IC straddles the center channel of a breadboard. Its pins land in the two holes next to the channel (one column half each side), 7 columns wide.

## 5. Data model

One JSON document, versioned, stored in the browser (`localStorage`, wrapped in try/catch like the rest of the app).

```text
Circuit v1
  wires:   [{ id, from: PointId, to: PointId, color, bend: { x, y } }]
  ics:     [{ id, type: '7404' | '7408' | '7432' | '7400' | '7402', board: 0 | 1, col: number }]
  switches:[ boolean x 8 ]
PointId (implemented in sim/points.ts)
  hole    "b0:c12:e"      board 0, column 12, row e (rows a-e above the channel, f-j below)
  rail    "b1:r:top2:17"  board 1, rail line top2, hole 17
  power   "power:+5V:0"   pin 0 of the +5V socket (sockets: -5V, +5V, GND, +12V, -12V; 6 pins each, 2 rows of 3)
  switch  "sw3:5"         pin 5 of logic switch 3 (switches 0-7, 6 pins each)
  led     "led9:1"        socket 1 of Logic Monitor input 9 (inputs 1-16, 2 sockets each)
```

Saved under the key `digital-logic-lab-circuit` (`state/storage.ts`), `version: 1`. The view (pan and zoom) is not saved: the board fits the screen on every visit, which suits a phone and a laptop alike. Nothing in the saved text is trusted: a part that is not valid, or that no longer fits (a hole already taken), is dropped and the rest is kept. Ids are `w<n>` for wires and `u<n>` for chips; the next id is worked out from the saved ones.

Everything on the board is generated from `board/layout.ts` (panels, holes, sockets). Corrections after the user's review change only that data.

## 6. UI and interaction

### Canvas

- One SVG scene inside a pan and zoom container driven by pointer events. No limit at the screen edge.
- Mouse: wheel zooms toward the pointer, drag on empty space pans, right-button drag also pans (matches the site-wide convention).
- Touch: two fingers pan and pinch zoom, one finger on empty space pans.
- Buttons: zoom in, zoom out, fit board, 100%. Double click or double tap an empty spot zooms in.
- Zoom range wide enough to see the whole board and to see single holes comfortably.

### Wires

How a press is read (implemented in `wire/target.ts` and `canvas/useWireTool.ts`), in priority order:

1. The handle of the selected wire: drag to bend it.
2. A plug (a wire end sitting in a hole or socket): drag to move that end to another free point, tap to select the wire.
3. A wire body: tap selects, drag bends (the curve follows the pointer).
4. A free hole or socket: drag to another free point draws a new wire. While dragging, the nearest free point within a generous radius highlights and snaps; a point that holds a wire is never a target (a hole holds one lead), so a drop on a taken hole lands on the nearest free one. If nothing is near, the wire is dropped.
5. Anything else pans the board; a tap on empty space unselects. The right and middle mouse buttons always pan.

Rules that came out of building it:

- Wires start only when the board is zoomed in enough to aim: holes at least 6 screen px apart for a mouse (zoom about 40%) and 10 px for a finger (about 67%). Below that a press pans, so zoom in first. Snap radius: 26 px mouse, 44 px finger.
- A second finger that lands during a wire gesture cancels the wire and turns into a pinch with the first finger (the viewport takes the first finger over).
- A mouse over a free hole shows a ring and a crosshair cursor, so the student sees where a wire would start.
- Wires are quadratic curves with a **handle at the midpoint**, stored as `bend`, the pull of the middle away from the straight line (so the shape survives moving an end). The toolbar straightens a wire (resets the bend).
- Wire color palette: red, black, blue, green, yellow, orange, white, purple. The toolbar color is the color of the next wire; with a wire selected, picking a color recolors that wire. Delete from the toolbar or with Delete or Backspace. Undo and redo from the toolbar or Ctrl and Z, Ctrl and Y (or Ctrl, Shift and Z). Escape cancels a drag and unselects.
- A hole with a wire gets its own visual (a plug in the wire's color).
- With a finger or a pen, a round magnifier follows the drag (above the finger, below it near the top edge) because the finger covers the holes it aims at. It shows the same scene again, larger (2.6 times the board scale, at least 2), with a crosshair on the point under the finger (`canvas/Magnifier.tsx`, `canvas/lens.ts`; the scene is drawn once inside `#lab-scene` and the lens draws it a second time with `<use>`). It appears for wires, wire ends, bends and chips, never for a mouse.

### ICs

- The tray (top left, under the wire toolbar) lists the five chips. Drag one onto a breadboard: it follows the pointer, snaps to the center channel and the nearest column (a blue outline when it fits, red when it does not) and its 14 legs go into holes. A tap or the keyboard (Enter, Space) on a tray chip puts it on the free place nearest the middle of the screen.
- Press a placed chip and drag to move it. Dragging it off both breadboards (past about four hole pitches from a channel) takes it out, shown with the red outline first; the toolbar delete button and the Delete key remove the selected chip too. A chip cannot overlap another, and cannot sit on a hole that holds a wire end.
- A hole holds one lead, so a wire cannot end in a hole under a chip leg (a wire dropped there lands on the nearest free hole). Wires may use the other holes of the same column half, which is how legs are reached.
- Each chip shows its number and gate, the notch at the left, a dot at pin 1, and pin numbers once the board is zoomed in (180%). A badge above the chip says "ไม่มีไฟ" (no power), "อินพุตลอย" (floating input) or "ไม่นิ่ง" (does not settle) when the rules in section 2 apply.

### Switches and LEDs

- The 8 red buttons are latching: a tap flips 0 and 1 at any zoom. The button sits lower and darker when it is up (1) and the two lamps beside it show the state (green = 0, red = 1). A drag that starts on a button pans the board instead of flipping it.
- The 16 monitor LEDs glow red when the net on their socket reads 1 (a soft glow, no flicker).
- Switch positions are saved with the circuit and are not part of undo (operating the board is not editing it).

### Tools, strip and layouts

- An icon-only button (sliders, top left, no word) folds the tools away or shows them. It turns dark and its icon spins half a turn while the tools are open. The tools are shown on tablets and desktops and start folded on a phone (narrow, or short when turned sideways), where they would cover half the board. They slide in one block after another, spring a little past their place, and fold away faster than they came.
- The tools are three floating panels in **one row**: the wire toolbar, the chip tray, and the **switch and LED strip**. The strip never shrinks; the other two give way. From 1706 px wide every wire color and every chip is in the row. From 1446 px the eight colors fold into one button that shows the current color and opens a 4 x 2 panel. Under that the chip tray folds too: it shows one chip (drag it or tap it to place it) with a small arrow that opens a list to swap it for another. The panels spring out of their button, close with Escape or a press elsewhere, and hand the focus back.
- **Under about 1236 px** (tablet, phone) the strip cannot share the row, so it leaves it: the tools button moves to the **navbar**, left of the share button (the page fills a spot the navbar keeps for it, `lib/navbarSlot.ts`), the wire toolbar and the chips stay at the top (one row, or two on a phone), and the strip becomes a **dock at the bottom of the screen**, above the warnings and the zoom buttons (the zoom buttons are the bottom row), so no panel opens over it. Under 560 px the dock stacks: the eight switches in a row, a hairline, and the sixteen LEDs in two rows of eight, each LED under a switch column. The dock folds with the tools, sliding down. The strip: eight buttons for the switches (number on top, 0 or 1 below, `aria-pressed`) and sixteen dots for the monitor LEDs laid out like the monitor (16 to 9, then 8 to 1). The strip lets a student try a circuit while zoomed in on a breadboard, with the real switches and LEDs off screen, with buttons big enough for a finger and the keyboard.
- The empty space around the tools lets presses through (the tools box has `pointer-events-none`, each panel takes them back), so the board can be dragged, and zoomed with the wheel, from there too.
- Every button is at least 40 px. Checked at 375 x 812 (phone), 844 x 390 (phone sideways), 768 x 1024 (tablet) and desktop.

### Keyboard and screen reader

- Zoom and pan keys as before (+, -, 0, 1, arrows). Ctrl and Z, Ctrl and Y, Delete, Escape work anywhere in the lab. Tray chips, strip switches and toolbar buttons are ordinary buttons (Tab, Enter, Space).
- **Keyboard wiring** (`canvas/useKeyboardWiring.ts`): focus the board and press Enter. A dashed cursor appears on the point nearest the middle of the screen. The arrow keys move it to the next point in that direction (Shift jumps at least five pitches; the board follows the cursor). Enter on a free point starts a wire, Enter on another free point ends it (in the color chosen on the toolbar); Enter on a wire end or a chip leg selects that wire or chip, and Delete removes it. Escape cancels a wire that was started and leaves the mode when none is; Tab leaves it too. While it is on, the arrows do not pan.
- Every step is written as a sentence (`ui/pointName.ts`: "เบรดบอร์ด 1 คอลัมน์ 12 แถว e") in a live region, which is also shown on screen as a hint while the mode is on. A second live region says how many wires and chips there are and what is selected. The warnings are a named live region too.
- Moving a placed chip is still a pointer action; with the keyboard a chip is placed from the tray and removed with Delete.
- `prefers-reduced-motion`: the view jumps instead of gliding (as in L2), and the tools and their panels appear and go at once. The only other motion on the page is the tools row described above.

### Warnings

- **On a phone** (under 768 px) the button is at the top right instead: at the end of the row of the chips while the tools are shown (its list opens under it, lined up with its right edge) and in the first row when the tools are folded, so the bottom row holds only the exam timer and the zoom buttons (Round 15). Elsewhere: a small button at the bottom left, in the row of the zoom buttons: an alert icon and how many warnings there are, red when one of them breaks the circuit (a short, two outputs fighting on a net, a loop that never settles) and amber for the rest (no power, floating inputs, a supply that is only drawn). It is not on screen when there is nothing to say; it pops in by itself when a warning comes and goes when the last one is gone. Pressing it opens the list (one line per chip, all of them, scrolling if long) in a panel that floats over the board, springing up out of the button, so the warnings never push the switch and LED strip up; Esc or a press elsewhere closes it. A screen reader gets the messages from a live region as they come.
- The short circuit lamps on the power panel light on a short.

### Saving

- The circuit is saved in the browser after every change and restored on the next visit; a browser that blocks storage still works, it just forgets. The toolbar has a button that clears every wire and chip (undo brings them back; switches are left as they are).

### Power

- Dragging a wire to the +5V or GND socket powers the circuit. A chip works only with +5V on pin 14 and GND on pin 7.

### Extras (optional, in order of value)

1. ~~Truth table builder~~ (built, removed at the user's request, then built again in Round 10 as part of the results drawer, with the circuit diagram and the equations).
2. ~~Lab task mode~~ (built in Round 14 as tasks from Markdown with worked solutions and an answer that can be put on the boards; the check of a student's circuit was dropped at the user's request).
3. Save several circuits, export as an image.
4. Hint overlay: highlight the pin names of an IC on the board itself (the pin diagram drawer, Round 7, covers the diagrams).

## 7. Rendering and performance

- Board art is static SVG layers: base, panels, silkscreen text, parts. Hundreds of resistors and small parts are drawn from a few symbols with `<use>`.
- Breadboard holes (thousands) are **not** individual elements: a repeating pattern draws them, and their positions come from formulas. Hit testing finds the nearest hole from the pointer position by math.
- Dynamic layers (wires, ICs, plugs, LEDs) are small and redraw on change only.
- Pan and zoom use a CSS transform on one group and never re-render the scene.
- Target: smooth pan and zoom on a mid-range phone.
- Respect `prefers-reduced-motion`.
- Text on the board (silkscreen) is drawn with the site fonts, not images.

## 8. Code layout

```text
src/pages/LabPage.tsx                  route component, lazy loaded
src/features/lab/
  board/layout.ts                      all panel, hole and socket data (the only place with counts)
  board/BoardArt.tsx                   static drawing
  board/panels/*.tsx                   one file per panel
  sim/nets.ts                          union-find and netlist
  sim/ics.ts                           the five pinouts
  sim/evaluate.ts                      evaluation and warnings
  sim/sim.test.ts                      unit tests
  canvas/useViewport.ts                pan and zoom
  canvas/useWireTool.ts                pointer gestures for wires (L3)
  canvas/WireLayer.tsx                 wires, plugs, handles, snap rings (L3)
  canvas/IcLayer.tsx                   chips, badges and the chip being held (L4); switches and LEDs are drawn by the board panels
  canvas/Magnifier.tsx, lens.ts        the finger magnifier and where it sits (L5)
  canvas/useKeyboardWiring.ts          keyboard cursor and wiring (L5)
  board/hitTest.ts                     nearest point to a position, grid lookup (L3)
  wire/curve.ts, wire/target.ts        wire curves; what a press lands on and where a drag snaps (L3)
  ui/WireToolbar.tsx, Warnings.tsx     color, undo and redo, straighten, delete; short and supply warnings (L3)
  ui/IcTray.tsx                        the five chips to drag out (L4)
  ui/ExamTimer.tsx, useCountdown.ts    the 15 minute exam timer (Round 15)
  ui/IoPanel.tsx, pointName.ts         the switch and LED strip; points in words (L5)
  ui/Popover.tsx, usePresence.ts, useMinWidth.ts   the small panels of the tools, their exit animation, the width tiers (Round 5)
  ui/IcDiagramDrawer.tsx, diagram/*    the pin diagram drawer and the diagram builder (Round 7)
  wire/arrange.ts                      automatic wire arrangement (Round 7)
  ui/warningMessages.ts                warnings as lines for the student (L4)
  sim/notes.ts                         the hint badge of each chip (L4)
  state/circuit.ts                     reducer with undo and redo; wires, chips, switches (L3, L4)
  state/storage.ts                     save, load and check the saved circuit (L4)
  tasks/logic.ts                       pure: expressions, rules, don't cares, the smallest circuit in AND/OR/NOT, NAND or NOR (Round 14; also run by the build)
  tasks/place.ts                       put an answer on the boards (Round 14)
  tasks/toNetlist.ts, TaskDiagram.tsx  a task's gate list as the diagram netlist, and its drawing
  tasks/TasksDrawer.tsx, TaskList.tsx, TaskDetail.tsx, TaskTruthTable.tsx   the drawer of the tasks
  tasks/useLabTasks.ts                 the generated tasks (`loadLabTasks` in `content/loaders.ts`), loaded once
src/config/site.ts                     new navbar item for the lab
```

Follows `AGENTS.md`: feature first folders, `@/` imports, design tokens, no inline hex values except the board art, which has its own palette file because the board's greens and creams are not site tokens.

## 9. Phases

Each phase ends with a gate: the user reviews and says "go". The lab is added without changing the existing pages.

### Phase L1 - Simulator and data

- [x] `board/layout.ts` with the panels and breadboard data from section 3 (flagged as estimates), `board/geometry.ts` for the position of every point
- [x] `sim/points.ts` (point ids and the joins inside the board), `sim/nets.ts` (union-find), `sim/ics.ts` (pinouts and placement), `sim/evaluate.ts` (evaluation and warnings)
- [x] Unit tests (55): every gate of every chip, power rules, rails and column halves, floating input, short, conflict, a two level circuit, a feedback loop, overlapping chips, bad ids, and the layout (every point has a unique position inside the board)
- [x] Exit: all tests pass, pinouts checked against datasheets
- Gate

### Phase L2 - Draw the board

- [x] Route `#/lab`, navbar item "แล็บ", page with the canvas
- [x] Round 1: every panel drawn from the photo (title, power supply, function generator, logic probe, logic monitor, hex decoder, LED 7 segments, amplifier and speaker, D/A, driver, A/D, debounce, logic switch, two breadboards), checked side by side with the photo
- [x] Round 2 (the user's review of the photo): hole counts confirmed correct; the rails get a wider gap in the middle; the drawing is straightened (the photo is tilted, so equal things are drawn equal): red and yellow buttons are squares of one size (68 px); the switch lamps are the same size, on one line, symmetric around each socket block, with no halo; the five power sockets and the four short circuit lamps are evenly spaced on one line; the two rows of monitor LEDs line up and the two monitor chips are at one height; the three logic probe lamps are one size on one line and "PULSE" stays inside its panel; the debounce buttons are square and level with the chip between them; the 7 segment sockets fit inside their panel; the A/D and debounce panels no longer overlap the breadboard, and texts no longer cross panel borders or sit under chips (found with a checker that measures every text and part in the browser)
- [x] Round 3 (the white frames): every frame now sits on one grid, straightened from the tilted photo. The title strip and the three big top blocks (monitor, hex decoder, 7 segments) start at one height and the three blocks and the logic probe end at one height; the left column (power supply, function generator) is one width; the right column is five rows (amplifier and speaker, D/A and the driver terminals, the driver input row, V-source and A/D, debounce) aligned on both sides; the left column, the logic switch strip and the debounce frame end at one height; neighbors are 10 px apart everywhere (`PANEL_GAP`), and the breadboards are centered between the two columns. Frames are data in `PANELS` (`board/layout.ts`); the contents of a frame move onto it through `PANEL_SHIFT` and the `Shift` part, so moving a frame is one number. New frames: title strip, speaker, driver input row, V-source (split from A/D). The switch sockets, monitor LEDs, power sockets and breadboard holes moved with their frames (saved circuits store point ids, so they are not affected)
- [x] Round 4 (balance sweep of the top view): the contents of every frame were re-centered or re-spaced so nothing hugs one edge. The hex decoder digits sit on the middle of the frame, the 7-segment sockets, labels and resistors sit under their digit pairs, the D/A converter and driver input row have even margins, the power sockets are centered in their frame, and the function generator was redrawn in tidy rows (three upright chips level and evenly spaced, eight evenly spaced lamps, two yellow square buttons and two knobs symmetric about the middle of the frame)
- [x] Round 5 (the tools row): the truth table is removed. The tools button is an icon only, so the three panels move left and fit in one row on a desktop: wire toolbar, chip tray, switch and LED strip (all 48 px high). On a narrower window the colors fold into one button with a 4 x 2 panel, then the chip tray folds into one chip with a list to swap it, the strip keeps its size. Motion: the panels slide in one after another and spring out of their button, the toggle spins, a swapped chip or color rises in, buttons press in; with reduced motion it all happens at once. Unit tests cover the wide row, the narrow window (color panel, chip list, Escape, a press elsewhere, placing the chip that shows)
- [x] Round 6 (narrow windows): under about 1190 px the tools button moves to the navbar next to share, the switch and LED strip becomes a dock at the bottom of the screen (stacked under 560 px: switches in a row, LEDs under them), so the two top panels are one row (two on a phone) and a panel that opens never lands on the strip. The empty space around the tools no longer swallows presses: the board drags, pans and zooms from there. Unit tests: the dock, the navbar slot, pass-through, the stacked strip
- [x] Round 7 (pin diagrams and arranging wires): two new buttons.
  - **Pin diagrams** (`diagram/pinDiagram.ts`, `diagram/IcDiagram.tsx`, `ui/IcDiagramDrawer.tsx`): a chip button at the end of the chip tray opens a drawer with the datasheet style diagram of all five chips (package from above, notch on the left, pins 1 to 7 along the bottom and 14 to 8 along the top, gate symbols wired to their pins, VCC and GND). The drawer slides in from the right (from the bottom on a phone), the page behind blurs and cannot be used until the drawer closes (cross, Esc, or a press on the blur; focus is trapped inside and goes back to the button). The diagrams are generated from the same pin tables as the simulator (`sim/ics.ts`), so they cannot disagree with it; the tests check that every pin is drawn once, the leads never meet and the supply is on 14 and 7. A chip that sits on a breadboard is marked "อยู่บนบอร์ด" (with its count) and outlined on its card. Pointing at a pin or a gate lights it and says what it is ("ขา 3 · เอาต์พุต 1Y · เกต 1 (AND)"); this covers the old extra "pin name hint" for the diagrams (the hint on the chips on the board itself is still open)
  - **Arrange wires** (`wire/arrange.ts`): a wand button on the wire toolbar sets the bend of every wire in one undoable step (connections never change, so the circuit behaves as before). Each wire chooses among straight and bows of 7 to 220 px to either side, by cost: crossings, running within 12 px of another wire, covering another wire's plug, passing over a chip body, leaving the board, leaving its own breadboard when both ends are on it, and the size of the bend (so a wire stays straight when nothing is in its way). The longest wires choose first and everyone re-chooses until nobody moves (costs are symmetric, so it ends); nothing is random. Crossings that cannot be avoided stay (the tests check the result never has more than the straight wires had). The wires glide to their new shape in 380 ms (not with reduced motion). The user's own bends are overwritten
- [x] Round 8 (warnings as a button): the red and amber warning boxes no longer stack up over the bottom of the screen. Warnings are one button (icon and count, red or amber) in the bottom row, shown only while there is a warning, with the list in a floating panel on demand (`ui/Warnings.tsx`, `Popover` now opens upward too). On a phone the warnings no longer need their own full width row, so the switch and LED strip keeps its place. The list items only fade in and the list never scrolls sideways, so no scroll bar flashes while the panel opens. Tests: the button and its count, red and amber, the list on demand, Esc, and the button leaving with the last warning
- [x] Round 9 (rails cut in the middle): the user tested the real board and the two halves of each power rail are not connected. `RAIL_SPLIT_AT` is now 25, so a rail line is two nets of 25 holes. A chip powered from the other half of a rail than the supply wire now gets the "no power" warning, as on the real board, and a jumper across the gap fixes it. Tests: halves apart, a jumper joins them, a chip is not powered from the far half, a short needs both supplies on one half
- [x] Round 10 (results of the circuit): a table button at the end of the chip tray opens a drawer, in the same style as the pin diagrams (over a blurred page, closed with the cross, Esc or the blur), with three tabs. The drawer is made of one shared `ui/Drawer.tsx`.
  - **Netlist** (`analysis/netlist.ts`): the circuit as a graph of gates read from the same wires, chips and board joins as the simulator: what each gate input reads (a switch, +5V or GND, another gate, nothing = floating, two drivers = conflict), what drives each LED, the part that leads to the chosen LEDs, feedback loops, and the faults (short, conflict, unpowered chips, floating inputs). The LEDs that have a wire are the outputs; the drawer has a button for each to leave one out.
  - **Truth table** (`analysis/truthTable.ts`): the simulator is run for every combination of the switches that reach the LEDs (up to 8, 256 rows) with the others where they are, so the table is what the board does. The first input is the top bit of the row number, columns are named A, B, C. The row the switches are on is marked; the table copies as text with tabs.
  - **Circuit** (`analysis/diagramLayout.ts`, `analysis/ResultDiagram.tsx`): the gates are drawn with the symbols of the pin diagrams, in columns by depth from the switches (switches and supplies on the left, LEDs on the right), wires in right angles, a wire that skips a column passes through a free place in it, a feedback wire loops under the diagram (dashed). A wire carrying 1 now is orange, 0 is black, and a lit LED is red. Zoom buttons and fit.
  - **Equations** (`analysis/expression.ts`): for each LED the smallest sum of products (Quine and McCluskey, exact search with a cap, then greedy), the equation as wired (`A·B + C`, a prime for NOT, NAND and NOR), `Σm` and `ΠM`.
  - A circuit with a feedback loop shows the diagram only; the table and equations say why they are not made (the output depends on history). Faults are listed over the tabs: short, conflict, chips without power, floating inputs. Tests: the netlist, the table against the simulator for every row, the equations, the layout, the drawer and the page
- [x] Round 11 (the diagram, bars): the circuit diagram fills the width of the drawer (760 px at most), as before, and is zoomed only by the buttons. Inside it the gate symbols are drawn 1.35 times larger (`GATE_SCALE`), and the boxes of the switches, supplies and LEDs are larger with larger text. The columns are no longer a fixed distance apart: the room between two columns grows with the number of wires that have to change height in it (18 px for each), and the rows are further apart, so wires keep away from each other. NOT in the equations is a bar over the letter or the whole group instead of a prime (`ui/Notation.tsx`; `analysis/notation.ts` reads the prime text into bars; bars over bars stack); the text with primes stays as the label for a screen reader and in the tests of `expression.ts`
- [x] Round 12 (wire colors): a second button, a palette, next to the wand paints every wire by what it carries (`wire/recolor.ts`), in one undoable step that does not touch the bends or where the wires go. The wires on the GND net are black and the wires on the +5V net are red, wherever they are (the net is followed through the rails and the holes of a column, as in the simulator, so the wire from a rail to pin 7 of a chip is black too). Every other net, that is every signal, gets its own color from blue, yellow, purple, green, white and orange (neighbors in that list differ most in light and hue), and all the wires of a net share it. Nets whose wires cross or run close are given different colors as far as the six colors allow (greedy coloring, the busiest nets choose first, ties go to the least used color); the result is the same every time. A wire on a short (a net holding both +5V and GND) is left as it is; the supplies the simulator does not drive (+12V, -5V, -12V) count as signals. The colors fade in 0.3 s. The wand keeps arranging only the bends. The color for the next wire is not changed. Tests: black, red, nets through holes, one color per net, crossing and close nets, the colors spread when free, more nets than colors, shorts, unknown points, the reducer action, the page
- [x] Round 13 (the wire toolbar on a phone): with the palette button the toolbar was wider than a phone (about 395 px) and ran off the screen. On a phone the gaps and the lines between the groups are gone (the buttons keep their 40 px), which brings it to about 322 px: one row at 375 px and wider. Under 372 px (360 or 320 wide phones) arrange, paint and straighten fold into one button that shows one of them and does it when pressed, with a small arrow that opens a list to swap which one shows (the same way as the colors and the chips; choosing does not do it). The toolbar never grows past the screen (`max-w-full`). Measured at 375, 360 and 320 px: one row, no sideways scrolling. Test: the fold and the swap
- [x] Round 14 (lab tasks, the former extra 2): a list of tasks with worked solutions inside the lab. A checklist button at the end of the chip tray opens a **drawer** (the same `ui/Drawer.tsx` as the pin diagrams and the results: from the right, from the bottom on a phone, over a blurred page) with 44 tasks under five kinds, one task at a time. A task shows its statement (text, formulas, tables and, for the circuit kind, a gate diagram), a note when only NAND or only NOR may be used, and **one button, "ดูเฉลย"**, which opens the written solution (`Sol`), the answer line (`Ans`), the truth table of the answer, the circuit of the answer as a gate diagram with its gate count, and a button that puts the answer on the boards. The student checks their own circuit by comparing the results drawer (truth table, equations) with the answer. There is no check button, no marks for answered tasks, no choice of switches and LEDs, and no circuit of its own for a task: the boards are the one free circuit. The code is in `src/features/lab/tasks/`.
  - **Tasks are Markdown** in `content/lab-tasks/` (five files = five kinds: large Boolean expression, truth table, SOP or POS expression, large logic circuit, word description; each kind has free, NAND only and NOR only tasks). A task is its statement, a fenced `lab` block (outputs, limit `only: nand|nor`, the asked form `form: sop|pos`, and the function as `m(...)`, `d(...)`, `expr`, `rule` or `figure`), then the solution written by hand in the style of the worked solutions of the chapters: the line `$\mathbf{Sol}^{n}$`, the steps, and one `$\mathbf{Ans}\quad Y = ...$` line for each output. Placeholders (`@table`, `@kmap:Y`, `@expr:Y`, `@sum:Y`, `@prod:Y`) are written by the build from the same data it checks with, so a table or a Karnaugh map in the text cannot be wrong. See `CONTENT-SCHEMA.md` section 12.
  - **What the build checks** (`scripts/build-content/tasks.ts`, `latexExpr.ts`): the block, the XOR and XNOR rule, the figure (larger than the answer), the named gate and form in the statement, and the solution: every `Ans` line is read back from its LaTeX and must do what the task asks (a don't care row takes either value), and every display formula that is a chain of equal formulas of A, B and C (`Y = a = b = c`, `aligned` allowed) must hold in every step; a step that is wrong fails the build. `npm run content` also writes a plain text report `lab-tasks-report.txt` (statement, truth row, answer, gate count and how many chains were checked for every task).
  - **The circuit of the answer** (`tasks/logic.ts`, plain TypeScript shared by the build in Node and by the app): Quine and McCluskey with don't cares, every irredundant cover of the cheapest kind, as a sum of products and as a product of sums (or only the asked form), built in the allowed gates (AND, OR and NOT when no gate is named; NAND only; NOR only) with identical gates built once and double inversions removed; the circuit with the fewest gates is kept. Gates have two inputs (three only in the figure of a task), a NOT is one gate, a NAND or NOR with its inputs tied is one gate, and a gate that two outputs need is counted once. It is drawn with the circuit diagram of the results drawer, which learned gates of three inputs, a name for each output and a drawing without switch numbers for this (`tasks/toNetlist.ts`, `tasks/TaskDiagram.tsx`).
  - **Put the answer on the boards** (`tasks/place.ts`): the chips go in a row (one type after another), each gate on a pin pair, the supply wired from the two sockets through the rails to pins 14 and 7, every signal wired from its source to every place that reads it, A, B and C from switches 1, 2 and 3 and each output to LED 1 (and LED 2); the wires are then bent and colored with the same code as the wand and the palette. It is one undoable step (`replace` in the reducer) that replaces what is on the boards, and the drawer closes so the boards can be looked at.
  - **Layout**: the button adds 44 px to the tray, so the width tiers moved by that much (wire colors in a row from 1706 px, chips from 1446 px, the strip leaves the row under 1236 px). The drawer remembers the task that was open and the kinds unfolded in the list (all folded to start with) while it is closed or a task is open, and nothing about it is saved in the browser.
  - Tests: the logic (expressions, rules, tables, netlists, the smallest circuit in each kind and form, don't cares, shared gates), the reading of formulas from LaTeX and the checks of steps and answers, including a built task that fails for each kind of mistake (`tests/lab-steps.test.ts`), the content as built (five kinds, 44 tasks with steps and answers, every kind of limit, two outputs, don't cares, figures) and the answer of every task put on the boards and run on the real simulator over all eight rows (`tasks/solutions.test.ts`), the reducer action, the diagram of a three input gate, and the drawer through the page (open, list, task, figure, solution, table, put on the boards, undo, focus)
  - Not done on purpose: hints, links from the chapter pages, a difficulty order, a check of a student's circuit (it was built and then removed at the user's request), marks for answered tasks. Still the user's to check: a real phone or touch screen, a screen reader
- [x] Round 15 (exam timer): a countdown of **15 minutes**, fixed (the lab is used for one exam of that length), in the bottom row of the screen next to the warnings button (`ui/ExamTimer.tsx`, `ui/useCountdown.ts`). It shows `m:ss` and has two buttons: start and stop (one button that swaps its icon; after a stop it goes on from the time that was left) and start again (back to 15:00, also while running). It stays on screen when the tools are folded, which matters on a phone, and wraps above the zoom buttons when the row is too narrow (checked at 375 px). The last minute is red, and when the time is out the timer turns red, says "หมดเวลา" and pulses (not with reduced motion); only the reset button works then. It runs on a clock time (`endAt`), so it keeps counting while the tab is hidden, and it is kept in the browser (`localStorage`), so a reload or a visit to another page does not lose the time, and a timer that ran out while the page was away comes back as out of time. A screen reader is told when it starts, stops (with the time) or runs out, never every second. On a phone (under 768 px, `md`) the warnings button leaves the bottom row for the end of the row of the chips while the tools are shown (its list opens under it, lined up with its right edge), so the timer and the zoom buttons share the bottom row; with the tools folded it stays at the top, at the right of the first row. There is no sound. The pin diagram, results and tasks drawers cover it while they are open (it keeps running). Tests: counting, stop and go on, start again, the last minute and the end, the announcements, and the storage (kept, stopped, ran out while away, unreadable text), with fake timers
- [ ] Round 16: further corrections after the user's next review
- [x] Pan and zoom (mouse drag with any button, wheel, Shift and wheel, pinch, one finger, double tap or double click, buttons, keyboard)
- Layout tests (`geometry.test.ts`) keep the proportions from coming apart: no two panels overlap, no panel overlaps a breadboard, the frames share edges and gaps as described in Round 3, buttons are square and evenly spaced, the monitor LED rows line up, the power sockets are evenly spaced
- Exit: the drawing matches the photo, smooth at every zoom level, reviewed against the photo by the user
- Gate

### Phase L3 - Breadboard and wires

- [x] Hole pattern (drawn in L2), hit testing and snap (`board/hitTest.ts`, `wire/target.ts`)
- [x] Wire drawing, colors, curve handle, move an end, delete, undo and redo (`state/circuit.ts`, `canvas/useWireTool.ts`, `canvas/WireLayer.tsx`, `ui/WireToolbar.tsx`)
- [x] Power sockets +5V and GND connected to the simulator: a wire joining them shows the short warning and lights the four short circuit lamps; a wire to a socket that is only drawn (-5V, +12V, -12V) shows a warning
- [x] Tests: hit testing, curves, press and snap rules, circuit reducer with the simulator, and gestures through the page (draw, short, undo, recolor, delete, finger pan, taken hole)
- [x] Checked in the browser pane: mouse draw, bend, recolor, short, undo, key Delete and Ctrl+Z, hover ring, move an end; touch (synthetic events) pan at low zoom, draw at 91%, pinch takeover; phone width toolbar
- [ ] Not checked: a real phone or a real touch screen (the pane has no multi-touch)
- Exit: the user can wire and rewire comfortably on desktop and touch
- Gate

### Phase L4 - ICs, switches, LEDs

- [x] IC tray, drag and drop, snap to the channel, move, remove (`ui/IcTray.tsx`, `canvas/IcLayer.tsx`, `board/geometry.ts`: `icFrame`, `snapIc`, `icSlots`)
- [x] Switch toggle (tap, any zoom; drag pans), monitor LEDs lit by the simulator, press animation on the latched button
- [x] Warnings and hints: short, conflict, loop, supply, no power, floating inputs, as lines and as badges on the chips (`ui/warningMessages.ts`, `sim/notes.ts`)
- [x] Autosave and restore with a validating loader, plus a button that clears the circuit (`state/storage.ts`)
- [x] Wires and chips share one occupancy rule (a hole holds one lead); chip moves, placement and wire drops respect it
- [x] Tests (now 234 in the project): chip placement, move, removal, overlap, wires versus legs, undo and redo with chips, switches outside the history, clearing, the saved text (round trip, garbage, dropped parts, blocked storage), chip geometry and snapping, press targets for chips and switches, warning lines, and the page end to end (tray tap and drag, move and remove a chip, NOT gate with a switch and LED, a drag from a switch pans, the circuit survives a reload, clear and undo, and every row of the truth table of (A AND B) OR C from a saved circuit)
- [x] Checked in the browser pane: placed a 7408 and a 7432 from the tray, wired Y = (A AND B) OR C with nine wires, flipped the switches with real clicks and read LED 1 for all eight rows (matches), reloaded and found the circuit as left, moved a chip, blocked an overlap, dragged a chip off the boards, tapped a switch and dragged from one with touch events, no accessibility violations (axe) with chips and warnings showing, phone width layout
- [ ] Not checked: a real phone or touch screen; the chip drag from the tray with a finger
- Exit: a real lab circuit (for example an AND-OR-NOT expression) works end to end
- Gate

### Phase L5 - Responsive and polish

- [x] Layouts: the tools fold away behind a labelled button (folded on a phone by default), three panels wrap to the width, every button at least 40 px; checked at 375 x 812, 844 x 390, 768 x 1024 and desktop
- [x] Finger magnifier for wires, wire ends, bends and chips (`canvas/Magnifier.tsx`, `canvas/lens.ts`), drawn with `<use>` of the one scene
- [x] Switch and LED strip (`ui/IoPanel.tsx`): try a circuit from anywhere, big targets, keyboard friendly
- [x] Accessibility: roles and names on the toolbar, tray, strip, warnings and status regions; keyboard wiring with a cursor, point names and live announcements; a summary of the circuit for a screen reader; reduced motion; axe finds no violations on desktop with the tools open and the keyboard cursor on (it found a wrong `li role=img`, fixed)
- [x] Performance on a phone sized viewport (375 x 812, software rendered pane, no CPU throttling): about 2,640 DOM nodes (2,460 in the board SVG); a one finger pan about 10 ms per frame (p95 14 ms); wheel zoom about 35 ms per frame (p95 69 ms) while the idle frame was 26 ms in that pane, so zoom costs about 10 ms of work per frame; JavaScript for a zoom event about 5 ms. Pan is smooth; zoom is acceptable, not great. A real mid-range phone is not measured
- [x] Offline: `LabPage` (24 KB gzip) is in the service worker precache (71 entries); the circuit lives in `localStorage`, which works offline. The heaviest route stays far under the 300 KB budget. The pane blocks service workers, so a real offline run is still the user's (`TESTING.md` section 6)
- [x] Tests (264 in the project): lens placement, keyboard cursor movement over every point, point names, the strip, and the page (magnifier for a finger and not a mouse, tools fold and start folded on a phone, strip and board in step, keyboard wiring end to end including cancel and a taken point, arrows pan when the cursor is off, screen reader summary)
- [ ] Not checked: a real phone or touch screen (pinch, magnifier under a real finger, tray drag by finger), a screen reader, real offline use
- Exit: usable on all three screen sizes, gates pass (prettier, lint, typecheck, test, build)
- Gate

### Phase L6 - Extras

- [x] Truth table builder (section 6, extra 1): built, then removed in Round 5 (`sim/truth.ts`, `ui/TruthTablePanel.tsx` and the reducer action `setSwitches` are gone)
- [x] Tests (now 292 in the project): the engine on (A AND B) OR C and on XOR made from the four NAND gates of one 7400 (Σm(1, 2)), column order and bit order, switches that are not inputs, bad and duplicate choices, the faults (short, conflict, a loop), the helpers (connected switches and LEDs, term text, spreadsheet text), and the panel through the page (chosen at the start, every row, set the switches from a row, follow the switches, take an input or output away, short warning, copy, hint and close)
- [x] Checked in the browser pane: XOR from four NAND gates wired on the board gives Σm(1, 2) and ΠM(0, 3); a row sets the switches and lights LED 1; the panel at desktop width and at 375 px; no accessibility violations (axe) with the panel open
- [ ] Not done, waiting for the user's pick: extra 3 (save several circuits, export an image), extra 4 (hint overlay of the pin names of a chip: pin numbers already show once zoomed in)
- Gate

## 10. Risks

| Risk | Answer |
|---|---|
| The drawing differs from the real board | Draw from the user's photo only, review side by side in L2, keep all numbers in data so a correction is one edit |
| Hole counts and socket positions wrong | They are flagged estimates; a close, straight-on photo of each area replaces them |
| Touch is hard because holes are small | Generous snap radius, magnifier while dragging, easy zoom |
| Performance with thousands of holes | Pattern plus math hit testing, no per-hole elements |
| Wires cross and become unreadable | Draggable curve handle, color choice, selection highlight |
| Students confuse the simulator rules with the real lab | Strict power by default, warnings that explain what is wrong |
