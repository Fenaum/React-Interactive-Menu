import { useEffect, useRef, useState } from "react";
import useFetchMenuData from "../../hooks/useFetchMenuData";

export default function Dessert() {
  const { desserts } = useFetchMenuData();

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

  const dessertItemsList = desserts.map((dessertItem) => {
    const imageUrl =
      dessertItem.imgURL && dessertItem.imgURL.startsWith("http")
        ? dessertItem.imgURL
        : `http://localhost:5000${dessertItem.imgURL || ""}`;

    return (
      <div className="item-card" key={dessertItem._id}>
        <img className="item-img" src={imageUrl} alt="item-img" />
        <h2>{dessertItem.name}</h2>
        <p className="price">Price: ${dessertItem.price}</p>

        <p>{dessertItem.description}</p>
        {/* Add additional data rendering here */}
      </div>
    );
  });

  return (
    <div className="card-container" id="card-container" ref={containerRef}>
      {dessertItemsList}
    </div>
  );
}
