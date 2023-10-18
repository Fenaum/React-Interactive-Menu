const express = require("express");
const router = express.Router();
const {
  getAllAppetizer,
  getOneAppetizer,
  addOneAppetizer,
  updateAppetizer,
  deleteAppetizer
} = require("../../controllers/appetizer-controller");

router.route("/").get(getAllAppetizer).post(addOneAppetizer);
router.route("/:id").get(getOneAppetizer).put(updateAppetizer).delete(deleteAppetizer);

module.exports = router;
