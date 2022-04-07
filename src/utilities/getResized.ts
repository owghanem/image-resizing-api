import path from 'path';

interface validatedInput {
  fileName: string;
  w: string;
  h: string;
}
const resizedPath = path.resolve(__dirname, '../../assets/images/resized');
/**
 * Checks if the photo has been resized before i.e in the resized folder
 * @param userInput File name, width, heigh
 * @returns The path to the resized photo as a string
 */
function getResized(userInput: validatedInput): string {
  const outDir: string = path.resolve(
    resizedPath,
    `${userInput.fileName}-${userInput.w}x${userInput.h}.jpg`
  );
  return outDir;
}

export default getResized;
