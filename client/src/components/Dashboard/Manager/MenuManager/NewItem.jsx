export default function NewItem({
    setSelectedFile,
    setNewItem,
    newItem,
    handleAddItem,
    setIsAdding
}) {

    function handleFileChange(event) {
      setSelectedFile(event.target.files[0]);
    };

    function handleChange(event) {
      setNewItem({ ...newItem, [event.target.name]: event.target.value });
      console.log(newItem)
      console.log(typeof newItem.spicy);
    }
    
    function handleSubmit(e) {
      e.preventDefault();
      handleAddItem();
      console.log(newItem.category)
      setIsAdding(false)
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
            <select name="spicy" onChange={handleChange}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
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