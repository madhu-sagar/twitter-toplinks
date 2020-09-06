// Index

const { expect } = require('chai');
let request = require('request');
const app = require('../server');

describe('Server is running', (done) => {
  it('should return a OK status code', () => {
    request('http://localhost:7999/healthz', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
