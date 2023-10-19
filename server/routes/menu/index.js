const router = require('express').Router();
const entreeRoute = require('./entrees')
const appetizerRoute = require('./appetizers')
const dessertRoute = require('./desserts')

router.use('/entrees', entreeRoute)
router.use('/appetizers', appetizerRoute)
router.use('/desserts', dessertRoute)

module.exports = router;