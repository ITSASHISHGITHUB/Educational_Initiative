class PercentageDiscountStrategy {
  constructor(percentage) {
    this.percentage = percentage;
  }

  applyDiscount(price) {
    return price - (price * this.percentage) / 100;
  }
}

class BOGODiscountStrategy {
  applyDiscount(price, quantity) {
    return Math.ceil(quantity / 2) * price;
  }
}

module.exports = { PercentageDiscountStrategy, BOGODiscountStrategy };
