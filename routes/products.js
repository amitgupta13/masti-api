const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const { validateProduct } = require("../models/validation/productValidation");
const {
  getProducts,
  deleteProduct,
  addProduct,
  getProduct,
  editProduct
} = require("../controllers/products");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.get("/", auth, getProducts);
router.delete("/:id", [auth, admin], deleteProduct);
router.get("/:id", [auth, admin], getProduct);
router.put("/:id", [auth, admin], validate(validateProduct), editProduct);
router.post("/", [auth, admin], validate(validateProduct), addProduct);

module.exports = router;
