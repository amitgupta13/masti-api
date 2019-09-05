const { Product } = require("../models/products");

const getProducts = async (req, res) => {
  const { search, sort, order, skip, limit } = req.query;
  const soryBy = sort ? sort : "name";
  const products = await Product.find({ name: new RegExp(search) })
    .sort({
      [soryBy]: order ? +order : 1
    })
    .skip(skip ? +skip : 0)
    .limit(limit ? +limit : 10);

  res.status(200).json(products);
};

module.exports = { getProducts };
