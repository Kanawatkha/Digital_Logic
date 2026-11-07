import { bx, by } from '../layout';
import { BOARD_COLORS } from '../palette';
import { Dip } from '../parts/Dip';
import { Led } from '../parts/Led';
import { Resistors } from '../parts/Resistors';
import { Shift } from '../parts/Shift';
import { Silk } from '../parts/Silk';
import { Socket } from '../parts/Socket';

/** Logic probe (drawn only): three lamps, two chips, an input socket. */
export function LogicProbePanel() {
  return (
    <Shift panel="logic-probe">
      <Silk x={bx(610)} y={by(230)} size={20} weight={400} width={150}>
        LOGIC PROBE
      </Silk>
      {/* three equal lamps on one line, spaced evenly, with no halo so they look the same size */}
      <Led x={bx(625)} y={by(252)} radius={9} color="green" lit glow={false} />
      <Led x={bx(680)} y={by(252)} radius={9} glow={false} />
      <Led x={bx(735)} y={by(252)} radius={9} color="yellow" lit glow={false} />
      <Silk x={bx(625)} y={by(283)} size={13} anchor="middle" dim>
        LO
      </Silk>
      <Silk x={bx(680)} y={by(283)} size={13} anchor="middle" dim>
        HI
      </Silk>
      <Silk x={bx(735)} y={by(283)} size={13} anchor="middle" dim>
        PULSE
      </Silk>
      <Dip x={bx(624)} y={by(300)} width={104} height={44} pinsPerSide={7} />
      <Dip x={bx(624)} y={by(384)} width={104} height={44} pinsPerSide={7} />
      <Resistors
        x={bx(740)}
        y={by(318)}
        count={3}
        step={11}
        length={22}
        direction="vertical"
        across="x"
      />
      <Resistors x={bx(612)} y={by(364)} count={1} step={0} length={22} direction="horizontal" />
      <Resistors
        x={bx(740)}
        y={by(410)}
        count={3}
        step={11}
        length={22}
        direction="vertical"
        across="x"
      />
      <rect x={bx(600)} y={by(290)} width={20} height={30} rx={2} fill="#c9b28a" stroke="#7a6a4a" />
      <Silk x={bx(660)} y={by(442)} size={12} dim>
        INPUT
      </Silk>
      <circle cx={bx(640)} cy={by(456)} r={12} fill={BOARD_COLORS.white} stroke="#00000044" />
      <Socket x={bx(668)} y={by(452)} cols={3} rows={2} pitch={13.5} />
    </Shift>
  );
}
