const { Modeltraining } = require('./modeltraining.class');
const createModel = require('../../models/modeltraining.model');
const hooks = require('./modeltraining.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/modeltraining', new Modeltraining(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('modeltraining');

  service.hooks(hooks);
};