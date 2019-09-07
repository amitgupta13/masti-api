const express = require("express");
const router = express.Router();
const { getProducts, deleteProduct } = require("../controllers/products");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.get("/", auth, getProducts);
router.delete("/:id", [auth, admin], deleteProduct);

module.exports = router;
