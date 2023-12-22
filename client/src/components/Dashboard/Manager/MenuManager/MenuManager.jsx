import { useState, useEffect } from "react";
import "./MenuManager.css";
import MenuItem from "./MenuItem";
import MenuEditor from "./MenuEditor";
import useFetchMenuData from "../../../../hooks/useFetchMenuData";

export default function MenuManager() {
  const [dataVersion, setDataVersion] = useState(0);
  const { appetizers, entrees, desserts, drinks } = useFetchMenuData(dataVersion);
  const [isEditing, setEditing] = useState(false);
  const [currentItemID, setCurrentItemID] = useState({});

 const handleEdit = (id, item) => {
   setCurrentItemID(id);
   setEditedItem(item);
 };


  // function getCurrentItem(category) {
  //   const currentItem = category.find((item) => {
  //     return item.id === currentItemID;
  //   })
  //   return currentItem;
  // }

  const handleAddItem = () => {
    
    setDataVersion(dataVersion + 1);
  };
  
  const handleUpdate = () => {

    setDataVersion(dataVersion + 1);
  };

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
          editedItem={editedItem}
          setEditedItem={setEditedItem}
          handleUpdate={handleUpdate}
          setEditing={setEditing}
        />
      )}
      <div className="menu-manager-card-container">
        {appetizers.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            category="appetizer"
            handleEdit={() => handleEdit(item.id, item)}
            isEditing={currentItemID === item.id}
            setEditing={setEditing}
            currentItemID={currentItemID}
            editedItem={editedItem}
            setEditedItem={setEditedItem}
            setCurrentItemID={setCurrentItemID}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <h3>Entrees</h3>
      <div className="menu-manager-card-container">
        {entrees.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            category="entree"
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <h3>Desserts</h3>
      <div className="menu-manager-card-container">
        {desserts.map((item) => (
          <MenuItem
            key={item.id}
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
              key={item.id}
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