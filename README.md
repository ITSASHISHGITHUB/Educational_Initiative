# E-commerce Cart System

This is a simple command-line e-commerce cart system built with Node.js. It allows users to interactively add products to a shopping cart, update quantities, remove items, and calculate the total bill with discounts.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Sample Products](#sample-products)
- [Discount Strategies](#discount-strategies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js installed on your computer.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ITSASHISHGITHUB/Educational_Initiative.git
   ```

2. Navigate to the project directory:

   ```bash
   cd e-commerce-cart
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

To run the e-commerce cart system, use the following command:

```bash
node app.js
```

Once the application is running, you can start entering commands (see [Commands](#commands)).

## Commands

The following commands are available:

- **Add to Cart**: Add a product to the cart. Format: `Add to Cart, ProductName, Quantity`
- **Update Quantity**: Update the quantity of a product in the cart. Format: `Update Quantity, ProductName, NewQuantity`
- **Remove from Cart**: Remove a product from the cart. Format: `Remove from Cart, ProductName`
- **Display Cart**: View the contents of the cart.
- **Exit**: Exit the application.

## Sample Products

The application includes some sample products that you can use for testing. You can customize these products by editing the `products` array in the `src/productData.js` file.

## Discount Strategies

Two discount strategies are available:

- **Percentage Discount**: This strategy applies a percentage discount to the total bill.
- **BOGO Discount (Buy One Get One)**: This strategy calculates the total bill with a buy-one-get-one discount for selected products.

You can customize the discount strategies by editing the `PercentageDiscountStrategy` and `BOGODiscountStrategy` classes in the `app.js` file.

## Contributing

Contributions are welcome! If you have any improvements or new features to suggest, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README to include additional information about your project or any specific usage instructions.
