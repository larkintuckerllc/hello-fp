/* eslint-disable no-console */
/* eslint-disable  class-methods-use-this */

// FUNCTION
const myFunction = x => (x * 2) + 1;

// FUNCTION USAGE
console.log('function');
console.log(myFunction(1)); // (1 * 2) + 1 = 3
console.log(myFunction(2)); // (2 * 2) + 1 = 5

// OBJECT
const myObject = {
  base: 1,
  factor: 2,
  y(x) {
    return (x * this.factor) + this.base;
  },
};

// OBJECT USAGE
console.log('object');
console.log(myObject.y(1)); // (1 * 2) + 1 = 3
console.log(myObject.y(2)); // (2 * 2) + 1 = 5
myObject.base = 3;
console.log(myObject.y(1)); // (1 * 2) + 3 = 5
console.log(myObject.y(2)); // (2 * 2) + 3 = 7

// FACTORY FUNCTION
const myFactoryFunction = base => (factor) => {
  let myBase = base;
  let myFactor = factor;
  return ({
    setBase(value) {
      myBase = value;
    },
    setFactor(value) {
      myFactor = value;
    },
    y(x) {
      return (x * myFactor) + myBase;
    },
  });
};

// FACTORY FUNCTION USAGE
console.log('factor function');
const myFactoryObject1 = myFactoryFunction(1)(2);
console.log(myFactoryObject1.y(1)); // (1 * 2) + 1 = 3
console.log(myFactoryObject1.y(2)); // (2 * 2) + 1 = 5
myFactoryObject1.setBase(3);
console.log(myFactoryObject1.y(1)); // (1 * 2) + 3 = 5
console.log(myFactoryObject1.y(2)); // (2 * 2) + 3 = 7

// FACTORY FUNCTION USAGE
console.log('factor function');
const myFactoryObject2 = myFactoryFunction(2)(3);
console.log(myFactoryObject2.y(1)); // (1 * 3) + 2 = 5
console.log(myFactoryObject2.y(2)); // (2 * 3) + 2 = 8
myFactoryObject2.setBase(3);
console.log(myFactoryObject2.y(1)); // (1 * 3) + 3 = 6
console.log(myFactoryObject2.y(2)); // (2 * 3) + 3 = 9

// FUNCTIONAL MIXIN
const myFunctionalMixin = base => factor => (o) => {
  let myBase = base;
  let myFactor = factor;
  return Object.assign({}, o, {
    setBase(value) {
      myBase = value;
    },
    setFactor(value) {
      myFactor = value;
    },
    y(x) {
      return (x * myFactor) + myBase;
    },
  });
};
const objectA = {
  eat() {
    console.log('Eat an apple');
  },
};
const objectB = {
  drink() {
    console.log('drink a beverage');
  },
};

// FUNCTIONAL MIXIN USAGE
console.log('functional mixin');
const myFunctionalMixinObjectA1 = myFunctionalMixin(1)(2)(objectA);
myFunctionalMixinObjectA1.eat(); // Eat an apple
console.log(myFunctionalMixinObjectA1.y(1)); // (1 * 2) + 1 = 3
console.log(myFunctionalMixinObjectA1.y(2)); // (2 * 2) + 1 = 5
myFunctionalMixinObjectA1.setBase(3);
console.log(myFunctionalMixinObjectA1.y(1)); // (1 * 2) + 3 = 5
console.log(myFunctionalMixinObjectA1.y(2)); // (2 * 2) + 3 = 7

// FUNCTIONAL MIXIN USAGE
console.log('functional mixin');
const myFunctionalMixinObjectB2 = myFunctionalMixin(2)(3)(objectB);
myFunctionalMixinObjectB2.drink(); // Drink a beverage
console.log(myFunctionalMixinObjectB2.y(1)); // (1 * 3) + 2 = 5;
console.log(myFunctionalMixinObjectB2.y(2)); // (2 * 3) + 2 = 8;
myFunctionalMixinObjectB2.setBase(3);
console.log(myFunctionalMixinObjectB2.y(1)); // (1 * 3) + 3 = 6
console.log(myFunctionalMixinObjectB2.y(2)); // (2 * 3) + 3 = 9

// CLASS
class MyClass {
  constructor(base, factor) {
    this.base = base;
    this.factor = factor;
  }
  setBase(base) {
    this.base = base;
  }
  setFactor(factor) {
    this.factor = factor;
  }
  y(x) {
    return (x * this.factor) + this.base;
  }
}
class ClassA extends MyClass {
  eat() {
    console.log('Eat an apple');
  }
}
class ClassB extends MyClass {
  drink() {
    console.log('drink a beverage');
  }
}

// CLASS USAGE
console.log('class');
const myClassObjectA1 = new ClassA(1, 2);
myClassObjectA1.eat(); // Eat an apple
console.log(myClassObjectA1.y(1)); // (1 * 2) + 1 = 3
console.log(myClassObjectA1.y(2)); // (2 * 2) + 1 = 5
myClassObjectA1.setBase(3);
console.log(myClassObjectA1.y(1)); // (1 * 2) + 3 = 5
console.log(myClassObjectA1.y(2)); // (2 * 2) + 3 = 7

// CLASS USAGE
console.log('class');
const myClassObjectB2 = new ClassB(2, 3);
myClassObjectB2.drink(); // Drink a beverage
console.log(myClassObjectB2.y(1)); // (1 * 3) + 2 = 5
console.log(myClassObjectB2.y(2)); // (2 * 3) + 2 = 8
myClassObjectB2.setBase(3);
console.log(myClassObjectB2.y(1)); // (1 * 3) + 3 = 6
console.log(myClassObjectB2.y(2)); // (2 * 3) + 3 = 9
