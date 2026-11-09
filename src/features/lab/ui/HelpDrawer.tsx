import { Fragment, useId, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Icon } from '@/components/ui/Icon';
import { UI_TEXT } from '@/config/site';
import { WIRE_COLORS } from '../board/palette';
import { Drawer } from './Drawer';
import { HELP_BOARD, HELP_KEYS, HELP_TOOLS, type HelpLead } from './helpContent';

type HelpDrawerProps = { open: boolean; onClose: () => void };

const TABS = ['tools', 'board', 'keys'] as const;
type Tab = (typeof TABS)[number];
const TAB_TEXT: Record<Tab, string> = {
  tools: UI_TEXT.labHelpTools,
  board: UI_TEXT.labHelpBoard,
  keys: UI_TEXT.labHelpKeys,
};

const LEAD_BOX = 'inline-flex h-10 min-w-10 shrink-0 items-center justify-center rounded-md';
const DOT_COLORS = ['red', 'black', 'blue', 'green'] as const;

/** The picture at the start of a row: the icon of the button, a short label, or the colors of the wires. */
function Lead({ lead }: { lead: HelpLead }) {
  if ('icon' in lead) {
    return (
      <span className={`${LEAD_BOX} bg-surface-card text-ink`} aria-hidden="true">
        <Icon name={lead.icon} />
      </span>
    );
  }
  if ('dots' in lead) {
    return (
      <span className={`${LEAD_BOX} gap-0.5 bg-surface-card px-2`} aria-hidden="true">
        {DOT_COLORS.map((name) => (
          <span
            key={name}
            className="block size-3 rounded-full border border-hairline"
            style={{ backgroundColor: WIRE_COLORS[name].body }}
          />
        ))}
      </span>
    );
  }
  return (
    <span
      className={`${LEAD_BOX} px-2 text-[13px] font-medium tabular-nums ${
        lead.dark ? 'bg-surface-dark text-on-dark' : 'bg-surface-card text-ink'
      }`}
      aria-hidden="true"
    >
      {lead.text}
    </span>
  );
}

function Kbd({ children }: { children: string }) {
  return (
    <kbd className="type-caption rounded-sm border border-hairline bg-surface-soft px-1.5 py-0.5 text-ink">
      {children}
    </kbd>
  );
}

function ToolsTab() {
  return (
    <div className="flex flex-col gap-5">
      {HELP_TOOLS.map((group) => (
        <section key={group.title} aria-label={group.title}>
          <h3 className="type-caption-upper mb-2 text-muted">{group.title}</h3>
          <ul className="flex flex-col gap-3">
            {group.tools.map((tool) => (
              <li key={tool.name} className="flex items-start gap-3">
                <Lead lead={tool.lead} />
                <div className="min-w-0">
                  <p className="type-nav text-ink">{tool.name}</p>
                  <p className="type-body-sm text-body">{tool.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function BoardTab() {
  return (
    <ul className="flex flex-col gap-3">
      {HELP_BOARD.map((item) => (
        <li key={item.name}>
          <p className="type-nav text-ink">{item.name}</p>
          <p className="type-body-sm text-body">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

function KeysTab() {
  return (
    <div className="flex flex-col gap-5">
      <p className="type-body-sm text-muted">{UI_TEXT.labHelpKeysNote}</p>
      {HELP_KEYS.map((group) => (
        <section key={group.title} aria-label={group.title}>
          <h3 className="type-caption-upper mb-1 text-muted">{group.title}</h3>
          <ul>
            {group.rows.map((row) => (
              <li
                key={row.text}
                className="flex items-center justify-between gap-3 border-b border-hairline-soft py-2 last:border-b-0"
              >
                <span className="type-body-sm text-body">{row.text}</span>
                <span className="flex shrink-0 flex-wrap items-center justify-end gap-x-1.5 gap-y-1">
                  {row.keys.map((combo, at) => (
                    <Fragment key={combo.join('+')}>
                      {at > 0 ? (
                        <span className="type-caption text-muted-soft" aria-hidden="true">
                          /
                        </span>
                      ) : null}
                      <span className="inline-flex items-center gap-0.5">
                        {combo.map((key, k) => (
                          <Fragment key={key}>
                            {k > 0 ? (
                              <span className="type-caption text-muted-soft" aria-hidden="true">
                                +
                              </span>
                            ) : null}
                            <Kbd>{key}</Kbd>
                          </Fragment>
                        ))}
                      </span>
                    </Fragment>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

/** What is inside the drawer: it is made only while the drawer is open. */
function HelpBody() {
  const [tab, setTab] = useState<Tab>('tools');
  const ids = useId();

  const onKeyDown = (event: KeyboardEvent) => {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (step === 0) return;
    event.preventDefault();
    const next = TABS[(TABS.indexOf(tab) + step + TABS.length) % TABS.length]!;
    setTab(next);
    document.getElementById(`${ids}-tab-${next}`)?.focus();
  };

  return (
    <>
      <div
        role="tablist"
        aria-label={UI_TEXT.labHelpTabs}
        className="flex gap-1 border-b border-hairline px-4 pt-2 md:px-5"
        onKeyDown={onKeyDown}
      >
        {TABS.map((name) => (
          <button
            key={name}
            id={`${ids}-tab-${name}`}
            type="button"
            role="tab"
            aria-selected={tab === name}
            aria-controls={`${ids}-panel`}
            tabIndex={tab === name ? 0 : -1}
            className={`type-nav -mb-px rounded-t-md border-b-2 px-3 py-2 transition-colors ${
              tab === name
                ? 'border-primary-active text-ink'
                : 'border-transparent text-muted active:bg-surface-card'
            }`}
            onClick={() => setTab(name)}
          >
            {TAB_TEXT[name]}
          </button>
        ))}
      </div>
      <div
        id={`${ids}-panel`}
        role="tabpanel"
        aria-labelledby={`${ids}-tab-${tab}`}
        tabIndex={0}
        className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain p-4 outline-none md:p-5"
      >
        {tab === 'tools' ? <ToolsTab /> : tab === 'board' ? <BoardTab /> : <KeysTab />}
      </div>
    </>
  );
}

/** What each button of the lab does, how the board answers a touch, and the keyboard shortcuts. */
export function HelpDrawer({ open, onClose }: HelpDrawerProps) {
  return (
    <Drawer open={open} onClose={onClose} title={UI_TEXT.labHelp} hint={UI_TEXT.labHelpHint}>
      <HelpBody />
    </Drawer>
  );
}
