import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import { IcDiagram, type DiagramFocus } from '../diagram/IcDiagram';
import { gateHint, pinHint } from '../diagram/diagramText';
import { buildIcDiagram } from '../diagram/pinDiagram';
import { IC_TYPES, type IcType } from '../sim/ics';
import { Drawer } from './Drawer';

type IcDiagramDrawerProps = {
  open: boolean;
  onClose: () => void;
  /** How many of each chip sit on the breadboards now */
  onBoard: Readonly<Record<IcType, number>>;
};

const NO_FOCUS: DiagramFocus = { pin: null, gate: null };

function Card({ type, count, order }: { type: IcType; count: number; order: number }) {
  const diagram = useMemo(() => buildIcDiagram(type), [type]);
  const [focus, setFocus] = useState<DiagramFocus>(NO_FOCUS);
  const pin = focus.pin === null ? undefined : diagram.pins.find((p) => p.number === focus.pin);
  const gate = focus.gate === null ? undefined : diagram.gates.find((g) => g.index === focus.gate);
  const hint = pin
    ? pinHint(diagram, pin)
    : gate
      ? gateHint(diagram, gate)
      : UI_TEXT.labDiagramsHint;
  return (
    <section
      aria-label={diagram.title}
      className={`lab-item rounded-lg border bg-surface-soft p-3 transition-colors duration-300 ${
        count > 0 ? 'border-primary shadow-[0_0_0_3px_rgb(204_120_92/0.18)]' : 'border-hairline'
      }`}
      style={{ '--i': order } as CSSProperties}
    >
      <header className="mb-2 flex items-center justify-between gap-2">
        <h3 className="type-title-sm text-ink">{diagram.title}</h3>
        {count > 0 ? (
          <span className="type-caption inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-on-primary">
            <Icon name="check" size={14} />
            {UI_TEXT.labDiagramsOnBoard}
            {count > 1 ? ` ×${count}` : ''}
          </span>
        ) : null}
      </header>
      <div className="rounded-md bg-canvas p-2">
        <IcDiagram type={type} focus={focus} onFocus={setFocus} />
      </div>
      <p className="type-body-sm mt-2 min-h-[1.7em] text-muted" aria-live="polite">
        {hint}
      </p>
    </section>
  );
}

/**
 * The pin diagrams of the five chips in a drawer. A chip that sits on a breadboard is marked on its
 * card.
 */
export function IcDiagramDrawer({ open, onClose, onBoard }: IcDiagramDrawerProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={UI_TEXT.labDiagrams}
      hint={UI_TEXT.labDiagramsHint}
    >
      <div className="grid min-h-0 flex-1 content-start gap-3 overflow-x-hidden overflow-y-auto overscroll-contain p-4 md:p-5">
        {IC_TYPES.map((type, order) => (
          <Card key={type} type={type} count={onBoard[type]} order={order} />
        ))}
      </div>
    </Drawer>
  );
}
