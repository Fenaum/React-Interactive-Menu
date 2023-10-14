const express = require('express')
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/true-menu'), {
}