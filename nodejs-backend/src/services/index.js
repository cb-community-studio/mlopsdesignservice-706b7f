const users = require("./users/users.service.js");
const datasource = require("./datasource/datasource.service.js");
const visualization = require("./visualization/visualization.service.js");
const preprocessing = require("./preprocessing/preprocessing.service.js");
const modeltraining = require("./modeltraining/modeltraining.service.js");
const modelselection = require("./modelselection/modelselection.service.js");
const deploymodel = require("./deploymodel/deploymodel.service.js");
const monitoring = require("./monitoring/monitoring.service.js");
const threshold = require("./threshold/threshold.service.js");
const retraining = require("./retraining/retraining.service.js");
const docker = require("./docker/docker.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(datasource);
  app.configure(visualization);
  app.configure(preprocessing);
  app.configure(modeltraining);
  app.configure(modelselection);
  app.configure(deploymodel);
  app.configure(monitoring);
  app.configure(threshold);
  app.configure(retraining);
  app.configure(docker);
  // ~cb-add-configure-service-name~
};
