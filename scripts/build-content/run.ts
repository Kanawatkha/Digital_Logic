import { fileURLToPath } from 'node:url';
import { mkdirSync, writeFileSync } from 'node:fs';
import { buildContent, writeOutput } from './index.ts';
import { buildLabTasks } from './tasks.ts';

const root = fileURLToPath(new URL('../../', import.meta.url));
const result = buildContent(`${root}content`);
const tasks = buildLabTasks(`${root}content`);
const errors = [...result.errors, ...tasks.errors];

if (errors.length > 0) {
  console.error(`content: ${errors.length} error(s)`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

writeOutput(result, `${root}src/content/generated`);
// the lab tasks sit beside the chapters, as one file, with a report for the author
mkdirSync(`${root}src/content/generated`, { recursive: true });
writeFileSync(`${root}src/content/generated/lab-tasks.json`, JSON.stringify(tasks.data));
writeFileSync(`${root}src/content/generated/lab-tasks-report.txt`, tasks.report);
const n = result.files.length;
console.log(
  `content: ${n} files converted, ${result.warnings.length} warning(s). Report: src/content/generated/report.txt`,
);
