import * as fs from 'node:fs/promises';

const read = process.argv[2];
const copyTo = process.argv[3];
if (!copyTo.endsWith('.txt')) {
  console.error('Please use a .txt file format');
  process.exit(1);
}

fs.readFile(read, 'utf8')
  .then((text) => fs.writeFile(copyTo, text))
  .catch((error) => console.error('RIP', error));
