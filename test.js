const faker = require("faker");
const mongoose = require("mongoose");
const { Product } = require("./models/products");

mongoose.connect("mongodb://localhost:27017/masti", { useNewUrlParser: true });

const array = Array(100).fill(1);

store = async () => {
  let product;
  for (let arr of array) {
    product = new Product({
      name: faker.name.findName(),
      description: faker.hacker.phrase(),
      price: faker.commerce.price()
    });

    product.image = `https://robohash.org/${product._id}`;

    await product.save();
  }
};

store();
