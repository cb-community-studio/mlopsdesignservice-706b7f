const { Modelselection } = require('./modelselection.class');
const createModel = require('../../models/modelselection.model');
const hooks = require('./modelselection.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/modelselection', new Modelselection(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('modelselection');

  service.hooks(hooks);
};