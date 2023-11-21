import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
// import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import MessageInterface from "./components/MessageInterface/MessageInterface"
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import "./assets/style.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <MessageInterface />
      <Footer />
    </>
  );
}

export default App;
