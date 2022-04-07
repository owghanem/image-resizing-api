import supertest from 'supertest';
import { existsSync } from 'fs';
import app from '../index';

// create a request object
const request = supertest(app);

describe('Test endpoint response', () => {
  it('Get the imgapi/resize endpoint', async () => {
    const response = await request.get(
      '/imgapi/resize/?filename=fire&width=100&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('Check if the server caches the resized photos', () => {
    expect(existsSync('./assets/images/resized/fire-100x200.jpg')).toBeTruthy();
  });
});
