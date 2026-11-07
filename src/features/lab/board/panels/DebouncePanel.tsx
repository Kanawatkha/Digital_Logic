import { bx, by } from '../layout';
import { Capacitor } from '../parts/Capacitor';
import { Dip } from '../parts/Dip';
import { PushButton } from '../parts/PushButton';
import { Resistors } from '../parts/Resistors';
import { Silk } from '../parts/Silk';
import { Socket } from '../parts/Socket';

/** Left and right yellow buttons: square, the same size, on one line, a chip between them. */
const BUTTON = 68;
const BUTTON_Y = 1284;
const LEFT_X = 1575;
const RIGHT_X = 1700;

/** Debounce switch (drawn only): two square yellow buttons, a chip between them, output sockets. */
export function DebouncePanel() {
  return (
    <g>
      <Silk x={bx(1760)} y={by(1182)} size={14} weight={600}>
        DEBOUNCE
      </Silk>
      <Silk x={bx(1760)} y={by(1198)} size={14} weight={600}>
        SWITCH
      </Silk>
      <Silk x={bx(1760)} y={by(1216)} size={9} dim>
        OUTPUTS
      </Silk>
      <Silk x={bx(1760)} y={by(1230)} size={9} dim>
        RISING EDGE
      </Silk>
      <Silk x={bx(1760)} y={by(1244)} size={9} dim>
        FALLING EDGE
      </Silk>
      <Silk x={bx(1760)} y={by(1258)} size={9} dim>
        TTL LEVEL
      </Silk>
      {[1542, 1586, 1656, 1698].map((x) => (
        <Socket key={x} x={bx(x)} y={by(1168)} cols={3} rows={2} pitch={13.5} />
      ))}
      <Resistors
        x={bx(LEFT_X)}
        y={by(1226)}
        count={3}
        step={12}
        length={26}
        direction="horizontal"
      />
      <Resistors
        x={bx(RIGHT_X)}
        y={by(1226)}
        count={3}
        step={12}
        length={26}
        direction="horizontal"
      />
      <Dip
        x={bx(1637) - 22}
        y={by(1232)}
        width={44}
        height={110}
        pinsPerSide={7}
        direction="vertical"
      />
      <Capacitor x={bx(1626)} y={by(1366)} kind="electrolytic" radius={8} />
      <Capacitor x={bx(1648)} y={by(1366)} kind="electrolytic" radius={8} />
      <PushButton
        x={bx(LEFT_X) - BUTTON / 2}
        y={by(BUTTON_Y)}
        width={BUTTON}
        height={BUTTON}
        color="yellow"
      />
      <PushButton
        x={bx(RIGHT_X) - BUTTON / 2}
        y={by(BUTTON_Y)}
        width={BUTTON}
        height={BUTTON}
        color="yellow"
      />
    </g>
  );
}
