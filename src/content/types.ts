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

// ---------------------------------------------------------------- lab tasks

/** A gate of a lab task: its inputs are A, B, C, 0, 1 or the name of another gate. */
export type LabGate = { name: string; kind: 'NOT' | 'AND' | 'OR' | 'NAND' | 'NOR'; inputs: string[] };

/** Gates by name and the signal that drives each output. A gate of a figure has 2 or 3 inputs, one of a solution 2. */
export type LabNetlist = { gates: LabGate[]; outputs: Record<string, string> };

export type LabTaskOutput = {
  name: string;
  /** What the output must be in rows 0 to 7 (A is the top bit): 1, 0, or x when it does not matter */
  cells: ('0' | '1' | 'x')[];
};

export type LabTask = {
  /** Stable, for example "03.2": file number, then place in the file */
  id: string;
  /** Place in the file, from 1 */
  number: number;
  title: Inline[];
  /** The statement: text, formulas and tables */
  statement: Block[];
  outputs: LabTaskOutput[];
  /** The only kind of chip that may be used, or null */
  only: 'nand' | 'nor' | null;
  /** The circuit given in the statement, drawn from this */
  figure: LabNetlist | null;
  /** The worked solution written in the Markdown, up to the answer */
  steps: Block[];
  /** The answer lines written in the Markdown, one for each output */
  answer: Block[];
  /** The circuit of the answer: a smallest circuit found by the build, its gates and its simplified equations */
  solution: { netlist: LabNetlist; gates: number; equations: Record<string, string> };
};

export type LabTaskGroup = {
  /** The file number, for example "03" */
  id: string;
  title: Inline[];
  intro: Block[];
  tasks: LabTask[];
};

export type LabTasksData = { groups: LabTaskGroup[] };
