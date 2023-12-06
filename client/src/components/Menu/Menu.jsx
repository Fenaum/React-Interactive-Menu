import { Link } from "react-router-dom";
import Entree from "./Entree";
import Appetizer from "./Appetizer";
import Desserts from "./Dessert";
import Drinks from "./Drinks/Drinks";
import Promotion from "./Promotion";
import "./menu.css";
import "./MenuResponsive.css";

export default function Menu() {
  return (
    <main className="menu-container">
      <h2 className="menu-title">Menu</h2>
      <div className="menu-links">
        <Link className="menu-link" to="/appetizers">
          Appetizers
        </Link>
        <Link className="menu-link" to="/entree">
          Entree
        </Link>
        <Link className="menu-link" to="/desserts">
          Desserts
        </Link>
        <Link className="menu-link" to="/drinks">
          Drinks
        </Link>
      </div>
      <div className="appetizer">
        <h3 className="menu-indicator" >Appetizer</h3>
        <Appetizer />
      </div>
      <Promotion />
      <div className="entree">
        <h3 className="menu-indicator" >Entree</h3>
        <Entree />
      </div>
      <div className="desserts">
        <h3 className="menu-indicator" >Desserts</h3>
        <Desserts />
      </div>
    </main>
  );
}
