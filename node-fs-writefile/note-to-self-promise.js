import * as fs from 'node:fs/promises';

const [, , ...input] = process.argv;

fs.writeFile('note.txt', input.join(' ') + '\n')
  .catch((err) => console.error('Whoops:', err));
