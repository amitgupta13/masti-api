const express = require("express");
const router = express.Router();
const { getProducts } = require("../controllers/products");
const auth = require("../middleware/auth");

router.get("/", auth, getProducts);

module.exports = router;
