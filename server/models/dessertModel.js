const mongoose = require('mongoose');

const dessertSchema = new mongoose.Schema(
    {
        name: {
            type: "String",
            required: [true, "Please Enter the Item's Name"],
        },
        quantity: {
            type: Number,
            default: 0,
        },
        price: Number,
        glutenFree: {
            type: Boolean,
            default: false,
        },
        dairy: {
            type: Boolean,
            required: [true, "Is This Item Dairy/Non-Dairy?"]
        },
        ingredients: [String],
        calories: Number,
        tags: [String],
        imgURL: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const Dessert = mongoose.model('Dessert', dessertSchema);

module.exports = Dessert;