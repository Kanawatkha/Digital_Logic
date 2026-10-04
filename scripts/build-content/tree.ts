import type {
  Block,
  Collection,
  ContentFile,
  ContentNode,
  Inline,
  NodeKind,
} from '../../src/content/types.ts';
import type { Token } from './parse.ts';

/* ---------- helpers ---------- */

export function inlineText(c: Inline[]): string {
  return c
    .map((i) => {
      if (i.t === 'text' || i.t === 'code') return i.v;
      if (i.t === 'strong') return inlineText(i.c);
      return `$${i.tex}$`;
    })
    .join('');
}

const SOL_TEX = '\\mathbf{Sol}^{n}';

function isSol(b: Block): boolean {
  return b.t === 'p' && b.c.length === 1 && b.c[0].t === 'math' && b.c[0].tex.trim() === SOL_TEX;
}

function isAns(b: Block): boolean {
  return b.t === 'p' && b.c[0]?.t === 'math' && b.c[0].tex.trim().startsWith('\\mathbf{Ans}');
}

/** A paragraph that opens with a bold "ตัวอย่าง..." lead-in starts an example. */
function isLeadIn(b: Block): boolean {
  return (
    b.t === 'p' && b.c[0]?.t === 'strong' && inlineText(b.c[0].c).trimStart().startsWith('ตัวอย่าง')
  );
}

export function walkBlocks(blocks: Block[], fn: (b: Block) => void): void {
  for (const b of blocks) {
    fn(b);
    if (b.t === 'list') for (const it of b.items) walkBlocks(it.children, fn);
    if (b.t === 'note') walkBlocks(b.c, fn);
    if (b.t === 'example') {
      walkBlocks(b.problem, fn);
      walkBlocks(b.sol, fn);
      walkBlocks(b.ans, fn);
    }
  }
}

export function walkNodes(node: ContentNode, fn: (n: ContentNode) => void): void {
  fn(node);
  for (const c of node.children) walkNodes(c, fn);
}

/* ---------- examples ---------- */

type Stage = 'problem' | 'sol' | 'ans';
type Draft = { problem: Block[]; sol: Block[]; ans: Block[]; stage: Stage };

/**
 * Turns a run of blocks into example blocks (see CONTENT-SCHEMA.md section 4).
 * Runs that never reach a Sol marker stay plain blocks.
 */
export function segmentExamples(
  blocks: Block[],
  idPrefix: string,
  warn: (m: string) => void,
  expectProblem = true,
): Block[] {
  const out: Block[] = [];
  let cur: Draft | null = null;
  let n = 0;
  const fresh = (): Draft => ({ problem: [], sol: [], ans: [], stage: 'problem' });
  const flush = () => {
    if (!cur) return;
    if (cur.stage === 'problem') {
      out.push(...cur.problem);
    } else {
      n++;
      if (expectProblem && cur.problem.length === 0)
        warn(`${idPrefix}/e${n}: example has no problem text before Sol`);
      out.push({
        t: 'example',
        id: `${idPrefix}/e${n}`,
        problem: cur.problem,
        sol: cur.sol,
        ans: cur.ans,
      });
    }
    cur = null;
  };
  for (const b of blocks) {
    if (isLeadIn(b)) {
      flush();
      cur = fresh();
      cur.problem.push(b);
      continue;
    }
    if (isSol(b)) {
      if (!cur) cur = fresh();
      else if (cur.stage !== 'problem') {
        flush();
        cur = fresh();
      }
      cur.stage = 'sol';
      continue;
    }
    if (!cur) cur = fresh();
    if (isAns(b)) {
      cur.stage = 'ans';
      cur.ans.push(b);
      continue;
    }
    cur[cur.stage].push(b);
  }
  flush();
  return out;
}

function hasExampleMarker(blocks: Block[]): boolean {
  return blocks.some((b) => isLeadIn(b) || isSol(b));
}

/** Splits leaf blocks into explanation and the region that starts at the first example. */
function splitLeaf(blocks: Block[], where: string, warn: (m: string) => void) {
  const idx = blocks.findIndex((b) => isLeadIn(b) || isSol(b));
  if (idx < 0) return { explain: blocks, region: [] as Block[] };
  if (!isLeadIn(blocks[idx])) warn(`${where}: first example has no "ตัวอย่าง" lead-in`);
  return { explain: blocks.slice(0, idx), region: blocks.slice(idx) };
}

/* ---------- raw heading tree ---------- */

type Raw = { level: number; title: Inline[]; line: number; blocks: Block[]; children: Raw[] };

export function buildRaw(tokens: Token[], file: string): Raw {
  const root: Raw = { level: 0, title: [], line: 0, blocks: [], children: [] };
  const stack: Raw[] = [root];
  for (const t of tokens) {
    if (t.k === 'heading') {
      const node: Raw = { level: t.level, title: t.title, line: t.line, blocks: [], children: [] };
      while (stack[stack.length - 1].level >= t.level) stack.pop();
      stack[stack.length - 1].children.push(node);
      stack.push(node);
    } else {
      stack[stack.length - 1].blocks.push(t.block);
    }
  }
  if (root.blocks.length > 0) throw new Error(`${file}: content before the first heading`);
  if (root.children.length !== 1 || root.children[0].level !== 1) {
    throw new Error(`${file}: expected exactly one level-1 heading`);
  }
  return root.children[0];
}

/* ---------- node construction ---------- */

type Ctx = { collection: Collection; chapter: string; file: string; warn: (m: string) => void };

const NUMBER_RE = /^(\d+(?:\.\d+)*)\.?\s/;

function numberOf(title: Inline[]): string | undefined {
  return NUMBER_RE.exec(inlineText(title).trim())?.[1];
}

function make(
  ctx: Ctx,
  raw: Raw,
  kind: NodeKind,
  level: 1 | 2 | 3,
  key: string,
  parts: { explain: Block[]; examples: Block[]; children: ContentNode[]; examplesTitle?: Inline[] },
): ContentNode {
  const number = numberOf(raw.title);
  return {
    id: `${ctx.collection}/${ctx.chapter}/${key}`,
    kind,
    level,
    ...(number ? { number } : {}),
    title: raw.title,
    explain: parts.explain,
    examples: parts.examples,
    ...(parts.examplesTitle ? { examplesTitle: parts.examplesTitle } : {}),
    children: parts.children,
    source: { file: ctx.file, line: raw.line },
  };
}

const isExampleGroup = (r: Raw) =>
  /^(?:\d+(?:\.\d+)*\.?\s+)?ตัวอย่าง/.test(inlineText(r.title).trim());

/** Rules of CONTENT-SCHEMA.md section 5, used for summary chapters 01-05. */
function summaryChapter(raw: Raw, ctx: Ctx): ContentNode {
  const sections = raw.children.map((sec, si): ContentNode => {
    const key = numberOf(sec.title) ?? `h2-${si + 1}`;
    const id = `${ctx.collection}/${ctx.chapter}/${key}`;
    const plain = inlineText(sec.title);

    if (plain.includes('ข้อควรระวังในการสอบ')) {
      return make(ctx, sec, 'tips', 2, key, { explain: sec.blocks, examples: [], children: [] });
    }

    const hasTopics = sec.children.some((c) => !isExampleGroup(c));
    const ownHasExamples = hasExampleMarker(sec.blocks);

    const leafOf = (
      r: Raw,
      blocks: Block[],
      extra: Block[],
      leafKey: string,
      kind: NodeKind,
      level: 2 | 3,
      examplesTitle?: Inline[],
    ) => {
      const { explain, region } = splitLeaf(blocks, `${id}`, ctx.warn);
      const examples = segmentExamples(
        [...region, ...extra],
        `${ctx.collection}/${ctx.chapter}/${leafKey}`,
        ctx.warn,
      );
      return make(ctx, r, kind, level, leafKey, { explain, examples, children: [], examplesTitle });
    };

    if (!hasTopics) {
      // examples groups attach to this section (rule 3)
      const groups = sec.children;
      return leafOf(
        sec,
        sec.blocks,
        groups.flatMap((g) => g.blocks),
        key,
        'section',
        2,
        groups[0]?.title,
      );
    }

    const children: ContentNode[] = [];
    let intro = sec.blocks;
    if (ownHasExamples) {
      ctx.warn(
        `${id}: section mixes its own examples with topics; added an implicit overview topic`,
      );
      children.push(leafOf(sec, sec.blocks, [], `${key}#overview`, 'topic', 3));
      intro = [];
    }
    sec.children.forEach((t, ti) => {
      const tkey = numberOf(t.title) ?? `h3-${si + 1}-${ti + 1}`;
      if (isExampleGroup(t)) {
        // an examples group next to real topics becomes an examples-only topic (rule 3)
        const examples = segmentExamples(
          t.blocks,
          `${ctx.collection}/${ctx.chapter}/${tkey}`,
          ctx.warn,
        );
        children.push(make(ctx, t, 'topic', 3, tkey, { explain: [], examples, children: [] }));
      } else {
        children.push(leafOf(t, t.blocks, [], tkey, 'topic', 3));
      }
    });
    return make(ctx, sec, 'section', 2, key, { explain: intro, examples: [], children });
  });

  const { explain, region } = splitLeaf(raw.blocks, `${ctx.collection}/${ctx.chapter}`, ctx.warn);
  return make(ctx, raw, 'chapter', 1, 'chapter', {
    explain,
    examples: segmentExamples(region, `${ctx.collection}/${ctx.chapter}/chapter`, ctx.warn),
    children: sections,
  });
}

/** Generic mapping for worked-solutions and the formula sheet: one node per heading. */
function genericChapter(raw: Raw, ctx: Ctx): ContentNode {
  const worked = ctx.collection === 'worked-solutions';
  const build = (r: Raw, level: 1 | 2 | 3, key: string): ContentNode => {
    const kind: NodeKind =
      level === 1
        ? 'chapter'
        : worked
          ? level === 2
            ? 'group'
            : 'exercise'
          : level === 2
            ? 'section'
            : 'topic';
    const id = `${ctx.collection}/${ctx.chapter}/${key}`;
    const withExamples = worked && hasExampleMarker(r.blocks);
    const explain = withExamples ? [] : r.blocks;
    const examples = withExamples ? segmentExamples(r.blocks, id, ctx.warn, false) : [];
    const children = r.children.map((c, ci) => {
      const lvl = c.level as 2 | 3;
      const childKey = `${key === 'chapter' ? '' : `${key}.`}h${lvl}-${ci + 1}`;
      return build(c, lvl, childKey);
    });
    return make(ctx, r, kind, level, key, { explain, examples, children });
  };
  return build(raw, 1, 'chapter');
}

export function buildContentFile(
  raw: Raw,
  meta: { collection: Collection; chapter: string; slug: string; file: string },
  warn: (m: string) => void,
): ContentFile {
  const ctx: Ctx = { collection: meta.collection, chapter: meta.chapter, file: meta.file, warn };
  const isChapterSummary = meta.collection === 'summary' && meta.chapter !== '00';
  return {
    collection: meta.collection,
    chapter: meta.chapter,
    slug: meta.slug,
    title: raw.title,
    root: isChapterSummary ? summaryChapter(raw, ctx) : genericChapter(raw, ctx),
  };
}
