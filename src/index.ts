import express from 'express';
import mainEntry from './routes/index';

const app = express();
const port = 3000;

app.use('/', mainEntry);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

export default app;
