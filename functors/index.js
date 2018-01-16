/* eslint-disable no-console */

// REUSED CODE
const myFunction = x => x * 2;
const trace = (x) => {
  console.log(x);
  return x;
};

// ARRAY FUNCTOR
const myArray = [1, 2, 3];
myArray.map(trace); // 1 \n 2 \n 3
myArray.map(myFunction).map(trace); // 2 \n 4 \n 6

// CUSTOM FUNCTOR
const Identity = value => ({
  map: fn => Identity(fn(value)),
});
const myFunctor = Identity(1);
myFunctor.map(trace); // 1
myFunctor.map(myFunction).map(trace); // 2
