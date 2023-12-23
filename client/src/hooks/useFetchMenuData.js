import { useState, useEffect } from "react";
import menuAPI from "../utils/menuService";
const {
  fetchAppetizer,
  fetchEntree,
  fetchDessert,
  fetchAllWine,
  fetchAllCocktail,
  fetchAllCoffee,
  fetchAllNonAlcoholic,
} = menuAPI;

export default function useFetchMenuData(dataVersion) {
  const [appetizers, setAppetizers] = useState([]);
  const [entrees, setEntrees] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState({
    wine: [],
    cocktail: [],
    coffee: [],
    nonAlcoholic: [],
  });

  useEffect(() => {
    fetchAppetizer().then(setAppetizers);
    fetchEntree().then(setEntrees);
    fetchDessert().then(setDesserts);
    fetchAllWine().then((data) => {
      setDrinks((prevDrinks) => ({ ...prevDrinks, wine: data }));
    });
    fetchAllCocktail().then((data) => {
      setDrinks((prevDrinks) => ({ ...prevDrinks, cocktail: data }));
    });
    fetchAllCoffee().then((data) => {
      setDrinks((prevDrinks) => ({ ...prevDrinks, coffee: data }));
    });
    fetchAllNonAlcoholic().then((data) => {
      setDrinks((prevDrinks) => ({ ...prevDrinks, nonAlcoholic: data }));
    });
  }, [dataVersion]);

  return {
    appetizers,
    entrees,
    desserts,
    drinks,
  };
}
