const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/auth");
const validate = require("../middleware/validate");
const userValidation = require("../models/validation/userValidation");
const auth = require("../middleware/auth");

router.post(
  "/signup",
  validate(userValidation.validateSignup),
  authCtrl.signup
);
router.post(
  "/signin",
  validate(userValidation.validateSignin),
  authCtrl.signin
);
router.get("/profile", auth, authCtrl.profile);

module.exports = router;
