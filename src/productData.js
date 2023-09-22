const { Product } = require("./models/Product");

const products = [
  new Product("Laptop", 50000, true),
  new Product("Headphones", 3000, true),
  new Product("Keyboard", 1500, false),
];

module.exports = { products };
