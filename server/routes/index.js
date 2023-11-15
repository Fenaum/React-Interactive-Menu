const router = require('express').Router();
const menuRoutes = require('./menu');
const serviceRoutes = require('./service')

router.use("/menu", menuRoutes);
router.use("/service", serviceRoutes);

// if user does not reach an endpoint
router.use((req, res) => {
    res.status(404).send("<h1>Wrong Route!</h1>");
});

module.exports = router;