const router = require("express").Router();
const { Order, WaiterRequest } = require("../../models");

// Get all orders — restricted to employees/managers
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).limit(100);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// Update order status
router.put("/orders/:id/status", async (req, res) => {
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
    res.status(500).json({ error: "Failed to update order status" });
  }
});

// Get pending waiter requests
router.get("/waiter-requests", async (req, res) => {
  try {
    const requests = await WaiterRequest.find({ status: "pending" }).sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch waiter requests" });
  }
});

// Acknowledge / resolve a waiter request
router.put("/waiter-requests/:id", async (req, res) => {
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
