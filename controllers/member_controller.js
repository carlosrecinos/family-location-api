const Member = require('../models/Member');
const router = require('express').Router();

const getMembers = async (req, res) => {
  const members = await Member.find().populate('status', '-_id');
  res.json({success: true, members})
}

const addMember = async (req, res) => {
  const { name, username, email, password, status } = req.body; 
  const member = new Member({name, username, email, password, status});
  try {
    const saved = await member.save();
    res.json({success: true, members})
  } catch (error) {
    res.json({error: true})
  }
}

router.get('/', getMembers);

module.exports = router;