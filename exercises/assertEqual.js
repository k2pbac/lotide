// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    throw new Error(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`)
  }
};


module.exports = {
  assertEqual
};