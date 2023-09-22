const readline = require("readline");
const { products } = require("./src/productData");
const { formatter } = require("./src/utils/formatter");
const { handleUserInput } = require("./src/utils/inputParser");

// Initialize Cart and Discount Strategy

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to display cart contents and total bill

console.log("Welcome to the E-commerce Cart System!");
console.log("Available Products:");
for (const product of products) {
  console.log(
    `${product.name} - Price: ${formatter.format(
      product.price
    )} - Availability: ${product.available ? "Available" : "Not Available"}`
  );
}

console.log("Commands: ");
console.log('Add to Cart: "Add to Cart, ProductName, Quantity"');
console.log('Update Quantity: "Update Quantity, ProductName, NewQuantity"');
console.log('Remove from Cart: "Remove from Cart, ProductName"');
console.log('Display Cart: "Display Cart"');
console.log('Exit: "Exit"');

// Start taking user input
rl.setPrompt("Enter command: ");
rl.prompt();
rl.on("line", (input) => {
  handleUserInput(input);
  rl.prompt();
});

rl.on("close", () => {
  console.log("Thank you for using the E-commerce Cart System!");
});
