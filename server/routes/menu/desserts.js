const express = require("express");
const router = express.Router();
const upload = require('../../utils/multerSetup')
const {
  getAllDessert,
  getOneDessert,
  addOneDessert,
  updateDessert,
  deleteDessert,
} = require("../../controllers/dessertController");

router.route("/").get(getAllDessert).post(upload.single('image'),addOneDessert);
router.route("/:id").get(getOneDessert).put(upload.single('imgage'),updateDessert).delete(deleteDessert);

module.exports = router;
