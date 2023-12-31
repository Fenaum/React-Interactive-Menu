import React, { useEffect } from "react";

export default function MenuEditor({
  getCurrentItem,
  editedItem,
  setEditedItem,
  handleUpdate,
  setEditing,
  currentCategory,
  setCurrentCategory,
  setSelectedFile
}) {
  let currentItem = getCurrentItem(currentCategory);

  // Update editedItem whenever currentItem changes
  useEffect(() => {
    setEditedItem(currentItem);
  }, [currentItem, setEditedItem]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
    setEditing(false);
  };

  return (
    <form
      className="item-editor"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <label className="item-editor-itemName">
        Name:
        <input
          type="text"
          name="name"
          value={editedItem ? editedItem.name : ""}
          onChange={handleChange}
        />
      </label>
      <label className="item-editor-itemDescript">
        Description:
        <input
          type="text"
          name="description"
          value={editedItem ? editedItem.description : ""}
          onChange={handleChange}
        />
      </label>
      <label className="item-editor-itemPrice">
        Price:
        <input
          type="number"
          name="price"
          value={editedItem ? editedItem.price : ""}
          onChange={handleChange}
        />
      </label>
      <input type="file" name="image" onChange={handleFileChange} />
      <button className="item-editor-updateBtn" type="submit">
        Update
      </button>
      <button
        className="item-editor-cancelBtn"
        type="button"
        onClick={() => {
          setCurrentCategory(null);
          setEditing(false);
        }}
      >
        Cancel
      </button>
    </form>
  );
}
