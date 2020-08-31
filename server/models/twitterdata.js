const mongoose = require('mongoose');

const { Schema } = mongoose;

const dataSchema = Schema({

});

const Tweetsdata = mongoose.model('tweetsdata', dataSchema);

module.exports = Tweetsdata;
