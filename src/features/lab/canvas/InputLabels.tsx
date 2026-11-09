import { SWITCHES } from '../board/layout';
import { SILK_FONT } from '../board/palette';
import { inputName } from '../analysis/truthTable';

type InputLabelsProps = {
  /** The switches the circuit reads, in the order of the columns of the results (A first) */
  inputs: readonly number[];
};

/**
 * The letter of each switch the circuit reads (A, B, C as in the table of results) on its red
 * button, so a student can tell which switch is which input without opening anything.
 */
export function InputLabels({ inputs }: InputLabelsProps) {
  return (
    <g pointerEvents="none" data-lab-input-letters="">
      {inputs.map((index, position) => {
        const layout = SWITCHES[index];
        if (!layout) return null;
        const { x, y, width, height } = layout.button;
        return (
          <text
            key={index}
            data-input-letter={inputName(position)}
            x={x + width / 2}
            y={y + height / 2 + 9}
            textAnchor="middle"
            fontFamily={SILK_FONT}
            fontSize={28}
            fontWeight={700}
            fill="#ffffff"
            stroke="#00000066"
            strokeWidth={1.2}
            paintOrder="stroke"
            className="lab-fade"
          >
            {inputName(position)}
          </text>
        );
      })}
    </g>
  );
}
