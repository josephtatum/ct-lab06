const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {

  it('should return a string "hi" when a user hits the "/" endpoint', async (done) => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
        done();
      });
  });

  it('should return <h1>red</h1> when a user hits the "red" endpoint', async (done) => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
        done();
      });
  });
});
