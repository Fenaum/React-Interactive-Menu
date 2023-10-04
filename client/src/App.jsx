import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import "./assets/style.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;