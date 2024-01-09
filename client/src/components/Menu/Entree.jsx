import { useEffect, useRef, useState } from "react";
import useFetchMenuData from "../../hooks/useFetchMenuData";

export default function Entree() {
  const { entrees } = useFetchMenuData();

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

  const EntreeItemsList = entrees.map((entreeItem) => {
    const imageUrl =
      entreeItem.imgURL && entreeItem.imgURL.startsWith("http")
        ? entreeItem.imgURL
        : `http://localhost:5000${entreeItem.imgURL || ""}`;

    return (
      <div className="item-card" key={entreeItem._id}>
        <img className="item-img" src={imageUrl} alt="item-img" />
        <h2>{entreeItem.name}</h2>
        <p className="price">Price: ${entreeItem.price}</p>

        <p>{entreeItem.description}</p>
        {/* Add additional data rendering here */}
      </div>
    );
  });

  return (
    <div className="card-container" id="card-container" ref={containerRef}>
      {EntreeItemsList}
    </div>
  );
}
