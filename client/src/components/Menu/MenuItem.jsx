import MenuService from "../../utils/menuService"

export function MenuItem() {
  // Use the MenuService singleton instance to access its methods
    const menuItems = MenuService.getMenuItems();

    const menuItemsList = menuItems.map((menuItem) => (
        <div className="item-card" key={menuItem.id}>
            <h2>{menuItem.name}</h2>
            <p className="price">Price: ${menuItem.price}</p>
            <img className="item-img" src="" alt="item-img" />

            <p>{menuItem.description}</p>
            {/* Add additional data rendering here */}
        </div>
        ));

    return  (
        <div className="card-container">
            {menuItemsList}
        </div>
    )
}
