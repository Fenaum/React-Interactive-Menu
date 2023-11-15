const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your userName"],
      unique: true, // Ensure unique usernames
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: 8, // Minimum password length
    },
    salt: String,
    hash: String,
    role: {
      type: String,
      default: "user", // Default user role
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true, // Ensure unique emails
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
