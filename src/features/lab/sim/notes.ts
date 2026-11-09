import type { Warning } from './evaluate';

/** Why a chip is worth a look, in order of importance. */
export type IcNote = 'reversed' | 'unpowered' | 'unstable' | 'floating';

const ORDER: readonly IcNote[] = ['reversed', 'unpowered', 'unstable', 'floating'];

/** The most important hint for each chip that has one, by chip id. */
export function icNotes(warnings: readonly Warning[]): Record<string, IcNote> {
  const notes: Record<string, IcNote> = {};
  const add = (id: string, note: IcNote) => {
    const current = notes[id];
    if (current === undefined || ORDER.indexOf(note) < ORDER.indexOf(current)) notes[id] = note;
  };
  for (const warning of warnings) {
    if (warning.kind === 'reversed') add(warning.ic, 'reversed');
    else if (warning.kind === 'unpowered') add(warning.ic, 'unpowered');
    else if (warning.kind === 'floatingInput') add(warning.ic, 'floating');
    else if (warning.kind === 'unstable') warning.ics.forEach((id) => add(id, 'unstable'));
  }
  return notes;
}
