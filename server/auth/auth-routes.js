const express = require("express");
const passport = require("../auth/passport-config");
const router = express.Router();

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// Other routes (signup, logout) here

module.exports = router;
