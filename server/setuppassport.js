/* eslint-disable no-underscore-dangle */
require('dotenv').config();

const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const keys = require('./config/keys');
const User = require('./models/user');

const port = process.env.PORT || 7999;

const hostname = process.env.HOSTNAME || `http://localhost:${port}`;

const setuppassport = (app) => {
  // initalize passport
  // deserialize cookie from the browser
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new TwitterStrategy(
      {
        consumerKey: keys.TWITTER_CONSUMER_KEY,
        consumerSecret: keys.TWITTER_CONSUMER_SECRET,
        callbackURL: `${hostname}/auth/twitter/redirect`,
      },
      async (token, tokenSecret, profile, done) => {
        // find current user in UserModel
        const currentUser = await User.findOne({
          twitterId: profile._json.id_str,
        });
        // create new user if the database doesn't have this user
        if (!currentUser) {
          const newUser = await new User({
            name: profile._json.name,
            screenName: profile._json.screen_name,
            twitterId: profile._json.id_str,
            profileImageUrl: profile._json.profile_image_url,
          }).save();
          if (newUser) {
            done(null, newUser);
          }
        }
        done(null, currentUser);
      },
    ),
  );

  // serialize the user.id to save in the cookie session
  // so the browser will remember the user when login
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // deserialize the cookieUserId to user in the database
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then((user) => {
        done(null, user);
      })
      .catch((e) => {
        done(new Error('Failed to deserialize an user'));
      });
  });
};

module.exports = setuppassport;
