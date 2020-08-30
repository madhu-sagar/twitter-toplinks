const cookieSession = require('cookie-session');
const mongoStore = require('connect-mongodb-session');
const express = require('express');

const app = express();
const passport = require('passport');
const cookieParser = require('cookie-parser');

const morgan = require('morgan');

const auth = require('./auth');
const mongoose = require('mongoose');
const cors = require('cors');

const session = require('express-session');
const logger = require('./utils/logger.js');
const passportSetup = require('./config/passport');

const keys = require('./config/keys');
const authRoutes = require('./routes/auth-routes');

const MongoDBStore = mongoStore(session);

const store = new MongoDBStore({
  uri: keys.MONGODB_URI,
  collection: 'sessions',
});

mongoose.connect(keys.MONGODB_URI, { useNewUrlParser: true }, () => {
  console.log('connected to mongo db');
});

store.on('error', (error) => {
  console.error('session-store-error', error);
});

app.use(session({
  secret: process.env.COOKIE_KEY || 'bumbling bee',
  resave: true,
  saveUninitialized: true,
  store,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
}));

app.use(express.static(path.join(__dirname, '../public')));

// parse cookies
app.use(cookieParser());

// initalize passport
app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());

// set up cors to allow us to accept requests from our client
const basePath = process.env.BASE_PATH || '';
const port = process.env.SERVER_PORT || 7999;
const host = process.env.HOST_NAME || `http://localhost:${port}`;

app.use(
  cors({
    origin: `http://${host}:${port}`, // allow to server to accept request from different origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // allow session cookie from browser to pass through
  }),
);

// prevents logs from polluting test results
if (!module.parent) app.use(morgan('combined'));

auth(app);

//routes(app);

// connect react to nodejs express server
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Started in ${process.env === 'development' ? process.env : 'production'} mode on port ${port}.`));

export default app;
