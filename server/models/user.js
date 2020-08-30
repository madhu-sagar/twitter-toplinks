const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  screenName: String,
  twitterId: String,
  profileImageUrl: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
