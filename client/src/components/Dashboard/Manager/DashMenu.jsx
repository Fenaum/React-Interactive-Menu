import { Link } from "react-router-dom";

export default function DashMenu({ handleClick }) {
  return (
    <div className="dashboard-menu">
      <h3>Tools</h3>
      <ul className="dash-menu-list">
        <li>
          <Link to="/menu">Manage Menus</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/user">User Profile</Link>
        </li>
        <li>
          <Link to="/user-setting">Settings</Link>
        </li>
      </ul>
      <button className="dash-menu-logout" onClick={handleClick}>Log Out</button>
    </div>
  );
}
