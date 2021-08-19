



const eqArrays = (arr1, arr2) => {


  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i] && !Array.isArray(arr1[i]) && !Array.isArray(arr2[i])) {
        return false;
      } else if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        eqArrays(arr1[i], arr2[i]);
      }
    }
    return true;
  }
  return false;
};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const assertArraysEqual = (actual, expected) => {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.toUpperCase());
const results3 = map(words, word => word.split(''));

console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(results2, [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]));
console.log(assertArraysEqual(results3, [
  [ 'g', 'r', 'o', 'u', 'n', 'd' ],
  [
    'c', 'o', 'n',
    't', 'r', 'o',
    'l'
  ],
  [ 't', 'o' ],
  [ 'm', 'a', 'j', 'o', 'r' ],
  [ 't', 'o', 'm' ]
]));