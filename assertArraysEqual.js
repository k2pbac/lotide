// FUNCTION IMPLEMENTATION
// const eqArrays = function(actual, expected) {
//   if (actual === expected && typeof actual !== 'object' && typeof expected !== 'object') {
//     return true;
//   } else if (typeof actual === 'object' && typeof expected === 'object' && !Array.isArray(actual) && !Array.isArray(expected)) {
//     for (let el in actual) {
//       if (actual[el] !== expected[el]) {
//         return false;
//       }
//     }
//     return true;
//   } else if (typeof actual === 'object' && typeof expected === 'object' && Array.isArray(actual) && Array.isArray(expected)) {
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] !== expected[i]) {
//         return false;
//       }
//     }
//     return true;
//   } else {
//     return false;
//   }
// };





const eqArrays = (arr1, arr2) => {


  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`Sorry these arrays don't match at index ${i}`);
        return false;
      } else {
        console.log(`Both value and type are the same at index ${i}`);
      }
    }
    return true;
  }

  return false;
};


const assertArraysEqual = (actual, expected) => {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }

};

console.log(assertArraysEqual([1,2,3], ['1',2,3]));
// console.log(assertArraysEqual([1,2,3], [1,2,3]));

// console.log(assertArraysEqual([1,2,3], [3,2,1]));
// console.log(assertArraysEqual(['2',2,3], ['1',{hello: 1, bye: 2},3]));

