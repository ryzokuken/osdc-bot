'use strict';
const chai = require('chai');
const expect = chai.expect;
// const spies = require('chai-spies');
const request = require('request');
const constants = require('../constants');
// const defineService = require('../services/defineService');

describe('Module defineService', () => {
  // chai.use(spies);

  it('should fetch definitions correctly from the api', () => {
    request({
      url: `${constants.DEFINE_API_URL}?term=programmer`,
      headers: {
        'X-Mashape-Key': constants.DEFINE_API_KEY
      },
      method: 'GET'
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body).value).to.have.property('list');
      expect(error).to.equal({});
    });
  });

  // it('should check for the callback', (done) => {
  //   const USERNAME = 'username';
  //   const callback = (joke, username) => {
  //     expect(username).to.equal(USERNAME);
  //     expect(joke).to.be.a('string');
  //     done();
  //   };
  //   const spy = chai.spy(callback);
  //   jokeService.getJoke(spy, USERNAME);
  // });
});
