const { Retraining } = require('./retraining.class');
const createModel = require('../../models/retraining.model');
const hooks = require('./retraining.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/retraining', new Retraining(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('retraining');

  service.hooks(hooks);
};