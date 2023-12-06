const Drink = require("../models/drinkModel");

const drinkController = {
  // Get all wine items
  async getAllWine(req, res) {
    try {
      const wineItems = await Drink.find({}, "wine");
      res.status(200).json(wineItems[0].wine);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err.message });
    }
  },
  // Get all cocktail items
  async getAllCocktail(req, res) {
    try {
      const cocktailItems = await Drink.find({}, "cocktail");
      res.status(200).json(cocktailItems[0].cocktail);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err.message });
    }
  },
  // Get all coffee items
  async getAllCoffee(req, res) {
    try {
      const coffeeItems = await Drink.find({}, "coffee");
      res.status(200).json(coffeeItems[0].coffee);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err.message });
    }
  },
  // Get all non-alcoholic items
  async getAllNonAlcoholic(req, res) {
    try {
      const nonAlcoholicItems = await Drink.find({}, "nonAlcoholic");
      res.status(200).json(nonAlcoholicItems[0].nonAlcoholic);
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err.message });
    }
  },
  // Add a new item to a specific category
  async addItemToCategory(req, res) {
    const { category } = req.params; // The category parameter should specify 'wine,' 'cocktail,' etc.
    const itemData = req.body;

    try {
      if (
        category === "wine" ||
        category === "cocktail" ||
        category === "coffee" ||
        category === "nonAlcoholic"
      ) {
        // Ensure you're adding to the correct category
        let drinkDoc = await Drink.findOne();
        if (!drinkDoc) {
          drinkDoc = new Drink();
        }
        drinkDoc[category].push(itemData);
        const savedDrinkDoc = await drinkDoc.save();
        res.status(200).json(savedDrinkDoc);
      } else {
        res.status(400).json({ message: "Invalid category" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err.message });
    }
  },
  // Update an item in a specific category
  async updateItemInCategory(req, res) {
    const { category, id } = req.params; // The category parameter should specify 'wine,' 'cocktail,' etc.
    const itemData = req.body;

    try {
      if (
        category === "wine" ||
        category === "cocktail" ||
        category === "coffee" ||
        category === "nonAlcoholic"
      ) {
        // Ensure you're updating in the correct category
        let drinkDoc = await Drink.findOne();
        if (!drinkDoc) {
          res.status(404).json({ message: "Item does not exist" });
        } else {
          const itemIndex = drinkDoc[category].findIndex(
            (item) => item._id.toString() === id
          );
          if (itemIndex === -1) {
            res.status(404).json({ message: "Item does not exist" });
          } else {
            drinkDoc[category][itemIndex] = itemData;
            const savedDrinkDoc = await drinkDoc.save();
            res
              .status(202)
              .json({ message: "Item has been updated", savedDrinkDoc });
          }
        }
      } else {
        res.status(400).json({ message: "Invalid category" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err.message });
    }
  },
  // Delete an item from a specific category
  async deleteItemInCategory(req, res) {
    const { category, id } = req.params; // The category parameter should specify 'wine,' 'cocktail,' etc.

    try {
      if (
        category === "wine" ||
        category === "cocktail" ||
        category === "coffee" ||
        category === "nonAlcoholic"
      ) {
        // Ensure you're deleting from the correct category
        let drinkDoc = await Drink.findOne();
        if (!drinkDoc) {
          res.status(404).json({ message: "Item does not exist" });
        } else {
          const itemIndex = drinkDoc[category].findIndex(
            (item) => item._id.toString() === id
          );
          if (itemIndex === -1) {
            res.status(404).json({ message: "Item does not exist" });
          } else {
            drinkDoc[category].splice(itemIndex, 1);
            const savedDrinkDoc = await drinkDoc.save();
            res
              .status(200)
              .json({ message: "Item has been removed", savedDrinkDoc });
          }
        }
      } else {
        res.status(400).json({ message: "Invalid category" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err.message });
    }
  },
};

module.exports = drinkController;