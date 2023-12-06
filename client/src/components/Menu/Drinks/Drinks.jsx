import { useEffect, useRef, useState } from "react";
import menuAPI from "../../../utils/menuService";
const fetchAllWine = menuAPI.fetchAllWine;
const fetchAllCocktail = menuAPI.fetchAllCocktail;
const fetchAllCoffee = menuAPI.fetchAllCoffee;
const fetchAllNonAlcoholic = menuAPI.fetchAllNonAlcoholic;

export default function Dessert() {
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

  //fetching data and store in in state
  useEffect(() => {
    fetchAllWine()
      .then((data) =>
        setDrinksData((prevDrinksData) => {
          return {
            ...prevDrinksData,
            wineData: data,
          };
        })
      )
      .catch((err) => console.error(err));
    fetchAllCocktail()
      .then((data) =>
        setDrinksData((prevDrinksData) => {
          return {
            ...prevDrinksData,
            cocktailData: data,
          };
        })
      )
      .catch((err) => console.error(err));
    fetchAllCoffee()
      .then((data) =>
        setDrinksData((prevDrinksData) => {
          return {
            ...prevDrinksData,
            coffeeData: data,
          };
        })
      )
      .catch((err) => console.error(err));
    fetchAllNonAlcoholic()
      .then((data) =>
        setDrinksData((prevDrinksData) => {
          return {
            ...prevDrinksData,
            nonAlcoholicData: data,
          };
        })
      )
      .catch((err) => console.error(err));
  }, []);

  const wineItemsList = drinksData.wineData.map((wineItem) => (
    <div className="item-card" key={wineItem._id}>
      <img className="item-img" src={wineItem.imgURL} alt="item-img" />
      <h2>{wineItem.name}</h2>
      <p className="price">Price: ${wineItem.price}</p>

      <p>{wineItem.description}</p>
      {/* Add additional data rendering here */}
    </div>
  ));

  const cocktailItemsList = drinksData.cocktailData.map((cocktailItem) => (
    <div className="item-card" key={cocktailItem._id}>
      <img className="item-img" src={cocktailItem.imgURL} alt="item-img" />
      <h2>{cocktailItem.name}</h2>
      <p className="price">Price: ${cocktailItem.price}</p>

      <p>{cocktailItem.description}</p>
      {/* Add additional data rendering here */}
    </div>
  ));

  const coffeeItemsList = drinksData.coffeeData.map((coffeeItem) => (
    <div className="item-card" key={coffeeItem._id}>
      <img className="item-img" src={coffeeItem.imgURL} alt="item-img" />
      <h2>{coffeeItem.name}</h2>
      <p className="price">Price: ${coffeeItem.price}</p>

      <p>{coffeeItem.description}</p>
      {/* Add additional data rendering here */}
    </div>
  ));

  const nonAlcoholicitemsList = drinksData.nonAlcoholicData.map(
    (nonAlcoholicItem) => (
      <div className="item-card" key={nonAlcoholicItem._id}>
        <img
          className="item-img"
          src={nonAlcoholicItem.imgURL}
          alt="item-img"
        />
        <h2>{nonAlcoholicItem.name}</h2>
        <p className="price">Price: ${nonAlcoholicItem.price}</p>

        <p>{nonAlcoholicItem.description}</p>
        {/* Add additional data rendering here */}
      </div>
    )
  );

  return (
    <div className="card-container" id="card-container" ref={containerRef}>
      <div className="drink=container">
        {wineItemsList}
        {cocktailItemsList}
        {coffeeItemsList}
        {nonAlcoholicitemsList}
      </div>
    </div>
  );
}
