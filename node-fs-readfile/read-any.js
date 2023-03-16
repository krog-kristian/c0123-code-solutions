import * as fs from 'node:fs';

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.log('Improper file name:', err);
  }
  console.log(data);
});
