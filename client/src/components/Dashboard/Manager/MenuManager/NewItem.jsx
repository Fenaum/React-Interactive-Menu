export default function NewItem({
    selectedFile,
    setNewItem,
    handleAddItem
}) {

    function handleFileChange(event) {
      setSelectedFile(event.target.files[0]);
    };

    function handleChange(event) {
      setNewItem();
    }

    function handleSubmit(e) {
      e.preventDefault();
      const category = e.target.category.value;

      switch (category) {
        case "appetizer":
          // Handle appetizer category
          break;
        case "entree":
          // Handle entree category
          break;
        case "dessert":
          // Handle dessert category
          break;
        case "wine":
          // Handle wine category
          break;
        case "cocktail":
          // Handle cocktail category
          break;
        case "coffee":
          // Handle coffee category
          break;
        case "nonAlcoholic":
          // Handle non-alcoholic category
          break;
        default:
          console.error(`Unknown category: ${category}`);
      }
    }
 

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
        <input type="file" name="image" onChange={handleFileChange}/>
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