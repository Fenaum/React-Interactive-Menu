const router = require('express').Router();
const entreeRoute = require('./entrees')
const appetizerRoute = require('./appetizers')
const dessertRoute = require('./desserts')
const drinkRoute = require('./drinks')

router.use('/entrees', entreeRoute)
router.use('/appetizers', appetizerRoute)
router.use('/desserts', dessertRoute)
router.use('/drinks', drinkRoute)

module.exports = router; 