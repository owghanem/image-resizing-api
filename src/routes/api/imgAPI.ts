import express from 'express';
import imgResize from '../../utilities/imgResize';
import imgValidator from '../../utilities/imgValidator';
import getResized from '../../utilities/getResized';

const imgAPI = express.Router();

interface imgQuery {
  fileName?: string;
  w?: string;
  h?: string;
  alreadyResized?: boolean;
}

interface validatedInput {
  fileName: string;
  w: string;
  h: string;
}

imgAPI.get('/', (req: express.Request, res: express.Response) => {
  res.send('go to /resize!');
});

imgAPI.get('/resize', async (req: express.Request, res: express.Response) => {
  const query: imgQuery = {
    fileName: req.query.filename as string,
    w: req.query.width as string,
    h: req.query.height as string,
  };
  try {
    // Send to validate the input
    const userInput = await imgValidator(query);
    console.log('Validating');

    if (userInput.alreadyResized) {
      // If the image already exists fetch it
      const resized = await getResized(userInput as validatedInput);
      console.log('Fetching photo');

      res.sendFile(resized);
    } else {
      try {
        // Otherwise send the input the resize API to get resized
        const img = await imgResize(userInput as validatedInput);
        console.log('Resizing');

        res.sendFile(img);
      } catch (error) {
        const message = (error as NodeJS.ErrnoException).message;
        res.send(message);
        console.log('Failed to resize');
      }
    }
  } catch (error) {
    const message = (error as NodeJS.ErrnoException).message;
    res.send(message);
    console.log('Falid to validate');
  }
});

export default imgAPI;
