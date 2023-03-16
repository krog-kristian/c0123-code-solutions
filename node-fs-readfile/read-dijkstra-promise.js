import * as fsPromise from 'node:fs/promises';

const readOnly = fsPromise.readFile('dijkstra.txt', 'utf8');

readOnly
  .then((text) => console.log(text))
  .catch((error) => console.log('Could not read file:', error));
