import { useEffect, useRef, useState } from "react";
import menuAPI from "../../utils/menuService";
const fetchAppetizer = menuAPI.fetchAppetizer;

export default function Appetizer() {
  const containerRef = useRef(null);
  const [appetizerData, setAppetizerData] = useState([]);

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
    fetchAppetizer()
      .then((data) => setAppetizerData(data))
      .catch((err) => console.error(err));
  }, []);

  const appetizerItemsList = appetizerData.map((appetizerItem) => (
    <div className="item-card" key={appetizerItem._id}>
      <img className="item-img" src={appetizerItem.imgURL} alt="item-img" />
      <h2>{appetizerItem.name}</h2>
      <p className="price">Price: ${appetizerItem.price}</p>

      <p>{appetizerItem.description}</p>
      {/* Add additional data rendering here */}
    </div>
  ));

  return (
    <div className="card-container" id="card-container" ref={containerRef}>
      {appetizerItemsList}
    </div>
  );
}
