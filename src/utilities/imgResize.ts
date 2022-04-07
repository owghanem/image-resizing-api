import sharp from 'sharp';
import path from 'path';

interface validatedInput {
  fileName: string;
  w: string;
  h: string;
}

const originalsPath = path.resolve(__dirname, '../../assets/images/');
const resizedPath = path.resolve(__dirname, '../../assets/images/resized');

/**
 * Resizes the photo
 * @param userInput File name, width & height
 * @returns The path for the resized photo as string or an error
 */

async function imgResize(userInput: validatedInput): Promise<string> {
  const targetImg =
    userInput.fileName.lastIndexOf('.') === -1
      ? userInput.fileName + '.jpg'
      : userInput.fileName;

  const imgPath: string = path.resolve(originalsPath, targetImg);

  const outDir: string = path.resolve(
    resizedPath,
    `${userInput.fileName}-${userInput.w}x${userInput.h}.jpg`
  );

  try {
    await sharp(imgPath)
      .resize(parseInt(userInput.w as string), parseInt(userInput.h as string))
      .toFile(outDir);
    return outDir;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default imgResize;
