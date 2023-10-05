
import menuDb from "../db/menu.json";

class MenuService {
  getMenuItems() {
    return menuDb.menu;
  }

  // Other data-related functions can be added here
}

export default new MenuService();
