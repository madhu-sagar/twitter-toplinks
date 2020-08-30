/* eslint-disable global-require */
import 'dotenv/config';
import passport from 'passport';
import reactApp from './views/app';

const routes = (app) => {
  app.get('/login/twitter', passport.authenticate('google'));

  app.get('/logout', require('./views/logout'));

  reactApp(app); // set up react routes
};

export default routes;
/* eslint-enable global-require */
