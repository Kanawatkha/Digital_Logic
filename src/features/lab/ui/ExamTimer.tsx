import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import { TIMER_SECONDS, useCountdown } from './useCountdown';

const clock = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

const BUTTON =
  'inline-flex size-10 shrink-0 items-center justify-center rounded-md transition-transform duration-150 active:scale-90 disabled:opacity-40 disabled:active:scale-100';

/**
 * The exam timer: 15 minutes counting down, with one button to start and stop and one to start
 * again from the full time. It stays on screen when the tools are folded, and is kept in the
 * browser, so the time is not lost by a reload. When the time runs out it turns red and says so.
 */
export function ExamTimer() {
  const timer = useCountdown();
  // what a screen reader is told; the seconds are not read out as they pass
  const [said, setSaid] = useState('');
  const urgent = timer.finished || (timer.running && timer.seconds <= 60);

  const toggle = () => {
    if (timer.running) {
      timer.pause();
      setSaid(`${UI_TEXT.labTimerStopped} ${clock(timer.seconds)}`);
    } else {
      timer.start();
      setSaid(UI_TEXT.labTimerStarted);
    }
  };
  const reset = () => {
    timer.reset();
    setSaid(`${UI_TEXT.labTimerReset} ${clock(TIMER_SECONDS)}`);
  };

  return (
    <div
      role="group"
      aria-label={UI_TEXT.labTimer}
      className={`pointer-events-auto flex items-center gap-0.5 rounded-lg border p-1 shadow-[0_2px_10px_rgba(20,20,19,0.12)] transition-colors duration-200 ${
        timer.finished
          ? 'border-error bg-error text-on-primary motion-safe:animate-pulse'
          : 'border-hairline bg-canvas text-ink'
      }`}
    >
      <span
        data-lab-timer-face
        className={`type-nav min-w-14 px-1 text-center font-medium tabular-nums ${
          urgent && !timer.finished ? 'text-error' : ''
        }`}
      >
        <span className="sr-only">{UI_TEXT.labTimer} </span>
        {timer.finished ? UI_TEXT.labTimerDone : clock(timer.seconds)}
      </span>
      <button
        type="button"
        className={`${BUTTON} ${timer.finished ? 'active:bg-error' : 'active:bg-surface-card'}`}
        aria-label={
          timer.running
            ? UI_TEXT.labTimerStop
            : timer.untouched
              ? UI_TEXT.labTimerStart
              : UI_TEXT.labTimerResume
        }
        title={timer.running ? UI_TEXT.labTimerStop : UI_TEXT.labTimerStart}
        disabled={timer.finished}
        onClick={toggle}
      >
        <Icon name={timer.running ? 'pause' : 'play'} size={20} />
      </button>
      <button
        type="button"
        className={`${BUTTON} ${timer.finished ? 'active:bg-error' : 'active:bg-surface-card'}`}
        aria-label={UI_TEXT.labTimerReset}
        title={UI_TEXT.labTimerReset}
        disabled={timer.untouched}
        onClick={reset}
      >
        <Icon name="reset" size={20} />
      </button>
      <p role="status" aria-live="polite" className="sr-only">
        {timer.finished ? UI_TEXT.labTimerDone : said}
      </p>
    </div>
  );
}
