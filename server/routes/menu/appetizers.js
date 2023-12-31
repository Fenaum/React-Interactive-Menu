const express = require("express");
const router = express.Router();
const upload = require('../../utils/multerSetup')
const {
  getAllAppetizer,
  getOneAppetizer,
  addOneAppetizer,
  updateAppetizer,
  deleteAppetizer
} = require("../../controllers/appetizerController");

router.route("/").get(getAllAppetizer).post(upload.single('image'), addOneAppetizer);
router.route("/:id").get(getOneAppetizer).put(upload.single('image'), updateAppetizer).delete(deleteAppetizer);

module.exports = router;
