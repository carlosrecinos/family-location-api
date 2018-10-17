const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const MemberGroupSchema = new Schema({
  member: { type: Schema.Types.ObjectId, ref: 'Member' },
  location: {
    accuracy: Number,
    altitude: Number,
    latitude: Number,
    longitude: Number,
  },
  message: String,
  showLocation: Boolean,
  speed: Number,
});

const MemberGroup = mongoose.model('MemberGroup', MemberGroupSchema);
module.exports = MemberGroup;
