const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    tableNumber: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    items: [
      {
        itemId: String,
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    specialRequests: String,
    status: {
      type: String,
      enum: ["pending", "preparing", "ready", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
