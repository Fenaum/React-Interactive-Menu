export default function CartItem({ item, updateItem, removeItem }) {
  const { _id, name, price, quantity, imgURL } = item;

  const imageUrl =
    imgURL && imgURL.startsWith("http")
      ? imgURL
      : `http://localhost:5000${imgURL || ""}`;

  return (
    <div className="cart-item">
      <img className="cart-item-img" src={imageUrl} alt={name} />
      <div className="cart-item-info">
        <h3 className="cart-item-name">{name}</h3>
        <p className="cart-item-price">${price.toFixed(2)} each</p>
      </div>
      <div className="cart-item-controls">
        <button
          className="cart-qty-btn"
          onClick={() => updateItem(_id, quantity - 1)}
        >
          −
        </button>
        <span className="cart-qty">{quantity}</span>
        <button
          className="cart-qty-btn"
          onClick={() => updateItem(_id, quantity + 1)}
        >
          +
        </button>
      </div>
      <p className="cart-item-subtotal">${(price * quantity).toFixed(2)}</p>
      <button className="cart-remove-btn" onClick={() => removeItem(_id)}>
        Remove
      </button>
    </div>
  );
}
