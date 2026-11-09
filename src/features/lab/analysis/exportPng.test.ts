// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { backgroundBehind, saveBlob, sceneMarkup, standaloneSvg } from './exportPng';

const SVG_NS = 'http://www.w3.org/2000/svg';

function diagram(): SVGSVGElement {
  const style = document.createElement('style');
  style.textContent = '.ink { stroke: rgb(1, 2, 3); } .paper { fill: rgb(250, 249, 245); }';
  document.head.appendChild(style);
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 300 120');
  svg.setAttribute('width', '100%');
  svg.setAttribute('class', 'block w-full');
  svg.setAttribute('role', 'img');
  svg.innerHTML =
    '<desc>two boxes</desc><rect class="ink paper" width="10" height="10" stroke-width="2"/><text class="ink">A</text>';
  document.body.appendChild(svg);
  return svg;
}

afterEach(() => {
  document.head.innerHTML = '';
  document.body.innerHTML = '';
});

describe('a diagram as a picture', () => {
  it('stands on its own: sized from its view box, with a background behind everything', () => {
    const { markup, width, height } = standaloneSvg(diagram(), 'rgb(255, 255, 255)');
    expect(width).toBe(300);
    expect(height).toBe(120);
    const out = new DOMParser().parseFromString(markup, 'image/svg+xml').documentElement;
    expect(out.namespaceURI).toBe(SVG_NS);
    // the namespace is written once
    expect(markup.match(/xmlns=/g)).toHaveLength(1);
    expect(out.getAttribute('width')).toBe('300');
    expect(out.getAttribute('height')).toBe('120');
    expect(out.getAttribute('class')).toBeNull();
    expect(out.getAttribute('role')).toBeNull();
    const ground = out.firstElementChild!;
    expect(ground.tagName).toBe('rect');
    expect(ground.getAttribute('fill')).toBe('rgb(255, 255, 255)');
    expect(ground.getAttribute('width')).toBe('100%');
  });

  it('writes the look an element has on screen into it, and drops the classes', () => {
    const { markup } = standaloneSvg(diagram(), 'white');
    const out = new DOMParser().parseFromString(markup, 'image/svg+xml').documentElement;
    const rect = out.querySelector('rect[width="10"]')!;
    expect(rect.getAttribute('class')).toBeNull();
    const style = rect.getAttribute('style') ?? '';
    expect(style).toContain('stroke: rgb(1, 2, 3)');
    expect(style).toContain('fill: rgb(250, 249, 245)');
    expect(out.querySelector('text')?.getAttribute('style')).toContain('stroke: rgb(1, 2, 3)');
    // the diagram on the page was left alone
    expect(document.querySelector('rect')?.getAttribute('class')).toBe('ink paper');
    expect(document.querySelector('rect')?.getAttribute('style')).toBeNull();
  });
});

describe('the board as a picture', () => {
  it('is the scene with its own size, without the marks of work in progress and without its id', () => {
    document.body.innerHTML = `<svg><g id="lab-scene"><rect width="5" height="5" fill="#123456"/><g data-testid="locate-pulse"><circle r="3"/></g><g data-lab-keyboard-cursor=""><circle r="2"/></g></g></svg>`;
    const scene = document.getElementById('lab-scene')!;
    const out = new DOMParser().parseFromString(
      sceneMarkup(scene, 1700, 1302),
      'image/svg+xml',
    ).documentElement;
    expect(out.namespaceURI).toBe('http://www.w3.org/2000/svg');
    expect(out.getAttribute('viewBox')).toBe('0 0 1700 1302');
    expect(out.getAttribute('width')).toBe('1700');
    expect(out.getAttribute('height')).toBe('1302');
    expect(out.querySelector('rect')?.getAttribute('fill')).toBe('#123456');
    expect(out.querySelector('circle')).toBeNull();
    expect(out.querySelector('[id]')).toBeNull();
    // the page itself was left as it was
    expect(document.querySelectorAll('circle')).toHaveLength(2);
    expect(document.getElementById('lab-scene')).toBe(scene);
  });
});

describe('the color a diagram sits on', () => {
  it('is the first background found going up, and white when the page has none', () => {
    const style = document.createElement('style');
    style.textContent = '.cream { background-color: rgb(245, 240, 232); }';
    document.head.appendChild(style);
    document.body.innerHTML = '<div class="cream"><div><svg></svg></div></div>';
    expect(backgroundBehind(document.querySelector('svg')!)).toBe('rgb(245, 240, 232)');
    document.body.innerHTML = '<div><svg></svg></div>';
    expect(backgroundBehind(document.querySelector('svg')!)).toBe('#ffffff');
  });
});

describe('saving a file', () => {
  const urls = { create: vi.fn(() => 'blob:x'), revoke: vi.fn() };
  afterEach(() => vi.restoreAllMocks());

  it('hands the blob to the browser as a download with the name given', () => {
    URL.createObjectURL = urls.create;
    URL.revokeObjectURL = urls.revoke;
    const clicked: { href: string; download: string }[] = [];
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function (
      this: HTMLAnchorElement,
    ) {
      clicked.push({ href: this.href, download: this.download });
    });
    saveBlob(new Blob(['x'], { type: 'image/png' }), 'circuit.png');
    expect(clicked).toEqual([{ href: 'blob:x', download: 'circuit.png' }]);
    // the link does not stay in the page
    expect(document.querySelector('a')).toBeNull();
  });
});
