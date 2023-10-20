const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
  wine: [
    {
      name: {
        type: "String",
        required: [true, "Please enter the Item's Name"],
      },
      quantity: {
        type: Number,
        default: 0,
      },
      price: Number,
      ingredients: [String],
      calories: Number,
      tags: [String],
      imgURL: String,
      description: String,
    },
  ],
  cocktail: [
    {
      name: {
        type: "String",
        required: [true, "Please enter the Item's Name"],
      },
      quantity: {
        type: Number,
        default: 0,
      },
      price: [Number],
      dairy: {
        type: Boolean,
        default: false,
      },
      ingredients: [String],
      calories: Number,
      tags: [String],
      imgURL: String,
      description: String,
    },
  ],
  coffee: [
    {
      name: {
        type: "String",
        required: [true, "Please enter the Item's Name"],
      },
      quantity: {
        type: Number,
        default: 0,
      },
      price: Number,
      dairy: {
        type: Boolean,
        default: false,
      },
      ingredients: [String],
      calories: Number,
      tags: [String],
      imgURL: String,
      description: String,
    },
  ],
  nonAlcoholic: [
    {
      name: {
        type: "String",
        required: [true, "Please enter the Item's Name"],
      },
      quantity: {
        type: Number,
        default: 0,
      },
      price: Number,
      dairy: {
        type: Boolean,
        default: false,
      },
      ingredients: [String],
      calories: Number,
      tags: [String],
      imgURL: String,
      description: String,
    },
  ],
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;
