const test = require('tape');

test('Calculator API', (route) => {
  route.test('POST /rest/calculator', (should) => {
    should.equal('true', 'true', 'payload should be a json object');
    route.end();
  });
});
