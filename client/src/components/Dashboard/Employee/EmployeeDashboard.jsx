import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import menuService from "../../../utils/menuService";
import "../dashboard.css";
import "./EmployeeDashboard.css";

const STATUS_LABELS = {
  pending: "Pending",
  preparing: "Preparing",
  ready: "Ready",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

export default function EmployeeDashboard({ user, setUser, setLastLoginLogoutTime }) {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [waiterRequests, setWaiterRequests] = useState([]);
  const [activeTab, setActiveTab] = useState("orders");

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 15000);
    return () => clearInterval(interval);
  }, []);

  async function loadData() {
    try {
      const [ordersData, waiterData] = await Promise.all([
        menuService.fetchOrders(),
        menuService.fetchWaiterRequests(),
      ]);
      setOrders(ordersData);
      setWaiterRequests(waiterData);
    } catch (err) {
      console.error("Failed to load employee data:", err);
    }
  }

  async function handleOrderStatus(id, status) {
    try {
      await menuService.updateOrderStatus(id, status);
      setOrders((prev) =>
        prev.map((o) => (o._id === id ? { ...o, status } : o))
      );
    } catch (err) {
      console.error("Failed to update order:", err);
    }
  }

  async function handleWaiterRequest(id, status) {
    try {
      await menuService.updateWaiterRequest(id, status);
      setWaiterRequests((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      console.error("Failed to update waiter request:", err);
    }
  }

  function handleLogout(e) {
    e.preventDefault();
    menuService.postUserLogout(user).then(() => {
      setUser(null);
      setLastLoginLogoutTime(Date.now());
      navigate("/");
    });
  }

  const activeOrders = orders.filter(
    (o) => o.status !== "delivered" && o.status !== "cancelled"
  );

  return (
    <div className="employee-dashboard">
      <aside className="employee-sidebar">
        <h3>Employee Panel</h3>
        {user && <p className="employee-username">{user.username}</p>}
        <ul className="employee-nav">
          <li
            className={activeTab === "orders" ? "active" : ""}
            onClick={() => setActiveTab("orders")}
          >
            Orders
            {activeOrders.length > 0 && (
              <span className="badge">{activeOrders.length}</span>
            )}
          </li>
          <li
            className={activeTab === "waiter" ? "active" : ""}
            onClick={() => setActiveTab("waiter")}
          >
            Waiter Requests
            {waiterRequests.length > 0 && (
              <span className="badge">{waiterRequests.length}</span>
            )}
          </li>
        </ul>
        <button className="employee-logout" onClick={handleLogout}>
          Log Out
        </button>
      </aside>

      <main className="employee-content">
        {activeTab === "orders" && (
          <section>
            <h2>Active Orders</h2>
            {activeOrders.length === 0 ? (
              <p className="employee-empty">No active orders.</p>
            ) : (
              activeOrders.map((order) => (
                <div key={order._id} className="employee-order-card">
                  <div className="employee-order-header">
                    <span className="employee-table">Table {order.tableNumber}</span>
                    <span className={`employee-status status-${order.status}`}>
                      {STATUS_LABELS[order.status]}
                    </span>
                    <span className="employee-time">
                      {new Date(order.createdAt).toLocaleTimeString()}
                    </span>
                  </div>
                  <ul className="employee-order-items">
                    {order.items.map((item, i) => (
                      <li key={i}>
                        {item.name} × {item.quantity}
                      </li>
                    ))}
                  </ul>
                  {order.specialRequests && (
                    <p className="employee-special">Note: {order.specialRequests}</p>
                  )}
                  <p className="employee-total">Total: ${order.total?.toFixed(2)}</p>
                  <div className="employee-order-actions">
                    {order.status === "pending" && (
                      <button onClick={() => handleOrderStatus(order._id, "preparing")}>
                        Start Preparing
                      </button>
                    )}
                    {order.status === "preparing" && (
                      <button onClick={() => handleOrderStatus(order._id, "ready")}>
                        Mark Ready
                      </button>
                    )}
                    {order.status === "ready" && (
                      <button onClick={() => handleOrderStatus(order._id, "delivered")}>
                        Mark Delivered
                      </button>
                    )}
                    <button
                      className="btn-cancel"
                      onClick={() => handleOrderStatus(order._id, "cancelled")}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))
            )}
          </section>
        )}

        {activeTab === "waiter" && (
          <section>
            <h2>Waiter Requests</h2>
            {waiterRequests.length === 0 ? (
              <p className="employee-empty">No pending waiter requests.</p>
            ) : (
              waiterRequests.map((req) => (
                <div key={req._id} className="employee-waiter-card">
                  <div className="employee-order-header">
                    <span className="employee-table">Table {req.tableNumber}</span>
                    <span className="employee-time">
                      {new Date(req.createdAt).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="employee-waiter-msg">{req.message}</p>
                  <div className="employee-order-actions">
                    <button onClick={() => handleWaiterRequest(req._id, "acknowledged")}>
                      Acknowledge
                    </button>
                    <button onClick={() => handleWaiterRequest(req._id, "resolved")}>
                      Resolved
                    </button>
                  </div>
                </div>
              ))
            )}
          </section>
        )}
      </main>
    </div>
  );
}
