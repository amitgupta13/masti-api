const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  image: {
    type: String
  }
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, "test");
  return token;
};

const User = mongoose.model("User", userSchema);

exports.User = User;
