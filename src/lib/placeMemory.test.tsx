import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { SECTIONS, sectionOfPath, sectionOfRoot, type Section } from '@/config/sections';
import { recallPlace, rememberPlace, resetPlaces, usePlaceMemory } from '@/lib/placeMemory';

const section = (id: Section['id']) => SECTIONS.find((s) => s.id === id) as Section;

beforeEach(() => resetPlaces());
afterEach(() => vi.restoreAllMocks());

describe('the sections of the header', () => {
  it('has a main page that is one of its pages', () => {
    for (const s of SECTIONS) expect(s.pages).toContain(s.home);
  });

  it('knows the tab and the section of an address', () => {
    expect(sectionOfRoot('/exam')?.id).toBe('exam');
    expect(sectionOfRoot('/lab')).toBeUndefined();
    expect(sectionOfPath('/exam/final/3')?.id).toBe('exam');
    expect(sectionOfPath('/chapters/final/8')?.id).toBe('chapters');
    expect(sectionOfPath('/formulas/mid')?.id).toBe('formulas');
    expect(sectionOfPath('/examination')).toBeUndefined();
    expect(sectionOfPath('/')).toBeUndefined();
  });
});

describe('the place memory', () => {
  it('remembers the last page of each section on its own', () => {
    rememberPlace('/exam/final/3');
    rememberPlace('/chapters/final/8');
    rememberPlace('/exam/mid/2');
    expect(recallPlace(section('exam'))).toBe('/exam/mid/2');
    expect(recallPlace(section('chapters'))).toBe('/chapters/final/8');
    expect(recallPlace(section('formulas'))).toBe('/formulas/mid');
  });

  it('starts at the main page of a section that was never opened', () => {
    expect(recallPlace(section('exam'))).toBe('/exam/mid');
    expect(recallPlace(section('chapters'))).toBe('/chapters/mid/1');
  });

  it('ignores addresses that are not a page of a section', () => {
    rememberPlace('/');
    rememberPlace('/lab');
    rememberPlace('/exam/final/9');
    rememberPlace('/chapters/mid/7');
    expect(recallPlace(section('exam'))).toBe('/exam/mid');
    expect(recallPlace(section('chapters'))).toBe('/chapters/mid/1');
  });

  it('goes to the main page when what was stored is not a page any more', () => {
    window.sessionStorage.setItem('dl-place:exam', '/exam/final/9');
    expect(recallPlace(section('exam'))).toBe('/exam/mid');
  });

  it('keeps the page in the session storage of the tab', () => {
    rememberPlace('/formulas/final');
    expect(window.sessionStorage.getItem('dl-place:formulas')).toBe('/formulas/final');
  });

  it('still remembers for the visit when the browser gives no storage', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    rememberPlace('/exam/final/2');
    expect(recallPlace(section('exam'))).toBe('/exam/final/2');
  });

  it('is updated by the pages that are opened', () => {
    function Probe() {
      usePlaceMemory();
      return null;
    }
    render(
      <MemoryRouter initialEntries={['/exam/final/4']}>
        <Probe />
      </MemoryRouter>,
    );
    expect(recallPlace(section('exam'))).toBe('/exam/final/4');
  });
});
