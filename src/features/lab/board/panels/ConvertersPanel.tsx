import { bx, by } from '../layout';
import { BOARD_COLORS } from '../palette';
import { Capacitor } from '../parts/Capacitor';
import { Dip } from '../parts/Dip';
import { Resistors } from '../parts/Resistors';
import { Shift } from '../parts/Shift';
import { Silk } from '../parts/Silk';
import { Socket } from '../parts/Socket';

const SCREWS = Array.from({ length: 8 }, (_, k) => 783 + k * 29);

/**
 * R-2R D/A converter, the 8-channel driver (its input row and its screw terminals), the V-source and
 * the A/D converter (drawn only): five frames, each drawn inside its own shift.
 */
export function ConvertersPanel() {
  return (
    <g>
      <Shift panel="da-converter">
        <Silk x={bx(1540)} y={by(772)} size={17} weight={600}>
          R-2R D/A CONVERTER
        </Silk>
        <Silk x={bx(1540)} y={by(788)} size={10} dim>
          RESOLUTION : 8 bit
        </Silk>
        <Socket x={bx(1540)} y={by(796)} cols={2} rows={8} pitch={13} />
        <Resistors
          x={bx(1604)}
          y={by(812)}
          count={8}
          step={8.5}
          length={24}
          direction="horizontal"
        />
        <Resistors
          x={bx(1660)}
          y={by(812)}
          count={8}
          step={8.5}
          length={24}
          direction="horizontal"
        />
        <Silk x={bx(1692)} y={by(815)} size={11} dim>
          OUT
        </Silk>
        <Socket x={bx(1692)} y={by(826)} cols={2} rows={3} pitch={13.5} />
        <Silk x={bx(1540)} y={by(917)} size={10} dim>
          DIGITAL INPUT
        </Silk>
        <Silk x={bx(1694)} y={by(905)} size={10} dim>
          GND
        </Silk>
      </Shift>

      <Shift panel="driver-input">
        <Silk x={bx(1540)} y={by(946)} size={12} dim>
          INPUT
        </Silk>
        <Silk x={bx(1540)} y={by(960)} size={10} dim letterSpacing={0.6}>
          8 7 6 5 4 3 2 1
        </Silk>
        <Socket x={bx(1540)} y={by(966)} cols={8} rows={2} pitch={11} />
        <Silk x={bx(1640)} y={by(952)} size={10} weight={500} dim>
          8-Channels
        </Silk>
        <Silk x={bx(1640)} y={by(967)} size={10} weight={500} dim>
          High current driver
        </Silk>
        <Silk x={bx(1640)} y={by(981)} size={10} dim>
          (+12V 500mA)
        </Silk>
      </Shift>

      <Shift panel="driver">
        <Dip x={bx(1772)} y={by(808)} width={34} height={96} pinsPerSide={8} direction="vertical" />
        <rect
          x={bx(1816)}
          y={by(758)}
          width={64}
          height={246}
          rx={3}
          fill={BOARD_COLORS.screwBlock}
          stroke={BOARD_COLORS.screwBlockDark}
          strokeWidth={2}
        />
        {SCREWS.map((y) => (
          <g key={y}>
            <circle
              cx={bx(1848)}
              cy={by(y)}
              r={11}
              fill={BOARD_COLORS.screw}
              stroke="#6a6e72"
              strokeWidth={1.4}
            />
            <line
              x1={bx(1842)}
              y1={by(y) - 6}
              x2={bx(1854)}
              y2={by(y) + 6}
              stroke="#555a5e"
              strokeWidth={2}
            />
            <rect
              x={bx(1818)}
              y={by(y) - 6}
              width={10}
              height={12}
              rx={1}
              fill={BOARD_COLORS.screwBlockDark}
            />
          </g>
        ))}
      </Shift>

      <Shift panel="v-source">
        <Silk x={bx(1540)} y={by(1020)} size={11} dim>
          V-source
        </Silk>
        <Silk x={bx(1540)} y={by(1033)} size={11} dim>
          for ADC
        </Silk>
        <Silk x={bx(1540)} y={by(1046)} size={11} dim>
          Experiment
        </Silk>
        <circle cx={bx(1580)} cy={by(1086)} r={21} fill={BOARD_COLORS.white} stroke="#00000044" />
        <circle cx={bx(1580)} cy={by(1086)} r={8} fill="#c8c8c0" />
        <Socket x={bx(1540)} y={by(1118)} cols={2} rows={2} pitch={13.5} />
        <Socket x={bx(1576)} y={by(1118)} cols={2} rows={2} pitch={13.5} />
      </Shift>

      <Shift panel="ad-converter">
        <Silk x={bx(1628)} y={by(1034)} size={17} weight={600}>
          A/D
        </Silk>
        <Silk x={bx(1628)} y={by(1054)} size={17} weight={600}>
          CONVERTER
        </Silk>
        <Socket x={bx(1630)} y={by(1070)} cols={2} rows={4} pitch={13.5} />
        <Capacitor x={bx(1696)} y={by(1090)} kind="ceramic" radius={9} />
        <rect
          x={bx(1722)}
          y={by(1070)}
          width={22}
          height={36}
          rx={2}
          fill="#e0524a"
          stroke="#8d2a25"
        />
        <Silk x={bx(1628)} y={by(1142)} size={10} dim>
          RESOLUTION : 8 bit
        </Silk>
        <Dip
          x={bx(1760)}
          y={by(1014)}
          width={36}
          height={118}
          pinsPerSide={9}
          direction="vertical"
        />
        <Socket x={bx(1826)} y={by(1018)} cols={2} rows={9} pitch={13.5} />
      </Shift>
    </g>
  );
}
