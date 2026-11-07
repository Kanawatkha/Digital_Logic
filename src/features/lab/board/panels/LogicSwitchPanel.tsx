import { BOARD_COLORS } from '../palette';
import { SWITCHES, SWITCH_SOCKET_COLUMNS, SOCKET_PITCH, bx, by } from '../layout';
import { Dip } from '../parts/Dip';
import { Led } from '../parts/Led';
import { PushButton } from '../parts/PushButton';
import { Resistors } from '../parts/Resistors';
import { Silk } from '../parts/Silk';
import { Socket } from '../parts/Socket';

type LogicSwitchPanelProps = {
  /** `up[k]` is true when switch k is up (1) */
  up?: readonly boolean[];
};

/** Distance of each lamp from the middle of its switch, and the height of the lamp row below the sockets. */
const LAMP_OFFSET = 17;
const LAMP_DROP = 37;

/**
 * Logic switch strip: eight red square buttons, each with a 2 x 3 socket block and a green and a red
 * lamp (equal and symmetric) above it, a chip with a cream tab between the two buttons of a pair.
 */
export function LogicSwitchPanel({ up = [] }: LogicSwitchPanelProps) {
  // the socket block is drawn centered on the switch, with its pins where the simulator puts them
  const blockWidth = SWITCH_SOCKET_COLUMNS * SOCKET_PITCH + 6;
  const blockHeight = 2 * SOCKET_PITCH + 6;
  return (
    <g>
      <Silk x={bx(780)} y={by(1228)} size={14} weight={600}>
        LOGIC
      </Silk>
      <Silk x={bx(780)} y={by(1244)} size={14} weight={600}>
        SWITCH
      </Silk>
      {SWITCHES.map((layout, k) => {
        const on = up[k] === true;
        const { x, y } = layout.sockets;
        return (
          <g key={k}>
            <Socket
              x={x - blockWidth / 2}
              y={y - blockHeight / 2}
              cols={SWITCH_SOCKET_COLUMNS}
              rows={2}
              pitch={SOCKET_PITCH}
            />
            <Silk x={x - LAMP_OFFSET} y={y + LAMP_DROP - 10} size={8} anchor="middle" dim>
              0
            </Silk>
            <Silk x={x + LAMP_OFFSET} y={y + LAMP_DROP - 10} size={8} anchor="middle" dim>
              1
            </Silk>
            {/* no halo: the green and the red lamp are the same size whichever is lit */}
            <Led
              x={x - LAMP_OFFSET}
              y={y + LAMP_DROP}
              radius={6.5}
              color="green"
              lit={!on}
              glow={false}
            />
            <Led x={x + LAMP_OFFSET} y={y + LAMP_DROP} radius={6.5} lit={on} glow={false} />
            <Resistors x={x} y={by(1294)} count={2} step={9} length={26} direction="horizontal" />
            <g data-lab-switch={k} data-up={on}>
              <PushButton
                x={layout.button.x}
                y={layout.button.y}
                width={layout.button.width}
                height={layout.button.height}
                color="red"
                pressed={on}
              />
            </g>
          </g>
        );
      })}
      {[0, 1, 2, 3].map((pair) => {
        const left = SWITCHES[pair * 2];
        const right = SWITCHES[pair * 2 + 1];
        if (!left || !right) return null;
        const mid = (left.button.x + right.button.x + right.button.width) / 2;
        return (
          <g key={pair}>
            <rect
              x={mid - 11}
              y={left.button.y - 92}
              width={22}
              height={13}
              rx={2}
              fill={BOARD_COLORS.cream}
              stroke={BOARD_COLORS.creamEdge}
            />
            <Dip
              x={mid - 22}
              y={left.button.y - 76}
              width={44}
              height={50}
              pinsPerSide={4}
              direction="vertical"
            />
            <Resistors
              x={mid}
              y={left.button.y + 16}
              count={4}
              step={10}
              length={26}
              direction="horizontal"
            />
          </g>
        );
      })}
    </g>
  );
}
