import { useNavigate } from "react-router-dom";
import menuService from "../../../utils/menuService";
import "../dashboard.css";
import "./UserDashboard.css";

const { postUserLogout } = menuService;

export default function UserDashboard({ user, setUser, setLastLoginLogoutTime }) {
  const navigate = useNavigate();

  function handleLogout(event) {
    event.preventDefault();
    postUserLogout(user)
      .then(() => {
        setUser(null);
        setLastLoginLogoutTime(Date.now());
        navigate("/");
      })
      .catch((err) => {
        console.error(err, { message: "error logging user off" });
      });
  }

  if (!user) {
    return (
      <main className="user-dashboard">
        <p>Please <a href="/login">log in</a> to view your dashboard.</p>
      </main>
    );
  }

  return (
    <main className="user-dashboard">
      <div className="user-dashboard-card">
        <div className="user-dashboard-avatar">
          {user.username ? user.username[0].toUpperCase() : "U"}
        </div>
        <h2 className="user-dashboard-name">{user.username}</h2>
        <p className="user-dashboard-email">{user.email}</p>
        <span className="user-dashboard-role">{user.role}</span>

        <div className="user-dashboard-info">
          <div className="user-info-row">
            <span className="user-info-label">Username</span>
            <span className="user-info-value">{user.username}</span>
          </div>
          <div className="user-info-row">
            <span className="user-info-label">Email</span>
            <span className="user-info-value">{user.email}</span>
          </div>
          <div className="user-info-row">
            <span className="user-info-label">Account type</span>
            <span className="user-info-value">{user.role}</span>
          </div>
          <div className="user-info-row">
            <span className="user-info-label">Member since</span>
            <span className="user-info-value">
              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "—"}
            </span>
          </div>
        </div>

        <button className="user-dashboard-logout" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </main>
  );
}
