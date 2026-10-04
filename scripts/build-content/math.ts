import katex from 'katex';

const cache = new Map<string, string>();

/**
 * Pre-renders TeX to HTML with KaTeX. Any problem fails the build.
 * Strict mode is on, except for Thai text inside \text{...}, which KaTeX reports as a
 * non-fatal "unicodeTextInMathMode"-style diagnostic although it renders correctly.
 */
export function renderMath(tex: string, display: boolean): string {
  const key = `${display ? 'D' : 'I'}:${tex}`;
  const hit = cache.get(key);
  if (hit !== undefined) return hit;
  const html = katex.renderToString(tex, {
    displayMode: display,
    throwOnError: true,
    output: 'htmlAndMathml',
    strict: (code: string) => (code === 'unicodeTextInMathMode' ? 'ignore' : 'error'),
  });
  cache.set(key, html);
  return html;
}
