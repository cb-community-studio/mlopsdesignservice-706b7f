const assert = require('assert');
const app = require('../../src/app');

describe('\'threshold\' service', () => {
  it('registered the service', () => {
    const service = app.service('threshold');

    assert.ok(service, 'Registered the service (threshold)');
  });
});
