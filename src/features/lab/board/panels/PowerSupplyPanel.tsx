import {
  POWER_SOCKETS,
  POWER_SOCKET_CENTERS,
  POWER_SOCKET_COLUMNS,
  POWER_SOCKET_PITCH,
  bx,
  by,
} from '../layout';
import { BOARD_COLORS } from '../palette';
import { Led } from '../parts/Led';
import { Silk } from '../parts/Silk';
import { Socket } from '../parts/Socket';

/** The four lamps sit over the sockets -5V, +5V, +12V and -12V, on one line. */
const SHORT_LEDS = ['-5V', '+5V', '+12V', '-12V'] as const;

type PowerSupplyPanelProps = {
  /** +5V and GND are joined: the short circuit lamps light */
  short?: boolean;
};

/** Power supply at the top left: five socket blocks and the short circuit lamps. */
export function PowerSupplyPanel({ short = false }: PowerSupplyPanelProps) {
  const width = POWER_SOCKET_COLUMNS * POWER_SOCKET_PITCH + 6;
  const height = 2 * POWER_SOCKET_PITCH + 6;
  return (
    <g>
      <Silk x={bx(253)} y={by(368)} size={22} weight={400} width={187}>
        POWER SUPPLY
      </Silk>
      <Silk x={bx(272)} y={by(402)} size={17} dim>
        ±12V 1A and ±5V 1A
      </Silk>
      <Silk x={bx(272)} y={by(425)} size={14} dim>
        short circuit protect
      </Silk>
      <rect
        x={bx(255)}
        y={by(446)}
        width={297}
        height={78}
        rx={3}
        fill="none"
        stroke={BOARD_COLORS.silkDim}
        strokeWidth={1.2}
      />
      <Silk x={bx(288)} y={by(466)} size={12} dim>
        SHORT CIRCUIT INDICATOR
      </Silk>
      {SHORT_LEDS.map((name) => (
        <Led key={name} x={POWER_SOCKET_CENTERS[name].x} y={by(493)} radius={9} lit={short} />
      ))}
      {POWER_SOCKETS.map((name) => {
        const center = POWER_SOCKET_CENTERS[name];
        return (
          <g key={name}>
            <Silk x={center.x} y={center.y - 32} size={14} weight={600} anchor="middle" dim>
              {name === '-5V' || name === '-12V' ? name.replace('-', '−') : name}
            </Silk>
            <Socket
              x={center.x - width / 2}
              y={center.y - height / 2}
              cols={POWER_SOCKET_COLUMNS}
              rows={2}
              pitch={POWER_SOCKET_PITCH}
            />
          </g>
        );
      })}
    </g>
  );
}
