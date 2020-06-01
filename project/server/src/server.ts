import express from 'express';

const app = express();

app.get('/users', (resquest, response) => {
  console.log('Hello world');

  response.send(['Hello World!', 'alo']);
});

app.listen(3333);
