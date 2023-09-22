class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
  }

  updateQuantity(productName, newQuantity) {
    const itemIndex = this.items.findIndex(
      (item) => item.product.name.toLowerCase() === productName.toLowerCase()
    );
    if (itemIndex !== -1) {
      this.items[itemIndex].quantity = newQuantity;
    }
  }

  removeItem(productName) {
    const initialLength = this.items.length;
    this.items = this.items.filter(
      (item) => item.product.name.toLowerCase().trim() !== productName
    );
    if (initialLength === this.items.length) {
      console.log(`Product ${productName} not found in the cart.`);
    } else {
      console.log(`Removed ${productName} from the cart.`);
    }
  }

  calculateTotalBill(discountStrategy) {
    let total = 0;
    for (const item of this.items) {
      const { product, quantity } = item;
      total += product.price * quantity;
    }
    return discountStrategy.applyDiscount(total);
  }
}

module.exports = { Cart };
