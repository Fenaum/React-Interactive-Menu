import { useState, useEffect } from "react";
import "./MenuManager.css";
import MenuItem from "./MenuItem";
import MenuEditor from "./MenuEditor";
import NewItem from "./NewItem";
import useFetchMenuData from "../../../../hooks/useFetchMenuData";
import updateMenuData from "../../../../hooks/UpdateMenuData";
import deleteMenuData from "../../../../hooks/DeleteMenuData";

export default function MenuManager() {
  const [dataVersion, setDataVersion] = useState(0);
  const { appetizers, entrees, desserts, drinks } =
    useFetchMenuData(dataVersion);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  const [currentItemId, setCurrentItemId] = useState({});
  const [currentCategory, setCurrentCategory] = useState(null);
  const [updateMenu, setUpdateMenu] = useState(() => () => {});
  const [deleteItem, setDeleteItem] = useState(() => () => {});
  const [isDeleting, setIsDeleting] = useState(false);

  function getCurrentItem(category) {
    const currentItem = category.find((item) => {
      return item._id === currentItemId;
    });

    return currentItem;
  }

  useEffect(() => {
    if (currentCategory) {
      setUpdateMenu(() =>
        updateMenuData(currentItemId, editedItem, currentCategory?.type)
      );
      setDeleteItem(() => deleteMenuData(currentItemId, currentCategory?.type));
    }
  }, [currentCategory, currentItemId, editedItem, dataVersion]);

  const handleAddItem = () => {
    setDataVersion(dataVersion + 1);
  };

  async function handleUpdate() {
    await updateMenu();
    setDataVersion(dataVersion + 1);
  }

  async function handleDelete() {
    setIsDeleting(true); // Set isDeleting to true when delete operation starts
    await deleteItem();
    setCurrentCategory(null);
    setDataVersion(dataVersion + 1);
    setIsDeleting(false); // Set isDeleting to false when delete operation ends
  }

  return (
    <div className="Menu-manager-container">
      <h2>Menu Manager</h2>
      <div className="card-container">
        <button
          onClick={() => setIsAdding(true)}
        >+ New Item</button>
        {isAdding && (
          <>
            <div className="overlay"></div>
            <NewItem setIsAdding={setIsAdding} />
          </>
        )}
      </div>
      <h3>Appetizers</h3>
      {isEditing && (
        <MenuEditor
          handleUpdate={handleUpdate}
          setEditing={setEditing}
          getCurrentItem={getCurrentItem}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          setEditedItem={setEditedItem}
          editedItem={editedItem}
        />
      )}
      <div className="menu-manager-card-container">
        {appetizers.map((item) => (
          <MenuItem
            key={item._id}
            item={item}
            category={appetizers}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            setEditing={setEditing}
            setCurrentItemId={setCurrentItemId}
            handleDelete={handleDelete}
            isDeleting={isDeleting}
          />
        ))}
      </div>
      <h3>Entrees</h3>
      <div className="menu-manager-card-container">
        {entrees.map((item) => (
          <MenuItem
            key={item._id}
            item={item}
            category={entrees}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            setEditing={setEditing}
            setCurrentItemId={setCurrentItemId}
            handleDelete={handleDelete}
            isDeleting={isDeleting}
          />
        ))}
      </div>
      <h3>Desserts</h3>
      <div className="menu-manager-card-container">
        {desserts.map((item) => (
          <MenuItem
            key={item._id}
            item={item}
            category={desserts}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            setEditing={setEditing}
            setCurrentItemId={setCurrentItemId}
            handleDelete={handleDelete}
            isDeleting={isDeleting}
          />
        ))}
      </div>
      {/* <h3>Drinks</h3>
      <div className="menu-manager-card-container">
        {Object.entries(drinks).map(([category, items]) =>
          items.map((item) => (
            <MenuItem
              key={item._id}
              id={item}
              item={item}
              category="drinks"
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          ))
        )}
      </div> */}
    </div>
  );
}
