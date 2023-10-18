const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose.set('strictQuery', false)
mongoose.connect("mongodb://localhost:27017/Menu-Master")
.then(() => console.log('Database Connected')
)
.catch(err => console.error('Connection error', err));

mongoose.set("debug", true);

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000/");
});