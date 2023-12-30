import menuAPI from "../utils/menuService";
const { deleteAppetizer, deleteDessert, deleteEntree, deleteDrink } = menuAPI;

export default function deleteMenuData(id, category) {
  async function deleteItem() {
    switch (category) {
      case "appetizers":
        // delete appetizer
        return deleteAppetizer(id)
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      case "entrees":
        // delete entree
        return deleteEntree(id)
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      case "desserts":
        // delete dessert
        return deleteDessert(id)
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      case "drinks":
        // delete drink
        // add similar code here when you implement deleteDrink
        break;
      case undefined:
        console.log("no category selected");
        break;
      default:
        console.error(`Unknown category: ${category.type}`);
    }
  }

  return deleteItem;
}
