const mongoose = require("mongoose");

const appetizerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter the Item's Name"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please Provide the Price of this Item"],
    },
    vegetarian: {
      type: Boolean,
      default: false,
    },
    ingredients: [String],
    calories: Number,
    spicy: {
      type: Number,
      required: true,
      validate: {
        validator: function (value) {
          // Check if the value is a number between 1 and 5
          return value >= 0 && value <= 5;
        },
        message: "Spicy level must be a number between 0 and 5.",
      },
    },
    tags: [String],
    imgURL: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Appetizer = mongoose.model("Appetizer", appetizerSchema);

module.exports = Appetizer;
