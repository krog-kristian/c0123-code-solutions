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
try {
  switch (command) {
    case 'read':
      await readAndReport();
      break;
    case 'create':
      await create(input1);
      break;
    case 'update':
      await update(input1, input2);
      break;
    case 'delete':
      await deleteEntry(input1);
      break;
    default:
      console.error('Improper command given');
      process.exit(1);
  }
} catch (err) {
  console.error('Command failed to execute:', err);
  process.exit(1);
}

/**
 * Reads and parses a JSON file.
 * @returns An object
 */
async function read() {
  try {
    const theObject = await fs.readFile('data.json', 'utf8');
    const parsedObject = JSON.parse(theObject);
    return parsedObject;
  } catch (err) {
    console.error('Could not read file:', err);
  }
}

/**
 * Logs an objects notes.
 */
async function readAndReport() {
  try {
    const theObject = await read();
    for (const [key, value] of Object.entries(theObject.notes)) {
      console.log(`${key}: ${value}`);
    }
    return theObject;
  } catch (err) {
    console.error('Read and report file failed:', err);
  }
}

/**
 * Creates a new notes entry in the object and writes the data.json file.
 * @param A new note to be added.
 */
async function create(newNote) {
  try {
    if (!newNote) {
      console.error('This command requires an additional argument to create a note.');
      process.exit(1);
    }
    const objectParsed = await read();
    const currentID = objectParsed.nextId;
    objectParsed.notes[currentID] = newNote;
    objectParsed.nextId++;
    const newFile = await writeToFile(objectParsed);
    return newFile;
  } catch (err) {
    console.error('Could not create a new note:', err);
  }
}

/**
 * Converts an object to JSON and writes it to data.json.
 * @param object to be converted to JSON
 */
async function writeToFile(content) {
  try {
    const newJSON = JSON.stringify(content, null, 2);
    const writtenFile = fs.writeFile('data.json', newJSON);
    return writtenFile;
  } catch (err) {
    console.error('File failed to write:', err);
  }
}

/**
 * Updates the users chosen note.
 * @param noteID to be replaced by newNote made by user
 */
async function update(noteID, newNote) {
  try {
    if (!newNote) {
      console.error('This command requires an additional argument to update the note.');
      process.exit(1);
    }
    const objectParsed = await read();
    if (!Object.keys(objectParsed.notes).includes(noteID)) {
      console.error('Not a entry number:', noteID);
      process.exit(1);
    }
    objectParsed.notes[noteID] = newNote;
    const newFile = await writeToFile(objectParsed);
    return newFile;
  } catch (err) {
    console.error('Update failed:', err);
  }
}
/**
 * Deletes the users chosen note.
 * @param noteID to be deleted
 */
async function deleteEntry(noteID) {
  try {
    const objectParsed = await read();
    if (!Object.keys(objectParsed.notes).includes(noteID)) {
      console.error('Not a entry number:', noteID);
      process.exit(1);
    }
    delete objectParsed.notes[noteID];
    const newFile = await writeToFile(objectParsed);
    return newFile;
  } catch (err) {
    console.error('Could not delete note:', err);
  }
}
