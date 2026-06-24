import { Link } from "react-router-dom";
import Entree from "./Entree";
import Appetizer from "./Appetizer";
import Desserts from "./Dessert";
import Drinks from "./Drinks/Drinks";
import Promotion from "./Promotion";
import "./menu.css";
import "./MenuResponsive.css";

export default function Menu({ addToCart }) {
  return (
    <main className="menu-container">
      <h2 className="menu-title">Menu</h2>
      <div className="menu-links">
        <a className="menu-link" href="#appetizers">Appetizers</a>
        <a className="menu-link" href="#entree">Entree</a>
        <a className="menu-link" href="#desserts">Desserts</a>
        <a className="menu-link" href="#drinks">Drinks</a>
      </div>
      <div className="appetizer" id="appetizers">
        <h3 className="menu-indicator">Appetizer</h3>
        <Appetizer addToCart={addToCart} />
      </div>
      <Promotion />
      <div className="entree" id="entree">
        <h3 className="menu-indicator">Entree</h3>
        <Entree addToCart={addToCart} />
      </div>
      <div className="desserts" id="desserts">
        <h3 className="menu-indicator">Desserts</h3>
        <Desserts addToCart={addToCart} />
      </div>
      <div className="drinks" id="drinks">
        <h3 className="menu-indicator">Drinks</h3>
        <Drinks addToCart={addToCart} />
      </div>
    </main>
  );
}
