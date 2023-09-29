const { Datasource } = require('./datasource.class');
const createModel = require('../../models/datasource.model');
const hooks = require('./datasource.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/datasource', new Datasource(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('datasource');

  service.hooks(hooks);
};