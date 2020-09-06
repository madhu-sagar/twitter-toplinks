/* eslint-disable global-require */

const passport = require('passport');
const reactApp = require('./views/app');
const requireUserAPI = require('./authmiddleware');
const authroutes = require('./auth-routes');

require('dotenv').config();

const setuproutes = (app) => {
  app.use('/auth', authroutes);
  // app.get('/compute', requireUserAPI, require('./api/compute'));

  app.get('/healthz', (req, res) => {
    res.send(200);
  });

  reactApp(app); // set up react routes
};

// export default routes;
module.exports = setuproutes;

/* eslint-enable global-require */
