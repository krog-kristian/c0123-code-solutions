import express from 'express';
import * as fs from 'node:fs/promises';

const app = express();
const jsonParser = express.json();

app.use(jsonParser);

app.get('/api/notes', async (req, res) => {
  const theObject = await read();
  const notesList = [];
  for (const [, value] of Object.entries(theObject.notes)) {
    notesList.push(value);
  }
  res.json(notesList);
});
app.get('/api/notes/:id', async (req, res) => {
  const theObject = await read();
  if (!Number(req.params.id)) {
    res.status(400).send({ error: 'id must be a positive integer.' });
    return;
  }
  for (const [key, value] of Object.entries(theObject.notes)) {
    if (req.params.id === key) {
      res.json(value);
      return;
    }
  }
  res.status(400).send('Id not found.');
});

/**
 * Reads and parses a JSON file.
 * @returns An object
 */
async function read() {
  try {
    const theObject = await fs.readFile('data.json', 'utf8');
    return JSON.parse(theObject);
  } catch (err) {
    console.error('Could not read file:', err);
  }
}

// /**
//  * Creates a new notes entry in the object and writes the data.json file.
//  * @param A new note to be added.
//  */
// async function create(newNote) {
//   try {
//     if (!newNote) {
//       console.error('This command requires an additional argument to create a note.');
//       process.exit(1);
//     }
//     const objectParsed = await read();
//     const currentID = objectParsed.nextId;
//     objectParsed.notes[currentID] = newNote;
//     objectParsed.nextId++;
//     await writeToFile(objectParsed);
//   } catch (err) {
//     console.error('Could not create a new note:', err);
//   }
// }

// /**
//  * Converts an object to JSON and writes it to data.json.
//  * @param object to be converted to JSON
//  */
// async function writeToFile(content) {
//   try {
//     const newJSON = JSON.stringify(content, null, 2);
//     fs.writeFile('data.json', newJSON);
//   } catch (err) {
//     console.error('File failed to write:', err);
//   }
// }

// /**
//  * Updates the users chosen note.
//  * @param noteID to be replaced by newNote made by user
//  */
// async function update(noteID, newNote) {
//   try {
//     if (!newNote) {
//       console.error('This command requires an additional argument to update the note.');
//       process.exit(1);
//     }
//     const objectParsed = await read();
//     if (!Object.keys(objectParsed.notes).includes(noteID)) {
//       console.error('Not a entry number:', noteID);
//       process.exit(1);
//     }
//     objectParsed.notes[noteID] = newNote;
//     await writeToFile(objectParsed);
//   } catch (err) {
//     console.error('Update failed:', err);
//   }
// }

// /**
//  * Deletes the users chosen note.
//  * @param noteID to be deleted
//  */
// async function deleteEntry(noteID) {
//   try {
//     const objectParsed = await read();
//     if (!Object.keys(objectParsed.notes).includes(noteID)) {
//       console.error('Not a entry number:', noteID);
//       process.exit(1);
//     }
//     delete objectParsed.notes[noteID];
//     await writeToFile(objectParsed);
//   } catch (err) {
//     console.error('Could not delete note:', err);
//   }
// }

app.listen(8080, () => {
  console.log('Express is listening on 8080.');
});
