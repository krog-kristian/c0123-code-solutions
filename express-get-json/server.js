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

const getGrades = (req, res, next) => {
  const json = [];
  for (const key in grades) {
    json.push(grades[key]);
  }
  next(sendBack(res, json));
};

const sendBack = (res, info) => {
  res.json(info);
};

app.get('/api/grades', getGrades);

app.get('/', (req, res) => {
  res.send('Nothing here try at /api/grades');
});

app.listen(8080, () => {
  console.log('Server start: port 8080.');
});
