// Importing module

// import {
//   shippingCost,
//   cart,
//   addToCart,
//   totalPrice as price,
//   qt,
// } from './shoppingCart.js';

// console.log(shippingCost, cart);

// addToCart('Mobile', 1);
// console.log(price, qt);

console.log('Importing module');

// import * as all from './shoppingCart.js';
// all.addToCart('bread', 3);
// console.log(shippingCost);

import add, { cart } from './shoppingCart.js';
add('pizza', 3);
console.log(cart);

// console.log('Start');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');
/*
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// lastPost.then(res => console.log(res));
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
/*
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQty = 12;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart.`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier.`);
  };

  return {
    addToCart,
    cart,
    shippingCost,
    totalPrice,
    totalQty,
  };
})();

shoppingCart2.addToCart('pizza', 4);
*/

// Common JS
/*
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart.`);
};

// Import

const {addToCart} = require('./shoppingCart')*/

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const cloneDeepState = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(cloneDeepState);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const joel = new Person('Joel');

import 'core-js/stable/array/find';
import 'regenerator-runtime/runtime';
