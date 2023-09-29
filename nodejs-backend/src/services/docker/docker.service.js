const { Docker } = require('./docker.class');
const createModel = require('../../models/docker.model');
const hooks = require('./docker.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/docker', new Docker(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('docker');

  service.hooks(hooks);
};