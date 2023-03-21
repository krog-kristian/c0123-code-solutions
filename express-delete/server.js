import express from 'express';

const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const json = [];
  for (const key in grades) {
    json.push(grades[key]);
  }
  res.json(json);
});

app.delete('/api/grades/:id', (req, res, next) => {
  delete grades[req.params.id];
  res.sendStatus(204);
});

app.listen(8080, () => {
  console.log('Express listening on 8080.');
});
