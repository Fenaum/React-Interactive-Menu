const mongoose = require("mongoose");

const waiterRequestSchema = new mongoose.Schema(
  {
    tableNumber: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: "Waiter requested",
    },
    status: {
      type: String,
      enum: ["pending", "acknowledged", "resolved"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const WaiterRequest = mongoose.model("WaiterRequest", waiterRequestSchema);

module.exports = WaiterRequest;
