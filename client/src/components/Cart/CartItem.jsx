import React from "react";

function CartItem({ item, updateItem, removeItem }) {
  // Destructure the item details
  const { id, name, price, quantity } = item;

  // Function to handle quantity change
  const handleQuantityChange = (event) => {
    updateItem(id, event.target.value);
  };

  // Function to handle item removal
  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
    <div className="cart-item">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <button onClick={handleRemoveItem}>Remove</button>
    </div>
  );
}

export default CartItem;
