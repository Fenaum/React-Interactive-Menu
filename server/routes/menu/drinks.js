const express = require("express");
const router = express.Router();
const {
  getAllWine,
  getAllCocktail,
  getAllCoffee,
  getAllNonAlcoholic,
  addItemToCategory,
  updateItemInCategory,
  deleteItemInCategory,
} = require("../../controllers/drink-controlller");

// Define your routes for each category
router.get("/wine", getAllWine);
router.get("/cocktail", getAllCocktail);
router.get("/coffee", getAllCoffee);
router.get("/nonAlcoholic", getAllNonAlcoholic);

// Add an item to a specific category
router.post("/:category", addItemToCategory);

// Update an item in a specific category
router.put("/:category/:id", updateItemInCategory);

// Delete an item from a specific category
router.delete("/:category/:id", deleteItemInCategory);

module.exports = router;
