import { bx, by } from '../layout';
import { BOARD_COLORS, SILK_FONT } from '../palette';
import { Silk } from '../parts/Silk';

/** Logo, copyright line and www in the title strip, and the big "NX-4i" name under it. */
export function TitlePanel() {
  return (
    <g>
      <g transform={`translate(${bx(300)} ${by(158)})`}>
        <rect
          x={0}
          y={0}
          width={48}
          height={34}
          rx={6}
          fill="none"
          stroke={BOARD_COLORS.silk}
          strokeWidth={2}
        />
        <text
          x={24}
          y={24}
          fontSize={19}
          fontStyle="italic"
          fontWeight={700}
          textAnchor="middle"
          fontFamily={SILK_FONT}
          fill={BOARD_COLORS.silk}
        >
          inex
        </text>
        <circle cx={53} cy={22} r={3} fill="#f08a3c" />
      </g>
      <Silk x={bx(365)} y={by(173)} size={16} weight={500}>
        Copyright 2004
      </Silk>
      <Silk x={bx(365)} y={by(194)} size={16} weight={500}>
        Innovative Experiment
      </Silk>
      <Silk x={bx(650)} y={by(180)} size={15} weight={600}>
        www.inex.co.th
      </Silk>
      <text
        x={bx(238)}
        y={by(304)}
        fontSize={118}
        fontWeight={200}
        fontFamily={SILK_FONT}
        fill={BOARD_COLORS.silk}
        textLength={332}
        lengthAdjust="spacingAndGlyphs"
      >
        NX—4i
      </text>
      <text
        x={bx(240)}
        y={by(330)}
        fontSize={19}
        fontWeight={600}
        fontFamily={SILK_FONT}
        fill={BOARD_COLORS.silk}
        textLength={316}
        lengthAdjust="spacingAndGlyphs"
      >
        DIGITAL CIRCUITS EXPERIMENT BOARD
      </text>
    </g>
  );
}
