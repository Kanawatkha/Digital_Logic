import { Resistor } from './Resistor';

type ResistorsProps = {
  /** Center of the first resistor */
  x: number;
  y: number;
  count: number;
  /** Distance between neighbors, along `across` */
  step: number;
  length?: number;
  /** Direction of each resistor */
  direction?: 'horizontal' | 'vertical';
  /** Direction of the row they stand in */
  across?: 'x' | 'y';
};

/** A row of equal resistors. */
export function Resistors({
  x,
  y,
  count,
  step,
  length,
  direction = 'horizontal',
  across,
}: ResistorsProps) {
  const along = across ?? (direction === 'horizontal' ? 'y' : 'x');
  return (
    <g>
      {Array.from({ length: count }, (_, k) => (
        <Resistor
          key={k}
          x={along === 'x' ? x + k * step : x}
          y={along === 'y' ? y + k * step : y}
          length={length}
          direction={direction}
        />
      ))}
    </g>
  );
}
