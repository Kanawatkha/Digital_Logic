/**
 * Saving a diagram as a picture. The diagram is drawn with classes (`stroke-ink`, `fill-canvas`) whose
 * colors come from the page's style sheet, which a standalone SVG does not have: every element gets
 * the colors and strokes it has on screen written into it, then the SVG is drawn on a canvas.
 */

const PROPS = [
  'fill',
  'fill-opacity',
  'stroke',
  'stroke-width',
  'stroke-dasharray',
  'stroke-linecap',
  'stroke-linejoin',
  'opacity',
  'font-size',
  'font-weight',
  'font-family',
] as const;

/** The most pixels a side of the picture has, so that a large diagram does not break the canvas */
const MAX_SIDE = 8000;

/** The SVG as text that stands on its own: sized, with a background, with its look written into it. */
export function standaloneSvg(
  svg: SVGSVGElement,
  background: string,
): { markup: string; width: number; height: number } {
  const [, , boxWidth = 0, boxHeight = 0] = (svg.getAttribute('viewBox') ?? '')
    .split(/[\s,]+/)
    .map(Number);
  const width = boxWidth || svg.getBoundingClientRect().width;
  const height = boxHeight || svg.getBoundingClientRect().height;
  const clone = svg.cloneNode(true) as SVGSVGElement;
  const live = svg.querySelectorAll('*');
  const copy = clone.querySelectorAll('*');
  live.forEach((element, index) => {
    const target = copy[index];
    if (!target) return;
    const style = getComputedStyle(element);
    for (const prop of PROPS) {
      const value = style.getPropertyValue(prop);
      if (value) (target as SVGElement).style.setProperty(prop, value);
    }
    target.removeAttribute('class');
  });
  clone.removeAttribute('class');
  clone.removeAttribute('role');
  // the serializer writes the namespace itself; setting it as well would write it twice, which is not XML
  clone.setAttribute('width', String(width));
  clone.setAttribute('height', String(height));
  const ground = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  ground.setAttribute('width', '100%');
  ground.setAttribute('height', '100%');
  ground.setAttribute('fill', background);
  clone.insertBefore(ground, clone.firstChild);
  return { markup: new XMLSerializer().serializeToString(clone), width, height };
}

const SEE_THROUGH = /^(transparent|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*0\s*\))$/;

/** The color the diagram sits on: the first background found going up from it, or white. */
export function backgroundBehind(element: Element): string {
  for (let at: Element | null = element; at; at = at.parentElement) {
    const color = getComputedStyle(at).backgroundColor;
    if (color && !SEE_THROUGH.test(color.trim())) return color;
  }
  return '#ffffff';
}

/** Draws SVG text on a canvas and gives the PNG, `scale` times its size (less when that would be too large). */
async function markupToPng(
  markup: string,
  width: number,
  height: number,
  scale: number,
): Promise<Blob> {
  const factor = Math.min(scale, MAX_SIDE / Math.max(width, height));
  const url = URL.createObjectURL(new Blob([markup], { type: 'image/svg+xml;charset=utf-8' }));
  try {
    const image = new Image();
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error('the picture could not be drawn'));
      image.src = url;
    });
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(width * factor));
    canvas.height = Math.max(1, Math.round(height * factor));
    const context = canvas.getContext('2d');
    if (!context) throw new Error('no canvas');
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error('no picture'))),
        'image/png',
      ),
    );
  } finally {
    URL.revokeObjectURL(url);
  }
}

/** The diagram as a PNG, twice as sharp as it is laid out. */
export async function svgToPng(svg: SVGSVGElement): Promise<Blob> {
  const { markup, width, height } = standaloneSvg(svg, backgroundBehind(svg));
  return markupToPng(markup, width, height, 2);
}

/** What the scene holds only while a student is working: the ring of a warning, the cursor of keyboard wiring. */
const TRANSIENT = '[data-testid="locate-pulse"], [data-lab-keyboard-cursor]';

/**
 * The scene of the board (a group of the page, drawn in board px) as SVG text of its own, `width` by
 * `height` board px. The board is drawn with attributes, not style sheet classes, so a copy of it
 * stands on its own.
 */
export function sceneMarkup(scene: Element, width: number, height: number): string {
  const clone = scene.cloneNode(true) as Element;
  clone.removeAttribute('id');
  clone.querySelectorAll(TRANSIENT).forEach((element) => element.remove());
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.setAttribute('width', String(width));
  svg.setAttribute('height', String(height));
  svg.appendChild(clone);
  return new XMLSerializer().serializeToString(svg);
}

/** The board as a PNG at its own size. */
export function sceneToPng(scene: Element, width: number, height: number): Promise<Blob> {
  return markupToPng(sceneMarkup(scene, width, height), width, height, 1);
}

/** Hands a file to the browser to save. */
export function saveBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 2000);
}
