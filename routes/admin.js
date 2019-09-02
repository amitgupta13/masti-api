const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const { validateSignin } = require("../models/validation/userValidation");
const { adminLogin } = require("../controllers/admin");

router.post("/signin", validate(validateSignin), adminLogin);

module.exports = router;
