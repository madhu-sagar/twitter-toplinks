/* eslint-disable no-console */
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
// const MongoDBStore = mongoStore(session);
const express = require('express');
const path = require('path');

const app = express();
const cookieParser = require('cookie-parser');

const morgan = require('morgan');

const mongoose = require('mongoose');
const cors = require('cors');

// const logger = require('js-logger').useDefaults();
// const logger = require('./utils/logger.js');

const keys = require('./config/keys');

const sessiondatabase = process.env.SESSION_DB || 'sessiondatabase';
// const basePath = process.env.BASE_PATH || '';
const port = process.env.SERVER_PORT || 7999;
// const host = process.env.HOST_NAME || `http://localhost:${port}`;
const env = process.env.NODE_ENV;

const setuppassport = require('./setuppassport');
const setuproutes = require('./routes');

mongoose.connection
  .openUri(`mongodb://localhost/${sessiondatabase}`, { useNewUrlParser: true })
  .once('open', () => {
    console.info(`Connected to mongodb://localhost/${sessiondatabase}`);
  })
  .on('error', (error) => console.error('Database connection error:', error));

const store = new MongoDBStore({
  uri: `mongodb://localhost/${sessiondatabase}`,
  collection: 'sessions',
});

store.on('error', (error) => {
  console.error('session-store-error', error);
});

app.use(
  session({
    secret: keys.COOKIE_KEY || 'bumbling bee',
    resave: true,
    saveUninitialized: true,
    store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(express.static(path.join(__dirname, '../public')));

// parse cookies
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
  })
);

// prevents logs from polluting test results
if (!module.parent) {
  //   const myStream = {
  //     write: (text) => { logger.info(text)},
  //   },
  // app.use(morgan(('combined',{ stream: myStream });
  app.use(morgan('combined'));
}

setuppassport(app);

setuproutes(app);

// connect react to nodejs express server
// eslint-disable-next-line no-console

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error('Server starting error', err);
  }
  console.info(
    `Started in ${
      process.env.NODE_ENV === 'development' ? env : 'production'
    } mode on port ${port}.`
  );
});

export default app;
