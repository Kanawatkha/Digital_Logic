import type { ReactNode } from 'react';
import { BOARD_COLORS, SILK_FONT } from '../palette';

type SilkProps = {
  x: number;
  y: number;
  /** Text height in board px */
  size?: number;
  anchor?: 'start' | 'middle' | 'end';
  weight?: number;
  /** Dim silkscreen (the thin small print) or bright (the panel titles) */
  dim?: boolean;
  letterSpacing?: number;
  /** Printed width: the text is stretched or squeezed to exactly this wide */
  width?: number;
  children: ReactNode;
};

/** Printed text on the board. */
export function Silk({
  x,
  y,
  size = 12,
  anchor = 'start',
  weight = 500,
  dim = false,
  letterSpacing,
  width,
  children,
}: SilkProps) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontFamily={SILK_FONT}
      fontWeight={weight}
      textAnchor={anchor}
      letterSpacing={letterSpacing}
      textLength={width}
      lengthAdjust={width ? 'spacingAndGlyphs' : undefined}
      fill={dim ? BOARD_COLORS.silkDim : BOARD_COLORS.silk}
    >
      {children}
    </text>
  );
}
