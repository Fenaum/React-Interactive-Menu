import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import menuService from "./utils/menuService";
import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
// import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup"
import MessageInterface from "./components/MessageInterface/MessageInterface"
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import "./assets/style.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userData = await menuService.fetchUser();
      setUser(userData);
    };

    fetchUserProfile();
  }, []);

  console.log(user);

  return (
    <>
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Menu/>} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
      <MessageInterface />
      <Footer />
    </>
  );
}

export default App;
