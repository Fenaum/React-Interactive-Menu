const router = require('express').Router();
const menuRoutes = require('./menu');

router.use("/menu", menuRoutes);

// if user does not reach an endpoint
router.use((req, res) => {
    res.status(404).send("<h1>Wrong Route!</h1>");
});

module.exports = router;