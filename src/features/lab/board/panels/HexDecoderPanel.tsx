import { bx, by } from '../layout';
import { BOARD_COLORS } from '../palette';
import { Dip } from '../parts/Dip';
import { Resistors } from '../parts/Resistors';
import { SevenSegment } from '../parts/SevenSegment';
import { Shift } from '../parts/Shift';
import { Silk } from '../parts/Silk';
import { Socket } from '../parts/Socket';

/** Four digits, 70 apart, centered on the frame (its middle is x 1345 before the shift). */
const DIGIT_X = [1207, 1277, 1347, 1417] as const;
const DECODER_LABELS = ['DECODER-4', 'DECODER-3', 'DECODER-2', 'DECODER-1'] as const;

/** Binary to hexadecimal decoder (drawn only): four big digits, one large chip, input sockets. */
export function HexDecoderPanel() {
  return (
    <Shift panel="hex-decoder">
      <Silk x={bx(1190)} y={by(198)} size={18} weight={400} width={330}>
        BINARY TO HEXADECIMAL DECODER
      </Silk>
      <rect
        x={bx(1190)}
        y={by(200)}
        width={14}
        height={110}
        fill={BOARD_COLORS.white}
        opacity={0.9}
        rx={2}
      />
      <Resistors x={bx(1160)} y={by(214)} count={4} step={14} length={30} direction="horizontal" />
      <Resistors x={bx(1166)} y={by(228)} count={1} step={0} length={30} direction="horizontal" />
      <Resistors x={bx(1530)} y={by(240)} count={4} step={14} length={22} direction="horizontal" />
      {DIGIT_X.map((x) => (
        <SevenSegment key={x} x={bx(x)} y={by(215)} width={66} height={92} />
      ))}
      <circle cx={bx(1147)} cy={by(364)} r={9} fill={BOARD_COLORS.chip} />
      <circle cx={bx(1147)} cy={by(388)} r={9} fill={BOARD_COLORS.chip} />
      <Resistors x={bx(1170)} y={by(398)} count={3} step={14} length={20} direction="horizontal" />
      <Silk x={bx(1205)} y={by(331)} size={11} dim letterSpacing={-0.2}>
        DECODER-4 DECODER-3 DECODER-2 DECODER-1
      </Silk>
      <Dip x={bx(1202)} y={by(342)} width={285} height={80} pinsPerSide={20} />
      <Resistors x={bx(1505)} y={by(360)} count={4} step={14} length={22} direction="horizontal" />
      {DECODER_LABELS.map((label, k) => {
        const x = 1175 + k * 87;
        return (
          <g key={label}>
            <Silk x={bx(x)} y={by(449)} size={11} dim>
              {label}
            </Silk>
            <Silk x={bx(x)} y={by(463)} size={11} dim letterSpacing={0.5}>
              D C B A dp
            </Silk>
            <Socket x={bx(x)} y={by(474)} cols={5} rows={2} pitch={13.5} />
          </g>
        );
      })}
    </Shift>
  );
}
