// server.test.js
const request = require('supertest');
const app = require('./server');

describe('Flipkart Clone Server', () => {
  test('GET / returns the homepage', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/html/);
    expect(res.text).toMatch(/Flipkart Clone/); // Adjust based on your index.html content
  });

  test('GET /style.css returns CSS file', async () => {
    const res = await request(app).get('/style.css');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/css/);
  });

  test('GET /script.js returns JavaScript file', async () => {
    const res = await request(app).get('/script.js');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/javascript/);
  });
});
