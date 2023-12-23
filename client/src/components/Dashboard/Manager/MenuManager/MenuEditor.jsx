import React, { useEffect } from "react";

export default function MenuEditor({
  getCurrentItem,
  editedItem,
  setEditedItem,
  handleUpdate,
  setEditing,
  currentCategory,
  currentItemID,
}) {
  let currentItem = getCurrentItem(currentCategory);

  // Update editedItem whenever currentItem changes
  useEffect(() => {
    setEditedItem(currentItem);
  }, [currentItem, setEditedItem]);

  const handleChange = (e) => {
    setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(currentItemID, editedItem);
    setEditing(false);
  };

  return (
    <form className="item-editor" onSubmit={handleSubmit}>
      <label className="item-editor-itemName">
        Name:
        <input
          type="text"
          name="name"
          value={editedItem.name}
          onChange={handleChange}
        />
      </label>
      <label className="item-editor-itemDescript">
        Description:
        <input
          type="text"
          name="description"
          value={editedItem.description}
          onChange={handleChange}
        />
      </label>
      <label className="item-editor-itemPrice">
        Price:
        <input
          type="number"
          name="price"
          value={editedItem.price}
          onChange={handleChange}
        />
      </label>
      <button className="item-editor-updateBtn" type="submit">
        Update
      </button>
      <button
        className="item-editor-cancelBtn"
        type="button"
        onClick={() => setEditing(false)}
      >
        Cancel
      </button>
    </form>
  );
}
