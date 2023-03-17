import * as fs from 'node:fs/promises';

const command = process.argv[2];
const input1 = process.argv[3];
const input2 = process.argv[4];
if (process.argv.length > 5) {
  console.error('Please enter up to three arguments. A command followed by two optional arguments.');
  process.exit(1);
}
// valid commands read, create, update, delete
/**
 * CLI input to read, add, update and delete notes from a JSON file.
 */
switch (command) {
  case 'read':
    read();
    break;
  case 'create':
    create();
    break;
  case 'update':
    update();
    break;
  case 'delete':
    deleteEntry();
    break;
  default:
    console.error('Improper command given');
    process.exit(1);
}

/**
 * The read function is the first step for all other functions but
 * if called to only read will log the contents of the notes.
 * @returns The parsed JSON Object to be used by other functions
 */
async function read() {
  try {
    const theObject = await fs.readFile('data.json', 'utf8');
    const parsedObject = JSON.parse(theObject);
    if (command === 'read') {
      for (const [key, value] of Object.entries(parsedObject.notes)) {
        console.log(`${key}: ${value}`);
      }
    }
    return parsedObject;
  } catch (err) {
    console.error('An error occured:', err);
  }
}
/**
 * The create function takes the read JSON file and adds a new entry to notes
 * and updates the nextID property of dat.json and rewrites the file.
 * Added bug fix to make sure user inputs a new note when using create command.
 * @returns returns new data.json text
 */

async function create() {
  try {
    if (!input1) {
      console.error('This command requires an additional argument to create a note.');
      process.exit(1);
    }
    const objectParsed = await read();
    const currentID = objectParsed.nextId;
    objectParsed.notes[currentID] = input1;
    objectParsed.nextId++;
    const newFile = await fs.writeFile('data.json', JSON.stringify(objectParsed, null, 2));
    return newFile;
  } catch (err) {
    console.error('Something went wrong', err);
  }
}
/**
 * The update function takes the read data.json and updates the users chosen note
 * then rewrites the file. Added conditional to make sure entry number exists.
 * Removed bug that would delete the note if no update argument was passed.
 * @returns updated data.json text
 */
async function update() {
  try {
    if (!input2) {
      console.error('This command requires an additional argument to update the note.');
      process.exit(1);
    }
    const objectParsed = await read();
    if (!Object.keys(objectParsed.notes).includes(input1)) {
      console.error('Not a entry number:', input1);
      process.exit(1);
    }
    const currentID = input1;
    objectParsed.notes[currentID] = input2;
    const newFile = await fs.writeFile('data.json', JSON.stringify(objectParsed, null, 2));
    return newFile;
  } catch (err) {
    console.error('Something went wrong', err);
  }
}
/**
 * The deleteEntry function takes the users designated note to be deleted and
 * removes it from the object then rewrites the data.json file. Added conditional
 * to make sure entry number exists.
 * @returns updated data.json text
 */
async function deleteEntry() {
  try {
    const objectParsed = await read();
    if (!Object.keys(objectParsed.notes).includes(input1)) {
      console.error('Not a entry number:', input1);
      process.exit(1);
    }
    const currentID = input1;
    delete objectParsed.notes[currentID];
    const newFile = await fs.writeFile('data.json', JSON.stringify(objectParsed, null, 2));
    return newFile;
  } catch (err) {
    console.error('Something went wrong', err);
  }
}
