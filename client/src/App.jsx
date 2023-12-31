import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import menuService from "./utils/menuService";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
// import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import MessageInterface from "./components/MessageInterface/MessageInterface";
import Footer from "./components/Footer/Footer";
import ManagerDashboard from "./components/Dashboard/Manager/ManagerDashboard";
import UserDashboard from "./components/Dashboard/User/UserDashboard";
import "./assets/style.css";

function App() {
  const [user, setUser] = useState(null);
  const [lastLoginLogoutTime, setLastLoginLogoutTime] = useState(Date.now());

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = await menuService.fetchUser();
        setUser(userData);
      } catch (err) {
        throw err;
      }
    };
    fetchUserProfile();
  }, [lastLoginLogoutTime]);

  console.log(user);

  return (
    <>
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Menu />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route
            path="/login"
            element={<Login setLastLoginLogoutTime={setLastLoginLogoutTime} />}
          />
          <Route
            path="/signup"
            element={<Signup setLastLoginLogoutTime={setLastLoginLogoutTime} />}
          />
          <Route
            path="/user-dashboard/*"
            element={
              <UserDashboard
                user={user}
                setUser={setUser}
                setLastLoginLogoutTime={setLastLoginLogoutTime}
              />
            }
          />
          <Route
            path="/manager-dashboard/*"
            element={
              <ManagerDashboard
                user={user}
                setUser={setUser}
                setLastLoginLogoutTime={setLastLoginLogoutTime}
              />
            }
          />
        </Routes>
      </Router>
      <MessageInterface />
      <Footer />
    </>
  );
}

export default App;
