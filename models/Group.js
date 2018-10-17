const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const GroupSchema = new Schema({
  name: String,
  members: { type: Schema.Types.ObjectId, ref: 'MemberGroup' },
  category: { type: Schema.Types.ObjectId },
  customCategory: {},
});

const Group = mongoose.model('Group', GroupSchema);
module.exports = Group;
