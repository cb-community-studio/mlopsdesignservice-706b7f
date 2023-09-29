const { Monitoring } = require('./monitoring.class');
const createModel = require('../../models/monitoring.model');
const hooks = require('./monitoring.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/monitoring', new Monitoring(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('monitoring');

  service.hooks(hooks);
};