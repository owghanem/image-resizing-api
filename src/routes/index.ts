import express from 'express';
import imgAPI from './api/imgAPI';

const mainEntry = express.Router();

mainEntry.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Homepage!');
});

mainEntry.use('/imgAPI', imgAPI);

export default mainEntry;
