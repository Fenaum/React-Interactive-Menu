import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import menuLogo from "../../assets/images/menu.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <nav>
          <img className="logo" src={logo} alt="logo-img" />
        </nav>
        <div className="menu">
          <button
            className={`menu-button ${isMenuOpen ? "rotate" : ""}`}
            onClick={handleClick}
          >
            <img className="menu-logo" src={menuLogo} alt="menu-logo" />
          </button>
        </div>
      </header>
      <ul className={`menu-items ${isMenuOpen ? "show" : ""}`}>
        <li>
          <Link to="/cart">CART</Link>
        </li>
        <li>
          <Link to="/service">SERVICES</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </>
  );
}

