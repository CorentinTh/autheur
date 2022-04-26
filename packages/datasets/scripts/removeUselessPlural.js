const { join } = require('path');
const { readFileSync, writeFileSync, readdirSync } = require('fs');

const datasetsDir = join(__dirname, '..', 'data');

const files = readdirSync(datasetsDir).map((name) => ({ path: join(datasetsDir, name), name }));

for (const { path, name } of files) {
  const content = readFileSync(path, 'utf-8');

  const cleanContent = [
    ...new Set(
      content
        .split('\n')
        .map((line) => line.trim().toLowerCase())
        .sort((a, b) => a.localeCompare(b))
    ),
  ].join('\n');

  writeFileSync(path, cleanContent);

  if (content === cleanContent) {
    console.log(`-> File ${name} is already clean`);
  } else {
    console.log(`-> Cleaned file ${name}`);
  }
}
