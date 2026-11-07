import { bx, by } from '../layout';
import { Resistors } from '../parts/Resistors';
import { SevenSegment } from '../parts/SevenSegment';
import { Shift } from '../parts/Shift';
import { Silk } from '../parts/Silk';
import { Socket } from '../parts/Socket';

/** LED 7 segments (drawn only): two digit pairs, one common anode and one common cathode. */
export function SevenSegmentsPanel() {
  return (
    <Shift panel="led-7-segments">
      <Silk x={bx(1675)} y={by(215)} size={17} weight={400} width={150}>
        LED 7 SEGMENTS
      </Silk>
      {[1600, 1668].map((x) => (
        <SevenSegment key={x} x={bx(x)} y={by(235)} width={64} height={90} />
      ))}
      {[1746, 1814].map((x) => (
        <SevenSegment key={x} x={bx(x)} y={by(235)} width={64} height={90} />
      ))}
      <Silk x={bx(1602)} y={by(343)} size={10} dim>
        DIGIT-2 &nbsp;&nbsp;DIGIT-1
      </Silk>
      <Silk x={bx(1602)} y={by(356)} size={10} dim>
        COMMON ANODE (CA)
      </Silk>
      <Silk x={bx(1748)} y={by(343)} size={10} dim>
        DIGIT-2 &nbsp;&nbsp;DIGIT-1
      </Silk>
      <Silk x={bx(1748)} y={by(356)} size={10} dim>
        COMMON CATHODE (CC)
      </Silk>
      <Resistors
        x={bx(1622)}
        y={by(373)}
        count={14}
        step={18}
        length={14}
        direction="vertical"
        across="x"
      />
      <Resistors
        x={bx(1622)}
        y={by(392)}
        count={14}
        step={18}
        length={14}
        direction="vertical"
        across="x"
      />
      <Silk x={bx(1598)} y={by(424)} size={11} dim>
        DIGIT-2 (CA)
      </Silk>
      <Silk x={bx(1744)} y={by(424)} size={11} dim>
        DIGIT-2 (CC)
      </Silk>
      <Silk x={bx(1598)} y={by(439)} size={10} dim letterSpacing={1.4}>
        a b c d e f g dp
      </Silk>
      <Silk x={bx(1744)} y={by(439)} size={10} dim letterSpacing={1.4}>
        a b c d e f g dp
      </Silk>
      <Socket x={bx(1596)} y={by(445)} cols={10} rows={2} pitch={13.5} />
      <Socket x={bx(1742)} y={by(445)} cols={10} rows={2} pitch={13.5} />
      <Silk x={bx(1598)} y={by(490)} size={11} dim>
        DIGIT-1 (CA)
      </Silk>
      <Silk x={bx(1744)} y={by(490)} size={11} dim>
        DIGIT-1 (CC)
      </Silk>
      <Socket x={bx(1596)} y={by(496)} cols={10} rows={2} pitch={13.5} />
      <Socket x={bx(1742)} y={by(496)} cols={10} rows={2} pitch={13.5} />
    </Shift>
  );
}
