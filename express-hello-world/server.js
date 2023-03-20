import express from 'express';

const app = express();

app.use('/', (req, res) => {
  console.log('The method of req:', req.method);
  res.send('<h1> Hello world<h1><p>Writing html like this would suck, prolly why we are gonna learn react</p>');
});

app.listen(8080, () => {
  console.log('Server start, listening on port 8080');
});
