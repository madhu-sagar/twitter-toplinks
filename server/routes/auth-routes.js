// app.use('/auth', authRoutes);
const authRoutes = require('./routes/auth-routes');
// set up routes.

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: 'user has not been authenticated',
    });
  } else {
    next();
  }
};

// if it's already login, send the profile response,
// otherwise, send a 401 response that the user is not authenticated
// authCheck before navigating to home page
app.get('/', authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: 'user successfully authenticated',
    user: req.user,
    cookies: req.cookies,
  });
});

// **************************************
// **********************

const router = require('express').Router();
const passport = require('passport');

const host = process.env.HOST_NAME || 'localhost';
const port = process.env.APP_PORT || 3000;
const CLIENT_HOME_PAGE_URL = `http://${host}:${port}`;

// when login is successful, retrieve user info
router.get('/login/success', (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: 'user has successfully authenticated',
      user: req.user,
      cookies: req.cookies,
    });
  }
});

// when login failed, send failed msg
router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'user failed to authenticate.',
  });
});

// When logout, redirect to client
// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect(CLIENT_HOME_PAGE_URL);
// });

// auth with twitter
// router.get('/twitter', passport.authenticate('twitter'));

// redirect to home page after successfully login via twitter
// router.get(
//   '/twitter/redirect',
//   passport.authenticate('twitter', {
//     successRedirect: CLIENT_HOME_PAGE_URL,
//     failureRedirect: '/auth/login/failed',
//   }),
// );

//module.exports = router;
