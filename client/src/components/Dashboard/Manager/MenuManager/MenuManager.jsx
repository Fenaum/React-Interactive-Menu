import { useState, useEffect } from "react"
import menuAPI from "../../../../utils/menuService";
const { 
  fetchAppetizer,
  fetchEntree,
  fetchDessert,
  fetchAllWine,
  fetchAllCocktail,
  fetchAllCoffee,
  fetchAllNonAlcoholic,
  addAppetizer,
  addEntree,
  addDessert,
  addDrink,
  updateAppetizer,
  updateEntree,
  updateDessert,
  updateDrink,
  deleteAppetizer,
  deleteEntree,
  deleteDessert,
  deleteDrink
} = menuAPI;

export default function MenuManager() {
  const [appetizers, setAppetizers] = useState([]);
  const [entrees, setEntrees] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState({
    wine: [],
    cocktail: [],
    coffee: [],
    nonAlcoholic: []
  });

  useEffect(() => {
    // Fetch the initial data for each category when the component mounts
    fetchAppetizer().then(setAppetizers);
    fetchEntree().then(setEntrees);
    fetchDessert().then(setDesserts);
    fetchAllWine().then(data => {
      setDrinks(prevDrinks => {
        return {
          ...prevDrinks,
          wine: data,
        };
      })
    });
    fetchAllCocktail().then(data => {
      setDrinks(prevDrinks => {
        return {
          ...prevDrinks,
          cocktail: data,
        };
      })
    });
    fetchAllCoffee().then(data => {
      setDrinks(prevDrinks => {
        return {
          ...prevDrinks,
          coffee: data,
        };
      })
    });
    fetchAllNonAlcoholic().then(data => {
      setDrinks(prevDrinks => {
        return {
          ...prevDrinks,
          nonAlcoholic: data,
        };
      })
    });
  }, []);


  return (
    <div className="Menu-manager-container"> 
      <h2>menu manager</h2>
    </div>
  );
}
