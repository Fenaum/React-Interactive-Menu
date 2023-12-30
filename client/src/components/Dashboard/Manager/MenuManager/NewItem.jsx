export default function NewItem({
    setIsAdding
}) {
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