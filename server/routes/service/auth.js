const router = require("express").Router();
const {
  userRegistration,
  userLogin,
  userLogout,
} = require("../../controllers/authController");

// Check for session
router.get("/check-session", (req, res) => {
  if (req.session.passport) {
    res.json({ user: req.session.passport.user });
  } else {
    res.json({ user: null });
  }
});

// Define your routes here
router.post("/register", userRegistration);
router.post("/login", userLogin);
router.post("/logout", userLogout);

module.exports = router;
