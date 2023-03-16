import * as fs from 'node:fs';

const randomNumber = Math.round(Math.random() * 10).toString();

fs.writeFile('./random.txt', randomNumber, (err) => {
  if (err) {
    console.error('Whoops:', err);
  }
});
