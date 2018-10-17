const router = require('express').Router();

const members = require('./member_controller');

router.use('/members/', members);

module.exports = router;