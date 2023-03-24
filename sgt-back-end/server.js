import express from 'express';
import pg from 'pg';

const app = express();
const jsonParser = express.json();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(jsonParser);

app.use('/api/grades/:gradeId', (req, res, next) => {
  if (!Number(req.params.gradeId) || Number(req.params.gradeId) <= 0) {
    res.status(400).send({ error: `id '${req.params.gradeId}' must be a positive integer.` });
  } else {
    next();
  }
});

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
  select *
  from "grades"
  `;
    const data = await db.query(sql);
    res.json(data.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const entry = [req.params.gradeId];
    const sql = `
    select *
    from "grades"
    where "gradeId" = $1
    `;
    const data = await db.query(sql, entry);
    if (data.rows[0]) {
      res.status(202).json(data.rows[0]);
    } else {
      res.status(404).json({ error: 'ID not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Whoops somethings not right...');
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    if (!req.body.name && !req.body.course && !req.body.score) {
      res.status(400).send('Please supply a grade, course and score');
      return;
    }
    if (Number(req.body.score) > 100 || Number(req.body.score) < 0 || isNaN(req.body.score)) {
      res.status(400).send('Score must be between 0-100');
      return;
    }
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
    `;
    const entry = [req.body.name, req.body.course, req.body.score];
    const data = await db.query(sql, entry);
    res.status(201).json(data.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Whoops somethings not right...');
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    if (!req.body.name && !req.body.course && !req.body.score) {
      res.status(400).send('Please supply a grade, course and score');
      return;
    }
    if (Number(req.body.score) > 100 || Number(req.body.score) < 0 || isNaN(req.body.score)) {
      res.status(400).send('Score must be between a number 0-100');
      return;
    }
    const entry = [req.body.name, req.body.course, req.body.score, req.params.gradeId];
    const sql = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
    where "gradeId" = $4
    returning *
    `;
    const data = await db.query(sql, entry);
    if (data.rows[0]) {
      res.status(202).json(data.rows[0]);
      console.log(data);
    } else {
      res.status(404).json({ error: 'ID not found' });
      console.log(data);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Whoops somethings not right...');
  }
});

// app.delete('/api/grades/:gradeId', async (req, res) => {
//   try {
//     const entry =
//     const sql = `
//     update "grades"
//     set "name" = $1,
//         "course" = $2,
//         "score" = $3
//     where "gradeId" = $4
//     returning *
//     `;
//     const data = await db.query(sql, entry);
//     if (data.rows[0]) {
//       res.status(202).json(data.rows[0]);
//       console.log(data);
//     } else {
//       res.status(404).json({ error: 'ID not found' });
//       console.log(data);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Whoops somethings not right...');
//   }
// });

app.listen(8080, () => {
  console.log('Express listening on 8080.');
});
