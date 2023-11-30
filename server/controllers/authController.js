const bcrypt = require("../utils/passwordUtils");
const { User } = require("../models"); //
const passport = require("../config/passportConfig");

const authController = {
  async userRegistration(req, res) {
    const { username, password, email, role } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Check if username already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "This E-mail is already in used" });
    }

    // Check if password is provided
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    try {
      // Hash the password
      const hash = await bcrypt.hash(password, 10);

      // Create new user
      const user = await User.create({ username, password: hash, email, role });

      // Automatically log the user in after registration
      req.login(user, (err) => {
        if (err) {
          console.error("Login Error:", err);
          return res
            .status(500)
            .json({ error: "Error logging in after registration" });
        }

        return res
          .status(200)
          .json({ message: "User registration successful" });
      });
    } catch (err) {
      console.error("Registration Error:", err);
      if (err.name === "MongoError") {
        return res
          .status(500)
          .json({ error: "Database error: " + err.message });
      } else if (err.name === "TypeError") {
        return res.status(500).json({ error: "Type error: " + err.message });
      } else {
        return res.status(500).json({ error: "Unknown error: " + err.message });
      }
    }
  },

  userLogin(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.error("Login Error:", err);
        return res.status(500).json({ error: "Error during login" });
      }
      if (!user) {
        return info.message === "Missing credentials"
          ? res.status(400).json({ error: "Please provide your credentials" })
          : res.status(401).json({ error: info.message });
      }

      // Check if user already has an active session
      if (req.session.userId) {
        return res.status(400).json({ error: "User is already logged in" });
      }

      req.login(user, (err) => {
        if (err) {
          console.error("Login Error:", err);
          return res.status(500).json({ error: "Error during login" });
        }
        // Store user id in session
        req.session.userId = user.id;
        return res.status(200).json({ success: "succesfully logged in!" });
      });
    })(req, res, next);
  },

  userLogout(req, res) {
    // Remove user id from session
    req.session.userId = null;

    // Use req.logout with a callback function
    req.logout((err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error during logout", error: err });
      }

      return res.status(200).json({ message: "User logout successful" });
    });
  },

  userProfile(req, res) {
    if (req.user) {
      res.json(req.user);
    } else {
      res.status(401).json({ error: "Not authenticated" });
    }
  },
};

module.exports = authController;
