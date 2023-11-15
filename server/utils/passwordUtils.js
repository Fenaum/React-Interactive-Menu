const bcrypt = require("bcrypt");

const plaintextPassword = "user_password";

// Hash the Password
bcrypt.hash(plaintextPassword, 10, (err, hash) => {
  if (err) {
    console.error(err, { message: "Invalid Password" });
  } else {
    console.log(hash);

    // Verify the password
    bcrypt.compare(plaintextPassword, hash, (err, result) => {
      if (err) {
        console.error(err, { message: "Invalid Password" });
      } else if (result) {
        console.log("Success");
      } else {
        console.log("Incorrect Password");
      }
    });
  }
});

module.exports = bcrypt;
