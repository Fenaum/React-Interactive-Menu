import { Link, useMatch } from "react-router-dom";

export default function DashMenu({ handleClick, user }) {
  return (
    <div className="dashboard-menu">
      <h3>Manager Tools</h3>
      {user && <p className="dash-user">{user.username}</p>}
      <ul className="dash-menu-list">
        <li>
          <Link to="/manager-dashboard">Home</Link>
        </li>
        <li>
          <Link to="/manager-dashboard/menu">Manage Menu</Link>
        </li>
        <li>
          <Link to="/manager-dashboard/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/manager-dashboard/sales">Sales</Link>
        </li>
        <li>
          <Link to="/manager-dashboard/orders">Orders</Link>
        </li>
      </ul>
      <button className="dash-menu-logout" onClick={handleClick}>Log Out</button>
    </div>
  );
}
