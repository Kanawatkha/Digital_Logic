import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { UI_TEXT } from '@/config/site';
import { NAVBAR_SLOT_ID } from '@/lib/navbarSlot';
import { BoardArt } from './board/BoardArt';
import { icSlots } from './board/geometry';
import { BOARD_SIZE } from './board/layout';
import type { WireColor } from './board/palette';
import { IcLayer } from './canvas/IcLayer';
import { SCENE_ID } from './canvas/lens';
import { Magnifier } from './canvas/Magnifier';
import { useKeyboardWiring } from './canvas/useKeyboardWiring';
import { useViewport } from './canvas/useViewport';
import { useWireTool } from './canvas/useWireTool';
import { ViewButtons } from './canvas/ViewButtons';
import { WireLayer } from './canvas/WireLayer';
import { simulate } from './sim/evaluate';
import { IC_TYPES, type IcType } from './sim/ics';
import { icNotes } from './sim/notes';
import { circuitReducer, findFreeSlot } from './state/circuit';
import { loadCircuit, saveCircuit } from './state/storage';
import { IcDiagramDrawer } from './ui/IcDiagramDrawer';
import { IcTray } from './ui/IcTray';
import { ResultsDrawer } from './ui/ResultsDrawer';
import { IoPanel } from './ui/IoPanel';
import { describePoint } from './ui/pointName';
import { ToolsToggle } from './ui/ToolsToggle';
import { useMinWidth } from './ui/useMinWidth';
import { usePresence } from './ui/usePresence';
import { Warnings } from './ui/Warnings';
import { WireToolbar } from './ui/WireToolbar';
import { arrangeWires } from './wire/arrange';
import { recolorWires } from './wire/recolor';
import { isStraight, type Bend } from './wire/curve';

const TOOLS_ID = 'lab-tools';

/**
 * Window widths at which the tools change shape. From `COLORS_IN_ROW_MIN` every wire color and chip
 * is in the one row; below it the colors, then (under `CHIPS_IN_ROW_MIN`) the chips fold into one
 * button each. Under `ONE_ROW_MIN` not even that fits with the switch and LED strip, which never
 * shrinks: the strip moves to the bottom of the screen and the tools button to the navbar. Under
 * `WIDE_STRIP_MIN` the strip itself stacks its LEDs under the switches.
 */
const COLORS_IN_ROW_MIN = 1660;
const CHIPS_IN_ROW_MIN = 1400;
const ONE_ROW_MIN = 1190;
const WIDE_STRIP_MIN = 560;

/**
 * On a phone (narrow, or short because it is turned sideways) the tools start folded away, to leave
 * room for the board; the button that opens them says what it is.
 */
const startsOpen = () =>
  typeof window === 'undefined' ||
  !window.matchMedia?.('(max-width: 767px), (max-height: 500px)')?.matches;

/** The whole NX-4i board in a canvas that fills the screen under the navbar and pans and zooms freely. */
export function LabBoard() {
  // the viewport asks the wire tool which presses are its own, and the keyboard wiring which keys;
  // both need the viewport's coordinates, so the links go through refs
  const claims = useRef<(event: PointerEvent) => boolean>(() => false);
  const shouldPan = useCallback((event: PointerEvent) => !claims.current(event), []);
  const claimsKey = useRef<(event: KeyboardEvent['nativeEvent']) => boolean>(() => false);
  const claimKey = useCallback((event: globalThis.KeyboardEvent) => claimsKey.current(event), []);
  const {
    containerRef,
    groupRef,
    zoomIn,
    zoomOut,
    fit,
    actualSize,
    percent,
    toBoard,
    getScale,
    adoptPointer,
    panIntoView,
  } = useViewport({ content: BOARD_SIZE, shouldPan, claimKey });

  const [circuit, dispatch] = useReducer(circuitReducer, undefined, () => loadCircuit());
  const { wires, ics, switches } = circuit;
  const [color, setColor] = useState<WireColor>('red');
  const [toolsOpen, setToolsOpen] = useState(startsOpen);
  const tools = usePresence(toolsOpen, 180);
  const roomyForColors = useMinWidth(COLORS_IN_ROW_MIN);
  const roomyForChips = useMinWidth(CHIPS_IN_ROW_MIN);
  const [diagramsOpen, setDiagramsOpen] = useState(false);
  const [glide, setGlide] = useState<{ from: ReadonlyMap<string, Bend>; id: number } | null>(null);
  const diagramsButton = useRef<HTMLButtonElement>(null);
  const [resultsOpen, setResultsOpen] = useState(false);
  const resultsButton = useRef<HTMLButtonElement>(null);
  const oneRow = useMinWidth(ONE_ROW_MIN);
  const wideStrip = useMinWidth(WIDE_STRIP_MIN);
  const tool = useWireTool({
    containerRef,
    toBoard,
    getScale,
    adoptPointer,
    state: circuit,
    dispatch,
    color,
  });
  const keyboard = useKeyboardWiring({
    containerRef,
    toBoard,
    panIntoView,
    state: circuit,
    dispatch,
    color,
  });
  useEffect(() => {
    claims.current = tool.claims;
  }, [tool.claims]);
  useEffect(() => {
    claimsKey.current = keyboard.claimKey;
  }, [keyboard.claimKey]);

  // the circuit is kept in the browser, so a reload or a later visit finds it as it was left
  useEffect(() => {
    saveCircuit({ wires, ics, switches });
  }, [wires, ics, switches]);

  const live = useMemo(() => ({ wires, ics, switches }), [wires, ics, switches]);
  const result = useMemo(() => simulate(live), [live]);
  const notes = useMemo(() => icNotes(result.warnings), [result.warnings]);
  const selectedWire = wires.find((wire) => wire.id === circuit.selected);
  const selectedIc = ics.find((ic) => ic.id === circuit.selected);
  const hasSelection = circuit.selected !== null;

  /** What a screen reader hears when the circuit changes: how much there is, and what is selected. */
  const summary = useMemo(() => {
    const counts =
      wires.length + ics.length === 0
        ? UI_TEXT.labSummaryNone
        : `${wires.length} ${UI_TEXT.labSummaryWires}, ${ics.length} ${UI_TEXT.labSummaryChips}`;
    const picked = selectedWire
      ? `${UI_TEXT.labKbSelected}${UI_TEXT.labKbWire} ${UI_TEXT.labWireColors[selectedWire.color]} ${describePoint(selectedWire.from)} - ${describePoint(selectedWire.to)}`
      : selectedIc
        ? `${UI_TEXT.labKbSelected}${UI_TEXT.labKbChip} ${selectedIc.type}`
        : '';
    return picked ? `${counts}. ${picked}` : counts;
  }, [wires.length, ics.length, selectedWire, selectedIc]);

  const pickColor = (next: WireColor) => {
    setColor(next);
    if (selectedWire) dispatch({ type: 'recolor', id: selectedWire.id, color: next });
  };

  /** Puts a chip on the free place nearest the middle of what is on screen. */
  const placeChip = (icType: IcType) => {
    const rect = containerRef.current?.getBoundingClientRect();
    const middle = toBoard(
      (rect?.left ?? 0) + (rect?.width ?? 0) / 2,
      (rect?.top ?? 0) + (rect?.height ?? 0) / 2,
    );
    const slot = findFreeSlot(wires, ics, icSlots(), middle);
    if (slot) dispatch({ type: 'placeIc', icType, ...slot });
  };

  /** Bends every wire so none lies on another or on a chip; the wires glide to their new shape. */
  const arrange = () => {
    const from = new Map(wires.map((wire) => [wire.id, wire.bend]));
    dispatch({ type: 'arrange', bends: arrangeWires(wires, ics) });
    setGlide((was) => ({ from, id: (was?.id ?? 0) + 1 }));
  };

  /** Colors every wire by what it carries: GND black, +5V red, each other signal its own color. */
  const paint = () => dispatch({ type: 'paint', colors: recolorWires(wires) });

  const removeSelected = () => {
    if (circuit.selected) dispatch({ type: 'remove', id: circuit.selected });
  };

  const onKeyDown = (event: KeyboardEvent) => {
    // a drawer has the keys while it is open
    if (diagramsOpen || resultsOpen) return;
    if (event.ctrlKey || event.metaKey) {
      const key = event.key.toLowerCase();
      if (key === 'z') dispatch({ type: event.shiftKey ? 'redo' : 'undo' });
      else if (key === 'y') dispatch({ type: 'redo' });
      else return;
      event.preventDefault();
    } else if ((event.key === 'Delete' || event.key === 'Backspace') && hasSelection) {
      removeSelected();
      event.preventDefault();
    } else if (event.key === 'Escape') {
      tool.cancel();
      dispatch({ type: 'select', id: null });
    }
  };

  const onBoard = useMemo(() => {
    const counts = Object.fromEntries(IC_TYPES.map((type) => [type, 0])) as Record<IcType, number>;
    for (const ic of ics) counts[ic.type] += 1;
    return counts;
  }, [ics]);
  const closeResults = useCallback(() => {
    setResultsOpen(false);
    resultsButton.current?.focus();
  }, []);
  const closeDiagrams = useCallback(() => {
    setDiagramsOpen(false);
    diagramsButton.current?.focus();
  }, []);

  /** The switch and LED strip: in the row of tools, or in the dock at the bottom */
  const strip = (
    <IoPanel
      switches={switches}
      leds={result.leds}
      stacked={!wideStrip}
      onToggle={(index) => dispatch({ type: 'toggleSwitch', index })}
    />
  );
  // on a narrow window the tools button lives in the navbar (when this page has one)
  const toggleSlot = oneRow ? null : document.getElementById(NAVBAR_SLOT_ID);
  const toggle = (variant: 'floating' | 'header') => (
    <ToolsToggle
      variant={variant}
      open={toolsOpen}
      controls={tools.shown ? TOOLS_ID : undefined}
      onToggle={() => setToolsOpen((open) => !open)}
    />
  );

  const { preview, hover, finger } = tool;
  const cursor =
    preview?.kind === 'ic'
      ? 'grabbing'
      : preview
        ? 'crosshair'
        : hover?.mode === 'new'
          ? 'crosshair'
          : hover?.key.startsWith('ic:')
            ? 'move'
            : hover
              ? 'pointer'
              : undefined;

  return (
    <div
      className="relative h-[calc(100dvh-var(--spacing-nav)-1px)] w-full overflow-hidden bg-surface-soft"
      onKeyDown={onKeyDown}
    >
      <div
        ref={containerRef}
        tabIndex={0}
        role="application"
        aria-label={`${UI_TEXT.labBoard}. ${UI_TEXT.labHint}`}
        style={{ cursor }}
        className="absolute inset-0 cursor-grab touch-none outline-none select-none active:cursor-grabbing focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink"
      >
        <svg width="100%" height="100%" className="block" aria-hidden="true">
          <g ref={groupRef}>
            <g id={SCENE_ID}>
              <BoardArt ledsLit={result.leds} switchesUp={switches} short={result.short} />
              <IcLayer
                ics={ics}
                selected={circuit.selected}
                notes={notes}
                preview={preview}
                scale={percent / 100}
              />
              <WireLayer
                wires={wires}
                selected={circuit.selected}
                preview={preview}
                hover={hover}
                scale={percent / 100}
                color={color}
                keyboard={keyboard.cursor}
                glide={glide}
              />
            </g>
          </g>
        </svg>
      </div>

      {finger && preview ? (
        <Magnifier
          finger={finger.at}
          canvas={finger.canvas}
          board={finger.board}
          scale={finger.scale}
        />
      ) : null}

      {/* the empty space around the tools lets presses through, so the board can be dragged there */}
      <div className="pointer-events-none absolute top-3 left-3 flex max-w-[calc(100%-1.5rem)] items-start gap-2 md:top-4 md:left-4">
        {toggleSlot ? createPortal(toggle('header'), toggleSlot) : toggle('floating')}
        {tools.shown ? (
          <div id={TOOLS_ID} className="flex max-w-full min-w-0 flex-wrap items-center gap-2">
            <div
              className="lab-slide pointer-events-auto"
              data-state={tools.state}
              style={{ '--i': 0 } as CSSProperties}
            >
              <WireToolbar
                color={selectedWire?.color ?? color}
                onColor={pickColor}
                compact={!roomyForColors}
                canUndo={circuit.past.length > 0}
                canRedo={circuit.future.length > 0}
                hasSelection={hasSelection}
                canStraighten={selectedWire !== undefined && !isStraight(selectedWire.bend)}
                onUndo={() => dispatch({ type: 'undo' })}
                onRedo={() => dispatch({ type: 'redo' })}
                onDelete={removeSelected}
                onStraighten={() =>
                  selectedWire &&
                  dispatch({ type: 'bend', id: selectedWire.id, bend: { x: 0, y: 0 } })
                }
                canArrange={wires.length > 0}
                onArrange={arrange}
                canPaint={wires.length > 0}
                onPaint={paint}
                canClear={wires.length > 0 || ics.length > 0}
                onClear={() => dispatch({ type: 'clear' })}
              />
            </div>
            <div
              className="lab-slide pointer-events-auto"
              data-state={tools.state}
              style={{ '--i': 1 } as CSSProperties}
            >
              <IcTray
                compact={!roomyForChips}
                onOpenDiagrams={() => setDiagramsOpen(true)}
                diagramsRef={diagramsButton}
                onOpenResults={() => setResultsOpen(true)}
                resultsRef={resultsButton}
                onPlace={placeChip}
                onDragStart={tool.startTrayDrag}
              />
            </div>
            {oneRow ? (
              <div
                className="lab-slide pointer-events-auto"
                data-state={tools.state}
                style={{ '--i': 2 } as CSSProperties}
              >
                {strip}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      {/* the bottom of the screen: the keyboard hint, the warnings, the zoom buttons, and, on a window too narrow for one row, the switches and LEDs */}
      <div className="pointer-events-none absolute inset-x-3 bottom-3 flex flex-col gap-2 md:inset-x-4 md:bottom-4">
        <p
          role="status"
          aria-live="polite"
          aria-label={UI_TEXT.labKbStatus}
          className={
            keyboard.cursor
              ? 'type-nav mx-auto w-fit max-w-full rounded-md bg-surface-dark px-3 py-2 text-on-dark'
              : 'sr-only'
          }
        >
          {keyboard.message}
        </p>
        {!oneRow && tools.shown ? (
          <div className="lab-dock pointer-events-auto self-center" data-state={tools.state}>
            {strip}
          </div>
        ) : null}
        <div className="flex items-end justify-between gap-2">
          <Warnings warnings={result.warnings} ics={ics} />
          <ViewButtons
            percent={percent}
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
            onFit={fit}
            onActualSize={actualSize}
          />
        </div>
      </div>
      <ResultsDrawer open={resultsOpen} onClose={closeResults} circuit={live} />
      <IcDiagramDrawer open={diagramsOpen} onClose={closeDiagrams} onBoard={onBoard} />
      <p role="status" aria-live="polite" aria-label={UI_TEXT.labSummary} className="sr-only">
        {summary}
      </p>
    </div>
  );
}
