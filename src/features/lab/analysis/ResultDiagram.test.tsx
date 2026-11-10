import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { LabNetlist } from '@/content/types';
import { TaskDiagram } from '../tasks/TaskDiagram';
import { taskInputName, toNetlist } from '../tasks/toNetlist';
import { layoutDiagram } from './diagramLayout';

const net = (gates: LabNetlist['gates'], output: string): LabNetlist => ({
  gates,
  outputs: { Y: output },
});

/** A feeds two gates, B and C one each */
const branching = net(
  [
    { name: 'g1', kind: 'AND', inputs: ['A', 'B'] },
    { name: 'g2', kind: 'OR', inputs: ['A', 'g1'] },
  ],
  'g2',
);
const straight = net(
  [
    { name: 'g1', kind: 'AND', inputs: ['A', 'B'] },
    { name: 'g2', kind: 'OR', inputs: ['g1', 'C'] },
  ],
  'g2',
);

describe('the dots of a diagram of a circuit', () => {
  it('are drawn where the layout says a signal branches, and nowhere else', () => {
    const { container } = render(<TaskDiagram net={branching} outputNames={['Y']} />);
    const want = layoutDiagram(toNetlist(branching, ['Y']), taskInputName, {
      inputsInOrder: true,
    }).junctions;
    const dots = [...container.querySelectorAll('circle[data-junction]')];
    expect(want.length).toBeGreaterThan(0);
    expect(dots.map((d) => [Number(d.getAttribute('cx')), Number(d.getAttribute('cy'))])).toEqual(
      want.map((p) => [p.x, p.y]),
    );
  });

  it('are not drawn for a circuit whose wires only cross', () => {
    const { container } = render(<TaskDiagram net={straight} outputNames={['Y']} />);
    expect(container.querySelectorAll('circle[data-junction]')).toHaveLength(0);
  });
});
