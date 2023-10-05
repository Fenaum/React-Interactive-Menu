import Entree from "./Entree"
import Appetizer from "./Appetizer"
import "./menu.css"

export default function Menu() {
    return (
        <main className="menu-container" >
            <h2 className="menu-title" >
                Our Menu
            </h2>
            <div className="entree">
                <h3>Entree</h3>
                <Appetizer />
            </div>
            <div className="appetizer">
                <h3>Appetizers</h3>
                <Entree />
            </div>
        </main>
    )
}