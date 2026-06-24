import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "./Cart.css";

export default function Cart({ cart, updateCartItem, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <main className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link className="cart-browse-btn" to="/">Browse the Menu</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            updateItem={updateCartItem}
            removeItem={removeFromCart}
          />
        ))}
      </div>
      <div className="cart-summary">
        <p className="cart-total">Total: <strong>${total.toFixed(2)}</strong></p>
        <div className="cart-actions">
          <Link className="cart-continue-btn" to="/">Continue Shopping</Link>
          <Link className="cart-checkout-btn" to="/checkout">Proceed to Checkout</Link>
        </div>
      </div>
    </main>
  );
}
