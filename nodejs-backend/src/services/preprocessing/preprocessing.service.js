const { Preprocessing } = require('./preprocessing.class');
const createModel = require('../../models/preprocessing.model');
const hooks = require('./preprocessing.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/preprocessing', new Preprocessing(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('preprocessing');

  service.hooks(hooks);
};