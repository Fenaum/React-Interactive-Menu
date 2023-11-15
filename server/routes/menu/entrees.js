const express = require("express");
const router = express.Router();
const {
    getAllEntree,
    getOneEntree,
    addOneEntree,
    updateEntree,
    deleteEntree
} = require('../../controllers/entreeController')

router.route('/').get(getAllEntree).post(addOneEntree);
router.route('/:id').get(getOneEntree).put(updateEntree).delete(deleteEntree);

module.exports = router;