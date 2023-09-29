const { Deploymodel } = require('./deploymodel.class');
const createModel = require('../../models/deploymodel.model');
const hooks = require('./deploymodel.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/deploymodel', new Deploymodel(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('deploymodel');

  service.hooks(hooks);
};