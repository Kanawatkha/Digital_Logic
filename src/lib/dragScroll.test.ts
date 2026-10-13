import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { installDragScroll } from './dragScroll';

let remove: () => void;
let box: HTMLDivElement;

function pointer(type: string, init: PointerEventInit, target: Element = box) {
  target.dispatchEvent(new PointerEvent(type, { bubbles: true, pointerType: 'mouse', ...init }));
}

beforeEach(() => {
  box = document.createElement('div');
  box.style.overflowX = 'auto';
  Object.defineProperty(box, 'scrollWidth', { value: 900 });
  Object.defineProperty(box, 'clientWidth', { value: 300 });
  box.scrollTo = ((opts: ScrollToOptions) => {
    box.scrollLeft = opts.left ?? 0;
  }) as typeof box.scrollTo;
  document.body.append(box);
  remove = installDragScroll();
});

afterEach(() => {
  remove();
  box.remove();
});

describe('installDragScroll', () => {
  it('pans a wide area when dragging with the right button', () => {
    box.scrollLeft = 200;
    pointer('pointerdown', { button: 2, buttons: 2, clientX: 300 });
    pointer('pointermove', { button: 2, buttons: 2, clientX: 250 });
    expect(box.scrollLeft).toBe(250);
    pointer('pointerup', { button: 2 });
    pointer('pointermove', { buttons: 0, clientX: 100 });
    expect(box.scrollLeft).toBe(250);
  });

  it('leaves the left button alone so text can be selected', () => {
    box.scrollLeft = 200;
    pointer('pointerdown', { button: 0, buttons: 1, clientX: 300 });
    pointer('pointermove', { button: 0, buttons: 1, clientX: 100 });
    expect(box.scrollLeft).toBe(200);
    expect(document.body.style.userSelect).toBe('');
  });

  it('ignores a tiny movement so clicks keep working', () => {
    box.scrollLeft = 10;
    pointer('pointerdown', { button: 2, buttons: 2, clientX: 100 });
    pointer('pointermove', { button: 2, buttons: 2, clientX: 102 });
    expect(box.scrollLeft).toBe(10);
  });

  it('swallows the context menu that ends a right-button drag', () => {
    pointer('pointerdown', { button: 2, buttons: 2, clientX: 300 });
    pointer('pointermove', { button: 2, buttons: 2, clientX: 200 });
    pointer('pointerup', { button: 2 });
    const menu = new MouseEvent('contextmenu', { bubbles: true, cancelable: true });
    box.dispatchEvent(menu);
    expect(menu.defaultPrevented).toBe(true);
  });

  it('leaves touch alone', () => {
    pointer('pointerdown', { button: 0, buttons: 1, clientX: 300, pointerType: 'touch' });
    pointer('pointermove', { button: 0, buttons: 1, clientX: 100, pointerType: 'touch' });
    expect(box.scrollLeft).toBe(0);
  });
});
