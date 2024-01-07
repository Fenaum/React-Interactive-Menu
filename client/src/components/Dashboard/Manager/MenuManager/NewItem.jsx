export default function NewItem({
    setSelectedFile,
    setNewItem,
    newItem,
    handleAddItem
}) {

    function handleFileChange(event) {
      setSelectedFile(event.target.files[0]);
    };

    function handleChange(event) {
      if (event.target.name === "spicy") {
        setNewItem({ ...newItem, spicy: event.target.value === "yes" });
      } else {
        setNewItem({ ...newItem, [event.target.name]: event.target.value });
      }
    }
    
    function handleSubmit(e) {
      e.preventDefault();
      handleAddItem();
      console.log(newItem.category)
    }
 

    return (
      <form onSubmit={handleSubmit} className="new-item">
        <label className="new-item-categories">
          Category:
          <select name="category" onChange={handleChange}>
            <option value="">Pick a Category</option>
            <option value="appetizers">Appetizer</option>
            <option value="entrees">Entree</option>
            <option value="desserts">Dessert</option>
            <option value="wine">Wine</option>
            <option value="cocktail">Cocktail</option>
            <option value="coffee">Coffee</option>
            <option value="nonAlcoholic">Non-Alcoholic</option>
          </select>
        </label>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" onChange={handleChange} />
        </label>
        <label>
          Spicy:
          <input
            type="radio"
            name="spicy"
            value="yes"
            onChange={handleChange}
          />
          Yes
          <input type="radio" name="spicy" value="no" onChange={handleChange} />
          No
        </label>
        <input type="file" name="image" onChange={handleFileChange} />
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