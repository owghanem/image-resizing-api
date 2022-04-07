import { promises as fs } from 'fs';
import path from 'path';

interface imgQuery {
  fileName?: string;
  w?: string;
  h?: string;
  alreadyResized?: boolean;
}

const originalsPath = path.resolve(__dirname, '../../assets/images/');
const resizedPath = path.resolve(__dirname, '../../assets/images/resized');

/**
 * Checks user input and checks if the photo exsists on the "database"
 * @param userInput File name, width & height
 * @returns File name, width, height & boolean that is true if the photo has been resized before or an error
 */

async function checkInput(userInput: imgQuery): Promise<imgQuery> {
  // Check if the required input was given
  if (
    !userInput.fileName ||
    parseInt(userInput.h as string) <= 0 ||
    parseInt(userInput.w as string) <= 0
  )
    throw new Error('You should enter a name, a height & a width');

  const resized = await fs.readdir(resizedPath); // Read the files in the resized folder
  const targetResized = `${userInput.fileName}-${userInput.w}x${userInput.h}.jpg`; // Generate the expected resized image name

  // Check if the photo already has been resized before
  for (const photo of resized) {
    if (targetResized.toLowerCase() === photo.toLowerCase()) {
      userInput.alreadyResized = true;
      return userInput;
    }
  }

  const originals = await fs.readdir(originalsPath); // Read the files in the Originals folder

  const targetImg =
    userInput.fileName.lastIndexOf('.') === -1
      ? userInput.fileName + '.jpg'
      : userInput.fileName;

  for (const photo of originals) {
    if (targetImg.toLowerCase() === photo.toLowerCase()) {
      userInput.alreadyResized = false;
      return userInput;
    }
  }
  throw new Error('Photo does not exist, please choose another image');
}

export default checkInput;
