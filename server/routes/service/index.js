const router = require('express').Router();
const authRoute = require('./auth');
const customerServiceRoute = require('./customerService');
const managementRoute = require('./management');

router.use('/user', authRoute);
router.use('/customer', customerServiceRoute);
router.use('/management', managementRoute);

module.exports = router;
