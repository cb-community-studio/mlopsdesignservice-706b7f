const assert = require('assert');
const app = require('../../src/app');

describe('\'retraining\' service', () => {
  it('registered the service', () => {
    const service = app.service('retraining');

    assert.ok(service, 'Registered the service (retraining)');
  });
});
