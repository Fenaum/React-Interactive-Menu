import { useState, useEffect } from "react";
import "./MenuManager.css";
import MenuItem from "./MenuItem";
import MenuEditor from "./MenuEditor";
import useFetchMenuData from "../../../../hooks/useFetchMenuData";
import UpdateMenuData from "../../../../hooks/useUpdateMenuData";

export default function MenuManager() {
  const [dataVersion, setDataVersion] = useState(0);
  const { appetizers, entrees, desserts, drinks } = useFetchMenuData(dataVersion);
  const [isEditing, setEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  const [currentItemID, setCurrentItemID] = useState({});
  const [currentCategory, setCurrentCategory] = useState(null);

  appetizers.type = "appetizers";
  entrees.type = "entrees";
  desserts.type = "desserts";
  drinks.type = "drinks";

const updateMenu = updateMenuData(currentItemID, editedItem, currentCategory.type, dataVersion);

  function getCurrentItem(category) {
    const currentItem = category.find((item) => {
      return item._id === currentItemID;
    })
    return currentItem;
  }

  const handleAddItem = () => {
    
    setDataVersion(dataVersion + 1);
  };
  
  function handleUpdateitem() {
    useUpdateMenuData(currentItemId, data, category, dataVersion)
  }

  const handleDelete = () => {

    setDataVersion(dataVersion + 1);
  };
  

  return (
    <div className="Menu-manager-container">
      <h2>Menu Manager</h2>
      <div className="card-container">
        <h3>Add new item</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddItem(e.target.category.value, {
              name: e.target.name.value,
              description: e.target.description.value,
              price: e.target.price.value,
            });
          }}
        >
          <label>
            Category:
            <select name="category">
              <option value="appetizer">Appetizer</option>
              <option value="entree">Entree</option>
              <option value="dessert">Dessert</option>
              <option value="wine">Wine</option>
              <option value="cocktail">Cocktail</option>
              <option value="coffee">Coffee</option>
              <option value="nonAlcoholic">Non-Alcoholic</option>
            </select>
          </label>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Description:
            <input type="text" name="description" />
          </label>
          <label>
            Price:
            <input type="number" name="price" />
          </label>
          <button className="menu-manager-add-btn" type="submit">
            Add
          </button>
        </form>
      </div>
      <h3>Appetizers</h3>
      {isEditing && (
        <MenuEditor
          handleUpdate={handleUpdate}
          setEditing={setEditing}
          currentItemId={currentItemID}
          getCurrentItem={getCurrentItem}
          currentCategory={currentCategory}
          setEditedItem={setEditedItem}
          editedItem={editedItem}
        />
      )}
      <div className="menu-manager-card-container">
        {appetizers.map((item) => (
          <MenuItem
            key={item._id}
            item={item}
            category= {appetizers}
            setCurrentCategory={setCurrentCategory}
            setEditing={setEditing}
            setCurrentItemID={setCurrentItemID}
            handleDelete={handleDelete}
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
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <h3>Desserts</h3>
      <div className="menu-manager-card-container">
        {desserts.map((item) => (
          <MenuItem
            key={item._id}
            item={item}
            category="desserts"
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <h3>Drinks</h3>
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
      </div>
    </div>
  );
}