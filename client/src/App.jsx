import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import menuService from "./utils/menuService";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import About from "./components/About/About";
import MessageInterface from "./components/MessageInterface/MessageInterface";
import Footer from "./components/Footer/Footer";
import ManagerDashboard from "./components/Dashboard/Manager/ManagerDashboard";
import UserDashboard from "./components/Dashboard/User/UserDashboard";
import EmployeeDashboard from "./components/Dashboard/Employee/EmployeeDashboard";
import "./assets/style.css";

function App() {
  const [user, setUser] = useState(null);
  const [lastLoginLogoutTime, setLastLoginLogoutTime] = useState(Date.now());
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userData = await menuService.fetchUser();
        setUser(userData);
      } catch (err) {
        // not logged in
      }
    };
    fetchUserProfile();
  }, [lastLoginLogoutTime]);

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((c) => c._id === item._id);
      if (existing) {
        return prev.map((c) =>
          c._id === item._id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function updateCartItem(id, quantity) {
    const qty = parseInt(quantity, 10);
    if (qty <= 0) {
      removeFromCart(id);
    } else {
      setCart((prev) =>
        prev.map((c) => (c._id === id ? { ...c, quantity: qty } : c))
      );
    }
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((c) => c._id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <Router>
        <Navbar user={user} cartCount={cart.reduce((sum, c) => sum + c.quantity, 0)} />
        <Routes>
          <Route path="/" element={<Menu addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateCartItem={updateCartItem}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} clearCart={clearCart} user={user} />}
          />
          <Route
            path="/login"
            element={<Login setLastLoginLogoutTime={setLastLoginLogoutTime} />}
          />
          <Route
            path="/signup"
            element={<Signup setLastLoginLogoutTime={setLastLoginLogoutTime} />}
          />
          <Route path="/about" element={<About />} />
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
          <Route
            path="/employee-dashboard/*"
            element={
              <EmployeeDashboard
                user={user}
                setUser={setUser}
                setLastLoginLogoutTime={setLastLoginLogoutTime}
              />
            }
          />
        </Routes>
        <MessageInterface user={user} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
