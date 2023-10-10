// Dashboard.js
import { Routes, Route, Link } from "react-router-dom";
import Orders from "./Orders"; // Import child components
import Sales from "./Sales";

export default function Dashboard() {
  return (
    <div>
      {/* Your dashboard content goes here */}
      <h1>Order Dashboard</h1>

      {/* Add navigation links to child views */}
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/orders">Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/sales">Sales</Link>
          </li>
        </ul>
      </nav>

      {/* Define nested routes */}
      <Routes>
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route path="/dashboard/sales" element={<Sales />} />
      </Routes>
    </div>
  );
}

