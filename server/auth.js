import 
// set up routes
app.use('/auth', authRoutes);

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

import 'dotenv/config';

const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const keys = require('./keys');
const User = require('../models/user');

import User from './models/User';

const port = process.env.PORT || 7999;

const hostname = process.env.HOSTNAME || `http://localhost:${port}`;

const auth = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${hostname}/login/google/return`,
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    scope: ['email'],
  }, (token, tokenSecret, profile, done) => {
    // update the user if s/he exists or add a new user
    User.findOne({ email: profile._json.email })
      .then((user) => {
        if (!user) {
          return User.create({ logins: [Date.now()], ...profile._json });
        }
        user.logins.push(Date.now());
        return user.save();
      }).then((user) => done(null, user)).catch((error) => done(error));
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};

export default auth;

