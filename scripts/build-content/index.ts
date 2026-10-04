import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import type { Collection, ContentFile, Manifest, ManifestEntry } from '../../src/content/types.ts';
import { parseDocument } from './parse.ts';
import { projectData, projectMarkdown } from './project.ts';
import { renderReport } from './report.ts';
import { buildContentFile, buildRaw, inlineText, walkBlocks, walkNodes } from './tree.ts';

export type BuildResult = {
  files: ContentFile[];
  manifest: Manifest;
  warnings: string[];
  errors: string[];
  report: string;
};

const COLLECTIONS: Collection[] = ['summary', 'worked-solutions'];

function slugOf(fileName: string): { chapter: string; slug: string } {
  const m = /^(\d{2})-(.+)\.md$/.exec(fileName);
  if (!m) throw new Error(`content file name must look like NN-name.md: ${fileName}`);
  return { chapter: m[1], slug: m[2].replace(/-summary$/, '') };
}

/** Converts every Markdown file under contentDir. Never writes; see writeOutput. */
export function buildContent(contentDir: string): BuildResult {
  const warnings: string[] = [];
  const errors: string[] = [];
  const files: ContentFile[] = [];

  for (const collection of COLLECTIONS) {
    const dir = join(contentDir, collection);
    const names = readdirSync(dir)
      .filter((f) => f.endsWith('.md'))
      .sort();
    for (const name of names) {
      const rel = `${collection}/${name}`;
      const md = readFileSync(join(dir, name), 'utf8');
      try {
        const { chapter, slug } = slugOf(name);
        const raw = buildRaw(parseDocument(md, rel), rel);
        const file = buildContentFile(raw, { collection, chapter, slug, file: rel }, (m) =>
          warnings.push(m),
        );
        files.push(file);

        // round trip: Markdown and generated data must project to the same text, math and figures
        const a = projectMarkdown(md);
        const b = projectData(file);
        if (a.text !== b.text) {
          let k = 0;
          while (k < a.text.length && a.text[k] === b.text[k]) k++;
          errors.push(
            `${rel}: round-trip text mismatch at char ${k}\n    md  : ...${a.text.slice(Math.max(0, k - 20), k + 40)}\n    data: ...${b.text.slice(Math.max(0, k - 20), k + 40)}`,
          );
        }
        if (a.figures !== b.figures)
          errors.push(`${rel}: figure count md=${a.figures} data=${b.figures}`);
        if (a.math.length !== b.math.length || a.math.some((x, i) => x !== b.math[i])) {
          const i = a.math.findIndex((x, idx) => x !== b.math[idx]);
          errors.push(
            `${rel}: math mismatch (md ${a.math.length}, data ${b.math.length}) first diff at #${i}: ${a.math[i]} | ${b.math[i]}`,
          );
        }

        // unique node ids
        const seen = new Set<string>();
        walkNodes(file.root, (n) => {
          if (seen.has(n.id)) errors.push(`${rel}: duplicate node id ${n.id}`);
          seen.add(n.id);
        });
      } catch (e) {
        errors.push(`${rel}: ${e instanceof Error ? e.message : String(e)}`);
      }
    }
  }

  const manifest: Manifest = { collections: { summary: [], 'worked-solutions': [] } };
  for (const f of files) {
    let nodes = 0;
    let examples = 0;
    let figures = 0;
    walkNodes(f.root, (n) => {
      nodes++;
      walkBlocks([...n.explain, ...n.examples], (b) => {
        if (b.t === 'example') examples++;
        if (b.t === 'figure') figures++;
      });
    });
    const entry: ManifestEntry = {
      chapter: f.chapter,
      slug: f.slug,
      title: inlineText(f.title),
      file: `${f.collection}/${f.chapter}.json`,
      nodes,
      examples,
      figures,
    };
    manifest.collections[f.collection].push(entry);
  }

  return { files, manifest, warnings, errors, report: renderReport(files, manifest, warnings) };
}

export function writeOutput(result: BuildResult, outDir: string): void {
  rmSync(outDir, { recursive: true, force: true });
  for (const c of COLLECTIONS) mkdirSync(join(outDir, c), { recursive: true });
  for (const f of result.files) {
    writeFileSync(join(outDir, f.collection, `${f.chapter}.json`), JSON.stringify(f));
  }
  writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(result.manifest, null, 2));
  writeFileSync(join(outDir, 'report.txt'), result.report);
}

export { basename };
