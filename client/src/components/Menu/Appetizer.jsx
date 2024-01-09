import { useEffect, useRef, useState } from "react";
import useFetchMenuData from '../../hooks/useFetchMenuData'

export default function Appetizer() {
  const { appetizers } = useFetchMenuData();
  
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

  const appetizerItemsList = appetizers.map((appetizerItem) => {
    const imageUrl =
      appetizerItem.imgURL && appetizerItem.imgURL.startsWith("http")
        ? appetizerItem.imgURL
        : `http://localhost:5000${appetizerItem.imgURL || ""}`;
    
    return (
      <div className="item-card" key={appetizerItem._id}>
        <img className="item-img" src={imageUrl} alt="item-img" />
        <h2>{appetizerItem.name}</h2>
        <p className="price">Price: ${appetizerItem.price}</p>

        <p>{appetizerItem.description}</p>
        {/* Add additional data rendering here */}
      </div>
    );
  });

  return (
    <div className="card-container" id="card-container" ref={containerRef}>
      {appetizerItemsList}
    </div>
  );
}
