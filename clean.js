'use strict';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.joel = 33;

const addExpense = function (state, limits, value, description, user) {
  if (!user) user = 'jonas';
  user = user.toLowerCase();

  let lim;
  if (spendingLimits[user]) {
    lim = spendingLimits[user];
  } else {
    lim = 0;
  }

  if (value <= lim) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
  for (var entry of budget) {
    let lim;

    const limit = spendingLimits[entry.user] ?? 0;
    if (entry.value < -limit) {
      entry.flag = 'limit';
    }
  }
};
checkExpenses();

console.log(budget);

const bigExpenses = function (limit) {
  let output = '';
  for (var el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
bigExpenses(1000);
