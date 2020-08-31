/* eslint-disable global-require */

const passport = require('passport');
const reactApp = require('./views/app');

require('dotenv').config();

const routes = (app) => {
  app.get('/login/twitter', passport.authenticate('twitter'));

  app.get('/login/twitter/return', passport.authenticate('twitter', {
    failureRedirect: '/login',
  }), (req, res) => {
    const target = req.cookies.target || '/';
    res.clearCookie('target', { path: '/' });
    return res.redirect(target);
  });

  app.get('/logout', require('./views/logout'));

  reactApp(app); // set up react routes
};

// export default routes;
module.exports = routes;

/* eslint-enable global-require */
