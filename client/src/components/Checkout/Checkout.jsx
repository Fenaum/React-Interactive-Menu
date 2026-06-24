import { useState } from "react";
import { useNavigate } from "react-router-dom";
import menuService from "../../utils/menuService";
import "./Checkout.css";

export default function Checkout({ cart, clearCart, user }) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    tableNumber: "",
    specialRequests: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0 && !submitted) {
    return (
      <main className="checkout-container">
        <h2 className="checkout-title">Checkout</h2>
        <p className="checkout-empty">Your cart is empty. <a href="/">Return to menu.</a></p>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="checkout-container">
        <div className="checkout-success">
          <h2>Order Placed!</h2>
          <p>Your order has been sent to the kitchen. A server will be with you shortly.</p>
          <button className="checkout-return-btn" onClick={() => navigate("/")}>Back to Menu</button>
        </div>
      </main>
    );
  }

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.tableNumber) {
      setError("Please enter your table number.");
      return;
    }
    try {
      const orderItems = cart.map((item) => ({
        itemId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));
      await menuService.placeOrder({
        tableNumber: formState.tableNumber,
        specialRequests: formState.specialRequests,
        items: orderItems,
        total,
      });
      clearCart();
      setSubmitted(true);
    } catch (err) {
      setError("Failed to place order. Please try again.");
    }
  };

  return (
    <main className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <div className="checkout-layout">
        <section className="checkout-summary">
          <h3>Order Summary</h3>
          <ul className="checkout-items">
            {cart.map((item) => (
              <li key={item._id} className="checkout-item">
                <span className="checkout-item-name">{item.name} × {item.quantity}</span>
                <span className="checkout-item-price">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="checkout-total">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </section>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Order Details</h3>
          {error && <p className="checkout-error">{error}</p>}
          <label>
            Table Number
            <input
              type="text"
              name="tableNumber"
              value={formState.tableNumber}
              onChange={handleChange}
              placeholder="e.g. 5"
              required
            />
          </label>
          <label>
            Special Requests
            <textarea
              name="specialRequests"
              value={formState.specialRequests}
              onChange={handleChange}
              placeholder="Allergies, preferences, etc."
              rows={4}
            />
          </label>
          {user && (
            <p className="checkout-user-info">Ordering as: <strong>{user.username}</strong></p>
          )}
          <button type="submit" className="checkout-submit-btn">Place Order</button>
        </form>
      </div>
    </main>
  );
}
