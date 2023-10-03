import { Navigate } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"
import logo from "../../assets/images/logo.png"
import menuLogo from "../../assets/images/menu.svg"

export default function Navbar() {
    // rotate animation
    const [rotate, setRotate ] = useState(false);
    const handleClick = () => {
        setRotate(!rotate);
    }

    return (
        <header className="header">
            <nav>
                <img className="logo" src={logo} alt="logo-img" />
            </nav>
            <div className="menu">
                <button className={`menu-button ${rotate ? 'rotate' : ''}`} onClick={handleClick} >
                    <img className="menu-logo" src={menuLogo} alt="menu-logo" />
                </button>
                <ul className={`menu-item ${rotate ? 'show' : ''}`} >
                    <li>
                        <a href="">Cart</a>
                    </li>
                    <li>
                        <a href="">Service</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}