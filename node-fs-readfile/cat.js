import * as fsPromise from 'node:fs/promises';

const userInput = process.argv;
let readFiles = [];
[,, ...readFiles] = userInput;

const fileText = readFiles.map((file) => fsPromise.readFile(file, 'utf8'));

Promise.all(fileText)
  .then((txt) => console.log(txt.join('\n')))
  .catch((error) => console.log('Incorrect file names:', error));
