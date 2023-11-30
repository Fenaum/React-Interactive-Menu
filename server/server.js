// .ENV CONFIG
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;
console.log(secretKey);

const express = require("express");
const passport = require("./config/passportConfig"); // Your passport configuration
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const routes = require("./routes");
const app = express();

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/Menu-Master", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Connection error", err));

mongoose.set("debug", true);

//Other Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: secretKey, // Replace 'secret' with your own secret key
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/Menu-Master",
    }), // Use MongoStore and pass the mongoose connection
    cookie: {
      maxAge: 1000 * 60 * 10, // 1000 milliseconds * 60 seconds * 60 minutes * 24 hours * 14 days
    },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use(routes);

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000/");
});
