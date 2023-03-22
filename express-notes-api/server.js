import express from 'express';
import * as fs from 'node:fs/promises';

const app = express();
const jsonParser = express.json();

app.use(jsonParser);

app.use('/api/notes/:id', (req, res, next) => {
  if (!Number(req.params.id)) {
    res.status(400).send({ error: `id ${req.params.id} must be a positive integer.` });
  } else {
    next();
  }
});

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
  for (const [key, value] of Object.entries(theObject.notes)) {
    if (req.params.id === key) {
      res.json(value);
      return;
    }
  }
  res.status(400).send(`Id ${req.params.id} not found.`);
});

app.post('/api/notes', async (req, res) => {
  if (req.body.content) {
    try {
      const newNote = await create(req.body);
      res.status(201).json(newNote);
    } catch (err) {
      console.error('Error occured writing to data.json:', err);
      res.status(500).send('Something went wrong.');
    }
  } else {
    res.status(400).send('Please include content to record as a note.');
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const response = await deleteEntry(req.params.id);
    if (!response) {
      res.sendStatus(204);
    } else {
      res.status(404).send(response);
    }
  } catch (err) {
    console.error('Theres has been an error deleting:', err);
    res.sendStatus(500);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  if (req.body.content) {
    try {
      const response = await update(req.params.id, req.body.content);
      res.status(200).json(response);
    } catch (err) {
      console.error('Theres has been an error updating:', err);
      res.sendStatus(500);
    }
  } else {
    res.status(400).send('Please include content to record as a note.');
  }
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

/**
 * Creates a new notes entry in the object and writes the data.json file.
 * @param A new note to be added.
 * @return Returns the created note with the ID
 */
async function create(newNote) {
  const objectParsed = await read();
  const currentID = objectParsed.nextId;
  newNote.id = currentID;
  objectParsed.notes[currentID] = newNote;
  objectParsed.nextId++;
  await writeToFile(objectParsed);
  return newNote;
}

/**
 * Converts an object to JSON and writes it to data.json.
 * @param object to be converted to JSON
 */
async function writeToFile(content) {
  const newJSON = JSON.stringify(content, null, 2);
  fs.writeFile('data.json', newJSON);
}

/**
 * Updates the users chosen note.
 * @param noteID to be replaced by newNote made by user
 * @return Returns the updated note to be sent back.
 */
async function update(noteID, newNote) {
  const objectParsed = await read();
  objectParsed.notes[noteID].content = newNote;
  await writeToFile(objectParsed);
  return objectParsed.notes[noteID];
}

/**
 * Deletes the users chosen note after checking if ID exists.
 * @param noteID to be deleted
 * @return Either and error message if ID does not exist or null
 */
async function deleteEntry(noteID) {
  const objectParsed = await read();
  if (!Object.keys(objectParsed.notes).includes(noteID)) {
    return { error: `ID ${noteID} does not exist.` };
  }
  delete objectParsed.notes[noteID];
  await writeToFile(objectParsed);
  return null;
}

app.listen(8080, () => {
  console.log('Express is listening on 8080.');
});
