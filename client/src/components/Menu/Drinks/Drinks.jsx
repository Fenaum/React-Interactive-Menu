import { useEffect, useRef, useState } from "react";
import menuAPI from "../../../utils/menuService";

const { fetchAllWine, fetchAllCocktail, fetchAllCoffee, fetchAllNonAlcoholic } = menuAPI;

export default function Drinks({ addToCart }) {
  const containerRef = useRef(null);
  const [drinksData, setDrinksData] = useState({
    wineData: [],
    cocktailData: [],
    coffeeData: [],
    nonAlcoholicData: [],
  });

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

  useEffect(() => {
    fetchAllWine()
      .then((data) => setDrinksData((prev) => ({ ...prev, wineData: data })))
      .catch((err) => console.error(err));
    fetchAllCocktail()
      .then((data) => setDrinksData((prev) => ({ ...prev, cocktailData: data })))
      .catch((err) => console.error(err));
    fetchAllCoffee()
      .then((data) => setDrinksData((prev) => ({ ...prev, coffeeData: data })))
      .catch((err) => console.error(err));
    fetchAllNonAlcoholic()
      .then((data) => setDrinksData((prev) => ({ ...prev, nonAlcoholicData: data })))
      .catch((err) => console.error(err));
  }, []);

  const allDrinks = [
    ...drinksData.wineData,
    ...drinksData.cocktailData,
    ...drinksData.coffeeData,
    ...drinksData.nonAlcoholicData,
  ];

  return (
    <div className="card-container" id="card-container" ref={containerRef}>
      {allDrinks.map((drink) => (
        <div className="item-card" key={drink._id}>
          <img className="item-img" src={drink.imgURL || ""} alt="item-img" />
          <h2>{drink.name}</h2>
          <p className="price">Price: ${drink.price}</p>
          <p>{drink.description}</p>
          <button className="add-to-cart-btn" onClick={() => addToCart(drink)}>+ Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
