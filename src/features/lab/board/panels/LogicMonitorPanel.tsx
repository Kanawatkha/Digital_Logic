import { LEDS, LED_PINS, SOCKET_ROW_GAP, bx, by } from '../layout';
import { BOARD_COLORS } from '../palette';
import { Dip } from '../parts/Dip';
import { Led } from '../parts/Led';
import { Shift } from '../parts/Shift';
import { Silk } from '../parts/Silk';
import { Socket } from '../parts/Socket';

type LogicMonitorPanelProps = {
  /** `lit[k]` lights LED k + 1 */
  lit?: readonly boolean[];
};

/**
 * 16-BITs Logic Monitor: 16 LEDs and the sockets that drive them. The LEDs and sockets come from
 * the layout data (already on the frame); the printing and the chips are shifted onto it.
 */
export function LogicMonitorPanel({ lit = [] }: LogicMonitorPanelProps) {
  return (
    <g>
      <Shift panel="logic-monitor">
        <Silk x={bx(828)} y={by(186)} size={20} weight={400} width={257}>
          16-BITs LOGIC MONITOR
        </Silk>
        <Silk x={bx(800)} y={by(206)} size={13} dim>
          Logic &quot;0&quot; – LED off
        </Silk>
        <Silk x={bx(800)} y={by(222)} size={13} dim>
          Logic &quot;1&quot; – LED on
        </Silk>
        {[797, 966].map((x) => (
          <g key={x}>
            <rect x={bx(x)} y={by(288)} width={140} height={10} rx={2} fill={BOARD_COLORS.chip} />
            <Dip x={bx(x)} y={by(374)} width={140} height={48} pinsPerSide={10} />
            <rect x={bx(x)} y={by(432)} width={140} height={8} rx={2} fill={BOARD_COLORS.chip} />
          </g>
        ))}
      </Shift>

      {LEDS.map((led) => (
        <g key={led.number} data-lab-led={led.number} data-lit={lit[led.number - 1] === true}>
          <Silk x={led.led.x} y={led.led.y - 16} size={13} anchor="middle" dim>
            {led.number}
          </Silk>
          <Led x={led.led.x} y={led.led.y} radius={9} lit={lit[led.number - 1] === true} />
        </g>
      ))}
      {/* the number of each socket column, centered over it */}
      {LEDS.map((led) => (
        <Silk key={led.number} x={led.socket.x} y={led.socket.y - 15} size={11} anchor="middle" dim>
          {led.number}
        </Silk>
      ))}
      {LEDS.map((led) => (
        <Socket
          key={led.number}
          x={led.socket.x - SOCKET_ROW_GAP / 2 - 3}
          y={led.socket.y - SOCKET_ROW_GAP / 2 - 3}
          cols={1}
          rows={LED_PINS}
          pitch={SOCKET_ROW_GAP}
        />
      ))}
    </g>
  );
}
