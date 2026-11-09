/**
 * The keyboard shortcuts of the lab page, in one place: what a key press means (pure, so it can be
 * tested without a page), and how each key is written for a tooltip. The keys are read by `code`, the
 * place of the key on the keyboard, not by the letter it prints, so they work the same on a Thai
 * layout where the key of Z prints a Thai letter.
 */

/** What a press can ask for on the lab page. */
export type LabAction =
  | { kind: 'undo' }
  | { kind: 'redo' }
  | { kind: 'delete' }
  | { kind: 'escape' }
  | { kind: 'arrange' }
  | { kind: 'tasks' }
  | { kind: 'results' }
  | { kind: 'diagrams' }
  | { kind: 'help' }
  /** Switch 0 to 7, from the keys 1 to 8 */
  | { kind: 'switch'; index: number };

/** What a press can ask for in the tasks drawer, with a task open. */
export type TaskAction = 'previous' | 'next' | 'solution';

/** The parts of a keyboard event that a shortcut reads. */
export type KeyPress = {
  code: string;
  key: string;
  ctrlKey: boolean;
  metaKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  repeat: boolean;
  target: EventTarget | null;
};

/** A place where letters are typed: the shortcuts keep out of it. */
export function isTyping(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  const tag = target.tagName;
  if (tag === 'TEXTAREA' || tag === 'SELECT') return true;
  if (tag !== 'INPUT') return false;
  // a checkbox or a button takes no text
  const type = (target as HTMLInputElement).type;
  return !['checkbox', 'radio', 'button', 'submit', 'reset', 'range', 'color'].includes(type);
}

const DIGIT = /^(?:Digit|Numpad)([1-8])$/;

/**
 * The place of the key. A real keyboard says it; where it does not (a screen keyboard, a script) it is
 * taken from what the key printed, so the shortcuts still work for the Latin letters and digits.
 */
export function codeOf(press: Pick<KeyPress, 'code' | 'key'>): string {
  if (press.code) return press.code;
  const key = press.key;
  if (/^[a-z]$/i.test(key)) return `Key${key.toUpperCase()}`;
  if (/^[0-9]$/.test(key)) return `Digit${key}`;
  if (key === '?' || key === '/') return 'Slash';
  if (key === '[') return 'BracketLeft';
  if (key === ']') return 'BracketRight';
  return key;
}
const HELP_CODES = new Set(['KeyH']);

/**
 * What a press means on the lab page, or null. Ctrl or Cmd with Z, Shift and Z, or Y are undo and
 * redo; the single keys (T, R, P, A, H, ?, 1 to 8, Delete, Backspace, Esc) work with no other key
 * held, and never while text is typed.
 */
export function labActionOf(press: KeyPress): LabAction | null {
  if (isTyping(press.target) || press.altKey) return null;
  const code = codeOf(press);
  if (press.ctrlKey || press.metaKey) {
    if (code === 'KeyZ') return { kind: press.shiftKey ? 'redo' : 'undo' };
    if (code === 'KeyY' && !press.shiftKey) return { kind: 'redo' };
    return null;
  }
  if (code === 'Delete' || code === 'Backspace') return { kind: 'delete' };
  if (code === 'Escape') return { kind: 'escape' };
  // what opens a panel or toggles something is done once, not again while the key is held
  if (press.repeat) return null;
  if (press.shiftKey) return code === 'Slash' || press.key === '?' ? { kind: 'help' } : null;
  const digit = DIGIT.exec(code)?.[1];
  if (digit) return { kind: 'switch', index: Number(digit) - 1 };
  if (code === 'KeyT') return { kind: 'tasks' };
  if (code === 'KeyR') return { kind: 'results' };
  if (code === 'KeyP') return { kind: 'diagrams' };
  if (code === 'KeyA') return { kind: 'arrange' };
  if (HELP_CODES.has(code)) return { kind: 'help' };
  return null;
}

/** What a press means in the tasks drawer with a task open: [ and ] for the task before and after, S for the solution. */
export function taskActionOf(press: KeyPress): TaskAction | null {
  if (isTyping(press.target) || press.altKey || press.ctrlKey || press.metaKey || press.shiftKey) {
    return null;
  }
  if (press.repeat) return null;
  const code = codeOf(press);
  if (code === 'BracketLeft') return 'previous';
  if (code === 'BracketRight') return 'next';
  if (code === 'KeyS') return 'solution';
  return null;
}

/** A label with its key, for a tooltip: "ย้อนกลับ (Ctrl+Z)". */
export const withKey = (label: string, key: string): string => `${label} (${key})`;

/** The keys as written in the tooltips and in the help. */
export const KEYS = {
  undo: 'Ctrl+Z',
  redo: 'Ctrl+Shift+Z',
  delete: 'Delete',
  arrange: 'A',
  tasks: 'T',
  results: 'R',
  diagrams: 'P',
  help: 'H',
  fit: '0',
  actualSize: 'Shift+0',
  zoomIn: '+',
  zoomOut: '-',
} as const;

/** The `aria-keyshortcuts` of a control, in the form the attribute asks for. */
export const ARIA_KEYS = {
  undo: 'Control+Z Meta+Z',
  redo: 'Control+Shift+Z Control+Y Meta+Shift+Z',
  delete: 'Delete Backspace',
  arrange: 'A',
  tasks: 'T',
  results: 'R',
  diagrams: 'P',
  help: 'H ?',
} as const;
