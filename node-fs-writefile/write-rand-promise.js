import { writeFile } from 'node:fs/promises';

const randomNumber = Math.round(Math.random() * 10).toString();

writeFile('random.txt', randomNumber + '\n')
  .catch((err) => console.error('Whoops:', err));
