const router = require('express').Router();
const authRoute = require('./auth')

router.use('/user', authRoute)

module.exports = router; 