// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import { codeOf, isTyping, labActionOf, taskActionOf, withKey, type KeyPress } from './shortcuts';

const press = (over: Partial<KeyPress>): KeyPress => ({
  code: '',
  key: '',
  ctrlKey: false,
  metaKey: false,
  altKey: false,
  shiftKey: false,
  repeat: false,
  target: document.body,
  ...over,
});

describe('the shortcuts of the lab', () => {
  it('reads undo and redo by Ctrl or Cmd, with Z, Shift and Z, or Y', () => {
    expect(labActionOf(press({ code: 'KeyZ', ctrlKey: true }))).toEqual({ kind: 'undo' });
    expect(labActionOf(press({ code: 'KeyZ', metaKey: true }))).toEqual({ kind: 'undo' });
    expect(labActionOf(press({ code: 'KeyZ', ctrlKey: true, shiftKey: true }))).toEqual({
      kind: 'redo',
    });
    expect(labActionOf(press({ code: 'KeyY', ctrlKey: true }))).toEqual({ kind: 'redo' });
    expect(labActionOf(press({ code: 'KeyY', ctrlKey: true, shiftKey: true }))).toBeNull();
    // other chords belong to the browser
    expect(labActionOf(press({ code: 'KeyT', ctrlKey: true }))).toBeNull();
    expect(labActionOf(press({ code: 'KeyR', metaKey: true }))).toBeNull();
    expect(labActionOf(press({ code: 'KeyP', ctrlKey: true }))).toBeNull();
    expect(labActionOf(press({ code: 'KeyZ', ctrlKey: true, altKey: true }))).toBeNull();
  });

  it('works by the place of the key, so a Thai layout does the same', () => {
    // the key of Z prints a Thai letter there
    expect(labActionOf(press({ code: 'KeyZ', key: 'ผ', ctrlKey: true }))).toEqual({ kind: 'undo' });
    expect(labActionOf(press({ code: 'KeyT', key: 'ะ' }))).toEqual({ kind: 'tasks' });
    expect(labActionOf(press({ code: 'KeyR', key: 'พ' }))).toEqual({ kind: 'results' });
    expect(labActionOf(press({ code: 'KeyP', key: 'ย' }))).toEqual({ kind: 'diagrams' });
    expect(labActionOf(press({ code: 'KeyA', key: 'ฟ' }))).toEqual({ kind: 'arrange' });
    expect(labActionOf(press({ code: 'KeyH', key: '้' }))).toEqual({ kind: 'help' });
  });

  it('falls back to what the key printed when it says no place (a screen keyboard)', () => {
    expect(codeOf(press({ key: 'z' }))).toBe('KeyZ');
    expect(codeOf(press({ key: '3' }))).toBe('Digit3');
    expect(codeOf(press({ key: '?' }))).toBe('Slash');
    expect(labActionOf(press({ key: 'z', ctrlKey: true }))).toEqual({ kind: 'undo' });
    expect(labActionOf(press({ key: 'Delete' }))).toEqual({ kind: 'delete' });
    expect(labActionOf(press({ key: 'Escape' }))).toEqual({ kind: 'escape' });
  });

  it('opens the panels, arranges, and asks for help, with no other key held', () => {
    expect(labActionOf(press({ code: 'KeyT' }))).toEqual({ kind: 'tasks' });
    expect(labActionOf(press({ code: 'KeyR' }))).toEqual({ kind: 'results' });
    expect(labActionOf(press({ code: 'KeyP' }))).toEqual({ kind: 'diagrams' });
    expect(labActionOf(press({ code: 'KeyA' }))).toEqual({ kind: 'arrange' });
    expect(labActionOf(press({ code: 'KeyH' }))).toEqual({ kind: 'help' });
    expect(labActionOf(press({ code: 'Slash', key: '?', shiftKey: true }))).toEqual({
      kind: 'help',
    });
    // a letter with Shift or Alt is not a shortcut
    expect(labActionOf(press({ code: 'KeyT', shiftKey: true }))).toBeNull();
    expect(labActionOf(press({ code: 'KeyT', altKey: true }))).toBeNull();
    expect(labActionOf(press({ code: 'KeyQ' }))).toBeNull();
  });

  it('turns the keys 1 to 8 into switches 0 to 7, the digit row and the number pad alike', () => {
    for (let n = 1; n <= 8; n++) {
      expect(labActionOf(press({ code: `Digit${n}` }))).toEqual({ kind: 'switch', index: n - 1 });
      expect(labActionOf(press({ code: `Numpad${n}` }))).toEqual({ kind: 'switch', index: n - 1 });
    }
    expect(labActionOf(press({ code: 'Digit0' }))).toBeNull();
    expect(labActionOf(press({ code: 'Digit9' }))).toBeNull();
    // Shift and a digit is a symbol, and Shift and 0 is the real size of the board
    expect(labActionOf(press({ code: 'Digit1', shiftKey: true }))).toBeNull();
    expect(labActionOf(press({ code: 'Digit0', shiftKey: true }))).toBeNull();
  });

  it('deletes with Delete and Backspace, and Esc is Esc', () => {
    expect(labActionOf(press({ code: 'Delete' }))).toEqual({ kind: 'delete' });
    expect(labActionOf(press({ code: 'Backspace' }))).toEqual({ kind: 'delete' });
    expect(labActionOf(press({ code: 'Escape' }))).toEqual({ kind: 'escape' });
  });

  it('does not repeat what opens or toggles while a key is held, but repeats undo, redo and delete', () => {
    expect(labActionOf(press({ code: 'KeyT', repeat: true }))).toBeNull();
    expect(labActionOf(press({ code: 'Digit1', repeat: true }))).toBeNull();
    expect(labActionOf(press({ code: 'KeyZ', ctrlKey: true, repeat: true }))).toEqual({
      kind: 'undo',
    });
    expect(labActionOf(press({ code: 'Delete', repeat: true }))).toEqual({ kind: 'delete' });
  });

  it('keeps out of the places where text is typed', () => {
    for (const html of ['<input type="text">', '<textarea></textarea>', '<select></select>']) {
      const holder = document.createElement('div');
      holder.innerHTML = html;
      const field = holder.firstElementChild as HTMLElement;
      expect(isTyping(field)).toBe(true);
      expect(labActionOf(press({ code: 'KeyT', target: field }))).toBeNull();
      expect(labActionOf(press({ code: 'KeyZ', ctrlKey: true, target: field }))).toBeNull();
      expect(labActionOf(press({ code: 'Backspace', target: field }))).toBeNull();
      expect(taskActionOf(press({ code: 'KeyS', target: field }))).toBeNull();
    }
    const editable = document.createElement('div');
    editable.contentEditable = 'true';
    // jsdom does not compute isContentEditable, so the property is set
    Object.defineProperty(editable, 'isContentEditable', { value: true });
    expect(isTyping(editable)).toBe(true);
    // a checkbox or a button takes no text
    const box = document.createElement('input');
    box.type = 'checkbox';
    expect(isTyping(box)).toBe(false);
    expect(labActionOf(press({ code: 'KeyT', target: box }))).toEqual({ kind: 'tasks' });
    expect(isTyping(document.createElement('button'))).toBe(false);
  });

  it('reads [ and ] and S in the tasks drawer, with no other key held', () => {
    expect(taskActionOf(press({ code: 'BracketLeft' }))).toBe('previous');
    expect(taskActionOf(press({ code: 'BracketRight' }))).toBe('next');
    expect(taskActionOf(press({ code: 'KeyS' }))).toBe('solution');
    expect(taskActionOf(press({ code: 'KeyS', ctrlKey: true }))).toBeNull();
    expect(taskActionOf(press({ code: 'KeyS', shiftKey: true }))).toBeNull();
    expect(taskActionOf(press({ code: 'KeyS', repeat: true }))).toBeNull();
    expect(taskActionOf(press({ key: ']' }))).toBe('next');
    expect(taskActionOf(press({ code: 'KeyT' }))).toBeNull();
  });

  it('writes a label with its key for a tooltip', () => {
    expect(withKey('ย้อนกลับ', 'Ctrl+Z')).toBe('ย้อนกลับ (Ctrl+Z)');
  });
});
