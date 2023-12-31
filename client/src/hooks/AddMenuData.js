import menuAPI from "../utils/menuService";
const { addAppetizer, addEntree, addDessert, addDrink } = menuAPI;

export default function addMenuData(data, image, category) {
  async function addItem() {
    switch (category) {
      case "appetizers":
        // update appetizer
        return addAppetizer(data, image)
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      case "entrees":
        // update entree
        return addEntree(data, image)
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
      case "desserts":
        // update dessert
        return addDessert(data, image)
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

  return addItem;
}
