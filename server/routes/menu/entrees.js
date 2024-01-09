const express = require("express");
const router = express.Router();
const upload = require('../../utils/multerSetup')
const {
    getAllEntree,
    getOneEntree,
    addOneEntree,
    updateEntree,
    deleteEntree
} = require('../../controllers/entreeController')

router.route('/').get(getAllEntree).post(upload.single('image'), addOneEntree);
router.route('/:id').get(getOneEntree).put(upload.single('image'), updateEntree).delete(deleteEntree);

module.exports = router;