const express = require("express");
const router = express.Router();
const {
  getAllDessert,
  getOneDessert,
  addOneDessert,
  updateDessert,
  deleteDessert,
} = require("../../controllers/dessert-controller");

router.route("/").get(getAllDessert).post(addOneDessert);
router.route("/:id").get(getOneDessert).put(updateDessert).delete(deleteDessert);

module.exports = router;
