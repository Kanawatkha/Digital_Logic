import { fileURLToPath } from 'node:url';
import { mkdirSync, writeFileSync } from 'node:fs';
import { buildContent, writeOutput } from './index.ts';
import { buildLabTasks, labTasksIndex } from './tasks.ts';

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
// the lab tasks sit beside the chapters: a small index for the list, one file of tasks for each kind
// (each its own lazy chunk), and a report for the author
mkdirSync(`${root}src/content/generated`, { recursive: true });
writeFileSync(
  `${root}src/content/generated/lab-tasks-index.json`,
  JSON.stringify(labTasksIndex(tasks.data)),
);
for (const group of tasks.data.groups) {
  writeFileSync(
    `${root}src/content/generated/lab-tasks-${group.id}.json`,
    JSON.stringify(group.tasks),
  );
}
writeFileSync(`${root}src/content/generated/lab-tasks-report.txt`, tasks.report);
const n = result.files.length;
console.log(
  `content: ${n} files converted, ${result.warnings.length} warning(s). Report: src/content/generated/report.txt`,
);
