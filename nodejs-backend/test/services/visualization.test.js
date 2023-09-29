const assert = require('assert');
const app = require('../../src/app');

describe('\'visualization\' service', () => {
  it('registered the service', () => {
    const service = app.service('visualization');

    assert.ok(service, 'Registered the service (visualization)');
  });
});
