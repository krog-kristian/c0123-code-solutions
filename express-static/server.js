import express from 'express';

const app = express();

app.use(express.static('public/'));

app.listen(8080, () => {
  console.log('Express is listening on 8080. For express static.');
});
