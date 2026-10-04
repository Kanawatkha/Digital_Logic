/**
 * Data model produced by scripts/build-content and consumed by the React app.
 * Shared by both sides, so it must stay free of runtime code. See CONTENT-SCHEMA.md.
 */

export type Inline =
  | { t: 'text'; v: string }
  | { t: 'strong'; c: Inline[] }
  | { t: 'code'; v: string }
  | { t: 'math'; tex: string; html: string };

/** Table column alignment: n = none, l = left, c = center, r = right. */
export type Align = 'n' | 'l' | 'c' | 'r';

export type ListItem = { c: Inline[]; children: Block[] };

export type Block =
  | { t: 'p'; c: Inline[] }
  | { t: 'math'; tex: string; html: string }
  | { t: 'list'; ordered: boolean; items: ListItem[] }
  | { t: 'table'; align: Align[]; head: Inline[][]; rows: Inline[][][] }
  | { t: 'figure'; svg: string }
  | { t: 'note'; c: Block[] }
  | { t: 'example'; id: string; problem: Block[]; sol: Block[]; ans: Block[] };

export type NodeKind =
  | 'chapter'
  | 'section'
  | 'topic'
  | 'tips'
  | 'group'
  | 'exercise';

export type ContentNode = {
  /** Stable id, for example "summary/01/2.2". */
  id: string;
  kind: NodeKind;
  level: 1 | 2 | 3;
  /** "2.2" when the heading is numbered. */
  number?: string;
  title: Inline[];
  /** Explanation, formulas, tables, figures. Never examples (summary collection). */
  explain: Block[];
  /** Example blocks (summary) or the exercise body (worked-solutions). */
  examples: Block[];
  /** Heading of an examples group ("ตัวอย่าง") that was merged into this node's examples. */
  examplesTitle?: Inline[];
  children: ContentNode[];
  source: { file: string; line: number };
};

export type Collection = 'summary' | 'worked-solutions';

export type ContentFile = {
  collection: Collection;
  /** Two digit chapter key taken from the file name, "00".."06". */
  chapter: string;
  slug: string;
  title: Inline[];
  root: ContentNode;
};

export type ManifestEntry = {
  chapter: string;
  slug: string;
  title: string;
  /** Path of the generated JSON, relative to the generated folder. */
  file: string;
  nodes: number;
  examples: number;
  figures: number;
};

export type Manifest = {
  collections: Record<Collection, ManifestEntry[]>;
};
