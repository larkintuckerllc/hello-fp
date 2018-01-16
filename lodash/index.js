/* eslint-disable no-console */
const map = require('lodash/map');
const fpMap = require('lodash/fp/map');
const pipe = require('lodash/fp/pipe');
const compose = require('lodash/fp/compose');

const myArray = [1, 2, 3];
const myFunction = x => x * 2;
const myFunction2 = x => x + 1;

// LODASH TRADITIONAL
console.log(map(myArray, myFunction)); // [2, 4, 6]

// LODASH FUNCTIONAL PROGRAMMING
console.log(fpMap(myFunction)(myArray)); // [2, 4, 6]

// FUNCTIONS CALLED LEFT TO RIGHT
console.log(pipe([myFunction, myFunction2])(2)); // (2 * 2) + 1 = 5

// FUNCTIONS CALLED RIGHT TO LEFT
console.log(compose([myFunction, myFunction2])(2)); // (2 + 1) * 2 = 6
