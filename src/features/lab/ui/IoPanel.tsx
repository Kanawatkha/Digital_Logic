import { UI_TEXT } from '@/config/site';
import { LEDS, SWITCH_COUNT } from '../board/layout';

type IoPanelProps = {
  /** `switches[k]` is true when switch k is up (1) */
  switches: readonly boolean[];
  /** `leds[k]` is true when Logic Monitor LED k + 1 is lit */
  leds: readonly boolean[];
  /**
   * Narrow window: the switches in a row with the LEDs under them, two rows of eight, so each LED
   * sits under a switch column. Otherwise the switches and the LEDs sit side by side.
   */
  stacked: boolean;
  onToggle: (index: number) => void;
};

/** The monitor prints 16 to 9 on the top row and 8 to 1 below it, which this strip copies. */
const LED_ORDER = LEDS.map((led) => led.number);

/**
 * The eight logic switches and the sixteen monitor LEDs as a strip, so a circuit can be tried from
 * anywhere on the board (the real ones may be off screen while the student works on a breadboard),
 * with big buttons for a finger and the keyboard.
 */
export function IoPanel({ switches, leds, stacked, onToggle }: IoPanelProps) {
  return (
    <div
      role="group"
      aria-label={UI_TEXT.labIo}
      className={`rounded-lg border border-hairline bg-canvas p-1 shadow-[0_2px_10px_rgba(20,20,19,0.12)] ${
        stacked ? 'grid grid-cols-8 gap-x-0.5' : 'flex items-center gap-x-3'
      }`}
    >
      <div
        role="group"
        aria-label={UI_TEXT.labSwitches}
        className={
          stacked ? 'col-span-8 grid grid-cols-subgrid gap-x-0.5' : 'flex items-center gap-0.5'
        }
      >
        {Array.from({ length: SWITCH_COUNT }, (_, k) => {
          const up = switches[k] === true;
          return (
            <button
              key={k}
              type="button"
              aria-label={`${UI_TEXT.labSwitch} ${k + 1}`}
              aria-pressed={up}
              title={`${UI_TEXT.labSwitch} ${k + 1}: ${up ? 1 : 0}`}
              className={`flex size-10 flex-col items-center justify-center rounded-md transition-colors duration-150 select-none active:scale-95 ${
                up ? 'bg-ink text-on-dark' : 'bg-surface-card text-ink'
              }`}
              onClick={() => onToggle(k)}
            >
              <span className="text-[13px] leading-4 font-medium tabular-nums">{k + 1}</span>
              <span className="text-[10px] leading-3 tabular-nums opacity-70">{up ? 1 : 0}</span>
            </button>
          );
        })}
      </div>
      {stacked ? <span className="col-span-8 my-1 h-px bg-hairline" aria-hidden="true" /> : null}
      <div
        role="group"
        aria-label={UI_TEXT.labLeds}
        className={
          stacked
            ? 'col-span-8 mb-0.5 grid grid-cols-subgrid justify-items-center gap-y-2.5 py-1'
            : 'grid grid-cols-8 gap-x-1.5 gap-y-1.5 px-1'
        }
        title={UI_TEXT.labLeds}
      >
        {LED_ORDER.map((number) => {
          const lit = leds[number - 1] === true;
          return (
            <span
              key={number}
              role="img"
              aria-label={`${UI_TEXT.labLeds} ${number}: ${lit ? UI_TEXT.labLedOn : UI_TEXT.labLedOff}`}
              title={`${UI_TEXT.labLeds} ${number}`}
              className={`rounded-full transition-all duration-200 ${stacked ? 'size-3.5' : 'size-3'} ${
                lit ? 'bg-error ring-2 ring-error/30' : 'bg-surface-cream-strong'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
