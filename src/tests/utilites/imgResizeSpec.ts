import imgValidator from '../../utilities/imgValidator';
import imgResize from '../../utilities/imgResize';

interface imgQuery {
  fileName?: string;
  w?: string;
  h?: string;
}

interface sharpInputs {
  fileName: string;
  w: string;
  h: string;
}

describe('Image resizing api', () => {
  it('resize the photo and return its path', async () => {
    const test: imgQuery = {
      fileName: 'fire',
      w: '200',
      h: '300',
    };
    try {
      const img = await imgValidator(test);
      try {
        const resized = await imgResize(img as sharpInputs);
        expect(resized).toBeTruthy();
      } catch (error) {
        console.log(`Resizing error: ${error}`);
      }
    } catch (error) {
      console.log(`Validator error: ${error}`);
    }
  });

  it('throw error if something is wrong', async () => {
    const test: imgQuery = {
      fileName: '',
      w: '200',
      h: '300',
    };
    await expectAsync(imgResize(test as sharpInputs)).toBeRejectedWith(
      new Error('Input file is missing')
    );
  });
});
