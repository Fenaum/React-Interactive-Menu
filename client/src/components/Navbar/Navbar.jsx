import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import userLogo from "../../assets/images/user.svg";
import menuLogo from "../../assets/images/menu.svg";
import About from "../About/About";

export default function Navbar({ user, cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let link;
  if (user) {
    switch (user.role) {
      case "manager":
        link = (
          <Link to="/manager-dashboard">
            <h2>{user.username}</h2>
          </Link>
        );
        break;
      case "employee":
        link = (
          <Link to="/employee-dashboard">
            <h2>{user.username}</h2>
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
          <Link onClick={handleClick} to="/cart">
            CART{cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/about">ABOUT</Link>
        </li>
        <li>
          <Link onClick={handleClick} to="/login">SIGN IN</Link>
        </li>
      </ul>
    </>
  );
}
