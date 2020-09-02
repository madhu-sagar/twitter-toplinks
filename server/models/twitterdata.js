const mongoose = require('mongoose');

const { Schema } = mongoose;

const dataSchema = Schema({
  twitterId: {
    type: Schema.Types.String,
    required: true,
  },

  tweets: {
    type: Schema.Types.Array,
  },
});

const Tweetsdata = mongoose.model('tweetsdata', dataSchema);

module.exports = Tweetsdata;
