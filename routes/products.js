const express = require("express");
const router = express.Router();
const { getProducts, deleteProduct } = require("../controllers/products");
const auth = require("../middleware/auth");

router.get("/", auth, getProducts);
router.delete("/:id", auth, deleteProduct);

module.exports = router;
