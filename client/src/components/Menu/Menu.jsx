import { Link } from "react-router-dom";
import Entree from "./Entree";
import Appetizer from "./Appetizer";
import Promotion from "./Promotion";
import "./Menu.css";
import "./MenuResponsive.css";

export default function Menu() {
  return (
    <main className="menu-container">
      <h2 className="menu-title">Menu</h2>
      <div className="menu-links">
        <Link className="menu-link" to="/appetizers">Appetizers</Link>
        <Link className="menu-link" to="/entree">Entree</Link>
        <Link className="menu-link" to="/desserts">Desserts</Link>
        <Link className="menu-link" to="/drinks">Drinks</Link>
      </div>
      <div className="appetizer">
        <h3>Appetizer</h3>
        <Appetizer />
      </div>
      <div className="promotion-container" >
        <Promotion />
      </div>
      <div className="entree">
        <h3>Entree</h3>
        <Entree />
      </div>
    </main>
  );
}
