import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import userLogo from "../../assets/images/user.svg"
import menuLogo from "../../assets/images/menu.svg";
import About from "../About/About"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <nav>
          <Link to="./">
            <img className="logo" src={logo} alt="logo-img" />
          </Link>
        </nav>
        <div className="menu">
          <Link to="/login">
            <img className="icon user-icon" src={userLogo} alt="userLogo" />
          </Link>
          <button
            className={`menu-button ${isMenuOpen ? "rotate" : ""}`}
            onClick={handleClick}
          >
            <img className="icon menu-icon" src={menuLogo} alt="menu-icon" />
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
        <li>
          <Link to="/about">CONTACT</Link>
        </li>
      </ul>
    </>
  );
}

