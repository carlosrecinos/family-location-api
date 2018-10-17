const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const StatusSchema = new Schema({
  name: String,
});

const Status = mongoose.model('Status', StatusSchema);
module.exports = Status;
