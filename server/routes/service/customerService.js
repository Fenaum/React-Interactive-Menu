const router = require("express").Router();
const { Order, WaiterRequest } = require("../../models");

// Place a new order
router.post("/orders", async (req, res) => {
  try {
    const { tableNumber, items, total, specialRequests } = req.body;
    const userId = req.user ? req.user._id : null;
    const order = await Order.create({ tableNumber, items, total, specialRequests, userId });
    res.status(201).json(order);
  } catch (err) {
    console.error("Failed to create order:", err);
    res.status(500).json({ error: "Failed to place order" });
  }
});

// Get all orders (for employee/manager)
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// Update order status (for employee/manager)
router.put("/orders/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Failed to update order" });
  }
});

// Create a waiter request
router.post("/waiter-request", async (req, res) => {
  try {
    const { tableNumber, message } = req.body;
    const request = await WaiterRequest.create({ tableNumber, message });
    res.status(201).json(request);
  } catch (err) {
    console.error("Failed to create waiter request:", err);
    res.status(500).json({ error: "Failed to send waiter request" });
  }
});

// Get all waiter requests (for employee/manager)
router.get("/waiter-requests", async (req, res) => {
  try {
    const requests = await WaiterRequest.find({ status: { $ne: "resolved" } }).sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch waiter requests" });
  }
});

// Update waiter request status
router.put("/waiter-request/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const request = await WaiterRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!request) return res.status(404).json({ error: "Request not found" });
    res.json(request);
  } catch (err) {
    res.status(500).json({ error: "Failed to update waiter request" });
  }
});

module.exports = router;
