import { writeFile } from 'node:fs/promises';

const [,, ...input] = process.argv;

writeFile('note.txt', input.join(' ') + '\n', (err) => {
  if (err) {
    console.error('Master file overwritten:', err);
  }
});
