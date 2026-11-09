import { fireEvent, render, screen } from '@testing-library/react';
import { useRef } from 'react';
import { Link, MemoryRouter, useLocation, useNavigate } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { resetLayers, useLayer, useRestoreFocus } from './layers';

/** Two layers, one above the other, and a back button that stands for the back gesture of a phone. */
function Harness() {
  const a = useLayer('a');
  const b = useLayer('b');
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const opener = useRef<HTMLButtonElement>(null);
  useRestoreFocus(a.open, opener);
  return (
    <div>
      <p data-testid="where">{pathname}</p>
      <p data-testid="open">{[a.open && 'a', b.open && 'b'].filter(Boolean).join(',')}</p>
      <button ref={opener} onClick={a.show}>
        show a
      </button>
      <button onClick={b.show}>show b</button>
      <button onClick={a.hide}>hide a</button>
      <button onClick={b.hide}>hide b</button>
      <button
        onClick={() => {
          a.hide();
          a.show();
        }}
      >
        hide and show a
      </button>
      <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate(1)}>forward</button>
      <Link to="/other" replace>
        replace link
      </Link>
    </div>
  );
}

function setup(
  entries: Parameters<typeof MemoryRouter>[0]['initialEntries'] = ['/start', '/page'],
) {
  return render(
    <MemoryRouter initialEntries={entries} initialIndex={entries ? entries.length - 1 : 0}>
      <Harness />
    </MemoryRouter>,
  );
}

const press = (name: string) => fireEvent.click(screen.getByRole('button', { name }));
const open = () => screen.getByTestId('open').textContent;
const where = () => screen.getByTestId('where').textContent;

beforeEach(() => resetLayers());
afterEach(() => {
  window.history.replaceState(null, '');
  resetLayers();
});

describe('layers of the history', () => {
  it('opens a layer, and the back gesture closes it and stays on the page', () => {
    setup();
    press('show a');
    expect(open()).toBe('a');
    press('back');
    expect(open()).toBe('');
    expect(where()).toBe('/page');
    // with nothing open, back leaves the page, as always
    press('back');
    expect(where()).toBe('/start');
  });

  it('takes the layers one at a time, the one on top first', () => {
    setup();
    press('show a');
    press('show b');
    expect(open()).toBe('a,b');
    press('back');
    expect(open()).toBe('a');
    press('back');
    expect(open()).toBe('');
    expect(where()).toBe('/page');
  });

  it('closes a layer with every one above it, and leaves no entry of them in the history', () => {
    setup();
    press('show a');
    press('show b');
    press('hide a');
    expect(open()).toBe('');
    press('back');
    expect(where()).toBe('/start');
  });

  it('closes only the layer on top when that one is asked for, and nothing when it is not open', () => {
    setup();
    press('show a');
    press('show b');
    press('hide b');
    expect(open()).toBe('a');
    press('hide b');
    expect(open()).toBe('a');
    press('back');
    expect(where()).toBe('/page');
  });

  it('opens a layer once however many times it is asked for', () => {
    setup();
    press('show a');
    press('show a');
    press('back');
    expect(open()).toBe('');
    expect(where()).toBe('/page');
  });

  it('puts a close and an open in order, and keeps one entry for the layer', () => {
    setup();
    press('show a');
    press('hide and show a');
    expect(open()).toBe('a');
    press('back');
    expect(open()).toBe('');
    expect(where()).toBe('/page');
  });

  it('opens the layer again when the history goes forward to it', () => {
    setup();
    press('show a');
    press('back');
    expect(open()).toBe('');
    press('forward');
    expect(open()).toBe('a');
  });

  it('lets a link that replaces the entry of a layer take its place, so back skips the layer', () => {
    setup();
    press('show a');
    fireEvent.click(screen.getByRole('link', { name: 'replace link' }));
    expect(where()).toBe('/other');
    expect(open()).toBe('');
    // the page below the layer is where back goes, not the layer: it was replaced
    press('back');
    expect(where()).toBe('/page');
    expect(open()).toBe('');
  });

  it('does not open again the layers a reload found, and goes back to the page below them', () => {
    window.history.replaceState({ usr: { layers: ['a', 'b'] }, key: 'k', idx: 2 }, '');
    resetLayers();
    setup([
      '/start',
      { pathname: '/page', state: { layers: ['a'] } },
      { pathname: '/page', state: { layers: ['a', 'b'] } },
    ]);
    expect(open()).toBe('');
    expect(where()).toBe('/start');
  });

  it('gives the focus back to the button that opened a layer when it closes', () => {
    setup();
    const opener = screen.getByRole('button', { name: 'show a' });
    press('show a');
    screen.getByRole('button', { name: 'show b' }).focus();
    press('back');
    expect(opener).toHaveFocus();
  });

  it('does not take the focus when the page changed meanwhile', () => {
    setup();
    const opener = screen.getByRole('button', { name: 'show a' });
    press('show a');
    screen.getByRole('button', { name: 'show b' }).focus();
    fireEvent.click(screen.getByRole('link', { name: 'replace link' }));
    expect(opener).not.toHaveFocus();
  });
});
