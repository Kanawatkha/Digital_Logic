const SELF_CLOSING = /\/\s*>$/;

/**
 * Extracts and validates the single <svg> element of a figure block.
 * Rules: CONTENT-SCHEMA.md section 6. Throws with a readable message on any violation.
 */
export function extractSvg(raw: string, where: string): string {
  const start = raw.indexOf('<svg');
  const end = raw.lastIndexOf('</svg>');
  if (start < 0 || end < 0) throw new Error(`${where}: figure block without <svg>`);
  const svg = raw.slice(start, end + '</svg>'.length);

  if (/\n[ \t]*\n/.test(svg)) throw new Error(`${where}: blank line inside <svg>`);
  if (!/^<svg[^>]*\sviewBox="/.test(svg)) throw new Error(`${where}: <svg> has no viewBox`);
  if (/<script/i.test(svg)) throw new Error(`${where}: <script> inside <svg>`);
  if (/\son[a-z]+\s*=/i.test(svg))
    throw new Error(`${where}: event handler attribute inside <svg>`);
  if (/\s(?:xlink:)?href\s*=/i.test(svg)) throw new Error(`${where}: external href inside <svg>`);

  const stack: string[] = [];
  for (const m of svg.matchAll(/<(\/?)([a-zA-Z][\w:-]*)([^>]*)>/g)) {
    const [whole, closing, name, rest] = m;
    if (SELF_CLOSING.test(whole)) continue;
    if (closing) {
      const open = stack.pop();
      if (open !== name)
        throw new Error(`${where}: <svg> is not well formed (</${name}> closes <${open}>)`);
    } else {
      void rest;
      stack.push(name);
    }
  }
  if (stack.length > 0)
    throw new Error(`${where}: <svg> is not well formed (unclosed <${stack.pop()}>)`);
  return svg;
}
