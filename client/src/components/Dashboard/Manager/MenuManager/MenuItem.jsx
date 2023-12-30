export default function MenuItem({
  item,
  handleDelete,
  isDeleting,
  setCurrentItemId,
  setEditing,
  category,
  setCurrentCategory,
}) {
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
            setCurrentItemId(item._id);
            setEditing(true);
            setCurrentCategory(category);
          }}
        >
          Edit
        </button>
        <button 
        className="menu-manager-delete-btn" 
        onClick={(e) => {
          e.preventDefault();
          setCurrentItemId(item._id);
          setCurrentCategory(category);
          handleDelete();
        }}
        disabled={isDeleting}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
