const mongoose = require('mongoose');

const { Schema } = mongoose;

const tweetSchema = Schema({
  tweet_id: {
    type: Schema.Types.Number,
    required: true,
  },
  created_at: {
    type: Schema.Types.String,
  },
  text: {
    type: Schema.Types.String,
  },
  hashtags: {
    type: [Schema.Types.String],
  },
  url: {
    type: Schema.Types.String,
  },
  place: {
    type: Schema.Types.String,
  },
  userwhotweeted: {
    type: Schema.Types.String,
  },
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;
