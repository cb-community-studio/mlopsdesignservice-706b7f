const assert = require('assert');
const app = require('../../src/app');

describe('\'modeltraining\' service', () => {
  it('registered the service', () => {
    const service = app.service('modeltraining');

    assert.ok(service, 'Registered the service (modeltraining)');
  });
});
