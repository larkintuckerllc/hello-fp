/* eslint-disable no-console */
const myArray = [1, 2, 3];

// IMPERATIVE
let total = 0;
for (let i = 0; i < myArray.length; i += 1) {
  const myArrayItem = myArray[i];
  if (myArrayItem % 2 !== 0) {
    total += myArrayItem;
  }
}
console.log(total);

// DECLARATIVE
console.log(myArray.reduce(
  (accumulator, currentValue) => (
    currentValue % 2 !== 0 ? accumulator + currentValue : accumulator
  ),
  0,
));
