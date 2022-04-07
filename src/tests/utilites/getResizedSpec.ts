import getResized from '../../utilities/getResized';

interface imgQuery {
  fileName: string;
  w: string;
  h: string;
}

describe('Fetch resized image from the cache', () => {
  it('Fetch the target image', () => {
    const test: imgQuery = {
      fileName: 'fire',
      w: '200',
      h: '300',
    };
    expect(getResized(test)).toBeTruthy();
  });
});
