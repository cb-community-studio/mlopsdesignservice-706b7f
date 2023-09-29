const assert = require('assert');
const app = require('../../src/app');

describe('\'datasource\' service', () => {
  it('registered the service', () => {
    const service = app.service('datasource');

    assert.ok(service, 'Registered the service (datasource)');
  });
});
