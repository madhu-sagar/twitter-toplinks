require('dotenv').config();

// Add your keys to sample.env file in the root folder and then rename it as .env
// NO modification required here
const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
  TWITTER_TOKEN_SECRET: process.env.TWITTER_TOKEN_SECRET,
};

const { DB_USER } = process.env.DB_USER;
const { DB_PASSWORD } = process.env.DB_PASSWORD;
const { DB_NAME } = process.env.DB_NAME;
const { MONGOATLAS_CLUSTER_NAME } = process.env.MONGOATLAS_CLUSTER_NAME;

const MONGODB = {
  MONGODB_URI: `mongodb+srv://${DB_USER}:<${DB_PASSWORD}>${MONGOATLAS_CLUSTER_NAME}.7alik.mongodb.net/<${DB_NAME}>?retryWrites=true&w=majority`,
};

const SESSION = {
  COOKIE_KEY: process.env.COOKIE_KEY,
};

const keys = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION,
};

module.exports = keys;
