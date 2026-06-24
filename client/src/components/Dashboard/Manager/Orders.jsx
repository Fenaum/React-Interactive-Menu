import { useState, useEffect } from "react";
import menuService from "../../../utils/menuService";

const STATUS_OPTIONS = ["pending", "preparing", "ready", "delivered", "cancelled"];

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    menuService
      .fetchOrders()
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function handleStatus(id, status) {
    try {
      await menuService.updateOrderStatus(id, status);
      setOrders((prev) =>
        prev.map((o) => (o._id === id ? { ...o, status } : o))
      );
    } catch (err) {
      console.error("Failed to update order:", err);
    }
  }

  if (loading) return <div className="dash-home">Loading orders...</div>;

  return (
    <div className="dash-home">
      <h2>All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <table className="sales-table">
          <thead>
            <tr>
              <th>Table</th>
              <th>Items</th>
              <th>Total</th>
              <th>Special Requests</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.tableNumber}</td>
                <td>{order.items.map((i) => `${i.name} ×${i.quantity}`).join(", ")}</td>
                <td>${order.total?.toFixed(2)}</td>
                <td>{order.specialRequests || "—"}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => handleStatus(order._id, e.target.value)}
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
