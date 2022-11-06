// Exporting module
console.log('Exporting module');

export const shippingCost = 10;
export const cart = ['dfsd', 'dfsdfsdf'];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart.`);
};

const totalPrice = 237;
const totalQty = 6;

export { totalPrice, totalQty as qt };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart.`);
}
