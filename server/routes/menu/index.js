const router = require('express').Router();
const entreeRoute = require('./entrees')
const appetizerRoute = require('./appetizers')

router.use('/entrees', entreeRoute)
router.use('/appetizers', appetizerRoute)

module.exports = router;