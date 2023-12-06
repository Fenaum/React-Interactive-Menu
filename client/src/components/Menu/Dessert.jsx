import { useEffect, useRef, useState } from "react";
import menuAPI from "../../utils/menuService";
const fetchDessert = menuAPI.fetchDessert;

export default function Dessert() {
  const containerRef = useRef(null);
  const [dessertData, setDessertData] = useState([]);

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

  //fetching data and store in in state
  useEffect(() => {
    fetchDessert()
      .then((data) => setDessertData(data))
      .catch((err) => console.error(err));
  }, []);

  const dessertItemsList = dessertData.map((dessertItem) => (
    <div className="item-card" key={dessertItem._id}>
      <img className="item-img" src={dessertItem.imgURL} alt="item-img" />
      <h2>{dessertItem.name}</h2>
      <p className="price">Price: ${dessertItem.price}</p>

      <p>{dessertItem.description}</p>
      {/* Add additional data rendering here */}
    </div>
  ));

  return (
    <div className="card-container" id="card-container" ref={containerRef}>
      {dessertItemsList}
    </div>
  );
}
