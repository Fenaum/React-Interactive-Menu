import { useState, useEffect } from "react";
import menuService from "../../../utils/menuService";

export default function Sales() {
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

  const delivered = orders.filter((o) => o.status === "delivered");
  const totalRevenue = delivered.reduce((sum, o) => sum + (o.total || 0), 0);
  const avgOrder = delivered.length ? totalRevenue / delivered.length : 0;

  const itemCounts = {};
  delivered.forEach((order) => {
    order.items.forEach((item) => {
      itemCounts[item.name] = (itemCounts[item.name] || 0) + item.quantity;
    });
  });
  const topItems = Object.entries(itemCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  if (loading) return <div className="dash-home">Loading sales data...</div>;

  return (
    <div className="dash-home">
      <h2>Sales Overview</h2>
      <div className="sales-stats">
        <div className="sales-stat-card">
          <span className="sales-stat-label">Total Orders Delivered</span>
          <span className="sales-stat-value">{delivered.length}</span>
        </div>
        <div className="sales-stat-card">
          <span className="sales-stat-label">Total Revenue</span>
          <span className="sales-stat-value">${totalRevenue.toFixed(2)}</span>
        </div>
        <div className="sales-stat-card">
          <span className="sales-stat-label">Avg. Order Value</span>
          <span className="sales-stat-value">${avgOrder.toFixed(2)}</span>
        </div>
      </div>

      <h3>Top Selling Items</h3>
      {topItems.length === 0 ? (
        <p>No sales data yet.</p>
      ) : (
        <table className="sales-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Units Sold</th>
            </tr>
          </thead>
          <tbody>
            {topItems.map(([name, count]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>Recent Orders</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Table</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {orders.slice(0, 20).map((order) => (
            <tr key={order._id}>
              <td>{order.tableNumber}</td>
              <td>{order.items.map((i) => `${i.name} ×${i.quantity}`).join(", ")}</td>
              <td>${order.total?.toFixed(2)}</td>
              <td>{order.status}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
