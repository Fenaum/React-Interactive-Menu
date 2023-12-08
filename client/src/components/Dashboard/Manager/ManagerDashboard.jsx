import { useNavigate } from "react-router-dom";
import menuAPI from "../../../utils/menuService";
import { Route, Routes } from "react-router-dom";
import DashMenu from "./DashMenu";
import MenuManager from "./MenuManager/MenuManager";
import Home from "./Home/Home";
import "../dashboard.css";
const { postUserLogout } = menuAPI;

export default function ManagerDashboard({
  user,
  setUser,
  setLastLoginLogoutTime,
}) {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    postUserLogout(user)
      .then((user) => {
        console.log(user, "successfully logged out");
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
          </Routes>
        </div>
      </div>
    </>
  );
}
