import { useNavigate } from "react-router-dom";
import menuAPI from "../../../utils/menuService";
import { Route, Routes } from "react-router-dom";
import DashMenu from "./DashMenu";
import MenuManager from "./MenuManager/MenuManager";
import Home from "./Home/Home";
import Inventory from "./Inventory";
import Sales from "./sales";
import Orders from "./Orders";
import "../dashboard.css";

const { postUserLogout } = menuAPI;

export default function ManagerDashboard({ user, setUser, setLastLoginLogoutTime }) {
  const navigate = useNavigate();

  function handleClick(event) {
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

  return (
    <>
      <hr />
      <div className="grid-container">
        <DashMenu handleClick={handleClick} user={user} />
        <div className="dashboard">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="menu/*" element={<MenuManager />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="sales" element={<Sales />} />
            <Route path="orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
