const request = require('supertest');
const app = require('./server');

describe('Flipkart Clone Server', () => {
  it('GET / returns the homepage', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<!DOCTYPE html>'); // Sample HTML check
  });

  it('GET /style.css returns CSS file', async () => {
    const res = await request(app).get('/style.css');
    expect(res.statusCode).toBe(200);
  });

  it('GET /script.js returns JavaScript file', async () => {
    const res = await request(app).get('/script.js');
    expect(res.statusCode).toBe(200);
  });
});
