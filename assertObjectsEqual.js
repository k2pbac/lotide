

const eqObjects = function(actual, expected) {

  let actualKeys = Object.keys(actual);

  if (Object.keys(expected).length === Object.keys(actual).length) {

    if (typeof actual === 'object' && typeof expected === 'object' && !Array.isArray(actual) && !Array.isArray(expected)) {
   
      for (let key of actualKeys) {
        if (Object.prototype.hasOwnProperty.call(expected, key)) {
          if (expected[key] !== actual[key] && !Array.isArray(expected[key]) && !Array.isArray(actual[key])) {
            return false;
          } else if (expected[key] !== actual[key] && Array.isArray(expected[key]) && Array.isArray(actual[key])) {
            for (let el of actual[key]) {
              if (!expected[key].includes(el)) {
                return false;
              }
            }
          }
        }
      }
      return true;
    } else {
      return false;
    }
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true




// console.log(assertObjectsEqual({person: "jim", age: 24}, {person: "jimmy", age: 23})); //Should fail

// console.log(assertObjectsEqual({apple: 3, orange: 4, banana: 5}, {apple: 3, orange: 4, banana: 5})); //Should pass