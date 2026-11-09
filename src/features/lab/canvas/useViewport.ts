import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  actualSizeView,
  fitView,
  panBy,
  pinchView,
  wheelFactor,
  zoomAt,
  type Point,
  type Size,
  type View,
} from './viewMath';

/** A press that moves less than this (px) is a tap, not a drag. */
const TAP_SLOP = 6;
/** Two taps this close in time (ms) and place (px) zoom in. */
const DOUBLE_TAP_MS = 320;
const DOUBLE_TAP_PX = 28;
const BUTTON_ZOOM = 1.45;
const KEY_PAN = 80;
const ANIMATION_MS = 240;

type Options = {
  /** The board's size, which the "fit" view and "100%" view are based on. */
  content: Size;
  /**
   * Whether a press at this event should pan the board. A press that answers false belongs to
   * something else (drawing a wire); the viewport leaves it alone unless a second finger joins.
   */
  shouldPan?: (event: PointerEvent) => boolean;
  /** Whether something else takes a key (keyboard wiring uses the arrows); the viewport then ignores it. */
  claimKey?: (event: KeyboardEvent) => boolean;
};

/** How far from the edge of the canvas (px) a point is kept when it is brought into view. */
const VIEW_MARGIN = 72;

type Gesture =
  | { mode: 'none' }
  | { mode: 'pan'; id: number; start: Point; view: View; moved: boolean }
  | { mode: 'pinch'; ids: [number, number]; view: View; fingers: [Point, Point] };

const easeOut = (t: number) => 1 - (1 - t) ** 3;

/**
 * Free pan and zoom of a canvas, driven by pointer events, with no limit at the edge of the screen:
 *
 * - mouse: drag with any button to pan, wheel (or Ctrl and wheel) to zoom toward the pointer,
 *   Shift and wheel to pan sideways, double click to zoom in
 * - touch: one finger pans, two fingers pan and pinch, double tap zooms in
 * - keyboard: arrows pan, + and - zoom, 0 fits the board, 1 shows it at 100%
 *
 * The transform is written straight to the group element, so panning never re-renders React.
 */
export function useViewport({ content, shouldPan, claimKey }: Options) {
  const containerRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<SVGGElement>(null);
  const view = useRef<View>({ x: 0, y: 0, scale: 1 });
  const touched = useRef(false);
  const animation = useRef(0);
  const frame = useRef(0);
  const panFilter = useRef(shouldPan);
  const keyClaim = useRef(claimKey);
  const [percent, setPercent] = useState(100);

  useEffect(() => {
    panFilter.current = shouldPan;
    keyClaim.current = claimKey;
  }, [shouldPan, claimKey]);

  const apply = useCallback((next: View) => {
    view.current = next;
    groupRef.current?.setAttribute(
      'transform',
      `translate(${next.x} ${next.y}) scale(${next.scale})`,
    );
    if (!frame.current) {
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        setPercent(Math.round(view.current.scale * 100));
      });
    }
  }, []);

  const canvasSize = useCallback((): Size => {
    const rect = containerRef.current?.getBoundingClientRect();
    return { width: rect?.width ?? 0, height: rect?.height ?? 0 };
  }, []);

  const stopAnimation = useCallback(() => {
    cancelAnimationFrame(animation.current);
    animation.current = 0;
  }, []);

  /** Moves to a view, gliding unless the page is hidden or the person prefers no motion. */
  const goTo = useCallback(
    (target: View) => {
      stopAnimation();
      const from = view.current;
      const instant =
        document.visibilityState === 'hidden' ||
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      if (instant) {
        apply(target);
        return;
      }
      // the clock is the one the frames report, taken from the first frame
      let start = -1;
      const step = (now: number) => {
        if (start < 0) start = now;
        const t = Math.min(1, Math.max(0, (now - start) / ANIMATION_MS));
        const e = easeOut(t);
        apply({
          x: from.x + (target.x - from.x) * e,
          y: from.y + (target.y - from.y) * e,
          scale: from.scale * (target.scale / from.scale) ** e,
        });
        animation.current = t < 1 ? requestAnimationFrame(step) : 0;
      };
      animation.current = requestAnimationFrame(step);
    },
    [apply, stopAnimation],
  );

  /** A point on the screen as a point of the board (board px). */
  const toBoard = useCallback((clientX: number, clientY: number): Point => {
    const rect = containerRef.current?.getBoundingClientRect();
    const { x, y, scale } = view.current;
    return {
      x: (clientX - (rect?.left ?? 0) - x) / scale,
      y: (clientY - (rect?.top ?? 0) - y) / scale,
    };
  }, []);

  const getScale = useCallback(() => view.current.scale, []);

  /** Pans the board, if it has to, so that a board point is on screen with some room around it. */
  const panIntoView = useCallback(
    (point: Point) => {
      const { x, y, scale } = view.current;
      const size = canvasSize();
      const margin = Math.min(VIEW_MARGIN, size.width / 3, size.height / 3);
      const sx = x + point.x * scale;
      const sy = y + point.y * scale;
      const dx =
        sx < margin ? margin - sx : sx > size.width - margin ? size.width - margin - sx : 0;
      const dy =
        sy < margin ? margin - sy : sy > size.height - margin ? size.height - margin - sy : 0;
      if (dx === 0 && dy === 0) return;
      touched.current = true;
      goTo(panBy(view.current, dx, dy));
    },
    [canvasSize, goTo],
  );

  /** Lets the effect below hand a pointer that something else claimed over to the viewport. */
  const adopt = useRef<(pointerId: number) => void>(() => {});
  /**
   * Turns a press that was claimed by something else (and answered false to `shouldPan`) into a pan
   * from where the pointer is now, for a press that turned out to be a drag.
   */
  const adoptPointer = useCallback((pointerId: number) => adopt.current(pointerId), []);

  const zoomBy = useCallback(
    (factor: number) => {
      touched.current = true;
      const size = canvasSize();
      goTo(zoomAt(view.current, factor, size.width / 2, size.height / 2));
    },
    [canvasSize, goTo],
  );
  const zoomIn = useCallback(() => zoomBy(BUTTON_ZOOM), [zoomBy]);
  const zoomOut = useCallback(() => zoomBy(1 / BUTTON_ZOOM), [zoomBy]);
  const fit = useCallback(() => {
    touched.current = false;
    goTo(fitView(canvasSize(), content));
  }, [canvasSize, content, goTo]);
  const actualSize = useCallback(() => {
    touched.current = true;
    goTo(actualSizeView(canvasSize(), content));
  }, [canvasSize, content, goTo]);

  // first fit, and again on resize until the person has moved the board themselves
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    apply(fitView(canvasSize(), content));
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(() => {
      if (!touched.current) apply(fitView(canvasSize(), content));
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, [apply, canvasSize, content]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const fingers = new Map<number, Point>();
    /** Pointers a wire gesture owns. A second finger takes them over to start a pinch. */
    const foreign = new Map<number, Point>();
    let gesture: Gesture = { mode: 'none' };
    let lastTap = { time: 0, x: 0, y: 0 };
    let dragged = false;

    const local = (event: { clientX: number; clientY: number }): Point => {
      const rect = container.getBoundingClientRect();
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };

    const startPan = (id: number, at: Point) => {
      gesture = { mode: 'pan', id, start: at, view: view.current, moved: false };
    };

    adopt.current = (pointerId) => {
      const at = foreign.get(pointerId);
      if (!at) return;
      foreign.delete(pointerId);
      fingers.set(pointerId, at);
      try {
        container.setPointerCapture(pointerId);
      } catch {
        // the pointer is already gone: the pan still works without capture
      }
      dragged = false;
      startPan(pointerId, at);
    };

    const onDown = (event: PointerEvent) => {
      if (event.pointerType === 'mouse' && event.button > 2) return;
      const at = local(event);
      if (event.pointerType === 'mouse') foreign.clear();
      if (fingers.size === 0 && panFilter.current && !panFilter.current(event)) {
        // something else (a wire gesture) owns this pointer; keep track of it in case a second
        // finger turns the gesture into a pinch
        foreign.set(event.pointerId, at);
        return;
      }
      for (const [id, position] of foreign) fingers.set(id, position);
      foreign.clear();
      stopAnimation();
      try {
        container.setPointerCapture(event.pointerId);
      } catch {
        // the pointer is already gone: the gesture still works without capture
      }
      fingers.set(event.pointerId, at);
      if (fingers.size === 1) {
        dragged = false;
        startPan(event.pointerId, at);
      } else if (fingers.size === 2) {
        const [a, b] = [...fingers.entries()];
        if (a && b) {
          gesture = { mode: 'pinch', ids: [a[0], b[0]], view: view.current, fingers: [a[1], b[1]] };
          dragged = true;
        }
      }
    };

    const onMove = (event: PointerEvent) => {
      if (foreign.has(event.pointerId)) foreign.set(event.pointerId, local(event));
      if (!fingers.has(event.pointerId)) return;
      const at = local(event);
      fingers.set(event.pointerId, at);
      if (gesture.mode === 'pan' && gesture.id === event.pointerId) {
        const dx = at.x - gesture.start.x;
        const dy = at.y - gesture.start.y;
        if (!gesture.moved && Math.hypot(dx, dy) < TAP_SLOP) return;
        gesture.moved = true;
        dragged = true;
        touched.current = true;
        apply(panBy(gesture.view, dx, dy));
      } else if (gesture.mode === 'pinch') {
        const a = fingers.get(gesture.ids[0]);
        const b = fingers.get(gesture.ids[1]);
        if (a && b) {
          touched.current = true;
          apply(pinchView(gesture.view, gesture.fingers, [a, b]));
        }
      }
    };

    const onUp = (event: PointerEvent) => {
      foreign.delete(event.pointerId);
      if (!fingers.has(event.pointerId)) return;
      const at = local(event);
      const wasTap = gesture.mode === 'pan' && !gesture.moved && !dragged;
      fingers.delete(event.pointerId);
      if (container.hasPointerCapture(event.pointerId)) {
        container.releasePointerCapture(event.pointerId);
      }
      if (fingers.size === 0) {
        gesture = { mode: 'none' };
        if (wasTap) {
          const now = performance.now();
          if (
            now - lastTap.time < DOUBLE_TAP_MS &&
            Math.hypot(at.x - lastTap.x, at.y - lastTap.y) < DOUBLE_TAP_PX
          ) {
            touched.current = true;
            goTo(zoomAt(view.current, 2, at.x, at.y));
            lastTap = { time: 0, x: 0, y: 0 };
          } else {
            lastTap = { time: now, x: at.x, y: at.y };
          }
        }
      } else if (fingers.size === 1) {
        // back to one finger: keep panning from where it is now
        const [only] = [...fingers.entries()];
        if (only) startPan(only[0], only[1]);
      }
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      stopAnimation();
      touched.current = true;
      if (event.shiftKey && !event.ctrlKey) {
        apply(panBy(view.current, -event.deltaY - event.deltaX, 0));
        return;
      }
      const at = local(event);
      apply(
        zoomAt(view.current, wheelFactor(event.deltaY, event.deltaMode, event.ctrlKey), at.x, at.y),
      );
    };

    const onContextMenu = (event: MouseEvent) => {
      // a right-button drag pans, so it must not end with the browser menu
      if (dragged) event.preventDefault();
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (keyClaim.current?.(event)) return;
      // by the place of the key as well as the letter it prints, so the keys work on a Thai layout;
      // 1 to 8 belong to the switches, so the real size is Shift and 0
      const { key, code } = event;
      const fitKey = (code === 'Digit0' || code === 'Numpad0' || key === '0') && !event.shiftKey;
      const sizeKey = (code === 'Digit0' || code === 'Numpad0') && event.shiftKey;
      if (key === '+' || key === '=' || code === 'Equal' || code === 'NumpadAdd') {
        zoomBy(BUTTON_ZOOM);
      } else if (key === '-' || key === '_' || code === 'Minus' || code === 'NumpadSubtract') {
        zoomBy(1 / BUTTON_ZOOM);
      } else if (fitKey) fit();
      else if (sizeKey) actualSize();
      else if (key === 'ArrowLeft') goTo(panBy(view.current, KEY_PAN, 0));
      else if (key === 'ArrowRight') goTo(panBy(view.current, -KEY_PAN, 0));
      else if (key === 'ArrowUp') goTo(panBy(view.current, 0, KEY_PAN));
      else if (key === 'ArrowDown') goTo(panBy(view.current, 0, -KEY_PAN));
      else return;
      touched.current = !fitKey;
      event.preventDefault();
    };

    container.addEventListener('pointerdown', onDown);
    container.addEventListener('pointermove', onMove);
    container.addEventListener('pointerup', onUp);
    container.addEventListener('pointercancel', onUp);
    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('contextmenu', onContextMenu);
    container.addEventListener('keydown', onKey);
    return () => {
      container.removeEventListener('pointerdown', onDown);
      container.removeEventListener('pointermove', onMove);
      container.removeEventListener('pointerup', onUp);
      container.removeEventListener('pointercancel', onUp);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('contextmenu', onContextMenu);
      container.removeEventListener('keydown', onKey);
      adopt.current = () => {};
      stopAnimation();
      cancelAnimationFrame(frame.current);
      frame.current = 0;
    };
  }, [actualSize, apply, fit, goTo, stopAnimation, zoomBy]);

  return {
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
  };
}
