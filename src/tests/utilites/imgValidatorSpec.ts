import checkInput from '../../utilities/imgValidator';

interface imgQuery {
  fileName?: string;
  w?: string;
  h?: string;
}
describe('Image Validation', () => {
  it('validate the data and pass it back to be resized', async () => {
    const test: imgQuery = {
      fileName: 'moon',
      w: '200',
      h: '300',
    };
    const result = await checkInput(test);

    expect(
      result.fileName && result.h && result.w && !result.alreadyResized
    ).toBeTruthy();
  });

  it('validate the data and pass it back to be fetched from the cache', async () => {
    const test: imgQuery = {
      fileName: 'fire',
      w: '200',
      h: '300',
    };
    const result = await checkInput(test);

    expect(
      result.fileName && result.h && result.w && result.alreadyResized
    ).toBeTruthy();
  });

  it('should throw an error for not having a file name', async () => {
    const test: imgQuery = {
      fileName: '',
      w: '200',
      h: '300',
    };

    await expectAsync(checkInput(test)).toBeRejectedWith(
      new Error('You should enter a name, a height & a width')
    );
  });

  it('should throw an error for getting a wrong name', async () => {
    const test: imgQuery = {
      fileName: 'mon.jpg',
      w: '200',
      h: '300',
    };

    await expectAsync(checkInput(test)).toBeRejectedWith(
      new Error('Photo does not exist, please choose another image')
    );
  });
});
