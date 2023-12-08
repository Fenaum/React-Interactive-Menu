import { useState, useEffect } from "react";
import menuAPI from "../../../../utils/menuService";
import "./MenuManager.css";
const {
  fetchAppetizer,
  fetchEntree,
  fetchDessert,
  fetchAllWine,
  fetchAllCocktail,
  fetchAllCoffee,
  fetchAllNonAlcoholic,
  addAppetizer,
  addEntree,
  addDessert,
  addDrink,
  updateAppetizer,
  updateEntree,
  updateDessert,
  updateDrink,
  deleteAppetizer,
  deleteEntree,
  deleteDessert,
  deleteDrink
} = menuAPI;

export default function MenuManager() {
  const [appetizers, setAppetizers] = useState([]);
  const [entrees, setEntrees] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState({
    wine: [],
    cocktail: [],
    coffee: [],
    nonAlcoholic: [],
  });
  const [dataVersion, setDataVersion] = useState(0);

  useEffect(() => {
    // Fetch the initial data for each category when the component mounts
    fetchAppetizer().then(setAppetizers);
    fetchEntree().then(setEntrees);
    fetchDessert().then(setDesserts);
    fetchAllWine().then((data) => {
      setDrinks((prevDrinks) => {
        return {
          ...prevDrinks,
          wine: data,
        };
      });
    });
    fetchAllCocktail().then((data) => {
      setDrinks((prevDrinks) => {
        return {
          ...prevDrinks,
          cocktail: data,
        };
      });
    });
    fetchAllCoffee().then((data) => {
      setDrinks((prevDrinks) => {
        return {
          ...prevDrinks,
          coffee: data,
        };
      });
    });
    fetchAllNonAlcoholic().then((data) => {
      setDrinks((prevDrinks) => {
        return {
          ...prevDrinks,
          nonAlcoholic: data,
        };
      });
    });
  }, [dataVersion]);

  function MenuItem({ item, category }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedItem, setEditedItem] = useState(item);

    const handleUpdate = () => {
      switch (category) {
        case "appetizer":
          updateAppetizer(editedItem);
          break;
        case "entree":
          updateEntree(editedItem);
          break;
        case "dessert":
          updateDessert(editedItem);
          break;
        case "wine":
        case "cocktail":
        case "coffee":
        case "nonAlcoholic":
          updateDrink(editedItem, category);
          break;
        default:
          break;
      }
      setIsEditing(false);
      setDataVersion(dataVersion + 1);
    };

    const handleDelete = () => {
      switch (category) {
        case "appetizer":
          deleteAppetizer(item.id);
          break;
        case "entree":
          deleteEntree(item.id);
          break;
        case "dessert":
          deleteDessert(item.id);
          break;
        case "wine":
        case "cocktail":
        case "coffee":
        case "nonAlcoholic":
          deleteDrink(item.id, category);
          break;
        default:
          break;
      }
      setDataVersion(dataVersion + 1);
    };

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
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      );
    }

    return (
      <div className="menu-manager-item-card">
        <img className="menu-manager-item-img" src={item.imgURL}></img>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button
          className="menu-manager-edit-btn"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button className="menu-manager-delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    );
  }

  const handleAddItem = (category, newItem) => {
    switch (category) {
      case "appetizer":
        addAppetizer(newItem).then((data) =>
          setAppetizers((prev) => [...prev, data])
        );
        break;
      case "entree":
        addEntree(newItem).then((data) =>
          setEntrees((prev) => [...prev, data])
        );
        break;
      case "dessert":
        addDessert(newItem).then((data) =>
          setDesserts((prev) => [...prev, data])
        );
        break;
      case "wine":
      case "cocktail":
      case "coffee":
      case "nonAlcoholic":
        addDrink(newItem, category).then((data) =>
          setDrinks((prevDrinks) => ({
            ...prevDrinks,
            [category]: [...prevDrinks[category], data],
          }))
        );
        break;
      default:
        break;
    }
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
          <button className="menu-manager-add-btn" type="submit">Add</button>
        </form>
      </div>
      <h3>Appetizers</h3>
      <div className="menu-manager-card-container">
        {appetizers.map((item) => (
          <MenuItem key={item.id} item={item} category="appetizer" />
        ))}
      </div>
      <h3>Entrees</h3>
      <div className="menu-manager-card-container">
        {entrees.map((item) => (
          <MenuItem key={item.id} item={item} category="entree" />
        ))}
      </div>
      <h3>Desserts</h3>
      <div className="menu-manager-card-container">
        {desserts.map((item) => (
          <MenuItem key={item.id} item={item} category="dessert" />
        ))}
      </div>
      <h3>Drinks</h3>
      <div className="menu-manager-card-container">
        {Object.entries(drinks).map(([category, items]) =>
          items.map((item) => (
            <MenuItem key={item.id} item={item} category={category} />
          ))
        )}
      </div>
    </div>
  );
}