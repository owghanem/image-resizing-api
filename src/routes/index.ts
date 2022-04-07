import express from 'express';
import imgAPI from './api/imgAPI';

const mainEntry = express.Router();

mainEntry.get('/', (req, res) => {
  res.send('Homepage!');
});

mainEntry.use('/imgAPI', imgAPI);

export default mainEntry;
