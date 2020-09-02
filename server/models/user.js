const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  screenName: {
    type: Schema.Types.String,
    required: true,
  },
  name: {
    type: Schema.Types.String,
  },
  twitterId: {
    type: Schema.Types.String,
  },
  profileImageUrl: {
    type: Schema.Types.String,
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
