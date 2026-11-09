import { useId, useState } from 'react';
import type { FormEvent } from 'react';
import { UI_TEXT } from '@/config/site';
import { MAX_NAME, MAX_SAVED, summarize, type SavedEntry } from '../state/savedCircuits';
import { Drawer } from './Drawer';

type SavedDrawerProps = {
  open: boolean;
  onClose: () => void;
  list: readonly SavedEntry[];
  /** There is something on the boards to save */
  canSave: boolean;
  /** Keeps the circuit on the boards under a name; false when the browser refused */
  onSave: (name: string) => boolean;
  /** Puts a saved circuit on the boards */
  onOpen: (entry: SavedEntry) => void;
  onDelete: (id: string) => void;
};

const when = (time: number) =>
  new Date(time).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' });

function Body({
  list,
  canSave,
  onSave,
  onOpen,
  onDelete,
}: Omit<SavedDrawerProps, 'open' | 'onClose'>) {
  const inputId = useId();
  const [name, setName] = useState('');
  const [result, setResult] = useState<'saved' | 'failed' | null>(null);
  // the entry that "ลบ" was pressed on once: the next press deletes it
  const [asked, setAsked] = useState<string | null>(null);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!canSave) return;
    setResult(onSave(name) ? 'saved' : 'failed');
    setName('');
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-x-hidden overflow-y-auto overscroll-contain p-4 md:p-5">
      <form onSubmit={submit} className="flex flex-col gap-2">
        <label htmlFor={inputId} className="type-caption text-muted">
          {UI_TEXT.labSavedName}
        </label>
        <div className="flex gap-2">
          <input
            id={inputId}
            type="text"
            value={name}
            maxLength={MAX_NAME}
            placeholder={`${UI_TEXT.labSavedDefault} ${list.length + 1}`}
            onChange={(event) => {
              setName(event.target.value);
              setResult(null);
            }}
            className="type-body-md min-w-0 flex-1 rounded-md border border-hairline bg-canvas px-3 py-2 text-ink"
          />
          <button
            type="submit"
            disabled={!canSave}
            className="type-nav shrink-0 rounded-md bg-ink px-4 py-2 text-on-dark transition-opacity disabled:opacity-40"
          >
            {UI_TEXT.labSavedSave}
          </button>
        </div>
        {!canSave ? (
          <p className="type-caption text-muted">{UI_TEXT.labSavedEmptyBoard}</p>
        ) : (
          <p className="type-caption text-muted">
            {UI_TEXT.labSavedReplaces}. {UI_TEXT.labSavedFull}
          </p>
        )}
        {result === 'saved' ? (
          <p role="status" className="type-caption text-ink">
            {UI_TEXT.labSavedDone}
          </p>
        ) : null}
        {result === 'failed' ? (
          <p role="alert" className="type-caption text-error">
            {UI_TEXT.labSavedFail}
          </p>
        ) : null}
      </form>

      {list.length === 0 ? (
        <p className="type-body-md text-muted">{UI_TEXT.labSavedNone}</p>
      ) : (
        <>
          <p className="type-caption text-muted">
            {list.length}/{MAX_SAVED} · {UI_TEXT.labSavedOpenHint}
          </p>
          <ul aria-label={UI_TEXT.labSaved} className="flex flex-col gap-2">
            {list.map((entry) => {
              const info = summarize(entry);
              return (
                <li
                  key={entry.id}
                  className="lab-item rounded-lg border border-hairline bg-surface-soft p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="type-title-sm break-words text-ink">{entry.name}</p>
                      <p className="type-caption text-muted">
                        {when(entry.savedAt)}
                        {info
                          ? ` · ${info.chips} ${UI_TEXT.labSummaryChips}, ${info.wires} ${UI_TEXT.labSummaryWires}`
                          : ` · ${UI_TEXT.labSavedBroken}`}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-1.5">
                      <button
                        type="button"
                        disabled={!info}
                        aria-label={`${UI_TEXT.labSavedOpen} ${entry.name}`}
                        onClick={() => onOpen(entry)}
                        className="type-caption h-9 rounded-md bg-ink px-3 text-on-dark transition-opacity disabled:opacity-40"
                      >
                        {UI_TEXT.labSavedOpen}
                      </button>
                      {asked === entry.id ? (
                        <>
                          <button
                            type="button"
                            aria-label={`${UI_TEXT.labSavedSure} ${entry.name}`}
                            onClick={() => {
                              setAsked(null);
                              onDelete(entry.id);
                            }}
                            className="type-caption h-9 rounded-md bg-error px-3 text-on-primary"
                          >
                            {UI_TEXT.labSavedSure}
                          </button>
                          <button
                            type="button"
                            onClick={() => setAsked(null)}
                            className="type-caption h-9 rounded-md border border-hairline bg-canvas px-3 text-ink"
                          >
                            {UI_TEXT.labSavedKeep}
                          </button>
                        </>
                      ) : (
                        <button
                          type="button"
                          aria-label={`${UI_TEXT.labSavedDelete} ${entry.name}`}
                          onClick={() => setAsked(entry.id)}
                          className="type-caption h-9 rounded-md border border-hairline bg-canvas px-3 text-ink active:bg-surface-card"
                        >
                          {UI_TEXT.labSavedDelete}
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

/**
 * The circuits a student keeps by name, in a drawer over a blurred page: save what is on the boards
 * (the same name again replaces the older one), open one (it takes the place of what is on the
 * boards, and undo brings that back), delete one (asked twice, since it cannot be undone).
 */
export function SavedDrawer({ open, onClose, ...rest }: SavedDrawerProps) {
  return (
    <Drawer open={open} onClose={onClose} title={UI_TEXT.labSaved} hint={UI_TEXT.labSavedHint}>
      <Body {...rest} />
    </Drawer>
  );
}
