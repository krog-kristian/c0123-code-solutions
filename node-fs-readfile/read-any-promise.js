import * as fsPromise from 'node:fs/promises';

const readOnly = fsPromise.readFile(process.argv[2], 'utf8');

readOnly
  .then((text) => console.log(text))
  .catch((error) => console.log('Improper file name:', error));
