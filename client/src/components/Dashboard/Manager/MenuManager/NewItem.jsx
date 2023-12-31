import { useState } from "react";

export default function NewItem({
    setIsAdding
}) {

    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleInputChange = (event) => {
      switch (event.target.name) {
        case "category":
          setCategory(event.target.value);
          break;
        case "name":
          setName(event.target.value);
          break;
        case "description":
          setDescription(event.target.value);
          break;
        case "price":
          setPrice(event.target.value);
          break;
        default:
          break;
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      handleAddItem(category, { name, description, price });
    };

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddItem(e.target.category.value, {
            name: e.target.name.value,
            description: e.target.description.value,
            price: e.target.price.value,
          });
        }}
        className="new-item"
      >
        <label className="new-item-categories">
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
        <input type="file" name="image" />
        <button className="menu-manager-add-btn" type="submit">
          Add
        </button>
        <button
          className="menu-manager-cancel-btn"
          onClick={() => setIsAdding(false)}
        >
          Cancel
        </button>
      </form>
    );
}