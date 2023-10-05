var API_KEY = "5aqXtE4if0HTIPjpxSyIlYVP3_QXuIDc_HCtpEgObkQ";
import axios from "axios"; // You might need to install axios using npm install axios
import menuDb from "../db/menu.json";

class MenuService {
  // async getMenuItems() {
  //   const menuItems = menuDb.menu.entree;

  //   // Fetch image for each menu item
  //   for (let item of menuItems) {
  //     const response = await axios.get(
  //       `https://api.unsplash.com/photos/random?query=${item.name}&client_id=${API_KEY}`
  //     );
  //     item.imgURL = response.data.urls.small;
  //   }

  //   return menuItems;
  // }
  getMenuItems() {
    return menuDb.menu
  }
  // Other data-related functions can be added here
}

export default new MenuService();
