import { fileURLToPath } from 'node:url';
import { buildContent, writeOutput } from './index.ts';

const root = fileURLToPath(new URL('../../', import.meta.url));
const result = buildContent(`${root}content`);

if (result.errors.length > 0) {
  console.error(`content: ${result.errors.length} error(s)`);
  for (const e of result.errors) console.error(`  - ${e}`);
  process.exit(1);
}

writeOutput(result, `${root}src/content/generated`);
const n = result.files.length;
console.log(
  `content: ${n} files converted, ${result.warnings.length} warning(s). Report: src/content/generated/report.txt`,
);
