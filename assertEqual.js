// Refactored code
// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected && typeof actual !== 'object' && typeof expected !== 'object') {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else if (typeof actual === 'object' && typeof expected === 'object' && !Array.isArray(actual) && !Array.isArray(expected)) {
//     for (let el in actual) {
//       if (actual[el] !== expected[el]) {
//         return console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
//       }
//     }
//     return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else if (typeof actual === 'object' && typeof expected === 'object' && Array.isArray(actual) && Array.isArray(expected)) {
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] !== expected[i]) {
//         return console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
//       }
//     }
//     return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };




// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);