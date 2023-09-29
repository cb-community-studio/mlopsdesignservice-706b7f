const assert = require('assert');
const app = require('../../src/app');

describe('\'preprocessing\' service', () => {
  it('registered the service', () => {
    const service = app.service('preprocessing');

    assert.ok(service, 'Registered the service (preprocessing)');
  });
});
