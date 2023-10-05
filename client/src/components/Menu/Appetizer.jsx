import MenuService from "../../utils/menuService";
import { useEffect, useRef } from "react";

export default function Appetizer() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleWheel = function (e) {
        if (e.deltaY > 0) container.scrollLeft += 500;
        else container.scrollLeft -= 500;
        e.preventDefault();
      };
      container.addEventListener("wheel", handleWheel);
      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  // Use the MenuService singleton instance to access its methods
  const menuItems = MenuService.getMenuItems().appetizer;

  const menuItemsList = menuItems.map((menuItem) => (
    <div className="item-card" key={menuItem.id}>
      <h2>{menuItem.name}</h2>
      <p className="price">Price: ${menuItem.price}</p>
      <img className="item-img" src={menuItem.imgURL} alt="item-img" />

      <p>{menuItem.description}</p>
      {/* Add additional data rendering here */}
    </div>
  ));

  return (
    <div className="card-container" id="card-container" ref={containerRef}>
      {menuItemsList}
    </div>
  );
}
