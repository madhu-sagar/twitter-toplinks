// Index

const { expect } = require('chai');
const request = require('request');

describe('Server is running', (done) => {
  it('should return a OK status code', () => {
    request('http://localhost:8001/healthz', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
