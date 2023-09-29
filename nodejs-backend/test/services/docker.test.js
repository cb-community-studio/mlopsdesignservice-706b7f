const assert = require('assert');
const app = require('../../src/app');

describe('\'docker\' service', () => {
  it('registered the service', () => {
    const service = app.service('docker');

    assert.ok(service, 'Registered the service (docker)');
  });
});
