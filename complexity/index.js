/* eslint-disable no-console */
/* eslint-disable  class-methods-use-this */

// PURE FUNCTION
const myPureFunction = x => (x * 2) + 1;

// PURE FUNCTION USAGE
console.log('function');
console.log(myPureFunction(1)); // (1 * 2) + 1 = 3
console.log(myPureFunction(2)); // (2 * 2) + 1 = 5

// OBJECT
const myObject = {
  intercept: 1,
  slope: 2,
  y(x) {
    return (x * this.slope) + this.intercept;
  },
};

// OBJECT USAGE
console.log('object');
console.log(myObject.y(1)); // (1 * 2) + 1 = 3
console.log(myObject.y(2)); // (2 * 2) + 1 = 5
myObject.intercept = 3;
myObject.slope = 4;
console.log(myObject.y(1)); // (1 * 4) + 3 = 7
console.log(myObject.y(2)); // (2 * 4) + 3 = 11

// FACTORY
const myFactory = ({ slope = 2, intercept = 1 } = { slope: 2, intercept: 1 }) => {
  let myIntercept = intercept;
  let mySlope = slope;
  return ({
    setIntercept(value) {
      myIntercept = value;
      return this;
    },
    setSlope(value) {
      mySlope = value;
      return this;
    },
    y(x) {
      return (x * mySlope) + myIntercept;
    },
  });
};

// FACTORY USAGE
console.log('slope function');
const myFactoryObjectA = myFactory();
console.log(myFactoryObjectA.y(1)); // (1 * 2) + 1 = 3
console.log(myFactoryObjectA.y(2)); // (2 * 2) + 1 = 5
myFactoryObjectA.setIntercept(3).setSlope(4);
console.log(myFactoryObjectA.y(1)); // (1 * 4) + 3 = 7
console.log(myFactoryObjectA.y(2)); // (2 * 4) + 3 = 11

// FACTORY USAGE
console.log('slope function');
const myFactoryObjectB = myFactory({ slope: 3, intercept: 2 });
console.log(myFactoryObjectB.y(1)); // (1 * 3) + 2 = 5
console.log(myFactoryObjectB.y(2)); // (2 * 3) + 2 = 8
myFactoryObjectB.setIntercept(3).setSlope(4);
console.log(myFactoryObjectB.y(1)); // (1 * 4) + 3 = 7
console.log(myFactoryObjectB.y(2)); // (2 * 4) + 3 = 11

// FUNCTIONAL MIXIN
const myFunctionalMixin = ({ slope = 2, intercept = 1 } = { slope: 2, intercept: 1 }) => (o) => {
  let myIntercept = intercept;
  let mySlope = slope;
  return Object.assign({}, o, {
    setIntercept(value) {
      myIntercept = value;
      return this;
    },
    setSlope(value) {
      mySlope = value;
      return this;
    },
    y(x) {
      return (x * mySlope) + myIntercept;
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
const myFunctionalMixinObjectA = myFunctionalMixin()(objectA);
myFunctionalMixinObjectA.eat(); // Eat an apple
console.log(myFunctionalMixinObjectA.y(1)); // (1 * 2) + 1 = 3
console.log(myFunctionalMixinObjectA.y(2)); // (2 * 2) + 1 = 5
myFunctionalMixinObjectA.setIntercept(3).setSlope(4);
console.log(myFunctionalMixinObjectA.y(1)); // (1 * 4) + 3 = 7
console.log(myFunctionalMixinObjectA.y(2)); // (2 * 4) + 3 = 11

// FUNCTIONAL MIXIN USAGE
console.log('functional mixin');
const myFunctionalMixinObjectB = myFunctionalMixin({ slope: 3, intercept: 2 })(objectB);
myFunctionalMixinObjectB.drink(); // Drink a beverage
console.log(myFunctionalMixinObjectB.y(1)); // (1 * 3) + 2 = 5;
console.log(myFunctionalMixinObjectB.y(2)); // (2 * 3) + 2 = 8;
myFunctionalMixinObjectB.setIntercept(3).setSlope(4);
console.log(myFunctionalMixinObjectB.y(1)); // (1 * 4) + 3 = 7
console.log(myFunctionalMixinObjectB.y(2)); // (2 * 4) + 3 = 11

// CLASS
class MyClass {
  constructor({ slope = 2, intercept = 1 } = { slope: 2, intercept: 1 }) {
    this.intercept = intercept;
    this.slope = slope;
  }
  setIntercept(intercept) {
    this.intercept = intercept;
    return this;
  }
  setSlope(slope) {
    this.slope = slope;
    return this;
  }
  y(x) {
    return (x * this.slope) + this.intercept;
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
const myClassObjectA = new ClassA();
myClassObjectA.eat(); // Eat an apple
console.log(myClassObjectA.y(1)); // (1 * 2) + 1 = 3
console.log(myClassObjectA.y(2)); // (2 * 2) + 1 = 5
myClassObjectA.setIntercept(3).setSlope(4);
console.log(myClassObjectA.y(1)); // (1 * 4) + 3 = 7
console.log(myClassObjectA.y(2)); // (2 * 4) + 3 = 11

// CLASS USAGE
console.log('class');
const myClassObjectB = new ClassB({ slope: 3, intercept: 2 });
myClassObjectB.drink(); // Drink a beverage
console.log(myClassObjectB.y(1)); // (1 * 3) + 2 = 5
console.log(myClassObjectB.y(2)); // (2 * 3) + 2 = 8
myClassObjectB.setIntercept(3).setSlope(4);
console.log(myClassObjectB.y(1)); // (1 * 4) + 3 = 7
console.log(myClassObjectB.y(2)); // (2 * 4) + 3 = 11
