import { bx, by } from '../layout';
import { BOARD_COLORS } from '../palette';
import { Capacitor } from '../parts/Capacitor';
import { Dip } from '../parts/Dip';
import { Knob } from '../parts/Knob';
import { Led } from '../parts/Led';
import { PushButton } from '../parts/PushButton';
import { Resistor } from '../parts/Resistor';
import { Resistors } from '../parts/Resistors';
import { Silk } from '../parts/Silk';
import { Socket } from '../parts/Socket';

/** The eight lamps on one line, evenly spaced, with one empty slot after the fifth. */
const LAMP_SLOTS = [0, 1, 2, 3, 4, 6, 7, 8];
const LAMP_X = (slot: number) => 270 + slot * 31.25;
/** The two knobs and the two buttons over them sit symmetrically about the middle of the frame (x 403.5). */
const KNOB_X = [331, 476] as const;
const BUTTON_SIZE = 68;

/** Function generator (drawn only): chips in rows, a few parts, eight lamps, two buttons, two knobs. */
export function FunctionGeneratorPanel() {
  return (
    <g>
      <Silk x={bx(252)} y={by(652)} size={22} weight={400} width={258}>
        FUNCTION GENERATOR
      </Silk>
      <Silk x={bx(262)} y={by(682)} size={11} dim>
        OUTPUT: SINE / SQUARE / TRIANGLE
      </Silk>

      {/* row of small parts */}
      <Resistors
        x={bx(268)}
        y={by(702)}
        count={4}
        step={14}
        length={22}
        direction="vertical"
        across="x"
      />
      <Capacitor x={bx(372)} y={by(706)} kind="ceramic" radius={9} />
      <Capacitor x={bx(414)} y={by(706)} kind="ceramic" radius={9} />
      <Capacitor x={bx(470)} y={by(702)} kind="electrolytic" radius={10} />
      <Capacitor x={bx(500)} y={by(702)} kind="electrolytic" radius={10} />
      <Capacitor x={bx(530)} y={by(702)} kind="electrolytic" radius={10} />

      {/* three upright chips, evenly spaced and level */}
      <Dip x={bx(298)} y={by(738)} width={46} height={92} pinsPerSide={8} direction="vertical" />
      <Dip x={bx(396)} y={by(738)} width={46} height={92} pinsPerSide={8} direction="vertical" />
      <Dip x={bx(494)} y={by(738)} width={44} height={50} pinsPerSide={4} direction="vertical" />

      {/* wide chip with its tab, and the three sockets */}
      <Resistors x={bx(268)} y={by(852)} count={6} step={11} length={22} direction="horizontal" />
      <Dip x={bx(300)} y={by(880)} width={118} height={44} pinsPerSide={8} />
      <rect x={bx(432)} y={by(880)} width={24} height={34} rx={2} fill="#e0524a" stroke="#8d2a25" />
      {[856, 906, 956].map((y) => (
        <Socket key={y} x={bx(500)} y={by(y)} cols={2} rows={2} pitch={13.5} />
      ))}

      <Dip x={bx(300)} y={by(946)} width={60} height={38} pinsPerSide={4} />
      <Capacitor x={bx(394)} y={by(965)} kind="electrolytic" radius={9} />
      <Resistors x={bx(430)} y={by(950)} count={5} step={9} length={20} direction="horizontal" />

      <Dip x={bx(300)} y={by(1008)} width={150} height={52} pinsPerSide={9} />
      <Capacitor x={bx(486)} y={by(1022)} kind="ceramic" radius={9} />
      <Capacitor x={bx(486)} y={by(1044)} kind="ceramic" radius={9} />

      {/* the lamps, with a resistor over each of the red ones */}
      {LAMP_SLOTS.map((slot) => {
        const x = LAMP_X(slot);
        const color = slot < 5 ? 'red' : slot === 6 ? 'green' : slot === 7 ? 'red' : 'yellow';
        return (
          <g key={slot}>
            {slot < 5 ? <Resistor x={bx(x)} y={by(1082)} length={22} direction="vertical" /> : null}
            <Led x={bx(x)} y={by(1104)} radius={8} color={color} />
          </g>
        );
      })}
      <Silk x={bx(LAMP_X(7))} y={by(1080)} size={11} anchor="middle" dim>
        /\/\
      </Silk>

      {KNOB_X.map((x) => (
        <PushButton
          key={`button-${x}`}
          x={bx(x - BUTTON_SIZE / 2)}
          y={by(1163)}
          width={BUTTON_SIZE}
          height={BUTTON_SIZE}
          color="yellow"
        />
      ))}

      {KNOB_X.map((x) => (
        <g key={`knob-${x}`}>
          <g stroke={BOARD_COLORS.silkDim} strokeWidth={1.4}>
            {Array.from({ length: 11 }, (_, k) => {
              const a = ((-150 + k * 30) * Math.PI) / 180;
              return (
                <line
                  key={k}
                  x1={bx(x) + Math.cos(a) * 46}
                  y1={by(1312) + Math.sin(a) * 46}
                  x2={bx(x) + Math.cos(a) * 54}
                  y2={by(1312) + Math.sin(a) * 54}
                />
              );
            })}
          </g>
          <Knob x={bx(x)} y={by(1312)} radius={38} />
        </g>
      ))}
      <Silk x={bx(KNOB_X[0])} y={by(1382)} size={13} weight={600} anchor="middle">
        FREQUENCY
      </Silk>
      <Silk x={bx(KNOB_X[1])} y={by(1382)} size={13} weight={600} anchor="middle">
        AMPLITUDE
      </Silk>
    </g>
  );
}
