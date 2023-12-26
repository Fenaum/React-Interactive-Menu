import { useState, useEffect } from "react";
import menuAPI from "../utils/menuService";
const { updateAppetizer, updateEntree, updateDessert, updateDrink } = menuAPI;

export default function UpdateMenuData(id, data, category, dataVersion) {
  function updateMenu() {
    switch (category) {
      case "appetizers":
        // update appetizer
        updateAppetizer(id, data)
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
        break;
      case "entrees":
        // update entree
        updateEntree(id, data)
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
        break;
      case "desserts":
        // update dessert
        updateDessert(id, data)
          .then((response) => console.log(response))
          .catch((error) => console.error(error));
        break;
      case "drinks":
        // update drink
        // add similar code here when you implement updateDrink
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
