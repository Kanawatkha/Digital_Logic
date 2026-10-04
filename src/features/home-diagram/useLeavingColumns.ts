import { useCallback, useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';
import { flushSync } from 'react-dom';
import type { Column } from './model';

/** Length of the close animation, UI-SPEC.md section 4.4. */
export const LEAVE_MS = 200;
/** The canvas keeps its old width this long so the sideways scroll can glide back instead of jumping. */
const HOLD_MS = 420;

export type LeavingColumn = {
  token: number;
  column: Column;
  left: number;
  top: number;
  width: number;
};

export type CanvasSize = { width: number; height: number };

export type ColumnBox = { left: number; top: number; width: number; canvas: CanvasSize };

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Keeps a column that was just closed on screen for a moment so it can play its exit animation.
 * The copy is positioned absolutely where the column was, so the live layout is already final.
 */
export function useLeavingColumns(
  scrollRef: RefObject<HTMLDivElement | null>,
  canvasRef: RefObject<HTMLDivElement | null>,
) {
  const [leaving, setLeaving] = useState<LeavingColumn[]>([]);
  const lastSize = useRef<CanvasSize>({ width: 0, height: 0 });
  const nextToken = useRef(0);
  const heldHeight = useRef(0);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Size of the canvas as of the previous commit; read while a column is being removed.
  useLayoutEffect(() => {
    lastSize.current = {
      width: canvasRef.current?.offsetWidth ?? 0,
      height: canvasRef.current?.offsetHeight ?? 0,
    };
  });

  /** Canvas size as of the previous commit. Must be read while the column is being removed. */
  const readCanvasSize = useCallback(() => lastSize.current, []);

  const onLeave = useCallback(
    (column: Column, { canvas: size, ...box }: ColumnBox) => {
      if (prefersReducedMotion()) return;
      const canvas = canvasRef.current;
      if (canvas) {
        // the canvas keeps its old size for a moment, so the page does not shrink under the animation
        canvas.style.minWidth = `${size.width}px`;
        canvas.style.minHeight = `${size.height}px`;
        heldHeight.current = size.height;
        clearTimeout(holdTimer.current);
        holdTimer.current = setTimeout(() => {
          canvas.style.minWidth = '';
          canvas.style.minHeight = '';
          heldHeight.current = 0;
        }, HOLD_MS);
      }
      const token = nextToken.current++;
      // flushed at once: a render left to the scheduler would show an empty frame before the copy
      flushSync(() => setLeaving((list) => [...list, { token, column, ...box }]));
      setTimeout(
        () => setLeaving((list) => list.filter((item) => item.token !== token)),
        LEAVE_MS + 20,
      );
    },
    [canvasRef],
  );

  // While the old width is held, scroll back to where the shorter canvas will end.
  useEffect(() => {
    const scroller = scrollRef.current;
    const canvas = canvasRef.current;
    if (leaving.length === 0 || !scroller || !canvas) return;
    let right = 0;
    canvas.querySelectorAll<HTMLElement>('[data-col]').forEach((el) => {
      right = Math.max(right, el.offsetLeft + el.offsetWidth);
    });
    const contentWidth = right + parseFloat(getComputedStyle(canvas).paddingRight);
    const max = Math.max(0, contentWidth - scroller.clientWidth);
    if (scroller.scrollLeft > max) scroller.scrollTo({ left: max, behavior: 'smooth' });

    // same for the page: glide up instead of being clamped when the canvas gets shorter
    let bottom = 0;
    canvas.querySelectorAll<HTMLElement>('[data-col]').forEach((el) => {
      bottom = Math.max(bottom, el.offsetTop + el.offsetHeight);
    });
    const shrink = heldHeight.current - bottom;
    if (shrink > 0) {
      const maxY = document.documentElement.scrollHeight - shrink - window.innerHeight;
      if (window.scrollY > maxY) window.scrollTo({ top: Math.max(0, maxY), behavior: 'smooth' });
    }
  }, [leaving.length, scrollRef, canvasRef]);

  useEffect(() => () => clearTimeout(holdTimer.current), []);

  return { leaving, onLeave, readCanvasSize };
}
