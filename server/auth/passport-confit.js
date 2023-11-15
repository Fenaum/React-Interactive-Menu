const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");

const customFields = {
  usernameField: "username",
  passwordField: "password",
};

const verifyCallback = async (input, pw, done) => {
  try {
    const user = await User.findOne({
      $or: [{ username: input }, { email: input }],
    });
    if (!user) {
      return done(null, false, { message: "Incorrect username or email." });
    }
    if (!user.validPassword(pw)) {
      return done(null, false, { message: "Incorrect password." });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

const strategy = new LocalStrategy(customFields, verifyCallback);

// Serialize user to store in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from the session
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

passport.use(strategy);

module.exports = passport;
