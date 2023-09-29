const { Visualization } = require('./visualization.class');
const createModel = require('../../models/visualization.model');
const hooks = require('./visualization.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/visualization', new Visualization(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('visualization');

  service.hooks(hooks);
};