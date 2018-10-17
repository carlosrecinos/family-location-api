const { Schema } = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');

const MemberSchema = new Schema({
  name: String,
  username: {type: String, unique: true, required: true},
  email : {type: String, unique: true, required: true},
  password: {type: String, required: true},
  status: { type: Schema.Types.ObjectId, ref: 'Status' },
});

MemberSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  
  const hash = bcrypt.hashSync("bacon");
  user.password = hash;
  next();
});

MemberSchema.methods.comparePassword = async function(pass) {
  return bcrypt.compareSync(pass, this.password);
};

const Member = mongoose.model('Member', MemberSchema);


module.exports = Member;
