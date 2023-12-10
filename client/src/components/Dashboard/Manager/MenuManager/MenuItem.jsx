export default function MenuItem({
  item,
  category,
  handleUpdate,
  handleDelete,
  isEditing,
  setEditing,
  editedItem,
  setEditedItem,
  currentItemID,
  setCurrentItemID,
  id
}) {

  if (isEditing) {
    return (
      <div>
        <input
          value={editedItem.name}
          onChange={(e) =>
            setEditedItem({ ...editedItem, name: e.target.value })
          }
        />
        <input
          value={editedItem.description}
          onChange={(e) =>
            setEditedItem({ ...editedItem, description: e.target.value })
          }
        />
        <input
          value={editedItem.price}
          onChange={(e) =>
            setEditedItem({ ...editedItem, price: e.target.value })
          }
        />
        <button onClick={handleUpdate}>Update</button>
        <button>Cancel</button>
      </div>
    );
  }

  return (
    <div className="menu-manager-item-card">
      <img className="menu-manager-item-img" src={item.imgURL}></img>
      <div className="manager-item-content">
        <h2 className="manager-item-title">{item.name}</h2>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
      <div className="manage-btns">
        <button
          className="menu-manager-edit-btn"
          onClick={(e) => {
            e.preventDefault();
            setEditing((prevIsEditing) => !prevIsEditing);
            setCurrentItemID(id);
          }}
        >
          Edit
        </button>
        <button className="menu-manager-delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
