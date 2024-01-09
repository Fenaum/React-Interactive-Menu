import menuAPI from "../utils/menuService";
const { updateAppetizer, updateEntree, updateDessert, updateDrink } = menuAPI;

export default function UpdateMenuData(id, data, image, category) {
  async function updateMenu() {
    switch (category) {
      case "appetizers":
        // update appetizer
        return updateAppetizer(id, data, image)
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      case "entrees":
        // update entree
        console.log(id, data);
        return updateEntree(id, data, image)
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      case "desserts":
        // update dessert
        return updateDessert(id, data, image)
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      case "drinks":
        // update drink
        // add similar code here when you imp, imagelement updateDrink
        break;
      case undefined:
        console.log("no category selected");
        break;
      default:
        console.error(`Unknown category: ${category.type}`);
    }
  }

  return updateMenu;
}
