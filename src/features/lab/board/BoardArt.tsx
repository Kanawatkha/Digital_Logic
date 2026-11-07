import { memo } from 'react';
import { BOARD_COLORS } from './palette';
import { BOARD_SIZE, PANELS, bx, by } from './layout';
import { AmplifierPanel } from './panels/AmplifierPanel';
import { BreadboardPanel } from './panels/BreadboardPanel';
import { ConvertersPanel } from './panels/ConvertersPanel';
import { DebouncePanel } from './panels/DebouncePanel';
import { FunctionGeneratorPanel } from './panels/FunctionGeneratorPanel';
import { HexDecoderPanel } from './panels/HexDecoderPanel';
import { LogicMonitorPanel } from './panels/LogicMonitorPanel';
import { LogicProbePanel } from './panels/LogicProbePanel';
import { LogicSwitchPanel } from './panels/LogicSwitchPanel';
import { PowerSupplyPanel } from './panels/PowerSupplyPanel';
import { SevenSegmentsPanel } from './panels/SevenSegmentsPanel';
import { TitlePanel } from './panels/TitlePanel';

/** Panels that print an outline on the board (the breadboards have none). */
const OUTLINED = new Set([
  'title-strip',
  'power-supply',
  'function-generator',
  'logic-probe',
  'logic-monitor',
  'hex-decoder',
  'led-7-segments',
  'amplifier',
  'speaker',
  'da-converter',
  'driver-input',
  'driver',
  'v-source',
  'ad-converter',
  'debounce',
  'logic-switch',
]);

const SCREWS = [
  [268, 178],
  [270, 1385],
  [1768, 1310],
] as const;

type BoardArtProps = {
  /** `ledsLit[k]` lights Logic Monitor LED k + 1 */
  ledsLit?: readonly boolean[];
  /** `switchesUp[k]` is true when logic switch k is up (1) */
  switchesUp?: readonly boolean[];
  /** +5V and GND are joined: the short circuit lamps light */
  short?: boolean;
};

/**
 * The NX-4i board, drawn from the photo in board space (about BOARD_SIZE). Everything here is
 * static art; only the monitor LEDs and the switch lamps take state.
 */
export const BoardArt = memo(function BoardArt({ ledsLit, switchesUp, short }: BoardArtProps) {
  return (
    <g>
      <rect
        width={BOARD_SIZE.width}
        height={BOARD_SIZE.height}
        rx={18}
        fill={BOARD_COLORS.frame}
        stroke={BOARD_COLORS.frameEdge}
        strokeWidth={4}
      />
      <rect
        x={14}
        y={14}
        width={BOARD_SIZE.width - 28}
        height={BOARD_SIZE.height - 28}
        rx={8}
        fill={BOARD_COLORS.pcb}
      />
      {PANELS.filter((panel) => OUTLINED.has(panel.id)).map((panel) => (
        <rect
          key={panel.id}
          x={panel.x}
          y={panel.y}
          width={panel.width}
          height={panel.height}
          rx={4}
          fill="none"
          stroke={BOARD_COLORS.silkDim}
          strokeWidth={1.4}
          opacity={0.75}
        />
      ))}
      <TitlePanel />
      <PowerSupplyPanel short={short} />
      <FunctionGeneratorPanel />
      <LogicProbePanel />
      <LogicMonitorPanel lit={ledsLit} />
      <HexDecoderPanel />
      <SevenSegmentsPanel />
      <AmplifierPanel />
      <ConvertersPanel />
      <DebouncePanel />
      <BreadboardPanel />
      <LogicSwitchPanel up={switchesUp} />
      {SCREWS.map(([x, y]) => (
        <g key={x + y}>
          <circle
            cx={bx(x)}
            cy={by(y)}
            r={11}
            fill="#1d2022"
            stroke={BOARD_COLORS.silkDim}
            strokeWidth={1.5}
          />
          <circle cx={bx(x)} cy={by(y)} r={4} fill="#4a4f53" />
        </g>
      ))}
    </g>
  );
});
