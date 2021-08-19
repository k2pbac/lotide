


const takeUntil = function(array, callback) {
  
  const results = [];

  if (Array.isArray(array) && array.length) {

    for (const el of array) {
      if (!callback(el)) results.push(el); else break;
    }

  }

  return results;

};


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

const assertArraysEqual = (actual, expected) => {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }

};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ]));