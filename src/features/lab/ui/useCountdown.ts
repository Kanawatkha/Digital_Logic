import { useCallback, useEffect, useState } from 'react';

/** The time of the exam, in seconds. It is fixed: the lab is used for one exam of 15 minutes. */
export const TIMER_SECONDS = 15 * 60;
const TOTAL_MS = TIMER_SECONDS * 1000;

/** Where the timer is kept in the browser, so a reload or a visit to another page does not lose the time. */
export const TIMER_KEY = 'digital-logic-lab-timer';

/**
 * What the timer is: when it is running, the moment it ends (`endAt`, a clock time, so it keeps
 * counting while the page is hidden or closed); when it is not, the time that is left.
 */
type Saved = { remainingMs: number; endAt: number | null };

const FULL: Saved = { remainingMs: TOTAL_MS, endAt: null };

function browserStorage(): Storage | null {
  try {
    return typeof window === 'undefined' ? null : window.localStorage;
  } catch {
    return null;
  }
}

/** The saved timer. Anything in the storage that is not a timer is ignored. */
export function loadTimer(storage: Storage | null = browserStorage()): Saved {
  try {
    const data: unknown = JSON.parse(storage?.getItem(TIMER_KEY) ?? 'null');
    if (typeof data !== 'object' || data === null) return FULL;
    const { remainingMs, endAt } = data as Record<string, unknown>;
    if (typeof remainingMs !== 'number' || !Number.isFinite(remainingMs)) return FULL;
    if (endAt === null || endAt === undefined) {
      return { remainingMs: Math.min(TOTAL_MS, Math.max(0, remainingMs)), endAt: null };
    }
    if (typeof endAt !== 'number' || !Number.isFinite(endAt)) return FULL;
    // it ran out while the page was away
    return endAt <= Date.now() ? { remainingMs: 0, endAt: null } : { remainingMs, endAt };
  } catch {
    return FULL;
  }
}

function saveTimer(timer: Saved, storage: Storage | null = browserStorage()): void {
  try {
    if (timer.endAt === null && timer.remainingMs === TOTAL_MS) storage?.removeItem(TIMER_KEY);
    else storage?.setItem(TIMER_KEY, JSON.stringify(timer));
  } catch {
    // storage is full or blocked: the timer works for this visit only
  }
}

export type Countdown = {
  /** Whole seconds left, rounded up, so it shows 0:00 only when the time is out */
  seconds: number;
  running: boolean;
  /** The time ran out */
  finished: boolean;
  /** Nothing has been started, or it was started again from the full time */
  untouched: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
};

/** A countdown of `TIMER_SECONDS` that can be started, stopped and started again from the full time. */
export function useCountdown(): Countdown {
  const [timer, setTimer] = useState<Saved>(loadTimer);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    saveTimer(timer);
  }, [timer]);

  const endAt = timer.endAt;
  useEffect(() => {
    if (endAt === null) return;
    const tick = window.setInterval(() => {
      const at = Date.now();
      setNow(at);
      if (at >= endAt) setTimer({ remainingMs: 0, endAt: null });
    }, 250);
    return () => window.clearInterval(tick);
  }, [endAt]);

  const left = endAt === null ? timer.remainingMs : Math.max(0, endAt - now);

  const start = useCallback(() => {
    const at = Date.now();
    setNow(at);
    setTimer((was) =>
      was.endAt !== null || was.remainingMs <= 0
        ? was
        : { remainingMs: was.remainingMs, endAt: at + was.remainingMs },
    );
  }, []);
  const pause = useCallback(() => {
    setTimer((was) =>
      was.endAt === null ? was : { remainingMs: Math.max(0, was.endAt - Date.now()), endAt: null },
    );
  }, []);
  const reset = useCallback(() => setTimer(FULL), []);

  return {
    seconds: Math.ceil(left / 1000),
    running: endAt !== null,
    finished: endAt === null && timer.remainingMs <= 0,
    untouched: endAt === null && timer.remainingMs === TOTAL_MS,
    start,
    pause,
    reset,
  };
}
