const { Threshold } = require('./threshold.class');
const createModel = require('../../models/threshold.model');
const hooks = require('./threshold.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/threshold', new Threshold(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('threshold');

  service.hooks(hooks);
};