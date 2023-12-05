import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import userLogo from "../../assets/images/user.svg"
import menuLogo from "../../assets/images/menu.svg";
import About from "../About/About"

export default function Navbar(prop) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = prop.user;

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let link;
  if (user) {
    switch (user.role) {
      case "manager":
        link = (
          <Link to="/manager-dashboard">
            <h2>Manager Dashboard</h2>
          </Link>
        );
        break;
      case "employee":
        link = (
          <Link to="/employee-dashboard">
            <h2>Employee Dashboard</h2>
          </Link>
        );
        break;
      case "user":
        link = (
          <Link to="/user-dashboard">
            <img className="icon user-icon" src={userLogo} alt="userLogo" />
          </Link>
        );
        break;
      default:
        link = (
          <Link to="/login">
            <img className="icon user-icon" src={userLogo} alt="userLogo" />
          </Link>
        );
    }
  } else {
    link = (
      <Link to="/login">
        <img className="icon user-icon" src={userLogo} alt="userLogo" />
      </Link>
    );
  }

  return (
    <>
      <header className="header">
        <nav>
          <Link to="./">
            <img className="logo" src={logo} alt="logo-img" />
          </Link>
        </nav>
        <div className="menu">
          {link}
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

