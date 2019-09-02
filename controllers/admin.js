const { User } = require("../models/user");
const bcrypt = require("bcrypt");

adminLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.isAdmin)
    return res.status(404).send("Invalid Email Or Password");
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json("Invalid Email Or Password");
  const token = user.generateAuthToken();
  res.send(token);
};

module.exports = {
  adminLogin
};
