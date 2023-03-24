import express from 'express';
import pg from 'pg';

const app = express();
const jsonParser = express.json();

/**
 * Creates the object to query the database.
 */
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

/**
 * Parses Incoming JSON
 */
app.use(jsonParser);

/**
 * Checks for legal grade IDs
 */
app.use('/api/grades/:gradeId', (req, res, next) => {
  if (!Number(req.params.gradeId) || Number(req.params.gradeId) <= 0) {
    res.status(400).send({ error: `id '${req.params.gradeId}' must be a positive integer.` });
  } else {
    next();
  }
});

/**
 * Retrives the grades table and sends to the user
 */
app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
                select *
                from "grades"
  `;
    const data = await db.query(sql);
    res.status(200).json(data.rows);
  } catch (err) {
    next(err);
  }
});

/**
 * Retrives a single grade ID and send back to the user or error if not found.
 */
app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const sql = `
                select *
                from "grades"
                where "gradeId" = $1
    `;
    const entry = [req.params.gradeId];
    const data = await db.query(sql, entry);
    if (data.rows[0]) {
      res.status(202).json(data.rows[0]);
    } else {
      res.status(404).json({ error: 'ID not found' });
    }
  } catch (err) {
    next(err);
  }
});

/**
 * Creates a new grade entry on the database.
 */
app.post('/api/grades', async (req, res, next) => {
  try {
    checkContent(req.body);
    const sql = `
                insert into "grades" ("name", "course", "score")
                values ($1, $2, $3)
                returning *;
    `;
    const entry = [req.body.name, req.body.course, req.body.score];
    const data = await db.query(sql, entry);
    res.status(201).json(data.rows[0]);
  } catch (err) {
    next(err);
  }
});

/**
 * Updates a grade on the database.
 */
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    checkContent(req.body);
    const sql = `
                update "grades"
                set "name" = $1,
                    "course" = $2,
                    "score" = $3
                where "gradeId" = $4
                returning *
    `;
    const entry = [req.body.name, req.body.course, req.body.score, req.params.gradeId];
    const data = await db.query(sql, entry);
    if (data.rows[0]) {
      res.status(200).json(data.rows[0]);
    } else {
      res.status(404).json({ error: 'ID not found' });
    }
  } catch (err) {
    next(err);
  }
});

/**
 * Deletes a single gradeID from the database.
 */
app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const sql = `
    delete
    from "grades"
    where "gradeId" = $1
    returning *;
    `;
    const entry = [req.params.gradeId];
    const data = await db.query(sql, entry);
    if (data.rows[0]) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'ID not found' });
    }
  } catch (err) {
    next(err);
  }
});

/**
 * Sends back the appropriate error response.
 */
app.use((err, req, res, next) => {
  switch (err.cause) {
    case 'content':
      res.status(400).send(err.message);
      break;
    case 'score':
      res.status(400).send(err.message);
      break;
    default:
      console.error(err);
      res.status(500).send('Whoops somethings not right...');
  }
});

/**
 * Checks incoming content for completeness.
 */
function checkContent(body) {
  if (!body.name || !body.course || !body.score) {
    throw new Error('Please supply a grade, course and score.', { cause: 'content' });
  }
  if (Number(body.score) > 100 || Number(body.score) < 0 || isNaN(body.score)) {
    throw new Error('Score must be a number between 0-100', { cause: 'score' });
  }
}

app.listen(8080, () => {
  console.log('Express listening on 8080.');
});
