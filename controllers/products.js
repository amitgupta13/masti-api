const { Product } = require("../models/products");

const getProducts = async (req, res) => {
  const { search, sort, order, skip, limit } = req.query;
  const soryBy = sort ? sort : "name";
  const products = await Product.find({
    $or: [
      { name: new RegExp(search, "i") },
      { description: new RegExp(search, "i") }
    ]
  })
    .sort({
      [soryBy]: order ? +order : 1
    })
    .skip(skip ? +skip : 0)
    .limit(limit ? +limit : 10);

  return res.status(200).json(products);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");

  if (!checkForHexRegExp.test(id))
    return res.status(400).send("Invalid mongo Id");

  const del = await Product.deleteOne({ _id: id });
  if (del.deletedCount < 1)
    return res.status(400).send(`Product with id ${id} does not exists`);
  return res.status(200).send(`Product with id ${id} deleted`);
};

module.exports = { getProducts, deleteProduct };
