import { bx, by } from '../layout';
import { BOARD_COLORS } from '../palette';
import { Capacitor } from '../parts/Capacitor';
import { Dip } from '../parts/Dip';
import { Knob } from '../parts/Knob';
import { Resistors } from '../parts/Resistors';
import { Shift } from '../parts/Shift';
import { Silk } from '../parts/Silk';
import { Socket } from '../parts/Socket';

/** Amplifier and speaker (drawn only): two frames side by side. */
export function AmplifierPanel() {
  return (
    <g>
      <Shift panel="amplifier">
        <Silk x={bx(1562)} y={by(594)} size={11} dim>
          INPUT
        </Silk>
        <Socket x={bx(1562)} y={by(602)} cols={2} rows={2} pitch={13.5} />
        <Resistors
          x={bx(1640)}
          y={by(582)}
          count={2}
          step={74}
          length={22}
          direction="horizontal"
          across="x"
        />
        <Capacitor x={bx(1740)} y={by(612)} kind="electrolytic" radius={14} />
        <Knob x={bx(1610)} y={by(658)} radius={34} capColor={BOARD_COLORS.knob} />
        <circle cx={bx(1669)} cy={by(676)} r={19} fill={BOARD_COLORS.knobRed} stroke="#000" />
        <Dip x={bx(1700)} y={by(646)} width={32} height={42} pinsPerSide={4} direction="vertical" />
        <Silk x={bx(1596)} y={by(722)} size={11} dim>
          VOLUME
        </Silk>
        <Silk x={bx(1672)} y={by(718)} size={17} weight={600}>
          AMPLIFIER
        </Silk>
        <Silk x={bx(1682)} y={by(735)} size={10} dim>
          250mW/8Ω
        </Silk>
      </Shift>

      <Shift panel="speaker">
        <Silk x={bx(1806)} y={by(585)} size={16} weight={600} dim>
          +
        </Silk>
        <Silk x={bx(1808)} y={by(692)} size={20} weight={600} dim>
          −
        </Silk>
        <Socket x={bx(1804)} y={by(612)} cols={2} rows={3} pitch={13.5} />
        <g fill="none" stroke={BOARD_COLORS.silk} strokeWidth={1.8}>
          <path d={`M${bx(1850)} ${by(606)}h14v44h-14z`} />
          <path d={`M${bx(1864)} ${by(606)}l24-18v80l-24-18z`} />
        </g>
        <Silk x={bx(1803)} y={by(718)} size={16} weight={600}>
          SPEAKER
        </Silk>
        <Silk x={bx(1808)} y={by(735)} size={10} dim>
          250mW/8Ω
        </Silk>
      </Shift>
    </g>
  );
}
