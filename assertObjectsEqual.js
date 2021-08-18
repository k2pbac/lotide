const exp = require('constants');

const eqObjects = function(actual, expected) {
  if (typeof actual === 'object' && typeof expected === 'object' && !Array.isArray(actual) && !Array.isArray(expected)) {
    for (let el in actual) {
      if (actual[el] !== expected[el]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

console.log(assertObjectsEqual({person: "jim", age: 24}, {person: "jimmy", age: 23})); //Should fail

console.log(assertObjectsEqual({apple: 3, orange: 4, banana: 5}, {apple: 3, orange: 4, banana: 5})); //Should pass