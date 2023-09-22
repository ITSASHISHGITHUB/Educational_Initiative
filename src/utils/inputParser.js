const { Cart } = require("../models/Cart");
const {
  BOGODiscountStrategy,
  PercentageDiscountStrategy,
} = require("../models/DiscountStrategies");
const { products } = require("../productData");
const { formatter } = require("./formatter");

const rl = require("readline");
const { logMessage } = require("./logger");

const DISCOUNT_PERCENT = 5;
const cart = new Cart();
const percentageDiscountStrategy = new PercentageDiscountStrategy(
  DISCOUNT_PERCENT
);
const bogoDiscountStrategy = new BOGODiscountStrategy();

function displayCart() {
  logMessage("Cart Items:");
  for (const item of cart.items) {
    console.log(`${item.product.name} (${item.quantity})`);
  }
  const totalBill = cart.calculateTotalBill(percentageDiscountStrategy);
  console.log(
    `Total Bill: Your total bill is ${formatter.format(
      totalBill.toFixed(2)
    )} with ${DISCOUNT_PERCENT}% discount.`
  );
}

function handleUserInput(input) {
  const [command, ...args] = input.split(",").map((str) => str.trim());
  switch (command.toLowerCase()) {
    case "add to cart":
      if (args.length !== 2) {
        console.log(
          "Invalid input. Please use the format: Add to Cart, ProductName, Quantity"
        );
        break;
      }
      const [productName, quantity] = args.map((str) => str.trim());
      const product = products.find(
        (p) => p.name.toLowerCase() === productName.toLowerCase()
      );
      if (product && product.available) {
        if (!Number.isInteger(parseInt(quantity)) || parseInt(quantity) <= 0) {
          console.log("Invalid quantity. Please enter a valid quantity.");
        } else {
          cart.addItem(product, parseInt(quantity));
          console.log(`Added ${quantity} ${productName}(s) to the cart.`);
        }
      } else {
        console.log(`Product ${productName} is not available.`);
      }
      break;
    case "update quantity":
      if (args.length !== 2) {
        console.log(
          "Invalid input. Please use the format: Update Quantity, ProductName, NewQuantity"
        );
        break;
      }
      const [updatedProductName, newQuantity] = args.map((str) => str.trim());
      const cartItem = cart.items.find(
        (item) =>
          item.product.name.toLowerCase() === updatedProductName.toLowerCase()
      );
      if (cartItem) {
        if (
          !Number.isInteger(parseInt(newQuantity)) ||
          parseInt(newQuantity) <= 0
        ) {
          console.log("Invalid quantity. Please enter a valid quantity.");
        } else {
          cart.updateQuantity(updatedProductName, parseInt(newQuantity));
          console.log(
            `Updated quantity of ${updatedProductName} to ${newQuantity}.`
          );
        }
      } else {
        console.log(`Product ${updatedProductName} is not in the cart.`);
      }
      break;
    case "remove from cart":
      if (args.length !== 1) {
        console.log(
          "Invalid input. Please use the format: Remove from Cart, ProductName"
        );
        break;
      }
      cart.removeItem(args[0]); // Use args[0] as the product name
      break;
    case "display cart":
      displayCart();
      break;
    case "exit":
      rl.close();
      break;
    default:
      console.log("Invalid command. Please try again.");
  }
}

module.exports = { handleUserInput };
